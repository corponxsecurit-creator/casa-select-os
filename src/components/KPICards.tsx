import React from "react";
import { DollarSign, TrendingUp, TrendingDown, Percent, BarChart3, Wallet } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  diff: string;
  isPositive: boolean;
  color: "green" | "red" | "orange" | "blue" | "purple";
  icon: React.ElementType;
}

const iconMap = {
  green: DollarSign,
  red: TrendingDown,
  orange: Wallet,
  blue: Percent,
  purple: BarChart3,
};

const colorMap = {
  green: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    bar: "bg-emerald-500",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    gradient: "from-red-500/20 to-red-500/5",
    border: "border-red-500/20",
    bar: "bg-red-500",
  },
  orange: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    gradient: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    bar: "bg-amber-500",
  },
  blue: {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    gradient: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/20",
    bar: "bg-sky-500",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    bar: "bg-purple-500",
  },
};

function KPIValue({ value }: { value: string }) {
  const [display, setDisplay] = React.useState("R$ 0,00");
  React.useEffect(() => {
    const timer = setTimeout(() => setDisplay(value), 300);
    return () => clearTimeout(timer);
  }, [value]);
  return <>{display}</>;
}

export default function KPICards({
  receitasTotais,
  despesasTotais,
  lucroLiquido,
  ocupacaoMedia = 78.5,
  roiMedio = 24.7
}: {
  receitasTotais: number;
  despesasTotais: number;
  lucroLiquido: number;
  ocupacaoMedia?: number;
  roiMedio?: number;
}) {
  const cards: KPICardProps[] = [
    {
      title: "Receita Total",
      value: `R$ ${receitasTotais.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      diff: "+12,4%",
      isPositive: true,
      color: "green",
      icon: DollarSign
    },
    {
      title: "Lucro Líquido",
      value: `R$ ${lucroLiquido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      diff: "+8,7%",
      isPositive: true,
      color: "purple",
      icon: TrendingUp
    },
    {
      title: "Custos Totais",
      value: `R$ ${despesasTotais.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`,
      diff: "-3,2%",
      isPositive: false,
      color: "orange",
      icon: Wallet
    },
    {
      title: "Taxa de Ocupação",
      value: `${ocupacaoMedia.toFixed(1)}%`,
      diff: "+5,1%",
      isPositive: true,
      color: "blue",
      icon: Percent
    },
    {
      title: "ROI Médio",
      value: `${roiMedio.toFixed(1)}%`,
      diff: "+2,3%",
      isPositive: true,
      color: "green",
      icon: BarChart3
    }
  ];

  return (
    <div id="kpi-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        const c = colorMap[card.color];

        return (
          <div
            key={idx}
            className="kpi-card rounded-2xl p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">
                {card.title}
              </span>
              <div className={`${c.bg} ${c.text} p-2 rounded-xl border ${c.border} flex items-center justify-center`}>
                <Icon size={14} strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="font-display font-black text-2xl text-white tracking-tight leading-none mb-2">
              <KPIValue value={card.value} />
            </h3>
            <div className="flex items-center gap-1.5">
              <div className={`flex items-center gap-1 text-[11px] font-bold ${card.isPositive ? c.text : "text-red-400"}`}>
                {card.isPositive ? (
                  <TrendingUp size={11} strokeWidth={3} />
                ) : (
                  <TrendingDown size={11} strokeWidth={3} />
                )}
                <span>{card.diff}</span>
              </div>
              <span className="text-[9px] text-slate-600 font-medium">vs. mês anterior</span>
            </div>
            <div className={`mt-3 h-1 rounded-full ${c.bg} overflow-hidden`}>
              <div
                className={`h-full rounded-full ${c.bar} transition-all duration-1000 ease-out`}
                style={{
                  width: card.isPositive ? `${60 + Math.random() * 30}%` : `${30 + Math.random() * 20}%`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
