/**
 * Hand-written, page-specific FAQ entries used when removing site-wide boilerplate left a
 * page short of useful content. Each answer is checked against the tool's actual behaviour.
 */
export const supplementalFaqs: Record<string, {question: string; answer: string}[]> = {
  "gcf-calculator": [
    {question: "How does the Euclidean algorithm find the GCF of larger numbers?", answer: "Divide the larger number by the smaller one, then replace the pair with the smaller number and the remainder. Repeat until the remainder is 0; the last non-zero remainder is the GCF. For 252 and 105: 252 = 2 × 105 + 42, 105 = 2 × 42 + 21 and 42 = 2 × 21 + 0, so the GCF is 21."},
    {question: "How are the GCF and the LCM related?", answer: "For two positive whole numbers a and b, GCF(a, b) × LCM(a, b) = a × b. With 12 and 18 the GCF is 6, so the LCM is 12 × 18 ÷ 6 = 36. This is a quick way to check a GCF result or find the LCM without listing multiples."},
  ],
  "superscript-generator": [
    {question: "Which characters does the superscript generator convert?", answer: "It converts the digits 0–9, the plus, minus and equals signs, both parentheses, and the letters n and i into their Unicode superscript characters. Any other character is left unchanged, so x2 becomes x² while the x stays a normal letter."},
    {question: "Why might superscript text look different on another device?", answer: "The output is ordinary Unicode text, so it can be pasted into chats, profiles and documents. How it looks depends on the font: if a font does not include a superscript character, the device may substitute another font or show an empty box. Check the result on the platform where it will be published."},
  ],
};
