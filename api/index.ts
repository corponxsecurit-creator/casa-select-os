import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dns from "dns";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

import { Property, Revenue, Expense, Booking, Asset, Maintenance, ExpenseCategory } from "../src/types";
import { 
  INITIAL_PROPERTIES, 
  INITIAL_REVENUES, 
  INITIAL_EXPENSES, 
  INITIAL_BOOKINGS, 
  INITIAL_ASSETS, 
  INITIAL_MAINTENANCES 
} from "./initialData";

dns.setDefaultResultOrder("ipv4first");

let properties: Property[] = [...INITIAL_PROPERTIES];
let revenues: Revenue[] = [...INITIAL_REVENUES];
let expenses: Expense[] = [...INITIAL_EXPENSES];
let bookings: Booking[] = [...INITIAL_BOOKINGS];
let assets: Asset[] = [...INITIAL_ASSETS];
let maintenances: Maintenance[] = [...INITIAL_MAINTENANCES];

let suppliers = [
  { id: "sup-1", name: "AcquaClean Pools", specialty: "Piscineiro Técnico Especializado", contactName: "João Piscineiro", phone: "(11) 98012-9021", email: "joao@acquaclean.com" }
];

let documents = [
  { id: "doc-1", name: "Regulamento_Interno_Villa_Lilian.pdf", type: "Regulamento", description: "Manual de Conduta de Lazer", date: "2026-06-01", fileSize: "1.2 MB" }
];

let alerts = [
  { id: "alert-1", propertyId: "casa-mayla", type: "warning", title: "Manutenção de Piscina Pendente", message: "A desinfecção periódica expira em 2 dias.", date: "2026-06-06" }
];

interface User { id: string; name: string; username: string; password?: string; role: 'admin' | 'user'; }

let users: User[] = [
  { id: "u1", name: "Administrador", username: "admin", password: "admin123", role: "admin" },
  { id: "u2", name: "Hugo Kobayashi", username: "hugo", password: "mudar123", role: "user" },
  { id: "u3", name: "Katia Farah", username: "katia", password: "mudar123", role: "user" },
  { id: "u4", name: "Mariana Nina", username: "mariana", password: "mudar123", role: "user" },
  { id: "u5", name: "Rubens Bossi", username: "rubens", password: "mudar123", role: "user" },
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

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: "Credenciais inválidas" });
  }
});

app.put("/api/users/:id/password", (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;
  const user = users.find(u => u.id === id);
  if (user) {
    user.password = newPassword;
    res.json(user);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

export default app;
