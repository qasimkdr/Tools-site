export const numberValue = (value: string) => Math.max(0, Number(value) || 0);

export const formatPkr = (value: number) => new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
}).format(value);

export const formatNeutral = (value: number) => new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(value);
