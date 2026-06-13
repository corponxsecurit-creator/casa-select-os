import React from "react";
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Sparkles, 
  AlertCircle, 
  Image as ImageIcon,
  ArrowRight,
  Database,
  Camera
} from "lucide-react";
import { scanReceiptOCR, addExpense } from "../data/api";
import { Property, ExpenseCategory } from "../types";

interface OCRScannerProps {
  properties: Property[];
  onExpenseAdded: () => void;
  onClose?: () => void;
}

const SAMPLE_TEMPLATES = [
  {
    name: "⚡ Conta de Luz - Casa Nova",
    text: "COMPANHIA DE ELETRICIDADE DO ESTADO DA BAHIA - COELBA. FATURA DE ENERGIA ACUMULADA MÊS DE MAIO 2026. Lançamento Casa Nova. Total a pagar: R$ 6.090,30. Vencimento: 28/05/2026. Consumo Alta Estação.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "❄️ Instalação de Ar - Casa Lilian",
    text: "ClimaMax Refrigeração Comercial LTDA. NOTA FISCAL SERVIÇOS NF-e #8092. Tomador: Casa Lilian. Descrição: Instalação de Multi-Split 24K BTU Inverter com carga de gás em Suíte Master de Alto Padrão. Valor Total: R$ 6.571,50. Pix liquidado.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "🏊 Piscineiro - Casa Mayla",
    text: "AcquaClean Pools Tratamentos e Serviços de Lazer. Recibo de quitamento de serviços na piscina da Casa Mayla. Valor total cobrado: R$ 450,00. Pago via Pix em 05/06/2026. Beneficiário: João Piscineiro.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&q=80"
  }
];

export default function OCRScanner({ properties, onExpenseAdded, onClose }: OCRScannerProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  
  // Scanned / Extracted Model Form
  const [extractedData, setExtractedData] = React.useState<{
    value: number;
    date: string;
    supplier: string;
    category: ExpenseCategory;
    propertyId: string;
    description: string;
  } | null>(null);

  const [currentReceiptImage, setCurrentReceiptImage] = React.useState<string | null>(null);

  const cameraInputRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Read actual file uploads
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      await runOCR(base64);
    };
    reader.readAsDataURL(file);
  };

  // Run Real-time OCR
  const runOCR = async (base64Payload: string) => {
    setLoading(true);
    setError("");
    setExtractedData(null);
    setSuccess(false);
    setCurrentReceiptImage(base64Payload);

    try {
      const data = await scanReceiptOCR(base64Payload);
      
      // Default matching of categories
      let categoryMatch = ExpenseCategory.OUTROS;
      if (Object.values(ExpenseCategory).includes(data.category as ExpenseCategory)) {
        categoryMatch = data.category as ExpenseCategory;
      }

      setExtractedData({
        value: Number(data.value) || 0,
        date: data.date || new Date().toISOString().split("T")[0],
        supplier: data.supplier || "Diversos",
        category: categoryMatch,
        propertyId: data.propertyId || "casa-lilian",
        description: data.description || "Lançamento via OCR"
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
      setError("Comprovante carregado. Ajuste os campos abaixo manualmente para salvar.");
    } finally {
      setLoading(false);
    }
  };

  // Simulate OCR by packing template texts as base64 or requesting direct simulated payload
  const handleSimulatedOCR = async (templateText: string) => {
    setLoading(true);
    setError("");
    setExtractedData(null);
    setSuccess(false);
    setCurrentReceiptImage(null);

    // Short artificial delay for nice simulation effect
    await new Promise(resolve => setTimeout(resolve, 800));

    // Simple parser for templates
    let value = 450;
    let supplier = "AcquaClean Pools";
    let category = ExpenseCategory.PISCINA;
    let propertyId = "casa-mayla";
    let date = "2026-06-05";
    let description = "Limpeza de Piscina";

    if (templateText.includes("COELBA")) {
      value = 6090.30;
      supplier = "Coelba S/A";
      category = ExpenseCategory.ENERGIA;
      propertyId = "casa-nova";
      date = "2026-05-28";
      description = "Conta de luz - Alta temporada";
    } else if (templateText.includes("ClimaMax")) {
      value = 6571.50;
      supplier = "ClimaMax Refrigeração";
      category = ExpenseCategory.MANUTENCAO;
      propertyId = "casa-lilian";
      date = "2026-05-20";
      description = "Instalação de ar condicionado inverter split na Suíte Master";
    }

    setExtractedData({
      value,
      date,
      supplier,
      category,
      propertyId,
      description
    });
    setLoading(false);
  };

  // Save parsed items to backend
  const handleConfirmLaunch = async () => {
    if (!extractedData) return;

    try {
      setLoading(true);
      await addExpense({
        propertyId: extractedData.propertyId,
        category: extractedData.category,
        supplier: extractedData.supplier,
        date: extractedData.date,
        value: extractedData.value,
        paymentMethod: "Pix",
        description: extractedData.description,
        receipt: currentReceiptImage || "Comprovante extraído via OCR inteligente"
      });

      setSuccess(true);
      setExtractedData(null);
      setCurrentReceiptImage(null);
      onExpenseAdded();

    } catch (err: any) {
      setError("Erro ao cadastrar despesa em tempo real.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ocr-scanner-root" className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-inner">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-accent-cyan" />
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            OCR Financeiro Inteligente (Select OCR)
          </h3>
        </div>
        <p className="text-[10px] font-mono text-accent-cyan">COGNITIVE ENGINE v1.1</p>
      </div>

      <p className="text-slate-400 text-xs leading-relaxed">
        Capture, fotografe ou simule comprovantes. Nossa inteligência de decisão lê os metadados (Valor, Fornecedor, Data, Categoria, Imóvel) e registra na contabilidade individual automaticamente.
      </p>

      {/* Drag Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Upload Container */}
        <div className="space-y-3">
          <div className="border-2 border-dashed border-slate-800 bg-slate-950/60 rounded-xl p-5 flex flex-col items-center justify-center text-center h-40 space-y-3">
            <input 
              type="file" 
              ref={cameraInputRef}
              accept="image/*" 
              capture="environment"
              className="hidden" 
              onChange={handleFileUpload} 
              disabled={loading}
            />
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*,application/pdf" 
              className="hidden" 
              onChange={handleFileUpload} 
              disabled={loading}
            />
            <div className="flex items-center gap-2 mb-1">
              <Upload size={20} className="text-slate-500 animate-bounce-slow" />
              <span className="text-xs text-slate-300 font-semibold">Capturar ou Subir Comprovante</span>
            </div>
            <div className="flex gap-2 w-full">
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="flex-1 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-white rounded-lg py-2 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <Camera size={14} className="text-rose-500" />
                Tirar Foto
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-white rounded-lg py-2 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                <FileText size={14} className="text-sky-500" />
                Subir Arquivo
              </button>
            </div>
            <span className="text-[10px] text-slate-500">Imagens (PNG, JPEG) ou PDF</span>
          </div>

          {/* Quick Pre-baked test scenarios */}
          <div className="space-y-2 select-none">
            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Dica: Teste rápido por simulação</span>
            <div className="grid grid-cols-1 gap-1.5">
              {SAMPLE_TEMPLATES.map((tpl, i) => (
                <button
                  key={i}
                  id={`ocr-sim-btn-${i}`}
                  onClick={() => handleSimulatedOCR(tpl.text)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left bg-slate-950 border border-slate-800/80 hover:border-slate-700 rounded-lg text-xs hover:text-white transition-all text-slate-400 cursor-pointer"
                >
                  <span>{tpl.name}</span>
                  <ArrowRight size={10} className="text-slate-500" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Output OCR confirmation or Loading Screen */}
        <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 flex flex-col justify-center min-h-[10rem] relative">
          
          {loading && (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-accent-cyan border-t-transparent animate-spin" />
              <div>
                <p className="text-xs text-slate-200 font-semibold">Select AI processando dados...</p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">Executando extração OCR & correspondência semântica</p>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2.5 text-orange-400 text-xs p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <AlertCircle size={14} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-2">
              <CheckCircle size={32} className="text-emerald-400 animate-pulse" />
              <h4 className="font-display font-bold text-xs text-white">Lançamento Consolidado no Caixa</h4>
              <p className="text-[10px] text-slate-500 max-w-sm">
                Despesa estruturada e contabilizada com Kaizen sob a propriedade selecionada.
              </p>
            </div>
          )}

          {/* Prompt/Form extraction fields */}
          {extractedData && !loading && (
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 border-b border-slate-800 pb-2">
                <Database size={12} className="text-accent-cyan" />
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-accent-cyan">Conferência dos Metadados</span>
              </div>

              <div id="ocr-fields" className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="space-y-1 col-span-2">
                  <label className="text-[10px] text-slate-500 font-mono block">FORNECEDOR</label>
                  <input 
                    type="text" 
                    value={extractedData.supplier}
                    onChange={(e) => setExtractedData({ ...extractedData, supplier: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-mono block">VALOR (R$)</label>
                  <input 
                    type="number" 
                    value={extractedData.value}
                    onChange={(e) => setExtractedData({ ...extractedData, value: Number(e.target.value) })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-mono block">DATA EMISSÃO</label>
                  <input 
                    type="date" 
                    value={extractedData.date}
                    onChange={(e) => setExtractedData({ ...extractedData, date: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-mono block">IMÓVEL DESTINO</label>
                  <select 
                    value={extractedData.propertyId}
                    onChange={(e) => setExtractedData({ ...extractedData, propertyId: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-white text-[11px]"
                  >
                    {properties.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-mono block">CATEGORIA CONTÁBIL</label>
                  <select 
                    value={extractedData.category}
                    onChange={(e) => setExtractedData({ ...extractedData, category: e.target.value as ExpenseCategory })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-white text-[11px]"
                  >
                    {Object.values(ExpenseCategory).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1 col-span-2">
                  <label className="text-[10px] text-slate-500 font-mono block">DESCRIÇÃO DA DESPESA</label>
                  <input 
                    type="text" 
                    value={extractedData.description}
                    onChange={(e) => setExtractedData({ ...extractedData, description: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-white"
                  />
                </div>
              </div>

              {/* Confirm submit buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  id="ocr-cancel-btn"
                  onClick={() => setExtractedData(null)}
                  className="w-1/3 border border-slate-800 text-slate-400 hover:text-white rounded-lg py-1.5 text-xs font-semibold cursor-pointer transition-all"
                >
                  Descartar
                </button>
                <button
                  id="ocr-confirm-btn"
                  onClick={handleConfirmLaunch}
                  className="w-2/3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-1.5 text-xs font-semibold cursor-pointer transition-all shadow-md shadow-emerald-500/20"
                >
                  Confirmar Lançamento
                </button>
              </div>
            </div>
          )}

          {!extractedData && !loading && !success && !error && (
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-2 select-none">
              <Camera size={24} className="text-slate-600" />
              <h5 className="font-sans font-semibold text-xs text-slate-400">Metadados de Extração</h5>
              <p className="text-[10px] text-slate-600 max-w-xs mt-1 leading-normal">
                Faça o upload do comprovante ou use um dos cenários simulados ao lado para conferir a extração de dados Inteligente.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
