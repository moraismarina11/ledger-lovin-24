// ── Aging Fornecedores (snapshot 27/03/2026) ──
// Data read from "Aging Fornecedores" sheet

export interface AgingFornecedorEntry {
  empresa: string;
  valor: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a360: number;
  mais360: number;
}

export const agingFornecedoresData: AgingFornecedorEntry[] = [
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", valor: -2334677.02, aVencer: -3123.60, ate30: 979584.46, de31a60: -6164.72, de61a90: -162740.76, de91a180: -134489.26, de181a360: -1166714.88, mais360: -1841028.26 },
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", valor: -18730010.08, aVencer: -18728226.94, ate30: -1783.14, de31a60: 0, de61a90: 0, de91a180: 0, de181a360: 0, mais360: 0 },
  { empresa: "MEBR - Part. Consultoria", valor: -231217.98, aVencer: -77603.24, ate30: -151291.96, de31a60: -347.46, de61a90: 0, de91a180: 0, de181a360: -1254.48, mais360: -720.84 },
  { empresa: "MOTA-ENGIL BRASIL S/A", valor: -16560504.56, aVencer: -12419819.00, ate30: -605717.52, de31a60: -139400.50, de61a90: -36192.40, de91a180: -174561.80, de181a360: -244045.52, mais360: -2940767.82 },
  { empresa: "Tracevia Brasil", valor: -2959116.52, aVencer: -899205.86, ate30: -917666.86, de31a60: -85436.12, de61a90: -53579.52, de91a180: -35943.06, de181a360: -224251.88, mais360: -743033.22 },
  { empresa: "Mota Engil Engenharia", valor: -41596499.52, aVencer: -33386245.04, ate30: -8095169.38, de31a60: 0, de61a90: 0, de91a180: -103262.54, de181a360: 9790.00, mais360: -21612.56 },
  { empresa: "REDUC", valor: -354323.42, aVencer: 0, ate30: -202072.40, de31a60: -2142.44, de61a90: -2142.44, de91a180: -2043.32, de181a360: 0, mais360: -145922.82 },
];

export const agingFornecedoresTotals: AgingFornecedorEntry = {
  empresa: "Total Geral",
  valor: -82766349.10,
  aVencer: -65514223.68,
  ate30: -8994116.80,
  de31a60: -233491.24,
  de61a90: -254655.12,
  de91a180: -450299.98,
  de181a360: -1626476.76,
  mais360: -5693085.52,
};

// ── Aging Clientes (snapshot 27/03/2026) ──
// Data read from "Resumo aging total" sheet

export interface AgingClienteEntry {
  empresa: string;
  cliente: string;
  aReceber: number;
  aVencer: number;
  ate30: number;
  de31a60: number;
  de61a90: number;
  de91a180: number;
  de181a1ano: number;
  de1a2anos: number;
  de2a3anos: number;
  mais3anos: number;
}

export const agingClientesData: AgingClienteEntry[] = [
  { empresa: "CONSÓRCIO ECB SEA_ALSUB", cliente: "ECOLOGIKA AMBIENTAL TRANSPORTE", aReceber: 26452.00, aVencer: 7064.00, ate30: 19388.00, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "ME FUNDAÇÕES BRASIL LTDA", cliente: "BESIX-ECB SPE LTDA", aReceber: 54195716.02, aVencer: 1626510.18, ate30: 29049205.84, de31a60: 0, de61a90: 23520000.00, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "PETROLEO BRASILEIRO S A PETROBRAS", aReceber: 97539891.08, aVencer: 94808392.36, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 220088.22, de2a3anos: 833322.14, mais3anos: 1678088.36 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "AUTOPISTA FERNAO DIAS S.A", aReceber: 1089504.72, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 1089504.72 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "VALE SA", aReceber: 6524373.68, aVencer: 6524373.68, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "TUPI NORDESTE OPERACOES MARITIMAS L", aReceber: 321464.66, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 175288.16, de1a2anos: 146176.50, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA-ENGIL BRASIL S/A", cliente: "GUARA-NORTE OPERACOES MARITIMAS LTD", aReceber: 1098974.42, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 1098974.42, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "COLOMBIA ME SAS", aReceber: 49371.76, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 49371.76, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "VIABAHIA CONCESSIONARIA", aReceber: 436300.96, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 175593.42, de1a2anos: 260707.54, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "ECORODOVIAS CONCESSOES E SERVICOS S", aReceber: 10500.04, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 10500.04 },
  { empresa: "Tracevia Brasil", cliente: "ECO101 CONCESSIONARIA DE RODOVIAS S", aReceber: 103795.58, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 103795.58 },
  { empresa: "Tracevia Brasil", cliente: "VELSIS SISTEMA E TECNOLOGIA VIARIA", aReceber: 850019.96, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 850019.96, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "VIAPAULISTA S.A", aReceber: 6945.50, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 6945.50 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DAS RODOVIAS", aReceber: 145178.04, aVencer: 130247.10, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 14930.94 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA ECOVIAS", aReceber: 243079.96, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 243079.96 },
  { empresa: "Tracevia Brasil", cliente: "LABOR ENGENHARIA E TECNOLOGIA LTDA", aReceber: 132706.34, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 132706.34, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DE RODOVIAS NOROESTE", aReceber: 889605.28, aVencer: 782414.88, ate30: 0, de31a60: -3715.28, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 110905.68, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA DE RODOVIA NOVA 364", aReceber: 91772.20, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 91772.20, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "Tracevia Brasil", cliente: "CONCESSIONARIA ROTA DO OESTE S.A.", aReceber: 1715756.34, aVencer: 0, ate30: 1715756.34, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 0, mais3anos: 0 },
  { empresa: "MOTA ENGIL ENGENHARIA", cliente: "PETROBRAS", aReceber: 96257448.68, aVencer: 89804760.52, ate30: 703441.94, de31a60: 874658.36, de61a90: 438620.92, de91a180: 379160.24, de181a1ano: 284490.88, de1a2anos: 0, de2a3anos: 609603.36, mais3anos: 3162712.46 },
  { empresa: "REDUC", cliente: "ECBSA UO BC LOTE 3", aReceber: 137648.24, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 130107.24, de2a3anos: 7541.00, mais3anos: 0 },
  { empresa: "REDUC", cliente: "MOTA ENGIL ENGENHARIA", aReceber: 22359.40, aVencer: 0, ate30: 480.00, de31a60: 11132.56, de61a90: 0, de91a180: 0, de181a1ano: 5928.36, de1a2anos: 4818.48, de2a3anos: 0, mais3anos: 0 },
  { empresa: "REDUC", cliente: "PETROBRAS", aReceber: 459224.12, aVencer: 0, ate30: 0, de31a60: 0, de61a90: 0, de91a180: 0, de181a1ano: 0, de1a2anos: 0, de2a3anos: 214255.58, mais3anos: 244968.54 },
];

export const agingClientesTotals = {
  aReceber: 262348088.98,
  aVencer: 193683762.72,
  ate30: 31488272.12,
  de31a60: 882075.64,
  de61a90: 23958620.92,
  de91a180: 379160.24,
  de181a1ano: 733073.02,
  de1a2anos: 2021149.84,
  de2a3anos: 2647448.38,
  mais3anos: 6554526.10,
};
