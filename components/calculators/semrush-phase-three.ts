import type { CalculatorResolver } from "./types";
import { numberValue as n } from "./helpers";

const f = (value: number, digits = 2) => Number.isFinite(value) ? value.toLocaleString("en-US", { maximumFractionDigits: digits }) : "—";
const error = (label: string, message: string) => [{ label, value: message }];

export const resolveSemrushPhaseThree: CalculatorResolver = ({ slug, a, b, c, d, e }) => {
  if (slug === "circle-skirt-calculator") {
    return {
      labels: ["Waist circumference", "Finished skirt length", "Skirt shape", "Combined seam and hem allowance", "Usable fabric width"],
      suffix: ["in", "in", "select:quarter=Quarter circle|half=Half circle|three-quarter=Three-quarter circle|full=Full circle", "in", "in"],
      calculate: () => {
        const waist = n(a), length = n(b), fraction = ({ quarter: 0.25, half: 0.5, "three-quarter": 0.75, full: 1 } as Record<string, number>)[String(c)] || 0, allowance = n(d), fabric = n(e);
        if (!(waist > 0 && length > 0 && fraction > 0 && allowance >= 0 && fabric > 0)) return error("Pattern estimate", "Enter positive measurements and choose a skirt shape");
        const waistRadius = waist / (2 * Math.PI * fraction), cutRadius = waistRadius + length + allowance, diameter = cutRadius * 2;
        return [
          { label: "Waist radius before allowance", value: `${f(waistRadius, 2)} in`, note: "Measured from the pattern center to the waist seam" },
          { label: "Outer cutting radius", value: `${f(cutRadius, 2)} in` },
          { label: "Flat cut diameter", value: `${f(diameter, 2)} in`, note: diameter <= fabric ? "Fits the entered fabric width as a flat diameter" : "A folded or multi-panel layout may be needed; this is not a full cutting plan" },
        ];
      },
    };
  }
  if (slug === "cross-stitch-calculator") {
    return {
      labels: ["Design width", "Design height", "Fabric count", "Margin on each edge"],
      suffix: ["stitches", "stitches", "stitches/in", "in"],
      calculate: () => {
        const width = n(a), height = n(b), count = n(c), margin = n(d);
        if (!(width > 0 && height > 0 && count > 0 && margin >= 0)) return error("Fabric estimate", "Enter positive stitch counts and fabric count, with a non-negative margin");
        const stitchedW = width / count, stitchedH = height / count, cutW = stitchedW + margin * 2, cutH = stitchedH + margin * 2;
        return [
          { label: "Stitched design", value: `${f(stitchedW, 2)} × ${f(stitchedH, 2)} in`, note: `${f(stitchedW * 2.54, 2)} × ${f(stitchedH * 2.54, 2)} cm before margins` },
          { label: "Fabric cut size with margins", value: `${f(cutW, 2)} × ${f(cutH, 2)} in` },
          { label: "Edge allowance", value: `${f(margin, 2)} in on each side` },
        ];
      },
    };
  }
  if (slug === "hypergeometric-calculator") {
    return {
      labels: ["Population size (N)", "Successes in population (K)", "Draws without replacement (n)", "Exact successes (x)"],
      suffix: ["items", "items", "draws", "successes"],
      calculate: () => {
        const N = n(a), K = n(b), draws = n(c), target = n(d);
        if (![N, K, draws, target].every(Number.isInteger) || N < 1 || N > 1_000_000 || K < 0 || K > N || draws < 0 || draws > 5_000 || draws > N || target < 0 || target > draws) return error("Probability", "Use whole numbers: 1–1,000,000 population, up to 5,000 draws, and valid success counts");
        const logChoose = (total: number, selected: number) => {
          const k = Math.min(selected, total - selected);
          let sum = 0;
          for (let i = 1; i <= k; i++) sum += Math.log(total - k + i) - Math.log(i);
          return sum;
        };
        const low = Math.max(0, draws - (N - K)), high = Math.min(draws, K);
        let probability = Math.exp(logChoose(K, low) + logChoose(N - K, draws - low) - logChoose(N, draws));
        let exact = 0, atMost = 0;
        for (let x = low; x <= high; x++) {
          if (x === target) exact = probability;
          if (x <= target) atMost += probability;
          if (x < high) probability *= ((K - x) * (draws - x)) / ((x + 1) * (N - K - draws + x + 1));
        }
        const expected = N ? draws * K / N : 0;
        const variance = N > 1 ? draws * (K / N) * (1 - K / N) * ((N - draws) / (N - 1)) : 0;
        return [
          { label: `P(X = ${target})`, value: `${f(exact * 100, 6)}%`, note: "Exact probability for sampling without replacement" },
          { label: `P(X ≤ ${target})`, value: `${f(Math.min(1, atMost) * 100, 6)}%` },
          { label: "Expected successes", value: f(expected, 4), note: `Standard deviation ${f(Math.sqrt(Math.max(0, variance)), 4)}` },
        ];
      },
    };
  }
  if (slug === "stud-calculator") {
    return {
      labels: ["Combined wall length", "On-center spacing", "Extra studs for corners and openings", "Waste allowance"],
      suffix: ["ft", "in", "studs", "%"],
      calculate: () => {
        const length = n(a), spacing = n(b), extra = n(c), waste = n(d);
        if (!(length > 0 && spacing > 0 && Number.isInteger(extra) && extra >= 0 && waste >= 0 && waste <= 50)) return error("Stud estimate", "Enter positive wall length and spacing, whole extra studs, and waste from 0 to 50%");
        const base = Math.ceil(length * 12 / spacing) + 1, layout = base + extra, purchase = Math.ceil(layout * (1 + waste / 100));
        return [
          { label: "Base stud positions", value: f(base, 0), note: `Includes both ends at ${f(spacing, 2)}-inch on-center spacing` },
          { label: "With extra studs", value: f(layout, 0) },
          { label: "Suggested quantity with waste", value: f(purchase, 0), note: "Rough material estimate, not structural design" },
        ];
      },
    };
  }
  if (slug === "soffit-calculator") {
    return {
      labels: ["Total eave length", "Soffit projection", "Panel face coverage", "Waste allowance"],
      suffix: ["ft", "in", "in", "%"],
      calculate: () => {
        const length = n(a), projection = n(b), coverage = n(c), waste = n(d);
        if (!(length > 0 && projection > 0 && coverage > 0 && waste >= 0 && waste <= 50)) return error("Soffit estimate", "Enter positive dimensions and waste from 0 to 50%");
        const area = length * projection / 12, rows = Math.ceil(projection / coverage), raw = length * rows, order = raw * (1 + waste / 100);
        return [
          { label: "Soffit coverage area", value: `${f(area, 2)} sq ft`, note: "Before cuts and waste" },
          { label: "Panel rows", value: f(rows, 0), note: `At ${f(coverage, 2)}-inch face coverage` },
          { label: "Panel length to allow", value: `${f(order, 2)} linear ft`, note: `${f(raw, 2)} ft before ${f(waste, 1)}% waste` },
        ];
      },
    };
  }
  if (slug === "ap-english-language-and-composition-score-calculator") {
    return {
      labels: ["Multiple-choice questions correct", "Synthesis rubric points", "Rhetorical analysis rubric points", "Argument rubric points"],
      suffix: ["of 45", "of 6", "of 6", "of 6"],
      calculate: () => {
        const mcq = n(a), frqs = [n(b), n(c), n(d)];
        if (!Number.isInteger(mcq) || mcq < 0 || mcq > 45 || frqs.some(score => !Number.isInteger(score) || score < 0 || score > 6)) return error("Practice composite", "Enter 0–45 correct answers and a whole-number rubric score from 0–6 for each essay");
        const mcqPoints = mcq / 45 * 45, frqPoints = frqs.reduce((sum, score) => sum + score, 0) / 18 * 55, composite = mcqPoints + frqPoints;
        return [
          { label: "Practice composite", value: `${f(composite, 2)}%`, note: "Weighted practice estimate; not an official AP score from 1 to 5" },
          { label: "Multiple-choice contribution", value: `${f(mcqPoints, 2)} / 45 points` },
          { label: "Free-response contribution", value: `${f(frqPoints, 2)} / 55 points` },
        ];
      },
    };
  }
  return null;
};
