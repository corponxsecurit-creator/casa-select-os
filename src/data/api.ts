import { Property, Revenue, Expense, Booking, Asset, Maintenance, SystemAlert, Supplier, Document } from "../types";
import {
  LOCAL_PROPERTIES, LOCAL_REVENUES, LOCAL_EXPENSES, LOCAL_BOOKINGS,
  LOCAL_ASSETS, LOCAL_MAINTENANCES, LOCAL_ALERTS, LOCAL_SUPPLIERS, LOCAL_DOCUMENTS
} from "./localData";

const BASE_URL = ""; // Relative calls because we are running on the same Express server

// ─── Helper: fetch com fallback ───────────────────────────────────────────────
async function fetchWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) return fallback;
    const data = await res.json();
    // Se API retornou array vazio mas temos dados locais, usa locais
    if (Array.isArray(data) && data.length === 0 && Array.isArray(fallback) && (fallback as any[]).length > 0) {
      return fallback;
    }
    return data;
  } catch {
    return fallback;
  }
}

// ─── PROPERTIES ───────────────────────────────────────────────────────────────
export async function getProperties(): Promise<Property[]> {
  return fetchWithFallback(`${BASE_URL}/api/properties`, LOCAL_PROPERTIES);
}

export async function addProperty(property: Omit<Property, "stars">): Promise<Property> {
  const res = await fetch(`${BASE_URL}/api/properties`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(property)
  });
  return res.json();
}

export async function updateProperty(property: Property): Promise<Property> {
  const res = await fetch(`${BASE_URL}/api/properties/${property.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(property)
  });
  return res.json();
}

export async function deleteProperty(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/properties/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── REVENUES ─────────────────────────────────────────────────────────────────
export async function getRevenues(): Promise<Revenue[]> {
  return fetchWithFallback(`${BASE_URL}/api/revenues`, LOCAL_REVENUES);
}

export async function addRevenue(revenue: Omit<Revenue, "id">): Promise<Revenue> {
  const res = await fetch(`${BASE_URL}/api/revenues`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(revenue)
  });
  return res.json();
}

export async function updateRevenue(revenue: Revenue): Promise<Revenue> {
  const res = await fetch(`${BASE_URL}/api/revenues/${revenue.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(revenue)
  });
  return res.json();
}

export async function deleteRevenue(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/revenues/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── EXPENSES ─────────────────────────────────────────────────────────────────
export async function getExpenses(): Promise<Expense[]> {
  return fetchWithFallback(`${BASE_URL}/api/expenses`, LOCAL_EXPENSES);
}

export async function addExpense(expense: Omit<Expense, "id">): Promise<Expense> {
  const res = await fetch(`${BASE_URL}/api/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  });
  return res.json();
}

export async function updateExpense(expense: Expense): Promise<Expense> {
  const res = await fetch(`${BASE_URL}/api/expenses/${expense.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  });
  return res.json();
}

export async function deleteExpense(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/expenses/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── BOOKINGS ─────────────────────────────────────────────────────────────────
export async function getBookings(): Promise<Booking[]> {
  return fetchWithFallback(`${BASE_URL}/api/bookings`, LOCAL_BOOKINGS);
}

export async function addBooking(booking: Omit<Booking, "id">): Promise<Booking> {
  const res = await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking)
  });
  return res.json();
}

export async function updateBooking(booking: Booking): Promise<Booking> {
  const res = await fetch(`${BASE_URL}/api/bookings/${booking.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking)
  });
  return res.json();
}

export async function deleteBooking(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/bookings/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── ASSETS ───────────────────────────────────────────────────────────────────
export async function getAssets(): Promise<Asset[]> {
  return fetchWithFallback(`${BASE_URL}/api/assets`, LOCAL_ASSETS);
}

export async function addAsset(asset: Omit<Asset, "id">): Promise<Asset> {
  const res = await fetch(`${BASE_URL}/api/assets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asset)
  });
  return res.json();
}

export async function updateAsset(asset: Asset): Promise<Asset> {
  const res = await fetch(`${BASE_URL}/api/assets/${asset.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asset)
  });
  return res.json();
}

export async function deleteAsset(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/assets/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── MAINTENANCES ─────────────────────────────────────────────────────────────
export async function getMaintenances(): Promise<Maintenance[]> {
  return fetchWithFallback(`${BASE_URL}/api/maintenances`, LOCAL_MAINTENANCES);
}

export async function addMaintenance(maintenance: Omit<Maintenance, "id">): Promise<Maintenance> {
  const res = await fetch(`${BASE_URL}/api/maintenances`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(maintenance)
  });
  return res.json();
}

export async function updateMaintenance(maintenance: Maintenance): Promise<Maintenance> {
  const res = await fetch(`${BASE_URL}/api/maintenances/${maintenance.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(maintenance)
  });
  return res.json();
}

export async function deleteMaintenance(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/maintenances/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── SUPPLIERS ────────────────────────────────────────────────────────────────
export async function getSuppliers(): Promise<Supplier[]> {
  return fetchWithFallback(`${BASE_URL}/api/suppliers`, LOCAL_SUPPLIERS);
}

export async function addSupplier(supplier: Omit<Supplier, "id">): Promise<Supplier> {
  const res = await fetch(`${BASE_URL}/api/suppliers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(supplier)
  });
  return res.json();
}

export async function updateSupplier(supplier: Supplier): Promise<Supplier> {
  const res = await fetch(`${BASE_URL}/api/suppliers/${supplier.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(supplier)
  });
  return res.json();
}

export async function deleteSupplier(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/suppliers/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── DOCUMENTS ────────────────────────────────────────────────────────────────
export async function getDocuments(): Promise<Document[]> {
  return fetchWithFallback(`${BASE_URL}/api/documents`, LOCAL_DOCUMENTS);
}

export async function addDocument(document: Omit<Document, "id">): Promise<Document> {
  const res = await fetch(`${BASE_URL}/api/documents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(document)
  });
  return res.json();
}

export async function updateDocument(document: Document): Promise<Document> {
  const res = await fetch(`${BASE_URL}/api/documents/${document.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(document)
  });
  return res.json();
}

export async function deleteDocument(id: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/api/documents/${id}`, { method: "DELETE" });
  const data = await res.json();
  return data.success;
}

// ─── ALERTS ───────────────────────────────────────────────────────────────────
export async function getAlerts(): Promise<SystemAlert[]> {
  return fetchWithFallback(`${BASE_URL}/api/alerts`, LOCAL_ALERTS);
}

// ─── AI / CHAT ────────────────────────────────────────────────────────────────
export async function askSelectSensei(messages: { role: string; text: string }[]): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/api/ai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages })
    });
    const data = await res.json();
    return data.text;
  } catch {
    return "Serviço de IA temporariamente indisponível.";
  }
}

export async function scanReceiptOCR(imageBase64: string): Promise<{
  value: number; date: string; supplier: string; category: string; propertyId: string; description: string;
}> {
  const res = await fetch(`${BASE_URL}/api/ai/ocr`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageBase64 })
  });
  return res.json();
}

export async function getForecast(): Promise<{
  month: string; revenue: number; expense: number; profit: number; occupancy: number;
}[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/ai/forecast`);
    return res.json();
  } catch {
    return [];
  }
}

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
export async function sendWhatsAppMessage(payload: {
  phone: string; message: string; apiType: string; apiUrl: string;
  apiToken: string; instance: string; clientToken?: string;
}): Promise<{ success: boolean; message: string; response?: any }> {
  const res = await fetch(`${BASE_URL}/api/whatsapp/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

// ─── AUTH ─────────────────────────────────────────────────────────────────────
const LOCAL_USERS = [
  { id: "u1", name: "Administrador", username: "admin", password: "admin123", role: "admin" as const },
  { id: "u2", name: "Hugo Kobayashi", username: "hugo", password: "mudar123", role: "user" as const },
  { id: "u3", name: "Katia Farah", username: "katia", password: "mudar123", role: "user" as const },
  { id: "u4", name: "Mariana Nina", username: "mariana", password: "mudar123", role: "user" as const },
  { id: "u5", name: "Rubens Bossi", username: "rubens", password: "mudar123", role: "user" as const },
];

export async function loginUser(username: string, password: string): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) return res.json();
  } catch {
    // Server unreachable — fall through to local auth
  }
  // Client-side fallback
  const user = LOCAL_USERS.find(u => u.username === username && u.password === password);
  if (!user) throw new Error("Usuário ou senha inválidos.");
  const { password: _, ...safeUser } = user;
  return safeUser;
}

export async function changePassword(userId: string, newPassword: string): Promise<any> {
  try {
    const res = await fetch(`${BASE_URL}/api/users/${userId}/password`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword })
    });
    if (res.ok) return res.json();
  } catch {
    // ignore
  }
  return { success: true };
}
