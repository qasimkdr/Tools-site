import type {Guide} from "./guides";
export const roadmap146Guides: Guide[] = [
  {
    "category": "Health",
    "icon": "👁️",
    "publishedAt": "2026-10-02",
    "reviewedAt": "2026-10-02",
    "readingMinutes": 9,
    "relatedTools": [
      "ratio-calculator",
      "decimals-calculator",
      "scientific-notation-calculator"
    ],
    "slug": "eye-prescription-to-20-20-guide",
    "title": "Eye Prescription to 20/20: What Can Be Converted?",
    "description": "Understand why lens prescription power cannot predict 20/20 vision, and convert an already measured Snellen fraction into equivalent acuity notation.",
    "keywords": [
      "convert eye prescription to 20/20 scale calculator",
      "Snellen visual acuity converter",
      "prescription diopters and 20/20 vision"
    ],
    "calculatorSlug": "measured-visual-acuity-converter",
    "calculatorTitle": "Convert measured visual acuity notation",
    "calculatorExplanation": "Enter an acuity result already measured on an eye chart, such as 20/40 or 6/12. Enter numerator and denominator in the same distance unit. This converts notation only and never accepts prescription diopters as a substitute for an eye-chart measurement.",
    "quickAnswer": "You cannot reliably turn a glasses prescription into a 20/20 eye-chart score. Diopters describe lens power; visual acuity is measured performance under test conditions. The converter below changes an already measured Snellen fraction into equivalent 20-foot, 6-metre, decimal and logMAR notation. It does not calculate vision from SPH, CYL, AXIS or ADD.",
    "takeaways": [
      "Prescription power and measured visual acuity are different kinds of information.",
      "A measured 20/40 and 6/12 represent the same fraction, 0.5, under the notation conversion.",
      "Corrected and uncorrected results must remain labelled separately.",
      "Editorial review is not an examination or an ophthalmologist’s clinical review."
    ],
    "relatedGuides": [
      "lri-calculator-guide"
    ],
    "sections": [
      {
        "heading": "Why the prescription and the eye-chart result differ",
        "paragraphs": [
          "A prescription tells a dispenser about a corrective lens. An eye-chart result records how clearly a person identified chart detail during a particular assessment. A lens power is not a denominator on the chart, and the two numbers cannot be substituted for each other. A person may have a substantial prescription and good corrected acuity, while another person with a different prescription may have a different result. An online table that maps every diopter value to one guaranteed Snellen score conceals information that it has not measured.",
          "Use the prescription for its intended purpose and use a recorded chart result for acuity notation. If the report does not contain an acuity measurement, the converter cannot create one. A calculation that multiplies lens power by a fixed factor would produce a number but would not establish what you can actually see. This page therefore answers the prescription-to-20/20 calculator query by stating the boundary directly, then provides the narrower conversion that can be checked mathematically."
        ]
      },
      {
        "heading": "Keep the labels beside the number",
        "paragraphs": [
          "Record which eye was tested, whether the result used glasses or contact lenses, whether it was distance or near testing, and the notation used by the examiner. A right-eye value, a left-eye value and a both-eyes value are separate observations. Do not average their denominators and call the result a binocular score. Likewise, corrected and uncorrected acuity should not be combined into one number. The converter does not know those conditions, so it cannot restore labels lost while copying data.",
          "If a report uses extra symbols, qualifiers, a letter score or a test that is not expressed as a Snellen fraction, retain the original record rather than forcing it into these two fields. Ask the examining professional to explain an unfamiliar notation. A decimal-equivalent output is a convenient way to display one measured fraction; it is not proof that a different test would produce exactly the same observation."
        ]
      },
      {
        "heading": "The mathematical conversion used here",
        "paragraphs": [
          "For a supplied Snellen numerator N and denominator D in the same distance unit, decimal acuity is N divided by D. The equivalent 20-foot denominator is 20 divided by that decimal ratio; the equivalent 6-metre denominator is 6 divided by it. The logMAR equivalent is the negative base-ten logarithm of the same positive ratio. These operations only rewrite the measurement. They do not measure the eye, simulate optical correction or choose a prescription.",
          "For example, 20 divided by 40 is 0.5. Dividing 6 by 0.5 gives 12, so the equivalent metric notation is 6/12. The logMAR expression gives approximately 0.3010. Conversely, a measured 6/12 gives the same decimal fraction and a 20/40 equivalent. Preserve the original chart notation and its test conditions alongside any converted form so someone reviewing a record can see what was measured and what was merely calculated."
        ]
      },
      {
        "heading": "How to use the measured-acuity converter",
        "paragraphs": [
          "Enter only an already measured Snellen fraction. For 20/40, put 20 in the test-distance numerator field and 40 in the denominator field. For 6/12, enter 6 and 12. The two entries must be positive and use the same distance unit. Do not enter a negative sphere power, cylinder power, an axis angle or reading addition. Those fields describe a lens prescription and are not accepted inputs for this mathematical purpose.",
          "Click Calculate result to generate the equivalent notation. Editing either entry leaves the last submitted result visible until you click again. Check that the displayed original ratio matches the recorded measurement before copying the outputs. Fractions better than the reference, such as 20/10, are mathematically allowed; the converter does not cap every measurement at 20/20 or translate a result into an eye-health classification."
        ]
      },
      {
        "heading": "What this page cannot tell you",
        "paragraphs": [
          "The notation conversion cannot identify the cause of reduced acuity, judge whether a prescription is current, determine driving or employment eligibility, or assess a change in vision. Rules requiring a vision assessment can depend on the test procedure and jurisdiction, so a converted fraction should not be treated as an official certificate. This page also does not provide a home eye chart, because a calibrated assessment requires more than an arbitrary screen image and viewing distance.",
          "If a measurement seems inconsistent with your prescription, seek clarification from the eye-care professional who performed the examination. Do not infer that the prescription is wrong merely because a converted notation differs from a value found online. Similarly, a favorable chart score cannot establish that every aspect of an eye is healthy. Interpretation requires the full examination and the purpose for which the result is being used."
        ]
      },
      {
        "heading": "Share a clear record instead of an inferred diagnosis",
        "paragraphs": [
          "A useful note separates measured data from arithmetic. Write the original acuity fraction, the eye and correction conditions, the examination date, and the equivalent notation calculated here. Label the latter as a conversion. Keep lens prescription entries in a separate part of the record with their signs and units. This makes it easier for a professional to understand the information without mistaking a web-generated denominator for an observed test result.",
          "Inputs are processed by the shared calculator in your browser. They are not submitted to an eye-care service or used to create an examination report. Avoid entering names or unnecessary personal records into numeric fields. If you are using someone else’s documented result, preserve the context and share it only appropriately. General arithmetic tools linked below can explain ratios and decimal notation, but none converts lens power into a clinical outcome."
        ]
      }
    ],
    "tables": [
      {
        "caption": "Equivalent notation for measured fractions",
        "headers": [
          "Measured fraction",
          "Decimal ratio",
          "Equivalent 20-foot form",
          "Approximate logMAR"
        ],
        "rows": [
          [
            "20/20",
            "1",
            "20/20",
            "0"
          ],
          [
            "20/40",
            "0.5",
            "20/40",
            "0.3010"
          ],
          [
            "6/12",
            "0.5",
            "20/40",
            "0.3010"
          ],
          [
            "20/10",
            "2",
            "20/10",
            "−0.3010"
          ]
        ],
        "note": "These are mathematical equivalents of supplied measurements, not conversions from prescription diopters or predictions of vision."
      }
    ],
    "example": {
      "heading": "Worked example: rewriting a measured 6/12",
      "paragraphs": [
        "Suppose the examination record explicitly states measured distance acuity 6/12. Enter 6 and 12. The ratio is 0.5, the 20-foot equivalent is 20/40 and the logMAR equivalent is about 0.3010. Keep the original 6/12 record and all examination labels. Nothing in this calculation specifies lens power or determines a treatment."
      ]
    },
    "faqs": [
      {
        "question": "Can you convert −2.00 diopters into 20/20 notation?",
        "answer": "No reliable patient-specific Snellen score follows from that lens power alone. This page requires an actual measured acuity fraction. A negative prescription value is not a valid numerator or denominator and is not translated using a guessed lookup table."
      },
      {
        "question": "Does 20/20 mean no glasses are needed?",
        "answer": "A measured result can be recorded with or without correction. Keep that condition with the result. A notation converter cannot determine whether glasses are required, whether a prescription should change or whether an eye examination is otherwise normal."
      },
      {
        "question": "Is 6/12 equivalent to 20/40?",
        "answer": "They have the same numerical ratio of 0.5, so this converter produces equivalent notation. That mathematical equivalence does not remove differences in examination conditions or guarantee a new measurement on another chart will be identical."
      },
      {
        "question": "Can I average the results for my two eyes?",
        "answer": "The calculator does not combine eyes. A binocular measurement is a separate observation and should not be invented by averaging the denominators of two monocular results. Keep each recorded result and its original labels."
      },
      {
        "question": "What if my report is not a Snellen fraction?",
        "answer": "Do not guess a fraction from another test or an unfamiliar abbreviation. Keep the report and ask the examining professional to explain its notation. This converter has a deliberately narrow input format and does not implement every acuity scoring system."
      }
    ],
    "sources": [
      {
        "name": "National Eye Institute: refractive errors",
        "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors",
        "note": "Primary patient information explaining refractive error and professional assessment."
      },
      {
        "name": "American Academy of Ophthalmology: eyeglasses prescriptions",
        "url": "https://www.aao.org/eye-health/tips-prevention/how-to-read-eyeglasses-prescription",
        "note": "Lens prescription fields and diopter units; not a universal diopter-to-acuity table."
      }
    ],
    "limitation": "Educational notation and record-interpretation guide. Mohammad Qasim provides editorial review, not a clinical eye examination or specialist medical review. It does not diagnose, prescribe lenses, certify eligibility or predict visual acuity from a prescription. Use professional care for personal vision concerns."
  },
  {
    "category": "Health",
    "icon": "👁️",
    "publishedAt": "2026-10-02",
    "reviewedAt": "2026-10-02",
    "readingMinutes": 9,
    "relatedTools": [
      "ratio-calculator",
      "decimals-calculator",
      "scientific-notation-calculator"
    ],
    "slug": "lri-calculator-guide",
    "title": "LRI Calculator: Clinical Resources and Planning Limits",
    "description": "Find the clinical LRI calculator resource and understand its inputs, nomogram boundaries and professional-use requirements without invented surgical outputs.",
    "keywords": [
      "lri calculator",
      "limbal relaxing incision calculator",
      "LRI clinical planning resources"
    ],
    "quickAnswer": "An LRI calculator is a clinical planning aid for limbal relaxing incisions, not a general prescription converter. Use the provider’s current licensed tool and a qualified ophthalmic assessment. SolvePilot does not reproduce a proprietary nomogram or output incision length, depth or placement. This guide explains resource selection, record checks and questions to discuss with a trained eye surgeon.",
    "takeaways": [
      "The linked provider tool has its own terms, documentation and clinical scope.",
      "A result is not a substitute for examination, training or professional judgment.",
      "Prescription cylinder and corneal measurements must not be treated as interchangeable labels.",
      "This page offers no surgical parameters or instructions."
    ],
    "relatedGuides": [
      "eye-prescription-to-20-20-guide"
    ],
    "sections": [
      {
        "heading": "What the LRI calculator search refers to",
        "paragraphs": [
          "In the eye-surgery context, LRI stands for limbal relaxing incision. The search usually seeks a specialized planning resource rather than ordinary numerical arithmetic. A clinical calculator can apply a documented nomogram to appropriate inputs within its intended scope. Finding a page with the right abbreviation is not enough: the provider, method, version, permitted use and input definitions need to be identified. The J&J Vision resource linked in the sources presents professional-use terms and states that its calculator assists planning rather than replacing medical training or judgment.",
          "SolvePilot is an independent educational website and is not that provider. We do not present a cloned interface, claim to validate a surgical plan or generate incision parameters. The useful outcome here is a clearer route to the clinical resource and a checklist for understanding what information is being requested. If LRI means something unrelated in your document, use the full term and context before applying any information from this ophthalmic guide."
        ]
      },
      {
        "heading": "Start with the official resource and its terms",
        "paragraphs": [
          "Use the provider link in the sources and inspect the current page directly. Review its intended users, instructions, disclaimers and terms before entering information. A copied screenshot or an old tutorial may not match the current tool. Do not assume that a site using a familiar product name is affiliated with the manufacturer or that a result has been independently reviewed. The provider’s actual documentation is the appropriate reference for the model it publishes.",
          "A calculation method can be subject to licensing, professional access conditions and version changes. This guide does not accept those terms on your behalf or submit data to the external tool. If the resource is unavailable or unclear, contact the provider or the clinical team rather than substituting an unverified generic formula. Record the access date and the method version when that information is available so later review can identify the basis of the clinical output."
        ]
      },
      {
        "heading": "Understand inputs before copying numbers",
        "paragraphs": [
          "A clinical form may distinguish corneal measurements, refractive information, axes and procedure-specific assumptions. Matching a number by appearance is not sufficient. Keep its measurement type, unit, sign convention, source and date attached to it. A cylinder value from a glasses prescription should not be relabelled as a corneal measurement simply because both may be expressed in diopters. If a field definition is unclear, ask the qualified clinical user or provider before proceeding.",
          "There can also be right-eye and left-eye records, repeated measurements and changes over time. A sensible record check verifies that the selected eye and source report agree, that no decimal or sign was lost, and that the units are those requested by the specific method. This is a data-quality check, not a decision about which reading should guide surgery. Selecting and interpreting clinical inputs remains the responsibility of the treating professional."
        ]
      },
      {
        "heading": "Why a nomogram is not a universal arithmetic rule",
        "paragraphs": [
          "A nomogram represents a particular model and its assumptions. Two clinical tools can produce different outputs if their methods, intended techniques or inputs differ. Averaging those outputs does not create a validated third method. Likewise, reproducing a few example values from a published screenshot does not establish a general algorithm. A resource must be appropriate to the patient assessment and the procedure under consideration, and the clinical team must understand its boundaries.",
          "This page therefore avoids a deceptively simple form that would output an incision from a cylinder number alone. It also avoids converting one provider’s result into another provider’s purported equivalent. Such operations would imply validation that we do not have. A professional planning aid should be used under its documented conditions and with independent clinical judgment, not chosen because its numbers appear more convenient or because a general SEO page has a calculator label."
        ]
      },
      {
        "heading": "Questions for the clinical discussion",
        "paragraphs": [
          "Ask which tool and method are being used, why they fit the planned procedure, which measurements support the inputs and whether any findings make the method inappropriate. Ask how the team checks the record and documents the source of the planning result. The goal is to understand the decision process, not to substitute an online answer for the examination. A patient can reasonably ask for an explanation in plain language without attempting to calculate or perform a procedure independently.",
          "Questions about expected benefits, limitations, alternatives, follow-up and personal risk belong with the surgeon. Do not interpret a calculator display as a promise of a particular visual result or freedom from glasses. A planning number is only one part of professional decision-making. Keep the care team’s explanation with the original clinical record, and seek clarification when a label or assumption remains unclear rather than treating this guide as consent documentation."
        ]
      },
      {
        "heading": "A practical record-quality checklist",
        "paragraphs": [
          "Before a clinical team reviews a report, organize the source documents by eye and date, preserve original units and signs, and distinguish observed measurements from calculated values. Do not overwrite an original result with a rounded transcription. If you notice a disagreement between two documents, flag it rather than silently deciding which one is correct. The checklist helps make review possible; it does not resolve measurement uncertainty or select surgical parameters.",
          "General ratio and decimal tools linked below can explain number notation, but they are not clinical LRI tools and cannot validate an incision plan. Keep arithmetic explanation separate from treatment selection. When sharing records, use the clinical provider’s appropriate process and avoid uploading unnecessary identifying information to a general website. SolvePilot receives no clinical inputs on this guide page and performs no remote assessment. Following an external source link brings you to a service governed by its own privacy terms."
        ]
      },
      {
        "heading": "What a useful resource comparison looks like",
        "paragraphs": [
          "Compare resources by documented provider, method name, version, intended use, input definitions, available support and terms. Do not rank them by whether they output a desired answer. A comparison can identify missing documentation without deciding which treatment is right for someone. If a resource makes broad claims but does not explain its method or boundaries, ask for supporting documentation before treating it as a dependable clinical aid.",
          "Retain the distinction between an educational article, a licensed professional tool and the treating team’s final plan. An educational article can explain terminology; a planning tool can apply its model; the clinician evaluates whether that model is appropriate in the actual case. Combining those roles into one anonymous web calculator would hide accountability. This guide intentionally remains at the resource and record-interpretation level, with no instructions for making or altering incisions."
        ]
      }
    ],
    "tables": [
      {
        "caption": "Resource checks before clinical use",
        "headers": [
          "Check",
          "Useful evidence",
          "What it cannot prove"
        ],
        "rows": [
          [
            "Provider and method",
            "Current official resource and documentation",
            "That every patient is suitable"
          ],
          [
            "Input definitions",
            "Units, measurement type, eye and source date",
            "Which clinical reading to select"
          ],
          [
            "Version and terms",
            "Recorded model/version and permitted use",
            "A guaranteed treatment outcome"
          ],
          [
            "Clinical review",
            "Qualified assessment and documented judgment",
            "That web arithmetic replaces an examination"
          ]
        ],
        "note": "This checklist supports understanding and documentation; it does not approve a procedure."
      }
    ],
    "example": {
      "heading": "Example: comparing two record packets",
      "paragraphs": [
        "Packet A contains an unlabeled cylinder number and an old screenshot. Packet B preserves the original eye-specific measurements, their dates and units, and identifies the tool and method used by the clinical team. Packet B is easier to review because the basis of each entry can be traced. This comparison says nothing about which procedure should be performed and deliberately produces no incision recommendation."
      ]
    },
    "faqs": [
      {
        "question": "Does SolvePilot provide an LRI surgical calculator?",
        "answer": "No. This is an educational resource guide to the clinical search intent. We link the provider resource and explain its boundaries, but do not copy a proprietary nomogram or output incision length, depth, axis or surgical instructions."
      },
      {
        "question": "Can an LRI calculator replace an ophthalmic examination?",
        "answer": "No. A planning aid must be interpreted within the appropriate clinical assessment and by a qualified professional. The linked provider itself distinguishes assistance from medical training and independent judgment. An online result alone cannot establish suitability or an outcome."
      },
      {
        "question": "Can I use the cylinder number from my glasses prescription?",
        "answer": "Do not substitute it into a differently defined clinical field without qualified guidance. Keep measurement type, unit, sign and source with every value. A familiar unit does not make distinct clinical measurements interchangeable or identify the input a specific nomogram requires."
      },
      {
        "question": "Why not average results from two nomograms?",
        "answer": "They can use different assumptions and intended methods. An arithmetic average is not automatically a validated clinical model. Discuss differences with the qualified clinical user rather than merging outputs until a preferred number appears."
      },
      {
        "question": "Is this page reviewed by an ophthalmologist?",
        "answer": "No. Mohammad Qasim provides editorial review of the cited resources and the page’s stated limits. This is not specialist clinical review, patient assessment or treatment advice. Personal decisions belong with an appropriately qualified eye-care professional."
      }
    ],
    "sources": [
      {
        "name": "J&J Vision LRI Calculator resource",
        "url": "https://www.lricalculator.com/",
        "note": "Provider resource and professional-use terms; the model is not reproduced here."
      },
      {
        "name": "ASCRS tools and clinical resources",
        "url": "https://www.ascrs.org/tools",
        "note": "Professional society resource directory; check the current scope of any selected tool."
      },
      {
        "name": "National Eye Institute: refractive errors",
        "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors",
        "note": "Patient information on refractive error and professional assessment."
      }
    ],
    "limitation": "Educational clinical-resource guide only. Editorial review is not ophthalmic specialist review or patient care. No nomogram is implemented, no surgical output is provided, and no procedure is recommended. Consult a qualified ophthalmic professional and the clinical tool’s current documentation for personal or professional planning."
  }
];
