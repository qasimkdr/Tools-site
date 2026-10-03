import type {Guide} from "./guides";
export const roadmap206Guides:Guide[] = [
  {
    "slug": "bank-calculators-guide",
    "title": "Calculator for Banks \u2014 Choose Loan, Deposit and Interest Models",
    "description": "Choose a calculator for banks by the financial question, compare rate and payment conventions, and calculate simple interest from your supplied inputs.",
    "category": "Money",
    "keywords": [
      "calculator for banks"
    ],
    "calculatorSlug": "bank-simple-interest-days",
    "calculatorTitle": "Supplied-Rate Simple Interest by Days",
    "calculatorExplanation": "Enter principal, annual simple rate, actual accrual days and a fixed denominator of 360, 365 or 366. Click Calculate result. This is not a 30/360 date algorithm, APY calculation or bank policy lookup.",
    "quickAnswer": "A calculator for banks needs a named task: loan payment, compound growth, implied rate or simple daily accrual. This guide helps choose that model and embeds a supplied-rate simple-interest worksheet. It retrieves no bank rates, account terms or approval decisions.",
    "takeaways": [
      "Name the cash-flow question before selecting a formula.",
      "Keep APR, effective annual return and APY conventions distinct.",
      "The embedded tool uses supplied days and an explicit annual denominator.",
      "Compare model inputs with the bank\u2019s actual disclosures and statement."
    ],
    "sections": [
      {
        "heading": "Start with the question the bank calculation answers",
        "paragraphs": [
          "The phrase calculator for banks can refer to a borrower comparing repayments, a saver reviewing an account, or a business reconciling interest. Those situations do not share one universal equation. Write the unknown quantity first: payment, final balance, implied growth rate or interest accrued across a known period. Then list the quantities already established from a statement or contract. Choosing the correct model before entering numbers prevents a familiar financial calculator from answering a different question than the one you intended.",
          "A fixed-payment loan has a principal, periodic interest basis and number of payments. A deposit growth illustration has a starting balance and a compounding convention. A simple accrual calculation has an annual rate and a year fraction. These inputs have different meanings even when each screen contains an amount, percentage and duration. The related SolvePilot pages are independent arithmetic tools. They do not represent a bank\u2019s underwriting system, retrieve current products or determine whether a customer qualifies for a particular rate."
        ]
      },
      {
        "heading": "Choose fixed-payment loan arithmetic",
        "paragraphs": [
          "Use the payment calculator when the contract fits its disclosed loan or annuity model. Enter the amount financed rather than automatically using a purchase price that includes an unfinanced deposit. Translate the annual rate into the appropriate periodic basis, and count payments in the same frequency. A term of five years with monthly payments means sixty periods, not five periods. Compare the payment with the actual repayment schedule using matching assumptions before deciding whether a difference is merely rounding.",
          "A standard amortizing result does not automatically include origination fees, taxes, insurance, balloon payments or irregular first periods. If fees are financed, the financed balance may already include them; adding them again can double-count. A lender\u2019s payment can also reflect timing or contract conventions absent from a simple model. Record what has been included in principal and what is separate. This guide does not establish a legally required APR disclosure, loan eligibility or a final binding payment from a financial institution."
        ]
      },
      {
        "heading": "Choose compound deposit or savings arithmetic",
        "paragraphs": [
          "Use compound interest for a scenario where interest is added to the balance and earns later interest. The SolvePilot compound tool supports an explicit nominal monthly-compounded or effective annual return basis, with end-of-month contributions under its stated model. A constant assumed return is a planning illustration, not a promise that a bank rate or investment return stays unchanged. Enter a rate consistent with the selected basis instead of treating every annual percentage as the same mathematical coefficient.",
          "Use the interest-rate calculator when beginning balance, ending balance and duration establish a compound growth relationship without intervening cash flows. Deposits or withdrawals can invalidate that simple implied-rate interpretation. A savings-goal model answers a further question about contributions needed to reach an amount, rather than reconstructing a bank product\u2019s legal terms. Check compounding frequency, contribution timing and the observation period. Fees, tax and changing rates need their own explicit treatment instead of being silently included in an attractive final balance."
        ]
      },
      {
        "heading": "Understand the embedded simple-interest worksheet",
        "paragraphs": [
          "The worksheet here computes principal times annual simple rate times supplied days divided by an explicit denominator. There is no compounding step. A principal of ten thousand, a five-percent annual rate and thirty days on a 365-day denominator gives about 41.10 in simple interest. The answer uses the same currency as principal. No default bank tariff or currency conversion is loaded, and changing the currency label in your notes does not change the financial basis of the rate.",
          "Enter the actual accrual-day count already established for your scenario. The tool accepts whole non-negative days and a denominator of 360, 365 or 366. The result includes the year fraction so the convention can be checked separately. It does not decide whether interest should begin on a deposit date, settlement date or another contractual event. Those timing rules come from the relevant agreement. An explicit arithmetic convention is useful only when it matches the period you are trying to reconcile."
        ]
      },
      {
        "heading": "A fixed denominator is not a full day-count algorithm",
        "paragraphs": [
          "Choosing 360 here means dividing the supplied day count by 360. It does not transform calendar dates according to a 30/360 convention. That convention can involve special month-end adjustments, while other methods can split periods across year boundaries. This worksheet has no start-date or end-date field and therefore cannot perform those transformations. Calling every 360-day calculation 30/360 would hide an important distinction between an annual denominator and the procedure used to obtain accrual days.",
          "Similarly, choosing 366 does not automatically inspect whether the dates fall in a leap year. It is simply the denominator you explicitly selected. If an agreement changes the denominator partway through a period, calculate the appropriate segments separately and reconcile them under the actual rule. The calculator does not decide which denominator a bank should use. Preserve both the day count and selected denominator with the result so another reviewer can reproduce the year fraction rather than infer it from the final interest amount."
        ]
      },
      {
        "heading": "APR, APY and effective return need their own basis",
        "paragraphs": [
          "An annual percentage label may describe a nominal periodic rate, an effective annual growth factor or a regulated disclosure that incorporates specified costs. They cannot always be substituted without conversion. An effective annual rate already describes annual compounding as a complete factor; dividing it by twelve does not produce the exact equivalent monthly rate. A nominal annual rate with monthly compounding has a different relationship. Use the labels and formula on the relevant calculator page to select the documented basis.",
          "When comparing two products, compare like periods, balances and fee assumptions. A higher headline percentage is not enough to establish a better net result when limits, changing balances or charges differ. The embedded simple-interest calculation is deliberately not advertised as APY. It is a linear accrual identity under supplied assumptions. For important comparisons, read the institution\u2019s current disclosure and prepare a complete cash-flow comparison. This guide does not select an account, rank a lender or guarantee that a quoted rate remains available."
        ]
      },
      {
        "heading": "Reconcile a statement with a traceable calculation",
        "paragraphs": [
          "Start with the statement period and the relevant balance basis. A changing daily balance is not the same as one fixed principal throughout the period. If the product uses a daily balance calculation, gather the applicable dates and amounts rather than treating the ending balance as the entire period\u2019s principal. A simple-interest worksheet can illustrate one fixed-balance segment. Adding such segments may be appropriate only after the agreement\u2019s rate and timing rules have been established independently.",
          "Keep a record of principal, annual rate, days, denominator and excluded charges. Compare the unrounded mathematical result first, then review the institution\u2019s rounding convention. A small difference may come from rounding or timing, but a large discrepancy can signal a wrong rate basis or missing cash flow. This workflow makes the question reviewable without assuming that the bank is wrong or the calculator is authoritative. Inputs stay in this browser and no account credentials or statement upload are needed for the arithmetic."
        ]
      },
      {
        "heading": "Use scenarios to understand sensitivity",
        "paragraphs": [
          "Hold principal and annual rate fixed, then compare thirty and sixty accrual days. Simple interest doubles because the year fraction doubles under one denominator. Hold the period fixed and compare 360 with 365: the smaller denominator gives a slightly larger year fraction. Neither comparison tells you which convention applies legally to your account. It shows why a convention mismatch can explain different answers even when both formulas were evaluated correctly.",
          "For compound models, sensitivity is different because interest earns further interest. A longer period does not generally scale growth linearly. For amortizing loans, changing term alters both payment and total interest, which is another separate comparison. Use each model for the relationship it actually implements and read the assumptions beside the result. When you change worksheet inputs, the last calculated result stays visible until Calculate is clicked again, so a reviewed number cannot silently change while you are recording it."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Which calculator for banks should I choose?",
        "answer": "Choose by the question: payment for the disclosed loan model, compound interest for a growth scenario, implied interest rate for a no-cash-flow balance comparison, or this simple-interest worksheet for fixed-balance accrual."
      },
      {
        "question": "Does the worksheet fetch a bank rate?",
        "answer": "No. Every rate is supplied by you. There is no bank account connection, product feed, approval decision or account-specific policy lookup."
      },
      {
        "question": "Is a 360 denominator the same as 30/360?",
        "answer": "No. The tool divides your supplied days by 360. A 30/360 method also specifies how dates are transformed, which this worksheet does not calculate."
      },
      {
        "question": "Can I use an ending balance for a changing-balance account?",
        "answer": "Not automatically. Daily balance or segmented cash flows need their actual applicable records and conventions; one fixed principal may not represent the period."
      },
      {
        "question": "Is the interest amount a guaranteed bank payout?",
        "answer": "No. It is arithmetic under supplied assumptions. Actual accrual, charges, tax, timing and rounding require the product disclosures."
      }
    ],
    "relatedTools": [
      "payment-calculator",
      "compound-interest-calculator",
      "interest-rate-calculator",
      "savings-goal-calculator"
    ],
    "relatedGuides": [
      "how-do-car-loans-work"
    ],
    "sources": [
      {
        "name": "CFPB: Interest rates and APR",
        "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/",
        "note": "Primary consumer-finance explanation of the distinction; this worksheet does not calculate a regulated disclosure."
      },
      {
        "name": "SolvePilot editorial policy",
        "url": "/editorial-policy/",
        "note": "Scope, source review and calculation-testing standards."
      }
    ],
    "limitation": "Independent supplied-input arithmetic only. No bank affiliation, live rates, account policy, 30/360 date transformation, APY disclosure or lending decision is inferred.",
    "icon": "\ud83d\udcd8",
    "publishedAt": "2026-10-03",
    "reviewedAt": "2026-10-03",
    "readingMinutes": 10,
    "tables": [
      {
        "caption": "Match the question to its model",
        "headers": [
          "Question",
          "Required basis",
          "Use"
        ],
        "rows": [
          [
            "Periodic repayment",
            "Financed amount, periodic rate, payment count",
            "Payment calculator"
          ],
          [
            "Growth with reinvestment",
            "Starting balance, compounding basis, contributions",
            "Compound interest calculator"
          ],
          [
            "Fixed-balance simple accrual",
            "Principal, rate, days and denominator",
            "Embedded worksheet"
          ]
        ]
      }
    ],
    "example": {
      "heading": "Worked example: same inputs, different denominators",
      "paragraphs": [
        "For a supplied principal of 10,000, annual simple rate of 5% and 30 accrual days, the 365-denominator result is 10,000 \u00d7 0.05 \u00d7 30/365 = 41.095890, displayed as 41.10. A 360 denominator gives 41.666667, displayed as 41.67. The difference illustrates the convention; the account agreement establishes which convention applies. Neither amount includes compounding or separately charged fees."
      ]
    }
  },
  {
    "slug": "study-score-calculator-guide",
    "title": "Study Score Calculator Guide \u2014 VCE Moderation and Weighted Assessment",
    "description": "Understand VCE study-score calculation, cohort moderation and scaling, and calculate a supplied weighted assessment percentage without inventing a VCAA score.",
    "category": "Education",
    "keywords": [
      "study score calculator"
    ],
    "calculatorSlug": "study-assessment-weighted-total",
    "calculatorTitle": "Weighted Assessment Percentage Worksheet",
    "calculatorExplanation": "Enter comma-separated assessment percentages and matching weights. Click Calculate result for their normalized weighted percentage. This is not a VCAA study score, cohort percentile or scaled ATAR contribution.",
    "quickAnswer": "A VCE study score cannot be recovered reliably from a few raw assessment percentages without the relevant cohort and moderation information. This guide explains that distinction and calculates only a supplied weighted assessment percentage. For an actual study score, use the official assessment record and current VCAA guidance.",
    "takeaways": [
      "Assessment percentage, study score and scaled ATAR contribution are different quantities.",
      "Statistical moderation means raw school marks cannot be mapped by one universal linear rule.",
      "The worksheet normalizes your supplied weights and makes no cohort inference.",
      "Independent practice estimators should be read with their disclosed data and limitations."
    ],
    "sections": [
      {
        "heading": "Identify the score the question is asking for",
        "paragraphs": [
          "A search for study score calculator often concerns Victorian Certificate of Education results. First distinguish a raw assessment percentage from a study score and from an ATAR-related scaled contribution. The same number can look familiar on several scales while representing a different process. A classroom score of eighty percent is not automatically a study score of forty. Naming the quantity prevents a basic weighted-average tool from being presented as if it had reconstructed the official assessment process.",
          "This page is an independent explanation and worksheet. It does not issue results, connect to a student record or represent VCAA, VTAC or a university. Its embedded arithmetic is intentionally narrow: it combines percentages using weights supplied by the user. A completed worksheet can support practice tracking on that chosen basis. It cannot establish a student\u2019s position in the actual state cohort, apply official moderation or replace a study score recorded by the relevant assessment authority."
        ]
      },
      {
        "heading": "What a VCE study score represents",
        "paragraphs": [
          "VCAA describes study scores on a zero-to-fifty scale as a relative measure of performance in a study, with a mean of thirty for the described distribution. This is not simply half a raw percentage. The official explanation and assessment documentation should be consulted for the applicable study and year. A score\u2019s interpretation depends on the process producing it, so a raw total, cohort ranking and reported study score should retain their separate names in any comparison.",
          "The tool here does not reconstruct that relative distribution. It has no statewide cohort marks, school moderation data or official assessment record. Inferring a study score from an assumed normal distribution and a single percentage would create information that was not supplied. Likewise, calling a weighted result a predicted percentile would hide the absent cohort. Keep the classroom or practice basis visible when recording the worksheet output, and reserve the study-score label for a model or official result that actually supports it."
        ]
      },
      {
        "heading": "Why moderation changes the raw-mark question",
        "paragraphs": [
          "School-assessed work can differ across schools and assessment settings. VCAA\u2019s statistical moderation guidance explains a process that considers the relevant assessment relationship rather than treating every raw school mark as directly comparable. For this guide, the practical consequence is that a raw school percentage alone is insufficient input for an exact study score. The official process is more specific than applying a generic percentage-to-fifty conversion across every study, school and year.",
          "This page does not reproduce the full moderation procedure or claim to simulate it. Read VCAA\u2019s own description for the applicable assessment system and record. The worksheet does not adjust a score based on a school label, invent a moderation factor or move scores to a desired mean. Those shortcuts could look precise while answering a different question. A clear boundary is more useful than a fabricated official outcome when the required cohort evidence is missing."
        ]
      },
      {
        "heading": "Use the weighted assessment worksheet correctly",
        "paragraphs": [
          "Enter each assessment percentage in the first field, separated by commas. In the second field, enter the corresponding weights in the same order. The formula is the sum of score times weight divided by the sum of weights. At least one weight must be positive, and every score and weight must be between zero and one hundred. The result stays between the smallest and largest scored percentages when weights are non-negative.",
          "For scores of seventy, eighty and ninety with weights twenty, thirty and fifty, the weighted percentage is eighty-three. This illustrates the stated arithmetic only. It is not a VCE study score or an official subject-weight schedule. Supply the weights applicable to the assessment comparison you are actually making, and preserve their source. If a task is scored out of a different maximum, convert it into the intended percentage before combining it with the other percentage inputs."
        ]
      },
      {
        "heading": "Normalization and incomplete assessment sets",
        "paragraphs": [
          "The worksheet normalizes by the total supplied weight. Weights do not have to sum to one hundred for a mathematical weighted average. For example, weights two, three and five give the same average as twenty, thirty and fifty. This can be helpful for checking proportions, but it does not prove that the entered set is the complete official assessment. The total supplied weight is displayed so the basis can be reviewed instead of hidden behind the final percentage.",
          "If you enter only completed tasks, the output describes that selected subset. It does not automatically award zero for missing future work or forecast a final course result. Including a future scenario score is a user assumption that should be marked as such. Assessment rules about missing work, hurdle requirements, authentication, resits or special provisions are separate from a weighted mean. The tool cannot decide which tasks belong in the official total for your study."
        ]
      },
      {
        "heading": "Practice estimates need their disclosed evidence",
        "paragraphs": [
          "A university or another provider may publish a study-score estimator using historical distributions and a stated methodology. Deakin\u2019s calculator and explanation are linked as one primary example, not as a data source silently incorporated here. An estimate from such a model should be read in its own terms, including the reference data and scope it describes. SolvePilot does not reproduce the provider\u2019s underlying model, branding or current estimate from two simple input lists.",
          "Compare a practice estimator with your purpose. Exploring possible scenarios is different from reporting an achieved score. Historical information may not reproduce a current cohort, and raw inputs can reflect different assessment conditions. Keep the model name, assumptions and year basis attached to any estimate. Avoid presenting a precise-looking number as an official prediction simply because the interface calls itself a calculator. This guide\u2019s own output remains an assessment percentage and contains no study-score inference."
        ]
      },
      {
        "heading": "Study score and scaling are separate stages",
        "paragraphs": [
          "An ATAR-related calculation can involve scaling and contributions from several studies. A raw study score is therefore not automatically its eventual scaled contribution, and a single study\u2019s result is not an ATAR. Use the current official admissions and scaling guidance for the relevant purpose rather than combining unrelated numbers from different stages. The worksheet here has no scaling table, admissions eligibility engine or complete subject record.",
          "A higher weighted practice percentage can show improvement on the same classroom basis without establishing a specific ATAR movement. Different studies, years and assessment structures may not be comparable through that percentage alone. When comparing scenarios, hold the worksheet\u2019s score scale and weight definitions constant. If they change, explain the changed basis first. This makes progress tracking useful without suggesting that a simple average can settle an official admission outcome."
        ]
      },
      {
        "heading": "Check the arithmetic independently",
        "paragraphs": [
          "Multiply each percentage by its weight, add those products and divide by the total weight. For the seventy, eighty, ninety example, the products are fourteen hundred, twenty-four hundred and forty-five hundred; their sum is eighty-three hundred, divided by one hundred. Reordering matched score-weight pairs leaves the result unchanged. Multiplying all weights by the same positive factor also leaves it unchanged. These are useful invariants for detecting a copied weight or misordered list.",
          "The interface calculates only after Calculate result is clicked. Editing scores or weights preserves the last submitted percentage and marks it as needing an update. Inputs remain on this device. Keep the list, its meaning and the selected assessment period with the result. For questions about an actual VCE assessment record, moderation decision or issued score, use the official record and the responsible assessment authority rather than interpreting this limited worksheet as a review or appeal decision."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does this study score calculator produce a VCAA score?",
        "answer": "No. The embedded worksheet calculates a supplied weighted assessment percentage. Official study-score calculation needs its actual assessment and cohort process."
      },
      {
        "question": "Can I multiply an assessment percentage by one half?",
        "answer": "That does not establish a VCE study score. The relative score scale and assessment process are different from a direct percentage conversion."
      },
      {
        "question": "Must the weights add to one hundred?",
        "answer": "Not for the arithmetic. The worksheet normalizes by their sum, but you must verify that the selected tasks and weights match your intended assessment basis."
      },
      {
        "question": "Does a partial list predict my final score?",
        "answer": "No. It describes the supplied subset. Future work, missing-task policy and official assessment requirements are not inferred."
      },
      {
        "question": "Is this Deakin\u2019s study-score estimator?",
        "answer": "No. That independent resource is linked with its own methodology. SolvePilot does not copy its model or represent the university."
      }
    ],
    "relatedTools": [
      "grade-calculator",
      "grade-curve-calculator",
      "mean-standard-deviation-calculator"
    ],
    "relatedGuides": [],
    "sources": [
      {
        "name": "VCAA: Current students \u2014 VCE questions",
        "url": "https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-frequently-asked-quesions/current-students",
        "note": "Official explanation of the study-score scale and its relative meaning."
      },
      {
        "name": "VCAA: Statistical moderation",
        "url": "https://www.vcaa.vic.edu.au/assessment/vce/how-vce-assessed/statistical-moderation",
        "note": "Official moderation resource; the worksheet does not simulate this process."
      },
      {
        "name": "Deakin: Study-score calculator methodology",
        "url": "https://atar-calculator.deakin.edu.au/how-the-study-score-calculator-works/",
        "note": "Independent estimator methodology, not an engine or data feed used by this page."
      }
    ],
    "limitation": "Educational assessment arithmetic only. No cohort data, official moderation, study-score prediction, scaling, ATAR, grade policy or admissions decision is inferred.",
    "icon": "\ud83d\udcd8",
    "publishedAt": "2026-10-03",
    "reviewedAt": "2026-10-03",
    "readingMinutes": 10,
    "tables": [
      {
        "caption": "Keep the score labels separate",
        "headers": [
          "Quantity",
          "What it describes",
          "Worksheet support"
        ],
        "rows": [
          [
            "Assessment percentage",
            "Supplied task score on a percentage scale",
            "Input"
          ],
          [
            "Weighted assessment percentage",
            "Mean on supplied task-weight basis",
            "Calculated"
          ],
          [
            "VCE study score",
            "Official relative assessment outcome",
            "Not inferred"
          ],
          [
            "Scaled contribution or ATAR",
            "Separate admissions-related process",
            "Not inferred"
          ]
        ]
      }
    ],
    "example": {
      "heading": "Worked example: a practice comparison",
      "paragraphs": [
        "Practice scores of 70, 80 and 90 with weights 20, 30 and 50 give (70\u00d720 + 80\u00d730 + 90\u00d750)/100 = 83%. Changing the final practice scenario to 80 gives 78% under those same weights. The five-point decrease belongs to this assessment-percentage model; it does not establish a five-point study-score decrease or an ATAR change. Keep the weights and task definitions with both scenarios."
      ]
    }
  },
  {
    "slug": "breast-implant-size-calculator-guide",
    "title": "Breast Implant Size Calculator Guide \u2014 Measurements and Consultation",
    "description": "Understand why breast implant size cannot be chosen from a cup-size calculator, compare volume and dimensions, and prepare questions for a clinical consultation.",
    "category": "Health",
    "keywords": [
      "breast implant size calculator"
    ],
    "quickAnswer": "A breast implant size calculator cannot safely choose an implant from cup size, body dimensions or desired appearance alone. This guide explains volume versus dimensions, evidence to bring to a consultation and questions to discuss with a qualified surgeon. It supplies no personalized implant-volume recommendation.",
    "takeaways": [
      "Cup labels do not establish a universal implant volume.",
      "Volume, base dimensions, projection and anatomy answer different questions.",
      "Use product information and individual clinical assessment together.",
      "A photo, arithmetic conversion or aesthetic preference is not a validated selection algorithm."
    ],
    "sections": [
      {
        "heading": "Why a universal size calculator is insufficient",
        "paragraphs": [
          "The phrase breast implant size calculator suggests that a few measurements might produce a single recommended implant volume. That expectation leaves out individual anatomy, tissue characteristics, surgical approach, product dimensions and clinical judgment. A numerical interface can make a choice look objective without containing the evidence needed to make it. This guide therefore explains the decision inputs rather than inventing a personalized cubic-centimetre answer from a cup label or body measurement.",
          "The page is independent patient education, not a clinical assessment. It does not ask for photographs, medical history or body measurements and does not assign an implant size. A consultation can examine individual circumstances and discuss realistic goals, alternatives, product-specific information and risks. The FDA\u2019s patient resources and decision materials are linked for that discussion. Editorial review of an explanatory page is not a specialist evaluation of the reader and should not be described as one."
        ]
      },
      {
        "heading": "Cup-size labels are not a volume equation",
        "paragraphs": [
          "A bra cup label is connected to a sizing system and garment fit; it is not a direct measurement of implant volume. Different brands, band sizes and fit conventions can produce different labels for a similar body shape. A requested change from one letter to another therefore does not define one universal number of cubic centimetres. An online conversion that assigns a fixed cc amount to every cup change would conceal those differences instead of resolving them.",
          "When discussing goals, describe the intended appearance and practical concerns rather than relying only on a cup letter. Ask how the clinician evaluates proportions, tissue support and the selected product\u2019s dimensions. Keep the distinction between a garment-fit preference and a surgical measurement. A numerical conversion may be mathematically consistent under its own invented rule while still being unsuitable for individual selection. This page does not provide such a rule or imply that a certain cup change can be guaranteed."
        ]
      },
      {
        "heading": "Volume and shape describe different properties",
        "paragraphs": [
          "Implant volume is often expressed in cubic centimetres, numerically equivalent to millilitres as a volume unit. That unit conversion does not determine the device\u2019s base dimensions or projection. Two products with the same stated volume can have different shapes and dimensions. A label such as profile also belongs to a product-specific specification and cannot always be compared as though it had one universal meaning across manufacturers. Read the actual device information with the clinician.",
          "Simple geometric formulas for a sphere, cylinder or cone do not reproduce an implant catalogue or predict how a device appears after placement. Tissue, placement and other individual factors affect the result. Related volume tools are linked only to clarify measurement units and mathematical models, not to estimate an implant from anatomy. Do not treat a number from a general volume calculator as a manufacturer specification or a recommendation for a surgical device."
        ]
      },
      {
        "heading": "Bring clear goals and existing information",
        "paragraphs": [
          "A useful consultation record can describe what you hope to change, what you would prefer to preserve and which outcomes would concern you. If you have previous surgical information, ask the clinic what records it needs before the appointment. Avoid replacing those records with measurements derived from an online photograph. Camera angle, lens effects, posture and lighting can change apparent proportions, and a photo does not provide a clinical examination or a verified device specification.",
          "Discuss the method used to evaluate goals and whether a proposed range depends on measurements made during the consultation. Ask what information could change that range and how alternatives are assessed. This does not require arriving with a self-selected final volume. A clear account of preferences can support the discussion without converting those preferences into a medical claim. The guide does not rank body shapes, set an aesthetic target or prescribe a device according to sex, weight or body-mass index."
        ]
      },
      {
        "heading": "Understand what a sizing demonstration shows",
        "paragraphs": [
          "A clinical sizing demonstration or visual simulation can help communicate an intended appearance, but it has its own conditions and limitations. Ask how it is performed and which aspects of the actual procedure it can reasonably illustrate. A temporary external sizer is not identical to a device after surgical placement. A simulated image is not a guarantee of the healed result. The value lies in clarifying expectations and questions, not in proving an exact predicted appearance.",
          "If several examples are shown, ask which product characteristics differ and why those differences matter for the individual assessment. Record whether volume, base size, projection or another feature changed. Avoid concluding that one preferred image establishes eligibility for its underlying product. This guide does not model tissue behavior, postoperative change or the relation between a preview and a final result. Those questions need a discussion with the clinician using the actual method and proposed device."
        ]
      },
      {
        "heading": "Review product information and decision materials",
        "paragraphs": [
          "The FDA provides patient information about breast implants and the surgical decision process. Use those resources to prepare for a discussion of risks, limitations and follow-up rather than relying on a size number alone. Ask for the specific device labeling and decision materials applicable to the proposed product. Product identity, manufacturer and model matter because a generic volume value does not establish the full specifications or information accompanying a particular implant.",
          "Discuss the clinician\u2019s explanation of alternatives, expected recovery, future assessment and circumstances that may require further procedures. This guide does not summarize every risk or decide whether the procedure is appropriate for an individual. It also does not treat a regulatory statement about one product as a universal approval of every device or intended use. Read the product-specific information and clarify anything that is unclear before using a proposed size as a final decision."
        ]
      },
      {
        "heading": "Questions that make a proposed size reviewable",
        "paragraphs": [
          "Ask which measured dimensions and examination findings support the proposed product and how its dimensions relate to the individual anatomy. Ask how changing projection or base dimensions could differ from simply changing volume. Ask which preferences can realistically be addressed and which uncertainties remain. These questions invite a reasoned explanation rather than a volume chosen because it appeared in a popular online calculator. The clinician can explain the basis and limits using the actual examination and product.",
          "Ask how the selected size and device information will be documented. A record should identify the proposed product rather than contain only a rounded cc number. If alternative options are discussed, ask what changes between them and why one might be considered. The guide provides no maximum, minimum or body-based threshold. Any personalized range belongs to the individual clinical assessment, not to a hidden formula that treats all readers with similar measurements as interchangeable."
        ]
      },
      {
        "heading": "Keep follow-up and expectations in the discussion",
        "paragraphs": [
          "Size is only one part of a surgical decision. Discuss the planned follow-up, product information and how concerns should be raised with the treating team. The FDA resources can support an informed conversation, but they do not replace individual clinical instructions. This page is not a symptom checker or a triage service. It cannot assess a complication, interpret an image or tell a reader that waiting for a calculated date or measurement is appropriate.",
          "A final decision should reflect the examination, product-specific information and a clear understanding of what is being proposed. A calculator may be useful for ordinary unit conversion, but arithmetic cannot resolve the suitability of an implant. The related clinical-model guide explains a similar boundary: a published equation requires the specific inputs and professional context it was designed for. Keep educational measurements, visual preferences and a clinical recommendation distinct so each is assessed on the evidence it actually contains."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Can a breast implant size calculator recommend a cc amount?",
        "answer": "A general online calculator cannot establish an individual device choice from cup size or a few measurements alone. This guide provides no personalized volume algorithm."
      },
      {
        "question": "Does one cup-size increase equal a fixed volume?",
        "answer": "No universal conversion is supplied here. Bra sizing and fit vary, and a cup label does not determine implant dimensions or individual surgical suitability."
      },
      {
        "question": "Are cc and mL different volume sizes?",
        "answer": "One cubic centimetre equals one millilitre as a unit conversion. That equivalence does not establish product shape, projection or suitability."
      },
      {
        "question": "Can equal-volume implants have different dimensions?",
        "answer": "Yes. Compare the actual manufacturer specifications with the clinician; volume alone is not the complete device description."
      },
      {
        "question": "Does a sizing simulation guarantee the result?",
        "answer": "No. Ask about its method and limitations. A preview or temporary sizer communicates preferences but does not replace an examination or guarantee postoperative appearance."
      }
    ],
    "relatedTools": [
      "cone-volume-calculator",
      "volume-calculator",
      "basic-calculator"
    ],
    "relatedGuides": [
      "lri-calculator-guide"
    ],
    "sources": [
      {
        "name": "FDA: Breast implant surgery",
        "url": "https://www.fda.gov/medical-devices/breast-implants/breast-implant-surgery",
        "note": "Primary patient resource for the individual surgical discussion and decision process."
      },
      {
        "name": "FDA: Things to consider before getting breast implants",
        "url": "https://www.fda.gov/medical-devices/breast-implants/things-consider-getting-breast-implants",
        "note": "Primary patient information for reviewing the broader decision, not a size-selection formula."
      }
    ],
    "limitation": "Patient education only, without personalized cc recommendations, cup conversions, clinical examination, image analysis or device-selection advice. Related measurement tools are not implant-selection models.",
    "icon": "\ud83d\udcd8",
    "publishedAt": "2026-10-03",
    "reviewedAt": "2026-10-03",
    "readingMinutes": 10,
    "tables": [
      {
        "caption": "What a size-related input can establish",
        "headers": [
          "Information",
          "Useful meaning",
          "What it cannot establish alone"
        ],
        "rows": [
          [
            "Desired garment fit",
            "A preference to discuss",
            "A universal implant volume"
          ],
          [
            "Device volume in cc or mL",
            "Specified volume unit",
            "Full shape or individual suitability"
          ],
          [
            "Manufacturer dimensions",
            "Product-specific specifications",
            "Personalized selection without assessment"
          ],
          [
            "Sizing preview",
            "Communication aid with stated limits",
            "Guaranteed healed appearance"
          ]
        ]
      }
    ],
    "example": {
      "heading": "Worked example: preparing a reviewable consultation record",
      "paragraphs": [
        "A patient brings a description of the desired appearance and asks about two proposed product options. Instead of choosing a cc amount from a cup-letter conversion, the discussion records product identity, dimensions, the examination basis and the clinician\u2019s explanation of alternatives. The record also identifies which expectations a preview can illustrate and which remain uncertain. This example describes an information workflow; it assigns no device, volume or outcome to an individual."
      ]
    }
  }
];
