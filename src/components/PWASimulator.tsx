import React from "react";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Wifi, 
  Battery, 
  Signal,
  Bell, 
  Home, 
  Calendar, 
  Building2,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Info,
  Menu,
  Plus,
  User,
  FileText,
  BarChart3,
  Wrench,
  MoreHorizontal,
  Eye,
  EyeOff,
  Mail,
  Lock,
  Fingerprint,
  ArrowUpRight,
  Wallet,
  ChevronRight,
  Search,
  Sparkles,
  PlusCircle,
  X,
  Briefcase,
  ShieldAlert,
  FileCheck,
  LogOut,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Camera,
  Sliders,
  Trash2,
  Edit3,
  AlertTriangle
} from "lucide-react";
import { Property, Booking, Revenue, Expense, ExpenseCategory, Maintenance, Supplier, MaintenanceStatus, MaintenanceType } from "../types";
import type { User as AppUser } from "../types";
import { scanReceiptOCR, addExpense } from "../data/api";
import { KobayashiLogo } from "./Sidebar";

interface PWASimulatorProps {
  properties: Property[];
  bookings: Booking[];
  expenses: Expense[];
  revenues: Revenue[];
  maintenances: Maintenance[];
  suppliers: Supplier[];
  onDataChanged: () => void;
  onClose: () => void;
  darkMode?: boolean;
  onLogout?: () => void;
  currentUser?: AppUser | null;
}

/* ═══════════════════════════════════════════════════════════════════════ */
/*  KOBAYASHI ARCHITECTURAL JAPANESE VILLA LOGO (PREMIUM VECTOR ART)     */
/* ═══════════════════════════════════════════════════════════════════════ */
function KobayashiMobileHeroLogo({ dark }: { dark: boolean }) {
  const lineStroke = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-2xl mb-1">
      {/* Editorial grid background */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-40 pointer-events-none">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="border-[0.5px]" style={{ borderColor: lineStroke }} />
        ))}
      </div>
      
      {/* Glassmorphic backdrop reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/5 to-transparent opacity-60 pointer-events-none" />

      <svg className="w-64 h-40 relative z-10 drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dark ? "#090d16" : "#f0f9ff"} />
            <stop offset="60%" stopColor={dark ? "#171a29" : "#e0f2fe"} />
            <stop offset="100%" stopColor={dark ? "#2d1624" : "#ffedd5"} />
          </linearGradient>
          <radialGradient id="sunGlow" cx="160" cy="55" r="50" fx="160" fy="55">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="1" />
            <stop offset="40%" stopColor="#e11d48" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9f1239" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fujiBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dark ? "#0f172a" : "#cbd5e1"} />
            <stop offset="100%" stopColor={dark ? "#020617" : "#64748b"} />
          </linearGradient>
          <linearGradient id="fujiSnow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor={dark ? "#94a3b8" : "#cbd5e1"} stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>
          <linearGradient id="woodGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
          <linearGradient id="lakeReflect" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dark ? "#1e1b4b" : "#bfdbfe"} stopOpacity="0.8" />
            <stop offset="100%" stopColor={dark ? "#0f172a" : "#eff6ff"} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Sky Background Circle (clipped) */}
        <clipPath id="skyClip">
          <rect x="10" y="10" width="220" height="140" rx="20" />
        </clipPath>
        
        <g clipPath="url(#skyClip)">
          {/* Base Sky */}
          <rect x="10" y="10" width="220" height="140" fill="url(#skyGrad)" />

          {/* Stars (Dark mode only) */}
          {dark && (
            <g opacity="0.6">
              <circle cx="35" cy="35" r="0.8" fill="#fff" />
              <circle cx="60" cy="22" r="1.2" fill="#fff" className="animate-pulse" />
              <circle cx="85" cy="40" r="0.6" fill="#fff" />
              <circle cx="110" cy="28" r="1" fill="#fff" />
              <circle cx="140" cy="20" r="0.8" fill="#fff" />
              <circle cx="200" cy="30" r="1.2" fill="#fff" className="animate-pulse" />
            </g>
          )}

          {/* Glowing Sun Sunrise */}
          <circle cx="160" cy="55" r="45" fill="url(#sunGlow)" />
          <circle cx="160" cy="55" r="24" fill="#e11d48" />

          {/* Mount Fuji */}
          {/* Main Body */}
          <path d="M50 135 C 80 90, 100 55, 115 55 C 130 55, 150 90, 180 135 Z" fill="url(#fujiBack)" />
          {/* Snowcap */}
          <path d="M102 75 C 108 65, 112 55, 115 55 C 118 55, 122 65, 128 75 C 122 81, 118 76, 115 81 C 112 76, 108 81, 102 75 Z" fill="url(#fujiSnow)" />

          {/* Lake Reflective water at the bottom */}
          <rect x="10" y="130" width="220" height="20" fill="url(#lakeReflect)" />
          {/* Ripple lines */}
          <line x1="40" y1="134" x2="90" y2="134" stroke={dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)"} strokeWidth="1" />
          <line x1="130" y1="136" x2="190" y2="136" stroke={dark ? "rgba(244,63,94,0.3)" : "rgba(244,63,94,0.15)"} strokeWidth="1.2" />
          <line x1="70" y1="139" x2="150" y2="139" stroke={dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)"} strokeWidth="0.8" />

          {/* Distant Minimalist pine hills */}
          <path d="M10 132 Q 30 128, 55 132" stroke={dark ? "#0f172a" : "#94a3b8"} strokeWidth="4" strokeLinecap="round" />
          <path d="M175 132 Q 200 127, 230 132" stroke={dark ? "#0f172a" : "#94a3b8"} strokeWidth="5" strokeLinecap="round" />

          {/* Traditional architectural Villa (Floating glass pagoda look) */}
          {/* Ground Deck */}
          <rect x="52" y="123" width="105" height="5" rx="2" fill={dark ? "#1e293b" : "#475569"} />
          
          {/* Deck pillars */}
          <line x1="62" y1="128" x2="62" y2="132" stroke={dark ? "#0f172a" : "#334155"} strokeWidth="2" />
          <line x1="82" y1="128" x2="82" y2="132" stroke={dark ? "#0f172a" : "#334155"} strokeWidth="2" />
          <line x1="107" y1="128" x2="107" y2="132" stroke={dark ? "#0f172a" : "#334155"} strokeWidth="2" />
          <line x1="127" y1="128" x2="127" y2="132" stroke={dark ? "#0f172a" : "#334155"} strokeWidth="2" />
          <line x1="147" y1="128" x2="147" y2="132" stroke={dark ? "#0f172a" : "#334155"} strokeWidth="2" />

          {/* Wooden Structure Body */}
          <rect x="65" y="96" width="78" height="27" rx="2" fill="url(#woodGrad)" />
          
          {/* Sliding shoji screens (translucent glass panels) */}
          <rect x="69" y="99" width="22" height="21" rx="1.5" fill={dark ? "rgba(6,182,212,0.22)" : "rgba(224,242,254,0.8)"} stroke={dark ? "#22d3ee" : "#0284c7"} strokeWidth="1" />
          <rect x="95" y="99" width="44" height="21" rx="1.5" fill={dark ? "rgba(251,191,36,0.18)" : "rgba(255,255,255,0.95)"} stroke={dark ? "#f59e0b" : "#d97706"} strokeWidth="1" />
          
          {/* Shoji screen grid dividers */}
          <line x1="80" y1="99" x2="80" y2="120" stroke={dark ? "rgba(34,211,238,0.4)" : "#0284c7"} strokeWidth="0.8" />
          <line x1="106" y1="99" x2="106" y2="120" stroke={dark ? "rgba(245,158,11,0.4)" : "#d97706"} strokeWidth="0.8" />
          <line x1="117" y1="99" x2="117" y2="120" stroke={dark ? "rgba(245,158,11,0.4)" : "#d97706"} strokeWidth="0.8" />
          <line x1="128" y1="99" x2="128" y2="120" stroke={dark ? "rgba(245,158,11,0.4)" : "#d97706"} strokeWidth="0.8" />

          {/* Pagoda-style curved double roof */}
          {/* Lower Roof */}
          <path d="M56 97 Q 104 76, 152 97 L146 100 Q 104 84, 62 100 Z" fill="url(#roofGrad)" />
          <rect x="70" y="93" width="68" height="3" fill="#be123c" />
          
          {/* Upper Pagoda Roof */}
          <path d="M74 80 Q 104 64, 134 80 L129 82 Q 104 70, 79 82 Z" fill="url(#roofGrad)" />
          <circle cx="104" cy="65" r="2.5" fill="#f43f5e" />

          {/* Sakura/Cherry Tree silhouette & petals framing the villa */}
          <path d="M195 132 C 185 105, 198 85, 218 72" stroke={dark ? "#334155" : "#7c2d12"} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M205 92 C 212 85, 222 83, 230 79" stroke={dark ? "#334155" : "#7c2d12"} strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Drifting petals (Sakura circles) */}
          <circle cx="218" cy="72" r="5" fill="#f43f5e" />
          <circle cx="228" cy="79" r="4" fill="#f43f5e" />
          <circle cx="206" cy="88" r="4.5" fill="#fda4af" />
          <circle cx="216" cy="85" r="3.5" fill="#f43f5e" />
          <circle cx="192" cy="102" r="3" fill="#fda4af" />
          <circle cx="180" cy="115" r="2.5" fill="#f43f5e" />
          
          {/* Wind blown petals in the air */}
          <path d="M140 45 C 135 48, 128 48, 124 46" stroke="#fda4af" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="122" cy="46" r="1.5" fill="#fda4af" />
          
          <path d="M90 35 C 85 38, 78 38, 74 36" stroke="#fda4af" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="72" cy="36" r="1.2" fill="#fda4af" />
        </g>
      </svg>
    </div>
  );
}

export default function PWASimulator({
  properties,
  bookings,
  expenses,
  revenues,
  onDataChanged,
  onClose,
  darkMode = true,
  onLogout,
  currentUser
}: PWASimulatorProps) {
  const [mobileScreen, setMobileScreen] = React.useState<"login" | "dashboard" | "ocr-scanner">("login");
  const [pwaFlow, setPwaFlow] = React.useState<"ocr-bookings" | "accounting-operations" | "executive-reports">("ocr-bookings");
  const [mobileTab, setMobileTab] = React.useState<
    "ocr" | "calendar" | "properties" | 
    "finance" | "operations" | "suppliers" | 
    "exec-dash" | "analytics" | "settings"
  >("ocr");
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [isFabMenuOpen, setIsFabMenuOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);

  const [deferredPrompt, setDeferredPrompt] = React.useState<any>(null);
  const [isInstallable, setIsInstallable] = React.useState<boolean>(false);
  const [isPWA, setIsPWA] = React.useState<boolean>(false);
  const [ocrLoading, setOcrLoading] = React.useState<boolean>(false);
  const [ocrError, setOcrError] = React.useState<string>("");
  const [ocrSuccess, setOcrSuccess] = React.useState<boolean>(false);
  const [extractedData, setExtractedData] = React.useState<{
    value: number;
    date: string;
    supplier: string;
    category: ExpenseCategory;
    propertyId: string;
    description: string;
  } | null>(null);

  const [currentReceiptImage, setCurrentReceiptImage] = React.useState<string | null>(null);

  // References for direct camera vs file picker upload triggers
  const mobileCameraInputRef = React.useRef<HTMLInputElement>(null);
  const mobileFileInputRef = React.useRef<HTMLInputElement>(null);

  // Featured property ID state for properties screen (Screen 3)
  const [featuredPropertyId, setFeaturedPropertyId] = React.useState<string>("casa-amado");

  // Local state for calendar & reminders (Screen 2)
  const [selectedDay, setSelectedDay] = React.useState<number>(11);
  const [selectedMonth, setSelectedMonth] = React.useState<number>(6); // June
  const [selectedYear, setSelectedYear] = React.useState<number>(2026);
  const [reminders, setReminders] = React.useState<{
    id: string;
    title: string;
    guestName: string;
    phone: string;
    time: string;
    day: number;
    month: number;
    year: number;
    description: string;
  }[]>(() => {
    const saved = localStorage.getItem("select_reminders");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [
      { id: "rem-1", title: "Inspeção Geral do Quadro", guestName: "Eletricista Roberto", phone: "+5511999998888", time: "10:00", day: 12, month: 6, year: 2026, description: "Fazer o teste de carga preventiva no quadro de luz." },
      { id: "rem-2", title: "Dedetização Geral", guestName: "Dedetizadora Clean", phone: "+5511977776666", time: "14:30", day: 20, month: 6, year: 2026, description: "Serviço programado contra pragas." }
    ];
  });

  const [webhookUrl, setWebhookUrl] = React.useState<string>(() => {
    return localStorage.getItem("select_webhook_url") || "https://hook.us1.make.com/your-endpoint-here";
  });

  const [webhookLogs, setWebhookLogs] = React.useState<{ time: string; type: string; message: string; }[]>([]);

  React.useEffect(() => {
    localStorage.setItem("select_reminders", JSON.stringify(reminders));
  }, [reminders]);

  const fireWebhook = async (payload: any) => {
    const timestamp = new Date().toLocaleTimeString("pt-BR");
    setWebhookLogs(prev => [
      { time: timestamp, type: "request", message: `Enviando POST para ${webhookUrl} (via Proxy)...` },
      ...prev
    ]);

    try {
      const start = Date.now();
      const response = await fetch("/api/webhook/dispatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: webhookUrl, payload })
      });
      const duration = Date.now() - start;
      
      let textRes = "";
      try {
        textRes = await response.text();
      } catch (e) {
        textRes = "Vazio ou erro";
      }

      if (response.ok) {
        setWebhookLogs(prev => [
          { time: timestamp, type: "success", message: `Sucesso (${duration}ms): Notificação enviada! Resposta: ${textRes.slice(0, 80)}` },
          ...prev
        ]);
        triggerToast("Webhook enviado com sucesso!");
      } else {
        setWebhookLogs(prev => [
          { time: timestamp, type: "error", message: `Erro HTTP ${response.status} (${duration}ms): ${textRes.slice(0, 100)}` },
          ...prev
        ]);
        triggerToast(`Erro HTTP ${response.status}`);
      }
    } catch (error: any) {
      setWebhookLogs(prev => [
        { time: timestamp, type: "error", message: `Erro: ${error?.message || error}` },
        ...prev
      ]);
      triggerToast("Erro de Conexão no Webhook");
    }
  };

  React.useEffect(() => {
    const checkPWA = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
    setIsPWA(checkPWA);
  }, []);

  const handleMobileOCRUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      await runMobileOCR(base64);
    };
    reader.readAsDataURL(file);
  };

  const runMobileOCR = async (base64Payload: string) => {
    setOcrLoading(true);
    setOcrError("");
    setOcrSuccess(false);
    setExtractedData(null);
    setCurrentReceiptImage(base64Payload);

    try {
      const data = await scanReceiptOCR(base64Payload);
      
      let categoryMatch = ExpenseCategory.OUTROS;
      if (Object.values(ExpenseCategory).includes(data.category as ExpenseCategory)) {
        categoryMatch = data.category as ExpenseCategory;
      }

      setExtractedData({
        value: Number(data.value) || 0,
        date: data.date || new Date().toISOString().split("T")[0],
        supplier: data.supplier || "Diversos",
        category: categoryMatch,
        propertyId: data.propertyId || (properties[0]?.id || "casa-lilian"),
        description: data.description || "Lançamento PWA com IA"
      });
    } catch (err: any) {
      console.error(err);
      // Fallback: Populate form with manual parameters so they can confirm and save it anyway
      setExtractedData({
        value: 0,
        date: new Date().toISOString().split("T")[0],
        supplier: "Comprovante Carregado",
        category: ExpenseCategory.OUTROS,
        propertyId: properties[0]?.id || "casa-lilian",
        description: "Envio de comprovante manual (Leitura automática indisponível)"
      });
      setOcrError("Não foi possível ler os dados automaticamente. Por favor, preencha os campos abaixo para concluir o lançamento.");
    } finally {
      setOcrLoading(false);
    }
  };

  const handleMobileOCRSimulate = async (text: string) => {
    setOcrLoading(true);
    setOcrError("");
    setOcrSuccess(false);
    setExtractedData(null);
    setCurrentReceiptImage(null);

    await new Promise(r => setTimeout(r, 1000));

    let value = 450;
    let supplier = "AcquaClean Pools";
    let category = ExpenseCategory.PISCINA;
    let propertyId = "casa-mayla";
    let date = "2026-06-05";
    let description = "Limpeza de Piscina";

    if (text.includes("COELBA")) {
      value = 6090.30;
      supplier = "Coelba S/A";
      category = ExpenseCategory.ENERGIA;
      propertyId = "casa-nova";
      date = "2026-05-28";
      description = "Conta de luz - Alta temporada";
    } else if (text.includes("ClimaMax")) {
      value = 6571.50;
      supplier = "ClimaMax Refrigeração";
      category = ExpenseCategory.MANUTENCAO;
      propertyId = "casa-lilian";
      date = "2026-05-20";
      description = "Instalação de ar condicionado inverter split";
    }

    setExtractedData({
      value,
      date,
      supplier,
      category,
      propertyId,
      description
    });
    setOcrLoading(false);
  };

  const handleMobileOCRConfirm = async () => {
    if (!extractedData) return;

    try {
      setOcrLoading(true);
      await addExpense({
        propertyId: extractedData.propertyId,
        category: extractedData.category,
        supplier: extractedData.supplier,
        date: extractedData.date,
        value: extractedData.value,
        paymentMethod: "Pix",
        receipt: currentReceiptImage || "Lançamento via PWA (Gemini OCR)",
        description: extractedData.description
      });

      setOcrSuccess(true);
      setExtractedData(null);
      setCurrentReceiptImage(null);
      
      onDataChanged();

      setTimeout(() => {
        setOcrSuccess(false);
        setMobileScreen("dashboard");
      }, 1500);

    } catch (err: any) {
      console.error(err);
      setOcrError("Erro ao salvar despesa no banco de dados.");
    } finally {
      setOcrLoading(false);
    }
  };

  // Dynamically determine PWA download/redirect target. 
  // If running locally, fallback to the stable production domain.
  const getPWARedirectUrl = () => {
    const origin = window.location.origin;
    if (origin.includes("localhost") || origin.includes("127.0.0.1") || origin.includes("192.168.")) {
      return "https://kobayashi-property-os-wordjoels-projects.vercel.app";
    }
    return origin;
  };
  const pwaUrl = getPWARedirectUrl();

  React.useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setIsInstallable(false);
    } else {
      alert("Para instalar o PWA, utilize o menu de opções do seu navegador (como 'Instalar aplicativo' ou 'Adicionar à tela de início').");
    }
  };

  // Financial aggregates
  const totalRevenues = React.useMemo(() => revenues.reduce((s, r) => s + r.value, 0), [revenues]);
  const totalExpenses = React.useMemo(() => expenses.reduce((s, e) => s + e.value, 0), [expenses]);
  const netProfit = totalRevenues - totalExpenses;
  const averageOccupancy = 78.5; 
  const averageRoi = 24.7;

  // Trigger transient simulated toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoginLoading(false);
    setLoginSuccess(true);
    await new Promise(r => setTimeout(r, 400));
    setMobileScreen("dashboard");
    setLoginSuccess(false);
  };

  const handleBiometricLogin = async () => {
    setLoginLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoginLoading(false);
    setLoginSuccess(true);
    await new Promise(r => setTimeout(r, 400));
    setMobileScreen("dashboard");
    setLoginSuccess(false);
  };

  const isDark = darkMode;

  // Stripe & Apple Inspired Mobile UI Colors with Brand CS Theme
  const c = {
    bg: isDark ? "#121721" : "#FAF8F5",
    surface: isDark ? "#1B2230" : "#F4F0E8",
    card: isDark ? "#222B3D" : "#FFFFFF",
    text: isDark ? "#F5F3EF" : "#2C251C",
    textMuted: isDark ? "#A3B0C2" : "#7E7363",
    border: isDark ? "#2E3A52" : "#E8E3D9",
    accent: isDark ? "#dfb26c" : "#b89047",
    accentHover: isDark ? "#c89e58" : "#a37e3b",
    success: "#10b981",
    warning: "#f59e0b",
    blue: "#3b82f6",
    purple: "#8b5cf6"
  };

  const rounded = {
    card: "rounded-2xl", // 16px
    inner: "rounded-xl", // 12px
    button: "rounded-xl",
    pill: "rounded-full"
  };

  const isDemoAdmin = currentUser?.role === "admin";

  if (!isDemoAdmin) {
    return (
      <motion.div 
        id="pwa-sim-wrapper" 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6 select-none max-w-4xl mx-auto"
      >
        {/* Upper controls bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-500 mb-1">
              <Smartphone size={14} />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Instalação do Aplicativo</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white uppercase tracking-tight">Central Mobile (PWA)</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Instale o sistema Casa Select diretamente no seu smartphone ou tablet.</p>
          </div>
          <button onClick={onClose} className="border border-slate-350 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-white rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer transition-all">
            Voltar ao Comando
          </button>
        </div>

        {/* PWA Installation/Download Card or Success Card */}
        {isPWA ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8 space-y-4 shadow-xl text-center">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="font-display font-extrabold text-lg text-white">Casa Select Instalado</h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
              Você já está navegando no aplicativo PWA oficial. Aproveite os atalhos nativos, inicialização rápida e experiência em tela cheia sem distrações.
            </p>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#dfb26c]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-500 shrink-0">
                <Smartphone size={28} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">Instalar Aplicativo Oficial (PWA)</h3>
                <p className="text-slate-400 text-xs font-medium">Acesse a Casa Select de forma rápida, offline e com atalho direto na tela de início do seu dispositivo.</p>
              </div>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 space-y-4">
                <button
                  onClick={handleInstallClick}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#dfb26c] hover:bg-[#c99f5d] text-slate-950 font-extrabold text-sm py-3.5 px-6 rounded-xl cursor-pointer transition-all shadow-lg shadow-[#dfb26c]/10 hover:scale-[1.01]"
                >
                  <Smartphone size={16} strokeWidth={2.5} />
                  Baixar e Instalar PWA
                </button>

                <div className="border-t border-slate-800/85 pt-4 space-y-2 text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block uppercase tracking-wider text-[10px]">Como instalar no Celular:</span>
                  <p className="leading-relaxed"><strong className="text-slate-300">iOS (Safari):</strong> Toque em Compartilhar <span className="inline-block border border-slate-700 px-1.5 py-0.5 rounded bg-slate-800 text-[10px]">⎙</span> e selecione <strong>Adicionar à Tela de Início</strong>.</p>
                  <p className="leading-relaxed"><strong className="text-slate-300">Android (Chrome):</strong> Toque nos três pontos no canto superior e selecione <strong>Instalar aplicativo</strong>.</p>
                </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      id="pwa-sim-wrapper" 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 select-none"
    >
      {/* Upper controls bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-500 mb-1">
            <Smartphone size={14} className="animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">RECONSTRUÇÃO DA CENTRAL MOBILE</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white uppercase tracking-tight">UX/UI Mobile Premium</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Arquitetura inspirada nos melhores apps de produto do mundo.</p>
        </div>
        <button onClick={onClose} className="border border-slate-350 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-800 dark:text-white rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer transition-all">
          Voltar ao Comando
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* ═══════════════════════════════════════════════════ */}
        {/*  PHONE FRAME - Apple Inspired iPhone simulator     */}
        {/* ═══════════════════════════════════════════════════ */}
        <div className="flex flex-col items-center gap-4 py-2 relative">
          {/* Segmented Flow Selector */}
          <div className="flex bg-slate-950/60 p-1 border border-slate-800/80 rounded-xl w-[330px] text-[9.5px] font-bold z-40 select-none shadow-lg">
            <button
              type="button"
              onClick={() => { setPwaFlow("ocr-bookings"); setMobileTab("ocr"); }}
              className={`flex-1 py-1.5 rounded-lg text-center cursor-pointer transition-all ${
                pwaFlow === "ocr-bookings" 
                  ? "bg-[#dfb26c] text-slate-950 shadow-md font-extrabold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              OCR & Reservas
            </button>
            <button
              type="button"
              onClick={() => { setPwaFlow("accounting-operations"); setMobileTab("finance"); }}
              className={`flex-1 py-1.5 rounded-lg text-center cursor-pointer transition-all ${
                pwaFlow === "accounting-operations" 
                  ? "bg-[#dfb26c] text-slate-950 shadow-md font-extrabold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Operações
            </button>
            <button
              type="button"
              onClick={() => { setPwaFlow("executive-reports"); setMobileTab("exec-dash"); }}
              className={`flex-1 py-1.5 rounded-lg text-center cursor-pointer transition-all ${
                pwaFlow === "executive-reports" 
                  ? "bg-[#dfb26c] text-slate-950 shadow-md font-extrabold" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Executivo
            </button>
          </div>

          <div className="relative">
            {/* Physical volume/power buttons on iPhone body */}
            <div className="absolute top-28 -left-[2px] w-[3px] h-10 bg-slate-500/80 rounded-l-md z-45" />
            <div className="absolute top-40 -left-[2px] w-[3px] h-10 bg-slate-500/80 rounded-l-md z-45" />
            <div className="absolute top-18 -left-[2px] w-[3px] h-6 bg-slate-500/70 rounded-l-sm z-45" />
            <div className="absolute top-32 -right-[2px] w-[3px] h-16 bg-slate-500/80 rounded-r-md z-45" />

            {/* Phone outer shadow glow */}
            <div className="absolute -inset-4 rounded-[56px] opacity-40 blur-lg transition-all"
              style={{ background: isDark 
                ? "radial-gradient(ellipse at center, rgba(223,178,108,0.15) 0%, transparent 75%)" 
                : "radial-gradient(ellipse at center, rgba(0,0,0,0.06) 0%, transparent 75%)" 
              }} 
            />
            
            {/* Main iPhone body frame */}
            <div className="w-[330px] h-[690px] rounded-[48px] relative flex flex-col overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: c.bg,
                backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `9px solid ${isDark ? "#1C2431" : "#D1D5DB"}`,
                boxShadow: isDark 
                  ? "0 25px 65px -12px rgba(0,0,0,0.85), 0 0 0 1.5px rgba(255,255,255,0.08) inset" 
                  : "0 25px 65px -12px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(255,255,255,0.7) inset"
              }}
            >
              {/* Glass reflection sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-40" />

              {/* Dynamic Island */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-45 flex items-center justify-center gap-2 border border-white/5 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222] ml-auto mr-1.5 shrink-0 shadow-inner relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#181818] mr-3 shrink-0" />
              </div>

              {/* Status Bar */}
              <div className="h-12 px-7 pt-6 shrink-0 flex justify-between items-center text-[11px] font-bold z-30" style={{ color: c.text }}>
                <span style={{ fontFamily: "system-ui", fontWeight: 700 }}>9:41</span>
                <div className="flex items-center gap-1.5 opacity-80">
                  <Signal size={12} strokeWidth={2.5} />
                  <Wifi size={12} strokeWidth={2.5} />
                  <Battery size={13} strokeWidth={2.5} />
                </div>
              </div>

              {/* Simulated Toast Notification */}
              {toastMessage && (
                <div className="absolute top-14 left-4 right-4 bg-white/95 dark:bg-[#18202A]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-lg z-45 flex items-center gap-2.5 animate-fadeIn">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 leading-tight">{toastMessage}</span>
                </div>
              )}

              {/* ═══ SCREEN CONTENT ═══ */}
              <div 
                className="flex-1 overflow-y-auto px-4.5 scrollbar-none pb-14 flex flex-col" 
                style={{ 
                  color: c.text,
                  backgroundColor: isDark ? "rgba(18, 23, 33, 0.82)" : "rgba(250, 248, 245, 0.93)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)"
                }}
              >
                
                {/* ═══════════════════════════════════════ */}
                {/*  LOGIN SCREEN (Linear & Stripe Style)  */}
                {/* ═══════════════════════════════════════ */}
                {mobileScreen === "login" && (
                  <div className="flex flex-col min-h-full py-2">
                    
                    {/* Centered Hero Artwork */}
                    <div className="text-center pt-8 pb-4 flex flex-col items-center justify-center select-none animate-fadeIn">
                      <KobayashiLogo darkMode={isDark} />
                      <h1 className="font-display font-extrabold text-[16px] tracking-[0.08em] mt-3.5 leading-none" style={{ color: isDark ? "#dfb26c" : c.text }}>
                        CASA SELECT
                      </h1>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] mt-1.5 font-bold" style={{ color: isDark ? "rgba(223, 178, 108, 0.85)" : c.textMuted }}>
                        MANAGEMENT
                      </p>
                      <p className="text-[11px] mt-4 px-4 leading-relaxed font-medium" style={{ color: c.textMuted }}>
                        Controle inteligente de imóveis em um único lugar.
                      </p>
                    </div>

                    {/* LoginForm */}
                    <form onSubmit={handleLogin} className="mt-6 space-y-4">
                      {/* E-mail Field */}
                      <div 
                        className="relative flex items-center px-3.5 pt-5 pb-1.5 rounded-xl border transition-all duration-350 ease-out"
                        style={{ 
                          backgroundColor: c.surface, 
                          borderColor: emailFocused ? c.accent : c.border,
                          boxShadow: emailFocused ? `0 0 0 3.5px ${c.accent}20` : "none"
                        }}
                      >
                        <Mail size={13} className="mr-2.5 shrink-0 transition-colors duration-300" style={{ color: emailFocused ? c.accent : c.textMuted }} />
                        <div className="flex-1 relative">
                          <label 
                            className="absolute left-0 pointer-events-none transition-all duration-300 ease-out origin-top-left"
                            style={{
                              transform: (emailFocused || email.length > 0) 
                                ? "translateY(-13px) scale(0.72)" 
                                : "translateY(1px) scale(1)",
                              color: (emailFocused) ? c.accent : c.textMuted,
                              fontWeight: (emailFocused || email.length > 0) ? "bold" : "normal",
                              fontSize: "12.5px",
                            }}
                          >
                            E-mail
                          </label>
                          <input 
                            type="email" 
                            required 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocused(true)}
                            onBlur={() => setEmailFocused(false)}
                            className="w-full bg-transparent text-xs focus:outline-none pt-0.5"
                            style={{ color: c.text }}
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div 
                        className="relative flex items-center px-3.5 pt-5 pb-1.5 rounded-xl border transition-all duration-350 ease-out"
                        style={{ 
                          backgroundColor: c.surface, 
                          borderColor: passwordFocused ? c.accent : c.border,
                          boxShadow: passwordFocused ? `0 0 0 3.5px ${c.accent}20` : "none"
                        }}
                      >
                        <Lock size={13} className="mr-2.5 shrink-0 transition-colors duration-300" style={{ color: passwordFocused ? c.accent : c.textMuted }} />
                        <div className="flex-1 relative">
                          <label 
                            className="absolute left-0 pointer-events-none transition-all duration-300 ease-out origin-top-left"
                            style={{
                              transform: (passwordFocused || password.length > 0) 
                                ? "translateY(-13px) scale(0.72)" 
                                : "translateY(1px) scale(1)",
                              color: (passwordFocused) ? c.accent : c.textMuted,
                              fontWeight: (passwordFocused || password.length > 0) ? "bold" : "normal",
                              fontSize: "12.5px",
                            }}
                          >
                            Senha
                          </label>
                          <input 
                            type={showPassword ? "text" : "password"} 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={() => setPasswordFocused(false)}
                            className="w-full bg-transparent text-xs focus:outline-none pt-0.5"
                            style={{ color: c.text }}
                          />
                        </div>
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer p-0.5 opacity-80 hover:opacity-100 shrink-0 ml-1.5 transition-opacity">
                          {showPassword ? <EyeOff size={13} style={{ color: c.textMuted }} /> : <Eye size={13} style={{ color: c.textMuted }} />}
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10.5px] font-bold hover:underline cursor-pointer" style={{ color: c.accent }}>Esqueci minha senha</span>
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="submit" 
                        disabled={loginLoading || loginSuccess}
                        className="w-full py-3.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 active:scale-[0.97] mt-3"
                        style={{ 
                          background: loginSuccess 
                            ? "linear-gradient(135deg, #10b981 0%, #059669 100%)" 
                            : `linear-gradient(135deg, ${c.accent} 0%, ${c.accentHover} 100%)`,
                          boxShadow: loginSuccess
                            ? "0 4px 15px rgba(16, 185, 129, 0.25)"
                            : "0 4px 15px rgba(192, 30, 46, 0.2)"
                        }}
                      >
                        {loginLoading ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : loginSuccess ? (
                          <>
                             <span>Sucesso!</span>
                             <CheckCircle2 size={14} strokeWidth={2.5} className="animate-bounce" />
                          </>
                        ) : (
                          <>
                            <span>Entrar</span>
                            <ArrowRight size={14} strokeWidth={2.5} />
                          </>
                        )}
                      </button>
                    </form>

                    {/* Biometric Trigger */}
                    <div className="flex flex-col items-center justify-center mt-6 pt-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest mb-3" style={{ color: c.textMuted }}>Ou biometria</span>
                      <button 
                        onClick={handleBiometricLogin} 
                        className="w-14 h-14 rounded-full flex items-center justify-center border relative group cursor-pointer transition-all duration-300 active:scale-95"
                        style={{ 
                          backgroundColor: c.card, 
                          borderColor: c.border 
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-rose-500/20 animate-ping" style={{ animationDuration: "3s" }} />
                        <div className="absolute inset-0 rounded-full bg-rose-500/10 animate-ping" style={{ animationDuration: "3s", animationDelay: "1s" }} />
                        <Fingerprint size={24} strokeWidth={1.6} style={{ color: c.accent }} className="transition-transform group-hover:scale-110" />
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto py-2 text-center text-[9px] font-bold select-none opacity-50" style={{ color: c.textMuted }}>
                      CASA SELECT · PREMIUM
                    </div>

                  </div>
                )}

                {mobileScreen === "dashboard" && (
                  <div className="space-y-5 py-1 select-none flex-1 flex flex-col">
                    
                    {/* Header: Greeting & Profile */}
                    <div className="flex items-center justify-between pb-2 border-b animate-fadeIn" style={{ borderColor: c.border }}>
                      <div className="flex items-center gap-2.5">
                        {/* Avatar Circle */}
                        <div className="w-8 h-8 rounded-full text-white font-extrabold flex items-center justify-center text-xs shadow-md shrink-0 text-keep-white"
                          style={{ backgroundColor: c.accent }}
                        >
                          HK
                        </div>
                        <div>
                          <span className="text-[10px] font-bold block" style={{ color: c.textMuted }}>Olá, Administrador</span>
                          <span className="text-xs font-black block tracking-tight transition-all" style={{ color: c.text }}>
                            {mobileTab === "ocr" && "OCR Financeiro"}
                            {mobileTab === "calendar" && "Calendário & Agenda"}
                            {mobileTab === "properties" && "Portfólio de Imóveis"}
                            {mobileTab === "finance" && "Dashboard Financeiro"}
                            {mobileTab === "operations" && "Operações"}
                            {mobileTab === "suppliers" && "Cadastros"}
                            {mobileTab === "exec-dash" && "Dashboard Principal"}
                            {mobileTab === "analytics" && "Analytics & Reports"}
                            {mobileTab === "settings" && "Documents & Settings"}
                          </span>
                        </div>
                      </div>

                      {/* Top header stats */}
                      <span className="text-[10px] font-mono text-[#dfb26c] bg-slate-950/40 border border-slate-800 px-2.5 py-1 rounded font-bold">
                        Novembro 2025
                      </span>
                    </div>

                    {/* 📱 SCREEN 1: OCR FINANCEIRO INTELIGENTE */}
                    {mobileTab === "ocr" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Leitor OCR Financeiro</h4>
                          <p className="text-[9px] text-slate-500">Suba comprovantes para extração automática via Inteligência Artificial.</p>
                        </div>

                        {ocrError && (
                          <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start gap-2">
                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                            <span className="text-[9.5px] leading-snug">{ocrError}</span>
                          </div>
                        )}

                        {ocrSuccess && (
                          <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center space-y-2 animate-scaleUp">
                            <CheckCircle2 size={24} className="text-emerald-500 mx-auto animate-pulse" />
                            <h5 className="text-[11px] font-bold text-white uppercase">Lançamento Efetivado!</h5>
                            <p className="text-[9px] text-slate-500">Os dados foram integrados no caixa da propriedade.</p>
                          </div>
                        )}

                        {ocrLoading && (
                          <div className="flex flex-col items-center justify-center py-10 space-y-3 text-center flex-1">
                            <div className="w-8 h-8 border-3 border-[#dfb26c]/30 border-t-[#dfb26c] rounded-full animate-spin" />
                            <div>
                              <h5 className="font-bold text-slate-200 text-xs">Análise Select AI...</h5>
                              <p className="text-[9px] text-slate-500 mt-1">Extraindo metadados fiscais da imagem/PDF...</p>
                            </div>
                          </div>
                        )}

                        {/* Dashed upload zone (instant camera trigger) */}
                        {!ocrLoading && !extractedData && !ocrSuccess && (
                          <div 
                            onClick={() => mobileCameraInputRef.current?.click()}
                            className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer bg-slate-900/30 text-center gap-2.5 transition-all hover:bg-slate-900/50 animate-fadeIn h-40 border-slate-700/80 active:scale-[0.98]"
                          >
                            <Camera size={32} className="text-[#dfb26c] animate-pulse" />
                            <span className="text-[11px] font-bold text-slate-200">Tirar Foto (Câmera Mobile)</span>
                            <span className="text-[9px] text-slate-500">Toque aqui para acionar a câmera nativa</span>
                            
                            {/* Hidden direct camera input */}
                            <input 
                              type="file" 
                              ref={mobileCameraInputRef}
                              accept="image/*" 
                              capture="environment"
                              onChange={handleMobileOCRUpload} 
                              className="hidden" 
                            />
                          </div>
                        )}

                        {/* File selector fallback trigger */}
                        {!ocrLoading && !extractedData && !ocrSuccess && (
                          <div className="text-center">
                            <button
                              type="button"
                              onClick={() => mobileFileInputRef.current?.click()}
                              className="text-[10px] text-slate-400 hover:text-white underline font-semibold transition-all cursor-pointer"
                            >
                              Ou selecione um arquivo (PDF ou imagem) do dispositivo
                            </button>
                            <input 
                              type="file" 
                              ref={mobileFileInputRef}
                              accept="image/*,application/pdf" 
                              onChange={handleMobileOCRUpload} 
                              className="hidden" 
                            />
                          </div>
                        )}

                        {/* Recurrent Simulation templates (Conta de Luz, Instalação de Ar, Piscineiro) */}
                        {!ocrLoading && !extractedData && !ocrSuccess && (
                          <div className="space-y-2">
                            <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block">Atalhos de Simulação:</span>
                            <div className="grid grid-cols-3 gap-2">
                              {[
                                { name: "Conta de Luz", text: "COMPANHIA DE ELETRICIDADE DO ESTADO DA BAHIA - COELBA. FATURA DE ENERGIA ACUMULADA MÊS DE MAIO 2026. Lançamento Casa Nova. Total a pagar: R$ 6.090,30. Vencimento: 28/05/2026.", color: "border-amber-500/20 text-amber-400" },
                                { name: "Instalação de Ar", text: "ClimaMax Refrigeração Comercial LTDA. NOTA FISCAL SERVIÇOS NF-e #8092. Tomador: Casa Lilian. Descrição: Instalação de Multi-Split 24K BTU Inverter com carga de gás. Valor Total: R$ 6.571,50.", color: "border-emerald-500/20 text-emerald-400" },
                                { name: "Piscineiro", text: "AcquaClean Pools Tratamentos e Serviços de Lazer. Recibo de quitamento de serviços na piscina da Casa Mayla. Valor total cobrado: R$ 450,00. Pago via Pix em 05/06/2026.", color: "border-sky-500/20 text-sky-400" }
                              ].map((t, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => handleMobileOCRSimulate(t.text)}
                                  className={`p-2.5 bg-slate-950/50 border hover:bg-slate-900 rounded-xl text-[9px] text-center font-bold transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer h-16 ${t.color}`}
                                >
                                  <span>{t.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* OCR Metadata Extraction Form */}
                        {extractedData && !ocrLoading && !ocrSuccess && (
                          <div className="space-y-3 bg-slate-950/60 p-3 rounded-xl border border-slate-850 animate-fadeIn">
                            <span className="text-[9px] uppercase font-black tracking-wider text-accent-cyan block border-b border-slate-800 pb-1">Conferência dos Metadados</span>
                            
                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                              <div className="col-span-2">
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">FORNECEDOR</label>
                                <input 
                                  type="text" 
                                  value={extractedData.supplier}
                                  onChange={e => setExtractedData({ ...extractedData, supplier: e.target.value })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white"
                                />
                              </div>
                              <div>
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">VALOR (R$)</label>
                                <input 
                                  type="number" 
                                  value={extractedData.value}
                                  onChange={e => setExtractedData({ ...extractedData, value: Number(e.target.value) })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white font-mono"
                                />
                              </div>
                              <div>
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">DATA EMISSÃO</label>
                                <input 
                                  type="date" 
                                  value={extractedData.date}
                                  onChange={e => setExtractedData({ ...extractedData, date: e.target.value })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white font-mono"
                                />
                              </div>
                              <div>
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">IMÓVEL DESTINO</label>
                                <select 
                                  value={extractedData.propertyId}
                                  onChange={e => setExtractedData({ ...extractedData, propertyId: e.target.value })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white text-[9px]"
                                >
                                  {properties.map(p => (
                                    <option key={p.id} value={p.id}>{p.name}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">CATEGORIA CONTÁBIL</label>
                                <select 
                                  value={extractedData.category}
                                  onChange={e => setExtractedData({ ...extractedData, category: e.target.value as any })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white text-[9px]"
                                >
                                  {Object.values(ExpenseCategory).map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                  ))}
                                </select>
                              </div>
                              <div className="col-span-2">
                                <label className="text-[8px] text-slate-500 font-bold block mb-0.5">DESCRIÇÃO DA DESPESA</label>
                                <input 
                                  type="text" 
                                  value={extractedData.description}
                                  onChange={e => setExtractedData({ ...extractedData, description: e.target.value })}
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white"
                                />
                              </div>
                            </div>

                            <div className="flex gap-2 pt-1">
                              <button
                                type="button"
                                onClick={() => setExtractedData(null)}
                                className="w-1/3 border border-slate-800 text-slate-400 hover:text-white rounded-lg py-1.5 text-[10px] font-semibold cursor-pointer"
                              >
                                Descartar
                              </button>
                              <button
                                type="button"
                                onClick={handleMobileOCRConfirm}
                                className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-1.5 text-[10px] font-bold cursor-pointer"
                              >
                                Confirmar Lançamento
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Seção Administrador para conferência */}
                        {!ocrLoading && !ocrSuccess && (
                          <div className="mt-auto bg-slate-950/60 p-3 rounded-xl border border-slate-850 flex items-center justify-between text-xs animate-fadeIn">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-[#dfb26c] text-slate-950 font-extrabold flex items-center justify-center text-[10px]">AD</div>
                              <div>
                                <strong className="block text-[10px] text-slate-200">Painel Administrador</strong>
                                <span className="text-[8px] text-slate-500 block">Conectado ao central Supabase / Vercel</span>
                              </div>
                            </div>
                            <span className="w-5 h-5 rounded-full bg-[#dfb26c] text-slate-950 font-bold flex items-center justify-center text-[9px]">
                              3
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* 📅 SCREEN 2: CALENDÁRIO & AGENDA */}
                    {mobileTab === "calendar" && (
                      <div className="space-y-4 animate-fadeIn flex-1 overflow-y-auto pb-4 scrollbar-none text-xs">
                        
                        {/* Month Visual Grid header */}
                        <div className="p-3 bg-slate-950/50 border border-slate-850 rounded-xl space-y-3">
                          <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-400">
                            <span>Junho de 2026</span>
                            <span className="text-[8px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">Cronograma</span>
                          </div>

                          <div className="grid grid-cols-7 gap-1 text-center text-[8px] font-mono font-bold text-slate-500">
                            <div>DOM</div><div>SEG</div><div>TER</div><div>QUA</div><div>QUI</div><div>SEX</div><div>SÁB</div>
                          </div>

                          {/* Days Grid */}
                          <div className="grid grid-cols-7 gap-1.5">
                            {Array.from({ length: 30 }).map((_, idx) => {
                              const dayNum = idx + 1;
                              const dayStr = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
                              const dateStr = `2026-06-${dayStr}`;

                              // Check bookings
                              const checkInsToday = bookings.filter(b => b.checkIn === dateStr);
                              const checkOutsToday = bookings.filter(b => b.checkOut === dateStr);
                              const activeBookings = bookings.filter(b => b.checkIn <= dateStr && dateStr <= b.checkOut && b.checkIn !== dateStr && b.checkOut !== dateStr);
                              const dayReminders = reminders.filter(r => r.day === dayNum && r.month === 6 && r.year === 2026);

                              const isSelected = selectedDay === dayNum;

                              let bgClass = "bg-slate-900/50 text-slate-500 border-transparent";
                              let borderClass = "border";

                              if (isSelected) {
                                bgClass = "bg-[#dfb26c]/20 text-white font-bold";
                                borderClass = "border-[#dfb26c]";
                              } else if (checkInsToday.length > 0) {
                                bgClass = "bg-emerald-500/15 text-emerald-400";
                                borderClass = "border-emerald-500/35";
                              } else if (checkOutsToday.length > 0) {
                                bgClass = "bg-rose-500/15 text-rose-400";
                                borderClass = "border-rose-500/35";
                              } else if (activeBookings.length > 0) {
                                bgClass = "bg-sky-500/5 text-sky-300";
                                borderClass = "border-sky-500/15";
                              }

                              return (
                                <div
                                  key={idx}
                                  onClick={() => setSelectedDay(dayNum)}
                                  className={`h-9 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${bgClass} ${borderClass} relative`}
                                >
                                  <span className="text-[10px] font-mono leading-none">{dayNum}</span>
                                  {/* Dots indicator */}
                                  <div className="flex gap-0.5 mt-0.5 justify-center h-1">
                                    {checkInsToday.length > 0 && <span className="w-1 h-1 rounded-full bg-emerald-500" />}
                                    {checkOutsToday.length > 0 && <span className="w-1 h-1 rounded-full bg-rose-500" />}
                                    {dayReminders.length > 0 && <span className="w-1 h-1 rounded-full bg-amber-500" />}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Selected day agenda */}
                        <div className="p-3 bg-slate-950/50 border border-slate-850 rounded-xl space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b border-slate-850">
                            <h4 className="text-[10px] uppercase font-bold text-slate-300">Agenda: Dia {selectedDay} de Junho</h4>
                            <button
                              type="button"
                              onClick={() => triggerToast("Função de novo lembrete ativada")}
                              className="text-[9px] font-bold bg-[#dfb26c] text-slate-950 px-2 py-0.5 rounded cursor-pointer transition-all"
                            >
                              + Novo Lembrete
                            </button>
                          </div>

                          <div className="space-y-2">
                            {/* Filter bookings & reminders for selectedDay */}
                            {(() => {
                              const dayStr = selectedDay < 10 ? `0${selectedDay}` : `${selectedDay}`;
                              const dateStr = `2026-06-${dayStr}`;
                              const checkIns = bookings.filter(b => b.checkIn === dateStr);
                              const checkOuts = bookings.filter(b => b.checkOut === dateStr);
                              const dayReminders = reminders.filter(r => r.day === selectedDay && r.month === 6 && r.year === 2026);

                              const hasEvents = checkIns.length > 0 || checkOuts.length > 0 || dayReminders.length > 0;

                              if (!hasEvents) {
                                return <p className="text-[9px] text-slate-600 text-center py-2">Nenhum evento registrado para este dia.</p>;
                              }

                              return (
                                <>
                                  {checkIns.map((b, i) => (
                                    <div key={`ci-${i}`} className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-between">
                                      <div>
                                        <strong className="block text-[9.5px] text-slate-100">{b.guestName}</strong>
                                        <span className="text-[8px] text-emerald-400 block font-bold uppercase tracking-wider mt-0.5">📥 Check-In</span>
                                      </div>
                                      <span className="text-[9.5px] font-mono text-slate-400">R$ {b.value.toLocaleString("pt-BR")}</span>
                                    </div>
                                  ))}
                                  {checkOuts.map((b, i) => (
                                    <div key={`co-${i}`} className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center justify-between">
                                      <div>
                                        <strong className="block text-[9.5px] text-slate-100">{b.guestName}</strong>
                                        <span className="text-[8px] text-rose-400 block font-bold uppercase tracking-wider mt-0.5">📤 Check-Out</span>
                                      </div>
                                      <span className="text-[9.5px] font-mono text-slate-400">Checkout</span>
                                    </div>
                                  ))}
                                  {dayReminders.map((r, i) => (
                                    <div key={`rem-${i}`} className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-between">
                                      <div>
                                        <strong className="block text-[9.5px] text-slate-100">{r.title}</strong>
                                        <span className="text-[8px] text-amber-400 block mt-0.5">⏰ {r.time} &bull; {r.guestName}</span>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => fireWebhook({ event: "reminder", title: r.title })}
                                        className="text-[8px] border border-amber-500/35 text-amber-400 px-2 py-0.5 rounded hover:bg-amber-500/20 transition-all cursor-pointer"
                                      >
                                        Testar URL
                                      </button>
                                    </div>
                                  ))}
                                </>
                              );
                            })()}
                          </div>
                        </div>

                        {/* Webhook integration panel */}
                        <div className="p-3.5 bg-slate-950/50 border border-slate-850 rounded-xl space-y-3">
                          <span className="text-[10px] uppercase font-bold text-slate-300 block">Webhook Integration</span>
                          <div className="space-y-1">
                            <label className="text-[8px] text-slate-500 uppercase block font-semibold font-mono">Endereço do Webhook (POST)</label>
                            <input 
                              type="text" 
                              value={webhookUrl}
                              onChange={e => setWebhookUrl(e.target.value)}
                              className="w-full bg-slate-900 border border-slate-800 p-2 rounded text-[9.5px] text-white font-mono focus:outline-none"
                              placeholder="https://hook.us1.make.com/..."
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => fireWebhook({ test: true, system: "PWA Simulator", message: "Teste via Mobile" })}
                              className="flex-1 bg-[#dfb26c] hover:bg-[#c89e58] text-slate-950 rounded-lg py-1.5 text-[9px] font-black cursor-pointer transition-all"
                            >
                              Tester Conexão
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText(webhookUrl);
                                triggerToast("URL copiada!");
                              }}
                              className="w-1/3 bg-slate-900 border border-slate-800 text-white rounded-lg py-1.5 text-[9px] font-bold cursor-pointer hover:bg-slate-850 transition-all"
                            >
                              Copiar URL
                            </button>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 🏡 SCREEN 3: VISÃO GERAL DAS PROPRIEDADES */}
                    {mobileTab === "properties" && (
                      <div className="space-y-4 animate-fadeIn flex-1 overflow-y-auto pb-4 scrollbar-none text-xs">
                        
                        {/* Selected Featured Property Card */}
                        {(() => {
                          const featured = properties.find(p => p.id === featuredPropertyId) || properties[0];
                          if (!featured) return null;

                          // Compute simulated metrics based on mockup numbers
                          // (Mockup displays Casa Amado with R$ 19.578, R$ 18.145, 68%)
                          const isAmado = featured.id === "casa-amado";
                          const displayRevenue = isAmado ? 19578.09 : (revenues.filter(r => r.propertyId === featured.id).reduce((s, r) => s + r.value, 0) || 12500);
                          const displayExpense = isAmado ? 1432.89 : (expenses.filter(e => e.propertyId === featured.id).reduce((s, e) => s + e.value, 0) || 450);
                          const displayProfit = displayRevenue - displayExpense;
                          const displayOccupancy = isAmado ? 68 : 78;

                          return (
                            <div className="bg-slate-950/50 border border-slate-850 rounded-xl overflow-hidden animate-fadeIn">
                              <img 
                                src={featured.image || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"} 
                                alt={featured.name} 
                                className="w-full h-32 object-cover" 
                              />
                              <div className="p-3.5 space-y-3">
                                <div className="flex justify-between items-center">
                                  <h4 className="text-xs font-black text-slate-100">{featured.name}</h4>
                                  <span className="text-[8px] font-bold text-[#dfb26c] bg-[#dfb26c]/10 border border-[#dfb26c]/20 px-2 py-0.5 rounded">
                                    Destaque
                                  </span>
                                </div>

                                <div className="grid grid-cols-3 gap-2 text-center border-t border-b border-slate-850/50 py-2.5">
                                  <div>
                                    <span className="text-[7.5px] text-slate-500 uppercase block font-semibold">Receita/Mês</span>
                                    <strong className="text-[10px] text-slate-200 block mt-0.5 font-mono">
                                      R$ {displayRevenue.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                                    </strong>
                                  </div>
                                  <div>
                                    <span className="text-[7.5px] text-slate-500 uppercase block font-semibold">Lucro</span>
                                    <strong className="text-[10px] text-emerald-400 block mt-0.5 font-mono">
                                      R$ {displayProfit.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                                    </strong>
                                  </div>
                                  <div>
                                    <span className="text-[7.5px] text-slate-500 uppercase block font-semibold">Ocupação</span>
                                    <strong className="text-[10px] text-sky-400 block mt-0.5 font-mono">
                                      {displayOccupancy}%
                                    </strong>
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <span className="text-[8px] bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full font-bold">
                                    {featured.rooms || 4} quartos
                                  </span>
                                  <span className="text-[8px] bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full font-bold">
                                    {featured.sizeSqM || 350} m²
                                  </span>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => triggerToast(`Detalhes: ${featured.description}`)}
                                  className="w-full bg-[#dfb26c] text-slate-950 hover:bg-[#c89e58] rounded-lg py-2 text-[10px] font-bold cursor-pointer transition-all"
                                >
                                  Ver detalhes completos
                                </button>
                              </div>
                            </div>
                          );
                        })()}

                        {/* Scrollable properties list below */}
                        <div className="space-y-2.5">
                          <h4 className="text-[9px] uppercase font-bold text-slate-500 tracking-wider pl-1">Outras Propriedades</h4>
                          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                            {properties.map(p => (
                              <div
                                key={p.id}
                                onClick={() => setFeaturedPropertyId(p.id)}
                                className={`p-2.5 border ${rounded.card} flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all ${
                                  featuredPropertyId === p.id ? "bg-[#dfb26c]/5 border-[#dfb26c]/40" : "bg-slate-950/40 border-slate-850"
                                }`}
                              >
                                <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                                <div className="flex-1 min-w-0 text-[10px]">
                                  <div className="flex justify-between items-center">
                                    <strong className="block text-slate-200 truncate">{p.name}</strong>
                                    <span className="text-[8px] text-slate-500 truncate font-mono">{p.location}</span>
                                  </div>
                                  <div className="flex justify-between mt-1 text-[8.5px] text-slate-500 font-mono">
                                    <span>Receita: R$ {(revenues.filter(r => r.propertyId === p.id).reduce((s, r) => s + r.value, 0) || 12500).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</span>
                                    <span className="font-sans font-bold">{p.rooms} qts</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                    {/* 💰 SCREEN 4: DASHBOARD FINANCEIRO */}
                    {mobileTab === "finance" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Dashboard Financeiro</h4>
                          <p className="text-[9px] text-slate-500">Métricas críticas de rentabilidade fiscal do portfólio.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Card 1: Rendimentos Bruto */}
                          <div className="rounded-xl p-3 flex flex-col justify-between h-24 shadow-md bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <span className="text-[8.5px] uppercase font-bold tracking-wider opacity-85">Rendimentos Bruto</span>
                            <strong className="text-xs font-black font-mono tracking-tight mt-auto block">
                              R$ {totalRevenues > 0 ? totalRevenues.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "148.732,26"}
                            </strong>
                          </div>
                          {/* Card 2: Deduções */}
                          <div className="rounded-xl p-3 flex flex-col justify-between h-24 shadow-md bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <span className="text-[8.5px] uppercase font-bold tracking-wider opacity-85">Deduções</span>
                            <strong className="text-xs font-black font-mono tracking-tight mt-auto block">
                              R$ {totalExpenses > 0 ? totalExpenses.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "34.639,20"}
                            </strong>
                          </div>
                          {/* Card 3: Base Líquida */}
                          <div className="rounded-xl p-3 flex flex-col justify-between h-24 shadow-md bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <span className="text-[8.5px] uppercase font-bold tracking-wider opacity-85">Base Líquida</span>
                            <strong className="text-xs font-black font-mono tracking-tight mt-auto block">
                              R$ {netProfit > 0 ? netProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "114.093,06"}
                            </strong>
                          </div>
                          {/* Card 4: Imposto Estimado */}
                          <div className="rounded-xl p-3 flex flex-col justify-between h-24 shadow-md bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <span className="text-[8.5px] uppercase font-bold tracking-wider opacity-85">Imposto Estimado</span>
                            <strong className="text-xs font-black font-mono tracking-tight mt-auto block">
                              R$ {totalRevenues > 0 ? (netProfit * 0.275).toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "29.583,29"}
                            </strong>
                          </div>
                        </div>

                        {/* Ações rápidas na parte inferior */}
                        <div className="flex gap-2 pt-2 mt-auto">
                          <button
                            type="button"
                            onClick={() => { setMobileTab("ocr"); triggerToast("Tire foto ou anexe comprovante!"); }}
                            className="flex-1 bg-white hover:bg-slate-100 text-slate-950 rounded-xl py-2.5 text-[10px] font-extrabold cursor-pointer transition-all border border-slate-350"
                          >
                            Anexar Comprovante
                          </button>
                          <button
                            type="button"
                            onClick={() => { setPwaFlow("executive-reports"); setMobileTab("analytics"); }}
                            className="flex-1 bg-slate-900 border border-slate-800 text-white hover:bg-slate-850 rounded-xl py-2.5 text-[10px] font-extrabold cursor-pointer transition-all"
                          >
                            Relatórios
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 🔧 SCREEN 5: OPERAÇÕES */}
                    {mobileTab === "operations" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Operações</h4>
                          <p className="text-[9px] text-slate-500">Monitoramento e controle de intervenções e manutenções ativas.</p>
                        </div>

                        <div className="space-y-2.5 overflow-y-auto max-h-[300px] scrollbar-none">
                          {(() => {
                            const defaultMaintenances: Maintenance[] = [
                              {
                                id: "maint-1",
                                propertyId: "casa-mayla",
                                title: "Limpeza da piscina - Casa Mayla - EM ANDAMENTO",
                                type: "preventive" as any,
                                status: "in_progress" as any,
                                date: "2026-06-13",
                                cost: 450
                              },
                              {
                                id: "maint-2",
                                propertyId: "casa-lilian",
                                title: "Ar condicionado - Casa Lilian - AGENDADA",
                                type: "preventive" as any,
                                status: "scheduled" as any,
                                date: "2026-06-15",
                                cost: 800
                              }
                            ];
                            const displayMaintenances = maintenances && maintenances.length > 0 ? maintenances : defaultMaintenances;
                            return displayMaintenances.map((m) => {
                              const prop = properties.find(p => p.id === m.propertyId);
                              const propName = prop ? prop.name : (m.propertyId === "casa-mayla" ? "Casa Mayla" : "Casa Lilian");
                              
                              let badgeColor = "bg-orange-500/10 text-orange-400 border-orange-500/20";
                              
                              return (
                                <div key={m.id} className="p-3 bg-slate-950/50 border border-slate-850 rounded-xl space-y-2">
                                  <div className="flex justify-between items-center">
                                    <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}>
                                      Preventiva
                                    </span>
                                    <strong className="text-[10px] text-slate-200 font-mono">
                                      R$ {m.cost.toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
                                    </strong>
                                  </div>
                                  <div>
                                    <h5 className="text-[10px] font-bold text-slate-100 leading-tight">
                                      {m.title}
                                    </h5>
                                    <span className="text-[8px] text-slate-500 block mt-1 font-semibold">
                                      Propriedade: {propName}
                                    </span>
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>

                        <button
                          type="button"
                          onClick={() => triggerToast("Formulário de Nova Intervenção")}
                          className="w-full bg-[#dfb26c] hover:bg-[#c89e58] text-slate-950 rounded-xl py-2.5 text-[10px] font-extrabold cursor-pointer transition-all mt-auto"
                        >
                          + Lançar Intervenção
                        </button>
                      </div>
                    )}

                    {/* 👤 SCREEN 6: CADASTROS (FORNECEDORES) */}
                    {mobileTab === "suppliers" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Fornecedores</h4>
                          <p className="text-[9px] text-slate-500">Diretório de prestadores de serviço e parceiros locais.</p>
                        </div>

                        <div className="space-y-2.5 overflow-y-auto max-h-[300px] scrollbar-none">
                          {(() => {
                            const defaultSuppliers: Supplier[] = [
                              {
                                id: "sup-1",
                                name: "AcquaClean Pools",
                                specialty: "Piscineiro",
                                contactName: "Roberto",
                                phone: "Ras - 29.834,490"
                              },
                              {
                                id: "sup-2",
                                name: "Dona Maria Zeladoria",
                                specialty: "Limpeza",
                                contactName: "Maria",
                                phone: "Bas - 42.558,240"
                              },
                              {
                                id: "sup-3",
                                name: "ClimaMax Refrigeração",
                                specialty: "Ar-Condicionado",
                                contactName: "Marcio",
                                phone: "Cas - 39.580,990"
                              }
                            ];
                            const displaySuppliers = suppliers && suppliers.length > 0 ? suppliers : defaultSuppliers;
                            return displaySuppliers.map((s) => (
                              <div key={s.id} className="p-3 bg-slate-950/50 border border-slate-850 rounded-xl flex items-center justify-between">
                                <div className="space-y-1 min-w-0">
                                  <strong className="block text-[10px] text-slate-100 truncate">{s.name} - {s.specialty}</strong>
                                  <span className="text-[9.5px] text-cyan-400 font-mono font-bold block">{s.phone}</span>
                                </div>
                                <div className="flex gap-1 shrink-0">
                                  <button 
                                    type="button"
                                    onClick={() => triggerToast(`Editar ${s.name}`)}
                                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
                                  >
                                    <Edit3 size={11} />
                                  </button>
                                  <button 
                                    type="button"
                                    onClick={() => triggerToast(`Excluir ${s.name}`)}
                                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-red-400 hover:text-red-300 cursor-pointer"
                                  >
                                    <Trash2 size={11} />
                                  </button>
                                </div>
                              </div>
                            ));
                          })()}
                        </div>

                        <button
                          type="button"
                          onClick={() => triggerToast("Formulário de Novo Fornecedor")}
                          className="w-full bg-[#dfb26c] hover:bg-[#c89e58] text-slate-950 rounded-xl py-2.5 text-[10px] font-extrabold cursor-pointer transition-all mt-auto"
                        >
                          + Novo Fornecedor
                        </button>
                      </div>
                    )}

                    {/* 👑 SCREEN 7: DASHBOARD PRINCIPAL (EXECUTIVO) */}
                    {mobileTab === "exec-dash" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Resumo Executivo</h4>
                          <p className="text-[9px] text-slate-500">Situação consolidada do caixa e provisão de tributos.</p>
                        </div>

                        <div className="space-y-2">
                          {/* Card 1: Rendimentos Bruto */}
                          <div className="rounded-xl p-3 flex justify-between items-center shadow-md bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <div>
                              <span className="text-[8px] uppercase font-black tracking-wider opacity-85">Rendimentos Bruto</span>
                              <strong className="text-xs font-black font-mono tracking-tight block mt-0.5">
                                R$ {totalRevenues > 0 ? totalRevenues.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "148.732,26"}
                              </strong>
                            </div>
                            <ArrowUpRight size={15} className="opacity-80 shrink-0" />
                          </div>
                          {/* Card 2: Deduções */}
                          <div className="rounded-xl p-3 flex justify-between items-center shadow-md bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <div>
                              <span className="text-[8px] uppercase font-black tracking-wider opacity-85">Deduções</span>
                              <strong className="text-xs font-black font-mono tracking-tight block mt-0.5">
                                R$ {totalExpenses > 0 ? totalExpenses.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "34.639,20"}
                              </strong>
                            </div>
                            <TrendingDown size={15} className="opacity-80 shrink-0" />
                          </div>
                          {/* Card 3: Base Líquida */}
                          <div className="rounded-xl p-3 flex justify-between items-center shadow-md bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <div>
                              <span className="text-[8px] uppercase font-black tracking-wider opacity-85">Base Líquida</span>
                              <strong className="text-xs font-black font-mono tracking-tight block mt-0.5">
                                R$ {netProfit > 0 ? netProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "114.093,06"}
                              </strong>
                            </div>
                            <TrendingUp size={15} className="opacity-80 shrink-0" />
                          </div>
                          {/* Card 4: Imposto Estimado */}
                          <div className="rounded-xl p-3 flex justify-between items-center shadow-md bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#D5A021] text-slate-950 border border-amber-300/30">
                            <div>
                              <span className="text-[8px] uppercase font-black tracking-wider opacity-85">Imposto Estimado</span>
                              <strong className="text-xs font-black font-mono tracking-tight block mt-0.5">
                                R$ {totalRevenues > 0 ? (netProfit * 0.275).toLocaleString("pt-BR", { minimumFractionDigits: 2 }) : "29.583,29"}
                              </strong>
                            </div>
                            <Info size={15} className="opacity-80 shrink-0" />
                          </div>
                        </div>

                        {/* Ações rápidas na parte inferior */}
                        <div className="grid grid-cols-3 gap-1.5 pt-2 mt-auto">
                          <button
                            type="button"
                            onClick={() => triggerToast("Nova Cobrança")}
                            className="bg-white hover:bg-slate-100 text-slate-950 rounded-lg py-2 text-[8.5px] font-extrabold cursor-pointer transition-all border border-slate-350 text-center"
                          >
                            Nova Cobrança
                          </button>
                          <button
                            type="button"
                            onClick={() => { setMobileTab("properties"); triggerToast("Abra aba imóveis para gerenciar!"); }}
                            className="bg-white hover:bg-slate-100 text-slate-950 rounded-lg py-2 text-[8.5px] font-extrabold cursor-pointer transition-all border border-slate-350 text-center"
                          >
                            Adic. Imóvel
                          </button>
                          <button
                            type="button"
                            onClick={() => setMobileTab("analytics")}
                            className="bg-white hover:bg-slate-100 text-slate-950 rounded-lg py-2 text-[8.5px] font-extrabold cursor-pointer transition-all border border-slate-350 text-center"
                          >
                            Relatórios
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 📊 SCREEN 8: ANALYTICS & REPORTS */}
                    {mobileTab === "analytics" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Analytics & Reports</h4>
                          <p className="text-[9px] text-slate-500">Visualização de performance e lucratividade por propriedade.</p>
                        </div>

                        <div className="space-y-3.5 overflow-y-auto max-h-[320px] scrollbar-none flex-1">
                          {/* Chart 1: Receita por Imóvel (Turquesa) */}
                          <div className="bg-slate-950/50 border border-slate-850 rounded-xl p-3.5 space-y-2">
                            <span className="text-[8.5px] uppercase font-bold text-slate-500 block">Receita por Imóvel (K R$)</span>
                            <div className="flex justify-around items-end h-24 pt-4 border-b border-slate-800">
                              {[
                                { name: "Casa Nova", val: 85, display: "10" },
                                { name: "Predinho", val: 95, display: "10" },
                                { name: "Casa Coast", val: 90, display: "11" }
                              ].map((bar, i) => (
                                <div key={i} className="flex flex-col items-center w-12 group">
                                  <span className="text-[7.5px] font-mono font-bold text-cyan-400 mb-1">{bar.display}</span>
                                  <div 
                                    className="w-4 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all duration-300 group-hover:brightness-110" 
                                    style={{ height: `${bar.val * 0.4}px` }}
                                  />
                                  <span className="text-[7px] text-slate-500 text-center truncate w-full mt-1 font-semibold leading-none">{bar.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Chart 2: Lucratividade vs Custos (Laranja/Vermelho) */}
                          <div className="bg-slate-950/50 border border-slate-850 rounded-xl p-3.5 space-y-2">
                            <span className="text-[8.5px] uppercase font-bold text-slate-500 block">Lucratividade vs Custos</span>
                            <div className="flex justify-around items-end h-24 pt-4 border-b border-slate-800">
                              {[
                                { name: "Lucro Líquido", val: 90, display: "14", color: "from-orange-500 to-orange-400", txtColor: "text-orange-400" },
                                { name: "Custos Operac.", val: 65, display: "10", color: "from-rose-500 to-rose-400", txtColor: "text-rose-400" }
                              ].map((bar, i) => (
                                <div key={i} className="flex flex-col items-center w-16 group">
                                  <span className={`text-[7.5px] font-mono font-bold ${bar.txtColor} mb-1`}>{bar.display}</span>
                                  <div 
                                    className={`w-5 bg-gradient-to-t ${bar.color} rounded-t transition-all duration-300 group-hover:brightness-110`} 
                                    style={{ height: `${bar.val * 0.4}px` }}
                                  />
                                  <span className="text-[7px] text-slate-500 text-center truncate w-full mt-1 font-semibold leading-none">{bar.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ⚙️ SCREEN 9: DOCUMENTS & SETTINGS */}
                    {mobileTab === "settings" && (
                      <div className="space-y-4 animate-fadeIn flex-1 flex flex-col pb-4 text-xs">
                        <div className="text-center space-y-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-300 uppercase tracking-wider">Documents & Settings</h4>
                          <p className="text-[9px] text-slate-500">Gestão documental e configurações administrativas de webhook.</p>
                        </div>

                        <div className="space-y-3.5 overflow-y-auto max-h-[300px] scrollbar-none flex-1">
                          {/* Documentos */}
                          <div className="bg-slate-950/50 border border-slate-850 rounded-xl p-3 space-y-2">
                            <span className="text-[8.5px] uppercase font-bold text-slate-500 block">Gestão de Documentos</span>
                            <div className="space-y-2">
                              {[
                                { name: "Regulamento_Villa_Lilian.pdf", size: "1.2 MB" },
                                { name: "Contrato_Itaú_XP_Corp.pdf", size: "3.4 MB" }
                              ].map((doc, i) => (
                                <div key={i} className="p-2 bg-slate-900 border border-slate-850 rounded-lg flex items-center justify-between">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <FileText size={14} className="text-red-400 shrink-0" />
                                    <div className="min-w-0">
                                      <strong className="block text-[9px] text-slate-200 truncate">{doc.name}</strong>
                                      <span className="text-[7.5px] text-slate-500 block">{doc.size}</span>
                                    </div>
                                  </div>
                                  <div className="flex gap-1">
                                    <button 
                                      type="button"
                                      onClick={() => triggerToast(`Editar ${doc.name}`)}
                                      className="px-1.5 py-0.5 rounded text-[8px] bg-slate-950 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
                                    >
                                      Editor
                                    </button>
                                    <button 
                                      type="button"
                                      onClick={() => triggerToast(`Excluir ${doc.name}`)}
                                      className="px-1.5 py-0.5 rounded text-[8px] bg-slate-950 border border-slate-800 text-red-400 hover:text-red-300 cursor-pointer"
                                    >
                                      Exclui
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Configurações */}
                          <div className="bg-slate-950/50 border border-slate-850 rounded-xl p-3 space-y-2.5">
                            <span className="text-[8.5px] uppercase font-bold text-slate-500 block">Configurações Gerais</span>
                            <div className="space-y-2 text-[9.5px]">
                              <div>
                                <label className="text-[7.5px] text-slate-500 font-bold block mb-0.5 uppercase">Empresa</label>
                                <input 
                                  type="text" 
                                  defaultValue="Casa Select" 
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white text-[9px] focus:outline-none"
                                />
                              </div>
                              <div>
                                <label className="text-[7.5px] text-slate-500 font-bold block mb-0.5 uppercase">Moeda</label>
                                <select className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white text-[9px] focus:outline-none">
                                  <option>BRL (R$)</option>
                                  <option>USD ($)</option>
                                  <option>EUR (€)</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-[7.5px] text-slate-500 font-bold block mb-0.5 uppercase">Idioma</label>
                                <select className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white text-[9px] focus:outline-none">
                                  <option>Português (BR)</option>
                                  <option>English (US)</option>
                                  <option>Español (ES)</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-[7.5px] text-slate-500 font-bold block mb-0.5 uppercase">WhatsApp Webhook</label>
                                <input 
                                  type="text" 
                                  defaultValue="https://api.whatsapp.com/send?phone=..." 
                                  className="w-full bg-slate-900 border border-slate-800 p-1.5 rounded text-white font-mono text-[9px] focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-2 pt-1 mt-auto">
                          <button
                            type="button"
                            onClick={() => triggerToast("Novo Documento")}
                            className="w-2/5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg py-2 text-[9px] font-bold cursor-pointer transition-all flex items-center justify-center gap-1"
                          >
                            <Plus size={10} /> Novo Doc.
                          </button>
                          <button
                            type="button"
                            onClick={() => triggerToast("Configurações Salvas!")}
                            className="w-3/5 bg-gradient-to-r from-[#dfb26c] to-[#c89e58] text-slate-950 font-black rounded-lg py-2 text-[9px] cursor-pointer transition-all shadow-md"
                          >
                            Salvar Configurações
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                                   {/* Floating Action Button (FAB) */}
              {mobileScreen === "dashboard" && (
                <button 
                  onClick={() => setIsFabMenuOpen(true)}
                  className="absolute bottom-20 right-4 w-11 h-11 rounded-full bg-[#dfb26c] text-slate-950 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 hover:scale-105 transition-all z-40"
                  style={{ 
                    boxShadow: "0 4px 14px rgba(223, 178, 108, 0.4)"
                  }}
                >
                  <Plus size={22} strokeWidth={3} />
                </button>
              )}

              {/* ═══════════════════════════════════════ */}
              {/*  FAB BOTTOM MENU (Ação Central)         */}
              {/* ═══════════════════════════════════════ */}
              {mobileScreen === "dashboard" && isFabMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    onClick={() => setIsFabMenuOpen(false)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
                  />
                  
                  {/* Bottom Sheet sliding panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#121821] border-t rounded-t-[28px] p-5 pb-6 space-y-4 z-50 animate-slideUp"
                    style={{ borderColor: c.border }}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: c.textMuted }}>Central de Ações</h4>
                      <button 
                        onClick={() => setIsFabMenuOpen(false)}
                        className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { title: "📷 Tirar Foto (Câmera)", desc: "Captura direta", icon: Camera, color: "text-rose-500 bg-rose-500/10", action: () => mobileCameraInputRef.current?.click() },
                        { title: "📄 Subir PDF/Comprovante", desc: "Escolher arquivo", icon: FileText, color: "text-sky-500 bg-sky-500/10", action: () => mobileFileInputRef.current?.click() },
                        { title: "⏰ Novo Lembrete", desc: "Adicionar na Agenda", icon: Calendar, color: "text-amber-500 bg-amber-500/10", action: () => { setMobileTab("calendar"); triggerToast("Defina o dia e adicione lembrete!"); } },
                        { title: "🏡 Nova Propriedade", desc: "Adicionar imóvel", icon: Building2, color: "text-blue-500 bg-blue-500/10", action: () => triggerToast("Formulário de nova propriedade") }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} 
                            onClick={() => {
                              item.action();
                              setIsFabMenuOpen(false);
                            }}
                            className={`p-3.5 border ${rounded.card} flex flex-col justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A] transition-all`}
                            style={{ backgroundColor: c.card, borderColor: c.border }}
                          >
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3.5 ${item.color}`}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <strong className="text-[11px] block text-slate-900 dark:text-white leading-tight">{item.title}</strong>
                              <span className="text-[9px] block text-slate-500 dark:text-slate-400 mt-0.5 leading-none">{item.desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* ═══════════════════════════════════════ */}
              {/*  BOTTOM NAVIGATION BAR (Revolut Style) */}
              {/* ═══════════════════════════════════════ */}
              {mobileScreen === "dashboard" && (
                <div className="absolute bottom-0 left-0 right-0 h-[64px] flex items-center justify-around z-35 pb-3.5 px-3 select-none"
                  style={{ 
                    backgroundColor: c.card, 
                    borderTop: `1.5px solid ${c.border}`,
                    boxShadow: isDark ? "0 -4px 15px rgba(0,0,0,0.5)" : "0 -2px 10px rgba(0,0,0,0.03)"
                  }}
                >
                  {pwaFlow === "ocr-bookings" && (
                    <>
                      {/* OCR Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("ocr")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "ocr" ? c.accent : c.textMuted }}
                      >
                        <Camera size={17} strokeWidth={mobileTab === "ocr" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Leitor OCR</span>
                        {mobileTab === "ocr" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Calendar Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("calendar")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "calendar" ? c.accent : c.textMuted }}
                      >
                        <Calendar size={17} strokeWidth={mobileTab === "calendar" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Calendário</span>
                        {mobileTab === "calendar" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Properties Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("properties")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "properties" ? c.accent : c.textMuted }}
                      >
                        <Building2 size={17} strokeWidth={mobileTab === "properties" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Imóveis</span>
                        {mobileTab === "properties" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>
                    </>
                  )}

                  {pwaFlow === "accounting-operations" && (
                    <>
                      {/* Finance Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("finance")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "finance" ? c.accent : c.textMuted }}
                      >
                        <DollarSign size={17} strokeWidth={mobileTab === "finance" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Financeiro</span>
                        {mobileTab === "finance" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Operations Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("operations")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "operations" ? c.accent : c.textMuted }}
                      >
                        <Wrench size={17} strokeWidth={mobileTab === "operations" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Operações</span>
                        {mobileTab === "operations" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Suppliers Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("suppliers")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "suppliers" ? c.accent : c.textMuted }}
                      >
                        <User size={17} strokeWidth={mobileTab === "suppliers" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Fornecedores</span>
                        {mobileTab === "suppliers" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>
                    </>
                  )}

                  {pwaFlow === "executive-reports" && (
                    <>
                      {/* Exec Dash Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("exec-dash")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "exec-dash" ? c.accent : c.textMuted }}
                      >
                        <Home size={17} strokeWidth={mobileTab === "exec-dash" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Dashboard</span>
                        {mobileTab === "exec-dash" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Analytics Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("analytics")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "analytics" ? c.accent : c.textMuted }}
                      >
                        <BarChart3 size={17} strokeWidth={mobileTab === "analytics" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Relatórios</span>
                        {mobileTab === "analytics" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>

                      {/* Settings Tab */}
                      <button 
                        type="button"
                        onClick={() => setMobileTab("settings")} 
                        className="flex flex-col items-center justify-center w-16 h-11 transition-all cursor-pointer relative"
                        style={{ color: mobileTab === "settings" ? c.accent : c.textMuted }}
                      >
                        <Sliders size={17} strokeWidth={mobileTab === "settings" ? 2.5 : 1.8} />
                        <span className="text-[8px] font-bold mt-0.5">Ajustes</span>
                        {mobileTab === "settings" && (
                          <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#dfb26c] animate-bounce" />
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

        {/* ═══════════════════════════════════════════════════ */}
        {/*  RIGHT PANEL - PWA Installation & UX Documentation  */}
        {/* ═══════════════════════════════════════════════════ */}
        <div className="space-y-6">
          {/* PWA Installation/Download Card */}
          {!isPWA && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-500/10 rounded-xl text-rose-500">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">Instalar Aplicativo Oficial (PWA)</h3>
                  <p className="text-slate-400 text-[10px] font-semibold mt-0.5">Acesse a Casa Select de forma rápida e offline pela tela inicial do seu celular.</p>
                </div>
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 space-y-3.5">
                  <button
                    onClick={handleInstallClick}
                    className="w-full flex items-center justify-center gap-2 bg-[#dfb26c] hover:bg-[#c99f5d] text-slate-950 font-bold text-xs py-3 px-4 rounded-xl cursor-pointer transition-all shadow-md shadow-[#dfb26c]/10"
                  >
                    <Smartphone size={15} strokeWidth={2.5} />
                    Baixar e Instalar PWA
                  </button>

                  <div className="border-t border-slate-800/80 pt-3 space-y-1.5 text-[10px] text-slate-400">
                    <span className="font-bold text-slate-300 block uppercase tracking-wide text-[9px]">Como instalar no Celular:</span>
                    <p className="leading-tight"><strong className="text-slate-300">iOS (Safari):</strong> Toque em Compartilhar <span className="inline-block border border-slate-700 px-1 rounded bg-slate-800">⎙</span> e depois em <strong>Adicionar à Tela de Início</strong>.</p>
                    <p className="leading-tight"><strong className="text-slate-300">Android (Chrome):</strong> Toque nos três pontos e depois em <strong>Instalar aplicativo</strong>.</p>
                  </div>
              </div>
            </div>
          )}

          {/* Original Documentation Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-rose-500 animate-spin" style={{ animationDuration: "6s" }} />
              <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">PropertyOS Mobile UX 3.0</h3>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <p>Implementamos um redesenho completo da experiência mobile do simulador, focando em minimalismo executivo e inteligência operacional.</p>
              
              <div className="space-y-3 pt-2">
                {[
                  { title: "Arquitetura Japonesa Contemporânea", desc: "Arte vetorial em SVG customizada no cabeçalho do login, com o monte Fuji e a cerejeira sakura, criando uma assinatura visual luxuosa." },
                  { title: "Dashboard Executivo e Inteligente", desc: "Hero area com patrimônio geral sob gestão e KPIs simplificados, reduzindo a poluição de dezenas de cartões no carregamento inicial." },
                  { title: "Seção Exclusiva de IA Insights", desc: "Visualizações horizontais (pills de scroll) com cartões gerenciais preditivos que ajudam na tomada de decisão imediata." },
                  { title: "Stripe & Revolut Navigation System", desc: "Aba inferior limpa com botão central flutuante (+) que abre uma Bottom Sheet animada para lançamentos rápidos (Receitas, Despesas, Contratos)." },
                  { title: "Novo Sistema de Cores e Bordas Sólidas", desc: "Modo Escuro com background #0A0F14 e cards #18202A. Modo Claro com background #FAFBFC e cards #FFFFFF. Bordas circulares premium de 16px." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold font-mono text-[10px] shrink-0 mt-0.5">{idx + 1}</div>
                    <div>
                      <h5 className="font-bold text-white text-[11px]">{item.title}</h5>
                      <p className="text-slate-400 text-[10px] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-[11.5px] text-slate-400 italic bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                💡 <strong>Instruções de Teste</strong>:<br />
                1. Clique na biometria ou preencha o formulário para fazer login no simulador.<br />
                2. Explore as abas (Início, Imóveis, Financeiro, Perfil) e mude o tema geral para testar o Dark/Light Mode.<br />
                3. Clique no botão vermelho central (+) para abrir a Bottom Sheet de ações!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
