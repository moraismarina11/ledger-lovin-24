import type { CustoCentroEntry, Top10Entry, TipoPagamentoEntry } from "./shared";

// ── Merge helpers ──
function mergeCCPeriod(period: string, ...sources: CustoCentroEntry[][]): CustoCentroEntry[] {
  const map = new Map<string, CustoCentroEntry>();
  for (const src of sources) for (const e of src) {
    const x = map.get(e.cc);
    if (x) { x.financiamento += e.financiamento; x.fornecedor += e.fornecedor; x.imposto += e.imposto; x.outrosCustos += e.outrosCustos; x.outrosRecebimentos += e.outrosRecebimentos; x.recCliente += e.recCliente; x.salarios += e.salarios; x.total += e.total; }
    else map.set(e.cc, { ...e, period });
  }
  return Array.from(map.values());
}

function mergeTop10Period(period: string, ...sources: Top10Entry[][]): Top10Entry[] {
  const map = new Map<string, Top10Entry>();
  for (const src of sources) for (const e of src) {
    const x = map.get(e.supplier);
    if (x) { x.macae += e.macae; x.meb += e.meb; x.total += e.total; }
    else map.set(e.supplier, { ...e, period });
  }
  return Array.from(map.values()).sort((a, b) => a.total - b.total).slice(0, 10);
}

function mergeTipoPeriod(period: string, ...sources: TipoPagamentoEntry[][]): TipoPagamentoEntry[] {
  const map = new Map<string, TipoPagamentoEntry>();
  for (const src of sources) for (const e of src) {
    const x = map.get(e.company);
    if (x) { x.financiamento += e.financiamento; x.fornecedor += e.fornecedor; x.imposto += e.imposto; x.outrosCustos += e.outrosCustos; x.outrosRecebimentos += e.outrosRecebimentos; x.recCliente += e.recCliente; x.salarios += e.salarios; x.total += e.total; }
    else map.set(e.company, { ...e, period });
  }
  return Array.from(map.values());
}

// ── Top 10 Pagamento de Fornecedor ─────────────────────────────────

// Janeiro
const top10Jan: Top10Entry[] = [
  { supplier: "FLOW LATINO AMERICAN", macae: -1819879.67, meb: 0, total: -1819879.67, period: "jan" },
  { supplier: "FLP TRANSPORTES DE M", macae: -845353.00, meb: 0, total: -845353.00, period: "jan" },
  { supplier: "KROMINOX ACOS E META", macae: -837871.81, meb: 0, total: -837871.81, period: "jan" },
  { supplier: "JOTUN BRASIL", macae: -743932.36, meb: 0, total: -743932.36, period: "jan" },
  { supplier: "JOHN ZINK COMPANY LL", macae: -735476.35, meb: 0, total: -735476.35, period: "jan" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -661000.00, total: -661000.00, period: "jan" },
  { supplier: "DBR ENERGIES S/A", macae: 0, meb: -549492.89, total: -549492.89, period: "jan" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -504763.65, total: -504763.65, period: "jan" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -494638.17, meb: 0, total: -494638.17, period: "jan" },
  { supplier: "JCR COMERCIO, SERVIC", macae: -455852.00, meb: 0, total: -455852.00, period: "jan" },
];

// Fevereiro
const top10Fev: Top10Entry[] = [
  { supplier: "PRINER LOCACAO DE EQ", macae: -1843033.42, meb: 0, total: -1843033.42, period: "fev" },
  { supplier: "FLOW LATINO", macae: -1150000.00, meb: 0, total: -1150000.00, period: "fev" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -894018.43, total: -894018.43, period: "fev" },
  { supplier: "JOTUN BRASIL", macae: -516587.98, meb: 0, total: -516587.98, period: "fev" },
  { supplier: "KROMINOX ACOS E META", macae: -482357.72, meb: 0, total: -482357.72, period: "fev" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -443206.22, meb: 0, total: -443206.22, period: "fev" },
  { supplier: "FLP TRANSPORTES DE M", macae: -439617.66, meb: 0, total: -439617.66, period: "fev" },
  { supplier: "CAIXA DE PREVIDENCIA DOS FUNCIONARI", macae: 0, meb: -380000.00, total: -380000.00, period: "fev" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -351979.89, meb: 0, total: -351979.89, period: "fev" },
  { supplier: "CISARENTAL ADMINISTR", macae: -345527.35, meb: 0, total: -345527.35, period: "fev" },
];

// Semana 02/03 a 06/03
const top10S4: Top10Entry[] = [
  { supplier: "FLP TRANSPORTES DE M", macae: -293696.61, meb: 0, total: -293696.61, period: "s4" },
  { supplier: "LUIS FELIPE EBOLI IABRUDI EPP", macae: 0, meb: -266534.32, total: -266534.32, period: "s4" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -246836.73, total: -246836.73, period: "s4" },
  { supplier: "CISARENTAL ADMINISTR", macae: -230312.76, meb: 0, total: -230312.76, period: "s4" },
  { supplier: "JRM SERVICOS", macae: -215539.57, meb: 0, total: -215539.57, period: "s4" },
  { supplier: "SAPIENSIA DESENVOLVI", macae: -192552.82, meb: 0, total: -192552.82, period: "s4" },
  { supplier: "S.N. REFEICOES E BUFFET LTDA", macae: 0, meb: -187232.50, total: -187232.50, period: "s4" },
  { supplier: "HIGH SUPPLY SERVICOS", macae: -175009.00, meb: 0, total: -175009.00, period: "s4" },
  { supplier: "HOTEL SAMBA ITABORAI", macae: -174296.80, meb: 0, total: -174296.80, period: "s4" },
  { supplier: "KROMINOX ACOS E META", macae: -169494.20, meb: 0, total: -169494.20, period: "s4" },
];

// Semana 09/03 a 13/03
const top10S5: Top10Entry[] = [
  { supplier: "PRINER LOCACAO DE EQ", macae: -1024516.77, meb: 0, total: -1024516.77, period: "s5" },
  { supplier: "VIFERRO", macae: -592387.82, meb: 0, total: -592387.82, period: "s5" },
  { supplier: "CALDEX", macae: -445482.45, meb: 0, total: -445482.45, period: "s5" },
  { supplier: "CAIXA DE PREVIDENCIA DOS FUNCIONARI", macae: 0, meb: -233258.48, total: -233258.48, period: "s5" },
  { supplier: "RAC SOLUCOES", macae: -205350, meb: 0, total: -205350, period: "s5" },
  { supplier: "JCR COMERCIO, SERVIC", macae: -155450.50, meb: 0, total: -155450.50, period: "s5" },
  { supplier: "JOTUN BRASIL", macae: -133641.03, meb: 0, total: -133641.03, period: "s5" },
  { supplier: "VOGEL SOLUCOES EM TELECOM E INF LTD", macae: 0, meb: -123571.21, total: -123571.21, period: "s5" },
  { supplier: "SLTK MANUTENCOES E L", macae: -120038, meb: 0, total: -120038, period: "s5" },
  { supplier: "DELL COMPUTADORES DO BRASIL LTDA", macae: 0, meb: -100424.45, total: -100424.45, period: "s5" },
];

// Semana 16/03 a 20/03
const top10S6: Top10Entry[] = [
  { supplier: "UPSTAR AVIATION S/A", macae: 0, meb: -495000, total: -495000, period: "s6" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -425753.10, total: -425753.10, period: "s6" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -296511.01, meb: 0, total: -296511.01, period: "s6" },
  { supplier: "FLP TRANSPORTES DE M", macae: -271447.62, meb: 0, total: -271447.62, period: "s6" },
  { supplier: "REDE D'OR SAO LUIZ S.A", macae: 0, meb: -210210.20, total: -210210.20, period: "s6" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -185552.53, meb: 0, total: -185552.53, period: "s6" },
  { supplier: "GIOVANI GONCALVES CHAVES SERVICOS L", macae: 0, meb: -159253.64, total: -159253.64, period: "s6" },
  { supplier: "SALARINOX INDUSTRIA", macae: -159071.62, meb: 0, total: -159071.62, period: "s6" },
  { supplier: "CISARENTAL ADMINISTR", macae: -145213.27, meb: 0, total: -145213.27, period: "s6" },
  { supplier: "DIAGRAMA SERVICOS TECNICOS DE ENGEN", macae: 0, meb: -115376.20, total: -115376.20, period: "s6" },
];

// ── Top 10 Março (direct from Excel) ──
const top10Mar: Top10Entry[] = [
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -672589.83, total: -672589.83, period: "mar" },
  { supplier: "FLP TRANSPORTES DE M", macae: -565144.23, meb: 0, total: -565144.23, period: "mar" },
  { supplier: "UPSTAR AVIATION S/A", macae: 0, meb: -495000, total: -495000, period: "mar" },
  { supplier: "CISARENTAL ADMINISTR", macae: -375526.03, meb: 0, total: -375526.03, period: "mar" },
  { supplier: "PRINER LOCACAO DE EQ", macae: -296511.01, meb: 0, total: -296511.01, period: "mar" },
  { supplier: "LUIS FELIPE EBOLI IABRUDI EPP", macae: 0, meb: -266534.32, total: -266534.32, period: "mar" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -234717.53, meb: 0, total: -234717.53, period: "mar" },
  { supplier: "JRM SERVICOS", macae: -215539.57, meb: 0, total: -215539.57, period: "mar" },
  { supplier: "REDE D'OR SAO LUIZ S.A", macae: 0, meb: -210210.20, total: -210210.20, period: "mar" },
  { supplier: "SAPIENSIA DESENVOLVI", macae: -192552.82, meb: 0, total: -192552.82, period: "mar" },
];

// ── Top 10 Total Acumulado (direct from Excel) ──
const top10Total: Top10Entry[] = [
  { supplier: "PRINER LOCACAO DE EQ", macae: -2867550.19, meb: 0, total: -2867550.19, period: "total" },
  { supplier: "FLOW LATINO AMERICAN", macae: -1883304.81, meb: 0, total: -1883304.81, period: "total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -1645618.81, total: -1645618.81, period: "total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1581195.16, meb: 0, total: -1581195.16, period: "total" },
  { supplier: "KROMINOX ACOS E META", macae: -1489723.73, meb: 0, total: -1489723.73, period: "total" },
  { supplier: "JOTUN BRASIL", macae: -1394161.37, meb: 0, total: -1394161.37, period: "total" },
  { supplier: "FLOW LATINO", macae: -1150000, meb: 0, total: -1150000, period: "total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -931000, total: -931000, period: "total" },
  { supplier: "CISARENTAL ADMINISTR", macae: -907595.88, meb: 0, total: -907595.88, period: "total" },
  { supplier: "ALMEQ SERVICOS TECNI", macae: -846618.06, meb: 0, total: -846618.06, period: "total" },
];

export const top10Data: Top10Entry[] = [...top10Jan, ...top10Fev, ...top10S4, ...top10S5, ...top10S6, ...top10Mar, ...top10Total];

// ── CC Mota Engil Brasil ───────────────────────────────────────────

// Janeiro
const ccMEBJan: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -329060.08, imposto: 0, outrosCustos: -201787.98, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -530848.06, period: "jan" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "jan" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -85872.81, period: "jan" },
  { cc: "10243", financiamento: 0, fornecedor: -12608053.23, imposto: 0, outrosCustos: -2939.90, outrosRecebimentos: 0, recCliente: 6318339.18, salarios: 0, total: -6292653.95, period: "jan" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1068.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1068.80, period: "jan" },
  { cc: "10248", financiamento: 0, fornecedor: -42882.29, imposto: 0, outrosCustos: -133773.56, outrosRecebimentos: 5000.00, recCliente: 0, salarios: -5648.01, total: -177303.86, period: "jan" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2423.55, outrosRecebimentos: 0, recCliente: 0, salarios: -607.20, total: -3030.75, period: "jan" },
  { cc: "10252", financiamento: 0, fornecedor: -2312.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2312.00, period: "jan" },
  { cc: "10253", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1014.69, outrosRecebimentos: 0, recCliente: 263370.35, salarios: 0, total: 262355.66, period: "jan" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24.23, period: "jan" },
  { cc: "10257", financiamento: 0, fornecedor: -317438.39, imposto: 0, outrosCustos: -18358.33, outrosRecebimentos: 0, recCliente: 13384115.56, salarios: -44380.31, total: 13003938.53, period: "jan" },
  { cc: "10258", financiamento: 0, fornecedor: -1986674.29, imposto: -172342.98, outrosCustos: -257363.96, outrosRecebimentos: 294.00, recCliente: 6681070.38, salarios: -1172946.82, total: 3092036.33, period: "jan" },
  { cc: "10260", financiamento: 0, fornecedor: -578.00, imposto: 0, outrosCustos: -91070.66, outrosRecebimentos: 0, recCliente: 9948628.52, salarios: -398952.61, total: 9458027.25, period: "jan" },
  { cc: "20001", financiamento: 0, fornecedor: -772899.24, imposto: 0, outrosCustos: -133022.03, outrosRecebimentos: 0, recCliente: 0, salarios: -414343.84, total: -1320265.11, period: "jan" },
  { cc: "20002", financiamento: 0, fornecedor: -241119.67, imposto: 0, outrosCustos: -14201.55, outrosRecebimentos: 0, recCliente: 0, salarios: -75237.80, total: -330559.02, period: "jan" },
  { cc: "20003", financiamento: 0, fornecedor: -480.56, imposto: 0, outrosCustos: -17007.12, outrosRecebimentos: 0, recCliente: 0, salarios: -52984.80, total: -70472.48, period: "jan" },
  { cc: "20004", financiamento: 0, fornecedor: -428085.20, imposto: 0, outrosCustos: -29828.21, outrosRecebimentos: 0, recCliente: 0, salarios: -188163.05, total: -646076.46, period: "jan" },
  { cc: "20005", financiamento: 0, fornecedor: -27517.06, imposto: 0, outrosCustos: -29167.14, outrosRecebimentos: 0, recCliente: 0, salarios: -94756.61, total: -151440.81, period: "jan" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4134.77, outrosRecebimentos: 0, recCliente: 0, salarios: -36150.88, total: -40285.65, period: "jan" },
  { cc: "20008", financiamento: 0, fornecedor: -462096.61, imposto: -1507.15, outrosCustos: -15321.71, outrosRecebimentos: 0, recCliente: 0, salarios: -50975.53, total: -529901.00, period: "jan" },
  { cc: "20009", financiamento: 0, fornecedor: -2709.10, imposto: 0, outrosCustos: -14998.12, outrosRecebimentos: 0, recCliente: 0, salarios: -68384.71, total: -86091.93, period: "jan" },
  { cc: "20010", financiamento: 0, fornecedor: -95033.03, imposto: 0, outrosCustos: -10565.30, outrosRecebimentos: 0, recCliente: 0, salarios: -49330.92, total: -154929.25, period: "jan" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: 0, outrosCustos: -2595.51, outrosRecebimentos: 0, recCliente: 0, salarios: -15814.29, total: -21260.28, period: "jan" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1769.89, outrosRecebimentos: 0, recCliente: 0, salarios: -41991.98, total: -43761.87, period: "jan" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4087.94, outrosRecebimentos: 0, recCliente: 0, salarios: -23660.44, total: -27748.38, period: "jan" },
  { cc: "20020", financiamento: 0, fornecedor: -100078.50, imposto: -30401.72, outrosCustos: -1460.60, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -282779.67, period: "jan" },
  { cc: "20021", financiamento: 0, fornecedor: -31158.73, imposto: 0, outrosCustos: -5578.02, outrosRecebimentos: 0, recCliente: 0, salarios: -55230.09, total: -91966.84, period: "jan" },
  { cc: "20022", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -340.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -340.00, period: "jan" },
  { cc: "20023", financiamento: 0, fornecedor: -489772.75, imposto: 0, outrosCustos: -13517.62, outrosRecebimentos: 0, recCliente: 0, salarios: -71161.34, total: -574451.71, period: "jan" },
  { cc: "20024", financiamento: 0, fornecedor: -5314.41, imposto: 0, outrosCustos: -3281.82, outrosRecebimentos: 0, recCliente: 0, salarios: -51412.31, total: -60008.54, period: "jan" },
  { cc: "20029", financiamento: 0, fornecedor: -133878.33, imposto: -4290.74, outrosCustos: -38647.81, outrosRecebimentos: 854.36, recCliente: 0, salarios: -17713.05, total: -193675.57, period: "jan" },
  { cc: "20030", financiamento: 0, fornecedor: -1259948.82, imposto: 0, outrosCustos: -45647.59, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1305596.41, period: "jan" },
  { cc: "20031", financiamento: 0, fornecedor: -317898.00, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898.00, period: "jan" },
  { cc: "20032", financiamento: 0, fornecedor: -2075.64, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2075.64, period: "jan" },
  { cc: "20099", financiamento: 0, fornecedor: -243045.95, imposto: -14877.37, outrosCustos: -179198.06, outrosRecebimentos: 0, recCliente: 0, salarios: -24572.52, total: -461693.90, period: "jan" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -5114.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5114.93, period: "jan" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -4554.00, total: -4554.00, period: "jan" },
  { cc: "20104", financiamento: 0, fornecedor: -569720.87, imposto: 0, outrosCustos: -19903.87, outrosRecebimentos: 0, recCliente: 0, salarios: -120065.08, total: -709689.82, period: "jan" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4357.65, outrosRecebimentos: 0, recCliente: 0, salarios: -30771.76, total: -35129.41, period: "jan" },
  { cc: "20108", financiamento: 0, fornecedor: -13812.81, imposto: 0, outrosCustos: -42114.98, outrosRecebimentos: 0, recCliente: 0, salarios: -154495.86, total: -210423.65, period: "jan" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3147.71, outrosRecebimentos: 0, recCliente: 0, salarios: -19561.96, total: -22709.67, period: "jan" },
  { cc: "30001", financiamento: 0, fornecedor: -70613.79, imposto: -4.67, outrosCustos: -34520.48, outrosRecebimentos: 0, recCliente: 0, salarios: -108457.08, total: -213596.02, period: "jan" },
  { cc: "30002", financiamento: 0, fornecedor: -295879.53, imposto: 0, outrosCustos: -195136.92, outrosRecebimentos: 0, recCliente: 0, salarios: -74237.31, total: -565253.76, period: "jan" },
  { cc: "30003", financiamento: 0, fornecedor: -29850.00, imposto: 0, outrosCustos: -36448.97, outrosRecebimentos: 200.00, recCliente: 0, salarios: -59613.98, total: -125712.95, period: "jan" },
  { cc: "30099", financiamento: 0, fornecedor: -53759.10, imposto: 0, outrosCustos: -40498.92, outrosRecebimentos: 0, recCliente: 0, salarios: -4871.51, total: -99129.53, period: "jan" },
  { cc: "30258", financiamento: 0, fornecedor: -594.00, imposto: -7.38, outrosCustos: -3204.10, outrosRecebimentos: 0, recCliente: 0, salarios: -81660.13, total: -85465.61, period: "jan" },
  { cc: "31001", financiamento: 0, fornecedor: -6322.05, imposto: 0, outrosCustos: -13798.49, outrosRecebimentos: 0, recCliente: 0, salarios: -19770.82, total: -39891.36, period: "jan" },
  { cc: "40001", financiamento: 29358574.67, fornecedor: -189080.15, imposto: -35405.98, outrosCustos: -41471.24, outrosRecebimentos: 83083.76, recCliente: 0, salarios: -1314.43, total: 29174386.64, period: "jan" },
  { cc: "Outros", financiamento: 0, fornecedor: -17025656.39, imposto: -1911650.55, outrosCustos: 0, outrosRecebimentos: 10000000.00, recCliente: 0, salarios: 0, total: -8937306.94, period: "jan" },
];

// Fevereiro
const ccMEBFev: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -276812.77, imposto: 0, outrosCustos: -228106.75, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -504919.52, period: "fev" },
  { cc: "10243", financiamento: 0, fornecedor: -28049243.32, imposto: 0, outrosCustos: -130.16, outrosRecebimentos: 0, recCliente: 17205648.81, salarios: 0, total: -10843724.67, period: "fev" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -229.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -229.80, period: "fev" },
  { cc: "10248", financiamento: 0, fornecedor: -13337.36, imposto: -9115.52, outrosCustos: -64498.29, outrosRecebimentos: 0, recCliente: 0, salarios: -10275.09, total: -97226.26, period: "fev" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1498.05, outrosRecebimentos: 0, recCliente: 0, salarios: -648.40, total: -2146.45, period: "fev" },
  { cc: "10252", financiamento: 0, fornecedor: -2312.00, imposto: 0, outrosCustos: -271.48, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2583.48, period: "fev" },
  { cc: "10253", financiamento: 0, fornecedor: -101947.22, imposto: 0, outrosCustos: -145.38, outrosRecebimentos: 0, recCliente: 91552.16, salarios: 0, total: -10540.44, period: "fev" },
  { cc: "10254", financiamento: 0, fornecedor: -12831.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12831.11, period: "fev" },
  { cc: "10257", financiamento: 0, fornecedor: -38332.87, imposto: -5943.07, outrosCustos: -32087.86, outrosRecebimentos: 0, recCliente: 119547015.80, salarios: -59656.84, total: 119410995.16, period: "fev" },
  { cc: "10258", financiamento: 0, fornecedor: -1582428.08, imposto: -333910.18, outrosCustos: -263673.04, outrosRecebimentos: 2478.45, recCliente: 3208918.18, salarios: -1586591.12, total: -555205.79, period: "fev" },
  { cc: "10260", financiamento: 0, fornecedor: -1228.39, imposto: -48368.29, outrosCustos: -63444.56, outrosRecebimentos: 0, recCliente: 2230092.95, salarios: -425381.16, total: 1691670.55, period: "fev" },
  { cc: "20001", financiamento: 0, fornecedor: -601010.79, imposto: -544.15, outrosCustos: -118067.08, outrosRecebimentos: 0, recCliente: 0, salarios: -387825.76, total: -1107447.78, period: "fev" },
  { cc: "20002", financiamento: 0, fornecedor: -61802.88, imposto: -10755.57, outrosCustos: -20054.63, outrosRecebimentos: 0, recCliente: 0, salarios: -93488.18, total: -186101.26, period: "fev" },
  { cc: "20003", financiamento: 0, fornecedor: -352.39, imposto: -6089.51, outrosCustos: -17708.42, outrosRecebimentos: 0, recCliente: 0, salarios: -45131.61, total: -69281.93, period: "fev" },
  { cc: "20004", financiamento: 0, fornecedor: -421703.52, imposto: -20919.04, outrosCustos: -66474.45, outrosRecebimentos: 0, recCliente: 0, salarios: -185297.63, total: -694394.64, period: "fev" },
  { cc: "20005", financiamento: 0, fornecedor: -9019.87, imposto: -12994.21, outrosCustos: -28760.12, outrosRecebimentos: 0, recCliente: 0, salarios: -108869.13, total: -159643.33, period: "fev" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: -5953.97, outrosCustos: -4928.09, outrosRecebimentos: 0, recCliente: 0, salarios: -53167.74, total: -64049.80, period: "fev" },
  { cc: "20008", financiamento: 0, fornecedor: -602724.63, imposto: -8560.42, outrosCustos: -12066.43, outrosRecebimentos: 0, recCliente: 0, salarios: -35984.49, total: -659335.97, period: "fev" },
  { cc: "20009", financiamento: 0, fornecedor: -2515.84, imposto: -5492.66, outrosCustos: -16649.37, outrosRecebimentos: 2825.17, recCliente: 0, salarios: -40210.03, total: -62042.73, period: "fev" },
  { cc: "20010", financiamento: 0, fornecedor: -209192.84, imposto: -5924.66, outrosCustos: -9206.59, outrosRecebimentos: 0, recCliente: 0, salarios: -57338.70, total: -281662.79, period: "fev" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1159.50, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1159.50, period: "fev" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: -2793.79, outrosCustos: -3009.24, outrosRecebimentos: 0, recCliente: 0, salarios: -23997.71, total: -32651.22, period: "fev" },
  { cc: "20015", financiamento: 0, fornecedor: -2310.00, imposto: -951.43, outrosCustos: -2349.33, outrosRecebimentos: 0, recCliente: 0, salarios: -9599.07, total: -15209.83, period: "fev" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -4641.39, outrosRecebimentos: 0, recCliente: 0, salarios: -11452.65, total: -17378.84, period: "fev" },
  { cc: "20020", financiamento: 0, fornecedor: -106443.96, imposto: 0, outrosCustos: -2153.96, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -108597.92, period: "fev" },
  { cc: "20021", financiamento: 0, fornecedor: -58615.70, imposto: -1883.20, outrosCustos: -20812.20, outrosRecebimentos: 0, recCliente: 0, salarios: -30515.64, total: -111826.74, period: "fev" },
  { cc: "20022", financiamento: 0, fornecedor: -736.16, imposto: 0, outrosCustos: -5762.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6498.49, period: "fev" },
  { cc: "20023", financiamento: 0, fornecedor: -62991.36, imposto: -18318.88, outrosCustos: -15595.96, outrosRecebimentos: 0, recCliente: 0, salarios: -66832.15, total: -163738.35, period: "fev" },
  { cc: "20024", financiamento: 0, fornecedor: -187.56, imposto: -4735.53, outrosCustos: -5299.45, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -50521.01, total: -58544.62, period: "fev" },
  { cc: "20029", financiamento: 0, fornecedor: -108771.37, imposto: -74200.50, outrosCustos: -5580.61, outrosRecebimentos: 0, recCliente: 0, salarios: -10316.74, total: -198869.22, period: "fev" },
  { cc: "20030", financiamento: 0, fornecedor: -635506.10, imposto: -97561.57, outrosCustos: -4125.34, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -737193.01, period: "fev" },
  { cc: "20033", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -327.76, period: "fev" },
  { cc: "20099", financiamento: 0, fornecedor: -153150.12, imposto: -21301.53, outrosCustos: -17839.85, outrosRecebimentos: 0, recCliente: 0, salarios: -21790.62, total: -214082.12, period: "fev" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -2367.64, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2612.84, period: "fev" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -4863.00, total: -4863.00, period: "fev" },
  { cc: "20104", financiamento: 0, fornecedor: -923123.76, imposto: -77046.00, outrosCustos: -20070.57, outrosRecebimentos: 0, recCliente: 0, salarios: -122008.54, total: -1142248.87, period: "fev" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -3357.55, outrosRecebimentos: 0, recCliente: 0, salarios: -30884.44, total: -42922.07, period: "fev" },
  { cc: "20108", financiamento: 0, fornecedor: -13722.00, imposto: -17946.26, outrosCustos: -38095.40, outrosRecebimentos: 0, recCliente: 0, salarios: -146781.40, total: -216545.06, period: "fev" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.46, period: "fev" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -57546.82, outrosRecebimentos: 0, recCliente: 0, salarios: -47441.48, total: -107270.56, period: "fev" },
  { cc: "30001", financiamento: 0, fornecedor: -16799.01, imposto: -17441.75, outrosCustos: -28353.02, outrosRecebimentos: 1595.00, recCliente: 0, salarios: -119137.68, total: -180136.46, period: "fev" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -470478.13, imposto: -139345.38, outrosCustos: -37919.49, outrosRecebimentos: 0, recCliente: 0, salarios: -58115.20, total: -2654410.33, period: "fev" },
  { cc: "30003", financiamento: 0, fornecedor: -562015.76, imposto: -6378.95, outrosCustos: -41600.62, outrosRecebimentos: 200.00, recCliente: 0, salarios: -45408.57, total: -655203.90, period: "fev" },
  { cc: "30099", financiamento: 0, fornecedor: -81716.53, imposto: -381.48, outrosCustos: -5164.63, outrosRecebimentos: 0, recCliente: 0, salarios: -5624.94, total: -92887.58, period: "fev" },
  { cc: "30258", financiamento: 0, fornecedor: -671.20, imposto: -15765.22, outrosCustos: -16286.02, outrosRecebimentos: 0, recCliente: 0, salarios: -122873.30, total: -155595.74, period: "fev" },
  { cc: "31001", financiamento: 0, fornecedor: -1734.44, imposto: -4410.54, outrosCustos: -13110.01, outrosRecebimentos: 220.34, recCliente: 0, salarios: -25058.81, total: -44093.46, period: "fev" },
  { cc: "40001", financiamento: 98082354.74, fornecedor: -183862.44, imposto: -1192027.75, outrosCustos: -35370.42, outrosRecebimentos: 1621861.47, recCliente: 0, salarios: 0, total: 98292955.60, period: "fev" },
  { cc: "Outros", financiamento: 0, fornecedor: -3311307.57, imposto: -220834.27, outrosCustos: -17389.53, outrosRecebimentos: 4287374.11, recCliente: 0, salarios: 0, total: 737842.74, period: "fev" },
];

// Semana 02/03 a 06/03
const ccMEBS4: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -39104.16, imposto: -6792.89, outrosCustos: -150719.17, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -196616.22, period: "s4" },
  { cc: "10243", financiamento: 0, fornecedor: -5094675.04, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5094675.04, period: "s4" },
  { cc: "10248", financiamento: 0, fornecedor: -86.45, imposto: -1213.15, outrosCustos: -39229.04, outrosRecebimentos: 2323.50, recCliente: 0, salarios: 0, total: -38205.14, period: "s4" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -700.73, outrosRecebimentos: 0, recCliente: 0, salarios: -648.40, total: -1349.13, period: "s4" },
  { cc: "10257", financiamento: 0, fornecedor: -115350.00, imposto: 0, outrosCustos: -1488.16, outrosRecebimentos: 0, recCliente: 15957612.52, salarios: -89942.06, total: 15750832.30, period: "s4" },
  { cc: "10258", financiamento: 0, fornecedor: -598434.89, imposto: -37533.74, outrosCustos: -17597.78, outrosRecebimentos: 600.00, recCliente: 0, salarios: -575127.16, total: -1228093.57, period: "s4" },
  { cc: "10260", financiamento: 0, fornecedor: -2933.48, imposto: 0, outrosCustos: -14705.30, outrosRecebimentos: 0, recCliente: 0, salarios: -337812.10, total: -355450.88, period: "s4" },
  { cc: "20001", financiamento: 0, fornecedor: -111701.43, imposto: 0, outrosCustos: -20640.59, outrosRecebimentos: 0, recCliente: 0, salarios: -317104.55, total: -449446.57, period: "s4" },
  { cc: "20002", financiamento: 0, fornecedor: -2376.05, imposto: 0, outrosCustos: -2243.62, outrosRecebimentos: 0, recCliente: 0, salarios: -115276.88, total: -119896.55, period: "s4" },
  { cc: "20003", financiamento: 0, fornecedor: -6153.73, imposto: 0, outrosCustos: -3237.44, outrosRecebimentos: 0, recCliente: 0, salarios: -49285.12, total: -58676.29, period: "s4" },
  { cc: "20004", financiamento: 0, fornecedor: -1478.08, imposto: 0, outrosCustos: -3229.00, outrosRecebimentos: 0, recCliente: 0, salarios: -144271.02, total: -148978.10, period: "s4" },
  { cc: "20005", financiamento: 0, fornecedor: -2239.14, imposto: 0, outrosCustos: -3302.01, outrosRecebimentos: 0, recCliente: 0, salarios: -84002.78, total: -89543.93, period: "s4" },
  { cc: "20006", financiamento: 0, fornecedor: -5867.24, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -53741.62, total: -59658.86, period: "s4" },
  { cc: "20008", financiamento: 0, fornecedor: -17230.63, imposto: 0, outrosCustos: -1011.89, outrosRecebimentos: 0, recCliente: 0, salarios: -44159.95, total: -62402.47, period: "s4" },
  { cc: "20009", financiamento: 0, fornecedor: -6523.30, imposto: 0, outrosCustos: -3108.32, outrosRecebimentos: 1014.85, recCliente: 0, salarios: -58317.92, total: -66934.69, period: "s4" },
  { cc: "20010", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -625.74, outrosRecebimentos: 4113.91, recCliente: 0, salarios: -59626.59, total: -56138.42, period: "s4" },
  { cc: "20013", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -99.98, outrosRecebimentos: 0, recCliente: 0, salarios: -25907.02, total: -26007.00, period: "s4" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -26035.84, total: -26085.84, period: "s4" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -51.00, outrosRecebimentos: 0, recCliente: 0, salarios: -12080.47, total: -12131.47, period: "s4" },
  { cc: "20020", financiamento: 0, fornecedor: -43026.62, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -43076.62, period: "s4" },
  { cc: "20021", financiamento: 0, fornecedor: -32144.17, imposto: 0, outrosCustos: -3887.44, outrosRecebimentos: 0, recCliente: 0, salarios: -34154.61, total: -70186.22, period: "s4" },
  { cc: "20022", financiamento: 0, fornecedor: -131317.24, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -131317.24, period: "s4" },
  { cc: "20023", financiamento: 0, fornecedor: -2499.95, imposto: 0, outrosCustos: -4794.10, outrosRecebimentos: 0, recCliente: 0, salarios: -70135.96, total: -77430.01, period: "s4" },
  { cc: "20024", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -57074.05, total: -57124.05, period: "s4" },
  { cc: "20029", financiamento: 0, fornecedor: -94367.50, imposto: 0, outrosCustos: -218.15, outrosRecebimentos: 0, recCliente: 0, salarios: -5694.88, total: -100280.53, period: "s4" },
  { cc: "20030", financiamento: 0, fornecedor: -651611.07, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -80741.51, total: -732352.58, period: "s4" },
  { cc: "20032", financiamento: 0, fornecedor: -28877.49, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -28877.49, period: "s4" },
  { cc: "20033", financiamento: 0, fornecedor: -1010.49, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1010.49, period: "s4" },
  { cc: "20099", financiamento: 0, fornecedor: -105386.25, imposto: 0, outrosCustos: -2195.12, outrosRecebimentos: 956.62, recCliente: 0, salarios: -18986.45, total: -125611.20, period: "s4" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1144.59, outrosRecebimentos: 0, recCliente: 0, salarios: -10611.23, total: -11755.82, period: "s4" },
  { cc: "20104", financiamento: 0, fornecedor: -484213.38, imposto: 0, outrosCustos: -4808.50, outrosRecebimentos: 0, recCliente: 0, salarios: -120913.59, total: -609935.47, period: "s4" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -50.00, outrosRecebimentos: 0, recCliente: 0, salarios: -25918.07, total: -25968.07, period: "s4" },
  { cc: "20108", financiamento: 0, fornecedor: -25119.34, imposto: 0, outrosCustos: -1486.08, outrosRecebimentos: 0, recCliente: 0, salarios: -159785.35, total: -186390.77, period: "s4" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.44, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.44, period: "s4" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -19662.47, total: -19662.47, period: "s4" },
  { cc: "20112", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1460.00, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1460.00, period: "s4" },
  { cc: "30001", financiamento: 0, fornecedor: -3089.32, imposto: 0, outrosCustos: -757.28, outrosRecebimentos: 0, recCliente: 0, salarios: -103454.72, total: -107301.32, period: "s4" },
  { cc: "30002", financiamento: 0, fornecedor: -2824.20, imposto: 0, outrosCustos: -29078.47, outrosRecebimentos: 0, recCliente: 0, salarios: -54287.20, total: -86189.87, period: "s4" },
  { cc: "30003", financiamento: 0, fornecedor: -3687.98, imposto: 0, outrosCustos: -95.37, outrosRecebimentos: 0, recCliente: 0, salarios: -64003.69, total: -67787.04, period: "s4" },
  { cc: "30099", financiamento: 0, fornecedor: -34675.58, imposto: 0, outrosCustos: -1210.00, outrosRecebimentos: 0, recCliente: 0, salarios: -2256.11, total: -38141.69, period: "s4" },
  { cc: "30258", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -528.46, outrosRecebimentos: 0, recCliente: 0, salarios: -86782.03, total: -87310.49, period: "s4" },
  { cc: "31001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -100.00, outrosRecebimentos: 0, recCliente: 0, salarios: -17427.60, total: -17527.60, period: "s4" },
  { cc: "40001", financiamento: -4559541.73, fornecedor: -1236.78, imposto: -17090.56, outrosCustos: -10235.45, outrosRecebimentos: 534511.73, recCliente: 0, salarios: -374707.16, total: -4428299.95, period: "s4" },
  { cc: "Outros", financiamento: 0, fornecedor: -96682919.56, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -96682919.56, period: "s4" },
];

// Semana 09/03 a 13/03
const ccMEBS5: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -10000, imposto: 0, outrosCustos: -21978.10, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -31978.10, period: "s5" },
  { cc: "10243", financiamento: 0, fornecedor: -129.13, imposto: -549635, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -549764.13, period: "s5" },
  { cc: "10248", financiamento: 0, fornecedor: -33621.85, imposto: -195209.71, outrosCustos: -29127.67, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -257959.23, period: "s5" },
  { cc: "10249", financiamento: 0, fornecedor: 0, imposto: -111.26, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -111.26, period: "s5" },
  { cc: "10251", financiamento: 0, fornecedor: -36.84, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -36.84, period: "s5" },
  { cc: "10253", financiamento: 0, fornecedor: -72170, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -72170, period: "s5" },
  { cc: "10255", financiamento: 0, fornecedor: -35.29, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -35.29, period: "s5" },
  { cc: "10257", financiamento: 0, fornecedor: -90705.80, imposto: -2250, outrosCustos: -3270.01, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -96225.81, period: "s5" },
  { cc: "10258", financiamento: 0, fornecedor: -55070.25, imposto: -16669.12, outrosCustos: -2492.05, outrosRecebimentos: 999, recCliente: 0, salarios: -14413.17, total: -87645.59, period: "s5" },
  { cc: "10260", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1000.83, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1000.83, period: "s5" },
  { cc: "10265", financiamento: 0, fornecedor: -27.67, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -27.67, period: "s5" },
  { cc: "20001", financiamento: 0, fornecedor: -16832.73, imposto: -457.59, outrosCustos: -7186.26, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24476.58, period: "s5" },
  { cc: "20002", financiamento: 0, fornecedor: -3519.37, imposto: -4980.24, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -3902.02, total: -12401.63, period: "s5" },
  { cc: "20003", financiamento: 0, fornecedor: -513.77, imposto: 0, outrosCustos: -7117.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -7631.70, period: "s5" },
  { cc: "20004", financiamento: 0, fornecedor: -45053.41, imposto: -3.95, outrosCustos: -8769.75, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -53827.11, period: "s5" },
  { cc: "20005", financiamento: 0, fornecedor: -1245.18, imposto: 0, outrosCustos: -357.30, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1602.48, period: "s5" },
  { cc: "20008", financiamento: -1054.90, fornecedor: -251072.97, imposto: -10267.09, outrosCustos: -57.39, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -262452.35, period: "s5" },
  { cc: "20009", financiamento: 0, fornecedor: -698.70, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -698.70, period: "s5" },
  { cc: "20010", financiamento: 0, fornecedor: -2723.71, imposto: 0, outrosCustos: -2060.29, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4784.00, period: "s5" },
  { cc: "20012", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -777.84, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -777.84, period: "s5" },
  { cc: "20013", financiamento: 0, fornecedor: -2850.48, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2850.48, period: "s5" },
  { cc: "20020", financiamento: 0, fornecedor: -8350, imposto: 0, outrosCustos: -100807.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -109157.76, period: "s5" },
  { cc: "20021", financiamento: 0, fornecedor: -8527.67, imposto: 0, outrosCustos: -436, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8963.67, period: "s5" },
  { cc: "20022", financiamento: 0, fornecedor: 0, imposto: -3125, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3125, period: "s5" },
  { cc: "20023", financiamento: 0, fornecedor: -38130.88, imposto: -9179.07, outrosCustos: -1803.60, outrosRecebimentos: 0, recCliente: 0, salarios: -3604.58, total: -52718.13, period: "s5" },
  { cc: "20024", financiamento: 0, fornecedor: -4416.93, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4416.93, period: "s5" },
  { cc: "20029", financiamento: 0, fornecedor: -8321.67, imposto: 0, outrosCustos: -4339.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -12661.13, period: "s5" },
  { cc: "20030", financiamento: 0, fornecedor: -31646.78, imposto: -42703.19, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -74349.97, period: "s5" },
  { cc: "20099", financiamento: 0, fornecedor: -13993.72, imposto: -401.43, outrosCustos: -974.24, outrosRecebimentos: 0, recCliente: 0, salarios: -3936.42, total: -19305.81, period: "s5" },
  { cc: "20104", financiamento: 0, fornecedor: -248852.85, imposto: -121.58, outrosCustos: -338.80, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -249313.23, period: "s5" },
  { cc: "20108", financiamento: 0, fornecedor: -588.53, imposto: 0, outrosCustos: -391.02, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -979.55, period: "s5" },
  { cc: "30001", financiamento: 0, fornecedor: 0, imposto: -1.59, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1.59, period: "s5" },
  { cc: "30002", financiamento: 0, fornecedor: -228352.87, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9213.94, total: -237566.81, period: "s5" },
  { cc: "30003", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 190, recCliente: 0, salarios: 0, total: 190, period: "s5" },
  { cc: "30099", financiamento: 0, fornecedor: -13836.61, imposto: -1978.60, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -15815.21, period: "s5" },
  { cc: "31001", financiamento: 0, fornecedor: -1538.92, imposto: -215.52, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1754.44, period: "s5" },
  { cc: "40001", financiamento: -505263.30, fornecedor: -547.50, imposto: -41523.80, outrosCustos: -16685.91, outrosRecebimentos: 353092.54, recCliente: 0, salarios: 0, total: -210927.97, period: "s5" },
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: 0, period: "s5" },
  { cc: "Outros", financiamento: 0, fornecedor: -3700410.14, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3700410.14, period: "s5" },
];

// Semana 16/03 a 20/03
const ccMEBS6: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58195.95, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58195.95, period: "s6" },
  { cc: "10242", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4708.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4708.94, period: "s6" },
  { cc: "10243", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2862.92, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2862.92, period: "s6" },
  { cc: "10248", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -24302.95, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -24302.95, period: "s6" },
  { cc: "10252", financiamento: 0, fornecedor: -5011.12, imposto: 0, outrosCustos: 1272.67, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3738.45, period: "s6" },
  { cc: "10253", financiamento: 0, fornecedor: -181.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -181.11, period: "s6" },
  { cc: "10254", financiamento: 0, fornecedor: -129500.33, imposto: 0, outrosCustos: -142.24, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -129642.57, period: "s6" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1944.87, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1944.87, period: "s6" },
  { cc: "10257", financiamento: 0, fornecedor: -47010, imposto: 0, outrosCustos: -20322.23, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -67332.23, period: "s6" },
  { cc: "10258", financiamento: 0, fornecedor: -412019.0, imposto: -217113.21, outrosCustos: -202630.15, outrosRecebimentos: 0, recCliente: 5866487.61, salarios: -697508.62, total: 4337216.63, period: "s6" },
  { cc: "10260", financiamento: 0, fornecedor: -2005.09, imposto: 0, outrosCustos: -85754.61, outrosRecebimentos: 0, recCliente: 401233.23, salarios: -112317.50, total: 201156.03, period: "s6" },
  { cc: "20001", financiamento: 0, fornecedor: -905998.90, imposto: 0, outrosCustos: -78653.54, outrosRecebimentos: 2160, recCliente: 0, salarios: 0, total: -982492.44, period: "s6" },
  { cc: "20002", financiamento: 0, fornecedor: -2152.05, imposto: 0, outrosCustos: -21332.14, outrosRecebimentos: 0, recCliente: 0, salarios: -2657.01, total: -26141.20, period: "s6" },
  { cc: "20003", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -6960.47, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6960.47, period: "s6" },
  { cc: "20004", financiamento: 0, fornecedor: -74945.34, imposto: 0, outrosCustos: -61968.14, outrosRecebimentos: 0, recCliente: 0, salarios: -32254.56, total: -169168.04, period: "s6" },
  { cc: "20005", financiamento: 0, fornecedor: -4904.87, imposto: 0, outrosCustos: -23456.44, outrosRecebimentos: 0, recCliente: 0, salarios: -21480.21, total: -49841.52, period: "s6" },
  { cc: "20006", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -9941.28, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -9941.28, period: "s6" },
  { cc: "20008", financiamento: 0, fornecedor: -193852.93, imposto: 0, outrosCustos: -10939.30, outrosRecebimentos: 0, recCliente: 0, salarios: -4115.20, total: -208907.43, period: "s6" },
  { cc: "20009", financiamento: 0, fornecedor: -6570.09, imposto: 0, outrosCustos: -13093.52, outrosRecebimentos: 0, recCliente: 0, salarios: -7279.22, total: -26942.83, period: "s6" },
  { cc: "20010", financiamento: 0, fornecedor: -125819.70, imposto: 0, outrosCustos: -10826.52, outrosRecebimentos: 0, recCliente: 0, salarios: -4755.30, total: -141401.52, period: "s6" },
  { cc: "20012", financiamento: 0, fornecedor: -228, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -228, period: "s6" },
  { cc: "20013", financiamento: 0, fornecedor: -228, imposto: 0, outrosCustos: -4526.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4754.60, period: "s6" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3715.05, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3715.05, period: "s6" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2955.97, outrosRecebimentos: 0, recCliente: 0, salarios: -2927.67, total: -5883.64, period: "s6" },
  { cc: "20020", financiamento: 0, fornecedor: -119259.26, imposto: 0, outrosCustos: 1235.40, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -118023.86, period: "s6" },
  { cc: "20021", financiamento: 0, fornecedor: -29204.70, imposto: 0, outrosCustos: -10526.46, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -39731.16, period: "s6" },
  { cc: "20022", financiamento: 0, fornecedor: -6132.91, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6132.91, period: "s6" },
  { cc: "20023", financiamento: 0, fornecedor: -7293.71, imposto: 0, outrosCustos: -13933.43, outrosRecebimentos: 0, recCliente: 0, salarios: -3678.16, total: -24905.30, period: "s6" },
  { cc: "20024", financiamento: 0, fornecedor: -3364.96, imposto: 0, outrosCustos: -7183.56, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -10548.52, period: "s6" },
  { cc: "20028", financiamento: 0, fornecedor: -3568.29, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3568.29, period: "s6" },
  { cc: "20029", financiamento: 0, fornecedor: -3160.81, imposto: 0, outrosCustos: -5598.11, outrosRecebimentos: 0, recCliente: 0, salarios: -3385.38, total: -12144.30, period: "s6" },
  { cc: "20030", financiamento: 0, fornecedor: -11641.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -11641.11, period: "s6" },
  { cc: "20032", financiamento: 0, fornecedor: -7521.12, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -7521.12, period: "s6" },
  { cc: "20099", financiamento: 0, fornecedor: -19669.17, imposto: 0, outrosCustos: -12368.88, outrosRecebimentos: 0, recCliente: 0, salarios: -4185.96, total: -36224.01, period: "s6" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -7988.99, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -7988.99, period: "s6" },
  { cc: "20104", financiamento: 0, fornecedor: -106229.99, imposto: 0, outrosCustos: -41991.21, outrosRecebimentos: 0, recCliente: 0, salarios: -16164.08, total: -164385.28, period: "s6" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -12113.57, outrosRecebimentos: 0, recCliente: 0, salarios: -4881.62, total: -16995.19, period: "s6" },
  { cc: "20108", financiamento: 0, fornecedor: -8401.63, imposto: 0, outrosCustos: -50675.18, outrosRecebimentos: 0, recCliente: 0, salarios: -14935, total: -74011.81, period: "s6" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4120.01, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4120.01, period: "s6" },
  { cc: "20112", financiamento: 0, fornecedor: -115376.20, imposto: 0, outrosCustos: -5615.26, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -120991.46, period: "s6" },
  { cc: "30001", financiamento: 0, fornecedor: -4567.08, imposto: 0, outrosCustos: -21433.92, outrosRecebimentos: 0, recCliente: 0, salarios: -2391.06, total: -28392.06, period: "s6" },
  { cc: "30002", financiamento: 0, fornecedor: -40063.93, imposto: 0, outrosCustos: -14894.41, outrosRecebimentos: 0, recCliente: 0, salarios: -15133.85, total: -70092.19, period: "s6" },
  { cc: "30003", financiamento: 0, fornecedor: -3139.85, imposto: 0, outrosCustos: -18055.27, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -21195.12, period: "s6" },
  { cc: "30005", financiamento: 0, fornecedor: -365.20, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -365.20, period: "s6" },
  { cc: "30099", financiamento: 0, fornecedor: -7676.93, imposto: 0, outrosCustos: -734.34, outrosRecebimentos: 0, recCliente: 0, salarios: -1741.66, total: -10152.93, period: "s6" },
  { cc: "30258", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -19914.15, outrosRecebimentos: 0, recCliente: 0, salarios: -22491.78, total: -42405.93, period: "s6" },
  { cc: "31001", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -7243.44, outrosRecebimentos: 0, recCliente: 0, salarios: -2138.46, total: -9381.90, period: "s6" },
  { cc: "40001", financiamento: -3926952.58, fornecedor: 0, imposto: -14303.81, outrosCustos: -951.71, outrosRecebimentos: 84.17, recCliente: 0, salarios: 0, total: -3942123.93, period: "s6" },
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2029.08, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2029.08, period: "s6" },
  { cc: "Outros", financiamento: 0, fornecedor: -2096288.06, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2096288.06, period: "s6" },
];

// ── CC MEB Março (direct from Excel) ──
const ccMEBMar: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -49104.16, imposto: -6792.89, outrosCustos: -230893.22, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -286790.27, period: "mar" },
  { cc: "10242", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4708.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4708.94, period: "mar" },
  { cc: "10243", financiamento: 0, fornecedor: -5094804.17, imposto: -549635, outrosCustos: -2862.92, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -5647302.09, period: "mar" },
  { cc: "10248", financiamento: 0, fornecedor: -33708.30, imposto: -196422.86, outrosCustos: -92659.66, outrosRecebimentos: 2323.50, recCliente: 0, salarios: 0, total: -320467.32, period: "mar" },
  { cc: "10249", financiamento: 0, fornecedor: 0, imposto: -111.26, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -111.26, period: "mar" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -700.73, outrosRecebimentos: 0, recCliente: 0, salarios: -648.40, total: -1349.13, period: "mar" },
  { cc: "10251", financiamento: 0, fornecedor: -36.84, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -36.84, period: "mar" },
  { cc: "10252", financiamento: 0, fornecedor: -5011.12, imposto: 0, outrosCustos: 1272.67, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3738.45, period: "mar" },
  { cc: "10253", financiamento: 0, fornecedor: -72351.11, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -72351.11, period: "mar" },
  { cc: "10254", financiamento: 0, fornecedor: -129500.33, imposto: 0, outrosCustos: -142.24, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -129642.57, period: "mar" },
  { cc: "10255", financiamento: 0, fornecedor: -35.29, imposto: 0, outrosCustos: -1944.87, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1980.16, period: "mar" },
  { cc: "10257", financiamento: 0, fornecedor: -253065.80, imposto: -2250, outrosCustos: -25080.40, outrosRecebimentos: 0, recCliente: 15957612.52, salarios: -89942.06, total: 15587274.26, period: "mar" },
  { cc: "10258", financiamento: 0, fornecedor: -1065524.14, imposto: -271316.07, outrosCustos: -222719.98, outrosRecebimentos: 1599, recCliente: 5866487.61, salarios: -1287048.95, total: 3021477.47, period: "mar" },
  { cc: "10260", financiamento: 0, fornecedor: -4966.24, imposto: 0, outrosCustos: -101460.74, outrosRecebimentos: 0, recCliente: 401233.23, salarios: -450129.60, total: -155323.35, period: "mar" },
  { cc: "20001", financiamento: 0, fornecedor: -1034533.06, imposto: -457.59, outrosCustos: -106480.39, outrosRecebimentos: 2160, recCliente: 0, salarios: -317104.55, total: -1456415.59, period: "mar" },
  { cc: "20002", financiamento: 0, fornecedor: -8047.47, imposto: -4980.24, outrosCustos: -23575.76, outrosRecebimentos: 0, recCliente: 0, salarios: -121835.91, total: -158439.38, period: "mar" },
  { cc: "20003", financiamento: 0, fornecedor: -6667.50, imposto: 0, outrosCustos: -17315.84, outrosRecebimentos: 0, recCliente: 0, salarios: -49285.12, total: -73268.46, period: "mar" },
  { cc: "20004", financiamento: 0, fornecedor: -121476.83, imposto: -3.95, outrosCustos: -73966.89, outrosRecebimentos: 0, recCliente: 0, salarios: -176525.58, total: -371973.25, period: "mar" },
  { cc: "20005", financiamento: 0, fornecedor: -8389.19, imposto: 0, outrosCustos: -27115.75, outrosRecebimentos: 0, recCliente: 0, salarios: -105482.99, total: -140987.93, period: "mar" },
  { cc: "20006", financiamento: 0, fornecedor: -5867.24, imposto: 0, outrosCustos: -9991.28, outrosRecebimentos: 0, recCliente: 0, salarios: -53741.62, total: -69600.14, period: "mar" },
  { cc: "20008", financiamento: -1054.90, fornecedor: -462156.53, imposto: -10267.09, outrosCustos: -12008.58, outrosRecebimentos: 0, recCliente: 0, salarios: -48275.15, total: -533762.25, period: "mar" },
  { cc: "20009", financiamento: 0, fornecedor: -13792.09, imposto: 0, outrosCustos: -16201.84, outrosRecebimentos: 1014.85, recCliente: 0, salarios: -65597.14, total: -94576.22, period: "mar" },
  { cc: "20010", financiamento: 0, fornecedor: -128543.41, imposto: 0, outrosCustos: -13512.55, outrosRecebimentos: 4113.91, recCliente: 0, salarios: -64381.89, total: -202323.94, period: "mar" },
  { cc: "20012", financiamento: 0, fornecedor: -228, imposto: 0, outrosCustos: -777.84, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1005.84, period: "mar" },
  { cc: "20013", financiamento: 0, fornecedor: -3078.48, imposto: 0, outrosCustos: -4626.58, outrosRecebimentos: 0, recCliente: 0, salarios: -25907.02, total: -33612.08, period: "mar" },
  { cc: "20015", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3765.05, outrosRecebimentos: 0, recCliente: 0, salarios: -26035.84, total: -29800.89, period: "mar" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3006.97, outrosRecebimentos: 0, recCliente: 0, salarios: -15008.14, total: -18015.11, period: "mar" },
  { cc: "20020", financiamento: 0, fornecedor: -170635.88, imposto: 0, outrosCustos: -99622.36, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -270258.24, period: "mar" },
  { cc: "20021", financiamento: 0, fornecedor: -69876.54, imposto: 0, outrosCustos: -14849.90, outrosRecebimentos: 0, recCliente: 0, salarios: -34154.61, total: -118881.05, period: "mar" },
  { cc: "20022", financiamento: 0, fornecedor: -137450.15, imposto: -3125, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -140575.15, period: "mar" },
  { cc: "20023", financiamento: 0, fornecedor: -47924.54, imposto: -9179.07, outrosCustos: -20531.13, outrosRecebimentos: 0, recCliente: 0, salarios: -77418.70, total: -155053.44, period: "mar" },
  { cc: "20024", financiamento: 0, fornecedor: -7781.89, imposto: 0, outrosCustos: -7233.56, outrosRecebimentos: 0, recCliente: 0, salarios: -57074.05, total: -72089.50, period: "mar" },
  { cc: "20028", financiamento: 0, fornecedor: -3568.29, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3568.29, period: "mar" },
  { cc: "20029", financiamento: 0, fornecedor: -105849.98, imposto: 0, outrosCustos: -10155.72, outrosRecebimentos: 0, recCliente: 0, salarios: -9080.26, total: -125085.96, period: "mar" },
  { cc: "20030", financiamento: 0, fornecedor: -694898.96, imposto: -123444.70, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -818343.66, period: "mar" },
  { cc: "20032", financiamento: 0, fornecedor: -36398.61, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -36398.61, period: "mar" },
  { cc: "20033", financiamento: 0, fornecedor: -1010.49, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1010.49, period: "mar" },
  { cc: "20099", financiamento: 0, fornecedor: -139049.14, imposto: -401.43, outrosCustos: -15538.24, outrosRecebimentos: 956.62, recCliente: 0, salarios: -27108.83, total: -181141.02, period: "mar" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -9133.58, outrosRecebimentos: 0, recCliente: 0, salarios: -10611.23, total: -19744.81, period: "mar" },
  { cc: "20104", financiamento: 0, fornecedor: -839296.22, imposto: -121.58, outrosCustos: -47138.51, outrosRecebimentos: 0, recCliente: 0, salarios: -137077.67, total: -1023633.98, period: "mar" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -12163.57, outrosRecebimentos: 0, recCliente: 0, salarios: -30799.69, total: -42963.26, period: "mar" },
  { cc: "20108", financiamento: 0, fornecedor: -34109.50, imposto: 0, outrosCustos: -52552.28, outrosRecebimentos: 0, recCliente: 0, salarios: -174720.35, total: -261382.13, period: "mar" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -3007.44, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3007.44, period: "mar" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4120.01, outrosRecebimentos: 0, recCliente: 0, salarios: -19662.47, total: -23782.48, period: "mar" },
  { cc: "20112", financiamento: 0, fornecedor: -115376.20, imposto: 0, outrosCustos: -7075.26, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -122451.46, period: "mar" },
  { cc: "30001", financiamento: 0, fornecedor: -7656.40, imposto: -1.59, outrosCustos: -22191.20, outrosRecebimentos: 0, recCliente: 0, salarios: -105845.78, total: -135694.97, period: "mar" },
  { cc: "30002", financiamento: 0, fornecedor: -271241, imposto: 0, outrosCustos: -43972.88, outrosRecebimentos: 0, recCliente: 0, salarios: -78634.99, total: -393848.87, period: "mar" },
  { cc: "30003", financiamento: 0, fornecedor: -6827.83, imposto: 0, outrosCustos: -18150.64, outrosRecebimentos: 190, recCliente: 0, salarios: -64003.69, total: -88792.16, period: "mar" },
  { cc: "30005", financiamento: 0, fornecedor: -365.20, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -365.20, period: "mar" },
  { cc: "30099", financiamento: 0, fornecedor: -56189.12, imposto: -1978.60, outrosCustos: -1944.34, outrosRecebimentos: 0, recCliente: 0, salarios: -3997.77, total: -64109.83, period: "mar" },
  { cc: "30258", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -20442.61, outrosRecebimentos: 0, recCliente: 0, salarios: -109273.81, total: -129716.42, period: "mar" },
  { cc: "31001", financiamento: 0, fornecedor: -1538.92, imposto: -215.52, outrosCustos: -7343.44, outrosRecebimentos: 0, recCliente: 0, salarios: -19566.06, total: -28663.94, period: "mar" },
  { cc: "40001", financiamento: -8991757.61, fornecedor: -1784.28, imposto: -447625.33, outrosCustos: -27873.07, outrosRecebimentos: 887688.44, recCliente: 0, salarios: 0, total: -8581351.85, period: "mar" },
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2029.08, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2029.08, period: "mar" },
  { cc: "Outros", financiamento: 0, fornecedor: -102479617.76, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -102479617.76, period: "mar" },
];

// ── CC MEB Total Acumulado (direct from Excel) ──
const ccMEBTotal: CustoCentroEntry[] = [
  { cc: "10001", financiamento: 0, fornecedor: -654977.01, imposto: -6792.89, outrosCustos: -660787.95, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1322557.85, period: "total" },
  { cc: "10100", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1578.35, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1578.35, period: "total" },
  { cc: "10216", financiamento: 0, fornecedor: -15441.65, imposto: 0, outrosCustos: 0, outrosRecebimentos: 23264.29, recCliente: 0, salarios: 0, total: 7822.64, period: "total" },
  { cc: "10242", financiamento: 0, fornecedor: -85872.81, imposto: 0, outrosCustos: -4708.94, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -90581.75, period: "total" },
  { cc: "10243", financiamento: 0, fornecedor: -45752100.72, imposto: -549635, outrosCustos: -5932.98, outrosRecebimentos: 0, recCliente: 23523987.99, salarios: 0, total: -22783680.71, period: "total" },
  { cc: "10244", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -1298.60, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1298.60, period: "total" },
  { cc: "10248", financiamento: 0, fornecedor: -89927.95, imposto: -205538.38, outrosCustos: -290931.51, outrosRecebimentos: 7323.50, recCliente: 0, salarios: -15923.10, total: -594997.44, period: "total" },
  { cc: "10249", financiamento: 0, fornecedor: 0, imposto: -111.26, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -111.26, period: "total" },
  { cc: "10250", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -4622.33, outrosRecebimentos: 0, recCliente: 0, salarios: -1904, total: -6526.33, period: "total" },
  { cc: "10251", financiamento: 0, fornecedor: -36.84, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -36.84, period: "total" },
  { cc: "10252", financiamento: 0, fornecedor: -9635.12, imposto: 0, outrosCustos: 1001.19, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8633.93, period: "total" },
  { cc: "10253", financiamento: 0, fornecedor: -174298.33, imposto: 0, outrosCustos: -1160.07, outrosRecebimentos: 0, recCliente: 354922.51, salarios: 0, total: 179464.11, period: "total" },
  { cc: "10254", financiamento: 0, fornecedor: -142331.44, imposto: 0, outrosCustos: -142.24, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -142473.68, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: -35.29, imposto: 0, outrosCustos: -1969.10, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2004.39, period: "total" },
  { cc: "10257", financiamento: 0, fornecedor: -608837.06, imposto: -8193.07, outrosCustos: -75526.59, outrosRecebimentos: 0, recCliente: 148888743.88, salarios: -193979.21, total: 148002207.95, period: "total" },
  { cc: "10258", financiamento: 0, fornecedor: -4634626.51, imposto: -777569.23, outrosCustos: -743756.98, outrosRecebimentos: 4371.45, recCliente: 15756476.17, salarios: -4046586.89, total: 5558308.01, period: "total" },
  { cc: "10260", financiamento: 0, fornecedor: -6772.63, imposto: -48368.29, outrosCustos: -255975.96, outrosRecebimentos: 0, recCliente: 12579954.70, salarios: -1274463.37, total: 10994374.45, period: "total" },
  { cc: "20001", financiamento: 0, fornecedor: -2408443.09, imposto: -1001.74, outrosCustos: -357569.50, outrosRecebimentos: 2160, recCliente: 0, salarios: -1119274.15, total: -3884128.48, period: "total" },
  { cc: "20002", financiamento: 0, fornecedor: -310970.02, imposto: -15735.81, outrosCustos: -57831.94, outrosRecebimentos: 0, recCliente: 0, salarios: -290561.89, total: -675099.66, period: "total" },
  { cc: "20003", financiamento: 0, fornecedor: -7500.45, imposto: -6089.51, outrosCustos: -52031.38, outrosRecebimentos: 0, recCliente: 0, salarios: -147401.53, total: -213022.87, period: "total" },
  { cc: "20004", financiamento: 0, fornecedor: -971265.55, imposto: -20922.99, outrosCustos: -170269.55, outrosRecebimentos: 0, recCliente: 0, salarios: -549986.26, total: -1712444.35, period: "total" },
  { cc: "20005", financiamento: 0, fornecedor: -44926.12, imposto: -12994.21, outrosCustos: -85043.01, outrosRecebimentos: 0, recCliente: 0, salarios: -309108.73, total: -452072.07, period: "total" },
  { cc: "20006", financiamento: 0, fornecedor: -5867.24, imposto: -5953.97, outrosCustos: -19054.14, outrosRecebimentos: 0, recCliente: 0, salarios: -143060.24, total: -173935.59, period: "total" },
  { cc: "20008", financiamento: -1054.90, fornecedor: -1526977.77, imposto: -20334.66, outrosCustos: -39396.72, outrosRecebimentos: 0, recCliente: 0, salarios: -135235.17, total: -1722999.22, period: "total" },
  { cc: "20009", financiamento: 0, fornecedor: -19017.03, imposto: -5492.66, outrosCustos: -47849.33, outrosRecebimentos: 3840.02, recCliente: 0, salarios: -174191.88, total: -242710.88, period: "total" },
  { cc: "20010", financiamento: 0, fornecedor: -432769.28, imposto: -5924.66, outrosCustos: -33284.44, outrosRecebimentos: 4113.91, recCliente: 0, salarios: -171051.51, total: -638915.98, period: "total" },
  { cc: "20012", financiamento: 0, fornecedor: -228, imposto: 0, outrosCustos: -1937.34, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2165.34, period: "total" },
  { cc: "20013", financiamento: 0, fornecedor: -8779.44, imposto: -2793.79, outrosCustos: -10231.33, outrosRecebimentos: 0, recCliente: 0, salarios: -65719.02, total: -87523.58, period: "total" },
  { cc: "20015", financiamento: 0, fornecedor: -2310, imposto: -951.43, outrosCustos: -7884.27, outrosRecebimentos: 0, recCliente: 0, salarios: -77626.89, total: -88772.59, period: "total" },
  { cc: "20017", financiamento: 0, fornecedor: 0, imposto: -1284.80, outrosCustos: -11736.30, outrosRecebimentos: 0, recCliente: 0, salarios: -50121.23, total: -63142.33, period: "total" },
  { cc: "20020", financiamento: 0, fornecedor: -377158.34, imposto: -30401.72, outrosCustos: -103236.92, outrosRecebimentos: 0, recCliente: 0, salarios: -150838.85, total: -661635.83, period: "total" },
  { cc: "20021", financiamento: 0, fornecedor: -159650.97, imposto: -1883.20, outrosCustos: -41240.12, outrosRecebimentos: 0, recCliente: 0, salarios: -119900.34, total: -322674.63, period: "total" },
  { cc: "20022", financiamento: 0, fornecedor: -138186.31, imposto: -3125, outrosCustos: -6102.33, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -147413.64, period: "total" },
  { cc: "20023", financiamento: 0, fornecedor: -600688.65, imposto: -27497.95, outrosCustos: -49644.71, outrosRecebimentos: 0, recCliente: 0, salarios: -215412.19, total: -893243.50, period: "total" },
  { cc: "20024", financiamento: 0, fornecedor: -13283.86, imposto: -4735.53, outrosCustos: -15814.83, outrosRecebimentos: 2198.93, recCliente: 0, salarios: -159007.37, total: -190642.66, period: "total" },
  { cc: "20028", financiamento: 0, fornecedor: -3568.29, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -3568.29, period: "total" },
  { cc: "20029", financiamento: 0, fornecedor: -348499.68, imposto: -78491.24, outrosCustos: -54384.14, outrosRecebimentos: 854.36, recCliente: 0, salarios: -37110.05, total: -517630.75, period: "total" },
  { cc: "20030", financiamento: 0, fornecedor: -2590353.88, imposto: -221006.27, outrosCustos: -49772.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2861133.08, period: "total" },
  { cc: "20031", financiamento: 0, fornecedor: -317898, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -317898, period: "total" },
  { cc: "20032", financiamento: 0, fornecedor: -38474.25, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -38474.25, period: "total" },
  { cc: "20033", financiamento: 0, fornecedor: -1010.49, imposto: 0, outrosCustos: -327.76, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1338.25, period: "total" },
  { cc: "20099", financiamento: 0, fornecedor: -535245.21, imposto: -36580.33, outrosCustos: -210997.80, outrosRecebimentos: 956.62, recCliente: 0, salarios: -73471.97, total: -855338.69, period: "total" },
  { cc: "20100", financiamento: 0, fornecedor: 0, imposto: -245.20, outrosCustos: -16616.15, outrosRecebimentos: 0, recCliente: 0, salarios: -10611.23, total: -27472.58, period: "total" },
  { cc: "20102", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9417, total: -9417, period: "total" },
  { cc: "20104", financiamento: 0, fornecedor: -2332140.85, imposto: -77167.58, outrosCustos: -87112.95, outrosRecebimentos: 0, recCliente: 0, salarios: -379151.29, total: -2875572.67, period: "total" },
  { cc: "20107", financiamento: 0, fornecedor: 0, imposto: -8680.08, outrosCustos: -19878.77, outrosRecebimentos: 0, recCliente: 0, salarios: -92455.89, total: -121014.74, period: "total" },
  { cc: "20108", financiamento: 0, fornecedor: -61644.31, imposto: -17946.26, outrosCustos: -132762.66, outrosRecebimentos: 0, recCliente: 0, salarios: -475997.61, total: -688350.84, period: "total" },
  { cc: "20109", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -6014.90, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -6014.90, period: "total" },
  { cc: "20111", financiamento: 0, fornecedor: 0, imposto: -2282.26, outrosCustos: -64814.54, outrosRecebimentos: 0, recCliente: 0, salarios: -86665.91, total: -153762.71, period: "total" },
  { cc: "20112", financiamento: 0, fornecedor: -115376.20, imposto: 0, outrosCustos: -7075.26, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -122451.46, period: "total" },
  { cc: "30001", financiamento: 0, fornecedor: -95069.20, imposto: -17448.01, outrosCustos: -85064.70, outrosRecebimentos: 1595, recCliente: 0, salarios: -333440.54, total: -529427.45, period: "total" },
  { cc: "30002", financiamento: -1948552.13, fornecedor: -1037598.66, imposto: -139345.38, outrosCustos: -277029.29, outrosRecebimentos: 0, recCliente: 0, salarios: -210987.50, total: -3613512.96, period: "total" },
  { cc: "30003", financiamento: 0, fornecedor: -598693.59, imposto: -6378.95, outrosCustos: -96200.23, outrosRecebimentos: 590, recCliente: 0, salarios: -169026.24, total: -869709.01, period: "total" },
  { cc: "30005", financiamento: 0, fornecedor: -365.20, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -365.20, period: "total" },
  { cc: "30099", financiamento: 0, fornecedor: -191664.75, imposto: -2360.08, outrosCustos: -47607.89, outrosRecebimentos: 0, recCliente: 0, salarios: -14494.22, total: -256126.94, period: "total" },
  { cc: "30258", financiamento: 0, fornecedor: -1265.20, imposto: -15772.60, outrosCustos: -39932.73, outrosRecebimentos: 0, recCliente: 0, salarios: -313807.24, total: -370777.77, period: "total" },
  { cc: "31001", financiamento: 0, fornecedor: -9595.41, imposto: -4626.06, outrosCustos: -34251.94, outrosRecebimentos: 220.34, recCliente: 0, salarios: -64395.69, total: -112648.76, period: "total" },
  { cc: "40001", financiamento: 118449171.80, fornecedor: -374726.87, imposto: -1675059.06, outrosCustos: -104714.73, outrosRecebimentos: 2592633.67, recCliente: 0, salarios: 0, total: 118887304.82, period: "total" },
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -2029.08, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -2029.08, period: "total" },
  { cc: "Outros", financiamento: 0, fornecedor: -122816581.72, imposto: -2132484.82, outrosCustos: -17389.53, outrosRecebimentos: 14287374.11, recCliente: 0, salarios: 0, total: -110679081.96, period: "total" },
];

export const custoCentroMEBData: CustoCentroEntry[] = [...ccMEBJan, ...ccMEBFev, ...ccMEBS4, ...ccMEBS5, ...ccMEBS6, ...ccMEBMar, ...ccMEBTotal];

// ── CC Macaé ───────────────────────────────────────────────────────

// Janeiro
const ccMacaeJan: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58279.31, period: "jan" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "jan" },
  { cc: "10241", financiamento: 0, fornecedor: -76245.79, imposto: 0, outrosCustos: -1000.00, outrosRecebimentos: 0, recCliente: 11531852.81, salarios: 0, total: 11454607.02, period: "jan" },
  { cc: "10251", financiamento: 0, fornecedor: -4876599.91, imposto: 0, outrosCustos: -2053946.85, outrosRecebimentos: 0, recCliente: 1017382.18, salarios: -4805150.91, total: -10718315.49, period: "jan" },
  { cc: "10256", financiamento: 0, fornecedor: -4165331.81, imposto: 0, outrosCustos: -2055717.45, outrosRecebimentos: 0, recCliente: 14370426.06, salarios: -5105048.33, total: 3044328.47, period: "jan" },
  { cc: "10259", financiamento: 0, fornecedor: -773243.96, imposto: 0, outrosCustos: -166264.71, outrosRecebimentos: 0, recCliente: 1073440.78, salarios: -420280.55, total: -286348.44, period: "jan" },
  { cc: "20001", financiamento: 0, fornecedor: -1662816.21, imposto: 0, outrosCustos: -172616.65, outrosRecebimentos: 16355.20, recCliente: 0, salarios: -276797.21, total: -2095874.87, period: "jan" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000.00, imposto: -3774626.03, outrosCustos: -84789.73, outrosRecebimentos: 88227.83, recCliente: 0, salarios: 0, total: -12490549.03, period: "jan" },
];

// Fevereiro
const ccMacaeFev: CustoCentroEntry[] = [
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -58279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -58279.31, period: "fev" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "fev" },
  { cc: "10241", financiamento: 0, fornecedor: -76883.75, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0.02, salarios: 0, total: -76883.73, period: "fev" },
  { cc: "10251", financiamento: 0, fornecedor: -4097320.27, imposto: -66076.65, outrosCustos: -2095250.54, outrosRecebimentos: 0, recCliente: 13784149.19, salarios: -5592983.92, total: 1932517.81, period: "fev" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9807.00, total: -9807.00, period: "fev" },
  { cc: "10256", financiamento: 0, fornecedor: -3885223.92, imposto: 0, outrosCustos: -2104548.90, outrosRecebimentos: 0, recCliente: 15691264.93, salarios: -4677661.44, total: 5023830.67, period: "fev" },
  { cc: "10259", financiamento: 0, fornecedor: -1307574.22, imposto: 0, outrosCustos: -281317.75, outrosRecebimentos: 0, recCliente: 3198990.08, salarios: -443476.24, total: 1166621.87, period: "fev" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -1319861.20, imposto: -1346756.22, outrosCustos: -197382.37, outrosRecebimentos: 16355.20, recCliente: 0, salarios: -266348.91, total: -4217840.22, period: "fev" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44051.36, period: "fev" },
  { cc: "Outros", financiamento: 0, fornecedor: 0, imposto: -4544966.95, outrosCustos: -768477.26, outrosRecebimentos: 0, recCliente: 0, salarios: -12616.19, total: -5326060.40, period: "fev" },
];

// Semana 02/03 a 06/03
const ccMacaeS4: CustoCentroEntry[] = [
  { cc: "10251", financiamento: 0, fornecedor: -795122.81, imposto: -19670.62, outrosCustos: -22792.72, outrosRecebimentos: 0, recCliente: 0, salarios: -5013263.61, total: -5850849.76, period: "s4" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9780.00, total: -9780.00, period: "s4" },
  { cc: "10256", financiamento: 0, fornecedor: -1002848.82, imposto: -6515.20, outrosCustos: -23134.96, outrosRecebimentos: 0, recCliente: 67428.04, salarios: -4617955.20, total: -5583026.14, period: "s4" },
  { cc: "10259", financiamento: 0, fornecedor: -223997.90, imposto: 0, outrosCustos: -3935.14, outrosRecebimentos: 0, recCliente: 0, salarios: -671616.10, total: -899549.14, period: "s4" },
  { cc: "20001", financiamento: 0, fornecedor: -953621.17, imposto: -7297.02, outrosCustos: -3140.42, outrosRecebimentos: 0, recCliente: 0, salarios: -268265.46, total: -1232324.07, period: "s4" },
  { cc: "40001", financiamento: -65974.94, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -65974.94, period: "s4" },
];

// Semana 09/03 a 13/03
const ccMacaeS5: CustoCentroEntry[] = [
  { cc: "10216", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 35000, recCliente: 0, salarios: 0, total: 35000, period: "s5" },
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -8279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8279.31, period: "s5" },
  { cc: "10241", financiamento: 0, fornecedor: -490838.98, imposto: 0, outrosCustos: -10079.97, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -500918.95, period: "s5" },
  { cc: "10251", financiamento: 0, fornecedor: -1326322.02, imposto: -1137.06, outrosCustos: -28541.46, outrosRecebimentos: 0, recCliente: 287444.89, salarios: -37155.40, total: -1105711.05, period: "s5" },
  { cc: "10256", financiamento: 0, fornecedor: -820957.81, imposto: -513376.29, outrosCustos: -32538.18, outrosRecebimentos: 0, recCliente: 399568.01, salarios: -11163.02, total: -978467.29, period: "s5" },
  { cc: "10259", financiamento: 0, fornecedor: -1196911.68, imposto: 0, outrosCustos: -5852.17, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1202763.85, period: "s5" },
  { cc: "20001", financiamento: 0, fornecedor: -236718.08, imposto: -79834.19, outrosCustos: -7003.88, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -323556.15, period: "s5" },
  { cc: "40001", financiamento: -44051.36, fornecedor: 0, imposto: 0, outrosCustos: -636, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -44687.36, period: "s5" },
];

// Semana 16/03 a 20/03
const ccMacaeS6: CustoCentroEntry[] = [
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "s6" },
  { cc: "10241", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -21179.57, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -21179.57, period: "s6" },
  { cc: "10251", financiamento: 0, fornecedor: -536665.70, imposto: -556924.64, outrosCustos: -968999.47, outrosRecebimentos: 0, recCliente: 41882.51, salarios: -27562.38, total: -2048269.68, period: "s6" },
  { cc: "10256", financiamento: 0, fornecedor: -826975.65, imposto: -98183.88, outrosCustos: -970193.18, outrosRecebimentos: 0, recCliente: 21934.22, salarios: -166994.29, total: -2040412.78, period: "s6" },
  { cc: "10259", financiamento: 0, fornecedor: -128700.55, imposto: -42310.50, outrosCustos: -302869.66, outrosRecebimentos: 0, recCliente: 0, salarios: -4620.13, total: -478500.84, period: "s6" },
  { cc: "20001", financiamento: 0, fornecedor: -342869.47, imposto: -4818.18, outrosCustos: -48478.81, outrosRecebimentos: 17289869.83, recCliente: 0, salarios: 0, total: 16893703.37, period: "s6" },
  { cc: "20099", financiamento: 0, fornecedor: -168690.83, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -168690.83, period: "s6" },
  { cc: "Outros", financiamento: 0, fornecedor: 0, imposto: -4981283.24, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4981283.24, period: "s6" },
];

// ── CC Macaé Março (direct from Excel) ──
const ccMacaeMar: CustoCentroEntry[] = [
  { cc: "10216", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 35000, recCliente: 0, salarios: 0, total: 35000, period: "mar" },
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -8279.31, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -8279.31, period: "mar" },
  { cc: "10234", financiamento: 0, fornecedor: -271447.62, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -271447.62, period: "mar" },
  { cc: "10241", financiamento: 0, fornecedor: -490838.98, imposto: 0, outrosCustos: -31259.54, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -522098.52, period: "mar" },
  { cc: "10251", financiamento: 0, fornecedor: -2658110.53, imposto: -577732.32, outrosCustos: -1020333.65, outrosRecebimentos: 0, recCliente: 329327.40, salarios: -5077981.39, total: -9004830.49, period: "mar" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -9780, total: -9780, period: "mar" },
  { cc: "10256", financiamento: 0, fornecedor: -2650782.28, imposto: -618075.37, outrosCustos: -1025866.32, outrosRecebimentos: 0, recCliente: 488930.27, salarios: -4796112.51, total: -8601906.21, period: "mar" },
  { cc: "10259", financiamento: 0, fornecedor: -1549610.13, imposto: -42310.50, outrosCustos: -312656.97, outrosRecebimentos: 0, recCliente: 0, salarios: -676236.23, total: -2580813.83, period: "mar" },
  { cc: "20001", financiamento: 0, fornecedor: -1533208.72, imposto: -91949.39, outrosCustos: -58623.11, outrosRecebimentos: 17289869.83, recCliente: 0, salarios: -268265.46, total: 15337823.15, period: "mar" },
  { cc: "20099", financiamento: 0, fornecedor: -168690.83, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -168690.83, period: "mar" },
  { cc: "40001", financiamento: -110026.30, fornecedor: 0, imposto: 0, outrosCustos: -636, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -110662.30, period: "mar" },
  { cc: "Outros", financiamento: 0, fornecedor: 0, imposto: -4981283.24, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -4981283.24, period: "mar" },
];

// ── CC Macaé Total Acumulado (direct from Excel) ──
const ccMacaeTotal: CustoCentroEntry[] = [
  { cc: "10216", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 35000, recCliente: 0, salarios: 0, total: 35000, period: "total" },
  { cc: "10232", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: -124837.93, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -124837.93, period: "total" },
  { cc: "10234", financiamento: 0, fornecedor: -814342.86, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -814342.86, period: "total" },
  { cc: "10241", financiamento: 0, fornecedor: -643968.52, imposto: 0, outrosCustos: -32259.54, outrosRecebimentos: 0, recCliente: 11531852.83, salarios: 0, total: 10855624.77, period: "total" },
  { cc: "10251", financiamento: 0, fornecedor: -11632030.71, imposto: -643808.97, outrosCustos: -5169531.04, outrosRecebimentos: 0, recCliente: 15130858.77, salarios: -15476116.22, total: -17790628.17, period: "total" },
  { cc: "10255", financiamento: 0, fornecedor: 0, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: -19587, total: -19587, period: "total" },
  { cc: "10256", financiamento: 0, fornecedor: -10701338.01, imposto: -618075.37, outrosCustos: -5186132.67, outrosRecebimentos: 0, recCliente: 30550621.26, salarios: -14578822.28, total: -533747.07, period: "total" },
  { cc: "10259", financiamento: 0, fornecedor: -3630428.31, imposto: -42310.50, outrosCustos: -760239.43, outrosRecebimentos: 0, recCliente: 4272430.86, salarios: -1539993.02, total: -1700540.40, period: "total" },
  { cc: "20001", financiamento: -1103846.72, fornecedor: -4515886.13, imposto: -1438705.61, outrosCustos: -428622.13, outrosRecebimentos: 17322580.23, recCliente: 0, salarios: -811411.58, total: 9024108.06, period: "total" },
  { cc: "20099", financiamento: 0, fornecedor: -168690.83, imposto: 0, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -168690.83, period: "total" },
  { cc: "40001", financiamento: -154077.66, fornecedor: 0, imposto: 0, outrosCustos: -636, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -154713.66, period: "total" },
  { cc: "Outros", financiamento: -7569361.10, fornecedor: -1150000, imposto: -13300876.22, outrosCustos: -853266.99, outrosRecebimentos: 88227.83, recCliente: 0, salarios: -12616.19, total: -22797892.67, period: "total" },
];

export const custoCentroMacaeData: CustoCentroEntry[] = [...ccMacaeJan, ...ccMacaeFev, ...ccMacaeS4, ...ccMacaeS5, ...ccMacaeS6, ...ccMacaeMar, ...ccMacaeTotal];

// ── Tipo de Pagamento/Recebimento por Empresa ──────────────────────

// Janeiro
const tipoJan: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -7569361.10, fornecedor: -12975685.30, imposto: -3774626.03, outrosCustos: -4592614.70, outrosRecebimentos: 104583.03, recCliente: 27993101.83, salarios: -10607277.00, total: -11421879.27, period: "jan" },
  { company: "Mota Engil Brasil", financiamento: 29358574.67, fornecedor: -38259563.51, imposto: -2170488.54, outrosCustos: -1713914.73, outrosRecebimentos: 10112696.41, recCliente: 36595523.99, salarios: -3783317.45, total: 30139510.85, period: "jan" },
];

// Fevereiro
const tipoFev: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -1147898.08, fornecedor: -10958310.98, imposto: -5957799.82, outrosCustos: -5505256.13, outrosRecebimentos: 16355.20, recCliente: 32674404.22, salarios: -11002893.70, total: -1881399.29, period: "fev" },
  { company: "Mota Engil Brasil", financiamento: 96133802.61, fornecedor: -38683789.53, imposto: -2400387.62, outrosCustos: -1356296.66, outrosRecebimentos: 5918753.47, recCliente: 142283227.90, salarios: -4043088.83, total: 197852221.34, period: "fev" },
];

// Semana 02/03 a 06/03
const tipoS4: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -65974.94, fornecedor: -2975590.70, imposto: -33482.84, outrosCustos: -53003.24, outrosRecebimentos: 0, recCliente: 67428.04, salarios: -10580880.37, total: -13641504.05, period: "s4" },
  { company: "Mota Engil Brasil", financiamento: -4559541.73, fornecedor: -104332160.54, imposto: -518079.01, outrosCustos: -327246.22, outrosRecebimentos: 543520.61, recCliente: 15957612.52, salarios: -2844487.49, total: -96080381.86, period: "s4" },
];

// Semana 09/03 a 13/03
const tipoS5: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -44051.36, fornecedor: -4071748.57, imposto: -594347.54, outrosCustos: -92930.97, outrosRecebimentos: 35000, recCliente: 687012.90, salarios: -48318.42, total: -4129383.96, period: "s5" },
  { company: "Mota Engil Brasil", financiamento: -506318.20, fornecedor: -4893822.22, imposto: -880148.17, outrosCustos: -209972.21, outrosRecebimentos: 354281.54, recCliente: 0, salarios: -35070.13, total: -6171049.39, period: "s5" },
];

// Semana 16/03 a 20/03
const tipoS6: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: 0, fornecedor: -2275349.82, imposto: -5683520.44, outrosCustos: -2311720.69, outrosRecebimentos: 17289869.83, recCliente: 63816.73, salarios: -199176.80, total: 6883918.81, period: "s6" },
  { company: "Mota Engil Brasil", financiamento: -3926952.58, fornecedor: -4503351.44, imposto: -231417.02, outrosCustos: -904096.74, outrosRecebimentos: 2244.17, recCliente: 6267720.84, salarios: -976422.30, total: -4272275.07, period: "s6" },
];

// ── Tipo Pagamento Março (direct from Excel) ──
const tipoMar: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -110026.30, fornecedor: -9322689.09, imposto: -6311350.82, outrosCustos: -2457654.90, outrosRecebimentos: 17324869.83, recCliente: 818257.67, salarios: -10828375.59, total: -10886969.20, period: "mar" },
  { company: "Mota Engil Brasil", financiamento: -8992812.51, fornecedor: -113729334.20, imposto: -1629644.20, outrosCustos: -1441315.17, outrosRecebimentos: 900046.32, recCliente: 22225333.36, salarios: -3855979.92, total: -106523706.32, period: "mar" },
];

// ── Tipo Pagamento Total Acumulado (direct from Excel) ──
const tipoTotal: TipoPagamentoEntry[] = [
  { company: "Macaé", financiamento: -8827285.48, fornecedor: -33256685.37, imposto: -16043776.67, outrosCustos: -12555525.73, outrosRecebimentos: 17445808.06, recCliente: 61485763.72, salarios: -32438546.29, total: -24190247.76, period: "total" },
  { company: "Mota Engil Brasil", financiamento: 116499564.77, fornecedor: -190672687.24, imposto: -6200520.36, outrosCustos: -4511526.56, outrosRecebimentos: 16931496.20, recCliente: 201104085.25, salarios: -11682386.20, total: 121468025.87, period: "total" },
];

export const tipoPagamentoData: TipoPagamentoEntry[] = [...tipoJan, ...tipoFev, ...tipoS4, ...tipoS5, ...tipoS6, ...tipoMar, ...tipoTotal];
