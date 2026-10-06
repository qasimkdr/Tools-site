import type {Tool} from "./tools";
export const roadmapGap20Tools:Tool[] = [
  {
    "slug": "decathlon-scoring-calculator",
    "title": "Men’s Decathlon Scoring Calculator",
    "shortTitle": "Men’s Decathlon Scoring",
    "description": "Calculate men’s decathlon event points from recorded performances using the combined-events coefficients, event units and integer truncation.",
    "icon": "⌘",
    "category": "Sports",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "decathlon calculator",
      "decathlon scoring calculator",
      "decathlon points calculator"
    ],
    "intro": "This decathlon calculator converts a recorded men’s outdoor combined-events performance into event points. It follows the combined-events coefficients rather than the separate general athletics scoring tables. The single input lists the ten performances in competition order, making the full event record easy to paste and review. Each result remains visible with its event name and input unit, so a large total cannot conceal a misplaced throw or a time entered in minutes.",
    "formula": "Track: points = floor[a × max(0, b − seconds)^c]. Field: points = floor[a × max(0, performance − b)^c]. Jumps use centimetres internally; throws use metres.",
    "example": "An automatically timed 100 m performance of 10.40 seconds gives floor[25.4347 × (18 − 10.40)^1.81] = 999 points. The same numerical entry of 10.4 from a manual stopwatch is not interchangeable: the official tables describe a sprint timing adjustment. This worksheet accepts fully automatic sprint times only. Enter ten event results to obtain the sum of ten separately truncated event scores; truncating one combined floating-point total can produce a different answer.",
    "howTo": [
      "Collect the ten official event performances in the displayed decathlon order.",
      "Convert all races to seconds and all field performances to metres; use fully automatic sprint times.",
      "Paste exactly ten values and click Calculate result.",
      "Check each event score and unit before comparing the total with the official record."
    ],
    "considerations": [
      {
        "title": "Supply the exact ten-event order",
        "text": "Use 100 m, long jump, shot put, high jump, 400 m, 110 m hurdles, discus, pole vault, javelin and 1500 m. Supply exactly ten numbers separated by spaces, commas, semicolons or newlines. The default is a demonstration record, not a claim about a named athlete. A misplaced value may still be numeric and pass validation, so compare every event label and displayed performance before interpreting the total. No event is inferred from the size of a number."
      },
      {
        "title": "Track performances are seconds",
        "text": "All four running inputs use seconds. Convert a 1500 m time of 4:30 to 270 seconds before entering it; the colon notation is intentionally rejected here. The sprint coefficients are for fully automatic timing. Do not transfer a hand-timed sprint record without applying the relevant governing timing rules independently. Better track performances have smaller times and produce a larger positive difference from b. At or beyond the zero-point threshold, this numerical worksheet returns zero points."
      },
      {
        "title": "Jump and throw units differ internally",
        "text": "All six field results are entered in metres. Long jump, high jump and pole vault are multiplied by one hundred because their published coefficients use centimetres. Shot put, discus and javelin stay in metres. A long jump of 7.50 m therefore enters the formula as 750, while a discus result of 40 m remains 40. Do not enter jump centimetres in this interface. Consistent external units reduce an otherwise easy hundredfold mistake."
      },
      {
        "title": "Coefficients belong to each event",
        "text": "The constants a, b and c differ by event and determine the shape of its points curve. They cannot be replaced by one universal points-per-second or points-per-metre rate. A tenth of a second gained in one race need not be worth the same number of points at two performance levels. These curves are calculations under the stated table, rather than a direct physical measure of effort, fitness, equality between athletes or predicted improvement."
      },
      {
        "title": "Truncate every score before adding",
        "text": "The formula produces a real-valued result, but the published event score uses the whole-number part. The calculator floors each nonnegative event result separately and then adds those integer scores. Ordinary rounding to the nearest integer is not substituted. Near an integer boundary, official recorded measurement precision matters. Keep the final official time or distance rather than adding unsupported digits to force a point. The display shows integers because points themselves are discrete under this procedure."
      },
      {
        "title": "Combined events versus general scoring",
        "text": "World Athletics publishes general scoring tables for comparisons across athletics disciplines as well as tables for combined events. They serve different purposes. A general-table revision does not automatically replace the combined-events formula used here. This page is scoped to the men’s decathlon, not women’s heptathlon, indoor combined events, youth specifications or para classifications. Source coefficients and the source-document fingerprint are retained in the project so this implementation can be checked against the referenced table."
      },
      {
        "title": "A calculation does not certify a meet",
        "text": "A total can be calculated from hypothetical performances, but official acceptance also depends on the competition rules and validity of the recorded performances. Equipment, hurdle specifications, timing, wind information, participation and event conduct cannot be established from ten numbers. A foul or missing result is not a positive numeric performance and is not silently fabricated. Compare with the official results service when using a real meet record. This worksheet is useful for points arithmetic and transparent scenario comparison only."
      }
    ],
    "limitations": "Entering 1500 m decimal minutes as seconds. Read the total alongside all ten rows. A surprisingly high or low field score should prompt a unit and event-order check before an athletic conclusion. The score differences between two scenarios reflect only the supplied performances and fixed coefficients. They do not predict whether an athlete can achieve those performances together in a two-day meet, and they do not identify the best training intervention. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Which decathlon is supported?",
        "answer": "The men’s outdoor ten-event coefficient set in the linked combined-events tables."
      },
      {
        "question": "Can I paste minutes and seconds?",
        "answer": "Convert running times to total seconds first; every input must be numeric."
      },
      {
        "question": "Should I enter jump centimetres?",
        "answer": "No. Enter metres; jump values are converted internally to centimetres."
      },
      {
        "question": "Does it round points normally?",
        "answer": "No. It truncates each nonnegative event score before summing."
      },
      {
        "question": "Can I use manual sprint times?",
        "answer": "This interface accepts fully automatic sprint records only; manual timing needs separate rule treatment."
      }
    ]
  },
  {
    "slug": "dotted-note-duration-calculator",
    "title": "Dotted Note Duration Calculator",
    "shortTitle": "Dotted Note Duration",
    "description": "Convert a dotted note into quarter-note beats, seconds and milliseconds from an explicit tempo, note denominator and augmentation-dot count.",
    "icon": "⌘",
    "category": "Music",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "dotted calculator",
      "dotted note calculator",
      "dotted eighth note delay calculator"
    ],
    "intro": "A dotted calculator can mean several unrelated tasks. This page specifically calculates musical augmentation dots: the dot to the right of a note or rest extends its written duration. Choose the base note, enter a quarter-note tempo and specify the number of dots. The result expresses that single duration as quarter-note beats and clock time. It is useful for reading notation or setting a timing reference when the tempo remains constant.",
    "formula": "Dot multiplier = 1 + 1/2 + … + 1/2^dots = 2 − 2^(−dots). Quarter-note beats = (4 / denominator) × multiplier. Seconds = beats × 60 / quarter-note BPM.",
    "example": "At quarter note = 120 BPM, one quarter-note beat lasts 0.5 seconds. A dotted eighth has denominator 8 and one dot: its beat count is (4/8) × 1.5 = 0.75 beats. Its duration is 0.375 seconds, or 375 ms. A double-dotted eighth has multiplier 1.75, giving 0.875 beats and 437.5 ms at the same tempo. Changing the dot count changes duration without changing the underlying tempo.",
    "howTo": [
      "Express the tempo as quarter notes per minute.",
      "Choose the undotted base note denominator and augmentation-dot count.",
      "Click Calculate result and read quarter-note beats, seconds and milliseconds.",
      "Check beat-unit conversion before transferring the duration to notation or audio settings."
    ],
    "considerations": [
      {
        "title": "The tempo beat is explicitly a quarter note",
        "text": "The BPM input always refers to quarter notes per minute. A marking of dotted quarter = 80 is a different beat unit; convert it to quarter note = 120 before using this interface. A half-note tempo likewise needs conversion. The numerator of a time signature does not automatically determine the metronome beat. Making the beat unit explicit avoids a timing error even when the same numerical BPM appears in two scores."
      },
      {
        "title": "Augmentation dots form a geometric series",
        "text": "One augmentation dot adds half the base duration. A second adds half of the first addition, and a third adds half of the second. Thus the sequence of multipliers is 1, 1.5, 1.75 and 1.875 for zero through three dots. Successive dots approach twice the base duration without reaching it for any finite dot count. They do not each add another half of the original note. The formula evaluates that finite series directly."
      },
      {
        "title": "Select the underlying note denominator",
        "text": "A whole note has denominator one, a half note two, a quarter note four and an eighth note eight. The selected denominator describes the undotted base note. The calculator offers denominators through 128 and dot counts from zero through eight. Zero dots is a useful reference that reproduces the ordinary written note value. The denominator is not a count of notes already performed or the number of beats in an entire bar."
      },
      {
        "title": "Notation dots have different meanings",
        "text": "An augmentation dot follows the note or rest and changes duration. A staccato dot above or below a note concerns articulation and does not supply a universal numerical shortening factor. This page does not turn staccato notation into a fixed millisecond duration. A repeat sign’s dots and a dotted barline also have other meanings. Confirm that the dot being counted is an augmentation dot before applying the duration formula."
      },
      {
        "title": "Rests and tied notes",
        "text": "The same augmentation multiplier can describe a dotted rest because it changes a written duration in the same geometric way. A tie joins durations, so a dotted quarter can be represented as a quarter tied to an eighth in an appropriate notation context. That equivalence concerns total duration, not how a performer articulates separate notes. If several notes are tied across a changing tempo, compute the relevant segments separately rather than applying one constant tempo to the entire phrase."
      },
      {
        "title": "Meters and tuplets are additional instructions",
        "text": "Compound meter can make the performed beat a dotted note even though this worksheet uses a quarter-note reference. Tuplet instructions change the distribution of durations within an indicated span and are not inferred from a denominator alone. Swing, rubato, fermatas and expressive timing also require performance choices beyond fixed mathematical note values. Use this calculator for the plain written dotted duration at a stated constant tempo; keep those additional instructions separate."
      },
      {
        "title": "Milliseconds are a timing reference",
        "text": "A millisecond result can help compare a delay setting or rhythmic subdivision, but it does not establish an audio plugin’s latency or phase alignment. A delay repeats an audio event, whereas a written note duration describes a notated time span. Hardware may round its own settings or use a different tempo-sync reference. Check the device’s note-value convention and verify by listening or measurement when the calculated duration is transferred into an audio workflow."
      }
    ],
    "limitations": "Treating a staccato dot as a duration multiplier. The beat result is independent of BPM, while seconds and milliseconds are inversely proportional to BPM. This distinction is useful when comparing notation with a tempo change: the written rhythmic fraction can stay the same even though the elapsed duration changes. The fraction-of-whole-note output provides another way to check the selected denominator without assuming how many beats a particular meter contains. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "How long is a dotted eighth at 120 BPM?",
        "answer": "With quarter-note BPM, it lasts 375 milliseconds."
      },
      {
        "question": "Does the second dot add another half note value?",
        "answer": "No. It adds one quarter of the original base duration."
      },
      {
        "question": "Can I calculate an undotted note?",
        "answer": "Yes. Set augmentation dots to zero."
      },
      {
        "question": "Is a staccato dot included?",
        "answer": "No. This calculation is for duration-changing augmentation dots."
      },
      {
        "question": "Does BPM refer to a dotted quarter?",
        "answer": "No. Convert that marking to an equivalent quarter-note BPM before entering it."
      }
    ]
  },
  {
    "slug": "matrix-basis-calculator",
    "title": "Matrix Basis, Rank and Null Space Calculator",
    "shortTitle": "Matrix Basis, Rank and Null Space",
    "description": "Find numerical RREF, rank, pivot columns and bases for column, row and null spaces of a real matrix, with a disclosed pivot tolerance.",
    "icon": "⌘",
    "category": "Education",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "basis calculator",
      "matrix basis calculator",
      "null space basis calculator",
      "rref rank calculator"
    ],
    "intro": "This basis calculator identifies independent directions associated with a real matrix. It reports the row-reduced matrix and three different space bases instead of treating the word basis as one interchangeable result. Use it to check a linear algebra exercise, inspect dependence in a small data matrix or verify a homogeneous system. The algorithm uses numerical floating-point elimination, so its disclosed rank tolerance matters when entries are nearly dependent.",
    "formula": "Row-reduce A with partial pivoting. Pivot count is rank. Original pivot columns form a column-space basis. Nonzero RREF rows form a row-space basis. Free variables generate a basis of Ax = 0.",
    "example": "For A with rows [1,2,3] and [2,4,6], the second row is twice the first. Its RREF is [1,2,3] followed by [0,0,0]. Rank is 1 and nullity is 2. The original first column [1,2] is a column-space basis. Setting the second free variable to one gives a null vector [−2,1,0]; setting the third to one gives [−3,0,1]. Multiplying A by either vector produces the zero vector.",
    "howTo": [
      "Paste the rectangular real matrix with one row per line.",
      "Verify every row has the same number of columns and no symbolic fractions.",
      "Click Calculate result to inspect RREF, pivots and the three space bases.",
      "Multiply each null-space vector by the original matrix and review numerical tolerance."
    ],
    "considerations": [
      {
        "title": "Enter a rectangular matrix",
        "text": "Paste one row per line, with entries separated by spaces or commas. Every row must have the same number of columns. The supported size is one through eight rows and one through eight columns, with real finite entries bounded in magnitude by one million. Fractions such as 1/3 are not parsed as symbolic expressions; enter an appropriate decimal approximation and recognize its precision. Labels, complex numbers and an empty row are rejected rather than silently removed."
      },
      {
        "title": "Rank counts pivot directions",
        "text": "Partial pivoting chooses the largest available entry in the current column before normalizing the pivot row and eliminating that column elsewhere. The count of accepted pivots is the numerical rank. For an m-by-n matrix, rank cannot exceed either m or n. Pivot columns describe independent input columns under the stated tolerance. Their positions are displayed using one-based numbering, so column one means the first visible column, not a programming index."
      },
      {
        "title": "Use original columns for column space",
        "text": "Row operations preserve the relationships between columns but generally change the column vectors themselves. The column-space basis therefore takes the pivot column positions from RREF and selects those columns from the original matrix. Copying pivot columns directly out of RREF would describe a transformed column space rather than necessarily the original one. The output lists each original column vector separately and retains its original number of row coordinates."
      },
      {
        "title": "Nonzero reduced rows form a row basis",
        "text": "Elementary row operations preserve the span of the rows. The independent nonzero RREF rows can therefore serve as a row-space basis. These vectors have one coordinate per original matrix column, which differs from the dimension of an original column vector when the matrix is rectangular. A basis is not unique: another independent set can span the same space. A different valid answer does not have to match the exact displayed vector entries."
      },
      {
        "title": "Null space solves the homogeneous system",
        "text": "Null vectors have n coordinates and satisfy Ax = 0. For each free column, the worksheet sets its free variable to one and the other free variables to zero, then reads the required pivot-variable values from RREF. These generated vectors span the numerical null space. If every column is a pivot, the null space contains only the zero vector and its basis is empty; the zero vector itself is not an independent basis vector."
      },
      {
        "title": "Tolerance determines numerical dependence",
        "text": "The pivot threshold is 10^−10 times the largest absolute entry in the original matrix. Entries below that scale can be treated as numerically zero when deciding rank. Rows with no accepted pivot are treated as numerical zero rows. Normalized display values smaller than 10^−10 are also shown as zero. This convention is not exact rational algebra and is not a measurement uncertainty model. Near-dependent matrices may need higher precision, exact arithmetic or a singular-value method. Review the original scale when a tiny perturbation changes a pivot decision."
      },
      {
        "title": "Check dimensions and products",
        "text": "A column-space basis contains rank vectors of length m; a row-space basis contains rank vectors of length n. A null-space basis contains n minus rank vectors, each of length n. These counts provide quick consistency checks. Multiply every displayed null vector by the original matrix, not the reduced matrix alone, to inspect residuals. For floating-point input, small residuals should be interpreted relative to the input scale rather than demanding literal binary zero."
      }
    ],
    "limitations": "Using reduced columns as a basis of the original column space. Read rank together with nullity and the actual vector lengths. The RREF supplies the pivot equations; the original-column basis preserves the original output directions. If a data matrix is badly scaled or nearly dependent, the result is a numerical classification under a stated tolerance, rather than proof of exact symbolic dependence. Keep the original matrix and threshold with any reported basis. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Can a basis differ from my textbook answer?",
        "answer": "Yes. A space can have many valid bases; compare span and independence."
      },
      {
        "question": "Are column basis vectors taken from RREF?",
        "answer": "No. Pivot positions select vectors from the original matrix."
      },
      {
        "question": "What does an empty null-space basis mean?",
        "answer": "Only the zero vector solves Ax = 0 under the numerical rank decision."
      },
      {
        "question": "Can I enter exact fractions?",
        "answer": "No. This interface accepts real decimal numbers and uses floating-point arithmetic."
      },
      {
        "question": "How large can the matrix be?",
        "answer": "The supported bound is eight rows by eight columns."
      }
    ]
  },
  {
    "slug": "complex-number-calculator",
    "title": "Complex Number Arithmetic Calculator",
    "shortTitle": "Complex Number Arithmetic",
    "description": "Add, subtract, multiply or divide two complex numbers and inspect the real part, imaginary coefficient, modulus and principal argument.",
    "icon": "⌘",
    "category": "Education",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "complex number calculator",
      "complex arithmetic calculator",
      "complex multiplication calculator"
    ],
    "intro": "This complex-number calculator works with rectangular values supplied as separate real and imaginary coefficients. It supports the four basic arithmetic operations and gives a polar interpretation of the resulting value. Complex arithmetic is a distinct task from ordinary real-number calculation because products use i² = −1 and division must account for both denominator components. The page makes those components explicit instead of parsing an ambiguous expression string.",
    "formula": "(a+bi)(c+di) = (ac−bd)+(ad+bc)i. Division by c+di uses [(ac+bd)+(bc−ad)i]/(c²+d²). Modulus = √(real²+imaginary²); argument = atan2(imaginary,real).",
    "example": "Multiply 3+2i by 1−4i. The real term is 3×1 − 2×(−4) = 11, and the imaginary coefficient is 3×(−4) + 2×1 = −10. The result is 11−10i. Its modulus is √221, about 14.8661, and its principal argument is about −42.2737 degrees. Dividing that result by 1−4i returns 3+2i, providing an independent inverse check of the multiplication.",
    "howTo": [
      "Enter each complex number as separate real and imaginary coefficients.",
      "Select addition, subtraction, multiplication or division.",
      "Click Calculate result to obtain the rectangular output, modulus and principal argument.",
      "For division, verify the second complex number is nonzero and check by multiplication."
    ],
    "considerations": [
      {
        "title": "Separate coefficients from the imaginary unit",
        "text": "Enter a and b for the first number a+bi, then c and d for the second. For 3−2i, the real input is 3 and the imaginary input is −2. Do not paste the letter i, a degree symbol or an entire expression into a numeric field. The displayed result handles the sign between terms, so a negative imaginary coefficient appears with a subtraction sign rather than an awkward plus-negative notation."
      },
      {
        "title": "Addition and subtraction preserve components",
        "text": "Addition combines the real components and the imaginary components separately. Subtraction changes the signs of both components of the second number before combining them. A zero real component does not mean the number is zero if its imaginary component is nonzero. These operations can also be understood as adding or subtracting two-dimensional coordinate vectors, although the complex multiplication rule adds a structure that ordinary coordinate addition alone does not describe."
      },
      {
        "title": "Multiplication uses the defining relation",
        "text": "Expanding the product gives ac, adi, bci and bdi². Since i² equals −1, the last term contributes −bd to the real part. The remaining imaginary coefficient is ad+bc. This is why multiplying two imaginary coefficients does not simply produce another imaginary coefficient. Multiplication by i rotates a nonzero complex value by a quarter turn in the mathematical plane, while multiplying by a positive real number scales its magnitude."
      },
      {
        "title": "Division requires a nonzero complex denominator",
        "text": "A denominator is zero only when both its real and imaginary components are zero. A purely imaginary denominator can still be valid. Multiplying numerator and denominator by the denominator’s conjugate produces the real denominator c²+d² used by this worksheet. The calculator rejects division by complex zero. Very small denominators can amplify numerical error and create very large outputs, so check the scale rather than assuming every displayed decimal remains reliable."
      },
      {
        "title": "Modulus is nonnegative magnitude",
        "text": "The modulus is the Euclidean length of the result in the complex plane. It is zero exactly for the zero result and otherwise positive. Moduli multiply under complex multiplication and divide under valid division. The modulus is not the signed real component or the sum of the absolute coefficients. A number with a negative real part can have a positive modulus, just as a coordinate point left of the origin has positive distance from it."
      },
      {
        "title": "Principal argument uses both coordinates",
        "text": "The argument is reported in degrees using atan2 so the sign and quadrant are preserved. An ordinary arctangent of imaginary divided by real would lose quadrant information and fail for a zero real component. The reported principal angle follows the browser atan2 branch convention between −180 and 180 degrees. Angles differing by a full turn represent the same nonzero direction. Zero has no defined argument and is explicitly labeled rather than assigned a misleading direction."
      },
      {
        "title": "Numerical scope and other complex functions",
        "text": "Inputs are finite real coefficients within the disclosed numeric bounds. This calculator does not evaluate complex roots, logarithms, symbolic simplification, branch cuts for multivalued functions or arbitrary precision. The modulus and argument describe the result of the selected arithmetic operation, not a second selected operation. If a problem requires exact fractions or radicals, use the decimal outputs as a check and retain the exact algebra separately. Display precision does not increase the precision of the supplied coefficients."
      }
    ],
    "limitations": "Dropping the negative sign from i². Read the rectangular result first and use modulus and argument as a second representation of the same number. The real and imaginary outputs can be transferred into a later arithmetic check without parsing typography. A principal angle describes direction under a branch convention, so crossing the negative real axis may produce a jump between nearly +180 and −180 degrees without a large physical change in the represented point. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "How do I enter a negative imaginary part?",
        "answer": "Enter its signed coefficient, such as −4, without the letter i."
      },
      {
        "question": "Is a purely imaginary denominator allowed?",
        "answer": "Yes, if its imaginary coefficient is nonzero."
      },
      {
        "question": "Why does multiplying i by i give a negative real value?",
        "answer": "The defining relation is i² = −1."
      },
      {
        "question": "What angle unit is reported?",
        "answer": "The principal argument is displayed in degrees."
      },
      {
        "question": "Does zero have an argument?",
        "answer": "No. The output marks its argument as undefined."
      }
    ]
  },
  {
    "slug": "snow-weight-load-calculator",
    "title": "Measured Snow Weight and Surface Load Calculator",
    "shortTitle": "Measured Snow Weight and Surface Load",
    "description": "Calculate measured snow mass, weight and surface pressure from depth and density or water equivalent, with area and explicit gravity units.",
    "icon": "⌘",
    "category": "Home",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "snow load calculator",
      "snow weight calculator",
      "snow water equivalent load calculator"
    ],
    "intro": "This snow load calculator is a measured mass worksheet. It translates a known snow depth and bulk density, or a known snow water equivalent, into mass and weight over an explicitly represented area. It does not obtain a design ground snow load from a postcode or assess structural capacity. Its purpose is transparent unit arithmetic using observations you already have, with the difference between mass per area and force per area shown clearly.",
    "formula": "Depth mode: mass/area = depth × bulk density. SWE mode: mm water equivalent = kg/m² using water density 1,000 kg/m³. Pressure kPa = mass/area × 9.80665 / 1,000.",
    "example": "A uniform represented depth of 0.30 m with measured bulk density 200 kg/m³ gives 60 kg/m². At standard gravity, this corresponds to 0.588399 kPa. Over 100 m², the modeled mass is 6,000 kg and weight is 58.8399 kN. A measured water equivalent of 60 mm gives the same mass per area under the stated water-density assumption. Neither input establishes whether a roof can carry that load.",
    "howTo": [
      "Choose measured depth-density mode or measured snow water equivalent.",
      "Enter metres and kg/m³ for depth mode, or millimetres of SWE for water-equivalent mode.",
      "Supply the compatible represented area in m² and click Calculate result.",
      "Review mass and pressure units; obtain a separate structural assessment for capacity decisions."
    ],
    "considerations": [
      {
        "title": "Depth alone cannot establish snow mass",
        "text": "Snow depth describes geometry, while density describes mass per volume. Equal depths of dry, compacted and wet snow can carry different masses. This calculator therefore requires a supplied bulk density in depth mode rather than assigning a universal fresh-snow value. Density must describe the whole represented layer on a compatible basis. A density measured for a small surface sample may not describe a layered pack, a refrozen region or a drift elsewhere."
      },
      {
        "title": "Water equivalent is a different measurement",
        "text": "Snow water equivalent describes the depth of liquid water represented by a snow column. Under the stated 1,000 kg/m³ liquid-water density assumption, one millimetre corresponds to one kilogram per square metre. In SWE mode, the second input is millimetres of water equivalent rather than metres of snow depth. The density input is unused in that mode. Do not substitute forecast snowfall depth, rainfall from a different period or an assumed snow-to-water ratio for an actual compatible water-equivalent measurement."
      },
      {
        "title": "Mass and weight have different units",
        "text": "Kilograms describe mass. Weight is a force obtained by multiplying mass by gravitational acceleration. The page uses standard gravity, 9.80665 m/s², as an explicitly fixed conversion reference. Mass per square metre multiplied by gravity gives pascals; division by one thousand gives kilopascals. A statement of kilograms per square metre is therefore not numerically identical to kilonewtons per square metre. The output displays both quantities to make the conversion auditable."
      },
      {
        "title": "Area must match the represented layer",
        "text": "The area input is square metres over which the entered depth or SWE is being treated as uniform. Multiplying mass per area by that area gives a represented total mass. A roof’s horizontal projected area and its actual sloped surface area are different geometric quantities; use the basis compatible with the observation and keep that convention in your record. This worksheet does not choose a roof-area basis from a building description or redistribute snow between slopes."
      },
      {
        "title": "Uniform loading is a simplified model",
        "text": "Drifts, sliding snow, ice, ponding water and uneven melting can produce nonuniform or additional loads. One mean measurement can conceal a heavily loaded local region. The calculated pressure is an average under the uniform model, not a map of forces on rafters or supports. If several distinct measured regions exist, evaluate their quantities separately and retain their areas; do not treat the sum of masses as proof that every local structural demand is acceptable."
      },
      {
        "title": "Design snow load requires other information",
        "text": "Building-code snow design involves location, applicable standard, exposure, thermal effects, roof geometry, drift and other criteria. A structural capacity assessment also requires the actual construction and condition. This page deliberately makes no capacity comparison, code certification or safe-removal recommendation. The supplied mass arithmetic can be one item in a professional record, but a low numerical average does not establish safety. Obtain a site-specific qualified assessment where structural decisions are involved."
      },
      {
        "title": "Use observations without unsafe collection",
        "text": "The calculator operates on observations already available. It does not require climbing onto a roof or collecting samples from an unsafe location. Record the measurement method, date, layer and area represented so another reader knows what the numbers mean. Conditions can change after rain, thawing or further snow, making an old observation unsuitable for a new assessment. Density and water equivalent are supplied inputs, and the worksheet cannot verify their accuracy or representativeness."
      }
    ],
    "limitations": "Entering snow depth in millimetres in the metre depth field. Compare mass per area and pressure before total mass. Area changes the total quantity without changing the uniform pressure. Depth and density each scale depth-mode mass linearly; SWE directly scales mass per area. These relationships help locate arithmetic mistakes, but they cannot establish whether the measurement describes a real building uniformly. Keep the measurement and geometric basis with the result. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Can depth by itself give snow weight?",
        "answer": "No. Depth mode also needs a representative bulk density."
      },
      {
        "question": "What unit does SWE use?",
        "answer": "Enter snow water equivalent in millimetres of liquid water."
      },
      {
        "question": "Are kg/m² and kPa the same?",
        "answer": "No. The conversion includes gravitational acceleration and a factor of one thousand."
      },
      {
        "question": "Does the output say a roof is safe?",
        "answer": "No. Structural capacity and code design are outside this worksheet."
      },
      {
        "question": "Why is density ignored in SWE mode?",
        "answer": "Water equivalent already supplies mass per area under the stated water-density assumption."
      }
    ]
  },
  {
    "slug": "labrador-human-age-calculator",
    "title": "Labrador to Human Age Comparison Calculator",
    "shortTitle": "Labrador to Human Age Comparison",
    "description": "Apply the published Labrador epigenetic age comparison using natural logarithms, with breed confirmation and clear population limits.",
    "icon": "⌘",
    "category": "Animals",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "dog age calculator",
      "age calculator of dog",
      "human years to dog years calculator",
      "labrador human age calculator"
    ],
    "intro": "A dog age calculator often uses a universal multiply-by-seven rule. This page instead implements one published epigenetic comparison developed from Labrador retrievers and requires that population scope to be acknowledged. The logarithmic mapping describes a comparison of aging patterns across species. It does not make all breeds share one timetable or turn a chronological age into an individual veterinary assessment. The result is labeled as a human-age comparison for that reason.",
    "formula": "Published comparison: human age = 16 × ln(Labrador age in years) + 31. This page supports ages 1–16 years and requires Labrador population confirmation.",
    "example": "For a one-year-old Labrador, ln(1) is zero and the formula gives 31 human-comparison years. At four years, 16×ln(4)+31 is about 53.1807. At eight years it is about 64.2711. Doubling dog age adds 16×ln(2), about 11.0904 comparison years, regardless of the starting age within the supported range. These values illustrate a nonlinear population mapping; they are not a dog’s predicted lifespan or a diagnosis.",
    "howTo": [
      "Choose forward dog-to-human comparison or the mathematical reverse mapping.",
      "Confirm Labrador population scope and enter a compatible age within the displayed range.",
      "Click Calculate result to apply the natural-logarithm comparison.",
      "Retain the Labrador scope and comparison label; do not interpret the number as lifespan."
    ],
    "considerations": [
      {
        "title": "Chronological age is the input",
        "text": "In forward mode, enter the dog’s age in decimal years based on a known or reasonably documented birth date. Months can be divided by twelve for an approximate year fraction, but the page supports only one through sixteen years. An age estimate for an adopted dog retains its original uncertainty after calculation. The equation cannot discover a birth date from appearance, behaviour, tooth condition or a guessed breed. Preserve the original age record when comparing results."
      },
      {
        "title": "The source population was Labrador retrievers",
        "text": "The published study compared methylation-related aging patterns using Labrador dogs and human data. A breed-specific study does not establish one calibrated equation for all sizes and breeds. This interface therefore requires explicit Labrador confirmation and rejects the Other or unknown selection. It does not offer decorative breed choices that all produce the same unsupported formula. Mixed breeds and other dogs require evidence suited to their population rather than a relabeled Labrador calculation."
      },
      {
        "title": "Natural logarithms produce a nonlinear map",
        "text": "The ln symbol means logarithm to base e, not base ten. The rate of change is 16 divided by dog age, so one additional chronological year produces a smaller comparison-age increase at older ages. This is why multiplying by a fixed number cannot reproduce the curve across the supported range. The output is a mapping under the published expression, not a claim that biological development proceeds at one constant cross-species ratio."
      },
      {
        "title": "Young development is outside this interface",
        "text": "Reverse mode applies exp((human comparison age − 31)/16), restricted to the comparison range generated by dog ages one through sixteen. This is a mathematical inverse, not independent evidence that a human and dog are equivalent. The formula’s early-age behaviour is not used to infer a puppy’s developmental milestones here. Below one year, this worksheet rejects the input rather than extrapolating a number that could be misread as a universal childhood equivalence. Growth, maturation and health decisions involve multiple biological processes. A clock-age equation cannot tell when a specific dog should receive a procedure, change diet or undertake a particular level of exercise."
      },
      {
        "title": "Epigenetic comparison is not a clinical finding",
        "text": "The page uses chronological age as input to the published mapping; it does not analyse an individual methylation sample. The calculated number should not be called a measured epigenetic age for that dog. Disease, lifestyle, inherited traits and environment are not entered. Two Labradors with the same chronological age receive the same comparison value regardless of individual health. Veterinary interpretation depends on direct assessment and appropriate records, not this mapping alone."
      },
      {
        "title": "No lifespan or remaining-years forecast",
        "text": "Subtracting the comparison result from a typical human lifespan would not yield a supported number of dog years remaining. Lifespan is a different outcome, and the logarithmic mapping is not a mortality model. It also cannot establish that an older dog is healthy because its comparison age falls near a familiar human age. Use the output for understanding the published relationship and its nonlinearity, while keeping individual care and prognosis separate."
      },
      {
        "title": "Communicate the model with the result",
        "text": "When sharing an example, include the dog’s chronological age, Labrador scope, the equation and the fact that it is a population comparison. A bare number labeled human years can imply more precision than the method supports. The calculator shows the model and input age alongside the result to preserve context. Displayed decimal places reflect arithmetic, not certainty about biological equivalence or the study’s suitability for every Labrador."
      }
    ],
    "limitations": "Using a base-ten logarithm. Read the result as a model comparison and retain the original dog age as the actual chronological record. The curve rises rapidly early and more slowly later, so equal chronological increments do not map to equal human-age increments. That mathematical feature can explain why a fixed multiplier gives different answers, without establishing that this equation is an individual health score. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does this support every dog breed?",
        "answer": "No. It is explicitly scoped to the published Labrador comparison."
      },
      {
        "question": "Is ln the base-ten logarithm?",
        "answer": "No. ln is the natural logarithm."
      },
      {
        "question": "Can I use it for a puppy under one year?",
        "answer": "This interface rejects ages below one year."
      },
      {
        "question": "Does the result predict lifespan?",
        "answer": "No. It is an age comparison, not a survival forecast."
      },
      {
        "question": "Does it measure my dog’s biological age?",
        "answer": "No. It applies a population expression to supplied chronological age."
      }
    ]
  },
  {
    "slug": "golf-handicap-worksheet",
    "title": "Golf Handicap and Score Differential Worksheet",
    "shortTitle": "Golf Handicap and Score Differential Worksheet",
    "description": "Calculate an 18-hole score differential or inspect raw index arithmetic from recorded differentials, with current count rules and scope limits.",
    "icon": "⌘",
    "category": "Sports",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "golf handicap calculator",
      "handicap calculator",
      "handicap calculator golf",
      "calculate golf handicap",
      "golf score differential calculator"
    ],
    "intro": "This golf handicap calculator separates one round’s score differential from raw index arithmetic over a supplied record. Those are different stages of handicapping and require different inputs. It uses the modern count procedure rather than the older ten-of-twenty rule or a 0.96 multiplier. The result is deliberately a worksheet comparison: it cannot issue an official Handicap Index or replace an authorized scoring service and committee record.",
    "formula": "18-hole differential = round to one decimal[113 / slope × (adjusted gross score − course rating − PCC)]. Raw index uses the appropriate lowest-differential count and fewer-score adjustment.",
    "example": "An adjusted gross score of 90, course rating 70.2, slope 125 and PCC zero gives 113/125 × 19.8 = 17.8992, rounded to 17.9. For three recorded differentials 15.3, 15.2 and 16.6, the fewer-than-twenty procedure uses the lowest one, 15.2, then subtracts 2.0: raw arithmetic is 13.2. Neither example includes committee review, exceptional-score reductions or safeguards tied to an established scoring history.",
    "howTo": [
      "Choose a single eighteen-hole differential or a raw-index worksheet.",
      "For a round, supply already adjusted score, matching ratings and official PCC; for index arithmetic, paste three through twenty recorded differentials.",
      "Click Calculate result and review unrounded or selected-average intermediate values.",
      "Compare with the authorized scoring record and account for excluded safeguards separately."
    ],
    "considerations": [
      {
        "title": "Use an already adjusted eighteen-hole score",
        "text": "The single-round mode requires the adjusted gross score for a valid eighteen-hole record. Applicable hole-score limits and other score adjustments must already have been handled. The page cannot reconstruct them from a total score alone. It does not convert a nine-hole score into an eighteen-hole differential, estimate an unplayed hole or decide whether a round is acceptable. A positive integer total is necessary for the arithmetic but does not prove eligibility."
      },
      {
        "title": "Match course and slope ratings to the round",
        "text": "Course Rating and Slope Rating must describe the actual tees and relevant rated course record. Par is not a substitute for Course Rating. The slope input is a whole number from 55 through 155. A different set of tees can change both ratings even at the same course. Copying a rating from a generic course listing without matching the tees can create a plausible-looking but incorrect differential. Keep the rating record with the score."
      },
      {
        "title": "PCC is an official supplied adjustment",
        "text": "The playing conditions calculation input is selected from −1, zero, +1, +2 or +3. It is not a subjective weather estimate. Use the official PCC for that round, or an appropriately recorded zero when no adjustment applies. A positive PCC is subtracted within the score-differential expression. This worksheet does not calculate PCC from player scores, temperature or wind. Its select control prevents unsupported intermediate values."
      },
      {
        "title": "Recorded differentials are the index inputs",
        "text": "For raw-index mode, paste three through twenty recorded differentials, one per line, already rounded to one decimal. Use the most recent relevant record rather than choosing only favourite rounds. Sorting to find the lowest differentials occurs inside the worksheet. If more than twenty scores exist, choose the appropriate most recent twenty from the authorized record before pasting. The worksheet has no dates, history store or score-posting connection and cannot select them automatically."
      },
      {
        "title": "Fewer-score counts differ by record length",
        "text": "Three, four and five scores use the lowest one, with adjustments of −2, −1 and zero respectively. Six uses the lowest two with −1; seven or eight uses two without adjustment. Nine through eleven uses three, twelve through fourteen uses four, fifteen or sixteen uses five, seventeen or eighteen uses six, nineteen uses seven and twenty uses eight. The displayed used values and adjustment expose the exact arithmetic instead of concealing the count behind one result."
      },
      {
        "title": "Raw arithmetic excludes official safeguards",
        "text": "Official processing can apply exceptional-score reductions, committee adjustments and soft or hard caps related to an established low index. This worksheet does not have the history required to implement them and does not claim to enforce the official maximum. The result may therefore differ from an issued Handicap Index even when the entered differentials are accurate. Do not overwrite an official record based on the worksheet. Use it to understand the underlying selected-average calculation."
      },
      {
        "title": "Negative arithmetic and rounding",
        "text": "A negative signed raw value is displayed using golf’s plus convention, alongside the actual signed numerical value. Thus signed −1.2 appears as +1.2 in the main raw-index output. Differentials themselves remain signed values. The worksheet rounds arithmetic to the nearest tenth, using magnitude-based half-away-from-zero handling for tie cases. Keep the displayed unrounded round differential when checking where rounding entered; do not round Course Rating to a whole number first."
      }
    ],
    "limitations": "Entering raw gross score before applicable hole limits. The score-differential mode shows both rounded and unrounded values. The raw-index mode shows selected low differentials and the record-length adjustment, so another reader can reproduce the average. Compare those intermediate values before comparing the final display with a scoring service. A plus display is a sign convention, not a switch to adding a positive signed differential. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does this issue an official handicap?",
        "answer": "No. It is an arithmetic worksheet without full scoring history or committee processing."
      },
      {
        "question": "Should I enter par as Course Rating?",
        "answer": "No. Use the matching official Course Rating for the relevant tees."
      },
      {
        "question": "Can I enter a nine-hole total?",
        "answer": "No. This differential mode supports an already adjusted eighteen-hole score."
      },
      {
        "question": "Does it use a 0.96 multiplier?",
        "answer": "No. That older calculation is not used."
      },
      {
        "question": "Why might my official index differ?",
        "answer": "Caps, exceptional-score reductions, adjustments or a different valid record can change official processing."
      }
    ]
  },
  {
    "slug": "absolute-neutrophil-count-calculator",
    "title": "Absolute Neutrophil Count Calculator",
    "shortTitle": "Absolute Neutrophil Count",
    "description": "Calculate ANC from a reported white-cell count and neutrophil percentages, with explicit laboratory units and a check against double-counting bands.",
    "icon": "⌘",
    "category": "Health",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "anc calculator",
      "absolute neutrophil count calculator",
      "calculate anc"
    ],
    "intro": "This ANC calculator performs arithmetic from an existing laboratory record. It makes the WBC unit and differential convention explicit because both can change the numerical interpretation substantially. The result is a calculated absolute neutrophil count under those supplied values. It does not classify clinical severity, diagnose infection, decide treatment eligibility or infer a personal reference range. Compare it with the laboratory’s own reported absolute count and the treating clinician’s interpretation.",
    "formula": "ANC = WBC × (mature neutrophils % + separate bands %) / 100. In combined-percentage mode, bands must be zero. A WBC value in 10⁹/L converts to cells/µL by multiplying by 1,000.",
    "example": "A reported WBC of 4.5 ×10⁹/L equals 4,500 cells/µL. Separate mature neutrophils of 40% and bands of 2% give a combined fraction of 42%. ANC arithmetic is 4,500×0.42 = 1,890 cells/µL, or 1.89 ×10⁹/L. If the report already lists a combined neutrophil percentage of 42%, choose Combined and enter zero bands to obtain the same result without counting the band component twice.",
    "howTo": [
      "Copy WBC and compatible differential percentages from one laboratory record.",
      "Select the WBC unit and whether mature neutrophils and bands are separate or combined.",
      "Set bands to zero for a combined report and click Calculate result.",
      "Check converted WBC and ANC against the original report; clinical interpretation remains separate."
    ],
    "considerations": [
      {
        "title": "Read the white-cell unit carefully",
        "text": "Laboratories can display WBC as cells per microlitre, thousands of cells per microlitre or billions per litre. The last two have the same numerical scale: 4.5 in either of those thousand-cell conventions corresponds to 4,500 cells/µL. Choose the unit exactly as shown on the report. Entering 4.5 while selecting cells/µL produces a thousandfold different count. The page displays the converted WBC so the unit decision remains visible after submission."
      },
      {
        "title": "Percentages and absolute counts differ",
        "text": "The neutrophil input is a percentage of the total white-cell count, not an already reported absolute neutrophil count. A result of 40% is entered as 40, not 0.40. Multiplying the WBC by the fraction converts the relative proportion into an absolute count. A report can contain both percentage and absolute columns; check the heading before copying a value. An absolute count must not be multiplied by WBC again."
      },
      {
        "title": "Bands must not be counted twice",
        "text": "Choose Separate when mature neutrophils and bands are reported as separate percentages that need summing. Choose Combined when the supplied neutrophil percentage already includes the intended band component, and set bands to zero. The worksheet rejects a nonzero band input in Combined mode. Reporting conventions can vary, so the choice should come from the report or laboratory explanation, not a guess based on the result you expected."
      },
      {
        "title": "Use one compatible specimen record",
        "text": "The total WBC and differential percentages must belong to the same compatible specimen and report. Combining yesterday’s WBC with today’s neutrophil percentage creates arithmetic for a record that was never observed. Date, sample handling and reporting precision also matter. A calculator cannot verify patient identity or specimen quality. Avoid pasting identifying information; the tool needs only the numerical values, units and differential convention."
      },
      {
        "title": "The result is laboratory arithmetic",
        "text": "The output provides ANC in cells/µL and in ×10⁹/L, plus the combined fraction and converted WBC. It intentionally does not assign labels such as safe, dangerous or treatment-ready from one number. Reference ranges, clinical circumstances and care protocols vary. The same calculated count can require different interpretation in different situations. Follow the laboratory and clinical team’s guidance for actual decisions rather than treating this worksheet as a substitute for assessment."
      },
      {
        "title": "Input bounds are arithmetic checks",
        "text": "The WBC must be nonnegative, each percentage must be between zero and one hundred and their sum cannot exceed one hundred. These checks catch impossible arithmetic combinations, but passing them does not prove the input is clinically plausible or accurate. Zero is permitted as a supplied numeric record; the calculator does not interpret its meaning. A very large value may still be mathematically valid within the implementation bound and still need verification against the original report."
      },
      {
        "title": "Reconcile with the laboratory output",
        "text": "A small difference from the laboratory’s absolute count can result from hidden precision, direct instrument output or differential reporting conventions. Use the report’s actual units and available precision before deciding there is an error. Do not change a lab record to force agreement with this calculator. The linked clinical laboratory reference supports the multiplication method, while its clinical interpretation belongs to qualified care. Retain the original record as the authoritative result."
      }
    ],
    "limitations": "Selecting cells/µL for a WBC reported in thousands. Check the converted WBC and combined percentage before reading the ANC. Their product is the entire calculation, so a thousandfold discrepancy usually warrants a unit review. The two ANC units represent the same count on different scales. The numerical output cannot by itself determine an individual diagnosis, prognosis or treatment plan, and a successful arithmetic check does not validate the specimen. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Is ANC a percentage?",
        "answer": "No. ANC is an absolute count; the neutrophil percentage is one input."
      },
      {
        "question": "How does 10⁹/L convert to cells/µL?",
        "answer": "Multiply its displayed numerical value by 1,000."
      },
      {
        "question": "What if neutrophils already include bands?",
        "answer": "Choose Combined and enter zero in the bands field."
      },
      {
        "question": "Does it classify my infection risk?",
        "answer": "No. It performs arithmetic without a diagnostic or treatment category."
      },
      {
        "question": "Why can my lab’s ANC differ slightly?",
        "answer": "The lab may use more precision or a different reporting convention; reconcile with the original report."
      }
    ]
  },
  {
    "slug": "harris-benedict-calculator",
    "title": "Revised Harris–Benedict Resting Energy Calculator",
    "shortTitle": "Revised Harris–Benedict Resting Energy",
    "description": "Estimate adult resting energy with the 1984 revised Harris–Benedict coefficients, explicit units and no hidden activity or intake multiplier.",
    "icon": "⌘",
    "category": "Health",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "harris benedict calculator",
      "harris benedict equation calculator",
      "revised harris benedict calculator"
    ],
    "intro": "The Harris Benedict calculator on this page uses the Roza–Shizgal revision published in 1984. It is a separately named equation from Mifflin–St Jeor, rather than a new label on the same formula. The page exposes the coefficient set, measurement units and adult input scope. It is useful for comparing a documented resting-energy calculation, while keeping a population estimate distinct from measured expenditure and a personal food-intake recommendation.",
    "formula": "1984 male equation: 88.362 + 13.397W + 4.799H − 5.677A. Female equation: 447.593 + 9.247W + 3.098H − 4.330A. W is kg, H cm, A years; result is kcal/day.",
    "example": "For a 70 kg adult, height 175 cm, age 35 and the published male coefficient, the expression is 88.362 + 937.79 + 839.825 − 198.695 = 1,667.282 kcal/day. The female coefficient with those same measurements gives 1,485.483 kcal/day. These are resting-equation estimates. No activity multiplier, weight-loss subtraction, meal plan or exercise allowance is applied to either output.",
    "howTo": [
      "Measure mass in kilograms and height in centimetres.",
      "Enter adult age within the supported bounds and choose the intended published coefficient.",
      "Click Calculate result to evaluate the revised 1984 resting equation.",
      "Record the version and units; do not turn the result directly into an intake prescription."
    ],
    "considerations": [
      {
        "title": "Equation version is part of the answer",
        "text": "Original Harris–Benedict coefficients and the revised 1984 coefficients are not interchangeable. This worksheet implements only the revised version and displays that model name in the result. A spreadsheet using the original expression can disagree without having an arithmetic mistake. Compare the coefficients before comparing final numbers. The page does not silently select a version based on age, weight or a desired calorie result."
      },
      {
        "title": "Use kilograms and centimetres",
        "text": "Body mass is entered in kilograms and height in centimetres. Pounds require multiplication by 0.45359237 to become kilograms; inches require multiplication by 2.54 to become centimetres. Entering inches in a centimetre field changes the height contribution substantially. These inputs describe current measured body size, not a target weight or an idealized height. Keep the measurement date if comparing calculations over time, and avoid inventing extra precision beyond the measurement."
      },
      {
        "title": "The coefficient choice is explicit",
        "text": "The published expressions have male and female coefficient sets. Choose the coefficient used in the intended equation comparison rather than treating the dropdown as a complete account of physiology. The two expressions give different outputs for otherwise identical measurements. This mathematical choice does not establish whether the model is suitable for every individual. Where that suitability is uncertain, an appropriate professional assessment or measured method is more informative than choosing the coefficient that produces a preferred number."
      },
      {
        "title": "Adult bounds prevent unsupported extrapolation",
        "text": "The interface accepts ages eighteen through sixty-five, masses thirty through two hundred fifty kilograms and heights one hundred twenty through two hundred thirty centimetres. These are bounded worksheet controls, not a claim that every combination is validated by the original study. Children, pregnancy-related requirements, illness and individual clinical nutrition are outside the disclosed task. A value within the bounds can still be unsuitable for a person’s actual circumstances."
      },
      {
        "title": "Resting estimate is not daily food allowance",
        "text": "The equation estimates a resting energy quantity. Daily activity, exercise, digestion and other factors are not entered or inferred. The result therefore is not total daily energy expenditure, a weight-maintenance prescription or a recommended calorie intake. Applying an activity factor afterward is a separate modeling decision and requires its own evidence and assumptions. The worksheet keeps that decision separate so the resting equation can be reproduced without a hidden multiplier."
      },
      {
        "title": "Measured expenditure can differ",
        "text": "A population equation can overestimate or underestimate an individual measurement. Body composition and circumstances not represented by weight, height, age and the coefficient choice can affect the difference. More decimal places do not reduce that model error. Indirect calorimetry is a different measurement approach and is not performed by this calculator. If a result will inform clinical nutrition, interpretation belongs with appropriate assessment rather than the equation output alone."
      },
      {
        "title": "Compare methods on identical inputs",
        "text": "When comparing this result with another resting equation, keep the same mass, height and age. The protected Mifflin–St Jeor calculator uses its own coefficients and scope; differences reflect the selected model as well as its assumptions. A comparison does not reveal which estimate is correct for an individual without suitable measurement. Record the equation version and units with every value so a later reader can distinguish a real change in measurements from a change of formula."
      }
    ],
    "limitations": "Confusing the original and revised coefficient sets. Read the model name and input units alongside the kcal/day result. The kJ/day value is the same numerical energy estimate converted using 4.184 kJ per kcal, not a second independent prediction. An estimate from this equation can be compared with another method for study or documentation, but agreement between formulas does not prove that either measures an individual’s actual needs. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Which Harris–Benedict version is used?",
        "answer": "The revised 1984 Roza–Shizgal coefficients."
      },
      {
        "question": "Does it include activity level?",
        "answer": "No. It reports the resting-equation estimate only."
      },
      {
        "question": "Can I enter pounds and inches directly?",
        "answer": "No. Convert mass to kg and height to cm first."
      },
      {
        "question": "Is the output a calorie-intake target?",
        "answer": "No. It is not a dietary prescription or total daily expenditure."
      },
      {
        "question": "Is this the same equation as Mifflin–St Jeor?",
        "answer": "No. They use distinct published coefficient sets."
      }
    ]
  },
  {
    "slug": "adult-shoe-size-converter",
    "title": "Adult Shoe Size Converter — Nike Chart",
    "shortTitle": "Adult Shoe Size Converter",
    "description": "Compare adult US, UK, EU and CM/JP labels in a sourced Nike chart, with measured foot-length lookup and explicit brand-specific limits.",
    "icon": "⌘",
    "category": "Everyday",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "foot size calculator",
      "women's to men's shoe size conversion calculator",
      "shoe size converter and calculator",
      "adult shoe size converter"
    ],
    "intro": "This foot size calculator is an explicit chart comparison rather than a universal shoe-fitting formula. It uses Nike’s adult footwear chart checked on 6 October 2026, with the brand scope acknowledged before calculation. US men’s and women’s labels, UK, EU and CM/JP values are kept on the same source rows. Measured foot length is another input mode, with the published inch values converted to centimetres transparently.",
    "formula": "Use the published chart column as a lookup key; return all matching rows. For measured foot length between chart points, choose the next larger point. Foot cm here = published foot inches × 2.54.",
    "example": "In the checked Nike adult chart, US men 9 corresponds to US women 10.5, UK 8 and EU 42.5. Its CM/JP label is 27, while the listed foot length is 10 5/16 inches, converted here to 26.19375 cm. The two centimetre-looking quantities are different. UK 6 occurs in more than one source row, so a UK 6 lookup returns all those rows instead of pretending the label identifies a single unique size.",
    "howTo": [
      "Confirm that the intended product uses the checked Nike adult chart.",
      "Choose the input label scale or measured foot-length unit.",
      "Enter the published size or compatible measured length and click Calculate result.",
      "Review every matching row and current product fit guidance before using a label."
    ],
    "considerations": [
      {
        "title": "Choose the label system before the value",
        "text": "A numeric shoe size has no unique meaning without its scale and chart. Select US men, US women, UK, EU, CM/JP box label or measured foot length before entering the number. A US women’s nine and a US men’s nine select different rows in this source chart. The worksheet does not guess a scale from the magnitude, country of residence or a previous purchase. Confirm that the intended item uses the stated adult chart."
      },
      {
        "title": "Chart scope is brand specific",
        "text": "Shoe labels can differ between brands, product families and age groups. This page uses a specific Nike adult chart and does not claim that its row equals every brand’s corresponding label. Children’s and infant charts are not included, even where a similar-looking number appears. The scope confirmation starts unconfirmed so a casual number entry does not silently imply universal conversion. The worksheet is an independent comparison and is not affiliated with the manufacturer."
      },
      {
        "title": "CM/JP label is not measured foot centimetres",
        "text": "The source distinguishes its CM/JP box label from measured foot length. They must not be substituted for each other just because both can look like centimetre values. This implementation retains the original box label and derives foot centimetres from the published inch row using the exact 2.54 conversion. That converted length retains the source inch rounding; it is not an independently measured or more precise manufacturer centimetre value."
      },
      {
        "title": "Between-length lookup follows the stated rule",
        "text": "For a measured foot length between two listed points, the worksheet uses the next larger chart point, consistent with the source’s between-size instruction. Exact foot-length points return their matching row. Values outside the chart’s measurement span are rejected instead of extrapolated. Label modes require an exact published label and do not interpolate a made-up half size. A length comparison remains a chart starting point rather than proof of comfortable fit."
      },
      {
        "title": "Duplicate labels are returned transparently",
        "text": "Some scale columns can repeat a label across distinct source rows. The UK and CM/JP columns include examples of this. When a label matches more than one row, the result lists every matching row and its other labels and length value. Choosing the first row arbitrarily would conceal a real ambiguity. Use the additional measurement or product information to understand which row applies rather than treating a duplicate lookup as an algorithm failure."
      },
      {
        "title": "Length alone does not describe fit",
        "text": "Width, foot shape, socks, intended activity and the specific shoe construction can affect comfort and sizing choice. None of those is encoded in the chart lookup. The calculator cannot recommend a width, diagnose a foot condition or promise that a shoe will fit. Consult the actual product’s fitting notes and relevant return options before a purchase. When comparing two feet, preserve the measurement procedure and use the source’s current measuring guidance rather than a guessed length."
      },
      {
        "title": "Check the current product chart",
        "text": "The bundled source snapshot makes this lookup reproducible, but manufacturers can revise charts or give product-specific instructions. The checked date is therefore part of the scope. Follow the official link and compare the intended product’s current guidance before relying on a label for a purchase. A row returned here establishes what is in the checked chart, not that a retailer has the size in stock or that a different shoe model uses identical sizing."
      }
    ],
    "limitations": "Using a brand-specific lookup as a universal fit guarantee. Read the returned row as a set of source-chart labels and a foot-length reference. If several rows match, the output exposes ambiguity that another system’s single answer might hide. The converted centimetres describe the source’s rounded inch measurement. They should not be used to claim extra measuring precision, and neither those centimetres nor the CM/JP label independently guarantee a suitable shoe. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Is this a universal shoe-size conversion?",
        "answer": "No. It uses a stated Nike adult chart."
      },
      {
        "question": "Are CM/JP labels actual foot length?",
        "answer": "No. The source distinguishes box labels from measured foot length."
      },
      {
        "question": "What happens between measured lengths?",
        "answer": "The next larger listed chart point is returned within the supported span."
      },
      {
        "question": "Why can one lookup return two rows?",
        "answer": "Some source labels repeat; every matching row is shown."
      },
      {
        "question": "Does the result guarantee fit?",
        "answer": "No. Length and label conversion do not capture width or product-specific fit."
      }
    ]
  },
  {
    "slug": "food-energy-calculator",
    "title": "Food Energy and kcal–Calorie Conversion Calculator",
    "shortTitle": "Food Energy and kcal–Calorie Conversion",
    "description": "Convert kcal, small calories and kJ, or calculate supplied food-composition energy with EU Annex XIV factors and explicit portion scaling.",
    "icon": "⌘",
    "category": "Health",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "kcal calories converter",
      "how to calculate calories in food",
      "food energy calculator",
      "kcal to small calories converter"
    ],
    "intro": "This kcal calories converter separates energy-unit conversion from food-composition calculation. In conversion mode, it changes the unit of an already known energy quantity. In composition mode, it estimates energy from supplied nutrient masses on one declared food basis using the EU Annex XIV factors. It does not discover the composition from a food name, photograph or recipe description. The two tasks share a page because both clarify what a food-energy number represents.",
    "formula": "Conversion: 1 kcal = 1,000 thermochemical cal = 4.184 kJ. Composition: sum each disjoint nutrient mass × its EU Annex XIV kcal or kJ factor, then multiply by consumed mass / basis mass.",
    "example": "For a 100 g food basis with carbs 20 g, protein 10 g, fat 5 g and fibre 3 g, the EU kcal sum is 20×4 + 10×4 + 5×9 + 3×2 = 171 kcal. A 150 g portion scales that to 256.5 kcal. The independently specified kJ factors give 340 + 170 + 185 + 24 = 719 kJ per basis, or 1,078.5 kJ per portion. This need not equal 256.5×4.184 exactly because the regulatory factors are separate rounded factors.",
    "howTo": [
      "Select energy-unit conversion or supplied nutrient-composition mode.",
      "For conversion enter amount and unit; for composition enter disjoint nutrient gram rows on one common basis.",
      "Supply basis and consumed food masses for composition and click Calculate result.",
      "Reconcile both energy totals with their disclosed factors and portion multiplier."
    ],
    "considerations": [
      {
        "title": "Small calories and kilocalories",
        "text": "A small thermochemical calorie is one thousandth of a kilocalorie. Everyday nutrition often calls a kilocalorie a Calorie, but that language can obscure a thousandfold distinction. The input options spell out kcal and small cal rather than relying on capitalization alone. Kilojoules describe the same physical energy in another unit. Conversion mode uses the thermochemical relation 4.184 kJ per kcal and does not recalculate a food’s nutritional composition."
      },
      {
        "title": "Use a common composition basis",
        "text": "In composition mode, enter nutrient grams that all describe the same food mass basis, such as a 100 g label record. Enter the consumed food mass separately. The basis is not the sum of just the listed nutrients because water and other components can occupy the remaining mass. The calculator rejects a sum of the listed disjoint nutrient masses larger than the food basis. That check detects some inconsistencies but cannot prove the label or analysis is accurate."
      },
      {
        "title": "Available carbohydrates exclude polyols here",
        "text": "Use carbs for available carbohydrate excluding polyols and fibre, protein for protein, and fat for ordinary fat in this factor scheme. Enter polyols separately and enter erythritol separately from other polyols because its factor differs. Food labels and jurisdictions can define carbohydrate columns differently. Reconcile the original definitions before copying a total carbohydrate value; otherwise fibre or polyols may be counted twice. The calculator cannot infer those definitions from a number."
      },
      {
        "title": "The factor set is disclosed",
        "text": "The kcal per gram factors are carbs 4, protein 4, fat 9, polyols 2.4, fibre 2, alcohol 7, organic acids 3, salatrims 6 and erythritol zero. The corresponding kJ factors are 17, 17, 37, 10, 8, 29, 13, 25 and zero. Use the input names carbs, protein, fat, polyols, fibre, alcohol, acids, salatrims and erythritol. Omit a category only when its contribution is genuinely absent or intentionally excluded from the scenario."
      },
      {
        "title": "Avoid overlapping nutrient rows",
        "text": "The input accepts one row per named category so a category is not added twice by mistake. Combine repeated amounts before entering the row. Ordinary fat and salatrims must be disjoint in a scenario using both categories; other-polyol grams must exclude erythritol. Each row gives a nonnegative gram mass, not a percentage, a kcal contribution or grams per a different serving. Unknown ingredients do not receive a guessed factor. This is composition arithmetic rather than a comprehensive nutrient-analysis service."
      },
      {
        "title": "Portion scaling is a mass ratio",
        "text": "A portion multiplier is consumed grams divided by basis grams. A 150 g portion of a composition defined per 100 g therefore multiplies both energy totals by 1.5. A zero portion gives zero portion energy while leaving the basis energy available for review. Volumes such as cups cannot be entered as grams without a suitable independently measured mass. Preparation losses, absorption and a recipe’s changing final weight need separate accounting before the common basis can be established."
      },
      {
        "title": "Regulatory energy is not a personal target",
        "text": "These factors provide a specified composition method. They do not prescribe how much a person should eat, measure individual absorption or issue a legal food-label certificate. The paired kcal and kJ totals follow their respective factor lists, which is why they can differ slightly from a simple unit conversion of one total. Label rounding rules, tolerances and other compliance requirements are outside this worksheet. Keep the composition source and applicable jurisdiction with any reported energy estimate."
      }
    ],
    "limitations": "Confusing small calories with kilocalories. In conversion mode, all three outputs represent one known energy quantity. In composition mode, the basis energy and portion multiplier reveal how the portion total was assembled. Review category definitions before comparing with a label, especially where fibre and sugar alcohols appear. A match with a label is an arithmetic reconciliation, not proof that the food analysis or individual intake decision is correct. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Is a nutrition Calorie usually a kcal?",
        "answer": "Yes, but this page spells out kcal versus small thermochemical cal to avoid ambiguity."
      },
      {
        "question": "Does conversion mode calculate food nutrients?",
        "answer": "No. It converts an already supplied energy amount."
      },
      {
        "question": "Why does composition kJ differ from kcal×4.184?",
        "answer": "EU composition factors specify separate rounded kcal and kJ factors."
      },
      {
        "question": "Can I enter total carbs including fibre and polyols?",
        "answer": "Reconcile the definitions first; the category inputs must be disjoint."
      },
      {
        "question": "Can I identify food by name?",
        "answer": "No. Supply known nutrient masses on a common basis."
      }
    ]
  },
  {
    "slug": "taxable-income-worksheet",
    "title": "Taxable Income Arithmetic Worksheet",
    "shortTitle": "Taxable Income Arithmetic Worksheet",
    "description": "Reconcile supplied includible income, assessed adjustments and allowed deductions into a taxable subtotal without inventing eligibility or rates.",
    "icon": "⌘",
    "category": "Money",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "taxable income calculator",
      "taxable income worksheet",
      "adjusted income arithmetic calculator"
    ],
    "intro": "This taxable income calculator is a reconciliation worksheet for amounts whose tax treatment has already been assessed. It keeps income adjustments distinct from deductions applied afterward and displays every subtotal. A taxable base is a different quantity from tax liability, withholding or take-home pay. The page deliberately requires the user’s jurisdiction-specific assessed amounts instead of assigning legal treatment from a generic salary or expense name.",
    "formula": "Adjusted subtotal = supplied includible income total − supplied allowed adjustments. Taxable arithmetic = max(0, adjusted subtotal − supplied allowed deductions).",
    "example": "Suppose already assessed includible amounts are 50,000 and 2,000, assessed income adjustments are 1,500 and 500, and the applicable allowed deduction total is 10,000. Includible income is 52,000. Adjustments total 2,000, leaving 50,000. Subtracting the supplied deduction gives a taxable arithmetic subtotal of 40,000. This example establishes the subtraction only; it does not establish whether any listed amount is legally includible, deductible or applicable to a particular return.",
    "howTo": [
      "Determine the includible income and allowed reductions using the applicable assessed worksheet.",
      "Enter compatible income, adjustment and deduction lists in one currency and period.",
      "Click Calculate result and inspect each subtotal in sequence.",
      "Reconcile with the assessed return basis before using a separate liability calculation."
    ],
    "considerations": [
      {
        "title": "Start with assessed includible amounts",
        "text": "The first list should contain amounts already determined to belong in the relevant tax-income basis. Gross cash receipts, business revenue, salary and account balances are not automatically interchangeable with that basis. Exclusions and other treatment need to be resolved before entering the record. The calculator does not decide which receipts are taxable. You may enter several nonnegative numeric amounts separated by spaces, commas or lines, but labels and currency symbols are not parsed."
      },
      {
        "title": "Keep the same period and currency",
        "text": "All three lists must describe one compatible accounting period and one currency. Mixing an annual salary with a monthly deduction or combining dollar and rupee figures produces a numerical sum with no coherent tax meaning. The output is currency-neutral because the worksheet has no exchange-rate or jurisdiction selector. Do not include a currency symbol inside numeric entries. Preserve the tax period and source records outside the calculator when documenting the reconciliation."
      },
      {
        "title": "Adjustments precede the deduction subtotal",
        "text": "The second list contains already assessed adjustments that reduce the supplied includible-income subtotal under the intended worksheet structure. The page sums them separately and reports the adjusted subtotal before subtracting the third list. That ordering can help compare with a return’s intermediate line, but the names do not create universal tax categories. Some jurisdictions use different sequences or definitions. Confirm that this simplified ordering matches the particular assessed worksheet before using its output."
      },
      {
        "title": "Allowed deductions must already be determined",
        "text": "The third list should contain the deduction amount or compatible deduction amounts actually permitted on the same basis. It does not decide between a standard deduction and itemized deductions, apply limits, test documentation or identify deductible expenses. Entering both mutually exclusive alternatives would overstate the reduction. Tax credits belong to a later liability calculation and must not be entered as deductions here. An amount’s presence on this page is not evidence of eligibility."
      },
      {
        "title": "Nonnegative floor is a worksheet convention",
        "text": "If deductions exceed the adjusted subtotal, the displayed taxable arithmetic is floored at zero. This page does not calculate a net operating loss, carryforward, negative tax base or special excess-deduction treatment. If the supplied adjustments alone exceed includible income, it refuses to calculate because that circumstance requires a more specific assessed worksheet. The floor is disclosed mathematical scope rather than a claim that every tax system handles all excess reductions identically."
      },
      {
        "title": "Taxable income does not equal tax due",
        "text": "Rates, brackets, separate tax systems, surtaxes, credits and payments are not entered. Consequently this worksheet cannot state a tax bill or refund. Two assessed bases of the same amount can lead to different liabilities under different laws and filing circumstances. Use the appropriate specific tax calculator or official instructions after establishing the correct taxable base. Withholding is a payment toward liability, not a deduction from the income base in this simplified sequence."
      },
      {
        "title": "Use totals to reconcile a source worksheet",
        "text": "The result exposes includible income, adjusted subtotal and deduction total so you can compare intermediate lines rather than only the final number. A difference may arise from a missing item, duplicate entry, different period or an assessed treatment that belongs elsewhere. Do not alter source records to force agreement. This calculator performs arithmetic on supplied decisions; it cannot audit the legal validity of those decisions or replace records needed for a filed return."
      }
    ],
    "limitations": "Treating all cash receipts as automatically includible income. Use the displayed subtotals as a reconciliation trail. A zero result means the supplied deductions exhaust this simplified base; it does not prove no tax or filing obligation exists. The worksheet is useful when the inclusion and allowance questions have already been answered by the applicable return instructions or qualified assessment. Keep those decisions and supporting records with the arithmetic. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does this determine which income is taxable?",
        "answer": "No. Enter amounts whose tax treatment is already assessed."
      },
      {
        "question": "Can I enter tax credits as deductions?",
        "answer": "No. Credits reduce liability at a different stage."
      },
      {
        "question": "Does it choose standard or itemized deductions?",
        "answer": "No. Supply the applicable allowed amount and avoid mutually exclusive duplicates."
      },
      {
        "question": "Will it show my tax bill?",
        "answer": "No. It calculates a supplied base without rates, credits or payments."
      },
      {
        "question": "What if deductions exceed the subtotal?",
        "answer": "The taxable arithmetic is floored at zero; loss and carryforward rules are excluded."
      }
    ]
  },
  {
    "slug": "texas-sales-tax-calculator",
    "title": "Texas Retail and Dealer Vehicle Sales Tax Calculator",
    "shortTitle": "Texas Retail and Dealer Vehicle Sales Tax",
    "description": "Calculate Texas taxable retail or dealer-vehicle sales tax with explicit local-rate input, taxable charges and scoped trade-in treatment.",
    "icon": "⌘",
    "category": "Money",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "texas state tax calculator",
      "car sales tax calculator",
      "texas sales tax calculator",
      "texas dealer vehicle sales tax calculator"
    ],
    "intro": "The Texas state tax calculator here is specifically a sales-tax worksheet with two disclosed transaction scopes. General taxable retail sales can include an entered local rate, while a qualifying dealer motor vehicle purchase uses its separate tax treatment. It does not calculate every tax collected in Texas or infer local sourcing from a location. Supplied taxable charges and trade-in eligibility must already be verified under the appropriate current rules.",
    "formula": "Retail tax = (supplied taxable price + taxable charges) × (6.25% + verified local rate). Dealer vehicle tax = (supplied price + taxable charges − eligible trade-in) × 6.25%.",
    "example": "A general taxable retail purchase of $100 with no additional taxable charges and a verified local rate of 2% has an 8.25% combined rate, giving $8.25 tax and $108.25 taxable base plus tax. In dealer vehicle mode, a $30,000 vehicle price with an independently verified eligible $5,000 trade-in and no added taxable charges gives a $25,000 base. At 6.25%, the calculated motor vehicle tax is $1,562.50. The invoice can contain other amounts outside this modeled base.",
    "howTo": [
      "Choose general taxable retail or the supported dealer motor vehicle transaction.",
      "Supply the assessed taxable price and taxable additional charges.",
      "Enter the verified local retail rate or eligible dealer trade-in, then click Calculate result.",
      "Compare the disclosed tax base and rate with the official transaction guidance and invoice."
    ],
    "considerations": [
      {
        "title": "Select the transaction scope first",
        "text": "Retail and motor vehicle transactions do not share every sales-tax rule. Select General taxable retail for an ordinary assessed taxable purchase, or Dealer motor vehicle purchase for the supported vehicle worksheet. The motor vehicle mode does not apply the local-rate field. The retail mode does not subtract the vehicle trade-in field. Keeping these modes explicit avoids adding an ordinary retail local rate to a vehicle calculation merely because both transactions occur in Texas."
      },
      {
        "title": "State and local retail rates",
        "text": "The general Texas state sales-tax rate is 6.25%. Local jurisdictions can impose combined local taxes up to 2%, producing a maximum combined retail rate of 8.25% in this worksheet. Enter the local rate verified for the transaction’s actual sourcing rules. A street address, seller location or buyer residence alone is not resolved here. The calculator does not query a location database, decide sourcing or determine whether the item is exempt."
      },
      {
        "title": "Use an assessed taxable price",
        "text": "The price and additional-charge fields contain amounts already determined to be taxable for the selected transaction. Invoice lines can receive different treatment depending on the rules and circumstances. Do not enter a full invoice total if it includes tax already collected or amounts independently determined to be outside the base. A sales-tax-inclusive total requires separate reverse-tax arithmetic and is not inferred here. This worksheet adds tax to the supplied taxable base."
      },
      {
        "title": "Dealer vehicle trade-in is narrowly scoped",
        "text": "Vehicle mode subtracts a supplied eligible trade-in allowance from the sale price and taxable charges, with the allowance bounded not to exceed the supplied price. The eligibility must relate to the supported dealer transaction and appropriate Texas motor vehicle rules. A separate private sale of an old vehicle is not automatically the same as a qualifying trade-in in the purchase transaction. The page does not decide eligibility from a description or infer an allowance from market value."
      },
      {
        "title": "Private-party SPV is excluded",
        "text": "Texas private-party vehicle purchases can involve standard presumptive value and other rules that a dealer-price subtraction does not reproduce. This page does not accept a private-party purchase and silently treat it as a dealer transaction. It also does not calculate new-resident tax, gifts, even exchanges, rentals or all special exemptions. Use the relevant Texas Comptroller and TxDMV instructions for those cases rather than adapting the dealer mode by guessing a price."
      },
      {
        "title": "Rounding and invoice total scope",
        "text": "The modeled tax is rounded to cents, and the page reports taxable base plus that tax. This is not necessarily the entire out-the-door amount because nontaxable charges, registration, title, financing and other independently treated items can be outside the supplied base. The calculation does not certify a seller’s collection method for a multi-line invoice. Keep assessed charges separate and compare the tax amount with the transaction statement before relying on the combined display."
      },
      {
        "title": "Rates and rules have a checked date",
        "text": "The disclosed rate framework was checked against official Texas sources on 6 October 2026. Local rates and transaction rules need verification for the actual sale date and location. A current calculator result is not a substitute for a historical rate record or a determination about a specific exemption. The source links help establish the relevant scope; they do not make every numeric scenario an official tax determination. Preserve the verified local-rate source with the result."
      }
    ],
    "limitations": "Applying ordinary retail local tax to the dealer motor vehicle mode. Review the selected scope, taxable base and applied rate before the tax. A discrepancy with an invoice can come from taxable-charge classification or local sourcing rather than multiplication. Vehicle mode’s omission of local rate is intentional. The subtotal including calculated tax represents only the supplied taxable base and tax, so it should not be renamed a full purchase cost without accounting for remaining invoice lines. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does vehicle mode add local retail tax?",
        "answer": "No. The supported dealer vehicle calculation uses its 6.25% motor vehicle rate."
      },
      {
        "question": "Will it find my local rate?",
        "answer": "No. Enter a rate verified for the actual transaction sourcing."
      },
      {
        "question": "Can I use it for a private-party car purchase?",
        "answer": "No. Private-party SPV treatment is excluded."
      },
      {
        "question": "Does a separately sold old vehicle count as a trade-in?",
        "answer": "Eligibility is not inferred; supply only an independently verified eligible dealer allowance."
      },
      {
        "question": "Is base plus tax my full invoice?",
        "answer": "Not necessarily. Other assessed invoice amounts can be outside this modeled taxable base."
      }
    ]
  },
  {
    "slug": "nyc-resident-income-tax-calculator",
    "title": "2025 NYC Resident Income Tax Calculator",
    "shortTitle": "2025 NYC Resident Income Tax",
    "description": "Calculate 2025 New York City full-year resident tax before credits from the official city table or schedule, with filing-status and residency gates.",
    "icon": "⌘",
    "category": "Money",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "nyc income tax calculator",
      "new york city resident tax calculator",
      "2025 nyc income tax calculator"
    ],
    "intro": "This NYC income tax calculator is a tax-year-2025 city resident worksheet. It calculates city tax before credits using the official IT-201 city table and rate schedule. It does not combine federal and New York State taxes or decide whether someone is a city resident. The year, taxable-income line and full-year residency scope are displayed explicitly so a salary, commuter address or a different year is not silently treated as a valid input.",
    "formula": "For 2025 NYC taxable income below $65,000, use the official city tax-table interval and filing-status column. At $65,000 or more, use the official city rate schedule and round tax to whole dollars.",
    "example": "For a full-year NYC resident filing Single with 2025 NYC taxable income of $70,000, the city schedule uses $1,813 plus 3.876% of the excess over $50,000. The calculation is $1,813 + $20,000×0.03876 = $2,588.20, entered as $2,588 in whole dollars. At income below $65,000, this page instead returns the published city tax-table amount for the appropriate interval; it does not substitute a continuous bracket approximation.",
    "howTo": [
      "Obtain 2025 NYC taxable income corresponding to the relevant IT-201 line, rounded to whole dollars.",
      "Select the assessed filing status and confirm eligible full-year city residency.",
      "Click Calculate result to use the official city table or schedule.",
      "Compare the method and amount with the 2025 instructions before accounting for credits and payments."
    ],
    "considerations": [
      {
        "title": "Use city taxable income, not salary",
        "text": "Enter the already determined 2025 NYC taxable-income amount corresponding to IT-201 line 47. Gross salary, take-home pay and federal adjusted gross income can be different quantities. The calculator does not construct line 47 from pay slips or choose deductions. Enter whole dollars as required by the return instructions, rounding the assessed amount before lookup where appropriate. A dollar-and-cent input is rejected rather than silently changing the table interval."
      },
      {
        "title": "Full-year residency must be confirmed",
        "text": "The worksheet requires confirmation that the full-year NYC resident scope applies. A job located in New York City does not automatically establish NYC residence. Part-year residents and mixed-residency joint returns can require different forms or instructions and are excluded here. The confirmation starts unselected. It is a user acknowledgement of independently established facts, not a residency determination made by the calculator or a replacement for the official instructions."
      },
      {
        "title": "Filing-status columns are specific",
        "text": "The source groups Single with Married filing separately, Married filing jointly with Qualifying surviving spouse, and Head of household in their respective city columns or schedules. Choose the already determined 2025 status. The page does not test eligibility for those statuses. A joint source-table note must also be checked against the actual residency circumstances. Changing status can change the tax even when city taxable income stays the same, so preserve both inputs with the result."
      },
      {
        "title": "Below sixty-five thousand uses the table",
        "text": "The bundled 2025 city tax table contains 1,302 contiguous income intervals from zero up to, but not including, $65,000. The lower boundary is included and the upper boundary excluded. Its published tax amounts can differ from evaluating continuous rate brackets at the exact input income. Returning the actual table amount preserves the filing method. The result shows the selected interval so a value at a boundary can be reconciled directly with the source."
      },
      {
        "title": "Higher income uses the official schedule",
        "text": "At $65,000 or more, the worksheet applies the relevant 2025 city schedule. Rates are 3.078%, 3.762%, 3.819% and 3.876%, with filing-specific thresholds and published whole-dollar base amounts. The implementation retains those published base amounts rather than inventing more precise cumulative bases. Whole-dollar tax rounding occurs after the schedule arithmetic. The method row distinguishes this procedure from the tax-table lookup used below the threshold."
      },
      {
        "title": "Tax before credits is not balance due",
        "text": "The output stops at city resident tax before credits. It does not subtract city household or school credits, account for withholding, compute payments, penalties or determine a refund. State, federal, Yonkers and other taxes are outside the page. A result of a particular city tax amount therefore is not the total tax liability for a person or the amount they must pay when filing. Complete the applicable return using all relevant lines and forms."
      },
      {
        "title": "Keep the tax year and source together",
        "text": "The page and dataset are explicitly labeled 2025 even though the implementation was reviewed in October 2026. A filing date does not change the tax year of the table. Do not use this result for 2026 or another year by changing only an income entry. The official HTML source and its fingerprint are recorded for reproducibility. Check current corrections to the 2025 instructions before an actual filing decision, especially when extending this worksheet to a circumstance it does not cover."
      }
    ],
    "limitations": "Using gross salary instead of assessed city taxable income. Read the tax year, filing status and method row with the amount. The table interval is an important audit value below $65,000; the schedule name is important above it. The result is one pre-credit city line, so it cannot be interpreted as a refund or complete bill. If the residency confirmation is not valid, leave it unconfirmed and use the appropriate official worksheet instead. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does it include New York State tax?",
        "answer": "No. It calculates the stated NYC city resident tax before credits only."
      },
      {
        "question": "Can I enter gross annual salary?",
        "answer": "Use already assessed 2025 NYC taxable income from the relevant line instead."
      },
      {
        "question": "Can a commuter use the resident calculation?",
        "answer": "Residency must be independently established; employment location alone is insufficient."
      },
      {
        "question": "Why not use brackets below $65,000?",
        "answer": "The official instructions use the published city tax table in that range."
      },
      {
        "question": "Can I use it for tax year 2026?",
        "answer": "No. This page is explicitly scoped to the official 2025 table and schedule."
      }
    ]
  },
  {
    "slug": "clothing-size-chart-matcher",
    "title": "Clothing Size Calculator — Supplied Chart Matcher",
    "shortTitle": "Clothing Size",
    "description": "Match measured bust or chest, waist and hip to your own brand’s size-range chart, with per-row comparisons and no invented body-shape labels.",
    "icon": "⌘",
    "category": "Everyday",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "clothing size calculator",
      "clothing size chart matcher",
      "brand size chart calculator"
    ],
    "intro": "This clothing size calculator compares a person’s supplied measurements with a supplied brand chart. It does not infer a body-shape category or invent a universal S/M/L table. Every size row is visible in the result with a three-part range comparison, and multiple matches or no match are reported honestly. It is useful when a retailer publishes body-measurement ranges and you want to check them consistently in one unit.",
    "formula": "A supplied chart row matches only when each measured bust/chest, waist and hip value lies within its corresponding inclusive minimum–maximum range.",
    "example": "Suppose a chart row M lists bust 90–96, waist 74–80 and hip 98–104, all in centimetres. Measurements of 93, 77 and 101 match all three inclusive ranges, so M is returned. If waist is changed to 82 while bust and hip stay fixed, the same row is marked within / above / within and is no longer an all-measurement match. The page does not average those measurements into a made-up medium recommendation.",
    "howTo": [
      "Measure bust or chest, waist and hip in one unit following the brand’s guidance.",
      "Paste body-size chart rows as label and six inclusive range endpoints in the same unit.",
      "Click Calculate result to find every complete range match.",
      "Review per-row comparisons and product fit information, especially when no row or several rows match."
    ],
    "considerations": [
      {
        "title": "Use the correct kind of chart",
        "text": "The chart must describe body-measurement ranges for the intended product or brand. Finished garment dimensions, flat-lay half measurements and body-size ranges are not interchangeable. A garment chest width measured flat cannot be compared directly with a full body chest circumference. If the retailer uses a different basis, obtain the correct body chart or an independently justified conversion. This worksheet cannot infer ease allowances or double a flat measurement without being told what it represents."
      },
      {
        "title": "Keep all dimensions in one unit",
        "text": "Bust or chest, waist, hip and every chart endpoint must use the same length unit. Centimetres and inches both work if used consistently, because the comparison is unit-neutral. Mixing units creates incorrect matches that can still look numerically valid. A positive numeric measurement is required, but the page does not certify how the measurement was taken. Use the brand’s current measurement instructions and keep the measurement basis with the copied chart."
      },
      {
        "title": "Chart row format is explicit",
        "text": "Enter one size per line using seven comma-separated entries: label, bust minimum, bust maximum, waist minimum, waist maximum, hip minimum, hip maximum. Labels can identify actual brand sizes; the six endpoints must be finite nonnegative numbers, with minimum not larger than maximum. Up to fifty rows are supported. A single-value chart can be represented by equal endpoints only if an exact-value comparison is really intended, rather than inventing a tolerance that the retailer never provided."
      },
      {
        "title": "All three ranges must contain the measurements",
        "text": "A row is a match only if bust or chest, waist and hip all lie within that row’s ranges. The worksheet does not discard a dimension to force a familiar size label. This strict intersection is useful for exposing why a chart does not yield a clean answer. Per-row results use below, within or above for each measurement in the displayed order. That explanation is available even when no complete match exists."
      },
      {
        "title": "Endpoints are inclusive and overlaps stay visible",
        "text": "A measurement equal to a stated minimum or maximum counts as within that range. If adjacent size ranges share a boundary or overlap, more than one row may match. Every matching label is returned; there is no hidden tie-break toward a smaller or larger size. The retailer may have a preference for between-size situations, but that instruction is not inferred from range endpoints. Apply the product’s actual guidance separately when interpreting multiple matches."
      },
      {
        "title": "A mismatch is useful information",
        "text": "No match means no supplied row contains all three entered measurements under this exact comparison. It does not label the person’s body as unusual or make a claim about appearance. Different garments, size ranges or tailoring can address dimensions differently, and the model does not judge them. Check for transcription errors, units and the correct chart first. Then consult the actual garment’s construction and fitting guidance rather than treating a guessed nearest row as a verified fit."
      },
      {
        "title": "Chart membership is not a fit guarantee",
        "text": "Fabric stretch, design, desired ease, posture and product-specific construction can affect fit beyond these three ranges. The page does not model those properties or recommend a personal body-shape category. It also does not assume that one brand’s M equals another brand’s M. A returned label establishes only membership in the copied chart ranges. Verify the chart’s date and product applicability before a purchase, and use the retailer’s fitting and return information for the final decision."
      }
    ],
    "limitations": "Mixing centimetres with inches. Read the matching labels and the per-row bust/waist/hip comparisons together. Multiple labels indicate overlapping chart ranges, while no label indicates that at least one measurement falls outside every complete row. Neither outcome justifies a fit guarantee. The result is most useful as a transparent explanation of a specific chart, with the source chart and measurement procedure kept available for review. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does it provide universal S/M/L sizes?",
        "answer": "No. Supply the actual brand or product chart ranges."
      },
      {
        "question": "Can I paste garment flat widths?",
        "answer": "Not directly; the chart and measurements need the same body-measurement basis."
      },
      {
        "question": "What if two rows match?",
        "answer": "Both are shown because overlapping inclusive ranges remain visible."
      },
      {
        "question": "Does no match mean it chooses the nearest size?",
        "answer": "No. It reports no complete match and shows each dimension’s comparison."
      },
      {
        "question": "Does it classify body shape?",
        "answer": "No. It performs chart-range matching without body-shape labels."
      }
    ]
  },
  {
    "slug": "boer-lean-body-mass-calculator",
    "title": "Lean Body Mass Calculator — Boer Equation",
    "shortTitle": "Lean Body Mass",
    "description": "Estimate adult lean body mass with the published Boer equation, showing the coefficient set, lean share and limits of an equation estimate.",
    "icon": "⌘",
    "category": "Health",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "lbm calculator",
      "lean mass calculator",
      "lean mass weight calculator",
      "boer lean body mass calculator"
    ],
    "intro": "This LBM calculator implements the specifically named Boer equation rather than treating lean mass as a measured result. Lean body mass includes more than skeletal muscle, and a height–weight expression cannot identify every body compartment independently. The page displays the coefficient choice and estimated lean share while limiting extrapolation. It is useful for reproducing a published arithmetic method or comparing estimates, with individual measurement and clinical use kept separate.",
    "formula": "Male coefficient: LBM kg = 0.407W + 0.267H − 19.2. Female coefficient: LBM kg = 0.252W + 0.473H − 48.3. W is body mass in kg and H is height in cm.",
    "example": "For a 70 kg adult with height 175 cm using the male coefficient, the estimate is 0.407×70 + 0.267×175 − 19.2 = 56.015 kg. Its calculated share of body mass is 56.015/70×100, about 80.0214%. Using the female coefficient with the same measurements gives 52.115 kg. The age field checks this worksheet’s adult scope and does not appear in the Boer formula. These outputs are model estimates, not measured muscle masses.",
    "howTo": [
      "Enter measured adult body mass in kg and height in cm.",
      "Choose the published Boer coefficient and enter age for the disclosed adult-scope check.",
      "Click Calculate result and review the mass and lean share.",
      "Retain the equation label; compare with suitable independent assessment before individual interpretation."
    ],
    "considerations": [
      {
        "title": "Lean mass is not skeletal muscle mass",
        "text": "A lean-body quantity is broader than skeletal muscle and can include organs, water, bone and other nonfat components under the intended model terminology. This calculator therefore does not target the phrase muscle mass calculator as if the two outcomes were identical. It does not measure muscle size, strength or training progress. An estimate changing with body weight is not proof that the change was muscle gain or loss."
      },
      {
        "title": "The inputs are kilograms and centimetres",
        "text": "Enter measured body mass in kilograms and height in centimetres. Convert pounds or inches before entering them. The coefficients carry units implicitly, so supplying the wrong unit changes the expression rather than simply relabeling its result. The worksheet supports thirty through two hundred kilograms and one hundred forty through two hundred ten centimetres. These controls constrain extreme inputs but do not establish that every permitted combination is scientifically validated."
      },
      {
        "title": "Coefficient sets are model choices",
        "text": "The published Boer expressions differ for male and female coefficient sets. The page names that selection rather than hiding it behind a generic demographic guess. A coefficient choice alone does not establish suitability for every person or clinical setting. Keep the selected model with any reported estimate. Where the model’s relevance is uncertain, a suitable body-composition assessment offers more useful evidence than selecting whichever expression gives the preferred result."
      },
      {
        "title": "Adult age is a scope check only",
        "text": "The page accepts ages eighteen through sixty-five as an explicitly bounded adult worksheet. Boer’s displayed expression does not contain age, so two supported ages with identical mass, height and coefficient choice give the same estimate. The age input therefore changes eligibility, not the calculated mass within the allowed span. This distinction is disclosed to avoid implying an age sensitivity that the formula does not have. Children and out-of-scope ages are rejected rather than extrapolated."
      },
      {
        "title": "Plausibility checks constrain extrapolation",
        "text": "The estimated lean mass must be positive and less than supplied total body mass. A combination that violates those conditions is rejected with a request to verify suitability and inputs. Passing the check does not validate the estimate against an individual measurement. Height–weight equations can behave poorly outside relevant populations, and a plausible-looking fraction can still have model error. Do not modify a measured weight merely to make an invalid combination return a number."
      },
      {
        "title": "An equation is not body-composition measurement",
        "text": "This page does not perform DXA, bioimpedance, imaging or another measurement procedure. Those approaches have their own definitions, limitations and calibration, so they may not agree with a height–weight expression. More decimal places in the calculator cannot remove prediction error. Comparing repeated estimates can illustrate how the formula responds to mass input, but it cannot separate tissue changes or changes in hydration without independent evidence."
      },
      {
        "title": "No dosing or nutrition prescription",
        "text": "Lean mass can appear in scientific and clinical calculations, but this worksheet does not convert its estimate into a medication dose, protein target or energy prescription. Such uses require method-specific suitability and clinical assessment. The linked study references the equation in a particular research context; it does not authorize applying every result to every intervention. Report the estimate as Boer LBM under the supplied inputs and retain its limitations rather than treating it as a clinical measurement."
      }
    ],
    "limitations": "Calling lean mass skeletal muscle mass. Read the kilogram estimate and its share alongside the Boer model label. The percentage is derived from the same equation output, not an independent body-fat measurement. A result between zero and body mass satisfies a basic arithmetic constraint but cannot prove individual accuracy. Avoid relabeling the estimate as skeletal muscle or using a change between estimates as a tissue-change diagnosis. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Is lean body mass the same as muscle mass?",
        "answer": "No. Lean mass includes additional body components beyond skeletal muscle."
      },
      {
        "question": "Does age change the Boer arithmetic?",
        "answer": "Not within the supported adult range; age is a disclosed scope check."
      },
      {
        "question": "Can I enter pounds?",
        "answer": "Convert to kilograms before entering body mass."
      },
      {
        "question": "Why can an input combination be rejected?",
        "answer": "Its estimated lean mass may not fall between zero and total mass, or it may exceed worksheet bounds."
      },
      {
        "question": "Does this provide a medication dose?",
        "answer": "No. It reports an equation estimate only."
      }
    ]
  },
  {
    "slug": "point-mass-center-of-mass-calculator",
    "title": "Point-Mass Center of Mass Calculator",
    "shortTitle": "Point-Mass Center of Mass",
    "description": "Find the three-dimensional center of mass of supplied positive point masses, with total mass, first moments and a reproducible coordinate convention.",
    "icon": "⌘",
    "category": "Education",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "center of mass calculator",
      "point mass center of mass calculator",
      "3d mass center calculator"
    ],
    "intro": "This center of mass calculator combines measured or assumed positive point masses at explicit Cartesian coordinates. It answers a different question from a geometric midpoint because each coordinate is weighted by mass. The three-dimensional result can also represent a planar system when every z coordinate is zero. It does not infer the mass distribution of a real object from its outline; the point model and coordinate convention are supplied by the user.",
    "formula": "Total mass M = Σmᵢ. Center coordinates are x̄ = Σmᵢxᵢ/M, ȳ = Σmᵢyᵢ/M and z̄ = Σmᵢzᵢ/M. First moments are the corresponding mass-coordinate sums.",
    "example": "Place a 2-unit point mass at (0,0,0) and a 1-unit point mass at (6,3,0). Total mass is 3. First moments are (6,3,0), so the center of mass is (2,1,0). The center lies nearer the heavier point. An unweighted geometric midpoint would be (3,1.5,0), which is different. Doubling both masses keeps the center at (2,1,0) while doubling total mass and each first moment.",
    "howTo": [
      "Choose a common Cartesian coordinate frame and compatible mass and length units.",
      "Paste each point as positive mass, x, y and z; use zero z for a planar model.",
      "Click Calculate result and inspect center coordinates, total mass and first moments.",
      "Check weighted sums and coordinate bounds before using the point model in a larger mechanics problem."
    ],
    "considerations": [
      {
        "title": "Define one coordinate frame",
        "text": "All positions must use the same origin, axis directions and length unit. Coordinates from different local drawings cannot be combined without first transforming them into a common frame. Negative coordinates are valid and mean positions on the opposite side of an axis relative to the chosen origin. The result uses the same frame and units. A coordinate is not a distance from the origin unless the relevant geometry and axis have been specified."
      },
      {
        "title": "Represent each point with four entries",
        "text": "Enter one row per point: positive mass, x, y and z. Separate numbers by spaces or commas and use a new line for the next point. One through one hundred rows are supported, with finite values inside the stated numerical bound. Supply z as zero for a planar example rather than omitting the fourth entry. Each point is an independent contribution; identical coordinates may represent separate masses and are not silently deduplicated."
      },
      {
        "title": "Use compatible positive mass units",
        "text": "All mass entries must use one common unit, such as kilograms or grams. Scaling every mass by the same factor leaves the center unchanged, but mixing units between rows does not. This worksheet uses positive masses and rejects zero or negative mass entries. A negative signed coordinate is different from negative mass. If a modeling technique uses removal or signed density, it needs an explicitly designed method outside this positive point-mass interface."
      },
      {
        "title": "Mass weighting differs from averaging points",
        "text": "The center is a weighted mean of positions, not an ordinary average of point coordinates unless all masses are equal. A heavier mass influences the result more strongly. Adding a new point shifts the center toward that point in proportion to its share of total mass. Counting one object twice doubles its modeled contribution, so verify whether repeated rows are intentional. The point count is displayed separately from total mass to expose that distinction."
      },
      {
        "title": "First moments make the result auditable",
        "text": "The worksheet displays the mass-coordinate sums before division. Their units are mass multiplied by length, such as kg·m, rather than force or rotational torque. Dividing each by total mass returns a coordinate in the original length unit. These are first moments associated with the chosen origin and axes. They must not be mistaken for moments of inertia, which involve squared distances and a different physical calculation."
      },
      {
        "title": "Point models simplify extended objects",
        "text": "An extended component can sometimes be represented by its known mass and its own independently determined center of mass. That representation requires a valid component model. A geometric center is not always its mass center when density is uneven. This page does not find a continuous density integral or calculate the centroid of an arbitrary shape. Verify how each row represents the actual component before interpreting the aggregate center."
      },
      {
        "title": "Mass center does not establish stability",
        "text": "The computed point tells where the mass-weighted position lies under the supplied model. It does not by itself determine whether a structure tips, a suspension is safe or a vehicle meets handling requirements. Support geometry, forces, acceleration, constraints and uncertainties can matter. The worksheet is appropriate for a transparent mechanics calculation, while safety-critical decisions need the relevant complete assessment. Display digits reflect arithmetic rather than position-measurement certainty."
      }
    ],
    "limitations": "Mixing coordinate frames or length units. Read the center, total mass and first moments together. The coordinate must lie within the convex span of the supplied positive-mass positions, so an output beyond every point along one axis signals an input or arithmetic problem. The result depends on the point model and coordinate frame. It is a weighted position, not a force location certified for every loading condition. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Can I use a two-dimensional example?",
        "answer": "Yes. Enter zero for every z coordinate."
      },
      {
        "question": "Is this the same as a midpoint?",
        "answer": "Only for two equal masses in a common coordinate frame."
      },
      {
        "question": "Can masses use different units?",
        "answer": "No. Convert all masses to one common unit first."
      },
      {
        "question": "Are negative coordinates allowed?",
        "answer": "Yes. Positions can be signed; masses must remain positive."
      },
      {
        "question": "Does this assess tipping safety?",
        "answer": "No. Center-of-mass arithmetic alone is not a stability assessment."
      }
    ]
  },
  {
    "slug": "construction-crew-size-calculator",
    "title": "Construction Crew Size Planning Calculator",
    "shortTitle": "Construction Crew Size Planning",
    "description": "Estimate whole workers needed for supplied productive labour hours and a work window, with availability, rounded capacity and paid-hour cost.",
    "icon": "⌘",
    "category": "Business",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "construction crew size calculator",
      "worker hours crew calculator",
      "construction labour capacity calculator"
    ],
    "intro": "This construction crew calculator sizes a simple work-window scenario from an already assessed productive labour requirement. It does not estimate work hours from a trade name or apply an invented universal productivity rate. Required worker-hours, available days, paid daily hours and productive share remain visible. The calculation is distinct from measuring output per worker-hour: its question is how many whole workers a stated work window can supply under explicit assumptions.",
    "formula": "Productive hours per worker = days × paid hours/day × productive share. Crew = ceil(required productive worker-hours / productive hours per worker). Paid cost = crew × days × paid hours/day × supplied rate.",
    "example": "A task requires 240 productive worker-hours. Over 5 workdays at 8 paid hours per worker per day and a supplied productive share of 75%, each worker contributes 30 productive hours. The rounded crew is ceil(240/30) = 8 workers. The plan contains 320 paid worker-hours. At a supplied rate of 20 currency per paid hour, its modeled labour cost is 6,400 currency. The productive and paid hour totals are intentionally different.",
    "howTo": [
      "Assess the required productive worker-hours independently for the task scope.",
      "Supply available days, paid daily hours and a justified productive share.",
      "Enter a compatible paid-hour cost and click Calculate result.",
      "Check rounded crew capacity and paid-hour cost against site constraints and quote terms."
    ],
    "considerations": [
      {
        "title": "Required hours must already be assessed",
        "text": "The first input is the total productive labour requirement in worker-hours. It can come from a measured production record, a scoped estimate or a documented work plan. A quantity such as square metres cannot be entered directly as hours without an independently justified productivity relationship. The calculator does not choose that relationship for excavation, concrete, electrical work or another trade. Record how the required hours were assessed before using the resulting crew count."
      },
      {
        "title": "Worker-hours and elapsed hours differ",
        "text": "One worker working productively for eight hours contributes eight worker-hours. Three workers doing the same contribute twenty-four worker-hours over an eight-hour elapsed interval. This distinction assumes their contributions can be combined under the task model. A sequential activity may not become three times faster merely by adding workers. The worksheet does not build a precedence schedule or infer how many workers can physically occupy a work area at once."
      },
      {
        "title": "Productive share is supplied, not guessed",
        "text": "The share represents the fraction of paid time available for the productive work-hour basis used in the requirement. Breaks, coordination or other independently accounted time can reduce it. Enter a justified percentage above zero and no more than one hundred. If the required-hour estimate already includes the same losses, applying another reduction could count them twice. Align the requirement’s definition with the productive-share assumption and document which allowances are already embedded."
      },
      {
        "title": "Whole workers create excess capacity",
        "text": "The crew count rounds upward because a fractional worker is not a complete planned worker under this model. The result shows productive capacity after rounding and the difference above the required hours. A small excess is a rounding outcome, not automatically wasted labour. Staffing can use other arrangements, but staggered shifts, part-time workers or differing skills need their own plan. The worksheet does not silently turn a fractional result into an employment recommendation."
      },
      {
        "title": "Paid cost follows the stated window",
        "text": "Cost uses the rounded crew’s paid hours across every supplied day, multiplied by the entered rate. It does not charge only the productive portion because paid time is the stated cost basis. The input rate is currency per paid worker-hour, and the result remains currency-neutral. Overtime premiums, payroll costs, subcontractor terms and equipment are not inferred. If a quoted rate includes some of those costs, keep that basis consistent rather than adding them twice."
      },
      {
        "title": "Constraints can limit feasible crews",
        "text": "Task access, supervision, equipment, safety, skill mix and dependencies can prevent the calculated number from achieving the assumed productive capacity. More workers can also interfere with one another. This worksheet assumes equal contributions and a constant productive share across the work window. It is useful for a first numerical capacity check, not a site scheduling or safety approval. A feasible construction plan must assess the constraints separately and may need a different work sequence."
      },
      {
        "title": "Compare scenarios with compatible assumptions",
        "text": "Increase days, paid daily hours or productive share separately to see how capacity changes. The crew count changes in steps because of upward rounding. A cheaper modeled cost does not automatically make a plan achievable or preferable, especially if it relies on an unsupported productivity improvement. Keep the same required-hour basis when comparing two windows. If scope changes, revise the assessed requirement first rather than treating the calculator as a forecast of unentered work."
      }
    ],
    "limitations": "Entering elapsed task hours as total worker-hours. Read required crew together with productive capacity and paid-hour cost. The excess-capacity row exposes the effect of rounding instead of concealing it in the worker count. The numerical result answers a capacity question under supplied equal-worker assumptions. It does not decide staffing suitability, legal working hours or whether a construction sequence can support that crew. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does it estimate hours from a construction quantity?",
        "answer": "No. Supply an already assessed productive worker-hour requirement."
      },
      {
        "question": "Why are paid hours larger than productive hours?",
        "answer": "The supplied productive share can be below one hundred percent."
      },
      {
        "question": "Why does the crew round upward?",
        "answer": "The worksheet sizes complete workers for the stated window."
      },
      {
        "question": "Does cost include overtime or payroll overhead?",
        "answer": "Only if those are already represented in the supplied rate; no extras are inferred."
      },
      {
        "question": "Can adding workers always shorten a task?",
        "answer": "No. Site constraints and sequential work can limit the equal-contribution assumption."
      }
    ]
  },
  {
    "slug": "excavation-haul-calculator",
    "title": "Excavation Swell and Haul Trip Calculator",
    "shortTitle": "Excavation Swell and Haul Trip",
    "description": "Estimate loose excavation volume, conserved material mass and truck trips from supplied swell, density, volume capacity and payload limits.",
    "icon": "⌘",
    "category": "Home",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "excavation haul calculator",
      "excavation swell calculator",
      "truck haul trips calculator"
    ],
    "intro": "This excavation calculator connects a measured bank volume to loose hauling quantity and two independent truck limits. It does not assign a soil type a guessed swell factor or declare a payload legal. Swell, bank bulk density, usable truck volume and payload are supplied values. The result exposes which limit controls the simple uniform-material scenario, making it distinct from a rectangular-volume calculator or a density conversion alone.",
    "formula": "Bank volume = length × width × depth. Loose volume = bank volume × (1 + swell/100). Mass = bank volume × bank density. Trips = max[ceil(loose volume/truck volume), ceil(mass/truck payload)].",
    "example": "A rectangular bank excavation 10 m long, 5 m wide and 2 m deep contains 100 m³. Supplied swell of 25% gives 125 m³ loose volume. At a bank density of 1,800 kg/m³, mass is 180,000 kg and loose density is 1,440 kg/m³. A truck with verified usable volume 10 m³ and payload 15,000 kg needs at least 13 trips by volume and 12 by payload. The combined trip requirement is 13. At 100 currency per complete trip, modeled haul cost is 1,300.",
    "howTo": [
      "Measure compatible rectangular bank dimensions in metres.",
      "Supply justified swell, bank bulk density and verified truck volume and payload limits.",
      "Enter per-trip quote cost and click Calculate result.",
      "Compare both trip bounds and conserved mass; verify loading and excavation procedures separately."
    ],
    "considerations": [
      {
        "title": "Bank dimensions describe in-place volume",
        "text": "Length, width and depth are in metres and describe a rectangular in-place excavation under this worksheet. Irregular profiles, batters, benches or sloped surfaces need an independently assessed equivalent bank volume rather than an arbitrary bounding box. A rectangular volume is a geometric assumption, not a site survey. Use compatible measurements and avoid mixing feet with metres. The calculator does not choose an excavation depth or establish that digging is safe."
      },
      {
        "title": "Swell changes volume without adding mass",
        "text": "Swell represents the increase in bulk volume after excavation under the supplied material condition. A twenty-five-percent increase turns one hundred bank cubic metres into one hundred twenty-five loose cubic metres. The worksheet conserves material mass through that change, so loose bulk density decreases correspondingly. Water changes, added material, segregation or losses can violate that simple conservation scenario. Use measured or justified factors that describe the intended material and handling condition."
      },
      {
        "title": "Bank density belongs to the original volume",
        "text": "The entered density is the bank bulk density in kilograms per cubic metre. Multiplying it by bank volume gives modeled mass. A loose-density record cannot be substituted unchanged as bank density when swell is also applied. The output shows inferred loose density as bank density divided by the swell multiplier, providing an internal check. Bulk density differs from particle density because voids are part of the bulk volume."
      },
      {
        "title": "Truck volume and payload are separate limits",
        "text": "Usable loose-material volume can limit a load before its mass reaches the payload limit. Dense material can reach payload capacity before the body is full. Enter both independently verified capacities for the actual vehicle and route. Nameplate volume or a quoted capacity may not describe the usable fill convention or legal operation. The calculator does not calculate axle distribution, gross vehicle weight, road restrictions or loading stability."
      },
      {
        "title": "Two rounded lower bounds determine trips",
        "text": "Divide loose volume by usable volume and round upward to obtain a volume trip bound. Divide total mass by payload and round upward to obtain a mass bound. The larger of the two bounds is the modeled complete-trip count for uniform divisible material. This assumes material can be apportioned compatibly among trips. Mixed loads, indivisible items, varying truck capacities or minimum-load rules require a more detailed loading plan."
      },
      {
        "title": "Cost follows complete trips only",
        "text": "The cost input is a supplied amount per complete trip on the same quotation basis. Multiplying by the modeled trip count gives that simple haul charge. Loading time, waiting, travel duration, disposal fees, taxes and mobilization are not inferred. Include them in the supplied per-trip amount only if that is how the quotation is structured, or account for them separately. A positive-volume calculation cannot establish that a fixed per-trip rate covers every project condition."
      },
      {
        "title": "Haul planning is not excavation approval",
        "text": "The worksheet does not locate utilities, assess ground stability, design a trench, choose protective systems or authorize removal. Those tasks require site-specific information and applicable professional procedures. Its purpose is quantity and capacity arithmetic using existing measurements and verified limits. A controlling volume or payload result is not a safe-loading certificate. Keep the material basis, source of capacities and actual quotation with the computed trip scenario."
      }
    ],
    "limitations": "Entering loose density as bank density while also applying swell. Read bank volume, loose volume and conserved mass before interpreting trips. The two rounded bounds reveal why the larger count controls. Loose density is a consistency output from the same supplied assumptions, not another measured input. The trip result is useful for a uniform-material planning scenario, while actual legal loading and excavation procedures remain separate assessments. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Does swell increase material mass?",
        "answer": "Not in this disclosed model; it increases bulk volume while mass is conserved."
      },
      {
        "question": "Which density should I enter?",
        "answer": "The bank bulk density associated with the original in-place volume."
      },
      {
        "question": "Why calculate two trip bounds?",
        "answer": "Usable truck volume and payload mass can each control the number of trips."
      },
      {
        "question": "Will it find legal truck capacity?",
        "answer": "No. Supply independently verified usable volume and payload limits."
      },
      {
        "question": "Does the cost include disposal and waiting?",
        "answer": "Only if already represented in the supplied per-trip quote; no additional fees are inferred."
      }
    ]
  },
  {
    "slug": "vector-dot-cross-calculator",
    "title": "Vector Dot Product, Cross Product and Projection Calculator",
    "shortTitle": "Vector Dot Product, Cross Product and Projection",
    "description": "Calculate 3D dot and cross products, vector magnitudes, the angle between nonzero vectors and the projection of one vector onto another.",
    "icon": "⌘",
    "category": "Education",
    "accent": "blue",
    "updatedAt": "2026-10-06",
    "keywords": [
      "vector dot product calculator",
      "cross product calculator",
      "vector projection calculator"
    ],
    "intro": "This vector calculator reports several linked but distinct operations on two three-dimensional Cartesian vectors. Dot product is a scalar, cross product is a vector, and projection is a vector along the second input. The page makes that order explicit and handles zero-vector cases without assigning a false angle. Use it for linear algebra or mechanics arithmetic with a stated coordinate frame rather than inferring physical quantities from six unlabeled numbers.",
    "formula": "A·B = AxBx + AyBy + AzBz. A×B = (AyBz−AzBy, AzBx−AxBz, AxBy−AyBx). cosθ = (A·B)/(|A||B|). projB A = [(A·B)/|B|²]B.",
    "example": "Let A = (1,0,0) and B = (0,1,0). Their dot product is zero, their cross product A×B is (0,0,1), both magnitudes are one and their angle is 90 degrees. The projection of A onto B is (0,0,0). Reversing the vector order changes the cross product to (0,0,−1) but leaves the dot product and angle unchanged. These simple coordinate-axis values make the order and direction conventions easy to verify.",
    "howTo": [
      "Enter both vectors in one right-handed Cartesian frame.",
      "Use consistent component units and zero z values for planar vectors.",
      "Click Calculate result to obtain dot, cross, angle and projection outputs.",
      "Check operation order and zero-vector exceptions before attaching a physical interpretation."
    ],
    "considerations": [
      {
        "title": "Coordinates need a common frame",
        "text": "Enter x, y and z components for both vectors in one Cartesian frame with consistent axis orientation. For planar vectors, use zero z components. The cross-product direction assumes the usual right-handed coordinate convention. Components from differently rotated coordinate frames need transformation before comparison. Negative components are valid signed directions; they are not negative vector magnitudes. The calculator cannot identify the physical frame or convert axes from a diagram."
      },
      {
        "title": "The dot product is a scalar",
        "text": "Dot product sums matching component products and is commutative: A·B equals B·A. A zero dot product between two nonzero vectors means they are perpendicular under the Euclidean model. A dot product can be negative when vectors form an obtuse angle. Its units, when physical vector units are supplied, are the product of the two input units. The worksheet keeps the numeric result generic rather than calling every dot product energy or work."
      },
      {
        "title": "The cross product depends on order",
        "text": "A×B is perpendicular to both nonzero nonparallel vectors and follows the right-hand orientation. Swapping the vectors negates it. Equal or parallel vectors have a zero cross product even if they have nonzero magnitudes. The component expression is shown in the formula so signs can be checked directly. A scalar dot result and a three-coordinate cross result are different output types; one cannot be substituted for the other in a physical equation."
      },
      {
        "title": "Magnitudes are Euclidean lengths",
        "text": "Each magnitude is the square root of the sum of squared components and is nonnegative. Scaling a vector by a positive factor scales its magnitude by that factor; a negative factor also reverses direction. A magnitude of zero occurs only for a zero vector. The numeric vector components are bounded and finite, and ordinary browser precision applies. Coordinate units remain those supplied by the user rather than being inferred as metres, newtons or another quantity."
      },
      {
        "title": "Angle requires two nonzero vectors",
        "text": "The angle uses arccos of the dot product divided by the product of magnitudes and is reported from zero through 180 degrees. The ratio is clamped to the mathematical interval −1 through 1 to avoid tiny floating-point overshoots. If either vector is zero, its direction is undefined and the angle is explicitly marked undefined. Returning zero degrees in that case would imply an alignment that no zero-vector direction establishes."
      },
      {
        "title": "Projection order is stated",
        "text": "The projection output is the vector projection of A onto B. It lies along B and equals [(A·B)/|B|²] times B. It is not the projection of B onto A and is not only the signed scalar component. If B is zero, the projection is undefined; if A is zero and B is nonzero, the projection is the zero vector. The sign of the dot product determines whether the projected vector points with or against B."
      },
      {
        "title": "Physical interpretation needs compatible quantities",
        "text": "The arithmetic applies to Euclidean vectors. A force–displacement dot product can have work units, while a position–force cross product can have torque units, but those meanings require the appropriate input definitions and order. This page does not infer them. Geographic latitude and longitude are not Cartesian vector components suitable for this worksheet without a defined conversion. Keep any physical units and reference frame with the results when using them in a larger problem."
      }
    ],
    "limitations": "Swapping the cross-product order without changing its sign. Read each output according to its type. A zero dot product indicates perpendicularity only when both magnitudes are nonzero, while a zero cross product also occurs for parallel vectors or zero inputs. The projection is a directed component along B, not a distance between endpoints. These distinctions help avoid attaching an unsupported physical meaning to a correct numerical calculation. Entries remain on this device for the calculation and are not submitted to a calculation server. Browser floating-point arithmetic and displayed rounding do not establish real-world measurement certainty.",
    "faqs": [
      {
        "question": "Is the dot product a vector?",
        "answer": "No. It is a scalar; the cross product has three coordinates."
      },
      {
        "question": "What happens when vector order is reversed?",
        "answer": "The cross product changes sign, while dot product and angle remain the same."
      },
      {
        "question": "Can I enter 2D vectors?",
        "answer": "Yes. Set both z components to zero."
      },
      {
        "question": "What is the angle with a zero vector?",
        "answer": "It is undefined because the zero vector has no direction."
      },
      {
        "question": "Which projection is shown?",
        "answer": "The vector projection of A onto B."
      }
    ]
  }
];
