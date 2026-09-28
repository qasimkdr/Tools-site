const supplements: Record<string, { heading: string; paragraphs: string[]; checklist: string[] }> = {
  "first-time-car-buyer-guide": {
    heading: "Questions a first-time buyer should answer before applying",
    paragraphs: [
      "Write down the maximum out-the-door price, cash available without touching emergency savings, preferred payoff date and highest comfortable complete transportation cost. These limits should exist before a salesperson presents a vehicle or payment. Otherwise, term length and add-ons can quietly expand the budget. Ask for an insurance quote on the exact model because age, location, driving history and repair cost can make two similarly priced cars very different to own.",
      "Decide in advance how you will handle a trade, co-signer and optional products. Obtain a trade value and payoff independently, and never let negative equity disappear inside a new monthly payment. If a co-signer is involved, both people need access to statements and a clear plan for missed payments. Service contracts, protection products and accessories should be priced separately so each can be accepted or declined on its own merits.",
    ],
    checklist: ["Out-the-door price in writing", "Independent insurance quote", "Comparable preapproval or benchmark", "Trade value and payoff separated", "Inspection plan for a used vehicle", "Emergency cash remaining after purchase"],
  },
  "zero-percent-apr-car-financing": {
    heading: "How to verify that a zero-percent offer is genuinely competitive",
    paragraphs: [
      "Request two itemized worksheets for the same vehicle: one using promotional financing and another using the best available rebate or negotiated discount with ordinary financing. Keep the vehicle price, trade allowance, taxes, required fees and optional products visible. The comparison fails if the dealer changes several numbers at once. A zero rate can be valuable, but it cannot compensate for an inflated selling price or products the buyer would not otherwise choose.",
      "Read the final credit disclosure rather than relying on the advertisement. Confirm that the APR is actually 0.00%, identify the number and amount of payments, and check whether the offer contains a large final payment. Ask what happens after a late payment and whether the special rate depends on automatic payment or another condition. Retain the advertisement and signed paperwork, but treat the signed contract as the operative schedule.",
    ],
    checklist: ["Exact eligible vehicle confirmed", "Promotion expiration checked", "APR shown as 0.00%", "Rebate alternative calculated", "No unwanted add-ons", "Payment count and final payment verified"],
  },
  "zero-down-car-lease-guide": {
    heading: "Lease disclosure checklist beyond the advertised payment",
    paragraphs: [
      "Ask the lessor to identify gross capitalized cost, reductions, adjusted capitalized cost, residual value, rent charge or money factor, payment count and total amount due at signing. These figures explain the payment. If a trade or rebate is used, confirm exactly where it appears. Compare offers using the same term and mileage allowance; otherwise the lower payment may simply purchase fewer miles or use more upfront value.",
      "Plan for the end of the lease on the day it begins. Record the excess-mileage charge, disposition fee, purchase-option price and wear standard. Ask whether an inspection can occur before return and whether repairs may be completed independently. If the vehicle may be purchased, compare the stated option price with likely market value later without assuming either figure is guaranteed.",
    ],
    checklist: ["All cash due at signing itemized", "Annual mileage allowance", "Excess-mileage rate", "Wear and tyre standard", "Disposition fee", "Purchase-option amount and fee"],
  },
  "how-do-car-loans-work": {
    heading: "Read the loan disclosure line by line",
    paragraphs: [
      "Match the amount financed to the buyer's order. It should be possible to trace the negotiated price, taxes, required fees, optional products, down payment, rebates and trade equity into that number. An unexplained difference is a reason to stop and ask for a corrected itemization. The finance charge and total of payments then show the scheduled borrowing cost under the disclosed assumptions.",
      "Confirm the first due date, payment frequency, late charge, default provisions, prepayment language and address or method for notices. Ask whether interest accrues daily and how partial or extra payments are handled. A verbal promise that contradicts the written contract may be difficult to enforce, so requested conditions, repairs and cancellations should appear in the signed documents.",
    ],
    checklist: ["Amount financed reconciled", "APR compared with APR", "Finance charge reviewed", "Payment count confirmed", "Optional products itemized", "Prepayment and default terms read"],
  },
  "how-to-lower-car-payment": {
    heading: "Choose relief that solves the cause, not only the symptom",
    paragraphs: [
      "If the current rate is high but income is stable, a shorter or equal-term refinance at a meaningfully lower APR may address the cause. If the vehicle price itself is too high for the household, stretching the term can postpone the problem. If the difficulty is temporary, direct discussion with the existing lender may reveal a documented hardship option, although interest and the final date may change.",
      "Build a before-and-after worksheet. Include the exact payoff, current remaining payments, proposed fees, new payment count, new payoff date and total cash from today. Add any optional-product refunds separately rather than assuming they reduce the loan automatically. Reject any comparison that shows only monthly saving without the new total repayment and duration.",
    ],
    checklist: ["Exact payoff quote", "Current vehicle value", "Old remaining payment total", "New fees and total payments", "New payoff date", "Written hardship or refinance terms"],
  },
  "how-much-down-payment-for-a-car": {
    heading: "A down-payment decision should survive an emergency",
    paragraphs: [
      "Separate cash into three buckets: money needed to complete the transaction, an emergency reserve that remains untouched and optional extra down payment. Registration, insurance deposits, immediate maintenance and travel home should come from the transaction bucket. The reserve should reflect household risks rather than a dealer's requested percentage. Only then is the remaining amount available to reduce financing.",
      "Measure the benefit of each additional unit of cash down. Record the payment reduction, interest saving and loan-to-value improvement. Compare that benefit with keeping liquidity or paying a more expensive debt. If an additional down payment merely enables a higher vehicle price, the budget has not improved. Keep the vehicle and loan assumptions constant while testing cash amounts.",
    ],
    checklist: ["Out-the-door price fixed", "Emergency reserve protected", "Immediate ownership costs funded", "Trade equity verified", "Loan-to-value reviewed", "Payment and total interest compared"],
  },
  "finance-car-with-no-credit": {
    heading: "Protect a thin-file applicant from avoidable cost",
    paragraphs: [
      "Create an application packet with consistent names, addresses, employment dates and income evidence. Inconsistency can delay review even when it has an innocent explanation. Ask whether alternative data or a manual review is available, but do not provide credentials or sensitive documents through an unverified channel. Keep copies of what was submitted and of any authorization for a credit inquiry.",
      "A first approval should become a benchmark, not an obligation. Compare it with other legitimate sources using the same amount and term. If the rate is extreme, calculate a cheaper vehicle, larger responsible down payment or delayed purchase. Building payment history is not a benefit when the payment itself creates a high risk of delinquency.",
    ],
    checklist: ["Credit information checked", "Income documents consistent", "Vehicle price reduced where possible", "Offers compared on same term", "Co-signer liability understood", "No false information or blank forms"],
  },
  "when-to-refinance-auto-loan": {
    heading: "Refinance break-even is more than one division",
    paragraphs: [
      "The familiar fee-divided-by-monthly-saving calculation gives only a simple time threshold. It does not capture a longer new term, a different final payment, optional products, title charges or the chance of selling the car early. Build a month-by-month comparison or at least compare complete remaining cash flows and loan end dates. Treat any refund from the old contract separately until its amount and timing are confirmed.",
      "Also examine the vehicle's value relative to payoff. A lender may limit financing when the balance is high, and adding cash solely to qualify changes the economics. Continue protecting the old account during the transition: a payoff request or new approval does not cancel upcoming obligations until the existing lender posts full payment.",
    ],
    checklist: ["Payoff valid through closing date", "Vehicle value checked", "New term not hidden", "Fees included in total", "Old payment maintained until payoff", "Title and first due date tracked"],
  },
  "how-long-can-you-finance-a-car": {
    heading: "Test the loan at milestones during ownership",
    paragraphs: [
      "Do not review only the first and last payment. Estimate the balance after two, three and five years and compare those figures with conservative vehicle values. These checkpoints reveal when the borrower may have usable equity and whether a planned sale would require additional cash. They also show how slowly principal can fall during a very long term.",
      "Place warranty expiration, expected tyre replacement, major maintenance and the intended replacement date on the same timeline. A loan can be contractually available yet poorly aligned with the asset. If the schedule combines high mileage, expired coverage, repair risk and years of remaining payments, a less expensive vehicle or shorter borrowing period deserves serious comparison.",
    ],
    checklist: ["Balance at years two, three and five", "Conservative vehicle values", "Warranty end date", "Expected replacement date", "Maintenance reserve", "Total interest across term options"],
  },
  "pay-off-car-loan-early": {
    heading: "Complete the payoff and lien-release process",
    paragraphs: [
      "Request a dated payoff statement with instructions and a per-diem amount if payment may arrive later. Verify the accepted payment method and reference information. After sending funds, monitor the account until it shows a zero balance rather than assuming that a bank transfer closed it. Resolve any small residual interest promptly.",
      "Ask when and how the lien release or title update will be issued, and confirm the address or electronic process. Retain the payoff statement, payment evidence, zero-balance confirmation and lien-release document. Cancel automatic payments only after the lender confirms closure, while separately reviewing whether any optional insurance or service product has a refundable unused portion.",
    ],
    checklist: ["Dated payoff statement", "Per-diem interest checked", "Payment reference retained", "Zero balance confirmed", "Lien release or title tracked", "Automatic payment cancelled after closure"],
  },
};

export function AutoFinanceSupplement({ slug }: { slug: string }) {
  const content = supplements[slug];
  if (!content) return null;
  return <><section><h2>{content.heading}</h2>{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul>{content.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Record the comparison before making a decision</h2><p>Create a dated comparison sheet that records the vehicle, cash price, amount financed, APR, term, upfront payment, fees, optional products, scheduled payment and total of payments. Keep each offer in its own column and use the same assumptions throughout. If a salesperson or lender changes one figure, update the complete column rather than comparing the revised monthly payment with an older total. This record makes hidden trade-offs easier to spot and gives you specific questions to ask before signing.</p><p>Save the advertisement, buyer&apos;s order, application, disclosure and final agreement together. Recheck names, vehicle identification, prices, dates and promised conditions while corrections are still possible. Ask for unclear language to be explained in writing, and take time away from the transaction if the documents do not match the offer. Calculators help organize numbers, but the signed documents establish the real payment obligation, security interest, remedies and cancellation rights.</p></section></>;
}
