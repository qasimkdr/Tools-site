const suffixes: Record<string, string> = {
  Energy: "Review the calculation, tariff assumptions and limitations before comparing it with an electricity bill.",
  Solar: "Review the energy assumptions, equipment limits and worked example before planning a solar purchase.",
  Money: "Review the formula, rates, repayment assumptions and limitations before making a financial decision.",
  Business: "Review the cost assumptions, formula and worked example before using the result for business planning.",
  Vehicles: "Review the distance, efficiency, price assumptions and limitations before making a vehicle decision.",
  Technology: "Review the units, technical assumptions and worked example before relying on the estimate.",
  Education: "Review the formula and confirm the applicable rules with your institution before using the result.",
  Home: "Review the measurements, local price assumptions and limitations before requesting a professional quotation.",
  Everyday: "Review the formula, entered values and worked example to understand and verify the result.",
  Guide: "Read the method, practical examples, official sources and limitations before relying on the information.",
};

const trimAtWord = (value: string, maximum = 158) => {
  if (value.length <= maximum) return value;
  const shortened = value.slice(0, maximum - 1);
  const boundary = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, boundary > 110 ? boundary : maximum - 1).replace(/[,:;\s]+$/, "")}.`;
};

export const seoDescription = (description: string, category = "Everyday") => {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length >= 110 && clean.length <= 160) return clean;
  if (clean.length > 160) return trimAtWord(clean);
  const suffix = suffixes[category] || suffixes.Everyday;
  let expanded = `${clean} ${suffix}`;
  if (expanded.length < 110) expanded += " No signup is required.";
  return trimAtWord(expanded);
};
