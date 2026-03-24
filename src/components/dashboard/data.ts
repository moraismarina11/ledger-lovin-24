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

// Março = S4 + S5 + S6
const top10Mar = mergeTop10Period("mar", top10S4, top10S5, top10S6);

// Total Acumulado
const top10Total: Top10Entry[] = [
  { supplier: "PRINER LOCACAO DE EQ", macae: -3164061.20, meb: 0, total: -3164061.20, period: "total" },
  { supplier: "FLOW LATINO AMERICAN", macae: -1819879.67, meb: 0, total: -1819879.67, period: "total" },
  { supplier: "MAAC TRAVEL CORPORATE LTDA", macae: 0, meb: -2071371.91, total: -2071371.91, period: "total" },
  { supplier: "FLP TRANSPORTES DE M", macae: -1849170.67, meb: 0, total: -1849170.67, period: "total" },
  { supplier: "KROMINOX ACOS E META", macae: -1489723.73, meb: 0, total: -1489723.73, period: "total" },
  { supplier: "JOTUN BRASIL", macae: -1394161.37, meb: 0, total: -1394161.37, period: "total" },
  { supplier: "FLOW LATINO", macae: -1150000, meb: 0, total: -1150000, period: "total" },
  { supplier: "UPSTAR AVIATION", macae: 0, meb: -1156000, total: -1156000, period: "total" },
  { supplier: "CISARENTAL ADMINISTR", macae: -1052809.15, meb: 0, total: -1052809.15, period: "total" },
  { supplier: "HYDRATIGHT EQUIPAMEN", macae: -814311.28, meb: 0, total: -814311.28, period: "total" },
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
  { cc: "40001", financiamento: 29358574.67, fornecedor: -189080.15, imposto: -35405.98, outrosCustos: -41471.24, outrosRecebimentos: 83083.76, recCliente: 0, salarios: 0, total: 29175701.07, period: "jan" },
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
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: -1314.43, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1314.43, period: "s5" },
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
  { cc: "40004", financiamento: 0, fornecedor: 0, imposto: -1891.56, outrosCustos: 0, outrosRecebimentos: 0, recCliente: 0, salarios: 0, total: -1891.56, period: "s6" },
];

// Março = S4 + S5 + S6
const ccMEBMar = mergeCCPeriod("mar", ccMEBS4, ccMEBS5, ccMEBS6);

// Total Acumulado = Jan + Fev + Março
const ccMEBTotal = mergeCCPeriod("total", ccMEBJan, ccMEBFev, ccMEBMar);

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

// Março = S4 + S5 + S6
const ccMacaeMar = mergeCCPeriod("mar", ccMacaeS4, ccMacaeS5, ccMacaeS6);

// Total Acumulado = Jan + Fev + Março
const ccMacaeTotal = mergeCCPeriod("total", ccMacaeJan, ccMacaeFev, ccMacaeMar);

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

// Março = S4 + S5 + S6
const tipoMar = mergeTipoPeriod("mar", tipoS4, tipoS5, tipoS6);

// Total Acumulado = Jan + Fev + Março
const tipoTotal = mergeTipoPeriod("total", tipoJan, tipoFev, tipoMar);

export const tipoPagamentoData: TipoPagamentoEntry[] = [...tipoJan, ...tipoFev, ...tipoS4, ...tipoS5, ...tipoS6, ...tipoMar, ...tipoTotal];
