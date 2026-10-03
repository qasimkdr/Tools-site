import type {Audit} from "./semrush-batch-one-audit";
export const roadmap206Audit:Record<string,Audit> = {
  "gc-content-calculator": {
    "keywordThemes": [
      "gc calculator"
    ],
    "interpretation": "GC percentage describes nucleotide composition on the selected denominator. The known-base result is conditional on resolved bases; the all-position result is a resolved lower bound when N is present. GC skew is a separate imbalance statistic, not a percentage or a diagnosis. Results follow the last submitted sequence, alphabet and denominator. A different denominator can change the percentage without changing any observed base counts.",
    "scenarios": [
      "GGCC: four known positions, 100% GC and zero skew.",
      "AATT: zero GC and undefined GC skew because G+C is zero.",
      "NNNN: known-base percentage is undefined; all-position resolved GC is zero."
    ],
    "mistakes": [
      "Do not treat unresolved N as a known low-GC base in a reported complete composition.",
      "A header containing letters is descriptive text, not sequence content; multiple FASTA records need separate handling.",
      "GC skew and GC content have different denominators and should retain their statistic names."
    ],
    "verification": "Verify each base count independently, then sum G and C. Calculate both denominators explicitly and compare the displayed percentages. Repeating a resolved sequence twice should double its counts while leaving GC content and skew unchanged. Reordering bases should also leave these whole-record statistics unchanged; the tool is not performing a position-dependent analysis.",
    "sourceNote": "IIT Guwahati Aptabase provides a nucleotide GC-content calculation. The ambiguity and denominator policies on this page are explicitly implemented by SolvePilot.",
    "sourceUrl": "https://www.iitg.ac.in/proj/aptabase/",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      }
    ]
  },
  "llc-tax-calculator": {
    "keywordThemes": [
      "llc tax calculator"
    ],
    "interpretation": "Read the remaining amount as a cash reserve under your own coefficient, not a tax assessment. Its accuracy depends first on the profit basis, allocation and rate assumption. The model stays reproducible because no jurisdiction-specific tax classification or automatic rate is hidden. If your adviser changes the assumption, record why and rerun the scenario rather than describing the change as a revised official liability.",
    "scenarios": [
      "Zero share and zero fixed charges produce no percentage-based reserve, regardless of entered profit.",
      "50,000 allocated profit at 20% plus 500 known charges gives 10,500 before payments.",
      "Payments of 12,000 against that 10,500 scenario leave zero remaining reserve and 1,500 scenario excess."
    ],
    "mistakes": [
      "Applying a share again after entering an already allocated owner profit double-scales the basis.",
      "Entering sales instead of the intended profit figure changes the meaning of the reserve rate.",
      "Counting the same charge inside both the supplied coefficient and the separate fixed-charge field overstates the scenario."
    ],
    "verification": "Reconcile the reserve in three independent steps: allocated profit, percentage-based amount plus fixed charges, then payments. The remaining reserve and excess-payment outputs should never both be positive. Compare assumptions with the underlying advice or planning record; this arithmetic cannot validate whether the selected rate matches actual return rules.",
    "sourceNote": "IRS LLC guidance explains that federal treatment depends on membership and classification elections. This worksheet supplies original user-rate reserve arithmetic; it is not an IRS liability model.",
    "sourceUrl": "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc",
    "relatedCalculators": [
      {
        "slug": "profit-margin-calculator-global",
        "title": "Profit Margin Calculator Global"
      },
      {
        "slug": "business-cash-runway-calculator",
        "title": "Business Cash Runway Calculator"
      },
      {
        "slug": "budget-percentage-calculator",
        "title": "Budget Percentage Calculator"
      }
    ]
  },
  "wainscoting-calculator": {
    "keywordThemes": [
      "wainscoting calculator"
    ],
    "interpretation": "The answer is an equal clear-opening width under one precise layout convention. The first opening start and repeated opening start distance help turn that calculation into a sketch. They are measured from the same wall origin, not from an arbitrary trim center. The model does not choose visual proportions or alter margins automatically. All required dimensions remain supplied inputs.",
    "scenarios": [
      "A 60-inch run, zero margins, two-inch stiles and one panel gives a 56-inch clear opening.",
      "A 100-inch run, five-inch margins, two-inch stiles and three panels gives 27.333333 inches per opening.",
      "A 10-inch run with three panels and three-inch stiles is rejected because four stiles already exceed the run."
    ],
    "mistakes": [
      "Confusing center-to-center spacing with the clear opening changes the mark positions.",
      "Forgetting the two end stiles undercounts occupied trim width.",
      "Rounding every repeated opening separately can accumulate a discrepancy at the final edge."
    ],
    "verification": "Draw the end margin, first stile, first opening and subsequent repeats on paper. Reconstruct the full width from all openings, every stile and both margins. Check the far end against the measured run before selecting a cut convention. A successful sum confirms the arithmetic, not wall straightness or installation suitability.",
    "sourceNote": "Original equal-spacing geometry under the stated end-margin and stile-count convention. Actual product dimensions, cut details and installation requirements come from the selected manufacturer.",
    "relatedCalculators": [
      {
        "slug": "linear-feet-calculator",
        "title": "Linear Feet Calculator"
      },
      {
        "slug": "board-foot-calculator",
        "title": "Board Foot Calculator"
      },
      {
        "slug": "stud-calculator",
        "title": "Stud Calculator"
      }
    ]
  },
  "charles-law-calculator": {
    "keywordThemes": [
      "charles' law calculator - bythelaws.com"
    ],
    "interpretation": "The solved value belongs to a fixed-pressure, fixed-amount ideal-gas comparison. Volumes share one unit basis and temperatures are positive Kelvin. The relation is reversible, so the chosen initial/final labels organize the data rather than impose a direction of heating. Any pressure change or loss of gas requires a different model. The hidden unknown field is ignored, preventing a stale value from entering the calculation.",
    "scenarios": [
      "At 300 K and 2 volume units, cooling to 150 K gives 1 volume unit.",
      "A volume rising from 5 to 10 units at an initial 250 K gives a final 500 K.",
      "At equal initial and final temperature, the calculated volume stays unchanged."
    ],
    "mistakes": [
      "Using Celsius ratios violates the absolute-temperature assumption even if the arithmetic appears tidy.",
      "Mixed volume units change a temperature result because the ratio no longer compares like quantities.",
      "A rigid container does not fit the modeled free volume change at fixed pressure."
    ],
    "verification": "Calculate both V/T ratios using the solved value and compare them before rounding. Then reverse the named states and solve for the original known quantity. Check the physical assumptions independently of that algebra: equal ratios cannot prove that pressure stayed fixed or that the gas amount remained unchanged.",
    "sourceNote": "OpenStax Chemistry 2e explains gas-law relationships. This tool applies the constant-pressure, fixed-amount ideal-gas proportionality with Kelvin temperatures.",
    "sourceUrl": "https://openstax.org/books/chemistry-2e/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law",
    "relatedCalculators": [
      {
        "slug": "molarity-calculator",
        "title": "Molarity Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "crypto-conversion-calculator": {
    "keywordThemes": [
      "ovo calculator"
    ],
    "interpretation": "The result belongs to your manually supplied price and fee convention. Currency text is only a label; it does not cause a price lookup. The two directions differ in which amount is known, so read the first input label after switching. Fee deductions affect the budget or gross quote amount before the displayed net result. This scenario has no assurance of execution, token identity or liquidity.",
    "scenarios": [
      "100 tokens at 2 currency units with no fee give 200 quote units.",
      "A 200-unit budget at 2 units per token and a 1% fee yields 99 tokens.",
      "Zero quantity or budget produces zero modeled output while the price must remain positive."
    ],
    "mistakes": [
      "A price quoted as tokens per currency must be inverted before using the currency-per-token field.",
      "A network charge paid as a fixed amount is not the proportional fee modeled here.",
      "Using a stale quote can make correct arithmetic irrelevant to an actual executable trade."
    ],
    "verification": "Recompute gross value or net budget separately with the price timestamp attached. At zero fee, the two directions should invert each other. With a fee, a sell-then-buy round trip applies deductions twice and should not be mistaken for an exact inverse. Check execution conventions separately with the service providing the quote.",
    "sourceNote": "The Coinbase OVO listing supports the token-conversion search context. Prices and token identity are not copied or verified by this manual-quote calculator.",
    "sourceUrl": "https://www.coinbase.com/price/ovo",
    "relatedCalculators": [
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "unit-price-comparison-calculator",
        "title": "Unit Price Comparison Calculator"
      },
      {
        "slug": "investment-fee-calculator",
        "title": "Investment Fee Calculator"
      }
    ]
  },
  "minecraft-sphere-generator": {
    "keywordThemes": [
      "sphere minecraft generator"
    ],
    "interpretation": "Each model is a finite set of zero-based block coordinates selected by the published geometry rule. Layer selection only changes its view. Diameter or shell-mode edits do not change counts, diagrams or exported coordinates until Calculate sphere is clicked. The shell is defined by face-neighbor exposure, so a claim of a smooth or uniform physical wall thickness would exceed the model.",
    "scenarios": [
      "Diameter 1 selects one block in both solid and hollow modes.",
      "Diameter 3 produces 19 solid blocks or 18 hollow blocks.",
      "Diameter 4 places the center between cells and selects 32 solid blocks."
    ],
    "mistakes": [
      "Continuous sphere volume and selected voxel count are different quantities.",
      "Interpreting Y layer zero as world height zero without choosing an origin can misplace a build.",
      "An exported plan remains tied to the last calculated settings when inputs have been edited."
    ],
    "verification": "Sum the displayed block counts across all Y layers and compare with the overall count. Confirm every CSV row lies within the zero-based diameter bounds and that no coordinate repeats. Mirroring any coordinate through diameter minus one should yield another selected block. These checks assess the geometric set, not game permissions or construction safety.",
    "sourceNote": "Original, explicitly documented voxel-center selection and six-neighbor shell rule. This is an independent block planner, not an official Minecraft generator or game command service.",
    "relatedCalculators": [
      {
        "slug": "nether-portal-calculator",
        "title": "Nether Portal Calculator"
      },
      {
        "slug": "cone-volume-calculator",
        "title": "Cone Volume Calculator"
      },
      {
        "slug": "basic-calculator",
        "title": "Basic Calculator"
      }
    ]
  },
  "basic-calculator": {
    "keywordThemes": [
      "enday basic calculator",
      "simple calculator",
      "calculator basic"
    ],
    "interpretation": "The parser evaluates only the stated arithmetic grammar. Input text is never passed to eval, Function or a command interpreter. Literal percent and explicit multiplication make the computation predictable, while finite intermediate-value and nesting bounds prevent oversized expressions. Display rounding improves readability but is separate from exact decimal arithmetic. Keep the original expression with the result so grouping decisions can be reviewed.",
    "scenarios": [
      "12 + 8 * 3 gives 36; (12 + 8) * 3 gives 60.",
      "8 / 4 * 2 gives 4; 8 / (4 * 2) gives 1.",
      "200 * 15% gives 30; 200 + 15% gives 200.15."
    ],
    "mistakes": [
      "Omitting a multiplication symbol before a parenthesis is unsupported, even when the intended algebra seems obvious.",
      "A handheld add-percent key may use a different convention from the literal postfix percentage here.",
      "Commas, exponent notation and letters must not be stripped as though they were harmless formatting."
    ],
    "verification": "Work the expression in stages using its written parentheses and operator precedence. For multiplication or division, preserve left-to-right order unless a group says otherwise. Compare simple integer cases first to distinguish parsing from floating-point rounding. A division-by-zero or malformed-expression error should be corrected at its source rather than replaced by a guessed result.",
    "sourceNote": "Original bounded recursive-descent arithmetic parser with an explicit grammar. It uses browser binary floating-point numbers rather than a brand-specific commercial percentage-key convention.",
    "relatedCalculators": [
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      },
      {
        "slug": "rounding-calculator",
        "title": "Rounding Calculator"
      },
      {
        "slug": "ratio-calculator",
        "title": "Ratio Calculator"
      }
    ]
  },
  "new-jersey-tax-calculator": {
    "keywordThemes": [
      "new jersey tax calculator"
    ],
    "interpretation": "The result is 2025 full-year resident state income-tax arithmetic on already determined NJ form-line inputs. The table/schedule method is displayed with the amount. Credits and payments remain supplied amounts with no eligibility engine. The marginal schedule rate helps identify the rate band but should not be interpreted as the percentage applied to every dollar. Residence allocation and other return items remain outside the calculation.",
    "scenarios": [
      "Joint taxable income 39,875 with gross income 45,000 gives table tax 628 USD.",
      "Single taxable income 100,000 with sufficient gross income gives schedule tax 4,243.75 USD.",
      "Joint taxable income 150,000 gives schedule tax 5,512.50 USD before any supplied credit."
    ],
    "mistakes": [
      "Federal AGI or gross salary is not automatically the required New Jersey form-line amount.",
      "Using a smooth generic bracket formula below 100,000 misses the published table convention.",
      "A negative modeled balance does not establish a refundable-credit entitlement or finalized refund."
    ],
    "verification": "Compare the official 39,875 joint example first. Test just below and at 100,000 to verify the method switch, then compare filing-status columns. Check the applicable gross-income threshold separately from taxable income. Reconcile known credits and payments with the actual return and review rounding and omitted items under the official instructions.",
    "sourceNote": "New Jersey Division of Taxation, 2025 NJ-1040 instructions, printed pages 54\u201363. The bundled table contains all 2,000 $50 rows; the source PDF year was verified as 2025 when extracted on 2026-10-03.",
    "sourceUrl": "https://www.nj.gov/treasury/taxation/pdf/current/1040i.pdf",
    "relatedCalculators": [
      {
        "slug": "llc-tax-calculator",
        "title": "Llc Tax Calculator"
      },
      {
        "slug": "paycheck-estimator-calculator",
        "title": "Paycheck Estimator Calculator"
      },
      {
        "slug": "percent-calculator",
        "title": "Percent Calculator"
      }
    ]
  }
};
