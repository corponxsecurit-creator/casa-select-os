import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

import {
  INITIAL_PROPERTIES,
  INITIAL_REVENUES,
  INITIAL_EXPENSES,
  INITIAL_BOOKINGS,
  INITIAL_ASSETS,
  INITIAL_MAINTENANCES
} from "../src/data/initialData";
import {
  Property, Revenue, Expense, Booking, Asset, Maintenance,
  ExpenseCategory, PropertyOrigin, BookingStatus, MaintenanceStatus,
  MaintenanceType, AssetCategory, Supplier, Document
} from "../src/types";

let properties: Property[] = [...INITIAL_PROPERTIES];
let revenues: Revenue[] = [...INITIAL_REVENUES];
let expenses: Expense[] = [...INITIAL_EXPENSES];
let bookings: Booking[] = [...INITIAL_BOOKINGS];
let assets: Asset[] = [...INITIAL_ASSETS];
let maintenances: Maintenance[] = [...INITIAL_MAINTENANCES];

let suppliers: Supplier[] = [
  { id: "sup-1", name: "AcquaClean Pools", specialty: "Piscineiro Técnico Especializado", contactName: "João Piscineiro", phone: "(11) 98012-9021", email: "joao@acquaclean.com" },
  { id: "sup-2", name: "Dona Maria Zeladoria", specialty: "Limpeza Profunda de Aluguel de Temporada", contactName: "Maria Helena", phone: "(12) 99824-1102", email: "maria@zeladoria.com" },
  { id: "sup-3", name: "ClimaMax Refrigeração", specialty: "Ar-Condicionados e Climatização Preventiva", contactName: "Carlos Silveira", phone: "(24) 98801-4412", email: "carlos@climamax.com" }
];

let documents: Document[] = [
  { id: "doc-1", name: "Regulamento_Interno_Villa_Lilian.pdf", type: "Regulamento", description: "Manual de Conduta de Lazer", date: "2026-06-01", fileSize: "1.2 MB" },
  { id: "doc-2", name: "Contrato_Boutique_Itaú_XP_Corporate.pdf", type: "Contrato", description: "Acordo de Aluguel Anual", date: "2026-05-15", fileSize: "2.4 MB" }
];

let alerts = [
  { id: "alert-1", propertyId: "casa-mayla", type: "warning", title: "Manutenção de Piscina Pendente", message: "A desinfecção periódica da Casa Mayla expira em 2 dias.", date: "2026-06-06" },
  { id: "alert-2", propertyId: "casa-lilian", type: "info", title: "Ar-Condicionado Próximo", message: "Revisão agendada para 10/06 para garantir a climatização ideal.", date: "2026-06-05" }
];

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") return null;
  if (!aiClient) aiClient = new GoogleGenAI({ apiKey });
  return aiClient;
}

const app = express();
app.use(express.json({ limit: "25mb" }));

// ─── PROPERTIES ────────────────────────────────────────────────────────────
app.get("/api/properties", (req, res) => res.json(properties));
app.post("/api/properties", (req, res) => {
  const p: Property = { id: req.body.id || `prop-${Date.now()}`, name: req.body.name, location: req.body.location || "Brasil", description: req.body.description || "", image: req.body.image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", stars: 5.0, rooms: Number(req.body.rooms) || 3, sizeSqM: Number(req.body.sizeSqM) || 120 };
  properties.push(p); res.status(201).json(p);
});
app.put("/api/properties/:id", (req, res) => {
  const i = properties.findIndex(p => p.id === req.params.id);
  if (i !== -1) { properties[i] = { ...properties[i], ...req.body, rooms: Number(req.body.rooms ?? properties[i].rooms), sizeSqM: Number(req.body.sizeSqM ?? properties[i].sizeSqM) }; res.json(properties[i]); }
  else res.status(404).json({ error: "Not found" });
});
app.delete("/api/properties/:id", (req, res) => {
  const id = req.params.id;
  properties = properties.filter(p => p.id !== id);
  revenues = revenues.filter(r => r.propertyId !== id);
  expenses = expenses.filter(e => e.propertyId !== id);
  bookings = bookings.filter(b => b.propertyId !== id);
  assets = assets.filter(a => a.propertyId !== id);
  maintenances = maintenances.filter(m => m.propertyId !== id);
  res.json({ success: true });
});

// ─── REVENUES ──────────────────────────────────────────────────────────────
app.get("/api/revenues", (req, res) => res.json(revenues));
app.post("/api/revenues", (req, res) => { const r: Revenue = { id: `rev-${Date.now()}`, propertyId: req.body.propertyId, origin: req.body.origin as PropertyOrigin, value: Number(req.body.value), taxes: Number(req.body.taxes || 0), date: req.body.date, description: req.body.description || "" }; revenues.push(r); res.status(201).json(r); });
app.put("/api/revenues/:id", (req, res) => { const i = revenues.findIndex(r => r.id === req.params.id); if (i !== -1) { revenues[i] = { ...revenues[i], ...req.body, value: Number(req.body.value), taxes: Number(req.body.taxes || 0) }; res.json(revenues[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/revenues/:id", (req, res) => { revenues = revenues.filter(r => r.id !== req.params.id); res.json({ success: true }); });

// ─── EXPENSES ──────────────────────────────────────────────────────────────
app.get("/api/expenses", (req, res) => res.json(expenses));
app.post("/api/expenses", (req, res) => { const e: Expense = { id: `exp-${Date.now()}`, propertyId: req.body.propertyId, category: req.body.category as ExpenseCategory, supplier: req.body.supplier || "Diversos", date: req.body.date, value: Number(req.body.value), paymentMethod: req.body.paymentMethod || "Pix", description: req.body.description || "" }; expenses.push(e); res.status(201).json(e); });
app.put("/api/expenses/:id", (req, res) => { const i = expenses.findIndex(e => e.id === req.params.id); if (i !== -1) { expenses[i] = { ...expenses[i], ...req.body, value: Number(req.body.value) }; res.json(expenses[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/expenses/:id", (req, res) => { expenses = expenses.filter(e => e.id !== req.params.id); res.json({ success: true }); });

// ─── BOOKINGS ──────────────────────────────────────────────────────────────
app.get("/api/bookings", (req, res) => res.json(bookings));
app.post("/api/bookings", (req, res) => { const b: Booking = { id: `bk-${Date.now()}`, propertyId: req.body.propertyId, guestName: req.body.guestName, phone: req.body.phone || "", origin: req.body.origin as PropertyOrigin, checkIn: req.body.checkIn, checkOut: req.body.checkOut, value: Number(req.body.value), commission: Number(req.body.commission || 0), status: req.body.status as BookingStatus || BookingStatus.CONFIRMADA, notes: req.body.notes || "" }; bookings.push(b); res.status(201).json(b); });
app.put("/api/bookings/:id", (req, res) => { const i = bookings.findIndex(b => b.id === req.params.id); if (i !== -1) { bookings[i] = { ...bookings[i], ...req.body, value: Number(req.body.value), commission: Number(req.body.commission || 0) }; res.json(bookings[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/bookings/:id", (req, res) => { bookings = bookings.filter(b => b.id !== req.params.id); res.json({ success: true }); });

// ─── ASSETS ────────────────────────────────────────────────────────────────
app.get("/api/assets", (req, res) => res.json(assets));
app.post("/api/assets", (req, res) => { const a: Asset = { id: `ast-${Date.now()}`, propertyId: req.body.propertyId, name: req.body.name, category: req.body.category as AssetCategory, value: Number(req.body.value), purchaseDate: req.body.purchaseDate, warrantyUntil: req.body.warrantyUntil, lifeSpanYears: Number(req.body.lifeSpanYears || 5), location: req.body.location || "", invoiceNumber: req.body.invoiceNumber || "" }; assets.push(a); res.status(201).json(a); });
app.put("/api/assets/:id", (req, res) => { const i = assets.findIndex(a => a.id === req.params.id); if (i !== -1) { assets[i] = { ...assets[i], ...req.body, value: Number(req.body.value) }; res.json(assets[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/assets/:id", (req, res) => { assets = assets.filter(a => a.id !== req.params.id); res.json({ success: true }); });

// ─── MAINTENANCES ──────────────────────────────────────────────────────────
app.get("/api/maintenances", (req, res) => res.json(maintenances));
app.post("/api/maintenances", (req, res) => { const m: Maintenance = { id: `maint-${Date.now()}`, propertyId: req.body.propertyId, title: req.body.title, type: req.body.type as MaintenanceType, status: req.body.status as MaintenanceStatus || MaintenanceStatus.AGENDADA, date: req.body.date, cost: Number(req.body.cost || 0), notes: req.body.notes || "" }; maintenances.push(m); res.status(201).json(m); });
app.put("/api/maintenances/:id", (req, res) => { const i = maintenances.findIndex(m => m.id === req.params.id); if (i !== -1) { maintenances[i] = { ...maintenances[i], ...req.body, cost: Number(req.body.cost || 0) }; res.json(maintenances[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/maintenances/:id", (req, res) => { maintenances = maintenances.filter(m => m.id !== req.params.id); res.json({ success: true }); });

// ─── SUPPLIERS ─────────────────────────────────────────────────────────────
app.get("/api/suppliers", (req, res) => res.json(suppliers));
app.post("/api/suppliers", (req, res) => { const s: Supplier = { id: `sup-${Date.now()}`, name: req.body.name, specialty: req.body.specialty || "Diversos", contactName: req.body.contactName || "", phone: req.body.phone || "", email: req.body.email || "" }; suppliers.push(s); res.status(201).json(s); });
app.put("/api/suppliers/:id", (req, res) => { const i = suppliers.findIndex(s => s.id === req.params.id); if (i !== -1) { suppliers[i] = { ...suppliers[i], ...req.body }; res.json(suppliers[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/suppliers/:id", (req, res) => { suppliers = suppliers.filter(s => s.id !== req.params.id); res.json({ success: true }); });

// ─── DOCUMENTS ─────────────────────────────────────────────────────────────
app.get("/api/documents", (req, res) => res.json(documents));
app.post("/api/documents", (req, res) => { const d: Document = { id: `doc-${Date.now()}`, name: req.body.name, type: req.body.type || "Outros", description: req.body.description || "", date: req.body.date || new Date().toISOString().split("T")[0], fileSize: req.body.fileSize || "1.0 MB", fileUrl: req.body.fileUrl || "" }; documents.push(d); res.status(201).json(d); });
app.put("/api/documents/:id", (req, res) => { const i = documents.findIndex(d => d.id === req.params.id); if (i !== -1) { documents[i] = { ...documents[i], ...req.body }; res.json(documents[i]); } else res.status(404).json({ error: "Not found" }); });
app.delete("/api/documents/:id", (req, res) => { documents = documents.filter(d => d.id !== req.params.id); res.json({ success: true }); });

// ─── ALERTS ────────────────────────────────────────────────────────────────
app.get("/api/alerts", (req, res) => res.json(alerts));

// ─── AI CHAT ───────────────────────────────────────────────────────────────
app.post("/api/ai/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: "Mensagens inválidas" });
  const lastMessage = messages[messages.length - 1]?.text || "Olá";
  const totalRevs = revenues.reduce((s, r) => s + r.value, 0);
  const totalExps = expenses.reduce((s, e) => s + e.value, 0);
  const ctx = `Receitas: R$ ${totalRevs.toFixed(2)}, Despesas: R$ ${totalExps.toFixed(2)}, Lucro: R$ ${(totalRevs - totalExps).toFixed(2)}`;
  try {
    const client = getGenAI();
    if (!client) return res.json({ text: `Kobayashi Sensei aqui. ${ctx}. Como posso ajudar?` });
    const r = await client.models.generateContent({ model: "gemini-2.0-flash", contents: `${ctx}\n${lastMessage}` });
    res.json({ text: r.text || "Não consegui processar." });
  } catch (e) {
    res.json({ text: `Portfólio atual: ${ctx}` });
  }
});

// ─── FORECAST ──────────────────────────────────────────────────────────────
app.get("/api/ai/forecast", (req, res) => {
  const months = ["Jun", "Jul", "Ago", "Set", "Out", "Nov"];
  const base = revenues.reduce((s, r) => s + r.value, 0) / 6;
  const expBase = expenses.reduce((s, e) => s + e.value, 0) / 6;
  res.json(months.map((month, i) => ({ month, revenue: Math.round(base * (1 + i * 0.02)), expense: Math.round(expBase * (1 - i * 0.015)), profit: Math.round(base * (1 + i * 0.02) - expBase * (1 - i * 0.015)), occupancy: Math.round((78.5 + i * 0.8) * 10) / 10 })));
});

// ─── WHATSAPP ──────────────────────────────────────────────────────────────
app.post("/api/whatsapp/send", (req, res) => {
  res.json({ success: true, message: "Configurado para envio via WhatsApp Web." });
});

// ─── SERVE STATIC FRONTEND ─────────────────────────────────────────────────
app.use(express.static(path.join(process.cwd(), "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

// Export for Vercel serverless — do NOT call app.listen()
export default app;
