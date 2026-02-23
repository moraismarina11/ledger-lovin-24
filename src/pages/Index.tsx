import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Top10Tab from "@/components/dashboard/Top10Tab";
import CustoCentroTab from "@/components/dashboard/CustoCentroTab";
import TipoPagamentoTab from "@/components/dashboard/TipoPagamentoTab";
import { top10Data, custoCentroMEBData, custoCentroMacaeData, tipoPagamentoData } from "@/components/dashboard/data";
import { PERIODS, type PeriodId } from "@/components/dashboard/shared";

const Index = () => {
  const [period, setPeriod] = useState<PeriodId>("s1");

  // For now all data is period "s1" — when more weeks are added, filter here
  const filterByPeriod = <T extends { period: string }>(data: T[]): T[] => {
    if (period === "total") return data; // show all
    return data.filter((d) => d.period === period);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Dashboard Financeiro
            </h1>
            <p className="text-muted-foreground mt-1">Análise de Contas a Pagar e Receber</p>
          </div>

          {/* Period selector */}
          <div className="flex gap-2">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriod(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  period === p.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </header>

        <Tabs defaultValue="top10" className="space-y-4">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="top10" className="rounded-lg">Top 10 Fornecedores</TabsTrigger>
            <TabsTrigger value="tipo" className="rounded-lg">Tipo Pagamento</TabsTrigger>
            <TabsTrigger value="cc-meb" className="rounded-lg">CC Mota Engil Brasil</TabsTrigger>
            <TabsTrigger value="cc-macae" className="rounded-lg">CC Macaé</TabsTrigger>
          </TabsList>

          <TabsContent value="top10">
            <Top10Tab data={filterByPeriod(top10Data)} />
          </TabsContent>

          <TabsContent value="tipo">
            <TipoPagamentoTab data={filterByPeriod(tipoPagamentoData)} />
          </TabsContent>

          <TabsContent value="cc-meb">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMEBData)}
              title="Centro de Custo — Mota Engil Brasil"
              grouped
            />
          </TabsContent>

          <TabsContent value="cc-macae">
            <CustoCentroTab
              data={filterByPeriod(custoCentroMacaeData)}
              title="Centro de Custo — Macaé"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
