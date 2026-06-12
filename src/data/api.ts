import { Property, Revenue, Expense, Booking, Asset, Maintenance, SystemAlert, Supplier, Document } from "../types";

const BASE_URL = ""; // Relative calls because we are running of the same Express server

export async function getProperties(): Promise<Property[]> {
  const res = await fetch(`${BASE_URL}/api/properties`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/properties/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getRevenues(): Promise<Revenue[]> {
  const res = await fetch(`${BASE_URL}/api/revenues`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/revenues/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getExpenses(): Promise<Expense[]> {
  const res = await fetch(`${BASE_URL}/api/expenses`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/expenses/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getBookings(): Promise<Booking[]> {
  const res = await fetch(`${BASE_URL}/api/bookings`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/bookings/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getAssets(): Promise<Asset[]> {
  const res = await fetch(`${BASE_URL}/api/assets`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/assets/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getMaintenances(): Promise<Maintenance[]> {
  const res = await fetch(`${BASE_URL}/api/maintenances`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/maintenances/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getSuppliers(): Promise<Supplier[]> {
  const res = await fetch(`${BASE_URL}/api/suppliers`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/suppliers/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getDocuments(): Promise<Document[]> {
  const res = await fetch(`${BASE_URL}/api/documents`);
  return res.json();
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
  const res = await fetch(`${BASE_URL}/api/documents/${id}`, {
    method: "DELETE"
  });
  const data = await res.json();
  return data.success;
}

export async function getAlerts(): Promise<SystemAlert[]> {
  const res = await fetch(`${BASE_URL}/api/alerts`);
  return res.json();
}

export async function askSelectSensei(messages: { role: string; text: string }[]): Promise<string> {
  const res = await fetch(`${BASE_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages })
  });
  const data = await res.json();
  return data.text;
}

export async function scanReceiptOCR(imageBase64: string): Promise<{
  value: number;
  date: string;
  supplier: string;
  category: string;
  propertyId: string;
  description: string;
}> {
  const res = await fetch(`${BASE_URL}/api/ai/ocr`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ imageBase64 })
  });
  return res.json();
}

export async function getForecast(): Promise<{
  month: string;
  revenue: number;
  expense: number;
  profit: number;
  occupancy: number;
}[]> {
  const res = await fetch(`${BASE_URL}/api/ai/forecast`);
  return res.json();
}

export async function sendWhatsAppMessage(payload: {
  phone: string;
  message: string;
  apiType: string;
  apiUrl: string;
  apiToken: string;
  instance: string;
  clientToken?: string;
}): Promise<{ success: boolean; message: string; response?: any }> {
  const res = await fetch(`${BASE_URL}/api/whatsapp/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function loginUser(username: string, password: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error("Credenciais inválidas");
  return res.json();
}

export async function changePassword(userId: string, newPassword: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/api/users/${userId}/password`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newPassword })
  });
  if (!res.ok) throw new Error("Erro ao trocar senha");
  return res.json();
}
