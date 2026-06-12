import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

enum PropertyOrigin { AIRBNB = 'Airbnb', BOOKING = 'Booking', CONTRATO = 'Contrato', TEMPORADA = 'Temporada', LOCACAO_DIRETA = 'Locação Direta', OUTROS = 'Outros' }
enum ExpenseCategory { MANUTENCAO = 'Manutenção', PISCINA = 'Piscina', LIMPEZA = 'Limpeza', FUNCIONARIOS = 'Funcionários', INTERNET = 'Internet', AGUA = 'Água', ENERGIA = 'Energia', JARDINAGEM = 'Jardinagem', ALIMENTACAO = 'Alimentação', MOVEIS = 'Móveis', UTENSILIOS = 'Utensílios', ELETRONICOS = 'Eletrônicos', COMISSOES = 'Comissões', TAXAS = 'Taxas', IMPOSTOS = 'Impostos', OUTROS = 'Outros' }
enum BookingStatus { CONFIRMADA = 'Confirmada', PENDENTE = 'Pendente', CONCLUIDA = 'Concluída', CANCELADA = 'Cancelada' }
enum AssetCategory { MOVEIS = 'Móveis', ELETRONICOS = 'Eletrônicos', ELETRODOMESTICOS = 'Eletrodomésticos', EQUIPAMENTOS = 'Equipamentos', PISCINA = 'Piscina', JARDIM = 'Jardim', AR_CONDICIONADO = 'Ar-condicionado' }
enum MaintenanceType { PREVENTIVA = 'Preventiva', CORRETIVA = 'Corretiva', EMERGENCIAL = 'Emergencial' }
enum MaintenanceStatus { AGENDADA = 'Agendada', EM_ANDAMENTO = 'Em Andamento', CONCLUIDA = 'Concluída' }

interface Property { id: string; name: string; location: string; description: string; image?: string; stars?: number; rooms?: number; sizeSqM?: number; }
interface Revenue { id: string; propertyId: string; origin: PropertyOrigin; value: number; taxes: number; date: string; description: string; attachment?: string; }
interface Expense { id: string; propertyId: string; category: ExpenseCategory; supplier: string; date: string; value: number; receipt?: string; paymentMethod: string; description: string; }
interface Booking { id: string; propertyId: string; guestName: string; origin: PropertyOrigin; checkIn: string; checkOut: string; value: number; commission: number; status: BookingStatus; phone?: string; documents?: string[]; notes?: string; }
interface Asset { id: string; propertyId: string; name: string; category: AssetCategory; value: number; purchaseDate: string; warrantyUntil?: string; lifeSpanYears?: number; location?: string; photoUrl?: string; invoiceNumber?: string; }
interface Maintenance { id: string; propertyId: string; title: string; type: MaintenanceType; status: MaintenanceStatus; date: string; cost: number; notes?: string; }
interface SystemAlert { id: string; propertyId?: string; type: "warning" | "info" | "success" | "danger"; title: string; message: string; date: string; }
interface Supplier { id: string; name: string; specialty: string; contactName: string; phone: string; email?: string; }
interface Document { id: string; name: string; type: string; description: string; date: string; fileSize?: string; fileUrl?: string; }

let properties: Property[] = [
  { id: "casa-lilian", name: "Casa Lilian", location: "São Sebastião, SP", description: "Mansão espetacular com vista para o mar", image: "/assets/casa-lilian.png", stars: 4.9, rooms: 5, sizeSqM: 450 },
  { id: "casa-nova", name: "Casa Nova", location: "Trancoso, BA", description: "Arquitetura contemporânea com decoração minimalista", image: "/assets/casa-nova.png", stars: 4.8, rooms: 4, sizeSqM: 380 },
  { id: "casa-mayla", name: "Casa Mayla", location: "Ipojuca, PE", description: "Bangalô pé na areia", image: "/assets/casa-mayla.png", stars: 4.95, rooms: 6, sizeSqM: 520 }
];
let revenues: Revenue[] = [];
let expenses: Expense[] = [];
let bookings: Booking[] = [];
let assets: Asset[] = [];
let maintenances: Maintenance[] = [];

let suppliers: Supplier[] = [
  { id: "sup-1", name: "AcquaClean Pools", specialty: "Piscineiro Técnico Especializado", contactName: "João Piscineiro", phone: "(11) 98012-9021", email: "joao@acquaclean.com" }
];

let documents: Document[] = [
  { id: "doc-1", name: "Regulamento_Interno_Villa_Lilian.pdf", type: "Regulamento", description: "Manual de Conduta de Lazer", date: "2026-06-01", fileSize: "1.2 MB" }
];

let alerts = [
  { id: "alert-1", propertyId: "casa-mayla", type: "warning", title: "Manutenção de Piscina Pendente", message: "A desinfecção periódica expira em 2 dias.", date: "2026-06-06" }
];

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") return null;
  if (!aiClient) aiClient = new GoogleGenAI({ apiKey, httpOptions: { headers: { 'User-Agent': "aistudio-build" } } });
  return aiClient;
}

const app = express();
app.use(express.json({ limit: "25mb" }));

app.get("/api/properties", (req, res) => res.json(properties));
app.post("/api/properties", (req, res) => {
  const newProperty: Property = {
    id: req.body.id || `prop-${Date.now()}`, name: req.body.name, location: req.body.location || "Brasil", description: req.body.description || "", image: req.body.image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", stars: 5.0, rooms: Number(req.body.rooms) || 3, sizeSqM: Number(req.body.sizeSqM) || 120
  };
  properties.push(newProperty);
  res.status(201).json(newProperty);
});
app.put("/api/properties/:id", (req, res) => {
  const i = properties.findIndex(p => p.id === req.params.id);
  if (i !== -1) { properties[i] = { ...properties[i], ...req.body, rooms: Number(req.body.rooms ?? properties[i].rooms), sizeSqM: Number(req.body.sizeSqM ?? properties[i].sizeSqM) }; res.json(properties[i]); }
  else res.status(404).json({ error: "Not found" });
});
app.delete("/api/properties/:id", (req, res) => {
  properties = properties.filter(p => p.id !== req.params.id);
  res.json({ success: true });
});

app.get("/api/revenues", (req, res) => res.json(revenues));
app.get("/api/expenses", (req, res) => res.json(expenses));
app.get("/api/bookings", (req, res) => res.json(bookings));
app.get("/api/assets", (req, res) => res.json(assets));
app.get("/api/maintenances", (req, res) => res.json(maintenances));
app.get("/api/suppliers", (req, res) => res.json(suppliers));
app.get("/api/documents", (req, res) => res.json(documents));
app.get("/api/alerts", (req, res) => res.json(alerts));
app.get("/api/ai/forecast", (req, res) => res.json([{ month: "Jun", revenue: 10000, expense: 2000, profit: 8000, occupancy: 85 }]));

app.post("/api/ai/chat", (req, res) => res.json({ text: "Simulação de resposta da IA." }));
app.post("/api/ai/ocr", (req, res) => res.json({ value: 850.00, date: "2026-06-03", supplier: "FrioMax", category: ExpenseCategory.MANUTENCAO, propertyId: "casa-lilian", description: "Recarga de gás" }));

export default app;
