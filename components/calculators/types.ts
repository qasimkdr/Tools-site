export type CalculatorResult = { label: string; value: string; note?: string };

export type CalculatorConfig = {
  labels: string[];
  suffix: string[];
  calculate: () => CalculatorResult[];
};

export type ResolverContext = {
  slug: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  cash: (value: number) => string;
};

export type CalculatorResolver = (context: ResolverContext) => CalculatorConfig | null;
