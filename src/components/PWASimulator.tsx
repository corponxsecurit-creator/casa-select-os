import React from "react";
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
  AlertCircle
} from "lucide-react";
import { Property, Booking, Revenue, Expense } from "../types";
import { KobayashiLogo } from "./Sidebar";

interface PWASimulatorProps {
  properties: Property[];
  bookings: Booking[];
  expenses: Expense[];
  revenues: Revenue[];
  onDataChanged: () => void;
  onClose: () => void;
  darkMode?: boolean;
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
  darkMode = true
}: PWASimulatorProps) {
  const [mobileScreen, setMobileScreen] = React.useState<"login" | "dashboard">("login");
  const [mobileTab, setMobileTab] = React.useState<"home" | "properties" | "finance" | "documents" | "profile">("home");
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [isFabMenuOpen, setIsFabMenuOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [emailFocused, setEmailFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);

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

  return (
    <div id="pwa-sim-wrapper" className="space-y-6 select-none">
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
        <div className="flex justify-center py-2 relative">
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
                        {/* ripple pulses */}
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

                {/* ═══════════════════════════════════════ */}
                {/*  DASHBOARD SCREEN (Notion & Stripe UX) */}
                {/* ═══════════════════════════════════════ */}
                {mobileScreen === "dashboard" && (
                  <div className="space-y-5 py-1 select-none">
                    
                    {/* Header: Greeting & Profile */}
                    {mobileTab === "home" && (
                      <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: c.border }}>
                        <div className="flex items-center gap-2.5">
                          {/* Avatar Circle */}
                          <div className="w-8 h-8 rounded-full text-white font-extrabold flex items-center justify-center text-xs shadow-md shrink-0 text-keep-white"
                            style={{ backgroundColor: c.accent }}
                          >
                            HK
                          </div>
                          <div>
                            <span className="text-[10px] font-bold block" style={{ color: c.textMuted }}>Olá, Administrador</span>
                            <span className="text-xs font-black block tracking-tight" style={{ color: c.text }}>Dashboard</span>
                          </div>
                        </div>

                        {/* Search and Alert header Actions */}
                        <div className="flex items-center gap-2">
                          <button onClick={() => triggerToast("Central de busca ativada")} className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
                            <Search size={15} style={{ color: c.textMuted }} />
                          </button>
                          <div className="relative">
                            <button onClick={() => triggerToast("Você possui 3 alertas operacionais")} className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer">
                              <Bell size={15} style={{ color: c.textMuted }} />
                              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ═══ TAB: HOME ═══ */}
                    {mobileTab === "home" && (
                      <div className="space-y-5 animate-fadeIn">
                        
                        {/* Hero Area: Strategic Highlights */}
                        <div className={`p-4 ${rounded.card} border relative overflow-hidden flex flex-col justify-between`}
                          style={{ 
                            backgroundColor: c.card, 
                            borderColor: c.border,
                            boxShadow: isDark ? "0 4px 20px rgba(0,0,0,0.5)" : "0 4px 15px rgba(0,0,0,0.03)"
                          }}
                        >
                          <div className="absolute right-0 top-0 w-24 h-24 rounded-full blur-xl opacity-30 pointer-events-none" 
                            style={{ background: `radial-gradient(circle, ${c.accent} 0%, transparent 70%)` }}
                          />
                          <div className="space-y-0.5">
                            <span className="text-[9px] uppercase font-bold tracking-wider" style={{ color: c.textMuted }}>Patrimônio Geral Sob Gestão</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-[20px] font-black tracking-tight" style={{ color: c.text }}>R$ 4.250.000,00</span>
                              <span className="text-[9px] font-bold text-emerald-500 font-mono">100% Ativo</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3 pt-3.5 mt-3 border-t font-mono text-[10px]" style={{ borderColor: c.border }}>
                            <div>
                              <span className="text-[8px] font-sans font-bold uppercase tracking-wider block" style={{ color: c.textMuted }}>Receitas</span>
                              <strong className="text-emerald-500 block font-black mt-0.5">R$ {totalRevenues.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</strong>
                            </div>
                            <div>
                              <span className="text-[8px] font-sans font-bold uppercase tracking-wider block" style={{ color: c.textMuted }}>Ocupação</span>
                              <strong className="text-sky-500 dark:text-sky-400 block font-black mt-0.5">{averageOccupancy}%</strong>
                            </div>
                            <div>
                              <span className="text-[8px] font-sans font-bold uppercase tracking-wider block" style={{ color: c.textMuted }}>ROI Médio</span>
                              <strong className="text-purple-500 block font-black mt-0.5">{averageRoi}%</strong>
                            </div>
                          </div>
                        </div>

                        {/* IA INSIGHTS Section (Linear/Stripe UX) */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-1.5 pl-1">
                            <Sparkles size={13} style={{ color: c.warning }} className="animate-pulse" />
                            <h4 className="text-[11px] font-bold uppercase tracking-wider" style={{ color: c.textMuted }}>Insights Select AI</h4>
                          </div>

                          <div className="flex gap-3 overflow-x-auto pb-1.5 scrollbar-none snap-x">
                            {[
                              { label: "Potencial de Reajuste", desc: "3 imóveis estão com aluguel abaixo da média da região.", color: c.warning, icon: TrendingUp },
                              { label: "Vencimentos em 15d", desc: "2 contratos de locação precisam de renovação imediata.", color: c.accent, icon: Calendar },
                              { label: "Ocupação Elevada", desc: "A taxa de ocupação subiu 8% no período atual.", color: c.success, icon: CheckCircle2 },
                              { label: "Projeção Financeira", desc: "Previsão de crescimento de 12% para o próximo mês.", color: c.purple, icon: TrendingUp }
                            ].map((item, idx) => {
                              const Icon = item.icon;
                              return (
                                <div key={idx} 
                                  onClick={() => triggerToast(`Insight: ${item.label}`)}
                                  className={`w-[190px] shrink-0 p-3.5 border ${rounded.card} snap-start flex flex-col justify-between cursor-pointer`}
                                  style={{ backgroundColor: c.card, borderColor: c.border }}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                                      <Icon size={11} style={{ color: item.color }} />
                                    </div>
                                    <span className="text-[10px] font-bold truncate" style={{ color: c.text }}>{item.label}</span>
                                  </div>
                                  <p className="text-[9.5px] mt-2 leading-snug" style={{ color: c.textMuted }}>{item.desc}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Organized Dashboard Blocks */}
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider pl-1" style={{ color: c.textMuted }}>Visão Geral Operacional</h4>
                          
                          <div className="grid grid-cols-2 gap-3">
                            
                            {/* Block: Financeiro */}
                            <div onClick={() => setMobileTab("finance")} className={`p-3.5 border ${rounded.card} cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all flex flex-col justify-between`}
                              style={{ backgroundColor: c.card, borderColor: c.border }}
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Wallet size={13} className="text-emerald-500" />
                                  <span className="text-[10px] font-bold" style={{ color: c.text }}>Financeiro</span>
                                </div>
                                <span className="text-[10px] block" style={{ color: c.textMuted }}>Lucro Líquido</span>
                              </div>
                              <div className="flex items-center justify-between mt-2.5">
                                <strong className="text-sm font-black text-emerald-500 font-mono block">R$ {netProfit.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</strong>
                                <svg className="w-10 h-5 text-emerald-500 opacity-80" viewBox="0 0 50 20" fill="none">
                                  <path d="M2 15 Q 12 18, 22 8 T 48 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </div>
                            </div>

                            {/* Block: Operacional */}
                            <div onClick={() => setMobileTab("properties")} className={`p-3.5 border ${rounded.card} cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all flex flex-col justify-between`}
                              style={{ backgroundColor: c.card, borderColor: c.border }}
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Building2 size={13} className="text-blue-500" />
                                  <span className="text-[10px] font-bold" style={{ color: c.text }}>Operacional</span>
                                </div>
                                <span className="text-[10px] block" style={{ color: c.textMuted }}>Imóveis Ativos</span>
                              </div>
                              <div className="mt-2.5">
                                <strong className="text-sm font-black text-blue-500 block">{properties.length} Unidades</strong>
                                <div className="mt-2 space-y-1">
                                  <div className="flex justify-between text-[7px] font-bold" style={{ color: c.textMuted }}>
                                    <span>Ocupação</span>
                                    <span>{averageOccupancy}%</span>
                                  </div>
                                  <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${averageOccupancy}%` }} />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Block: Manutenção */}
                            <div onClick={() => triggerToast("Central de Manutenções mobile")} className={`p-3.5 border ${rounded.card} cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all flex flex-col justify-between`}
                              style={{ backgroundColor: c.card, borderColor: c.border }}
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <Wrench size={13} className="text-amber-500" />
                                  <span className="text-[10px] font-bold" style={{ color: c.text }}>Manutenções</span>
                                </div>
                                <span className="text-[10px] block" style={{ color: c.textMuted }}>Chamados Ativos</span>
                              </div>
                              <div className="mt-2.5">
                                <strong className="text-sm font-black text-amber-500 block">4 Pendentes</strong>
                                <div className="flex items-center gap-1 mt-2 text-[8px] font-bold" style={{ color: c.warning }}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                  <span className="pl-0.5 tracking-wider">ATENÇÃO</span>
                                </div>
                              </div>
                            </div>

                            {/* Block: Documentação */}
                            <div onClick={() => setMobileTab("documents")} className={`p-3.5 border ${rounded.card} cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all flex flex-col justify-between`}
                              style={{ backgroundColor: c.card, borderColor: c.border }}
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <FileText size={13} className="text-purple-500" />
                                  <span className="text-[10px] font-bold" style={{ color: c.text }}>Documentos</span>
                                </div>
                                <span className="text-[10px] block" style={{ color: c.textMuted }}>Vencimentos</span>
                              </div>
                              <div className="mt-2.5">
                                <strong className="text-sm font-black text-purple-500 block">Assinados</strong>
                                <div className="flex items-center gap-1 mt-2.5 text-[8.5px] font-bold text-emerald-500">
                                  <CheckCircle2 size={10} />
                                  <span className="tracking-wide">TUDO EM DIA</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Quick Access Horizontal Pills */}
                        <div className="space-y-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider pl-1" style={{ color: c.textMuted }}>Ações Rápidas</h4>
                          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
                            {[
                              { label: "Propriedades", action: () => setMobileTab("properties") },
                              { label: "Lançar Receita", action: () => { setIsFabMenuOpen(true); triggerToast("Selecione Nova Receita"); } },
                              { label: "Lançar Despesa", action: () => { setIsFabMenuOpen(true); triggerToast("Selecione Nova Despesa"); } },
                              { label: "Ver Relatório", action: () => triggerToast("Relatórios gerenciais") }
                            ].map((pill, idx) => (
                              <button key={idx} 
                                onClick={pill.action}
                                className={`px-4 py-2 text-[10px] font-bold shrink-0 border border-slate-200 dark:border-slate-800 ${rounded.pill} bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 cursor-pointer`}
                                style={{ color: c.text }}
                              >
                                {pill.label}
                              </button>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                    {/* ═══ TAB: PROPERTIES ═══ */}
                    {mobileTab === "properties" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="flex justify-between items-center pb-1 border-b" style={{ borderColor: c.border }}>
                          <h3 className="text-[14px] font-black" style={{ color: c.text }}>Seus Imóveis ({properties.length})</h3>
                          <button 
                            onClick={() => triggerToast("Adicionar imóvel via menu FAB (+)")} 
                            className="p-1 rounded cursor-pointer transition-all"
                            style={{ backgroundColor: `${c.accent}1a`, color: c.accent }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="space-y-3">
                          {properties.map((p) => (
                            <div key={p.id} 
                              onClick={() => triggerToast(`Visualizando imóvel: ${p.name}`)}
                              className={`p-3 border ${rounded.card} flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all`}
                              style={{ backgroundColor: c.card, borderColor: c.border }}
                            >
                              <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center gap-1">
                                  <h4 className="text-xs font-bold truncate text-slate-900 dark:text-white">{p.name}</h4>
                                  <span className="text-[7.5px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">Ativo</span>
                                </div>
                                <div className="flex items-center gap-1 text-[9px] mt-1" style={{ color: c.textMuted }}>
                                  <MapPin size={9} />
                                  <span className="truncate">{p.location}</span>
                                </div>
                                <div className="flex justify-between items-center mt-1.5 font-mono text-[9px]">
                                  <span style={{ color: c.textMuted }}>Quartos: {p.rooms}</span>
                                  <span className="font-bold text-slate-800 dark:text-white">{p.sizeSqM} m²</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ═══ TAB: FINANCEIRO ═══ */}
                    {mobileTab === "finance" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="pb-1 border-b" style={{ borderColor: c.border }}>
                          <h3 className="text-[14px] font-black" style={{ color: c.text }}>Financeiro Consolidado</h3>
                        </div>

                        {/* Mini flow overview */}
                        <div className={`p-4 border ${rounded.card} space-y-3`} style={{ backgroundColor: c.card, borderColor: c.border }}>
                          <div className="flex justify-between text-xs">
                            <span style={{ color: c.textMuted }}>Lucro Operacional</span>
                            <span className="font-bold text-emerald-500">R$ {netProfit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                          </div>
                          <div className="flex justify-between text-xs border-t pt-2" style={{ borderColor: c.border }}>
                            <span style={{ color: c.textMuted }}>Receitas</span>
                            <span className="font-bold text-slate-900 dark:text-white">R$ {totalRevenues.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                          </div>
                          <div className="flex justify-between text-xs border-t pt-2" style={{ borderColor: c.border }}>
                            <span style={{ color: c.textMuted }}>Despesas</span>
                            <span className="font-bold text-rose-500">R$ {totalExpenses.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                          </div>
                        </div>

                        {/* Recent Transactions List */}
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-wider pl-1" style={{ color: c.textMuted }}>Últimos Lançamentos</h4>
                          
                          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                            {revenues.slice(0, 3).map((r, i) => (
                              <div key={`rev-${i}`} className={`p-2.5 border ${rounded.inner} flex justify-between items-center text-xs`}
                                style={{ backgroundColor: c.card, borderColor: c.border }}
                              >
                                <div>
                                  <strong className="block font-sans text-slate-800 dark:text-slate-100">{r.description || "Aluguel"}</strong>
                                  <span className="text-[9px] block opacity-60 font-mono mt-0.5">{r.date}</span>
                                </div>
                                <strong className="text-emerald-500 font-mono">+ R$ {r.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong>
                              </div>
                            ))}
                            {expenses.slice(0, 3).map((e, i) => (
                              <div key={`exp-${i}`} className={`p-2.5 border ${rounded.inner} flex justify-between items-center text-xs`}
                                style={{ backgroundColor: c.card, borderColor: c.border }}
                              >
                                <div>
                                  <strong className="block font-sans text-slate-800 dark:text-slate-100">{e.description || "Manutenção"}</strong>
                                  <span className="text-[9px] block opacity-60 font-mono mt-0.5">{e.date}</span>
                                </div>
                                <strong className="text-rose-500 font-mono">- R$ {e.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ═══ TAB: DOCUMENTS ═══ */}
                    {mobileTab === "documents" && (
                      <div className="space-y-4 animate-fadeIn">
                        <div className="pb-1 border-b" style={{ borderColor: c.border }}>
                          <h3 className="text-[14px] font-black" style={{ color: c.text }}>Central de Documentos</h3>
                        </div>

                        {/* Search Bar */}
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs" style={{ backgroundColor: c.surface, borderColor: c.border }}>
                          <Search size={14} style={{ color: c.textMuted }} />
                          <input type="text" placeholder="Buscar contratos ou recibos..." className="bg-transparent flex-1 focus:outline-none" />
                        </div>

                        {/* List */}
                        <div className="space-y-2.5">
                          {[
                            { name: "Contrato de Locação - Casa Lilian.pdf", size: "2.4 MB", type: "Contrato", date: "12/04/2026", status: "Assinado", icon: FileCheck, color: "text-emerald-500" },
                            { name: "Apólice de Seguro - Predinho.pdf", size: "1.8 MB", type: "Seguro", date: "28/03/2026", status: "Ativo", icon: FileText, color: "text-blue-500" },
                            { name: "Recibo de Pintura - Casa Vintage.pdf", size: "512 KB", type: "Fatura", date: "15/05/2026", status: "Pago", icon: DollarSign, color: "text-amber-500" },
                            { name: "Escritura Oficial - Casa Mayla.pdf", size: "12.8 MB", type: "Cartório", date: "02/01/2025", status: "Registrado", icon: Briefcase, color: "text-purple-500" }
                          ].map((doc, idx) => {
                            const Icon = doc.icon;
                            return (
                              <div key={idx} 
                                onClick={() => triggerToast(`Download iniciado: ${doc.name}`)}
                                className={`p-3 border ${rounded.card} flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#18202A]/80 transition-all`}
                                style={{ backgroundColor: c.card, borderColor: c.border }}
                              >
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-slate-100 dark:bg-slate-800 ${doc.color}`}>
                                  <Icon size={14} />
                                </div>
                                <div className="flex-1 min-w-0 text-xs">
                                  <h5 className="font-bold truncate text-slate-800 dark:text-slate-100">{doc.name}</h5>
                                  <div className="flex justify-between items-center text-[9px] mt-1" style={{ color: c.textMuted }}>
                                    <span>{doc.size} &bull; {doc.type}</span>
                                    <span className="font-bold uppercase" style={{ color: c.success }}>{doc.status}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ═══ TAB: PROFILE ═══ */}
                    {mobileTab === "profile" && (
                      <div className="space-y-5 animate-fadeIn">
                        
                        {/* Avatar overview */}
                        <div className="flex flex-col items-center justify-center text-center p-4 border rounded-2xl"
                          style={{ backgroundColor: c.card, borderColor: c.border }}
                        >
                          <div 
                            className="w-16 h-16 rounded-full text-white text-xl font-extrabold flex items-center justify-center shadow-lg text-keep-white mb-2"
                            style={{ backgroundColor: c.accent }}
                          >
                            HK
                          </div>
                          <h4 className="text-sm font-black" style={{ color: c.text }}>Casa Select</h4>
                          <span className="text-[10px] uppercase font-bold tracking-wider" style={{ color: c.textMuted }}>Administrador Geral</span>
                        </div>

                        {/* Actions */}
                        <div className="space-y-2">
                          <button 
                            onClick={() => triggerToast("Preferências salvas")}
                            className="w-full p-3.5 border rounded-xl flex items-center justify-between text-xs font-semibold cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800"
                            style={{ backgroundColor: c.card, borderColor: c.border, color: c.text }}
                          >
                            <span>Configurações do App</span>
                            <ChevronRight size={14} style={{ color: c.textMuted }} />
                          </button>
                          
                          <button 
                            onClick={() => triggerToast("Central de Segurança")}
                            className="w-full p-3.5 border rounded-xl flex items-center justify-between text-xs font-semibold cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800"
                            style={{ backgroundColor: c.card, borderColor: c.border, color: c.text }}
                          >
                            <span>Segurança e Biometria</span>
                            <ChevronRight size={14} style={{ color: c.textMuted }} />
                          </button>

                          <button 
                            onClick={() => {
                              setMobileScreen("login");
                              triggerToast("Desconectado da conta.");
                            }}
                            className="w-full p-3.5 border rounded-xl flex items-center justify-between text-xs font-bold cursor-pointer text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20"
                            style={{ backgroundColor: c.card, borderColor: c.border }}
                          >
                            <span className="flex items-center gap-2">
                              <LogOut size={14} />
                              Sair da Conta
                            </span>
                            <ChevronRight size={14} />
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                )}

              </div>

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
                      <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: c.textMuted }}>Criar Novo Registro</h4>
                      <button 
                        onClick={() => setIsFabMenuOpen(false)}
                        className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { title: "Lançar Receita", desc: "Registrar ganho", icon: TrendingUp, color: "text-emerald-500 bg-emerald-500/10", action: () => triggerToast("Formulário de Receita ativado") },
                        { title: "Lançar Despesa", desc: "Registrar custo", icon: TrendingDown, color: "text-rose-500 bg-rose-500/10", action: () => triggerToast("Formulário de Despesa ativado") },
                        { title: "Novo Imóvel", desc: "Expandir portfólio", icon: Building2, color: "text-blue-500 bg-blue-500/10", action: () => triggerToast("Formulário de Novo Imóvel ativado") },
                        { title: "Novo Contrato", desc: "Locação / Anual", icon: FileText, color: "text-purple-500 bg-purple-500/10", action: () => triggerToast("Formulário de Novo Contrato ativado") }
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
                  {/* Home Tab */}
                  <button 
                    onClick={() => setMobileTab("home")} 
                    className="flex flex-col items-center justify-center w-11 h-11 transition-all cursor-pointer relative"
                    style={{ color: mobileTab === "home" ? c.accent : c.textMuted }}
                  >
                    <Home size={17} strokeWidth={mobileTab === "home" ? 2.5 : 1.8} />
                    <span className="text-[8px] font-bold mt-0.5">Início</span>
                    {mobileTab === "home" && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-rose-600 animate-bounce" />
                    )}
                  </button>

                  {/* Properties Tab */}
                  <button 
                    onClick={() => setMobileTab("properties")} 
                    className="flex flex-col items-center justify-center w-11 h-11 transition-all cursor-pointer relative"
                    style={{ color: mobileTab === "properties" ? c.accent : c.textMuted }}
                  >
                    <Building2 size={17} strokeWidth={mobileTab === "properties" ? 2.5 : 1.8} />
                    <span className="text-[8px] font-bold mt-0.5">Imóveis</span>
                    {mobileTab === "properties" && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-rose-600 animate-bounce" />
                    )}
                  </button>

                  {/* Center FAB action (+) */}
                  <button 
                    onClick={() => setIsFabMenuOpen(true)}
                    className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-90 hover:scale-105 shadow-md shadow-red-950/20"
                    style={{ 
                      backgroundColor: c.accent,
                      color: "#FFFFFF"
                    }}
                  >
                    <Plus size={22} strokeWidth={2.5} />
                  </button>

                  {/* Finance Tab */}
                  <button 
                    onClick={() => setMobileTab("finance")} 
                    className="flex flex-col items-center justify-center w-11 h-11 transition-all cursor-pointer relative"
                    style={{ color: mobileTab === "finance" ? c.accent : c.textMuted }}
                  >
                    <DollarSign size={17} strokeWidth={mobileTab === "finance" ? 2.5 : 1.8} />
                    <span className="text-[8px] font-bold mt-0.5 font-mono">Financeiro</span>
                    {mobileTab === "finance" && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-rose-600 animate-bounce" />
                    )}
                  </button>

                  {/* Profile/Settings Tab */}
                  <button 
                    onClick={() => setMobileTab("profile")} 
                    className="flex flex-col items-center justify-center w-11 h-11 transition-all cursor-pointer relative"
                    style={{ color: mobileTab === "profile" ? c.accent : c.textMuted }}
                  >
                    <User size={17} strokeWidth={mobileTab === "profile" ? 2.5 : 1.8} />
                    <span className="text-[8px] font-bold mt-0.5">Perfil</span>
                    {mobileTab === "profile" && (
                      <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-rose-600 animate-bounce" />
                    )}
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════ */}
        {/*  RIGHT PANEL - UX/UI Documentation and Features    */}
        {/* ═══════════════════════════════════════════════════ */}
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
  );
}
