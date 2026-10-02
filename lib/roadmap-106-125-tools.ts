import type {Tool} from "./tools";
export const roadmap106Tools: Tool[] = [
  {
    "slug": "sourdough-calculator",
    "title": "Sourdough Calculator",
    "category": "Everyday",
    "description": "Scale sourdough dough weight, hydration, prefermented flour and salt while accounting for the flour and water already in your starter.",
    "formula": "Total flour = dough weight ÷ (1 + hydration fraction + salt fraction). Starter flour = total flour × prefermented flour fraction. Subtract starter flour and starter water from the final totals.",
    "example": "For 1,000 g dough, 70% hydration, 20% prefermented flour, 2% salt and a 100%-hydration starter: add 465.12 g flour, 290.70 g water, 232.56 g starter and 11.63 g salt.",
    "keywords": [
      "sourdough calculator"
    ],
    "shortTitle": "Sourdough",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Scale sourdough dough weight, hydration, prefermented flour and salt while accounting for the flour and water already in your starter. Every percentage on this page refers to total flour in the finished dough. That includes the flour hidden inside ripe starter. Total dough weight includes flour, water and salt, so dividing final weight by one plus the hydration and salt fractions first finds the flour budget. This distinction matters when scaling a loaf: simply taking 70% of the target dough weight would produce far too much water. All ingredient outputs are grams.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Prefermented flour versus starter weight",
        "text": "Prefermented flour is the share of total flour that arrives through the starter. It is not the weight of starter divided by new flour. A 100%-hydration starter contains equal weights of flour and water. At 20% prefermented flour, starter mass is therefore 40% of total flour. If a recipe says 20% starter by mass, convert its convention before entering it. Otherwise you will unintentionally change inoculation and fermentation behavior."
      },
      {
        "title": "Stiff and liquid starters",
        "text": "Starter hydration describes starter water divided by starter flour. A stiff 50%-hydration starter contributes less water than a liquid 100%-hydration starter for the same prefermented flour amount. The calculator subtracts the actual contribution from the water to add. If that contribution exceeds the requested final water budget, it reports an invalid combination. It does not suggest draining starter or quietly replacing a negative water quantity with zero."
      },
      {
        "title": "Scaling a batch and dividing loaves",
        "text": "Enter the combined dough weight for the entire batch. For two 750 g loaves, use 1,500 g, then divide the mixed dough after allowing for your handling losses. Scaling changes ingredient quantities but does not automatically preserve proofing time. Dough temperature, starter maturity, flour strength and kitchen conditions still matter. Optional fats, seeds and other additions are outside this four-ingredient mass balance; account for them separately when targeting exact finished dough weight."
      }
    ],
    "limitations": "Four-ingredient mass balance only. No fermentation schedule, food-safety judgment or baked-weight prediction. Added inclusions and handling losses require separate accounting.",
    "faqs": [
      {
        "question": "Does hydration include starter water?",
        "answer": "Yes. Both the water and flour in starter are included in final hydration. The displayed water to add is the final water budget minus starter water, so it is often smaller than a simple percentage of new flour."
      },
      {
        "question": "Is 20% starter the same as 20% prefermented flour?",
        "answer": "No. Prefermented flour measures flour inside the starter. With 100%-hydration starter, 20% prefermented flour produces starter mass equal to 40% of total flour. Check which convention your recipe uses."
      },
      {
        "question": "Can I use a stiff starter?",
        "answer": "Yes. Enter its actual hydration, such as 50%, and the calculator adjusts the starter mass and added water accordingly. Use weighed feed amounts when calculating hydration; volume measurements are not sufficiently consistent for this mass balance."
      },
      {
        "question": "Why is the water combination rejected?",
        "answer": "Your starter already contains more water than the finished hydration permits. Reduce prefermented flour, use a stiffer starter or increase final hydration according to the recipe you intend to bake. Negative added water is not a valid ingredient quantity."
      },
      {
        "question": "Does this determine fermentation time?",
        "answer": "No. Inoculation influences fermentation, but temperature, flour and starter activity also matter. These outputs are an ingredient scale. Observe the dough and follow a reliable baking process rather than treating an ingredient calculation as a proofing schedule."
      }
    ]
  },
  {
    "slug": "audiobook-speed-calculator",
    "title": "Audiobook Speed Calculator",
    "category": "Everyday",
    "description": "Find audiobook listening time and time saved at your chosen playback speed, including content you have already completed.",
    "formula": "Remaining content minutes = total hours × 60 + minutes − completed content minutes. Listening minutes = remaining content minutes ÷ playback multiplier.",
    "example": "A 10-hour audiobook at 1.5× takes 6 hours 40 minutes from the beginning, saving 3 hours 20 minutes compared with normal speed.",
    "keywords": [
      "audiobook speed calculator"
    ],
    "shortTitle": "Audiobook Speed",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Find audiobook listening time and time saved at your chosen playback speed, including content you have already completed. A book’s advertised duration normally represents its content at normal playback speed. A playback multiplier changes the wall-clock time needed to hear that content. At 2×, each minute of listening covers two minutes of content. At 0.75×, the book takes longer. The calculator separates total book duration from remaining duration so you can plan the unfinished section without repeating chapters you have already heard.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Entering progress correctly",
        "text": "Already listened means completed content minutes measured on the normal-speed timeline. If an app shows that you have reached 2:00:00 in the book, enter 120 minutes even if you listened at 2× and spent only one real hour. Entering real listening time here would understate progress. When an app reports a percentage, multiply the full content duration by that percentage first, then use the resulting content minutes."
      },
      {
        "title": "Planning sessions",
        "text": "Use the remaining listening result when deciding whether a commute, exercise session or evening block is long enough. Divide the calculated minutes by your session length to estimate how many sessions you need, rounding upward if the last session is partial. The calculation excludes pauses, skipped sections, introductions not included in the stated runtime and any changes in speed. Include a practical buffer when you need a fixed finish time."
      },
      {
        "title": "Interpreting time saved",
        "text": "Time saved compares remaining playback against the same remaining content at 1×. Slower speeds do not create a saving; the display shows zero saved rather than claiming that extra listening time is a benefit. Higher speed may reduce comprehension for unfamiliar or dense material. Choose a multiplier you can comfortably follow, and calculate another scenario if you plan to slow down for difficult sections or speed up for familiar passages."
      }
    ],
    "limitations": "Assumes constant playback speed and excludes pauses. Completed progress must use normal-speed content minutes.",
    "faqs": [
      {
        "question": "How long is a 10-hour book at 2×?",
        "answer": "Five hours without pauses, provided you start at the beginning. The equation divides normal-speed duration by two. If some content is already complete, subtract that content first and then apply the multiplier to what remains."
      },
      {
        "question": "Should I enter elapsed time shown by my player?",
        "answer": "Enter the position on the normal-speed content timeline, not actual time you spent listening. Some players show remaining listening time adjusted for speed; that number should not be subtracted from full content duration as if both used the same basis."
      },
      {
        "question": "Can I calculate at 1.25× or 1.75×?",
        "answer": "Yes. Enter any positive multiplier. Decimal values are accepted. The reported hours, minutes and seconds are rounded for readability, so a displayed second can differ slightly from a player that truncates rather than rounds its remaining-time estimate."
      },
      {
        "question": "What if I change speed halfway through?",
        "answer": "Calculate the unfinished content again at the new speed. A single multiplier cannot represent two different playback speeds unless you separately calculate each section and add the listening durations. Pauses must also be added separately."
      },
      {
        "question": "Is an audiobook’s duration always exact?",
        "answer": "The arithmetic follows the duration you enter. Editions, introductory tracks, credits and app indexing can differ. Use the runtime of the edition in your own player and compare results with its remaining-time display on the same speed setting."
      }
    ]
  },
  {
    "slug": "surface-area-calculator",
    "title": "Area and Surface Area Calculator",
    "category": "Education",
    "description": "Calculate plane area or total surface area for common shapes, with separate dimension labels for rectangles, circles, cubes and other solids.",
    "formula": "Rectangle A=lw; square A=s²; circle A=πr²; ellipse A=πab; triangle A=bh/2; trapezoid A=(a+b)h/2; box SA=2(lw+lh+wh); cube SA=6s²; sphere SA=4πr²; closed cylinder SA=2πr(r+h); closed cone SA=πr(r+√(r²+h²)).",
    "example": "A cube with edge 3 has total surface area 54 square units. A rectangle 3 by 4 has plane area 12 square units; these answer different questions.",
    "keywords": [
      "area and surface area calculator",
      "surface area calculator",
      "challenge find the surface area of the figure below",
      "total surface area",
      "how to calculate area",
      "formula for the area",
      "area of rectangle formula",
      "how to find area",
      "what is total surface area",
      "how to find the area of a shape",
      "what is surface area",
      "surface area of a cube",
      "area of a rectangle formula",
      "square inch calculator",
      "area calculating",
      "how do you find the total surface area",
      "surface area of cube",
      "circle area calculator",
      "how to get area",
      "find the area and",
      "how to find the surface area",
      "surface area of a rectangle",
      "how do you get the surface area of a cube",
      "how do you find out the surface area",
      "surface area to area",
      "surface area of a square",
      "how do i find surface area",
      "how to calculate surface area",
      "how to find area of a rectangle",
      "how to solve surface area",
      "calculate the area of rectangle",
      "surface area",
      "what is the formula for an area",
      "how to determine the area of a rectangle",
      "area of rectangle",
      "what is the surface area",
      "cube surface area",
      "formula of total surface area",
      "how to work out the surface area",
      "how to calculate surface area of a cube",
      "surface area formulas",
      "how to do area",
      "how to find surface area of a cube",
      "formula to find area of rectangle",
      "perimeter to area",
      "how do you calculate area",
      "formula for area of rectangle",
      "area of a cube",
      "how do you find the area",
      "area of a square",
      "find area",
      "how to find the surface area of a cube",
      "total area formula",
      "surface area equation",
      "how do you find area",
      "formula of total surface area of cube",
      "how to find the area of a figure",
      "how to find area of rectangle",
      "surface area calc",
      "area formula for rectangle",
      "equation for area",
      "how to measure area",
      "how to calculate are",
      "how do you find out the area",
      "how to get surface area",
      "area of an oval",
      "finding area",
      "surface area of rectangle",
      "area equation",
      "area and surface area",
      "formula for surface area of a cube",
      "surface area formula for cube",
      "find the area",
      "area formula rectangle",
      "what are the formulas for surface area",
      "surface area of a box",
      "area formula for",
      "how do you calculate the area of a rectangle",
      "surface area of a cube formula",
      "how do.you find the area",
      "what is the area of this figure",
      "surface area equations",
      "how to get the area of a rectangle",
      "formula for area of a rectangle",
      "area rectangle formula",
      "how to area",
      "how to figure out surface area",
      "cube surface area formula",
      "how do i find area",
      "how to find square area",
      "how to calculate the area of a rectangle",
      "what is the equation for area",
      "cylinder surface area calculation",
      "how to determine area",
      "square area",
      "area of a rectangle equation",
      "how to solve area",
      "surface area solver",
      "how to calculate area of a rectangle",
      "whats the surface area",
      "how to calculate area of a square",
      "land calculator"
    ],
    "shortTitle": "Area and Surface Area",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Calculate plane area or total surface area for common shapes, with separate dimension labels for rectangles, circles, cubes and other solids. Plane area measures a two-dimensional region, such as a rectangle drawn on paper or a circular floor. Total surface area adds the outer faces of a three-dimensional solid. Select the correct shape before typing dimensions because the required measurements change. A flat rectangle has area length times width. A rectangular box needs a height as well, and its total surface includes six faces. Both results use square units, but they describe different objects.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Radius, axes and perpendicular heights",
        "text": "Circle, cylinder, cone and sphere modes take radius, which is half the measured diameter. Ellipse mode takes two semi-axes, each half of the full width along its axis. Triangle and parallelogram modes need perpendicular height rather than a slanted edge. Trapezoid mode uses two parallel sides and the perpendicular separation between them. A side length can look like a height in a diagram while measuring a different quantity; inspect the right-angle marker before entry."
      },
      {
        "title": "Closed solids and exposed surfaces",
        "text": "Cylinder mode includes both circular bases, while cone mode includes its circular base. These are closed-solid totals. An open container, uncovered pipe or painted wall requires selecting only the relevant surfaces. For a cylinder with one open end, subtract one circular area from the closed total. A hollow tube has additional internal surfaces and does not use the closed-cylinder total as its exposed area. The volume calculator handles tube volume with separate inner and outer radii."
      },
      {
        "title": "Irregular figures and land area",
        "text": "Divide a composite flat figure into non-overlapping rectangles, triangles, trapezoids or circles, calculate each part, and add the areas. Subtract openings using the same units. A perimeter alone does not uniquely determine area unless enough shape information is supplied. This calculator cannot infer an unseen image or property boundary from a search phrase. Land surveying, curved boundaries and legal acreage require actual measurements and an appropriate boundary model."
      }
    ],
    "limitations": "Euclidean shapes only, with positive dimensions in one length unit. Cannot solve missing diagrams, infer area from perimeter alone or produce surveyed land boundaries.",
    "faqs": [
      {
        "question": "What is total surface area?",
        "answer": "It is the sum of all outer faces or curved outer surfaces of the stated solid. The word total includes the bases for closed cylinder and cone modes here. If a question asks for lateral area, exclude bases according to the geometry of the object."
      },
      {
        "question": "How do I find area of a rectangle?",
        "answer": "Multiply its length by its width after converting both measurements to the same unit. A 12 ft by 10 ft rectangle has 120 ft² of area. Do not multiply feet by inches without converting one measurement first."
      },
      {
        "question": "Does a square have volume?",
        "answer": "A square is a flat shape and has area. A cube is a solid and has volume. If a worksheet loosely says square volume, identify whether it actually means a cube or a rectangular prism before choosing a formula."
      },
      {
        "question": "Can I find surface area from a figure below?",
        "answer": "You need the figure and its measurements. This page does not receive a missing diagram, so it cannot invent dimensions. Identify each face, select the appropriate shape and use the lengths given by the actual question."
      },
      {
        "question": "Why does converting feet to inches change area by 144?",
        "answer": "Each length gains a factor of 12 and area multiplies two lengths, so square feet convert to square inches by 12², or 144. Volume uses three dimensions and therefore has a different conversion factor."
      }
    ]
  },
  {
    "slug": "body-surface-area-calculator",
    "title": "Body Surface Area Calculator",
    "category": "Everyday",
    "description": "Estimate body surface area in square metres using the Mosteller formula from height in centimetres and body weight in kilograms.",
    "formula": "BSA in m² = √(height in cm × weight in kg ÷ 3,600).",
    "example": "At 170 cm and 70 kg, Mosteller BSA is approximately 1.818 m². The output is area, not a medication dose.",
    "keywords": [
      "body surface area calculator",
      "bsa calculator",
      "body area surface calculator",
      "surface area body calculator",
      "how to calculate bsa",
      "calculate bsa",
      "body surface area formula",
      "surface area of body formula",
      "calculation for body surface area",
      "body surface area",
      "surface area of the body",
      "how to calculate body surface area"
    ],
    "shortTitle": "Body Surface Area",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Estimate body surface area in square metres using the Mosteller formula from height in centimetres and body weight in kilograms. Body surface area, abbreviated BSA, is an estimated total skin surface expressed in square metres. This page uses the Mosteller equation only. It takes measured height and weight, multiplies them, divides by 3,600 and takes the square root. The result is a mathematical estimate rather than a direct surface measurement. Other published equations can produce different values, so identify the formula whenever comparing this result with a clinical record.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Preparing height and weight",
        "text": "Height must be centimetres and weight must be kilograms. Convert inches by multiplying by 2.54, and convert pounds by multiplying by 0.45359237. A height written as 5 feet 7 inches must first become 67 inches; entering 5.7 as if it were centimetres would be a serious unit error. Use current measurements from the same visit when possible. Clothing, scale error and an estimated rather than measured height can affect the output."
      },
      {
        "title": "BSA and BMI answer different questions",
        "text": "BSA estimates an area. BMI divides weight in kilograms by height in metres squared and is reported in kg/m². Although both calculations use height and weight, their equations and meanings differ. A number near 1.8 on this page is square metres of estimated body surface, not a BMI and not a body-fat percentage. It does not establish whether someone is healthy or whether any treatment is appropriate."
      },
      {
        "title": "Keeping area separate from treatment",
        "text": "A medical protocol may use BSA alongside drug-specific rules and other clinical information. This page does not supply a dose, choose a protocol or apply renal, hepatic, age or maximum-dose adjustments. Multiplying a BSA estimate by a number from an unrelated prescription is not a safe substitute for medication review. A prescriber or pharmacist must verify the intended equation and dosing protocol. Keep the displayed units attached to the result when sharing it."
      }
    ],
    "limitations": "Mosteller estimate only, without validation for individual clinical use. Does not diagnose, assess health or calculate medication doses.",
    "faqs": [
      {
        "question": "How do I calculate BSA?",
        "answer": "Enter measured centimetres and kilograms and click Calculate. Reproduce the equation by multiplying height and weight, dividing by 3,600 and taking the square root. The result is in square metres, which should stay attached to any saved value."
      },
      {
        "question": "Which body surface area formula is used?",
        "answer": "Only Mosteller is implemented. The formula is stated on the page so comparison with a chart using another method is transparent. The calculator does not silently switch formulas according to age or select whichever value happens to look more typical."
      },
      {
        "question": "Is BSA the same as body-fat percentage?",
        "answer": "No. BSA uses height and weight to estimate a geometric surface quantity. Body-fat methods use different measurements and equations. A BSA result cannot tell you how much fat a person has or distinguish muscle mass from fat mass."
      },
      {
        "question": "Can this calculate a medicine dose?",
        "answer": "No. The output is area only. A medication decision requires the exact protocol, clinical measurements, contraindications and professional verification. This calculator deliberately has no drug selection, dose recommendation or conversion from area into treatment instructions."
      },
      {
        "question": "Why might my hospital report differ?",
        "answer": "The clinical record may use another equation, older height and weight, different rounding or protocol-specific treatment of the value. Ask which formula was used and compare the same measurements. Do not assume the higher or lower number is automatically correct."
      }
    ]
  },
  {
    "slug": "roof-area-calculator",
    "title": "Roof Area Calculator",
    "category": "Home",
    "description": "Estimate roof surface area from horizontal plan dimensions and roof pitch, then add an explicit waste allowance for material coverage.",
    "formula": "Uniform-pitch roof area = horizontal plan length × width × √(1 + (rise/12)²). One roofing square is 100 ft².",
    "example": "A 40 by 30 ft roof footprint at 6:12 pitch has approximately 1,341.64 ft² of sloped surface; 10% waste increases coverage to 1,475.80 ft².",
    "keywords": [
      "roof area calculator"
    ],
    "shortTitle": "Roof Area",
    "icon": "📐",
    "accent": "green",
    "updatedAt": "2026-10-02",
    "intro": "Estimate roof surface area from horizontal plan dimensions and roof pitch, then add an explicit waste allowance for material coverage. Horizontal plan area is the roof’s footprint as seen from above. Sloped surface is longer than the corresponding horizontal projection, so the slope multiplier increases the coverage estimate. Enter the projected roof dimensions including overhangs, not just the building’s wall-to-wall footprint. A gable roof with a uniform pitch can use the complete projection: both halves together cover the full plan area, so do not multiply the complete footprint by two again.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Pitch entered as rise per twelve",
        "text": "The pitch field is rise for twelve units of horizontal run. For a 6:12 roof, enter 6; do not enter the angle in degrees or the decimal ratio 0.5. The multiplier follows a right triangle whose horizontal leg is one and vertical leg is pitch divided by twelve. Roof angle and pitch describe related geometry, but their numeric inputs are different. A zero pitch produces a multiplier of one, corresponding to a flat geometric surface."
      },
      {
        "title": "Multiple slopes and complex roofs",
        "text": "The whole-footprint method assumes one pitch. When sections have different pitches, measure each section’s horizontal projection, calculate it independently and add the sloped areas. Roof valleys, dormers, hips and intersecting planes make takeoffs more complex. Avoid counting overlaps twice. A contractor drawing or measured takeoff is more reliable than treating every house as a simple rectangle. This tool estimates area and cannot reconstruct a roof from a street address or photograph."
      },
      {
        "title": "Waste and purchasing units",
        "text": "Waste is an explicit percentage added after geometric area. It represents a purchasing allowance, not extra physical roof surface. The required allowance depends on layout, cuts, product and detailing, so enter a value agreed with your supplier or installer. Roofing squares are coverage units of 100 square feet; they are not a guaranteed number of bundles. Use the selected product’s coverage per bundle or sheet and round the final order to whole packs separately."
      }
    ],
    "limitations": "Uniform-pitch geometry only. No structural, waterproofing, access-safety, code or product-layout assessment. Waste is user supplied.",
    "faqs": [
      {
        "question": "How do I calculate roof area from a footprint?",
        "answer": "Multiply plan length by plan width and then by the pitch multiplier. This works for a consistent pitch over a measured projection. Include the roof’s overhang projection in dimensions and calculate differently pitched sections individually rather than averaging pitches."
      },
      {
        "question": "Does a gable roof need twice the footprint?",
        "answer": "No when the entered footprint covers both slopes. Each half covers half the horizontal projection, and multiplying the complete footprint by the slope multiplier already includes both sides. Doubling that total would count the same roof twice."
      },
      {
        "question": "What is a roofing square?",
        "answer": "One roofing square is 100 square feet of surface coverage. The displayed roofing-square figure is before waste. Materials sold by bundles have product-specific coverage, so convert the waste-adjusted total using the packaging specification and round to complete packs."
      },
      {
        "question": "Can this size solar panels?",
        "answer": "No. Total roof area does not determine usable solar layout. Obstructions, shade, access setbacks, module dimensions and structural suitability all matter. Use a solar layout method and a qualified installer for that separate question."
      },
      {
        "question": "Can I measure the roof myself?",
        "answer": "Use existing plans or safe ground-based measurements where possible. This calculator is not advice to climb a roof. Steep surfaces and fragile roofing introduce fall hazards; professional measurement is appropriate when the required dimensions cannot be obtained safely."
      }
    ]
  },
  {
    "slug": "corrected-calcium-calculator",
    "title": "Corrected Calcium Calculator",
    "category": "Everyday",
    "description": "Calculate the legacy albumin-adjusted calcium estimate in paired US or SI units, with clear limitations against measured ionized calcium.",
    "formula": "US legacy estimate: calcium mg/dL + 0.8 × (4 − albumin g/dL). SI simplified Payne estimate: calcium mmol/L + 0.02 × (40 − albumin g/L). These rounded conventions are not exactly interchangeable.",
    "example": "Calcium 8.0 mg/dL and albumin 3.0 g/dL produce a legacy adjusted estimate of 8.8 mg/dL. This is not a measured ionized calcium result.",
    "keywords": [
      "corrected calcium calculator",
      "calcium adjusted calculator"
    ],
    "shortTitle": "Corrected Calcium",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Calculate the legacy albumin-adjusted calcium estimate in paired US or SI units, with clear limitations against measured ionized calcium. Albumin-adjusted calcium applies a historical arithmetic adjustment to measured total calcium. It changes the total according to albumin concentration and a reference albumin value. The page displays both the adjusted estimate and the unadjusted measurement so the original laboratory result remains visible. It does not measure free calcium, compensate for every binding effect or establish a diagnosis. The term corrected is conventional wording and should not be read as a guarantee of improved accuracy.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Paired units matter",
        "text": "Choose US units only when calcium is in mg/dL and albumin is in g/dL. Choose SI when calcium is in mmol/L and albumin is in g/L. An albumin result of 30 g/L equals 3 g/dL; entering 30 in a g/dL field creates a nonsensical adjustment. Read both report labels before calculating. The US and SI formulas shown here use common rounded coefficients, so independently converted outputs may differ slightly. Do not treat them as a laboratory conversion standard."
      },
      {
        "title": "Interpreting the adjustment",
        "text": "At the reference albumin, the adjustment is zero. Below the reference, the equation adds a quantity; above it, the equation subtracts one. Those directions follow the equation and do not prove that the estimate is clinically valid. If the computed number looks unexpected, first check paired units and that both tests came from the intended sample. An extreme or impossible result needs review of the laboratory measurements and the method, not a second online equation chosen for a preferred answer."
      },
      {
        "title": "Clinical limitations",
        "text": "A 2025 observational study found that commonly used albumin adjustments can classify calcium status incorrectly compared with measured ionized calcium, particularly with low albumin. The estimate should therefore be interpreted cautiously. Illness, kidney disease, acid-base status and laboratory methods can complicate interpretation. This page does not attach low, normal or high diagnoses to the calculated value and does not recommend calcium replacement. A clinician can decide whether an ionized measurement or another assessment is needed."
      }
    ],
    "limitations": "Legacy educational arithmetic, not a diagnostic test or treatment guide. Albumin-adjusted estimates may be less reliable than unadjusted total calcium or measured ionized calcium.",
    "faqs": [
      {
        "question": "Is corrected calcium the same as ionized calcium?",
        "answer": "No. Ionized calcium is measured separately and represents the unbound fraction under the laboratory’s testing conditions. This page adjusts total calcium using albumin. The arithmetic cannot turn a total-calcium measurement into an actual ionized-calcium laboratory result."
      },
      {
        "question": "What is calcium adjusted for albumin?",
        "answer": "It is a conventional estimate formed by adding an albumin-dependent term to total calcium. The exact equation and units must be specified. This page labels the output as a legacy estimate to make clear that correction does not necessarily improve clinical classification."
      },
      {
        "question": "Why does albumin at the reference give no change?",
        "answer": "The adjustment term contains reference albumin minus measured albumin. When those numbers match, the difference is zero and the adjusted estimate equals total calcium. This is a mathematical property of the equation, not evidence that other physiological variables are irrelevant."
      },
      {
        "question": "Can I use albumin from an older report?",
        "answer": "Use values from the intended laboratory assessment and ask your clinician when reports are from different times. Combining unrelated measurements can create an estimate that describes no real sample. The calculator cannot establish whether two values should be interpreted together."
      },
      {
        "question": "Can the result tell me to take supplements?",
        "answer": "No. It does not diagnose deficiency or provide treatment instructions. A decision about supplements or medication requires symptoms, history, laboratory interpretation and professional assessment. Do not change prescribed treatment based on this displayed legacy estimate."
      }
    ]
  },
  {
    "slug": "grade-curve-calculator",
    "title": "Grade Curve Calculator",
    "category": "Education",
    "description": "Apply an explicit grade curve to a list of scores by adding points, shifting the highest score or moving the class mean to a target.",
    "formula": "Curved score = clamp(original score + shift, 0, maximum). Shift is entered points, maximum − highest, or target mean − original mean.",
    "example": "Scores 70, 80 and 90 on a 100-point scale become 80, 90 and 100 when the highest score is shifted to the maximum.",
    "keywords": [
      "grade curve calculator"
    ],
    "shortTitle": "Grade Curve",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Apply an explicit grade curve to a list of scores by adding points, shifting the highest score or moving the class mean to a target. Add-points mode applies the same entered point adjustment to every score. Highest-to-maximum mode finds the largest original score and adds the gap between it and the maximum to everyone. Mean-shift mode subtracts the original class mean from your entered target mean and applies that difference. These are explicit additive methods; the calculator does not assume that a bell curve, standard-deviation policy or percentile grading scheme should be used for your course.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Preparing a class score list",
        "text": "Enter a list separated by commas, spaces or semicolons. Every score must use the same maximum and represent comparable assessment results. Set the maximum to the actual scale, such as 100 or 50. Entering percentages alongside points out of a different maximum distorts the class mean. Missing students and ungraded work should be handled according to the instructor’s policy before using the list. The tool cannot tell whether a blank should count as zero."
      },
      {
        "title": "Caps and target means",
        "text": "Each curved score is capped at the maximum and floored at zero. Consequently, the final class mean can differ from the requested mean when a shift pushes scores beyond either boundary. The output shows the actual curved mean after caps, making that difference visible. A negative shift is possible in mean-shift mode if the target is below the original mean. The entered parameter itself is non-negative, but subtracting the original mean can create a negative adjustment."
      },
      {
        "title": "Fair interpretation",
        "text": "A curve changes scores according to a chosen rule; it does not measure whether the assessment was fair or whether students met learning objectives. Review the distribution, scoring rubric and institutional requirements before selecting a rule. Applying a shared additive shift preserves differences until a cap is reached. Students above the cap then share the maximum, which compresses their distinction. Keep the original scores and the rule used so the adjustment can be reviewed."
      }
    ],
    "limitations": "Additive curves only, with scores capped at zero and the entered maximum. Institutional grade policies, letter grades and percentile curves are not inferred.",
    "faqs": [
      {
        "question": "Does this calculate a normal-distribution curve?",
        "answer": "No. It implements three additive score adjustments. A normal-distribution or percentile-based curve needs a specified grading policy and different operations. The visible method selection prevents a generic curve label from hiding which rule changes the scores."
      },
      {
        "question": "Why is the final mean not my target?",
        "answer": "Scores that would exceed the maximum are capped, and scores below zero are floored. Those boundaries alter the average after the shift. The calculator displays the actual adjusted mean so you can assess the impact instead of claiming every target can be achieved."
      },
      {
        "question": "What does highest score to maximum mean?",
        "answer": "If the best score is 90 and the maximum is 100, ten points are added to every score. If the best score is already 100, the shift is zero. It is an additive adjustment rather than multiplying every score by 100 divided by 90."
      },
      {
        "question": "Can I enter grades out of 50?",
        "answer": "Yes. Set the maximum to 50 and use point scores on that scale throughout. A target mean or added-points parameter also uses points on the same scale. Convert percentages first if the source gradebook mixes different assessment maxima."
      },
      {
        "question": "Is the curved grade an official course result?",
        "answer": "Only the instructor or institution can establish that. This calculator shows the outcome of a rule you select. It does not decide eligibility, letter grades, rounding policy or how the assessment contributes to a final weighted course grade."
      }
    ]
  },
  {
    "slug": "pt-141-dosage-calculator",
    "title": "PT-141 Dosage Calculator — Vyleesi Label Check",
    "category": "Everyday",
    "description": "Check entered dose spacing and monthly counts against Vyleesi label limits, without recommending a PT-141 dose or reconstitution regimen.",
    "formula": "Hours short of the label interval = max(0, 24 − elapsed hours). Monthly count check compares previously used doses with eight. No individualized dose is calculated.",
    "example": "At 12 hours since the previous dose, the 24-hour interval has not elapsed. At eight doses already used in a month, the monthly label limit is reached.",
    "keywords": [
      "pt-141 dosage calculator"
    ],
    "shortTitle": "PT-141 Dosage",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Check entered dose spacing and monthly counts against Vyleesi label limits, without recommending a PT-141 dose or reconstitution regimen. PT-141 is a name associated with bremelanotide. This page covers the approved Vyleesi presentation and its labeled frequency limits, using two numbers that you provide. It does not determine whether treatment is appropriate, prescribe a quantity, or give instructions for preparing a research vial. The displayed single-use presentation is context from the approved product label, not a personalized recommendation. Use your own prescriber’s instructions and the current package information.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Checking elapsed hours",
        "text": "Enter the actual hours since your last prescribed dose. The calculator reports how many hours remain before a 24-hour interval has elapsed. Passing the interval check does not establish that another dose is appropriate or safe. Other label restrictions, contraindications and symptoms can matter. The tool has no connection to medical records and cannot confirm when a previous dose was administered. If your history is uncertain, contact your prescriber or pharmacist rather than estimating it."
      },
      {
        "title": "Counting monthly doses",
        "text": "The second input is how many doses have already been used in the month under the prescribed label guidance. It must be a whole number. Eight already used means the frequency limit has been reached; a count below eight only means that this entered count is below that numerical limit. The tool does not schedule future injections, resolve the definition of a month in your treatment plan or authorize an additional dose. Keep accurate medication records and clarify uncertainties with the prescribing professional."
      },
      {
        "title": "Limits beyond the arithmetic",
        "text": "The approved label includes restrictions for uncontrolled high blood pressure and known cardiovascular disease, and the product can affect blood pressure. A spacing check cannot evaluate those conditions. This page does not assess candidacy, sexual-performance use, interactions, pregnancy or adverse effects. It does not offer syringe-unit calculations or a reconstitution recipe for unapproved products. If you are seeking a dose for yourself, the appropriate next step is a discussion with the prescriber who knows the actual product and your health history."
      }
    ],
    "limitations": "No personalized dosing, mixing instructions or authorization to inject. Counts and intervals do not establish safety or treatment eligibility.",
    "faqs": [
      {
        "question": "Does this recommend a PT-141 dose?",
        "answer": "No. It checks the entered spacing and count against approved-product frequency limits. The result explicitly says that counts below limits do not prove a dose is appropriate or safe. A prescribing professional must determine treatment and provide product-specific instructions."
      },
      {
        "question": "Why is there no vial reconstitution calculator?",
        "answer": "The approved Vyleesi presentation is a single-use autoinjector. Research vials and compounded preparations can have different concentrations and do not inherit instructions from that presentation. This page therefore does not invent mixing volumes, syringe units or generalized injection regimens."
      },
      {
        "question": "What does a label limit reached result mean?",
        "answer": "Either the entered interval is shorter than 24 hours or the entered monthly count is already eight or more. It reports which numerical context is involved through the supporting figures. It is a reason to review instructions and contact the prescriber, not a treatment decision."
      },
      {
        "question": "Does below label limits mean safe to use?",
        "answer": "No. Frequency is only one part of the approved instructions. Contraindications, adverse effects, other medicines and the prescribed indication still need professional assessment. The calculator cannot evaluate medical suitability from an elapsed-hour value and a dose count."
      },
      {
        "question": "Where should I verify these numbers?",
        "answer": "Read the current Vyleesi prescribing and patient information supplied with the product and ask your prescriber or pharmacist. The linked FDA label is the source for this educational check; updated instructions and your actual prescription remain necessary for real use."
      }
    ]
  },
  {
    "slug": "btu-calculator",
    "title": "BTU Calculator — Room AC and Entered Heating Load",
    "category": "Home",
    "description": "Estimate room air-conditioner BTU capacity from an official area table, or calculate heating output from your own design load per square foot.",
    "formula": "Cooling uses the ENERGY STAR floor-area capacity table with ±10% shade/sun adjustment, +600 BTU/h per person above two and +4,000 BTU/h for a kitchen. Heating estimate = area × entered load. One cooling ton = 12,000 BTU/h.",
    "example": "A 200 ft² ordinary room with two occupants maps to 6,000 BTU/h. Very sunny exposure raises that estimate to 6,600 BTU/h.",
    "keywords": [
      "btu calculator",
      "air conditioner size calculator",
      "heating btu calculator",
      "furnace size calculator",
      "ac tonnage calculator",
      "ac btu calculator",
      "air conditioner btu calculator",
      "hvac calculator",
      "ac size calculator",
      "ac unit size calculator"
    ],
    "shortTitle": "BTU",
    "icon": "📐",
    "accent": "green",
    "updatedAt": "2026-10-02",
    "intro": "Estimate room air-conditioner BTU capacity from an official area table, or calculate heating output from your own design load per square foot. The cooling mode is a room air-conditioner estimate based on ENERGY STAR’s floor-area reference for an eight-foot ceiling. It is not a whole-house cooling-load calculation. Windows, insulation, leakage, humidity and local climate can change actual requirements. The implemented table applies from 100 to under 2,500 square feet, and the calculator rejects area outside that scope instead of extrapolating a capacity. Confirm unusual room conditions with an installer.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Area and capacity brackets",
        "text": "Measure the floor in feet and multiply length by width. Divide an irregular room into simpler shapes and add the areas before entering the result. The table assigns capacity in brackets rather than applying one constant BTU figure to every square foot. At a boundary, this implementation selects the next listed bracket. That convention is disclosed because the table’s adjacent wording can look ambiguous. Use a measured floor area and avoid rounding downward to obtain a smaller recommendation."
      },
      {
        "title": "Sun, people and kitchens",
        "text": "Select heavily shaded, normal or very sunny exposure. The sun adjustment changes the base table capacity before extra occupants or the kitchen amount are added. Only occupants above two receive the extra-person adjustment. Kitchen mode adds the specified room-cooling allowance; it does not model individual appliances or commercial cooking exhaust. The tonnage output is a unit conversion of estimated cooling capacity, not proof that a particular product size or efficiency is suitable."
      },
      {
        "title": "Heating requires a supplied load",
        "text": "Heating mode has no automatic climate factor. You must enter a heat-loss load in BTU per hour per square foot from a suitable design or professional assessment. Multiplying by area estimates required delivered heat under that assumption. A furnace’s fuel-input rating differs from delivered output and depends on efficiency. The tool does not select a furnace, handle duct losses, size electrical equipment or replace an HVAC load calculation."
      }
    ],
    "limitations": "Room table estimate for an 8-ft ceiling, not a Manual J design. Heating load is entirely user supplied. Does not select equipment or estimate electricity use.",
    "faqs": [
      {
        "question": "What size air conditioner do I need?",
        "answer": "Room mode provides a starting capacity estimate for the entered floor area, exposure, occupancy and room type within the table’s scope. For high ceilings, unusual windows, multiple rooms or a whole house, obtain a proper load calculation rather than treating this estimate as a final equipment choice."
      },
      {
        "question": "How many BTU are in one AC ton?",
        "answer": "One cooling ton equals 12,000 BTU per hour. Divide the calculated hourly cooling capacity by 12,000 to obtain the equivalent tonnage. This is a capacity unit; it is not the electrical consumption or physical weight of the air conditioner."
      },
      {
        "question": "Can I use this as a furnace size calculator?",
        "answer": "Only if you supply an appropriate design heating load. The output is area multiplied by that supplied load, labeled as an entered-load estimate. It does not infer insulation, outdoor design temperature or furnace efficiency and should not be treated as automatic furnace selection."
      },
      {
        "question": "Why reject small or very large rooms?",
        "answer": "The implemented official cooling table begins at 100 ft² and ends below 2,500 ft². Extrapolating beyond the reference would add an unsupported method. The calculator therefore asks for professional assessment rather than fabricating a capacity from an unrelated constant."
      },
      {
        "question": "Why can oversized AC be a problem?",
        "answer": "A unit can cool air before adequately removing humidity. Capacity should match the room and installation conditions. The estimate is one input to selection; review manufacturer specifications and get advice for unusual loads or building conditions."
      }
    ]
  },
  {
    "slug": "arrow-speed-calculator",
    "title": "Arrow Speed Calculator — Measured Flight",
    "category": "Everyday",
    "description": "Calculate average arrow speed from measured flight distance and elapsed time, then estimate kinetic energy using entered arrow mass.",
    "formula": "Average speed = distance ÷ time. Metres per second = feet per second × 0.3048. Kinetic energy in joules = ½ × mass in kg × speed in m/s squared; one grain = 0.00006479891 kg.",
    "example": "An arrow traveling 30 ft in 0.1 seconds averages 300 ft/s. At 400 grains, kinetic energy evaluated at that average speed is about 108.36 J.",
    "keywords": [
      "arrow speed calculator"
    ],
    "shortTitle": "Arrow Speed",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Calculate average arrow speed from measured flight distance and elapsed time, then estimate kinetic energy using entered arrow mass. This calculator uses actual flight distance and elapsed time. It does not adjust an advertised IBO bow rating for draw weight, draw length or accessories. Those rating adjustments are equipment-specific estimates and need a disclosed validated model. The average-speed method instead states exactly what was measured: distance divided by the time needed to cover it. Use a chronograph for a launch-speed measurement when that is the quantity you need.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Distance and timing",
        "text": "Enter feet and seconds. A recorded 100 milliseconds is 0.1 seconds, not 100 seconds. Measuring a short flight with a hand-operated stopwatch is generally too imprecise to support a useful speed estimate. Timing should come from appropriate instrumentation or a known-frame-rate recording with identifiable start and end points. A distance along the actual path is more appropriate than a rough horizontal estimate if the path is significantly curved."
      },
      {
        "title": "Average versus instantaneous speed",
        "text": "An arrow slows during flight, so speed averaged across a distance is different from speed at the bow or at impact. The calculator cannot reconstruct the velocity curve from one total distance and time. Kinetic energy evaluated at average speed is consequently a derived comparison figure, not a guaranteed impact-energy measurement. If your equipment supplies instantaneous speed at a specific location, use that location’s velocity when doing a separate energy calculation."
      },
      {
        "title": "Arrow mass and energy",
        "text": "Enter the complete arrow’s mass in grains, including the shaft, point, nock, fletching and other components carried during flight. Grain is a unit of mass and must not be confused with gram. The page converts grains to kilograms before applying the kinetic-energy equation. Energy changes with the square of speed, so a small timing error can materially change the derived energy. Keep precision realistic and do not use this calculation as an equipment-safety approval."
      }
    ],
    "limitations": "Measured average-speed method only. No IBO correction model, launch-speed inference, trajectory solver, impact guarantee or equipment-safety assessment.",
    "faqs": [
      {
        "question": "Can this estimate speed from an IBO rating?",
        "answer": "No. This implementation uses measured distance and time and clearly labels the result as average flight speed. It does not assume a universal draw-length or arrow-weight correction for every bow. Use manufacturer data and appropriate measuring equipment for rating comparisons."
      },
      {
        "question": "Is average arrow speed the launch speed?",
        "answer": "Not necessarily. A distance-over-time measurement averages the entire observed segment. The arrow may be faster at the beginning and slower at the end. A chronograph at a specified location provides a different measurement, so attach the measurement method when comparing figures."
      },
      {
        "question": "Why does time need to be in seconds?",
        "answer": "The distance is feet and the requested output is feet per second. Convert milliseconds by dividing by 1,000. Keeping a millisecond number without that conversion would make the displayed speed a thousand times too small and distort the derived energy even more."
      },
      {
        "question": "What weight should I enter?",
        "answer": "Use the mass of the finished arrow in grains, not just the shaft’s grains-per-inch specification. Add the actual components if you are assembling a total from a parts list. A measured complete-arrow mass avoids omissions and rounding differences."
      },
      {
        "question": "Can this determine safe bow setup?",
        "answer": "No. Arrow compatibility, minimum arrow weight, draw settings and handling require the equipment manufacturer’s instructions. The arithmetic describes entered measurements. It does not authorize a setup, judge hunting suitability or replace safe shooting practice and proper inspection."
      }
    ]
  },
  {
    "slug": "volume-calculator",
    "title": "Volume Calculator — Boxes, Tanks, Ponds and Tubes",
    "category": "Education",
    "description": "Calculate solid or water-container volume for boxes, cubes, cylinders, cones, spheres, ponds and hollow tubes, with litres and gallon conversions.",
    "formula": "Box V=lwh; cube V=s³; cylinder V=πr²h; cone V=πr²h/3; sphere V=4πr³/3; hollow tube V=π(R²−r²)L. US gallon=3.785411784 L; imperial gallon=4.54609 L.",
    "example": "A 10 ft by 5 ft by 3 ft box holds 150 ft³ geometrically, approximately 4,247.53 litres or 1,122.08 US gallons before displacement and freeboard.",
    "keywords": [
      "volume calculator",
      "volume of a cube formula",
      "pond volume calculator",
      "tube volume calculator",
      "tank volume calculator",
      "how to work out volume of a box",
      "tank capacity calculator",
      "volume formula",
      "formula of circle volume",
      "cubic inch calculator",
      "what is the formula for the volume",
      "volume of cube formula",
      "volume for square",
      "box formula volume",
      "volume of cube",
      "how to find the volume of a cube",
      "equation for volume of rectangle",
      "formula of volume for rectangle",
      "rectangle formula for volume",
      "how do i calculate volume of a box",
      "volume of the rectangle formula",
      "cylindrical volume calculator",
      "how to compute volume of a rectangle",
      "volume of a box formula",
      "what is the equation for volume",
      "volume formula cube",
      "how to work out the volume of a rectangle",
      "formula for rectangular volume",
      "how to find the volume of a box",
      "how to find volume of a cube",
      "equation for volume of circle",
      "how to calculate volume of a rectangle",
      "volume of a cube equation",
      "formula of volume rectangle",
      "volume of a rectangular formula",
      "volume of a box",
      "volume circular",
      "volume of the circle formula",
      "rectangle volume",
      "volume formula rectangular",
      "equation for volume",
      "how to find the volume of a square",
      "volume equation",
      "how do you calculate the volume of a block",
      "formula of a rectangle volume",
      "water volume calculator",
      "area cubic",
      "how do i calculate the volume",
      "gallon calculator",
      "formula for the volume of a cube",
      "volume formula of a circle",
      "how to solve volume",
      "how to measure volume",
      "work out volume",
      "cylindrical volume formula",
      "calculate volume",
      "how to calculate the volume of circle",
      "how to measure in volume",
      "volume of circle",
      "calculate volume of a box",
      "how to get the volume of a cube",
      "calculating volume",
      "volume of a circle formula",
      "how do you figure volume of a cube",
      "volume of square",
      "what is volume measured in",
      "find volume of circle",
      "how to determine volume",
      "how to work out the volume of a circle",
      "volume of rectangle",
      "how to solve for volume",
      "volume of a square",
      "formula for the volume of a circle",
      "volume.of.cube",
      "how do you get volume",
      "formula of the volume of a circle",
      "volume equation circle",
      "volume of circle formula",
      "circle volume formula",
      "how do you calculate volume of a circle",
      "cube volume equation",
      "volume calculation",
      "cube calculator",
      "how do you calculate volume",
      "how is volume calculated",
      "volume formula for a cube",
      "how do you calculate the volume of a cube",
      "how to calculate circular volume",
      "how do you figure volume",
      "formula volume circle",
      "how do you figure out volume",
      "formula volume",
      "volume calc",
      "how to do volume",
      "how to work out volume of a circle",
      "how to find volume of cube"
    ],
    "shortTitle": "Volume",
    "icon": "🧮",
    "accent": "violet",
    "updatedAt": "2026-10-02",
    "intro": "Calculate solid or water-container volume for boxes, cubes, cylinders, cones, spheres, ponds and hollow tubes, with litres and gallon conversions. Volume measures occupied three-dimensional space. A flat rectangle, square or circle has area rather than volume. Searches for rectangle volume normally mean a rectangular box; circle volume can mean a cylinder or sphere, which require different dimensions. Select the actual solid rather than applying a formula to a two-dimensional name. The changing field labels show whether the mode needs an edge, radius, length, height or depth.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Box and tank dimensions",
        "text": "For rectangular containers, use internal length, width and water depth. Outside dimensions include wall thickness and overstate capacity. Cylinder mode uses radius and height; divide a measured diameter by two before entry. Full geometric capacity assumes filling to the measured height. Actual usable water capacity should allow for freeboard, fittings, contents, sediment and safe operating limits. The output does not determine whether a container can bear the load of that water."
      },
      {
        "title": "Pond average depth",
        "text": "Rectangular pond mode multiplies length, width and average depth, while round pond mode uses circular plan area and average depth. An irregular pond is not necessarily well represented by either shape. Measure depths at multiple representative points and use a defensible average rather than the deepest point. Banks, shelves and sloped bottoms can substantially reduce capacity. The result is a geometric estimate, not a surveyed pond model or a chemical-treatment recommendation."
      },
      {
        "title": "Hollow tube and unit conversion",
        "text": "Hollow tube mode calculates the material or annular space between an outer and inner cylinder. The inner radius must be smaller than the outer radius. It is not the liquid bore capacity, which uses the inner radius alone in cylinder mode. Choose one length unit for every dimension. Litres and both gallon standards are then converted from the cubic result. US liquid gallons and imperial gallons differ, so compare the output using the same gallon definition as your source."
      }
    ],
    "limitations": "Ideal geometry only. Pond results depend on representative average depth. Capacity excludes displacement and freeboard; no structural or chemical-treatment guidance.",
    "faqs": [
      {
        "question": "What is the volume formula for a cube?",
        "answer": "Cube volume is edge length cubed. An edge of 3 cm gives 27 cm³. Surface area is different: six faces each of area 9 cm² total 54 cm². Choose volume for space inside the solid and surface area for its exterior coverage."
      },
      {
        "question": "How do I find the volume of a box?",
        "answer": "Multiply length, width and height after converting all measurements to one unit. The unit is cubed because three dimensions are multiplied. For water capacity, use internal dimensions and the actual intended fill depth instead of external container dimensions."
      },
      {
        "question": "Does a circle have volume?",
        "answer": "No. A circle is two-dimensional. A cylinder has circular cross-section and a height; a sphere is a different solid defined by radius. Identify the actual object before choosing a mode. The page deliberately does not claim a unique volume for an unspecified circle."
      },
      {
        "question": "Is tube volume the water inside a pipe?",
        "answer": "Hollow tube mode gives the annular volume between two radii, such as the pipe wall material. To find the water capacity of the bore, use cylinder mode with the inner radius and the pipe length. Outer diameter should not be used as water diameter."
      },
      {
        "question": "Which gallon result should I use?",
        "answer": "Use the gallon standard specified by the source or product. A US liquid gallon is 3.785411784 litres, while an imperial gallon is 4.54609 litres. Keeping both outputs visible avoids assuming that every tank specification uses the same unit."
      }
    ]
  },
  {
    "slug": "productivity-calculator",
    "title": "Productivity Calculator",
    "category": "Business",
    "description": "Calculate completed output per labor-hour, total labor input and performance against your entered productivity target using consistent units.",
    "formula": "Labor input = workers × hours each. Labor productivity = accepted output ÷ labor input. Target attainment = productivity ÷ entered target × 100.",
    "example": "Five workers each completing an eight-hour shift produce 40 labor-hours. Output of 400 units therefore equals 10 units per labor-hour.",
    "keywords": [
      "productivity calculator"
    ],
    "shortTitle": "Productivity",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Calculate completed output per labor-hour, total labor input and performance against your entered productivity target using consistent units. Choose an output that is comparable across the period being measured, such as accepted parts, completed orders or resolved cases of a consistent type. Count completed output under a clear rule, not everything started. If quality differs, a larger raw count may not represent improved performance. National economic productivity uses real-output measures; this small-team calculator instead uses the operational units you supply and should not be interpreted as an official economic index.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Labor-hours versus elapsed hours",
        "text": "Five people working eight hours each contribute 40 labor-hours even though the shift lasts only eight clock hours. The denominator must include all contributing workers and hours on a consistent basis. This simple calculator assumes equal hours per worker. For unequal schedules, total the actual hours first and represent the total using an equivalent entry, or compute output divided by the verified total externally. Do not use headcount without accounting for hours."
      },
      {
        "title": "Targets and comparisons",
        "text": "The target is entered units per labor-hour, not total units per day. A result of 100% means measured productivity equals that target; a larger percentage means it exceeds the entered target under the same definition. Targets are not supplied automatically because jobs, quality requirements and equipment differ. Compare periods only when output definitions and labor accounting stay consistent. Changes in tools, case difficulty or product mix can affect the number without reflecting a change in effort."
      },
      {
        "title": "Hours per unit and zero output",
        "text": "Hours per unit is the inverse of units per labor-hour when output is positive. It helps estimate labor input for a comparable quantity, but only if conditions remain similar. Zero output still gives zero units per hour when labor input is positive. Hours per unit is then undefined rather than infinite displayed as a useful planning figure. Review downtime, rejected output and the observation period before drawing conclusions from a zero-output result."
      }
    ],
    "limitations": "Operational output-per-hour arithmetic, not an official economic index or individual performance assessment. Assumes consistent output units and equal worker hours unless aggregated.",
    "faqs": [
      {
        "question": "How is labor productivity calculated?",
        "answer": "Divide completed, consistently defined output by total labor-hours. The worker count and hours-per-worker fields form that denominator. A clock-hour total alone overstates productivity when multiple people contribute simultaneously, so use labor input rather than elapsed shift length."
      },
      {
        "question": "Is efficiency the same as productivity?",
        "answer": "The displayed target percentage compares measured units per labor-hour with a target you entered. It is not a universal efficiency score. A separate measure of resource utilization, quality or machine efficiency may require a different denominator and its own operational definition."
      },
      {
        "question": "Can I compare different products?",
        "answer": "Only if the output unit has been normalized in a defensible way. A simple count of small and large jobs treats them as equivalent when they may need different effort. Track comparable jobs separately or use an agreed weighting method rather than interpreting mixed counts literally."
      },
      {
        "question": "What if workers have unequal hours?",
        "answer": "The basic fields assume the same hours for each worker. Verify total labor-hours from actual records. You can enter one equivalent worker with the total hours to represent the aggregate, making clear that this is an accounting representation rather than the actual headcount."
      },
      {
        "question": "Does a higher result prove staff worked harder?",
        "answer": "No. Equipment, scheduling, product mix, quality rules and measurement changes can affect output per hour. Use the calculation to describe a consistent period and investigate causes with context. It cannot evaluate individual effort or make staffing decisions automatically."
      }
    ]
  },
  {
    "slug": "time-between-calculator",
    "title": "Time Between Calculator",
    "category": "Everyday",
    "description": "Calculate elapsed days, hours, minutes and seconds between two UTC date-times, including intervals across midnight or calendar boundaries.",
    "formula": "Elapsed milliseconds = end UTC timestamp − start UTC timestamp. Divide by 1,000 for seconds, 60,000 for minutes or 3,600,000 for hours.",
    "example": "From 2026-10-02T09:00 to 2026-10-03T17:30 UTC, the interval is 1 day 8 hours 30 minutes, or 32.5 total hours.",
    "keywords": [
      "time between calculator"
    ],
    "shortTitle": "Time Between",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Calculate elapsed days, hours, minutes and seconds between two UTC date-times, including intervals across midnight or calendar boundaries. Use the format YYYY-MM-DDTHH:mm for both values, such as 2026-10-02T09:00. Both fields represent UTC. The dates make overnight and multi-day intervals explicit, so the calculator never silently assumes that an earlier end clock time belongs to tomorrow. If the end precedes the start, it asks for correction instead of displaying a negative duration as an elapsed interval. Optional seconds can be included using the same timestamp format.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "UTC and local daylight saving",
        "text": "UTC provides a consistent basis for subtraction. Local clocks can skip or repeat an hour at a daylight-saving transition, so subtracting local clock labels without a time-zone rule can be wrong. Convert local appointments to UTC using their actual zones and date-specific offsets before entry. This page does not guess your location, use the device’s local zone for these fields or claim that a fixed offset always describes a city throughout the year."
      },
      {
        "title": "Elapsed days versus calendar months",
        "text": "A displayed day here is 24 elapsed hours. Calendar months are not a fixed duration, and the tool does not convert the interval into a rounded month count. A period crossing February or a leap day is handled by the actual timestamps. The days-hours-minutes result is a decomposition, while total hours and total minutes express the same interval as a single unit. Use total hours when multiplying by an hourly amount."
      },
      {
        "title": "Time spans and paid work",
        "text": "Elapsed time is not necessarily payable work time. Breaks, shift policies, overtime and time-recording conventions require additional rules. The Work Hours Calculator is the related tool for a shift with unpaid breaks and an entered hourly rate. For a date-time interval, this page includes every elapsed minute. It does not filter weekends, holidays, business hours or working days, so a deadline requiring those exclusions needs a separate calendar rule."
      }
    ],
    "limitations": "UTC elapsed-time subtraction only. No local-zone inference, business-day calendar, holiday exclusions or payroll rules.",
    "faqs": [
      {
        "question": "Can this calculate across midnight?",
        "answer": "Yes. Enter the correct start and end dates, even when the clock time at the end looks earlier. For example, 23:00 on one date and 01:00 the next UTC date are two hours apart. The dates remove any ambiguity about overnight interpretation."
      },
      {
        "question": "Why does the input require UTC?",
        "answer": "It avoids guessing a time zone or daylight-saving rule from a clock label. Convert local times to UTC with the applicable date-specific offset first. A named local zone can have different offsets in different seasons, so using a single remembered offset may produce an incorrect interval."
      },
      {
        "question": "Are days counted inclusively?",
        "answer": "No. This is timestamp subtraction. Identical start and end values produce zero elapsed time, and one day later at the same UTC clock time produces 24 hours. Inclusive calendar-day counting serves a different purpose and should be specified separately."
      },
      {
        "question": "Can I use it for payroll?",
        "answer": "It gives elapsed duration only. Payroll may exclude unpaid breaks, apply rounding, assign overtime or use local reporting rules. Use the related shift calculator for basic break subtraction and verify actual pay against your employer’s policy."
      },
      {
        "question": "What does total hours mean?",
        "answer": "It is the full interval divided by one hour, including any fractional part. A result of one day eight hours thirty minutes is 32.5 total hours. The decomposition and the total are two representations of the same elapsed duration, not quantities to add together."
      }
    ]
  },
  {
    "slug": "blood-pressure-by-age-calculator",
    "title": "Blood Pressure by Age Calculator — Adult Categories",
    "category": "Everyday",
    "description": "Classify an adult blood-pressure reading using AHA categories while explaining why adult thresholds are not raised simply because age increases.",
    "formula": "Adult category follows the higher systolic or diastolic range: normal <120 and <80; elevated 120–129 and <80; stage 1 130–139 or 80–89; stage 2 ≥140 or ≥90. Severe range is >180 or >120 mm Hg.",
    "example": "An adult reading of 120/80 mm Hg falls in the stage 1 range because diastolic is 80, even though systolic alone is in the elevated range.",
    "keywords": [
      "blood pressure by age calculator"
    ],
    "shortTitle": "Blood Pressure by Age",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Classify an adult blood-pressure reading using AHA categories while explaining why adult thresholds are not raised simply because age increases. This page asks age to establish that the user is an adult, not to invent a normal pressure for each birthday. Adult reading categories use the stated systolic and diastolic thresholds. Personal treatment targets can differ with clinical circumstances and require a clinician. A higher reading should not be labeled normal merely because someone is older. The calculator cannot create a target from age alone or replace an individualized assessment.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Using both pressure numbers",
        "text": "Systolic is the upper pressure and diastolic is the lower pressure, both in millimetres of mercury. The category is determined by whichever number places the reading in the higher range. For example, 118/85 is in the stage 1 range because of diastolic pressure. The calculator does not average the two numbers or ignore one. It checks for positive values and systolic above diastolic, but that check cannot establish that a device or measurement was accurate."
      },
      {
        "title": "One reading and measurement context",
        "text": "A displayed category describes the entered reading. It does not diagnose persistent hypertension. Technique, cuff fit, activity and measurement conditions can affect results. Follow the instructions for a validated monitor, keep a record and discuss repeated abnormal readings with a professional. This tool has no access to prior readings, medical history, medicines or pregnancy status. Do not change prescribed medication based solely on an online category."
      },
      {
        "title": "Urgent readings and excluded children",
        "text": "If systolic exceeds 180 or diastolic exceeds 120, the output shows urgent guidance. Symptoms such as chest pain, shortness of breath, weakness or vision change require emergency help; without such symptoms, repeat after a minute and contact a clinician promptly. Symptoms can still require urgent care below these thresholds. Children need different assessment that incorporates age, sex and height; this adult calculator rejects ages under eighteen rather than applying adult categories to them."
      }
    ],
    "limitations": "Adult categories only, not age-adjusted personal targets or diagnosis. Excludes pediatric and pregnancy-specific assessment. Concerning symptoms may require urgent care at any reading.",
    "faqs": [
      {
        "question": "What is normal blood pressure by age?",
        "answer": "For adults, the general category called normal is below 120 systolic and below 80 diastolic. Age alone does not raise those category thresholds. An individual treatment goal is a separate clinical decision, which this tool cannot set from a birthday and one reading."
      },
      {
        "question": "Why is 120/80 not shown as normal?",
        "answer": "Both numbers must be below the normal thresholds. A diastolic value of 80 enters the stage 1 range, so that higher category determines the result. The upper and lower pressures are assessed separately rather than combined into an average."
      },
      {
        "question": "Can I use this for a child?",
        "answer": "No. Ages under eighteen are rejected. Pediatric interpretation can involve age, sex, height percentile and clinical context. Using adult cutoffs would create a misleading answer, so this page does not supply invented childhood ranges or a pediatric diagnosis."
      },
      {
        "question": "Does one high reading mean hypertension?",
        "answer": "Not by itself. The displayed range is an interpretation of the entered measurement. Repeated measurements and professional assessment are needed to interpret persistent blood-pressure status. Seek urgent help for concerning symptoms rather than waiting for an online classification."
      },
      {
        "question": "Should I change my medicine after calculating?",
        "answer": "No. Discuss readings and treatment with your clinician. This calculator cannot assess medical history, interactions, pregnancy, kidney disease or side effects. Its purpose is to explain adult reading categories and relevant urgent guidance, not recommend medication changes."
      }
    ]
  },
  {
    "slug": "baby-percentile-calculator",
    "title": "Baby Percentile Calculator — WHO Weight for Age",
    "category": "Everyday",
    "description": "Estimate WHO baby weight-for-age percentile at exact monthly ages from birth to 24 months using sex-specific published LMS reference values.",
    "formula": "For LMS reference values at the selected monthly age: z = ((weight/M)^L − 1)/(L×S), or ln(weight/M)/S when L=0. Percentile = standard-normal cumulative probability of z × 100.",
    "example": "For the WHO boys reference at exactly six months, 7.9340 kg is the median and produces approximately the 50th weight-for-age percentile.",
    "keywords": [
      "baby percentile calculator"
    ],
    "shortTitle": "Baby Percentile",
    "icon": "📊",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "intro": "Estimate WHO baby weight-for-age percentile at exact monthly ages from birth to 24 months using sex-specific published LMS reference values. Weight-for-age percentile compares an entered weight with a sex-specific WHO reference at the stated age. A result near the 50th percentile is close to the reference median, not a score or a growth goal. This tool uses the monthly LMS parameters published in the WHO tables. It does not assess body composition, weight-for-length, feeding adequacy or overall health. A clinician interprets growth in context and over time.",
    "howTo": [
      "Choose the stated method or shape and read the labels before replacing the example values.",
      "Enter the measurements in the exact units shown. Use the inputs described in the methodology below.",
      "Click Calculate result. Editing inputs keeps the previous submitted result visible until you calculate again.",
      "Compare the supporting figures with the formula and worked example, then review the method’s specific limitations."
    ],
    "considerations": [
      {
        "title": "Exact monthly ages only",
        "text": "The reference bundled here covers exact monthly points from birth through twenty-four months. Enter a whole-number age only when the measurement corresponds to that exact monthly point. Do not round a baby’s age up or down to use the tool. Days and weeks are important during early growth, and this simplified version does not interpolate daily reference values. For an age between monthly points, use a clinical growth system that supports exact dates and the appropriate reference."
      },
      {
        "title": "Weight and reference selection",
        "text": "Use measured kilograms and choose the relevant WHO boys or girls reference. Pounds must first be converted to kilograms. A percentile depends on age and reference selection, so comparing results from different charts or ages without that information can mislead. The displayed median is the M parameter at the selected age and helps verify the data lookup. The calculator stores no identifying baby information and does not need a name or birth date."
      },
      {
        "title": "Birthweight, prematurity and extremes",
        "text": "This is weight-for-age, not birthweight-for-gestational-age. It does not use gestational age, correct for prematurity or classify small or large for gestational age. The simplified LMS output is limited to z-scores from minus three to plus three; more extreme values are rejected for professional interpretation rather than extrapolated. A single percentile should not determine a feeding or treatment change. Concerns about growth, dehydration or illness should be discussed with a clinician."
      }
    ],
    "limitations": "WHO weight-for-age at exact monthly ages 0–24 only and |z|≤3. No gestational-age percentile, prematurity correction, diagnosis, daily-age interpolation or feeding guidance.",
    "faqs": [
      {
        "question": "Is this a birthweight percentile calculator?",
        "answer": "No. Birthweight-for-gestational-age requires gestational age and a suitable newborn reference. This tool compares weight with the WHO age reference at monthly points. Choose a gestational-age chart with professional guidance when that is the question you need to answer."
      },
      {
        "question": "Why can I only enter whole months?",
        "answer": "The bundled official table contains monthly LMS parameters. This implementation deliberately avoids pretending that rounding or an unspecified interpolation gives an exact daily-age percentile. Use it at the stated monthly points or use a validated clinical chart for dates between them."
      },
      {
        "question": "What does the 50th percentile mean?",
        "answer": "It corresponds to the reference median at the selected age and sex. It is not a recommended weight for every child and is not a pass mark. Growth trajectory, measurement quality and clinical context matter more than trying to reach a particular displayed percentile."
      },
      {
        "question": "Why is an extreme weight rejected?",
        "answer": "This simplified implementation is restricted to z-scores between minus three and plus three. Extreme-value interpretation needs appropriate reference handling and clinical assessment. Returning a highly precise percentile outside the supported method would give a misleading impression of validity."
      },
      {
        "question": "Can I use it for a premature baby?",
        "answer": "It does not correct age or use a preterm reference. Ask the baby’s clinician which growth chart and age convention should be used. Do not apply a correction yourself based only on this calculator, and do not change feeding from a single percentile result."
      }
    ]
  }
];
