import type {Audit} from "./semrush-batch-one-audit";
export const roadmapGap20Audit:Record<string,Audit> = {
  "decathlon-scoring-calculator": {
    "keywordThemes": [
      "decathlon calculator",
      "decathlon scoring calculator",
      "decathlon points calculator"
    ],
    "interpretation": "Read the total alongside all ten rows. A surprisingly high or low field score should prompt a unit and event-order check before an athletic conclusion. The score differences between two scenarios reflect only the supplied performances and fixed coefficients. They do not predict whether an athlete can achieve those performances together in a two-day meet, and they do not identify the best training intervention.",
    "scenarios": [
      "100 m example — 10.40 seconds gives 999 points.",
      "Jump conversion — a 2.00 m high jump becomes 200 cm internally.",
      "Threshold case — a track time equal to b contributes zero points."
    ],
    "mistakes": [
      "Entering 1500 m decimal minutes as seconds.",
      "Using general athletics scoring tables for combined-event points.",
      "Rounding event points instead of truncating them."
    ],
    "verification": "Calculate the 100 m example independently and compare 999. Recheck all ten coefficients in the source table. Change just one valid event result and confirm the total difference equals the change in that event’s integer score, while every other event row stays fixed. For a field result below its positive-points threshold, verify the score is zero rather than a fractional power of a negative number.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://worldathletics.org/download/download?filename=53f7d332-be0c-434c-8467-1d9078966147.pdf&urlslug=IAAF+Scoring+Tables+for+Combined+Events",
    "relatedCalculators": [
      {
        "slug": "running-pace-calculator",
        "title": "Running Pace Calculator"
      },
      {
        "slug": "speed-distance-time-calculator",
        "title": "Speed Distance Time Calculator"
      },
      {
        "slug": "average-time-calculator",
        "title": "Average Time Calculator"
      }
    ]
  },
  "dotted-note-duration-calculator": {
    "keywordThemes": [
      "dotted calculator",
      "dotted note calculator",
      "dotted eighth note delay calculator"
    ],
    "interpretation": "The beat result is independent of BPM, while seconds and milliseconds are inversely proportional to BPM. This distinction is useful when comparing notation with a tempo change: the written rhythmic fraction can stay the same even though the elapsed duration changes. The fraction-of-whole-note output provides another way to check the selected denominator without assuming how many beats a particular meter contains.",
    "scenarios": [
      "No dots — an eighth is one half of a quarter-note beat.",
      "One dot — a quarter lasts one and a half quarter-note beats.",
      "Tempo change — doubling BPM halves the clock duration."
    ],
    "mistakes": [
      "Treating a staccato dot as a duration multiplier.",
      "Entering dotted-quarter BPM as quarter-note BPM.",
      "Adding half the original duration again for every additional dot."
    ],
    "verification": "At 120 quarter-note BPM, verify an undotted quarter is 500 ms, a dotted quarter 750 ms and a double-dotted quarter 875 ms. Then double the BPM and confirm those times halve while their beat counts remain unchanged. Reproduce the dot multiplier by adding the finite fractions independently. Compare the selected base note with a tie representation if the notation is unfamiliar.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://musictheory.pugetsound.edu/mt21c/DotsAndTies.html",
    "relatedCalculators": [
      {
        "slug": "bpm-calculator",
        "title": "Bpm Calculator"
      },
      {
        "slug": "timecode-calculator",
        "title": "Timecode Calculator"
      },
      {
        "slug": "decimal-time-converter",
        "title": "Decimal Time Converter"
      }
    ]
  },
  "matrix-basis-calculator": {
    "keywordThemes": [
      "basis calculator",
      "matrix basis calculator",
      "null space basis calculator",
      "rref rank calculator"
    ],
    "interpretation": "Read rank together with nullity and the actual vector lengths. The RREF supplies the pivot equations; the original-column basis preserves the original output directions. If a data matrix is badly scaled or nearly dependent, the result is a numerical classification under a stated tolerance, rather than proof of exact symbolic dependence. Keep the original matrix and threshold with any reported basis.",
    "scenarios": [
      "Dependent rows — [1,2,3] and [2,4,6] have rank one.",
      "Identity matrix — every column is a pivot and nullity is zero.",
      "Zero matrix — rank is zero and the standard coordinate vectors span its null space."
    ],
    "mistakes": [
      "Using reduced columns as a basis of the original column space.",
      "Listing the zero vector as a basis vector.",
      "Treating a numerical rank decision as exact rational algebra."
    ],
    "verification": "For the worked example, verify A[−2,1,0]ᵀ and A[−3,0,1]ᵀ both vanish. Count basis vectors and check rank plus nullity equals the number of columns. Test a rectangular zero matrix and an identity matrix. Scale all original entries by a nonzero moderate factor and confirm the pivot count and null-space directions remain consistent within the relative tolerance.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    "relatedCalculators": [
      {
        "slug": "matrix-multiplication-calculator",
        "title": "Matrix Multiplication Calculator"
      },
      {
        "slug": "substitution-calculator",
        "title": "Substitution Calculator"
      },
      {
        "slug": "matrix-inverse-calculator",
        "title": "Matrix Inverse Calculator"
      }
    ]
  },
  "complex-number-calculator": {
    "keywordThemes": [
      "complex number calculator",
      "complex arithmetic calculator",
      "complex multiplication calculator"
    ],
    "interpretation": "Read the rectangular result first and use modulus and argument as a second representation of the same number. The real and imaginary outputs can be transferred into a later arithmetic check without parsing typography. A principal angle describes direction under a branch convention, so crossing the negative real axis may produce a jump between nearly +180 and −180 degrees without a large physical change in the represented point.",
    "scenarios": [
      "Imaginary product — i×i equals −1.",
      "Conjugate product — (a+bi)(a−bi) is the real value a²+b².",
      "Zero sum — a value plus its negative has modulus zero and undefined argument."
    ],
    "mistakes": [
      "Dropping the negative sign from i².",
      "Using only the real component to decide whether the denominator is zero.",
      "Using atan(imaginary/real) without quadrant handling."
    ],
    "verification": "Recompute the worked expansion term by term. Divide the result by the same nonzero second number and recover the first. Check a value times its conjugate has zero imaginary coefficient and real part equal to the squared modulus. Test real and imaginary axes to verify angle conventions, and confirm a zero result has no argument.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://openstax.org/books/college-algebra-2e/pages/2-4-complex-numbers",
    "relatedCalculators": [
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      },
      {
        "slug": "matrix-multiplication-calculator",
        "title": "Matrix Multiplication Calculator"
      },
      {
        "slug": "vector-dot-cross-calculator",
        "title": "Vector Dot Cross Calculator"
      }
    ]
  },
  "snow-weight-load-calculator": {
    "keywordThemes": [
      "snow load calculator",
      "snow weight calculator",
      "snow water equivalent load calculator"
    ],
    "interpretation": "Compare mass per area and pressure before total mass. Area changes the total quantity without changing the uniform pressure. Depth and density each scale depth-mode mass linearly; SWE directly scales mass per area. These relationships help locate arithmetic mistakes, but they cannot establish whether the measurement describes a real building uniformly. Keep the measurement and geometric basis with the result.",
    "scenarios": [
      "Depth-density case — 0.30 m at 200 kg/m³ gives 60 kg/m².",
      "Equivalent SWE case — 60 mm gives the same mass per area.",
      "Area change — doubling represented area doubles mass but leaves pressure fixed."
    ],
    "mistakes": [
      "Entering snow depth in millimetres in the metre depth field.",
      "Assuming one universal snow density.",
      "Treating an average measured load as a structural safety verdict."
    ],
    "verification": "Independently multiply depth by density and confirm the example’s 60 kg/m². Multiply by 9.80665 and divide by 1,000 to check 0.588399 kPa. Enter the equivalent 60 mm SWE and compare the two modes. Double area and verify only total mass and total weight double. Check the original measurement record rather than treating this inverse check as validation of the observation itself.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.ncei.noaa.gov/sites/default/files/2021-09/Estimating_the_Water_Equivalent_of_Snow.pdf",
    "relatedCalculators": [
      {
        "slug": "density-mass-volume-calculator",
        "title": "Density Mass Volume Calculator"
      },
      {
        "slug": "roof-area-calculator",
        "title": "Roof Area Calculator"
      },
      {
        "slug": "gravitational-potential-energy-calculator",
        "title": "Gravitational Potential Energy Calculator"
      }
    ]
  },
  "labrador-human-age-calculator": {
    "keywordThemes": [
      "dog age calculator",
      "age calculator of dog",
      "human years to dog years calculator",
      "labrador human age calculator"
    ],
    "interpretation": "Read the result as a model comparison and retain the original dog age as the actual chronological record. The curve rises rapidly early and more slowly later, so equal chronological increments do not map to equal human-age increments. That mathematical feature can explain why a fixed multiplier gives different answers, without establishing that this equation is an individual health score.",
    "scenarios": [
      "One year — the expression returns 31.",
      "Four to eight years — doubling adds about 11.0904 comparison years.",
      "Other breed — the population confirmation prevents calculation."
    ],
    "mistakes": [
      "Using a base-ten logarithm.",
      "Calling the output a measured biological age.",
      "Applying Labrador evidence to every breed or predicting remaining lifespan."
    ],
    "verification": "Verify ln(1)=0 and the one-year result of 31. Recalculate the four-year example with a natural-log function. Compare ages four and eight and confirm the difference is 16×ln(2). Select Other or unknown breed and confirm the page refuses to calculate. Review the source study’s population and explanation before presenting the equation as more than a scoped comparison.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.genome.gov/news/news-release/NHGRI-researchers-reframe-dog-to-human-aging-comparisons",
    "relatedCalculators": [
      {
        "slug": "dog-pregnancy-calculator",
        "title": "Dog Pregnancy Calculator"
      },
      {
        "slug": "date-from-today-calculator",
        "title": "Date From Today Calculator"
      },
      {
        "slug": "logarithm-calculator",
        "title": "Logarithm Calculator"
      }
    ]
  },
  "golf-handicap-worksheet": {
    "keywordThemes": [
      "golf handicap calculator",
      "handicap calculator",
      "handicap calculator golf",
      "calculate golf handicap",
      "golf score differential calculator"
    ],
    "interpretation": "The score-differential mode shows both rounded and unrounded values. The raw-index mode shows selected low differentials and the record-length adjustment, so another reader can reproduce the average. Compare those intermediate values before comparing the final display with a scoring service. A plus display is a sign convention, not a switch to adding a positive signed differential.",
    "scenarios": [
      "One round — 90, 70.2, 125 and PCC 0 gives 17.9.",
      "Three scores — the lowest differential receives a −2 adjustment.",
      "Twenty scores — the lowest eight are averaged before excluded safeguards."
    ],
    "mistakes": [
      "Entering raw gross score before applicable hole limits.",
      "Using par instead of Course Rating.",
      "Treating a raw selected average as an issued Handicap Index."
    ],
    "verification": "Independently evaluate 113/125×(90−70.2) and check the rounded 17.9. For three scores, sort the list and apply the −2 adjustment to the lowest. For twenty values, independently identify the lowest eight and average them. Review USGA rules 5.1, 5.2 and 5.6 and compare with the official record if the result will inform actual play.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.usga.org/handicapping/roh/Content/rules/5%202a%20For%20Fewer%20Than%2020%20Scores.htm",
    "relatedCalculators": [
      {
        "slug": "average-time-calculator",
        "title": "Average Time Calculator"
      },
      {
        "slug": "weighted-mean-calculator",
        "title": "Weighted Mean Calculator"
      },
      {
        "slug": "winrate-calculator",
        "title": "Winrate Calculator"
      }
    ]
  },
  "absolute-neutrophil-count-calculator": {
    "keywordThemes": [
      "anc calculator",
      "absolute neutrophil count calculator",
      "calculate anc"
    ],
    "interpretation": "Check the converted WBC and combined percentage before reading the ANC. Their product is the entire calculation, so a thousandfold discrepancy usually warrants a unit review. The two ANC units represent the same count on different scales. The numerical output cannot by itself determine an individual diagnosis, prognosis or treatment plan, and a successful arithmetic check does not validate the specimen.",
    "scenarios": [
      "Separate report — WBC 4.5 with 40% mature and 2% bands gives 1,890 cells/µL.",
      "Combined report — 42% combined and zero bands gives the same count.",
      "Invalid fraction — percentages totaling more than 100 are rejected."
    ],
    "mistakes": [
      "Selecting cells/µL for a WBC reported in thousands.",
      "Entering an absolute neutrophil count as a percentage.",
      "Adding bands to a percentage that already includes them."
    ],
    "verification": "Convert the example’s 4.5 ×10⁹/L to 4,500 cells/µL independently. Multiply by 42/100 and confirm 1,890. Repeat with Combined mode and zero bands. Confirm the SI output is the cells/µL output divided by one thousand. Compare all inputs and the final count with the original compatible laboratory report before seeking clinical interpretation.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.bccancer.bc.ca/pharmacy-site/Documents/Clinical_Pharmacy_Guide/cpg3T-lab-test-table.pdf",
    "relatedCalculators": [
      {
        "slug": "cardiac-output-calculator",
        "title": "Cardiac Output Calculator"
      },
      {
        "slug": "abg-calculator",
        "title": "Abg Calculator"
      },
      {
        "slug": "boer-lean-body-mass-calculator",
        "title": "Boer Lean Body Mass Calculator"
      }
    ]
  },
  "harris-benedict-calculator": {
    "keywordThemes": [
      "harris benedict calculator",
      "harris benedict equation calculator",
      "revised harris benedict calculator"
    ],
    "interpretation": "Read the model name and input units alongside the kcal/day result. The kJ/day value is the same numerical energy estimate converted using 4.184 kJ per kcal, not a second independent prediction. An estimate from this equation can be compared with another method for study or documentation, but agreement between formulas does not prove that either measures an individual’s actual needs.",
    "scenarios": [
      "Male coefficient example — 70 kg, 175 cm and 35 years gives 1,667.282 kcal/day.",
      "Female coefficient example — the same measurements give 1,485.483 kcal/day.",
      "Age sensitivity — one extra year reduces the male expression by 5.677 kcal/day with other inputs fixed."
    ],
    "mistakes": [
      "Confusing the original and revised coefficient sets.",
      "Entering pounds as kilograms.",
      "Using a resting estimate as a personal intake prescription."
    ],
    "verification": "Calculate each contribution in the male example independently and sum 1,667.282. Repeat with the female expression. Increase age by one and confirm the model-specific age coefficient is subtracted. Convert kcal/day to kJ/day by multiplying by 4.184. Compare published coefficients in the linked primary research discussion and preserve the revised-1984 label with the result.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2018.00367/full",
    "relatedCalculators": [
      {
        "slug": "resting-energy-calculator",
        "title": "Resting Energy Calculator"
      },
      {
        "slug": "macro-calculator",
        "title": "Macro Calculator"
      },
      {
        "slug": "food-energy-calculator",
        "title": "Food Energy Calculator"
      }
    ]
  },
  "adult-shoe-size-converter": {
    "keywordThemes": [
      "foot size calculator",
      "women's to men's shoe size conversion calculator",
      "shoe size converter and calculator",
      "adult shoe size converter"
    ],
    "interpretation": "Read the returned row as a set of source-chart labels and a foot-length reference. If several rows match, the output exposes ambiguity that another system’s single answer might hide. The converted centimetres describe the source’s rounded inch measurement. They should not be used to claim extra measuring precision, and neither those centimetres nor the CM/JP label independently guarantee a suitable shoe.",
    "scenarios": [
      "US men 9 — the source row includes US women 10.5 and EU 42.5.",
      "Repeated UK label — UK 6 returns every source match.",
      "Foot length between points — the next larger checked point is selected."
    ],
    "mistakes": [
      "Using a brand-specific lookup as a universal fit guarantee.",
      "Confusing CM/JP box labels with measured foot centimetres.",
      "Discarding a second row when the input label is ambiguous."
    ],
    "verification": "Open the source chart and compare the US men 9 row across all five label columns. Convert 10 5/16 inches by multiplying 10.3125 by 2.54 to check 26.19375 cm. Look up UK 6 and verify the repeated matches. Test a length just below and just above one chart point, then confirm outside-range inputs are rejected rather than extrapolated.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.nike.com/size-fit/mens-footwear",
    "relatedCalculators": [
      {
        "slug": "length-conversion-calculator",
        "title": "Length Conversion Calculator"
      },
      {
        "slug": "clothing-size-chart-matcher",
        "title": "Clothing Size Chart Matcher"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "food-energy-calculator": {
    "keywordThemes": [
      "kcal calories converter",
      "how to calculate calories in food",
      "food energy calculator",
      "kcal to small calories converter"
    ],
    "interpretation": "In conversion mode, all three outputs represent one known energy quantity. In composition mode, the basis energy and portion multiplier reveal how the portion total was assembled. Review category definitions before comparing with a label, especially where fibre and sugar alcohols appear. A match with a label is an arithmetic reconciliation, not proof that the food analysis or individual intake decision is correct.",
    "scenarios": [
      "Unit conversion — 1 kcal equals 1,000 small cal and 4.184 kJ.",
      "Portion example — 171 kcal per 100 g becomes 256.5 kcal at 150 g.",
      "Erythritol — its disclosed factor is zero and must not be added to other polyols."
    ],
    "mistakes": [
      "Confusing small calories with kilocalories.",
      "Double-counting fibre or polyols inside carbs.",
      "Expecting independently rounded regulatory factors to equal exact unit conversion."
    ],
    "verification": "Recompute the four-category example as 80+40+45+6 = 171 kcal and scale by 1.5. Independently total the kJ contributions to 719 per basis. Use conversion mode with 1 kcal and confirm both unit relations. Check that doubling consumed mass doubles composition energy, while changing the basis only makes sense when all nutrient entries describe that changed basis.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011R1169-20250401",
    "relatedCalculators": [
      {
        "slug": "food-protein-calculator",
        "title": "Food Protein Calculator"
      },
      {
        "slug": "macro-calculator",
        "title": "Macro Calculator"
      },
      {
        "slug": "net-carbohydrate-calculator",
        "title": "Net Carbohydrate Calculator"
      }
    ]
  },
  "taxable-income-worksheet": {
    "keywordThemes": [
      "taxable income calculator",
      "taxable income worksheet",
      "adjusted income arithmetic calculator"
    ],
    "interpretation": "Use the displayed subtotals as a reconciliation trail. A zero result means the supplied deductions exhaust this simplified base; it does not prove no tax or filing obligation exists. The worksheet is useful when the inclusion and allowance questions have already been answered by the applicable return instructions or qualified assessment. Keep those decisions and supporting records with the arithmetic.",
    "scenarios": [
      "Simple reconciliation — 52,000 less 2,000 adjustments and 10,000 deductions gives 40,000.",
      "Excess deductions — the result floors at zero without a carryforward calculation.",
      "Inconsistent adjustments — adjustments above supplied income are rejected."
    ],
    "mistakes": [
      "Treating all cash receipts as automatically includible income.",
      "Subtracting tax credits from the income base.",
      "Mixing periods or entering mutually exclusive deduction alternatives together."
    ],
    "verification": "Sum each list independently, subtract adjustments first and then deductions. Confirm the example’s 52,000, 50,000 and 40,000 sequence. Compare each subtotal with the assessed source worksheet, not just its last line. Review the applicable official return instructions for the input treatment; the linked IRS discussion is one example of the distinction between deductions and credits, not a universal eligibility rule.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.irs.gov/credits-and-deductions-for-individuals",
    "relatedCalculators": [
      {
        "slug": "paycheck-estimator-calculator",
        "title": "Paycheck Estimator Calculator"
      },
      {
        "slug": "nyc-resident-income-tax-calculator",
        "title": "Nyc Resident Income Tax Calculator"
      },
      {
        "slug": "new-jersey-tax-calculator",
        "title": "New Jersey Tax Calculator"
      }
    ]
  },
  "texas-sales-tax-calculator": {
    "keywordThemes": [
      "texas state tax calculator",
      "car sales tax calculator",
      "texas sales tax calculator",
      "texas dealer vehicle sales tax calculator"
    ],
    "interpretation": "Review the selected scope, taxable base and applied rate before the tax. A discrepancy with an invoice can come from taxable-charge classification or local sourcing rather than multiplication. Vehicle mode’s omission of local rate is intentional. The subtotal including calculated tax represents only the supplied taxable base and tax, so it should not be renamed a full purchase cost without accounting for remaining invoice lines.",
    "scenarios": [
      "Retail maximum local input — 6.25% plus 2% gives 8.25%.",
      "Dealer example — $25,000 net eligible base produces $1,562.50 tax.",
      "Mode difference — vehicle local-rate input is not applied."
    ],
    "mistakes": [
      "Applying ordinary retail local tax to the dealer motor vehicle mode.",
      "Assuming every invoice charge is taxable.",
      "Using dealer trade-in arithmetic for a private-party SPV transaction."
    ],
    "verification": "Multiply $100 by 0.0825 and compare $8.25. In vehicle mode, subtract the eligible $5,000 allowance from $30,000 before multiplying by 0.0625. Change a verified retail local rate by one percentage point and check tax changes by one percent of its base. Compare the tax base and classifications with the official transaction guidance before treating a seller’s invoice as reconciled.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://comptroller.texas.gov/taxes/motor-vehicle/sales-use.php",
    "relatedCalculators": [
      {
        "slug": "sales-tax-vat-calculator",
        "title": "Sales Tax Vat Calculator"
      },
      {
        "slug": "taxable-income-worksheet",
        "title": "Taxable Income Worksheet"
      },
      {
        "slug": "car-lease-vs-buy-calculator",
        "title": "Car Lease Vs Buy Calculator"
      }
    ]
  },
  "nyc-resident-income-tax-calculator": {
    "keywordThemes": [
      "nyc income tax calculator",
      "new york city resident tax calculator",
      "2025 nyc income tax calculator"
    ],
    "interpretation": "Read the tax year, filing status and method row with the amount. The table interval is an important audit value below $65,000; the schedule name is important above it. The result is one pre-credit city line, so it cannot be interpreted as a refund or complete bill. If the residency confirmation is not valid, leave it unconfirmed and use the appropriate official worksheet instead.",
    "scenarios": [
      "Single schedule example — $70,000 gives $2,588 before credits after whole-dollar rounding.",
      "Table boundary — $64,999 remains in the final table interval.",
      "Scope gate — an unconfirmed full-year resident record does not calculate."
    ],
    "mistakes": [
      "Using gross salary instead of assessed city taxable income.",
      "Relabeling a 2025 table result as 2026 tax.",
      "Interpreting pre-credit city tax as the full tax bill or refund."
    ],
    "verification": "Find a below-$65,000 income interval directly in the official NYC table and compare the selected filing-status amount. Independently evaluate the $70,000 Single example with the official $1,813 base. Test $64,999 and $65,000 to verify the table-to-schedule switch. Check the year, whole-dollar input, residency and status against the official return instructions before using the arithmetic in a filing workflow.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.tax.ny.gov/pit/file/tax-tables/it201i-2025.htm",
    "relatedCalculators": [
      {
        "slug": "new-jersey-tax-calculator",
        "title": "New Jersey Tax Calculator"
      },
      {
        "slug": "taxable-income-worksheet",
        "title": "Taxable Income Worksheet"
      },
      {
        "slug": "paycheck-estimator-calculator",
        "title": "Paycheck Estimator Calculator"
      }
    ]
  },
  "clothing-size-chart-matcher": {
    "keywordThemes": [
      "clothing size calculator",
      "clothing size chart matcher",
      "brand size chart calculator"
    ],
    "interpretation": "Read the matching labels and the per-row bust/waist/hip comparisons together. Multiple labels indicate overlapping chart ranges, while no label indicates that at least one measurement falls outside every complete row. Neither outcome justifies a fit guarantee. The result is most useful as a transparent explanation of a specific chart, with the source chart and measurement procedure kept available for review.",
    "scenarios": [
      "All within — 93, 77 and 101 match the example M ranges.",
      "One above — waist 82 prevents that M match.",
      "Shared endpoint — inclusive overlaps can return more than one label."
    ],
    "mistakes": [
      "Mixing centimetres with inches.",
      "Comparing flat garment dimensions with full body circumferences.",
      "Averaging incompatible dimensions into an invented nearest size."
    ],
    "verification": "Check each example inequality independently. Set a measurement equal to a row endpoint and verify it remains within. Add an overlapping row and confirm every complete match is returned. Change one measurement only and review which per-row position changes. Compare the copied range endpoints with the actual current retailer chart; arithmetic validation does not establish that the chart belongs to the intended garment.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.nike.com/size-fit/womens-tops-alpha",
    "relatedCalculators": [
      {
        "slug": "adult-shoe-size-converter",
        "title": "Adult Shoe Size Converter"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      },
      {
        "slug": "length-conversion-calculator",
        "title": "Length Conversion Calculator"
      }
    ]
  },
  "boer-lean-body-mass-calculator": {
    "keywordThemes": [
      "lbm calculator",
      "lean mass calculator",
      "lean mass weight calculator",
      "boer lean body mass calculator"
    ],
    "interpretation": "Read the kilogram estimate and its share alongside the Boer model label. The percentage is derived from the same equation output, not an independent body-fat measurement. A result between zero and body mass satisfies a basic arithmetic constraint but cannot prove individual accuracy. Avoid relabeling the estimate as skeletal muscle or using a change between estimates as a tissue-change diagnosis.",
    "scenarios": [
      "Male example — 70 kg and 175 cm gives 56.015 kg.",
      "Female example — the same inputs give 52.115 kg.",
      "Age scope — changing 35 to 45 does not alter the estimate, while an unsupported age is rejected."
    ],
    "mistakes": [
      "Calling lean mass skeletal muscle mass.",
      "Entering pounds or inches in metric fields.",
      "Treating a plausibility check as validation against an individual measurement."
    ],
    "verification": "Multiply each height and mass coefficient independently and check the example’s 56.015 kg. Divide by seventy and convert to a percentage. Repeat with the female coefficients. Confirm a supported age change leaves arithmetic fixed and an unsupported age blocks it. Compare the coefficient set with the linked research’s Boer expressions; measurement comparisons require an appropriate independently assessed method.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6110034/",
    "relatedCalculators": [
      {
        "slug": "body-fat-calculator",
        "title": "Body Fat Calculator"
      },
      {
        "slug": "resting-energy-calculator",
        "title": "Resting Energy Calculator"
      },
      {
        "slug": "harris-benedict-calculator",
        "title": "Harris Benedict Calculator"
      }
    ]
  },
  "point-mass-center-of-mass-calculator": {
    "keywordThemes": [
      "center of mass calculator",
      "point mass center of mass calculator",
      "3d mass center calculator"
    ],
    "interpretation": "Read the center, total mass and first moments together. The coordinate must lie within the convex span of the supplied positive-mass positions, so an output beyond every point along one axis signals an input or arithmetic problem. The result depends on the point model and coordinate frame. It is a weighted position, not a force location certified for every loading condition.",
    "scenarios": [
      "Unequal pair — masses two and one at the example points give (2,1,0).",
      "Equal masses — the weighted mean becomes the ordinary coordinate mean.",
      "Common translation — shifting every x by ten shifts center x by ten."
    ],
    "mistakes": [
      "Mixing coordinate frames or length units.",
      "Averaging positions without their masses.",
      "Confusing first moments with moments of inertia or torque."
    ],
    "verification": "Independently sum masses and each mass-coordinate product for the worked example. Multiply the reported center by total mass and recover the three first moments. Double every mass and verify the center is fixed. Add a common coordinate offset and verify the center receives the same offset. For each axis, check the center falls between the minimum and maximum input coordinates.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://openstax.org/books/university-physics-volume-1/pages/9-6-center-of-mass",
    "relatedCalculators": [
      {
        "slug": "midpoint-calculator",
        "title": "Midpoint Calculator"
      },
      {
        "slug": "momentum-impulse-calculator",
        "title": "Momentum Impulse Calculator"
      },
      {
        "slug": "vector-dot-cross-calculator",
        "title": "Vector Dot Cross Calculator"
      }
    ]
  },
  "construction-crew-size-calculator": {
    "keywordThemes": [
      "construction crew size calculator",
      "worker hours crew calculator",
      "construction labour capacity calculator"
    ],
    "interpretation": "Read required crew together with productive capacity and paid-hour cost. The excess-capacity row exposes the effect of rounding instead of concealing it in the worker count. The numerical result answers a capacity question under supplied equal-worker assumptions. It does not decide staffing suitability, legal working hours or whether a construction sequence can support that crew.",
    "scenarios": [
      "Exact capacity — the worked example needs eight workers.",
      "Rounding — a fractional worker requirement becomes the next whole worker.",
      "Zero requirement — zero required hours gives a zero modeled crew and cost."
    ],
    "mistakes": [
      "Entering elapsed task hours as total worker-hours.",
      "Double-counting productivity losses in both required hours and productive share.",
      "Charging only productive hours when the stated rate applies to paid hours."
    ],
    "verification": "Compute productive hours per worker as 5×8×0.75 = 30. Divide 240 by thirty and check eight workers. Multiply eight by forty paid hours and the supplied rate to check 6,400 currency. Change the requirement just above an exact crew boundary and confirm the count rises by one. Validate the labour requirement and scheduling constraints independently; this arithmetic check does not prove site feasibility.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.bls.gov/productivity/",
    "relatedCalculators": [
      {
        "slug": "productivity-calculator",
        "title": "Productivity Calculator"
      },
      {
        "slug": "average-time-calculator",
        "title": "Average Time Calculator"
      },
      {
        "slug": "lawn-mowing-cost-calculator",
        "title": "Lawn Mowing Cost Calculator"
      }
    ]
  },
  "excavation-haul-calculator": {
    "keywordThemes": [
      "excavation haul calculator",
      "excavation swell calculator",
      "truck haul trips calculator"
    ],
    "interpretation": "Read bank volume, loose volume and conserved mass before interpreting trips. The two rounded bounds reveal why the larger count controls. Loose density is a consistency output from the same supplied assumptions, not another measured input. The trip result is useful for a uniform-material planning scenario, while actual legal loading and excavation procedures remain separate assessments.",
    "scenarios": [
      "Volume controls — the worked example needs thirteen trips by volume.",
      "Payload controls — a heavier density can make the mass bound larger.",
      "Zero swell — bank and loose volumes are equal in the stated model."
    ],
    "mistakes": [
      "Entering loose density as bank density while also applying swell.",
      "Ignoring payload because a truck has enough volume.",
      "Treating modeled trips as a safe-loading or excavation approval."
    ],
    "verification": "Recompute 10×5×2 = 100 m³ and multiply by 1.25 for loose volume. Check mass as 100×1,800 = 180,000 kg. Divide separately by ten cubic metres and fifteen thousand kilograms, round upward and compare thirteen with twelve. Multiply inferred loose density by loose volume to recover the same mass. Review actual capacities and quote scope independently before planning transport.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://www.osha.gov/etools/construction/trenching-excavation",
    "relatedCalculators": [
      {
        "slug": "cubic-yard-calculator",
        "title": "Cubic Yard Calculator"
      },
      {
        "slug": "density-mass-volume-calculator",
        "title": "Density Mass Volume Calculator"
      },
      {
        "slug": "construction-crew-size-calculator",
        "title": "Construction Crew Size Calculator"
      }
    ]
  },
  "vector-dot-cross-calculator": {
    "keywordThemes": [
      "vector dot product calculator",
      "cross product calculator",
      "vector projection calculator"
    ],
    "interpretation": "Read each output according to its type. A zero dot product indicates perpendicularity only when both magnitudes are nonzero, while a zero cross product also occurs for parallel vectors or zero inputs. The projection is a directed component along B, not a distance between endpoints. These distinctions help avoid attaching an unsupported physical meaning to a correct numerical calculation.",
    "scenarios": [
      "Coordinate axes — x and y unit vectors have zero dot and positive z cross.",
      "Parallel pair — cross product vanishes and a positive alignment has zero angle.",
      "Zero B — dot and cross remain calculable but angle and projection are undefined."
    ],
    "mistakes": [
      "Swapping the cross-product order without changing its sign.",
      "Assigning an angle to a zero vector.",
      "Using geographic coordinates as though they were Cartesian vector components."
    ],
    "verification": "Check the coordinate-axis example by hand. Reverse input order and confirm cross product negates while dot stays fixed. Compute the dot of the cross result with each original vector and verify zero within rounding. For nonzero B, subtract the projection from A and check its dot with B is zero. Test zero vectors and confirm undefined angle and projection cases are labeled explicitly.",
    "sourceNote": "Reviewed on 6 October 2026 for the specific disclosed method or measurement context. The arithmetic is independently implemented. A linked reference does not certify an individual result or extend the worksheet beyond its stated scope.",
    "sourceUrl": "https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product",
    "relatedCalculators": [
      {
        "slug": "cartesian-distance-calculator",
        "title": "Cartesian Distance Calculator"
      },
      {
        "slug": "work-energy-calculator",
        "title": "Work Energy Calculator"
      },
      {
        "slug": "point-mass-center-of-mass-calculator",
        "title": "Point Mass Center Of Mass Calculator"
      }
    ]
  }
};
