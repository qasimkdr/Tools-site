import type {Tool} from "./tools";
export const roadmap146Tools: Tool[] = [
  {
    "slug": "epoxy-resin-calculator",
    "title": "Epoxy Resin Calculator — Volume and Mix Ratio",
    "category": "Home",
    "description": "Estimate mixed epoxy, resin and hardener volumes for a rectangular layer using centimetres, millimetres, supplier volume ratio and an explicit allowance.",
    "formula": "Mixed layer litres = length cm × width cm × thickness mm ÷ 10,000. Apply allowance, then divide total volume using the supplier resin:hardener volume ratio.",
    "example": "A 100 × 50 cm surface with a 2 mm layer uses 1 L geometrically. With 10% extra and a hypothetical 2:1 volume ratio, order for 1.1 L mixed: 0.7333 L resin and 0.3667 L hardener.",
    "intro": "The epoxy resin calculator estimates the liquid needed to occupy a rectangular layer. It also splits that total into resin and hardener when you supply the correct volume mixing ratio. The two calculations answer different questions: geometry establishes how much mixed material the layer holds, while the product specification establishes how its components must be proportioned. Neither calculation sets a safe pour depth or selects a product for your project. The displayed defaults are a demonstration, not a manufacturer recommendation.",
    "howTo": [
      "Measure the coated length and width in centimetres and the intended layer thickness in millimetres.",
      "Read the selected resin and hardener labels together. Enter their volume ratio as resin:hardener, such as 2:1, then choose a 0–100% allowance.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Separate volume from weight",
        "text": "A litre is a volume; a kilogram is a mass. The calculator's component outputs are litres, so its ratio must be specified by volume. Do not copy a weight ratio into this field because resin and hardener can have different densities. Even products from the same manufacturer may use different ratios for different hardeners. If a technical sheet specifies only mass proportions, use its approved weighing method rather than converting these volume outputs with an assumed density. A correctly calculated amount can still cure incorrectly if the wrong ratio is used."
      },
      {
        "title": "Geometry, voids and allowance",
        "text": "The layer model assumes constant thickness across the stated footprint. A river-table cavity, curved mould, porous substrate or sloping surface needs a more detailed volume takeoff. Divide a cavity into measured sections and sum their geometric amounts without counting overlapping sections twice. Masked areas and embedded objects reduce the occupied volume, whereas absorbent surfaces and container residue may require more. The allowance field increases total mixed volume while retaining the component ratio. It does not compensate for an incorrect mixing proportion or change the chemical reaction."
      },
      {
        "title": "Thickness and batching",
        "text": "Doubling thickness doubles geometric volume; doubling both length and width multiplies it by four. Those relationships help check an unexpectedly large estimate. The calculated total is a purchasing quantity, not a recommendation to mix everything at once. Product instructions govern batch size, cure conditions, working time and allowed pour thickness. Record the actual product, hardener and technical-sheet version beside your estimate. A supplier may sell separate containers whose combined nominal volumes do not equal the amount usable at the specified ratio. Check both component quantities before buying."
      },
      {
        "title": "Precision and project records",
        "text": "Measure dimensions on the prepared surface rather than an early sketch. For an uneven layer, run low- and high-thickness cases to show how uncertain the volume is. Keep the unrounded total for comparison, then use the supplier's available pack sizes for purchasing. Decimal display precision does not make a hand-measured surface exact. Document each section, its dimensions, thickness and allowance so another person can reproduce the takeoff. The formula estimates volume only; it does not certify adhesion, food contact, structural strength, waterproofing or compatibility with a particular substrate."
      }
    ],
    "faqs": [
      {
        "question": "Can I use a 2:1 weight ratio?",
        "answer": "Not in the volume-ratio field. A mass ratio and volume ratio can differ when component densities differ. Use the product-specific instructions for the exact resin/hardener pair and their stated measurement basis. This tool does not derive densities or approve substitutes."
      },
      {
        "question": "Does the allowance change the mixing ratio?",
        "answer": "No. A 10% allowance multiplies total mixed volume by 1.10 and then splits it in the same ratio. Adding extra hardener alone is not an allowance calculation and is not supported by this tool."
      },
      {
        "question": "How do I estimate an irregular cavity?",
        "answer": "Break it into non-overlapping measured sections with a defensible average thickness for each. Calculate sections separately and add their volumes. Curves, tapers and displaced inserts can require a different geometric model or a measured capacity test."
      },
      {
        "question": "Are litres the same as kilograms of epoxy?",
        "answer": "No. Converting volume to mass requires reliable component or mixed-product density for the relevant conditions. This calculator reports litres and deliberately does not assume one litre weighs one kilogram. Review the product sheet if purchasing quantities are given by mass."
      },
      {
        "question": "Will this tell me a safe pour depth?",
        "answer": "No. Allowed depth and batch size depend on the specific formulation and instructions. A volume estimate does not evaluate reaction heat, cure behavior or the project environment. Follow the current product guidance before handling or pouring."
      }
    ],
    "shortTitle": "Epoxy Resin Calculator",
    "keywords": [
      "epoxy resin calculator"
    ],
    "icon": "🏠",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Rectangular constant-depth geometry; user-supplied product volume ratio, not mass ratio or cure design. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "molarity-calculator",
    "title": "Molarity Calculator — Mass, Moles and Dilution",
    "category": "Education",
    "description": "Calculate molarity from grams or moles, required solute mass, or stock volume for dilution using molar mass and final solution volume in millilitres.",
    "formula": "M = n/V, with V in litres; n = mass/molar mass. Required mass = M × V × molar mass. Dilution uses M1V1 = M2V2 for conserved solute.",
    "example": "5.844 g of a solute with molar mass 58.44 g/mol in 1,000 mL final solution gives 0.1 mol/L. Diluting 1 M stock to 100 mL of 0.1 M needs 10 mL stock.",
    "intro": "This molarity calculator relates a specified solute amount to final solution volume. Choose a mode that matches the information you actually have: grams and molar mass, an already known number of moles, a desired molarity and mass, or stock and target concentrations for dilution. Each mode keeps the volume basis explicit. The calculator is useful for checking coursework and arithmetic, but it does not prescribe a laboratory procedure or assess chemical hazards. Molarity describes composition; it does not establish safe handling, stability or compatibility.",
    "howTo": [
      "Select mass to molarity, moles to molarity, required solute mass or dilution stock volume.",
      "Enter the displayed values in grams, mol/L, g/mol and millilitres as labelled. Use final solution volume rather than solvent volume.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Final volume is the denominator",
        "text": "A concentration of one mole per litre means one mole of the named solute in one litre of finished solution. It does not mean one mole added to a litre of solvent. The calculator converts millilitres to litres before dividing, so 100 mL becomes 0.100 L. Missing this factor can create a thousandfold error. When a question gives a final volume directly, use that volume without adding the solute's separate volume. For practical preparations, follow a validated procedure and appropriate calibrated equipment rather than treating arithmetic as an instruction to mix chemicals."
      },
      {
        "title": "Choose the actual chemical form",
        "text": "Molar mass must match the material in the problem or on the specification. A hydrated salt and its anhydrous form do not have the same molar mass. Purity, assay, mixtures and reactions can change how much usable solute is present. This tool assumes the entered mass belongs to the stated pure solute and does not apply an undisclosed purity correction. The related molecular-weight calculator can help with supported chemical formulas, but verify the exact formula, charge and hydration state using the source of your problem or the reagent documentation."
      },
      {
        "title": "Dilution conserves solute under its assumptions",
        "text": "In dilution mode, initial and final molarity refer to the same conserved solute and no reaction changes its amount. Multiplying stock concentration by stock volume must equal target concentration times final volume. The target must be positive and no greater than the stock value. The output tells you the mathematical stock aliquot. It does not tell you that solvent volume equals final volume minus aliquot in every real mixture, and it does not select an order of addition. Concentrating a solution is outside this dilution mode."
      },
      {
        "title": "Interpret small and large results",
        "text": "Molarity is not molality, mass percentage, normality or an activity coefficient. Those quantities need different definitions and sometimes different chemical information. A very large concentration may be impossible for a given material because the calculator does not check solubility or solution density. Displayed decimals are arithmetic precision, not proof that an experimental concentration is known that precisely. Keep units on every line of your working, note significant figures separately and verify a result by multiplying calculated molarity by final litres to recover the entered moles."
      }
    ],
    "faqs": [
      {
        "question": "What is the difference between molar and molarity calculations?",
        "answer": "Molarity is concentration in moles per litre of final solution. Molar mass is grams per mole for a chemical species. The mass mode connects them through moles, but they are not interchangeable units or independent names for the same measurement."
      },
      {
        "question": "Can I enter solution volume in litres?",
        "answer": "The visible field expects millilitres. Multiply litres by 1,000 before entering them: 0.25 L is 250 mL. The output also shows litres in mass and mole modes so you can verify the conversion before using the concentration."
      },
      {
        "question": "Does this adjust for reagent purity?",
        "answer": "No. Mass mode assumes the supplied mass is the named solute. An assay correction requires verified purity information and a consistent basis. Do not apply a guessed purity factor or assume a hydrated reagent has an anhydrous molar mass."
      },
      {
        "question": "Why is dilution stock volume smaller than final volume?",
        "answer": "When target molarity is lower than stock molarity, the conserved solute amount can be provided by a smaller stock aliquot. For example, a tenfold concentration reduction requires one tenth of the final volume as stock under the stated dilution assumptions."
      },
      {
        "question": "Can this calculate normality?",
        "answer": "No. Normality depends on the reaction and the number of equivalents involved, which are not inputs here. Molarity alone cannot establish a universal equivalents-per-litre value. Use a method tied to the specific reaction and verify its definition."
      }
    ],
    "shortTitle": "Molarity Calculator",
    "keywords": [
      "molarity calculator",
      "molar calculator"
    ],
    "icon": "🧪",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Specified pure solute; final volume; dilution assumes conserved solute and no reaction. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "garage-door-spring-calculator",
    "title": "Garage Door Spring Calculator — Ideal Torque Estimate",
    "category": "Home",
    "description": "Estimate ideal static garage-door balancing torque from verified weight force, effective drum moment arm and equally sharing springs, with clear limits.",
    "formula": "Ideal total torque = door weight force lbf × effective drum moment arm inches. Equal-spring torque = total/number of springs. 1 lbf·in ≈ 0.112984829 N·m.",
    "example": "A documented 200 lbf load acting at a 2 in moment arm produces 400 lbf·in ideal total torque. Two equally sharing springs would each supply 200 lbf·in at that modelled position.",
    "intro": "The garage door spring calculator provides a limited static torque estimate. It multiplies a verified weight force by an effective moment arm and shows an equal-share value for one to four springs. This is useful for understanding the units in a professional discussion, not for selecting replacement hardware. It does not output winding turns, wire diameter, spring length, a part number or a repair procedure. Installed counterbalance systems change through travel, and the simple model cannot establish whether a real door is balanced or safe.",
    "howTo": [
      "Use weight-force and effective moment-arm values already supplied in manufacturer or technician documentation.",
      "Enter the number of springs only when the model assumes equal sharing. Do not collect inputs by releasing, loosening or testing tensioned components.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Force and moment arm",
        "text": "Torque describes the turning effect of a force. Pounds-force times inches produces pound-force inches, not pounds of spring mass or a linear spring rate. The effective moment arm is the perpendicular distance relevant to the lifting force at the position being modelled. It is not automatically the visible outer diameter of a cable drum. The conversion to newton-metres changes the unit of the same ideal torque; it adds no information about the assembly. Keep the original documented units with the result to avoid confusing inch-pounds with foot-pounds."
      },
      {
        "title": "Equal sharing is an assumption",
        "text": "Dividing total torque by two assumes two springs contribute equally at the modelled position. Existing springs can differ in dimensions, condition or specification, and a system may not be designed for an equal split. This calculator does not inspect either spring or infer equality from their appearance. Use the per-spring figure only within the stated mathematical model. A quantity such as 200 lbf·in is a torque at a condition; it is not a complete replacement specification and cannot be translated into a purchase code without the appropriate design information."
      },
      {
        "title": "A door is a moving system",
        "text": "A sectional door travels along tracks, and its effective loading and counterbalance behavior are not captured by one constant-force equation. Drum geometry, cable routing, door configuration and spring characteristics belong to a system-level design. This page does not evaluate cycle life, cable loads, hardware compatibility, local standards or the opener. Adding panels, insulation or accessories can invalidate earlier documentation. A recalculated number is not approval for those modifications. Have a qualified door systems technician evaluate the actual assembly using its manufacturer documentation."
      },
      {
        "title": "Use the result as a question, not an instruction",
        "text": "Retain the documented input values and ask the technician whether the static model is relevant to the system in front of them. Do not use the result to wind, unwind, adjust or substitute a spring. Spring, cable and bottom-bracket work involves stored energy and needs appropriate training and equipment. An unusual result may reflect wrong units or an inappropriate moment arm rather than a defective installed part. The calculator cannot distinguish those cases remotely. Its purpose is numerical explanation of force times distance, with no installation or diagnosis claim."
      }
    ],
    "faqs": [
      {
        "question": "Does this choose a replacement garage door spring?",
        "answer": "No. Replacement selection needs the complete door and counterbalance specification and an assessment by a qualified technician. The output contains ideal torque only. It deliberately supplies no wire size, length, winding turns or compatible part number."
      },
      {
        "question": "Should I measure the door by disconnecting its springs?",
        "answer": "No input on this page requires you to release tension or work on spring hardware. Use already verified documentation or values provided by a qualified technician. If the necessary information is unavailable, the calculator cannot create it safely from a visual guess."
      },
      {
        "question": "Is the drum radius the same as its diameter?",
        "answer": "No. Radius and diameter differ by a factor of two, and effective moment arm may not equal a nominal outer radius. The field asks for a documented effective moment arm, not an inferred dimension from a product name or photograph."
      },
      {
        "question": "What does the per-spring result assume?",
        "answer": "It assumes the entered number of springs share the ideal total torque equally at the modelled condition. That arithmetic does not verify the design or performance of installed springs, which may have different specifications or be part of a different counterbalance arrangement."
      },
      {
        "question": "Can it assess an extension spring system?",
        "answer": "No. The simple torque and equal-sharing model is not an extension-spring sizing method. It does not calculate extension, tension, pulley arrangements or safety-cable requirements. Use system-specific manufacturer documentation and a trained door systems technician."
      }
    ],
    "shortTitle": "Garage Door Spring Calculator",
    "keywords": [
      "garage door spring calculator"
    ],
    "icon": "🏠",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Static force-times-moment-arm model only; no replacement sizing, winding turns or installation advice. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "lawn-mowing-cost-calculator",
    "title": "Lawn Mowing Cost Calculator — Time and Visit Estimate",
    "category": "Home",
    "description": "Estimate lawn mowing labor time, price per visit and repeat-visit cost from measured lawn area, effective productivity, hourly charge and fixed visit cost.",
    "formula": "Active labor hours = lawn ft²/effective ft² per hour. Per-visit cost = hours × hourly charge + fixed visit charge. Repeat total = per-visit cost × visits.",
    "example": "With 10,000 ft², measured productivity of 5,000 ft²/hour, a 30 hourly charge and a 10 fixed visit charge, one visit is 70 and four identical visits total 280.",
    "intro": "Use the lawn mowing cost calculator to turn an area and a defensible work rate into a transparent visit estimate. It does not supply a local market price or choose a mower. You enter the effective area covered per hour and the charge per hour, then add a fixed visit amount for costs that do not scale with mowing area. This separates labor time from travel or setup charges and makes quotes easier to compare. All monetary outputs use the same currency as your inputs without assuming a country.",
    "howTo": [
      "Measure the mowable lawn area in square feet, excluding beds, buildings and other areas not cut.",
      "Enter an effective observed productivity, hourly charge, fixed per-visit charge and whole number of visits.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Effective productivity versus machine capacity",
        "text": "The width and speed of a mower can suggest theoretical coverage, but turns, overlap, slopes, obstacles and handling time reduce real productivity. This page expects an observed or otherwise supported effective work rate, not the maximum value from an advertisement. Decide whether the rate already includes loading, cleanup and setup; include those activities consistently so they are not charged twice. If the site is unfamiliar, run a conservative and an optimistic productivity case. A wide spread between estimates identifies uncertainty instead of disguising it as a precise quote."
      },
      {
        "title": "Fixed and variable charges",
        "text": "The hourly portion scales with estimated active labor time. The fixed charge applies once per visit regardless of area in this simple model. It may represent transport, a minimum callout or setup if your pricing agreement uses those terms. Do not enter a charge as both a fixed amount and part of the hourly figure. Fuel, maintenance, payroll burden and business overhead may already be included in a contractor's hourly charge. If you are costing your own operation, distinguish an internal hourly cost from the price you intend to charge a customer."
      },
      {
        "title": "Repeat visits and seasonal conditions",
        "text": "The visit count multiplies the same baseline cost; it does not model a seasonal schedule or automatically apply a subscription discount. Grass growth, weather, access and the interval between visits can change time requirements. A first cut on an overgrown property may take a different amount of time from a routine maintenance visit. Calculate those cases separately instead of multiplying an unusual first visit across an entire season. Confirm whether the quotation includes edging, clipping collection, disposal, taxes or additional treatments, because this tool has no hidden service package."
      },
      {
        "title": "Compare quotes on a common scope",
        "text": "Keep area, frequency and included work consistent when comparing providers. A cheaper total may exclude disposal or travel, while a higher estimate may include services not entered here. The cost per visit is an arithmetic result from your assumptions, not a guaranteed market rate or proof that a contractor is expensive. Record how the area was measured and how productivity was observed. Recheck the actual time after several representative visits and update the baseline when access, equipment or the service scope changes."
      }
    ],
    "faqs": [
      {
        "question": "Does it know lawn mowing prices in my city?",
        "answer": "No. You supply the hourly charge and fixed visit cost. The calculator does not retrieve provider quotes or regional prices. It works in any currency when all monetary entries use that same currency and the service scope is consistent."
      },
      {
        "question": "Should I enter the total property area?",
        "answer": "Enter the mowable lawn area rather than the full property parcel. Buildings, paving, garden beds and other excluded surfaces do not belong in that area. A square-footage calculator can help combine separately measured sections without counting them twice."
      },
      {
        "question": "What if my productivity varies?",
        "answer": "Calculate separate low and high productivity cases using evidence from similar work. Slower coverage raises the labor hours. The calculator cannot infer an appropriate work rate from terrain, mower type or grass height because those are not measured inputs."
      },
      {
        "question": "Can it estimate monthly mowing cost?",
        "answer": "Enter the number of visits expected for the month. The total assumes identical time and pricing for each visit, with no discount or extra service. If some visits have a different scope, calculate and add those groups separately."
      },
      {
        "question": "Are edging and disposal included?",
        "answer": "Only if your hourly or fixed charge and productivity assumptions explicitly include them. There are no automatic extras. Put the service scope beside the estimate so a client or provider can compare the calculation with the actual agreement."
      }
    ],
    "shortTitle": "Lawn Mowing Cost Calculator",
    "keywords": [
      "lawn mowing cost calculator"
    ],
    "icon": "🏠",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "User-supplied effective productivity and pricing; no local quote or hidden service package. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "quarter-mile-calculator",
    "title": "1/4 Mile Calculator — Empirical ET and Trap Speed",
    "category": "Vehicles",
    "description": "Estimate quarter-mile elapsed time and trap speed from race weight, effective horsepower and disclosed empirical coefficients, with performance limits.",
    "formula": "ET seconds = entered ET coefficient × cube root(weight lb/horsepower). Trap mph = entered trap coefficient × cube root(horsepower/weight lb). Defaults: 5.825 and 234.",
    "example": "At 3,200 lb and 400 model horsepower, the weight/power ratio is 8. With coefficients 5.825 and 234, the estimate is 11.65 seconds and 117 mph.",
    "intro": "The 1/4 mile calculator gives a rough power-to-weight estimate of elapsed time and trap speed for a quarter-mile run. Both the slash wording and the “1 4 of a mile calculator” variant refer to this same distance and model, so they share one page. Race weight includes the driver and fuel. Horsepower is an input to an empirical correlation, not a measured output of this page. The defaults illustrate a common cube-root model; the coefficients remain visible so its assumptions can be reviewed rather than hidden behind a result.",
    "howTo": [
      "Enter total race weight in pounds and the effective horsepower basis used for your comparison.",
      "Review the elapsed-time and trap-speed coefficients. Change them only when you have a consistent documented model or calibration.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Correlation is not a vehicle simulation",
        "text": "The cube-root relationships compress many real influences into empirical constants. They do not model a launch, gear changes, torque curve, aerodynamic drag, traction control, tyre behavior or track conditions. An estimate can therefore differ considerably from an actual timed run. The elapsed-time coefficient and speed coefficient are separate assumptions, and matching one output does not validate the other. Treat the results as an order-of-magnitude comparison or sensitivity exercise, then use reliable closed-course data to assess real performance."
      },
      {
        "title": "Keep horsepower and weight on the same basis",
        "text": "Published engine output, chassis-dynamometer wheel power and a model's effective power are different quantities. This tool does not apply a guessed drivetrain-loss percentage to convert between them. Do not compare two cars using different horsepower definitions without acknowledging that mismatch. Weighing a car without its driver and then entering that value as race weight also changes the estimate. Include the conditions of each input in your notes: load, fuel, passenger count and the origin of the horsepower figure. A coefficient calibrated to one basis may not transfer to another."
      },
      {
        "title": "What a quarter mile represents",
        "text": "A quarter mile is 1,320 feet or 402.336 metres. The calculator estimates elapsed time over that distance and a modelled trap-speed value; it does not produce reaction time, a 0–60 time or a safe road speed. Drag-strip elapsed time and trap speed are distinct measurements and should not be replaced by a phone stopwatch on public roads. Restrict comparisons to legitimate closed-course timing records. The calculation is not a driving instruction, a vehicle certification or a reason to test limits in uncontrolled traffic."
      },
      {
        "title": "Sensitivity and calibration",
        "text": "The model changes smoothly with the weight-to-power ratio. Holding coefficients constant, doubling that ratio multiplies ET by the cube root of two and reduces estimated trap speed by the reciprocal factor. This can help compare assumptions without claiming a modification will deliver the calculated improvement. Changing tyres or gearing can change real elapsed time without changing the entered peak horsepower. If you calibrate against an observed run, document the conditions and avoid presenting that calibration as universal. Reporting three decimal places is display precision, not a three-decimal prediction of a future run."
      }
    ],
    "faqs": [
      {
        "question": "Is this a guaranteed quarter-mile time?",
        "answer": "No. It is an empirical estimate using your inputs and the shown coefficients. Vehicle setup, driver behavior, traction, weather and track conditions are not simulated. Actual verified timing is needed to establish performance, and a calculated result is not a safety assessment."
      },
      {
        "question": "Should weight include the driver?",
        "answer": "Yes. Use the race weight for the modelled run, including driver, fuel and any other carried load. A brochure curb-weight figure can be on a different basis, so label it clearly if that is the only information available."
      },
      {
        "question": "Can I enter wheel horsepower?",
        "answer": "You can enter a value only with a clear model basis and consistent coefficients. This page does not silently convert wheel to engine power or estimate drivetrain losses. Comparisons are meaningful only when the horsepower basis is consistent between cases."
      },
      {
        "question": "Why expose two coefficients?",
        "answer": "Elapsed time and trap speed use separate empirical constants. Exposing them makes the model reviewable and allows a documented calibration. Replacing the constants without evidence can make any answer look plausible, so keep the source and assumptions with the result."
      },
      {
        "question": "Does this estimate an eighth mile too?",
        "answer": "No. The output is for a quarter mile. Eighth-mile performance is not obtained by simply halving quarter-mile time or using the same coefficients unchanged. Use a model designed and checked for the desired distance."
      }
    ],
    "shortTitle": "1/4 Mile Calculator",
    "keywords": [
      "1/4 mile calculator",
      "1 4 of a mile calculator"
    ],
    "icon": "🚗",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Disclosed empirical cube-root correlation only; no traction simulation, conversion between hp bases or performance guarantee. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "firewood-cord-calculator",
    "title": "Firewood Calculator — Full Cords from a Stack",
    "category": "Home",
    "description": "Calculate full-cord equivalents, cubic feet, cubic metres and indicative price from measured rectangular firewood stack dimensions and a full-cord rate.",
    "formula": "Stacked ft³ = length ft × depth ft × height ft. Full-cord equivalent = stacked ft³/128. Indicative price = cords × user-entered price per full cord.",
    "example": "A neatly stacked 8 × 4 × 4 ft rectangular stack occupies 128 ft³, equivalent to one full cord. An 8 × 4 × 2 ft stack occupies 64 ft³, or half a cord.",
    "intro": "This firewood calculator converts a measured rectangular stack into full-cord equivalents. A full cord is a stacked-volume unit of 128 cubic feet, including ordinary spaces between pieces; it is not 128 cubic feet of solid wood. Measure the actual stack length, depth and height in feet. The additional price output uses your full-cord rate and does not fetch a local seller price. The calculation helps describe a delivery or compare quantities, while wood species, moisture and heating characteristics remain separate questions.",
    "howTo": [
      "Measure a reasonably rectangular stacked pile in feet: length, full depth and height.",
      "Enter a price per full cord if you want a price comparison, or zero to focus only on quantity.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "A stack has three dimensions",
        "text": "The front face alone cannot determine volume. Two stacks can have the same length and height but different depths and therefore different full-cord equivalents. Record the depth across the complete stack, not only a nominal log length if several rows are present. Split an uneven pile into non-overlapping rectangular sections and sum their volumes, keeping a note of how each was measured. A larger outer rectangle that includes a substantial empty recess overstates the occupied stacked volume. The geometry assumes the measured dimensions describe the stack reasonably well."
      },
      {
        "title": "Face cord, rick and loose loads",
        "text": "A term such as face cord or rick may describe a stack's front dimensions without a fixed depth. It is not safe to assume it always equals one third of a full cord. The actual dimensions determine the equivalent. Likewise, a loose pile or truckload has a different packing arrangement from a neatly stacked pile. This tool supplies no universal loose-to-stacked conversion factor. Ask a seller for the basis of their advertised quantity and a receipt with agreed units. A mathematical estimate does not determine whether a sale complies with local weights-and-measures rules."
      },
      {
        "title": "Volume does not determine heat",
        "text": "Equal stacked volumes can contain different amounts of wood material and provide different useful heat because piece sizes, species, moisture and packing differ. The calculator does not predict burn time, energy content, seasoning readiness or appliance suitability. Those require additional measurements or product guidance. A low price per volume is not necessarily a low cost per useful heat unit. Keep purchasing comparisons on the same volume basis first, then consider quality information separately rather than inventing a universal density or energy figure."
      },
      {
        "title": "Price, rounding and records",
        "text": "Multiplying the full-cord equivalent by a price per full cord gives a proportional amount. It excludes delivery, stacking, taxes, minimum orders and negotiated pricing unless already included in that unit rate. A seller may charge by a different package, so do not apply the output as a binding invoice. Measure after stacking when you need a stacked-volume estimate and retain the three measurements with the receipt. Do not round each dimension aggressively before multiplying. The displayed precision does not remove uncertainty from an irregular stack or an unclear sales unit."
      }
    ],
    "faqs": [
      {
        "question": "How many cubic feet are in a full cord?",
        "answer": "A full cord is 128 cubic feet of stacked volume. The standard example is 8 feet long, 4 feet deep and 4 feet high. Other dimensions can represent the same volume, so calculate all three measurements rather than relying only on appearance."
      },
      {
        "question": "Is a face cord always one third of a cord?",
        "answer": "No universal fraction is assumed here. Its actual depth matters. An 8-by-4-foot face with a 16-inch depth is about 42.67 cubic feet under rectangular geometry, but another log length changes that quantity. Measure and confirm the seller definition."
      },
      {
        "question": "Can I calculate from a truck bed size?",
        "answer": "A loose load is not a neatly stacked rectangular pile, so the stack method cannot reliably infer full cords from nominal truck capacity. There is no packing factor in this calculator. Stack and measure the wood or use an independently validated quantity method."
      },
      {
        "question": "Does the price include delivery?",
        "answer": "Only if the supplied price per full cord includes it on the same proportional basis. Flat delivery charges and minimum orders are not modelled separately. Keep the volume comparison distinct from the actual commercial quote and its service terms."
      },
      {
        "question": "Can this estimate firewood weight?",
        "answer": "No. Weight requires information about species, moisture and packing or a direct scale measurement. The output is stacked volume only. It would be misleading to attach one universal weight to every full cord of firewood."
      }
    ],
    "shortTitle": "Firewood Calculator",
    "keywords": [
      "firewood calculator cord",
      "firewood calculator"
    ],
    "icon": "🏠",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Measured rectangular stacked volume; no universal face-cord or loose-load conversion. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "nether-portal-calculator",
    "title": "Nether Portal Calculator — Coordinate Conversion",
    "category": "Technology",
    "description": "Convert Overworld and Nether X/Z coordinates using the standard 8:1 scale, with exact and lower integer targets and an unchanged Y reference.",
    "formula": "Overworld to Nether: X and Z divide by 8. Nether to Overworld: X and Z multiply by 8. Y is displayed as an unchanged reference, not a scaled coordinate.",
    "example": "Overworld X 800, Z −1,600 corresponds to exact Nether X 100, Z −200. Overworld X −9 gives exact Nether −1.125 and lower integer block target −2.",
    "intro": "The Nether portal calculator converts horizontal coordinates between the Overworld and the Nether using the standard eight-to-one scale. Enter X and Z in the source dimension and choose the direction. The tool shows both the exact arithmetic target and a lower integer block coordinate for planning. Y is kept as a reference because this horizontal scaling does not multiply height. A converted coordinate is not a promise that the game will create a portal there or link to your preferred existing portal. It is one part of planning, not a simulation of the world.",
    "howTo": [
      "Record X, Z and a reference Y in the source dimension, preserving negative signs.",
      "Choose Overworld to Nether or Nether to Overworld. Check edition and server settings before relying on the standard scale.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Direction controls the scale",
        "text": "Going from the Overworld to the Nether divides horizontal coordinates by eight. Going back multiplies them by eight. These operations are inverses on exact coordinates, so multiplying the exact Nether result by eight recovers the original Overworld value. An integer planning coordinate is rounded and will not necessarily round-trip exactly. Do not change the direction just because you want a smaller number: choose the actual source and destination dimensions. Also keep X and Z in their correct fields instead of swapping them while copying a position."
      },
      {
        "title": "Negative coordinates and integer targets",
        "text": "A lower integer target uses the mathematical floor function, which rounds toward negative infinity. For −1.125 the floor is −2, whereas truncating toward zero would give −1. The calculator shows the exact result beside that integer target so you can see the difference. This choice identifies a planning block, not an official prediction of every portal-placement algorithm. Rounding a horizontal coordinate changes the corresponding Overworld location by up to several blocks. If exact alignment matters, retain the fractional arithmetic target in your planning notes."
      },
      {
        "title": "Scaling is different from linking",
        "text": "Terrain, available space, existing portals and game or server behavior can affect the destination reached after travel. This page does not inspect a world seed, search nearby portals or reproduce version-specific search radii. It does not calculate frame dimensions or tell you which blocks are safe to stand on. Confirm each portal's actual position and test both directions in your own world. If travel returns to an unexpected portal, a correct division by eight does not rule out other linking influences."
      },
      {
        "title": "World settings and saved coordinates",
        "text": "The standard scale is appropriate for ordinary 8:1 planning. Custom dimensions, modified servers and unusual world settings can use different behavior, so do not assume a generic converter overrides those configurations. The input range is limited to ±30,000,000 for horizontal planning and the output is rejected if scaling exceeds that range. Reference Y accepts a broad numerical range rather than enforcing a particular edition's build height; it does not certify that a destination is buildable. Save coordinates with their dimension and distinguish observed portal positions from proposed targets."
      }
    ],
    "faqs": [
      {
        "question": "Why divide Overworld coordinates by eight?",
        "answer": "The standard Nether horizontal scale makes one Nether block correspond to eight Overworld blocks. The calculator applies that relation to X and Z. It does not apply an eightfold change to height or claim that every modified world uses the same scale."
      },
      {
        "question": "Does Y change?",
        "answer": "The converter displays your Y value unchanged as a reference. That is separate from whether a portal can be placed at that height or how a game version chooses a destination. No terrain or build-height check is performed here."
      },
      {
        "question": "Why does −9 produce integer target −2?",
        "answer": "Dividing −9 by eight gives −1.125. The lower integer block target uses floor, which is −2 for that number. The exact value remains visible so you can distinguish a mathematical target from a rounded block coordinate."
      },
      {
        "question": "Will this guarantee two portals link?",
        "answer": "No. It converts coordinates only. Existing portals, terrain, edition, version and server settings can affect linking. Check actual positions and test travel in both directions rather than treating the arithmetic output as a guarantee of game behavior."
      },
      {
        "question": "Can it convert custom dimension scales?",
        "answer": "This page is limited to the standard 8:1 Overworld/Nether relation. A custom scale requires the relevant world configuration and a different conversion. Do not use the tool as a replacement for server-specific documentation or mod instructions."
      }
    ],
    "shortTitle": "Nether Portal Calculator",
    "keywords": [
      "nether portal calculator"
    ],
    "icon": "🧭",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Standard 8:1 horizontal arithmetic; no world inspection, placement or linking guarantee. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "arv-calculator",
    "title": "ARV Calculator — Comparable Sales Estimate",
    "category": "Money",
    "description": "Estimate indicative after-repair value from matching sold prices and floor areas, subject size, a supported adjustment and user-entered project costs.",
    "formula": "Indicative ARV = mean of each comparable sold price/floor area × subject floor area × (1 + adjustment/100). Net before acquisition = ARV − entered project costs.",
    "example": "Comparable sales of 200,000/1,000 ft² and 330,000/1,500 ft² average 210 per ft². A 1,200 ft² subject with zero adjustment gives an indicative ARV of 252,000.",
    "intro": "The ARV calculator estimates an indicative after-repair value from comparable sold prices and their floor areas. Each comparable contributes equally through its price per square foot. You then apply that average to the subject property's size and any evidence-supported percentage adjustment you enter. This is a transparent screening model, not a professional appraisal or a predicted selling price. It does not find comparable properties, verify their condition or decide which transaction is relevant. The quality of those selections matters more than the number of displayed decimals.",
    "howTo": [
      "Enter one to twenty sold prices separated by commas and the matching floor areas in the same order.",
      "Enter the subject floor area, a supported adjustment from −100% to +100%, and combined rehab, holding and selling costs if reviewing project economics.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Choose comparable evidence",
        "text": "Use actual sold transactions whose location, property type, size, condition and timing are relevant to the intended finished subject. Asking prices are different from completed sale prices. A nearby property may still be a poor comparable if its features, tenure or use differ. This tool cannot validate those facts. Record the source and date of each sale and note any uncertainty before copying the numbers into the fields. When evidence is weak, report a broad scenario range instead of presenting the arithmetic average as an independently verified market value."
      },
      {
        "title": "Equal weighting and area basis",
        "text": "The model computes each sale's price per square foot and takes a simple mean. It does not divide combined prices by combined area, which would give larger comparables more influence. All entries must use a consistent floor-area definition and the same currency. Mixing gross building area with usable interior area changes the ratios. An anomalous sale can move a small sample's average substantially, so inspect each ratio rather than relying only on the final output. The calculator does not automatically discard outliers or choose a statistically optimal weighting."
      },
      {
        "title": "Adjustments and project costs",
        "text": "The adjustment changes the entire comparable estimate by the percentage you supply. It is not a substitute for an appraisal's property-specific adjustment grid, and this page supplies no default market appreciation or renovation uplift. Enter zero if you have no defensible basis for a change. The combined cost field is subtracted after value estimation and should contain the rehab, holding and selling costs you actually want to compare. The resulting amount is before acquisition price and target profit; it is not a recommended offer or a lender-approved borrowing limit."
      },
      {
        "title": "Decision boundaries",
        "text": "ARV describes an assumed completed-condition value, while today's as-is value may be different. A renovation budget does not automatically add the same amount to resale value. Delays, financing terms, taxes, local restrictions and changes in market demand can alter project economics. This tool contains no universal seventy-percent rule and does not promise a profitable flip. Compare several credible sale selections and cost cases, retain an explicit contingency outside this simplified model, and consult appropriately qualified property and financial professionals before committing money."
      }
    ],
    "faqs": [
      {
        "question": "What does ARV mean?",
        "answer": "ARV means after-repair value: an assumed market value after a specified improvement scope is completed. This calculator estimates it from user-selected sold comparables. It does not verify the renovation plan, inspect the property or establish a professionally appraised value."
      },
      {
        "question": "Why are prices and areas entered in matching order?",
        "answer": "Each sale price is divided by the floor area for that same comparable. Swapping entries creates false price-per-area ratios. The lists must have equal length, and each value must be positive. Keep the original transaction record beside your input list."
      },
      {
        "question": "Does a 50,000 renovation add 50,000 to value?",
        "answer": "Not necessarily. Cost and market value are different. The calculator does not assume dollar-for-dollar renovation gains; costs are entered separately for project screening. Completed-condition comparable evidence is needed to support the after-repair valuation assumption."
      },
      {
        "question": "Is value less costs my maximum purchase offer?",
        "answer": "No. That amount still precedes acquisition price, target profit and costs you did not enter. It is one bookkeeping comparison, not bidding advice. A complete investment assessment also needs financing, contingencies, taxes, timing and independently checked market information."
      },
      {
        "question": "Can I use asking prices as comparables?",
        "answer": "The method is designed around sold prices. Asking prices reflect seller intentions rather than completed transactions and can bias an estimate. If only listings are available, label that limitation clearly and avoid presenting the output as evidence from actual sales."
      }
    ],
    "shortTitle": "ARV Calculator",
    "keywords": [
      "arv calculator"
    ],
    "icon": "🏘️",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "Transparent equal-weight comparable price/area model; no appraisal, automatic market adjustment or investment recommendation. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  },
  {
    "slug": "breastfeeding-calorie-calculator",
    "title": "Breastfeeding Calorie Calculator — General Reference Range",
    "category": "Everyday",
    "description": "Add the CDC general breastfeeding energy range to a known pre-pregnancy reference intake, with clear limits and no weight-loss or milk-output prediction.",
    "formula": "General illustrative daily range = entered pre-pregnancy reference intake + 330 to 400 kcal/day. This population reference is not an individualized dietary prescription.",
    "example": "A known reference intake of 2,000 kcal/day plus the general 330–400 kcal increment gives an illustrative range of 2,330–2,400 kcal/day.",
    "intro": "This breastfeeding calorie calculator adds a general additional-energy range to a pre-pregnancy reference intake that you already know from appropriate records or a clinician. It does not estimate your baseline from height, weight or age, and it does not prescribe a diet. CDC describes an additional 330–400 kcal per day for well-nourished breastfeeding mothers compared with their pre-pregnancy intake. The displayed result is a population-reference illustration. Individual circumstances need review with a qualified clinician or dietitian, especially when the baseline itself is uncertain.",
    "howTo": [
      "Enter a pre-pregnancy reference intake in kcal/day from appropriate records or your clinician. Do not enter pregnancy intake or a weight-loss target.",
      "Read the general range and its stated population scope. The example value is not a recommendation for you.",
      "Click Calculate result to submit these values. Input edits keep the previous result until the next click.",
      "Compare the supporting outputs with the worked example and retain the input units with your result."
    ],
    "considerations": [
      {
        "title": "Start with a defensible reference",
        "text": "The only personal number used here is the reference you supply. If that number is a guess, adding an accurate increment does not make the total a reliable personal target. A food-tracking application's default, a single unusual day or an unrelated dieting plan may not represent your pre-pregnancy intake. Keep the source of the baseline with the calculation and discuss uncertainty during nutritional care. The tool accepts inputs between 500 and 5,000 kcal/day to bound the interface; those accepted limits are not recommended minimums or maximums for a breastfeeding person."
      },
      {
        "title": "What the range does and does not mean",
        "text": "The lower and upper outputs are obtained by adding 330 and 400 respectively. They are not a personalized confidence interval, a milk-volume estimate or a guarantee of adequate nutrition. The calculation does not infer feeding exclusivity, multiple infants, health conditions or current activity. It does not scale calories linearly by the fraction of feeds because that would require an individually appropriate model. The appropriate intake can differ from this illustration, and a qualified professional should interpret personal circumstances rather than an online range alone."
      },
      {
        "title": "Avoid double counting and deficit calculations",
        "text": "Use a pre-pregnancy reference on the same daily basis. If a supplied total already includes a breastfeeding allowance, adding another increment would count it twice. Do not subtract an aggressive weight-loss deficit from the displayed range or treat the upper endpoint as a rigid ceiling. This page has no deficit mode, weight-loss projection or exercise-calorie offset. Its limited purpose is to explain the arithmetic of a general increment. It cannot assess whether a chosen food pattern provides enough nutrients or whether a change in intake affects feeding."
      },
      {
        "title": "Keep a useful record for care",
        "text": "If you share this calculation with a clinician or dietitian, include the baseline source and date, the fact that the increment is a general reference, and any reason your situation may differ. Record questions rather than treating the output as a completed care plan. A total number of calories says nothing by itself about meal composition, hydration or a need for supplements. The calculator does not inspect health records or infant growth, and it cannot reassure you about feeding concerns. Seek individualized help for those questions instead of repeatedly changing the input until the range looks desirable."
      }
    ],
    "faqs": [
      {
        "question": "Does this calculate how many calories I personally need?",
        "answer": "No. It adds a general reference increment to a baseline you provide. It does not calculate an individualized energy requirement, assess nutrition or replace a clinician or dietitian. The default example is solely for explaining the addition."
      },
      {
        "question": "Can I enter my pregnancy calorie target?",
        "answer": "The stated comparison is with a pre-pregnancy reference intake. A pregnancy target or a total already adjusted for breastfeeding can use a different basis and lead to double counting. Discuss the appropriate baseline if you are unsure which number applies."
      },
      {
        "question": "Does mixed feeding use half the increment?",
        "answer": "This calculator does not use a percentage-of-feeds multiplier. A simple proportional adjustment could imply unsupported personal accuracy. Feeding circumstances and individual needs should be considered with a qualified professional rather than inferred from one percentage entered online."
      },
      {
        "question": "Can it help set a weight-loss deficit?",
        "answer": "No. It includes no weight-loss, deficit or predicted milk-supply mode. Do not reinterpret the population reference as permission to restrict intake or offset meals with exercise estimates. Personal nutritional goals during breastfeeding need appropriate professional guidance."
      },
      {
        "question": "What if I do not know my reference intake?",
        "answer": "The tool cannot determine it from the available input. Avoid treating an arbitrary application default as a verified baseline. Ask a clinician or dietitian about an appropriate reference and retain the source before using the arithmetic illustration."
      }
    ],
    "shortTitle": "Breastfeeding Calorie Calculator",
    "keywords": [
      "breastfeeding calorie calculator"
    ],
    "icon": "📋",
    "accent": "blue",
    "updatedAt": "2026-10-02",
    "limitations": "General reference addition for well-nourished breastfeeding mothers only; not individualized dietary, weight-loss or milk-supply advice. Results describe the entered model only. Check source measurements and assumptions independently. Positive numeric inputs smaller than 0.000000001 are outside the supported calculation range. Calculator inputs are processed locally by the shared browser interface; no professional evaluation is performed."
  }
];
