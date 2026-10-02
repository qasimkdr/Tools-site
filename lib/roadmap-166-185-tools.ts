import type {Tool} from "./tools";
export const roadmap166Tools:Tool[] = [
  {
    "slug": "vpd-calculator",
    "title": "VPD Calculator \u2014 Air, Leaf and Relative Humidity",
    "shortTitle": "VPD Calculator",
    "category": "Home",
    "description": "Calculate air or leaf vapor pressure deficit in kPa, or relative humidity from air temperature and dew point, with explicit FAO formula assumptions.",
    "intro": "This VPD calculator compares actual water-vapor pressure with saturation pressure at a supplied temperature. Air VPD uses the air temperature; leaf VPD uses a separately measured leaf temperature. The RH calculator mode works in the other direction: it estimates relative humidity from air temperature and dew point. These are related physical quantities, so one canonical tool covers them with clear modes rather than creating competing pages. The result describes your measurements and the stated equation. It does not select a humidity target for a crop, prescribe ventilation settings or assess whether a room is healthy.",
    "formula": "es(T) = 0.6108 \u00d7 exp(17.27T/(T+237.3)) kPa. Actual pressure = es(air) \u00d7 RH/100 or es(dew point). VPD = es(reference temperature) \u2212 actual pressure. RH = 100 \u00d7 actual/es(air).",
    "example": "At 25 \u00b0C and 60% RH, saturation pressure is about 3.1678 kPa, actual pressure is 1.9007 kPa, and air VPD is 1.2671 kPa. A 24 \u00b0C leaf has a smaller deficit under the same air conditions.",
    "howTo": [
      "Choose Air VPD, Leaf VPD, or RH from dew point before interpreting the second field.",
      "Enter measured temperatures in Celsius. The approximation is restricted to 0\u201350 \u00b0C liquid-water conditions.",
      "For leaf mode, supply a separate leaf temperature; for RH mode, enter a dew point no higher than air temperature.",
      "Click Calculate result. Editing measurements keeps the previous submitted output until the next click."
    ],
    "considerations": [
      {
        "title": "Three modes, one vapor-pressure balance",
        "text": "Relative humidity is a percentage of saturation pressure at the current air temperature, while VPD is a pressure difference. They cannot be substituted as if their units were identical. At a fixed air temperature, increasing RH lowers air VPD. At a fixed RH percentage, raising air temperature changes both saturation and actual vapor pressure. Leaf mode retains the surrounding air actual pressure but changes the saturation reference to the leaf temperature. This makes a measured leaf temperature useful without pretending that leaves always equal the air sensor."
      },
      {
        "title": "Use measurements from the same place and time",
        "text": "Pair air temperature and humidity from a consistent observation, preferably close to the area you are evaluating. Combining yesterday\u2019s humidity with today\u2019s temperature produces an arithmetic answer for a synthetic state rather than the measured environment. A leaf sensor or infrared reading has its own placement and calibration limits. Label the crop location, observation time, instrument and measurement basis in your records. The calculator cannot correct a sensor offset, locate a poorly positioned probe or average fluctuating conditions automatically."
      },
      {
        "title": "Interpret negative leaf deficits honestly",
        "text": "Air VPD is non-negative for the accepted RH range. Leaf VPD can be negative when the supplied leaf temperature has a saturation pressure below the air actual vapor pressure. The tool preserves that sign instead of silently changing the answer to zero. Such inputs indicate a condensation-related condition in this simplified balance, rather than a negative evaporative demand to be used as a control setting. Check the temperature and humidity observations before deciding what the result means for a particular plant, surface or room."
      },
      {
        "title": "Celsius, pressure units and formula scope",
        "text": "All temperature fields take degrees Celsius, not Fahrenheit. Convert Fahrenheit by subtracting 32 and multiplying by five ninths before entry. Pressure outputs are kilopascals, so multiplying by one thousand gives pascals. The displayed decimal places are calculation precision, not instrument accuracy. This page uses the published FAO saturation-pressure approximation over liquid water and excludes subzero ice conditions. It does not calculate wet-bulb temperature, enthalpy, HVAC equipment capacity, evapotranspiration or the full Penman\u2013Monteith model."
      },
      {
        "title": "Compare scenarios without creating a universal target",
        "text": "Run separate measured cases to see how the deficit changes, and keep the mode and units with each saved result. Change one observation at a time if you want to understand the equation\u2019s sensitivity. A warmer leaf and cooler leaf can have different deficits under the same surrounding air. Species, growth stage, radiation, air movement and water availability are outside these inputs. A crop-specific target requires an appropriate horticultural reference; the calculator deliberately supplies neither a universal optimal band nor automatic heater, fan or irrigation instructions."
      }
    ],
    "faqs": [
      {
        "question": "What does RH calculator mean here?",
        "answer": "RH means relative humidity of air. This page estimates it from air temperature and dew point; it does not handle Rh blood groups or a medical test. Choose the dew-point mode so the second input is interpreted as Celsius rather than percent."
      },
      {
        "question": "Can dew point exceed air temperature?",
        "answer": "Not in the unsupersaturated liquid-water state supported here. The input check rejects that combination. Recheck the measurement times, units and calibration instead of accepting a percentage above one hundred as ordinary humidity."
      },
      {
        "question": "Is leaf VPD the same as air VPD?",
        "answer": "Only when the leaf and air temperatures are equal in this model. Actual surrounding vapor pressure is shared, but the saturation reference changes. A leaf temperature is therefore a separate measured input, not a fixed offset assumed by the calculator."
      },
      {
        "question": "Can I use Fahrenheit or subzero measurements?",
        "answer": "Convert Fahrenheit to Celsius first. Inputs below zero Celsius are outside this page\u2019s declared liquid-water range. An ice-saturation calculation uses a different treatment and is not silently approximated by this tool."
      },
      {
        "question": "Does the result recommend a humidity setting?",
        "answer": "No. The outputs describe a pressure balance using the entered observations. They are not crop-specific recommendations, a mould assessment, an indoor-health determination or a control-system design. Use the appropriate specialist methodology for those decisions."
      }
    ],
    "limitations": "Liquid-water approximation over 0\u201350 \u00b0C; simultaneous user measurements only. No crop target, ice formula or equipment sizing. Inputs are processed locally; no weather feed is loaded.",
    "keywords": [
      "vpd calculator",
      "rh calculator"
    ],
    "icon": "\ud83c\udfe0",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "goat-gestation-calculator",
    "title": "Goat Gestation Calculator \u2014 Kidding Date Window",
    "shortTitle": "Goat Gestation Calculator",
    "category": "Lifestyle",
    "description": "Estimate a goat kidding date and a 145\u2013155-day planning window from a recorded breeding date, with clear limits on conception and pregnancy certainty.",
    "intro": "The goat gestation calculator turns a recorded breeding date into a planning date for kidding. It uses 150 calendar days as a convenient central estimate and shows a broader 145\u2013155-day window. A date calculation cannot establish pregnancy or identify the actual fertilization date. Its useful role is organizing records, checking a calendar and discussing preparations with a veterinarian or experienced herd manager. The central date should be kept with its range rather than treated as an appointment that every doe will meet. This tool neither diagnoses pregnancy nor predicts the number or condition of kids.",
    "formula": "Central planning date = recorded breeding date + 150 calendar days. Planning window = breeding date + 145 through + 155 days. The breeding date itself is day zero.",
    "example": "A recorded breeding date of 2026-10-02 gives a central estimate of 2027-03-01, with a 2027-02-24 through 2027-03-06 planning window. These are calendar estimates, not evidence that conception occurred.",
    "howTo": [
      "Choose the documented breeding date using the date field. Do not substitute the day pregnancy was first suspected.",
      "Record whether the date represents observed mating, insemination or exposure to a buck over several days.",
      "Click Calculate result and review the central date together with both window endpoints.",
      "Keep the input and date basis in the herd record, and confirm pregnancy and management questions with your veterinarian."
    ],
    "considerations": [
      {
        "title": "Recorded mating and conception differ",
        "text": "A single observed breeding date is more specific than a long exposure period, but neither proves the exact conception date. If a doe was exposed across multiple days, calculate the earliest and latest plausible breeding dates separately. The combined planning interval should reflect that uncertainty. Selecting the midpoint of a long exposure period and displaying it without context would create misleading precision. Retain the original breeding record so a later pregnancy assessment can be interpreted on its actual evidence."
      },
      {
        "title": "Calendar days and date boundaries",
        "text": "The calculation adds elapsed calendar days and includes weekends and holidays. It does not count business days or treat every month as thirty days. Gregorian leap years and month lengths are handled by UTC calendar arithmetic, avoiding a time-zone shift in the displayed date. Accepted recorded dates are between 1900 and 2200; impossible dates are rejected rather than rolled into the following month. The starting date is day zero, so adding one day produces the following calendar date."
      },
      {
        "title": "Build a useful herd planning record",
        "text": "Keep the doe identifier, breeding date, sire or insemination record and source of the date beside the calculated window. Record subsequent veterinary findings separately instead of editing the original event to force agreement with an estimate. For several does, run each record independently and group the resulting windows on your own calendar. The page does not store a herd database, synchronize reminders, book veterinary appointments or monitor an animal. A saved date is a planning aid that still needs practical management."
      },
      {
        "title": "Range is a planning convention",
        "text": "The interval reflects a broad published gestation range; it is not a probability distribution or confidence interval for an individual animal. The center is rounded for scheduling convenience. Breed, litter characteristics and the accuracy of the breeding record can influence the actual timeline, but this tool has no validated adjustment coefficients for those features. It therefore avoids asking for them and generating unsupported individualized dates. A veterinary assessment can supply context that a calendar-only model cannot infer."
      },
      {
        "title": "Use observations for animal-care decisions",
        "text": "Do not wait for the displayed central date to evaluate a concerning change in an animal. Likewise, an apparently early or late date relative to this tool does not by itself diagnose a problem. Questions about labor, appetite, discharge, discomfort or offspring need direct professional assessment. The calculator provides no medication, induction, assistance or treatment instructions. Its boundaries are deliberate: accurate day addition is useful, while pretending that a breeding date alone determines the condition of the doe or kids would not be."
      }
    ],
    "faqs": [
      {
        "question": "How long is goat gestation?",
        "answer": "This planning page uses a 145\u2013155-day range and a rounded 150-day center. Published husbandry references may quote narrower typical averages. Those figures describe groups; they do not identify the exact kidding date for an individual doe."
      },
      {
        "question": "Can this confirm pregnancy?",
        "answer": "No. A breeding record and elapsed calendar days cannot establish that pregnancy occurred or continues. Use the veterinarian\u2019s appropriate assessment and keep its findings separate from the original breeding date."
      },
      {
        "question": "What if the buck was present for two weeks?",
        "answer": "Calculate the first and last plausible breeding dates separately, then retain the resulting wider planning interval. The calculator accepts one date at a time and does not invent a conception date within an exposure period."
      },
      {
        "question": "Does breed change the displayed date?",
        "answer": "No breed-specific adjustment is applied. The tool uses the declared general range rather than an unsupported coefficient. Discuss individual management and gestation interpretation with the professional responsible for the herd."
      },
      {
        "question": "Are leap days included?",
        "answer": "Yes. Dates are added as Gregorian calendar days using UTC date arithmetic. February lengths and year transitions are handled directly. Invalid calendar inputs are rejected, and the original recorded date counts as day zero."
      }
    ],
    "limitations": "General 150-day planning center with a 145\u2013155-day window, not a pregnancy test, individual forecast or veterinary assessment. Date inputs stay on this device.",
    "keywords": [
      "goat gestation calculator"
    ],
    "icon": "\ud83d\udcc5",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "gas-oil-mix-calculator",
    "title": "50 to 1 Gas Oil Mix Calculator \u2014 Verified Ratios",
    "shortTitle": "50 to 1 Gas Oil Mix Calculator",
    "category": "Home",
    "description": "Calculate two-stroke oil volume for a verified gasoline-to-oil ratio, including 50:1, using litres, US gallons or imperial gallons with clear units.",
    "intro": "The 50 to 1 gas oil mix calculator answers a specific quantity question: how much oil corresponds to a measured amount of gasoline at the engine manufacturer\u2019s specified volume ratio? Its default demonstrates fifty parts gasoline to one part oil. You can enter another documented ratio, but the page does not select a ratio for your engine, approve an oil or replace the current operator manual. The gasoline input is measured before oil is added. Outputs give oil in millilitres, litres and US fluid ounces so you can compare measuring-container markings without confusing a fluid volume with a mass.",
    "formula": "Oil volume = gasoline volume \u00f7 gasoline:oil ratio. One US gallon is 3.785411784 L; one imperial gallon is 4.54609 L. One US fluid ounce is 29.5735295625 mL.",
    "example": "For 5 L of gasoline at 50:1, oil = 5/50 L = 0.1 L = 100 mL. One US gallon at the same ratio requires about 75.7082 mL, or 2.56 US fl oz.",
    "howTo": [
      "Read the current engine and oil instructions; enter their gasoline-to-oil volume ratio, not a guess based on equipment type.",
      "Measure the gasoline volume before adding oil and select litres, US gallons or imperial gallons explicitly.",
      "Click Calculate result, then compare millilitres and the converted oil unit with the markings on your measuring vessel.",
      "Keep the documented ratio and gasoline amount with the result; follow manufacturer handling, mixing and storage instructions."
    ],
    "considerations": [
      {
        "title": "Which amount is the ratio applied to?",
        "text": "A ratio of 50:1 describes fifty equal volume units of gasoline for one equal volume unit of oil. It does not mean oil is one fiftieth of the final combined mixture. For five litres of gasoline, adding one tenth of a litre of oil produces roughly 5.1 litres of combined liquid by simple volume addition. If your starting quantity is the total finished blend instead, the inputs here do not represent that question. Measure or determine the gasoline component first, using the appropriate product instructions."
      },
      {
        "title": "Gallon and ounce definitions matter",
        "text": "US and imperial gallons are different volumes. Choosing the wrong gallon option changes the oil quantity even though the entered number is unchanged. The oil ounce output is explicitly US fluid ounces; it is neither an imperial fluid ounce nor an ounce by weight. A scale marked in mass units cannot use this output directly without product-specific density information. Keep the selected gasoline unit visible in your notes, especially when an operator manual, fuel container and online example originate in different countries."
      },
      {
        "title": "A ratio calculator cannot identify equipment compatibility",
        "text": "Two engines that look similar may require different products or instructions. The default is an arithmetic demonstration, not a universal recommendation for chainsaws, trimmers, motorcycles or every two-stroke engine. The accepted range of one to one thousand parts gasoline per part oil is a numerical bound and does not establish that every accepted ratio is usable. Follow the actual manufacturer\u2019s current manual for the particular engine, its age and the approved oil. Do not infer compatibility from a number passing input validation."
      },
      {
        "title": "Measuring precision and small batches",
        "text": "The formula scales linearly: twice the gasoline at the same ratio needs twice the oil. However, a tiny calculated amount may be difficult to measure accurately with the available vessel. Displayed decimal places do not make a coarse bottle marking exact. Choose measurement equipment and batch sizes permitted by the manufacturer rather than relying on rounded guesses. The page does not account for oil retained in a container, fuel spilled during transfer, contamination, temperature-related volume changes or the accuracy of your gasoline measurement."
      },
      {
        "title": "Check arithmetic before following handling instructions",
        "text": "To verify a result, put gasoline and oil in the same volume unit and divide gasoline by the calculated oil. That quotient should recover the entered ratio. At 50:1, one litre of gasoline corresponds to twenty millilitres of oil. A result ten or one thousand times larger usually signals a decimal or unit mistake. This mathematical check does not assess fuel freshness, ethanol compatibility, ventilation, fire risk or storage life. Consult the documented handling instructions rather than treating a correct ratio as a complete safe-work procedure."
      }
    ],
    "faqs": [
      {
        "question": "How much oil goes into 5 litres at 50:1?",
        "answer": "The arithmetic is 5/50 litres, which equals 0.1 litre or 100 mL. This is a volume ratio applied to five litres of gasoline before oil is added. Verify that 50:1 is the specified ratio for the actual engine and oil."
      },
      {
        "question": "Is one gallon always about 76 mL of oil?",
        "answer": "Only for one US gallon at 50:1. An imperial gallon is larger and gives about 90.9218 mL at that ratio. Select the correct definition rather than copying an unlabeled gallon example."
      },
      {
        "question": "Can I enter 40:1 or 32:1?",
        "answer": "Yes, if that is the verified gasoline-to-oil volume ratio from the relevant instructions. Enter 40 or 32 in the ratio field. The calculator accepts the arithmetic but does not approve a change from the manufacturer\u2019s specification."
      },
      {
        "question": "Are the oil ounces a weight?",
        "answer": "No. The output is US fluid ounces, a volume unit. Oil ounces by mass require a separate density-based conversion. Never treat fluid-ounce markings as scale measurements or mix US and imperial definitions."
      },
      {
        "question": "Does this tell me how to store the blend?",
        "answer": "No. Storage conditions, permitted containers, fuel age and safe handling depend on the product instructions and local requirements. The page only converts a documented ratio and measured gasoline volume into oil quantities."
      }
    ],
    "limitations": "User-verified gasoline:oil ratio by volume, not product selection or handling guidance. Gallon definitions are explicit; no mass ratio or final-blend input. Calculation is local.",
    "keywords": [
      "50 to 1 gas oil mix calculator"
    ],
    "icon": "\ud83c\udfe0",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "macro-calculator",
    "title": "Macro Calculator \u2014 Supplied Calories, Protein, Fat and Carbs",
    "shortTitle": "Macro Calculator",
    "category": "Health",
    "description": "Calculate protein, fat and carbohydrate grams from your supplied calorie baseline and energy shares, with explicit user-chosen surplus or deficit scenarios.",
    "intro": "This calorie and macro calculator allocates a daily energy figure you already have. It converts your protein and fat percentages into grams and assigns the remaining energy share to carbohydrate. Baseline, user-chosen surplus and user-chosen deficit modes allow transparent arithmetic comparisons without claiming to know your individual calorie needs. The calculator does not estimate energy expenditure from age, sex, height or activity. If you searched for a bulking calculator or cutting calculator, the relevant mode changes a supplied baseline by a percentage you choose; it does not prescribe that adjustment or predict muscle gain, fat loss or a weight-change timeline.",
    "formula": "Scenario kcal = baseline \u00d7 (1 \u00b1 supplied adjustment/100). Protein grams = kcal \u00d7 protein%/400. Fat grams = kcal \u00d7 fat%/900. Carbohydrate grams = kcal \u00d7 (100 \u2212 protein% \u2212 fat%)/400.",
    "example": "A supplied 2,000 kcal baseline allocated as 25% protein and 25% fat leaves 50% carbohydrate. The arithmetic gives 125 g protein, about 55.6 g fat and 250 g carbohydrate. A user-entered 10% surplus changes energy to 2,200 kcal, not a recommended target.",
    "howTo": [
      "Enter an existing daily calorie baseline from your records or appropriately qualified nutrition guidance; this tool does not determine your needs.",
      "Choose baseline allocation, a supplied surplus, or a supplied deficit. Enter an adjustment percentage only for the latter two scenarios.",
      "Supply protein and fat energy shares whose sum does not exceed 100%; carbohydrate receives the remainder.",
      "Click Calculate result and retain the inputs with the output. Recheck all gram amounts before using a food record or discussing the scenario with a professional."
    ],
    "considerations": [
      {
        "title": "Energy shares are different from gram shares",
        "text": "Percentages describe shares of calorie energy, not shares of food weight or macro grams. Fat uses nine kcal per gram in this simplified convention, while protein and carbohydrate use four. Equal energy percentages therefore produce different gram amounts for fat and protein. You cannot add grams and expect them to reproduce the energy percentage directly. Multiply each displayed gram amount by its factor to check the allocation, allowing for rounding. The chosen percentages are inputs, not a claim that every possible split is nutritionally appropriate."
      },
      {
        "title": "Baseline quality controls the scenario",
        "text": "A supplied calorie figure could be a recorded intake, a clinician\u2019s reference or a carefully defined planning value. Those are different measurement bases and should be labeled. The calculator simply accepts the number; it cannot know whether the baseline matches your actual needs. Selecting surplus or deficit multiplies that figure by an explicit adjustment. If the baseline is inaccurate, the adjusted result retains that error. No automatic activity factor, hidden metabolic-rate equation or weight-loss conversion is applied behind the interface."
      },
      {
        "title": "Bulking and cutting are user-defined comparisons",
        "text": "A bulking calorie calculator search commonly asks for a gain-oriented scenario, whereas a macro calculator for fat loss asks for a deficit scenario. Here those terms label arithmetic modes only. They do not validate a calorie change, set a rate of weight change or guarantee a body-composition result. Training, recovery, health conditions and actual intake are outside the inputs. A muscle gain nutrition calculator needs context this allocation tool does not have; discuss individualized plans with an appropriately qualified professional rather than treating the chosen adjustment as advice."
      },
      {
        "title": "Why there is no women-specific multiplier",
        "text": "A macro calculator for women should not manufacture a special ratio from a search phrase alone. This page applies the same energy conversion to a supplied baseline regardless of sex. Individual energy requirements, pregnancy, breastfeeding, age, medical conditions and eating-disorder considerations can require different guidance, but the arithmetic identity itself does not establish that guidance. The input range is an implementation boundary, not a recommended daily intake. The separate breastfeeding page explains its limited sourced general increment and must not be used to justify an unsupervised deficit."
      },
      {
        "title": "Food labels and recorded intake may not sum perfectly",
        "text": "These are conventional energy factors for an educational allocation. Food composition, fiber, alcohol, label rounding and specific energy factors can cause a real diet\u2019s displayed totals to differ. This tool does not build a meal plan, measure micronutrients, evaluate protein quality or replace a food database. Preserve decimal outputs during checking, then apply an appropriate recording convention. Food choices and health suitability require information beyond three macro totals. A correct mathematical sum is useful for bookkeeping but is not evidence of an adequate or safe diet."
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate macros?",
        "answer": "Start with a suitable existing energy baseline and supplied energy percentages. Divide protein and carbohydrate energy by four, and fat energy by nine. This page performs that allocation after a click; choosing the baseline and percentages remains a separate individualized question."
      },
      {
        "question": "Can this calculate macros for weight loss?",
        "answer": "It can show the arithmetic for a user-chosen deficit applied to an existing baseline. It does not recommend that deficit, identify a safe intake or predict weight loss. Seek qualified guidance for an individual plan, especially where health or feeding considerations apply."
      },
      {
        "question": "What does a bulking calculator do here?",
        "answer": "The surplus mode multiplies your baseline by one plus your supplied percentage, then allocates that energy with the same macro shares. No muscle-gain rate, automatic training calories or optimal protein target is inferred."
      },
      {
        "question": "What if protein and fat exceed 100%?",
        "answer": "That would leave a negative carbohydrate energy share and is rejected. A zero remaining carbohydrate share is mathematically possible but not a dietary endorsement. The calculator validates arithmetic consistency rather than the nutritional appropriateness of a chosen split."
      },
      {
        "question": "Is this a macroeconomics calculator?",
        "answer": "No. Macroeconomics concerns national-account and economic quantities. That mismatched workbook term has its own expenditure-GDP calculator. Nutrition queries such as macronutrients calculator belong on this page and do not share the economic formula."
      }
    ],
    "limitations": "Allocation of supplied daily kcal, not TDEE estimation, diet prescription or outcome prediction. Conventional 4/4/9 factors; no child, pregnancy, breastfeeding or sex-specific needs model. Values are processed locally.",
    "keywords": [
      "bulking calculator",
      "calorie and macro calculator",
      "calorie calculator and macros",
      "calculate macros for weight loss",
      "bulking calorie calculator",
      "calculate macros",
      "how to calculate my macros for weight loss",
      "how do i calculate macros",
      "muscle gain nutrition calculator",
      "macronutrients calculator",
      "macro calculator for women",
      "how do you calculate your macros",
      "cutting calculator",
      "macro calculator for fat loss",
      "calorie calculator for muscle gain"
    ],
    "icon": "\ud83e\ude7a",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "macroeconomics-calculator",
    "title": "Macroeconomics Calculator \u2014 Expenditure GDP Identity",
    "shortTitle": "Macroeconomics Calculator",
    "category": "Finance",
    "description": "Calculate expenditure GDP from consumption, investment, government spending, exports and imports using consistent supplied national-account amounts.",
    "intro": "The macroeconomics calculator evaluates the expenditure identity for gross domestic product from five supplied components. It is a transparent arithmetic tool for a classroom example or a consistently prepared national-account dataset. Unlike a nutrition macro calculator, its quantities concern economic production and expenditure. The result uses the currency and numerical scale you enter and loads no current statistics. The formula is useful only when the components share an accounting basis, period and price convention. An output does not establish that the dataset is complete, measure household wellbeing or forecast growth.",
    "formula": "Expenditure GDP = personal consumption C + gross private domestic investment I + government consumption and gross investment G + exports X \u2212 imports M.",
    "example": "For hypothetical same-period amounts C=1,000, I=200, G=300, X=150 and M=180, GDP is 1,470. Net exports are \u221230 and domestic expenditure is 1,500. If inputs are millions of one currency, outputs are also millions of that currency.",
    "howTo": [
      "Collect expenditure components for the same economy, accounting period, currency, scale and price basis.",
      "Enter consumption, gross private investment, government consumption and gross investment, exports and imports in their labeled fields.",
      "Click Calculate result and compare the GDP identity with the domestic expenditure subtotal and net exports.",
      "Record the dataset source and vintage; this arithmetic tool does not revise, retrieve or validate official national accounts."
    ],
    "considerations": [
      {
        "title": "Imports correct the production boundary",
        "text": "The identity subtracts imports because expenditure components can include goods and services produced outside the domestic economy. The subtraction is an accounting adjustment, not a claim that importing is inherently harmful or that reducing imports alone necessarily raises GDP. A transaction can affect several components at once. Interpret a scenario only after tracking the associated consumption, investment or government expenditure. Holding all other numbers constant is a mathematical comparison and can differ from what happens in actual economic accounts."
      },
      {
        "title": "Keep currency, scale and period consistent",
        "text": "A trillion, billion and million are different scales even if the currency is identical. Convert all five amounts to one scale before entering them. Likewise, annual totals cannot be mixed with one quarter\u2019s total or a seasonally adjusted annualized rate. The outputs deliberately do not prepend a currency symbol, because the page does not know which units you selected. Save the currency, scale, period and adjustment convention with the result. A plausible-looking total can still be invalid if the components come from incompatible series."
      },
      {
        "title": "Government expenditure has a defined accounting meaning",
        "text": "The G component is government consumption expenditure and gross investment on the relevant national-account basis. It is not necessarily every payment made by a government or the entire headline budget. Transfers are handled through the appropriate accounting framework rather than automatically added to this component. Using a budget total without verifying its definition can double count or misclassify transactions. The calculator does not identify transfers, extract series from a fiscal report or reconcile government accounts with a GDP release."
      },
      {
        "title": "Investment is broader than buying financial assets",
        "text": "Gross private domestic investment is an expenditure-account component, not personal purchases of stocks or bonds. It includes the defined investment categories and inventory changes in the selected accounting framework. Inventory-driven changes can make an entered investment amount negative, so the tool permits a signed value for that field. Consumption, government expenditure, exports and imports are restricted to non-negative values in this bounded example. If a real dataset requires a different special adjustment, prepare and document it using its official methodology rather than forcing it into a mislabeled field."
      },
      {
        "title": "Nominal arithmetic does not supply a real-growth series",
        "text": "The calculator sums the values you provide and makes no inflation adjustment. Combining published chained real component values can have non-additivity issues; their simple sum must not be presented as an exact official real GDP reconstruction. Use official methodological guidance for real accounts, contribution analysis and revisions. To study growth you would also need a consistent earlier period and the correct rate convention. This page does not compute annualized growth, per-capita GDP, multipliers, unemployment, fiscal policy effects or a forecast from the five expenditure amounts."
      }
    ],
    "faqs": [
      {
        "question": "What can this macroeconomics calculator solve?",
        "answer": "It evaluates C + I + G + X \u2212 M using supplied expenditure components and also reports net exports and domestic expenditure. It does not solve every macroeconomic model or fetch live data. The visible formula defines the supported scope."
      },
      {
        "question": "Why are imports subtracted?",
        "answer": "Imports remove foreign-produced content already included in expenditure measures so the identity describes domestic production. Interpret linked transactions together; the subtraction alone is not a causal prediction about economic growth or welfare."
      },
      {
        "question": "Can investment be negative?",
        "answer": "The signed investment input allows a hypothetical or documented component influenced by inventory decreases. Confirm the national-account definition and data period. This is distinct from a personal investment loss or a negative stock-market return."
      },
      {
        "question": "Does the output use dollars?",
        "answer": "No currency is assumed. Use the same currency and scale for all inputs. An output of 1,470 means 1,470 of that entered unit, such as millions of a chosen currency, and the label should be retained in your record."
      },
      {
        "question": "Can I add chained real GDP components?",
        "answer": "Do not assume simple addition reproduces an official chained real aggregate. Chain-weighted accounts can be non-additive. This identity calculator is safest for consistent nominal or properly prepared additive teaching examples; consult the dataset\u2019s methodology for real-series analysis."
      }
    ],
    "limitations": "User-supplied expenditure identity, no live data or forecast. Same-period, same-scale accounting basis required; chained real components can be non-additive. Educational currency-neutral arithmetic.",
    "keywords": [
      "macroeconomics calculator"
    ],
    "icon": "\ud83d\udcca",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "vinegar-carbon-dosing-calculator",
    "title": "Vinegar Carbon Dosing Calculator \u2014 Protocol Scaling",
    "shortTitle": "Vinegar Carbon Dosing Calculator",
    "category": "Home",
    "description": "Scale a supplied aquarium vinegar protocol by measured water volume and compatible labeled acidity; no universal mL-per-ppm nitrate dose is inferred.",
    "intro": "A search for vinegar carbon dosing calculator ml per ppm nitrate asks for a conversion that these measurements cannot universally establish. Nitrate concentration is not a direct interchangeable unit of vinegar volume. This page instead provides a bounded protocol-scaling calculator: enter an independently verified vinegar quantity, its reference net water volume and acidity, then compare an equivalent amount for your supplied volume and compatible acidity. The output is mathematical equivalence for the same stated interval, not a safe starting dose, an escalation schedule or a predicted nitrate reduction. The default protocol quantity is zero so the interface does not present an invented dosing recommendation.",
    "formula": "Scaled quantity = supplied protocol mL \u00d7 current net water L/reference net water L \u00d7 reference acidity/current acidity. Acidity inputs must both mean grams acetic acid per 100 mL. The protocol interval is unchanged.",
    "example": "For an arithmetic-only example, a supplied reference amount of 4 mL for 100 L at 5 g/100 mL scales to 8 mL for 200 L at the same acidity. This example neither recommends 4 mL nor predicts a nitrate change.",
    "howTo": [
      "Obtain an independently reviewed protocol quantity and record its interval, vinegar composition and applicable aquarium conditions.",
      "Enter actual net water volume for the reference and current system in litres, accounting for displacement rather than using the tank\u2019s nominal external capacity.",
      "Use compatible labeled acidity units: grams acetic acid per 100 mL in both fields. Do not substitute cleaning products or other carbon sources.",
      "Click Calculate result and review the scaling factors. Do not use the output as a dosing instruction or an mL-per-ppm nitrate promise."
    ],
    "considerations": [
      {
        "title": "Why ppm is not enough to calculate an amount",
        "text": "A nitrate reading describes concentration, while a vinegar quantity supplies an organic carbon source. Biological uptake and nutrient export depend on the system and its operating conditions, not solely on the starting nitrate number. Even a concentration multiplied by water volume gives a nitrate amount, not a validated vinegar dose. A chemical bookkeeping ratio would still not establish the biological response, safe delivery rate or export efficiency. This tool therefore has no target-nitrate field and makes no claimed conversion from one ppm to a fixed number of millilitres."
      },
      {
        "title": "Scaling preserves a supplied protocol basis",
        "text": "The volume multiplier compares your measured net water volume with the reference volume. The concentration multiplier compares compatible acetic-acid labels. The product scales the entered reference amount while retaining its interval; a daily quantity remains daily, and a quantity per another specified interval retains that interval. The interface cannot verify the protocol, whether the reference tank resembles your system or whether its amount remains appropriate after scaling. Mathematical proportionality should be reviewed as part of a qualified aquarium-management process rather than applied automatically."
      },
      {
        "title": "Net water volume needs a defensible estimate",
        "text": "Nominal aquarium size is not necessarily the water actually present. Rock, substrate, equipment, air gaps and the operating level can reduce or alter the effective amount; a connected sump can add water. Record how you estimated net volume and include only the connected water relevant to the protocol. If that estimate is uncertain, evaluate separate low and high volume cases. A larger decimal display does not resolve volume uncertainty. The calculator neither models circulation between compartments nor derives displacement from tank dimensions or livestock."
      },
      {
        "title": "Acidity labels must describe compatible products",
        "text": "The supported acidity basis is grams of acetic acid per one hundred millilitres. A percentage stated by mass, by volume or on another basis cannot be substituted without a documented conversion. The numerical range of one to ten is an input bound, not approval of a product. Vinegar labels, additives and formulation details matter; the page does not establish aquarium suitability. It also does not convert vodka, sugar, commercial mixtures or other carbon sources into vinegar equivalents. Equal arithmetic acid amounts do not automatically mean equal operational effects."
      },
      {
        "title": "Keep monitoring separate from predicted outcomes",
        "text": "A record can include the supplied protocol, calculated factors, actual delivered quantity, interval and independently measured nitrate and other observations. That record allows a responsible reviewer to evaluate what happened without assuming the calculator predicted it. Changes in feeding, water exchange, biological activity and export equipment complicate comparisons between dates. The output does not assess dissolved oxygen, bacterial blooms, pH effects, livestock condition or a safe escalation rate. Do not use an apparently correct proportion as a reason to ignore a concerning observation or a protocol limitation."
      }
    ],
    "faqs": [
      {
        "question": "How many mL of vinegar remove one ppm nitrate?",
        "answer": "There is no universal conversion supplied here. A nitrate concentration and tank volume do not establish a safe vinegar quantity or biological removal efficiency. The page offers only transparent scaling of an independently verified reference protocol and explicitly reports that nitrate removal is not determined."
      },
      {
        "question": "Is the worked example a starting dose?",
        "answer": "No. Four millilitres is a hypothetical arithmetic input used to demonstrate doubling water volume. It is not a recommendation, schedule or evidence that a specific aquarium will tolerate that quantity or achieve any nitrate change."
      },
      {
        "question": "Can I use nominal tank capacity?",
        "answer": "Use a defensible estimate of the actual connected net water volume relevant to the protocol. Nominal dimensions can omit displacement and sump contribution. Preserve the estimate\u2019s basis and uncertainty rather than treating the calculator as a measurement of actual water."
      },
      {
        "question": "Does changing from 5% to 10% vinegar halve the amount?",
        "answer": "For compatible labels expressed as grams acetic acid per 100 mL, the arithmetic acidity factor is five divided by ten. That equivalence alone does not approve the product or establish the safety of substituting it in an aquarium protocol."
      },
      {
        "question": "Can I scale a vodka or commercial carbon dose?",
        "answer": "Not with this vinegar-acidity model. Other products can have different compositions and biological effects. The tool does not infer interchangeable dosing rates across carbon sources, and an apparently similar bottle percentage is not the required acetic-acid basis."
      }
    ],
    "limitations": "Protocol volume/acidity equivalence only; no safe dose, start rate, escalation or mL-per-ppm nitrate model. No product compatibility or biological response is established. Inputs stay local.",
    "keywords": [
      "vinegar carbon dosing calculator ml per ppm nitrate"
    ],
    "icon": "\ud83c\udfe0",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "radical-expression-simplifier",
    "title": "Simplifying Radical Expressions Solver \u2014 Integer Square Roots",
    "shortTitle": "Simplifying Radical Expressions Solver",
    "category": "Education",
    "description": "Simplify sums of integer square-root terms exactly by extracting square factors and combining like radicals, with a bounded parser and clear syntax.",
    "intro": "This simplifying radical expressions solver handles a deliberately defined algebra task: sums and differences of square roots of non-negative integers, with integer coefficients and integer constants. It extracts square factors from each radicand and combines terms that share the same remaining square-free radicand. The output is an exact expression rather than a decimal approximation. Enter an expression such as 2sqrt(72)-sqrt(8)+3; square-root symbols are also supported for integer radicands. The parser does not execute the text as code, interpret variables or claim to be a general computer-algebra system.",
    "formula": "For n = q\u00b2r with r square-free, a\u221an = aq\u221ar. Terms with the same r combine by adding their coefficients. A perfect-square radicand becomes an integer; \u221a0 contributes zero.",
    "example": "2sqrt(72)-sqrt(8)+3 becomes 2\u00d76\u221a2 \u2212 2\u221a2 + 3 = 3 + 10\u221a2. The exact root terms remain irrational even though the integer coefficient simplifies.",
    "howTo": [
      "Enter up to twenty terms using integer coefficients, sqrt(integer) and plus or minus signs; an optional multiplication mark before sqrt is accepted.",
      "Keep radicands between zero and 1,000,000,000, and original coefficients or constants within \u00b11,000,000.",
      "Click Calculate result to extract square factors and collect matching radical terms.",
      "Check the worked factorization independently. Editing text preserves the last submitted expression until Calculate is clicked again."
    ],
    "considerations": [
      {
        "title": "Extract pairs of factors",
        "text": "The square-root identity uses pairs of identical prime factors to create an integer outside the radical. For seventy-two, the factorization is two cubed times three squared. One pair of twos and one pair of threes leave a single two under the root, so \u221a72 becomes 6\u221a2. The solver implements bounded trial factorization rather than guessing a nearby perfect square. Every paired factor moves outside; factors with odd multiplicity remain inside. Keeping the remaining radicand square-free makes like terms easier to recognize."
      },
      {
        "title": "Combine like radicals after simplification",
        "text": "Two roots that look different at first may share the same simplified radical. \u221a8 and \u221a18 become 2\u221a2 and 3\u221a2, so their sum is 5\u221a2. In contrast, \u221a2 and \u221a3 have different square-free radicands and cannot be combined into one coefficient times a single unchanged root. The calculator groups coefficients only after factor extraction. Exact cancellation can remove a radical entirely, and a result with no remaining terms displays zero rather than an empty expression."
      },
      {
        "title": "Allowed syntax keeps the calculation predictable",
        "text": "Use forms such as sqrt(12), 3sqrt(12), 3*sqrt(12), -sqrt(12) or an integer constant. Terms may be joined by plus and minus signs, and whitespace is ignored. The square-root symbol can precede an integer or a parenthesized integer. The supported grammar excludes decimal coefficients, fractions, products of two roots, division, exponents, variables, nested roots and negative radicands. Those expressions can require different algebra or a complex-number branch. Unsupported syntax is rejected rather than partially parsed into an apparently valid answer."
      },
      {
        "title": "Exact roots and decimal calculations answer different questions",
        "text": "The separate square-root calculator is appropriate when you want a numerical root of a supplied value. This page retains an exact radical sum and does not choose a decimal approximation as its primary output. For checking, you can approximate each original and simplified term independently and compare their sums, allowing for floating-point rounding. Numerical agreement is a useful cross-check but is not a complete symbolic proof. Factorization and coefficient collection explain why the expressions are algebraically equivalent in the supported real-valued domain."
      },
      {
        "title": "Bounded expressions protect responsiveness",
        "text": "The text length, number of terms, radicand and coefficient limits prevent an unexpectedly expensive input from occupying the browser indefinitely. Trial factoring is bounded by the square root of each permitted integer and skips work once the remaining factor is small. The page does not call a remote algebra service or evaluate user text as JavaScript. Limits are visible because accepting arbitrary-length mathematical expressions would require a different implementation and verification strategy. For an unsupported school problem, rewrite it into a supported subexpression only if that preserves its mathematical meaning."
      }
    ],
    "faqs": [
      {
        "question": "Can this simplify \u221a50 + \u221a8?",
        "answer": "Yes. The two terms become 5\u221a2 and 2\u221a2, and their sum is 7\u221a2. Enter sqrt(50)+sqrt(8) or the equivalent square-root-symbol syntax. The solver displays exact coefficients rather than rounding the roots."
      },
      {
        "question": "Does \u221aa + \u221ab equal \u221a(a+b)?",
        "answer": "Not in general. Addition must preserve separate roots unless factor extraction reveals matching square-free radicands. For example, \u221a2 + \u221a3 cannot be simplified to \u221a5. This solver combines like radical terms, not radicands inside a sum."
      },
      {
        "question": "Are negative numbers under a root supported?",
        "answer": "No. This tool is limited to non-negative integer square roots in the real domain. A leading minus sign on a term is allowed, but sqrt(-4) would require complex-number handling and is rejected."
      },
      {
        "question": "Can I enter variables or fractions?",
        "answer": "No. Variable assumptions, rational coefficients and division require a broader algebra system. Supported expressions contain bounded integer constants, bounded integer coefficients and square roots of bounded non-negative integers joined by addition or subtraction."
      },
      {
        "question": "Why does a perfect-square root become a constant?",
        "answer": "If all prime factors occur in pairs, the remaining square-free radicand is one. For example, \u221a36 becomes six, and six combines with other integer constants. A root of zero adds no term to the final expression."
      }
    ],
    "limitations": "At most 20 integer square-root terms and constants, 1,000 characters, radicands \u226410\u2079, original coefficients/constants \u226410\u2076 in absolute value. No general CAS, variables, fractions or complex roots. Local deterministic parsing.",
    "keywords": [
      "simplifying radical expressions solver"
    ],
    "icon": "\ud83d\udcd0",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "redacted-text-generator",
    "title": "Redacted Text Generator \u2014 Literal Plain-Text Replacement",
    "shortTitle": "Redacted Text Generator",
    "category": "Technology",
    "description": "Generate a separate redacted plain-text copy by replacing supplied literal phrases locally, with match counts, reviewable output and a TXT download.",
    "intro": "The redacted text generator replaces exact phrases you supply with the fixed marker [REDACTED] and produces a separate plain-text result. Paste text into the original field, list sensitive phrases one per line, then click Generate redacted text. Matching can ignore letter case or require the same case. The generated result contains replacement markers rather than hidden copies of the matched phrases, and the download contains only that result. This is a literal text transformation, not automatic discovery of every identifier or a PDF redaction system. Review the entire output before sharing because an omitted spelling or related detail can remain identifiable.",
    "formula": "Build a literal-match pattern from 1\u2013100 supplied phrases, ordered longest first. Replace non-overlapping matches with [REDACTED], count replacements, and download only the generated UTF-8 plain text.",
    "example": "Original: Contact Alex at alex@example.com about the draft. With phrases alex@example.com and Alex and case-insensitive matching, output becomes: Contact [REDACTED] at [REDACTED] about the draft. Two matches are replaced.",
    "howTo": [
      "Paste plain text up to 100,000 characters into the original field. No file is uploaded or automatically read.",
      "List one literal phrase per line, up to 100 phrases of at most 500 characters each. Include spelling variants you intend to remove.",
      "Choose whether letter case should matter, then click Generate redacted text. Input edits leave the prior result unchanged until you generate again.",
      "Inspect the full generated text and match count. Download the result as a separate TXT file, or clear both input and output when finished."
    ],
    "considerations": [
      {
        "title": "Replacement differs from visual covering",
        "text": "The output replaces matched text characters with a visible marker. It does not place a black rectangle over retained words or use a hidden layer that contains the original phrase. The downloaded TXT file is assembled from the generated output only. This distinction matters because visual covering in another document format can leave searchable or selectable content beneath it. This page handles plain text rather than repairing the internal layers, annotations or metadata of an existing PDF, image or word-processing document."
      },
      {
        "title": "Literal phrases and overlapping matches",
        "text": "Phrases are treated literally, so punctuation such as a dot, bracket or plus sign is not interpreted as a regular-expression operator. Longer phrases are considered first to reduce partial replacement when one phrase contains another. Matching is non-overlapping within a single pass. If a shorter phrase appears elsewhere inside an unrelated word, it can still be replaced because this tool does not infer word boundaries or language context. Inspect those cases carefully; use sufficiently specific phrases to avoid unwanted substitutions."
      },
      {
        "title": "Case and spelling variations need review",
        "text": "Ignoring case catches a phrase written with different upper- or lower-case letters, but it does not automatically recognize initials, nicknames, misspellings, reordered names, alternative number formats or Unicode look-alikes. A person may remain identifiable from an address, job title, date or distinctive event even after a name is removed. The match count reports replacements, not the number of identities anonymized or a privacy score. Build the phrase list deliberately and read the resulting text as a recipient would."
      },
      {
        "title": "Generated text remains tied to the last action",
        "text": "Changing the source, phrase list or case option marks the displayed output as needing regeneration. The old output remains visible so typing does not silently transform or replace a reviewed result. Click Generate again before downloading an updated version. If a validation error occurs, the page shows an error rather than pretending a new result was made; any prior result remains identifiable as prior output. The download button always uses the currently displayed generated text, so verify it directly instead of assuming recent edits have already been applied."
      },
      {
        "title": "Local processing and the original buffer",
        "text": "Text replacement runs in the browser and the tool does not send the source to a processing server. The original is still present in your input field while you work, and your device, clipboard, extensions or other software may have their own access behavior. Clear removes the interface\u2019s input and output state but is not a forensic erasure of device memory or clipboard history. Avoid pasting material your environment is not authorized to handle. Local transformation is a narrow processing statement, not a guarantee of compliance, perfect anonymization or irreversible deletion."
      }
    ],
    "faqs": [
      {
        "question": "Does this find every piece of personal information?",
        "answer": "No. It replaces only supplied literal phrases. Unlisted spellings, context clues, dates, addresses or identifiers can remain. A match count is not a certification of anonymization. Review the entire generated text and its purpose before sharing."
      },
      {
        "question": "Can the downloaded TXT reveal the matched original words?",
        "answer": "Matched spans are replaced in the generated string; the download uses only that string and includes no original input attachment. However, unlisted or contextual information can remain, and copies elsewhere on your device are outside this tool\u2019s control."
      },
      {
        "question": "Do regex characters have a special meaning?",
        "answer": "No. Supplied phrases are escaped for literal matching, so a phrase such as a.b or [ID] targets those actual characters. You cannot run a regular expression or executable code through the phrase list."
      },
      {
        "question": "Can it redact a PDF or screenshot?",
        "answer": "No. The input and output are plain text. This tool does not remove PDF objects, image pixels, tracked changes, attachments or document metadata. Use a format-appropriate workflow and verify the actual exported document separately."
      },
      {
        "question": "Why does the previous result stay after editing?",
        "answer": "Processing is explicit. Edits mark the output as needing regeneration, and only clicking Generate makes a new result. This lets you review a stable copy and follows the same submitted-result policy used by the site\u2019s calculators."
      }
    ],
    "limitations": "Literal plain-text replacements only, no automatic PII detection, document metadata processing or anonymization guarantee. Maximum 100,000 characters and 100 phrases. Local processing; original remains in the input until cleared.",
    "keywords": [
      "redacted text generator"
    ],
    "icon": "\ud83d\udcdd",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "wedding-liquor-calculator",
    "title": "Wedding Liquor Calculator \u2014 Supplied Serving Plan",
    "shortTitle": "Wedding Liquor Calculator",
    "category": "Lifestyle",
    "description": "Estimate whole spirit bottles from a supplied adult guest plan, liquor share, measured pour volume and bottle size, with transparent purchasing arithmetic.",
    "intro": "The wedding liquor calculator converts a serving plan you supply into a spirit volume and a whole-bottle purchasing quantity. The two sheet queries, liquor calculator wedding and liquor wedding calculator, share this same intent and use one canonical page. Enter only adults included in the supplied alcohol plan, the planned total servings per person, the percentage involving spirits, the spirit volume in each serving and bottle size. The tool does not recommend how much anyone should drink or assume that every guest consumes alcohol. Its defaults illustrate arithmetic, while alcohol-free drinks and guests outside the supplied plan need their own arrangements.",
    "formula": "Total planned servings = included adults \u00d7 supplied servings per person. Spirit servings = total \u00d7 liquor share/100. Spirit volume mL = spirit servings \u00d7 pour mL. Whole bottles = ceiling(spirit volume/bottle mL).",
    "example": "For a supplied plan of 100 included adults, one total serving each, 40% spirit servings, a 30 mL spirit pour and 750 mL bottles, the model gives 40 spirit servings, 1,200 mL liquor and two whole bottles. The remaining 60 servings are not automatically classified as wine or beer.",
    "howTo": [
      "Enter the whole number of adults actually included in your supplied plan; exclude minors and do not assume all attendees drink.",
      "Supply the planned total servings per included adult and the share of those servings that use liquor. These are planning inputs, not consumption recommendations.",
      "Enter spirit pour and bottle volumes in millilitres, checking the actual recipe and container labels.",
      "Click Calculate result. Review volume and whole-bottle rounding, then plan alcohol-free beverages, service rules and other drink types separately."
    ],
    "considerations": [
      {
        "title": "A serving is a recipe quantity",
        "text": "The pour field measures how many millilitres of liquor enter one spirit serving. A mixed drink\u2019s total glass volume can be much larger because it contains ice, juice, soda or other ingredients. Do not enter the total cocktail volume unless it is genuinely the liquor component. A supplied serving count also does not automatically equal a count of standard drinks. Alcohol content varies by beverage and strength, and a recipe can contain more or less alcohol than a standard-drink definition. This tool intentionally does not calculate intoxication or a safe drinking allowance."
      },
      {
        "title": "Distinguish total servings from spirit servings",
        "text": "The servings-per-person input refers to the total servings in your supplied plan. The liquor percentage selects the portion that uses spirits. If you already have a count of spirit servings alone, set the share to one hundred percent and make the count basis clear. The remaining output is simply non-spirit servings; it does not divide those among beer, wine or alcohol-free drinks. Decide those categories from the actual event plan rather than treating a remainder as an automatic recommendation for another alcoholic beverage."
      },
      {
        "title": "Round bottles after calculating total volume",
        "text": "The tool retains the required liquor volume and then rounds the bottle count upward. Rounding each guest\u2019s fractional serving or each recipe component separately can produce a different and unnecessarily large order. A fractional expected serving is a planning average, not a literal partial person. Whole bottles describe nominal packaged capacity; losses, service practices, mixed bottle sizes and supplier return policies are outside the model. If your plan needs an explicit purchasing allowance, document it separately rather than assuming a hidden percentage has already been added."
      },
      {
        "title": "Multiple spirits need separate recipe planning",
        "text": "The displayed bottle result assumes one bottle volume and a common spirit pour for the aggregate plan. A bar offering several spirits or cocktails may need separate calculations for each recipe and ingredient. Do not order the full aggregate count for every spirit category; that would count the same planned servings several times. Allocate the actual serving plan among recipes first, run each allocation consistently and reconcile their totals. Mixer, garnish, ice, glassware and staff needs cannot be inferred from the liquor volume alone."
      },
      {
        "title": "Keep adult planning distinct from consumption advice",
        "text": "Adult eligibility and alcohol-service requirements depend on local rules and the venue\u2019s obligations; the calculator determines neither. Guests may choose not to drink, and a person included in an initial plan may later need a different option. Keep water and suitable alcohol-free choices available in the event plan without using this tool to encourage a particular intake. A purchasing estimate says nothing about driving, medications, pregnancy, intoxication or individual risk. Qualified venue and service personnel should manage the relevant operational and legal decisions."
      }
    ],
    "faqs": [
      {
        "question": "How do I calculate wedding liquor bottles?",
        "answer": "Multiply the supplied planned servings by the liquor share and the spirit millilitres per serving, then divide by bottle size and round upward. This tool performs those steps transparently. The planned servings themselves are your input, not a recommended amount per guest."
      },
      {
        "question": "Does this include beer, wine and mixers?",
        "answer": "No. It reports the remaining non-spirit serving count but does not assign categories or quantities to it. Plan beer, wine, alcohol-free drinks, water, mixers and recipe ingredients separately using their actual serving and package sizes."
      },
      {
        "question": "Is a 30 mL pour a standard drink?",
        "answer": "Not automatically. A standard drink depends on pure alcohol content and the relevant definition, while this field is a supplied volume of liquor. The tool does not know alcohol strength and does not convert pours into an individual drinking limit."
      },
      {
        "question": "What if guests do not drink alcohol?",
        "answer": "Do not include them in the adult alcohol-serving count. Their beverage needs still matter and should be handled in a separate alcohol-free plan. Attendance is not evidence that every guest will consume liquor."
      },
      {
        "question": "Can I use several bottle sizes?",
        "answer": "Run separate ingredient or bottle-size allocations and reconcile the totals. The single displayed calculation assumes one bottle volume. It does not choose an optimal package mix, supplier order or universal spare-bottle allowance."
      }
    ],
    "limitations": "Supplied adult-serving plan only; no recommended intake, standard-drink conversion, intoxication estimate or service-law determination. Single pour and bottle size; no hidden allowance. Inputs stay local.",
    "keywords": [
      "liquor calculator wedding",
      "liquor wedding calculator"
    ],
    "icon": "\ud83d\udcc5",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  },
  {
    "slug": "abg-calculator",
    "title": "ABG Calculator \u2014 Anion Gap and pH Arithmetic",
    "shortTitle": "ABG Calculator",
    "category": "Health",
    "description": "Calculate an uncorrected anion gap and Henderson\u2013Hasselbalch pH estimate from labeled laboratory inputs for education, without diagnosis or treatment decisions.",
    "intro": "This ABG calculator supports a limited educational review of acid-base arithmetic. It reports an uncorrected anion gap without potassium and a Henderson\u2013Hasselbalch pH estimate from supplied bicarbonate and arterial carbon dioxide pressure. A measured pH input allows you to compare the calculated estimate with the recorded result. These numbers are not an automated diagnosis, a severity category, a compensation assessment or a treatment recommendation. Acid-base interpretation requires the appropriate sample basis, laboratory methods, history and qualified clinical judgment. The page provides no oxygenation model and does not accept oxygen partial pressure in place of PaCO\u2082.",
    "formula": "Uncorrected anion gap = sodium \u2212 chloride \u2212 bicarbonate, in mmol/L, without potassium or albumin adjustment. Estimated pH = 6.1 + log10[bicarbonate/(0.03 \u00d7 PaCO\u2082)], with PaCO\u2082 in mmHg. Difference = measured pH \u2212 estimated pH.",
    "example": "For a teaching example with pH 7.40, PaCO\u2082 40 mmHg, bicarbonate 24 mmol/L, sodium 140 mmol/L and chloride 104 mmol/L, the anion gap is 12 mmol/L and the equation gives pH about 7.401. This is arithmetic, not a patient classification.",
    "howTo": [
      "Use a teaching dataset or appropriately handled laboratory record and confirm the sample, time and unit basis of every value.",
      "Enter measured arterial pH and PaCO\u2082 in mmHg, then bicarbonate, sodium and chloride in mmol/L on a compatible basis.",
      "Click Calculate result. Review the uncorrected gap, equation estimate and measured-minus-estimated difference as separate quantities.",
      "Compare with the actual laboratory report and qualified assessment. Do not use the outputs to diagnose, choose treatment or postpone evaluation."
    ],
    "considerations": [
      {
        "title": "Anion gap is a defined subtraction",
        "text": "The displayed gap excludes potassium and does not adjust for albumin. Different formulas and laboratory reference intervals can produce different interpretations, so a single numerical output must not be compared indiscriminately with every published threshold. Sodium and chloride should come from the appropriate chemistry-panel basis, and bicarbonate must be selected consistently for the intended calculation. A normal-looking gap cannot rule out a disorder, and an unusual gap does not identify a cause. This page therefore supplies the subtraction without labeling a clinical category."
      },
      {
        "title": "Blood gas and chemistry results have different measurement contexts",
        "text": "A blood-gas bicarbonate may be calculated from measured pH and carbon dioxide, while a chemistry-panel total carbon dioxide measurement has a different methodological basis. Reusing a calculated bicarbonate to reconstruct pH can reproduce its source equation rather than provide an independent check. Pairing results from different times or sample types can introduce a discrepancy that reflects the data selection instead of an algebra error. Verify the report\u2019s labels and collection times rather than assuming all values bearing similar names are interchangeable."
      },
      {
        "title": "Henderson\u2013Hasselbalch requires consistent units",
        "text": "The coefficient 0.03 in this stated educational equation corresponds to the supplied carbon dioxide pressure in mmHg under its physiological approximation. Entering kPa without conversion changes the denominator and produces an invalid estimate. The logarithm is base ten, and the bicarbonate concentration must be positive. PaCO\u2082 is carbon dioxide pressure, not oxygen pressure or oxygen saturation. The interface\u2019s arithmetic bounds reject certain implausible or singular inputs but are not normal ranges, diagnostic thresholds or approval of any patient value."
      },
      {
        "title": "The difference output is not a diagnostic test",
        "text": "Measured minus estimated pH is shown so the teaching arithmetic can be examined. Its size can reflect rounding, equation constants, measurement methods, sample differences or inconsistent inputs. The calculator applies no clinically validated discrepancy cutoff and gives no automated interpretation of the sign. It cannot detect all specimen errors, mixed disorders or conditions that require urgent care. A numerical comparison is useful within a qualified review of the actual laboratory context; it is not an independent clearance or a substitute for that review."
      },
      {
        "title": "What the tool deliberately leaves out",
        "text": "There is no compensation formula, delta-gap classification, albumin correction, base-excess model, oxygenation index or treatment dose in this implementation. Supplying additional outputs without the required inputs and clinical assumptions would imply capabilities the tool does not have. For example, a compensation assessment depends on identifying the relevant primary disturbance and using an applicable physiological model. This bounded calculator instead keeps its two equations visible and reproducible. For a real person, use the clinician\u2019s assessment and laboratory documentation rather than extrapolating from a teaching example."
      }
    ],
    "faqs": [
      {
        "question": "Does this ABG calculator diagnose acidosis or alkalosis?",
        "answer": "No. It gives an uncorrected anion-gap subtraction and a pH equation estimate. Diagnosis requires qualified assessment of the measured values, laboratory reference intervals, sample context and clinical situation. No automatic disturbance or severity category is assigned."
      },
      {
        "question": "Can I enter PaCO\u2082 in kPa?",
        "answer": "Not directly. The displayed coefficient uses mmHg. Convert with an appropriate verified pressure conversion before entering the value and retain the original laboratory unit in your record. Never substitute PaO\u2082 or oxygen saturation for carbon dioxide pressure."
      },
      {
        "question": "Is the anion gap corrected for albumin?",
        "answer": "No. Albumin is not an input, and potassium is excluded. The result must be interpreted against a compatible laboratory method and reference basis. It should not be presented as an adjusted gap or a cause-specific diagnosis."
      },
      {
        "question": "Why might calculated pH match the report closely?",
        "answer": "If the supplied bicarbonate was itself calculated from the same pH and PaCO\u2082 relationship, reconstructing pH is not an independent validation. Confirm whether each reported value was measured or derived and whether the samples were obtained at the same time."
      },
      {
        "question": "Does the result determine treatment or urgency?",
        "answer": "No. The calculator does not prescribe fluids, ventilation, medication or any other intervention and does not assess urgency. For actual symptoms, concerning laboratory results or care decisions, contact the qualified team responsible for evaluating the person."
      }
    ],
    "limitations": "Educational arithmetic only, no diagnosis, compensation model, albumin correction or treatment advice. Same-time compatible laboratory basis and stated units required. Editorial source review is not clinician validation. Inputs are processed locally.",
    "keywords": [
      "abg calculator"
    ],
    "icon": "\ud83e\ude7a",
    "accent": "blue",
    "updatedAt": "2026-10-02"
  }
];
