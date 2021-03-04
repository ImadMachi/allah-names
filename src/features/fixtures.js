const Names = [
  {
    name: "الله",
    description: "الاسم الذي يدلّ على ذات الله -تعالى- الجامعة لصفات ألوهيّته.",
    id: "N1",
  },
  {
    name: "الرحمن",
    description:
      "الاسم الذي يدلّ على شمول رحمته كافّة خَلقه؛ بأن خلقهم ورزقهم، وهو اسم يختص به الله -تعالى- ولا يجوز أن يُطلَق على أحد غيره.",
    id: "N2",
  },
  {
    name: "الرحيم",
    description:
      "اسم خاصّ برحمة الله -تعالى- بعباده المؤمنين؛ بهدايتهم للإيمان وإثابتهم الثواب الدائم في الآخرة.",
    id: "N3",
  },
  {
    name: "الملك",
    description:
      "الملك لغة هو الشدّ والربط فيُقال: ملكت العجين؛ أي شددت عجنه، فالملك هو الذي يكون الأمر في ملكه يعود له، وهو أعمّ من المالك فليس كل مالك أمره نافذ في ملكه، والله -تعالى- مالك المالكين لأنّ تصرفهم في أملاكهم ما كان إلّا بإذنه.",
    id: "N4",
  },
  {
    name: "القدوس",
    description:
      "المُنزّه عن كل ما يُمكن أن يُدركه حسّ الإنسان أو خياله من الأوصاف.",
    id: "N5",
  },
  {
    name: "السلام",
    description:
      "السالم من جميع العيوب والصفات الناقصة، وهو الذي يعمّم السلامة على خلقه.",
    id: "N6",
  },
  {
    name: "المؤمن",
    description: "المُصدِّق لجميع ما تقوله نفسه وكتبه ورسله عنه.",
    id: "N7",
  },
  {
    name: "المهيمن",
    description: "المُسيطر بقدرته الكاملة على كل شيء.",
    id: "N8",
  },
  {
    name: "العزيز",
    description: "الغالب الذي لا نظير ولا مثيل له.",
    id: "N9",
  },
  {
    name: "الجبار",
    description:
      "المُنفِّذ بطريق الإجبار والجبر لمشيئته وإرادته في كلّ ما يريد.",
    id: "N10",
  },
  {
    name: "المتكبر",
    description:
      "المُتفرِّد بجميع صفات الكبرياء والعظمة، المُترفِّع عن الحاجة والنقص.",
    id: "N11",
  },
  {
    name: "الخالق",
    description: "المُبدِع في خلقه، وذلك بإرادته.",
    id: "N12",
  },
  {
    name: "البارئ",
    description: "المُميِّز للمخلوقين حتّى مع اختلاف صورهم.",
    id: "N13",
  },
  {
    name: "المصور",
    description: "المعطي لكلّ خلقٍ من خلقه صورة مختلفة عن الأخرى.",
    id: "N14",
  },
  {
    name: "الوليّ",
    description:
      "الناصر والمُصلح لشؤون عباده والمُثني عليهم؛ فالله -تعالى- هو وليّ المؤمنين؛ فينصرهم ويتولّى أمرهم ويختصّهم برحمته.",
    id: "N15",
  },
  {
    name: "المولى",
    description:
      "المالك والسيّد ومَن يُرتجى منه النصر والمعونة، والله -تعالى- هو أفضل مولى للمؤمنين؛ فهو يتولّاهم بتيسير مصالحهم ومنافعهم وتدبّر شؤونهم.",
    id: "N16",
  },
  {
    name: "النصير",
    description:
      "النصير؛ أي المُعين على العدوّ، والله -تعالى- نصير للمؤمن؛ أي ناصره ومُعينه على عدوّه، والمؤمن نصير الله -تعالى-؛ أي مُعان ومنصور من عند الله -تعالى- أو ناصره بالامتثال لأوامره واجتناب نواهيه وحفظ حدوده.",
    id: "N17",
  },
  {
    name: "القريب",
    description:
      "القريب الذي ليس ببعيد، وقرب الله -تعالى- من عباده عامّ وخاصّ؛ أمّا القرب العام فهو قريب ومحيط بكل شيء ويعلمه؛ فهو أقرب للإنسان من حبل وريده.",
    id: "N18",
  },
  {
    name: "المجيب",
    description: "اسم فاعل من الفعل أجاب؛ فالله -تعالى- مجيبٌ لدعاء عباده.",
    id: "N19",
  },
  {
    name: "السميع",
    description:
      "السامع لكنّ السميع أبلغ في الصفة، وسمع الله -تعالى- نوعان؛ أوّلهما أنّه يسمع جميع الأصوات الظاهرة والباطنة؛ الخفيّة والجليّة، وثانيهما السماع بمعنى إجابة دعاء السائلين والعابدين.",
    id: "N20",
  },
  {
    name: "البصير",
    description:
      "البصير الذي يرى الأشياء كلها؛ ظاهرها وباطنها؛ فبصره أحاط بجميع المُبصرَات؛ فلا يغيب عنه ما فوق السماوات العلى وما تحت الثرى، وقد ذُكرت صفة البصير في أكثر من أربعين موضعاً في القرآن الكريم مقترنة في أحد عشر موضعاً منها باسم السميع.",
    id: "N21",
  },
  {
    name: "الواجد",
    description:
      "الغنيّ الذي لا يحتاج لأحد؛ فكلّ ما يطلبه ويُريده يجده ويحصل عليه.",
    id: "N22",
  },
  {
    name: "المجيد",
    description:
      "الاسم مأخوذٌ من المَجد وهو نيل الشرف، وأمجده ومجّده يعني عظّمه وأثنى عليه؛ فالمجيد هو الكريم المفضال الذي يُتَمَجَّدُ بأفعاله وعظمته.",
    id: "N23",
  },
  {
    name: "الماجد",
    description:
      "اسمٌ يدلّ على كثير الأفضال والإحسان،[٢٢] وهو بمعنى المجيد، لكنّ المجيد أبلغ منه في الصفة.",
    id: "N24",
  },
  {
    name: "الواحد الأحد",
    description:
      "اسمان يدلّان على وحدانية الله -تعالى-؛ فهو المتفرّد بصفات المجد والجلال والعظمة والكبرياء، وهو واحدٌ في ذاته وصفاته فلا مثيل له، وهو واحد في ألوهيّته وأفعاله فلا شريك له.",
    id: "N25",
  },
  {
    name: "الصمد",
    description:
      "السيّد العظيم الكامل في كلّ شيئ؛ في علمه وحكمته وقدرته وجميع صفاته، وتقصده المخلوقات وتصمد وتلجأ إليه في إصلاح أمورها الدينيّة والدنيويّة، وتستغيث به عند النوائب والمصاعب؛ لأنّها تعلم أنّه وحده قاضي الحاجات ومُفرِّج الكربات، وهو عظيم القدرة وعظيم العزّة والسلطان.",
    id: "N26",
  },
  {
    name: "الهادي",
    description:
      "الله الذي يهدي ويُرشد عباده إلى خيرَي الدنيا والآخرة، والهداية نوعان؛ أولاهما التي تكون لجميع المخلوقات والكائنات وتكون بهدايتها لمصالحها وتهيئتها لما خُلقَت له، وثانيهما هداية البيان ولها أنواع متعدّدة ومنها أنّ الله -تعالى بعث رسله للناس وبيّن لهم الحلال والحرام وأصول الدين وفروعه، كما وبيّن لهم طريق الهداية الموصِل لرضوانه، وحذّر عباده من الطرق الأخرى، وقد هدى الله -تعالى- المؤمنين وأرشدهم في الدنيا إلى اتّباع أسباب وطرق دخول الجنّة.",
    id: "N27",
  },
  {
    name: "الوهّاب",
    description:
      "اسم يدلّ على كثير الهبة والمنّة والعطيّة؛ فهو يوسّع في العطاء لعباده، ويهبهم من عظيم فضله، وهي صفة مبالغة لكثرة وتنوّع وسعة عطاء الله -تعالى- وتوالي نعمه على عباده؛ فبيده -عزّ وجلّ- خزائن السماوات والأرض يتصرّف فيهما كيف يشاء، ولا مانع لما أعطى، ولا معطي لما منع، ويتنعّم العبد بنعم الله -تعالى- التي لا حصر لها طوال حياته؛ فإن عاش على الإيمان فهذه أشرف هبة، وإن مات على ذلك نال أضعافاً مضاعفة من الهبات التي أعدّها الله -تعالى- لعباده المؤمنين.",
    id: "N28",
  },
  {
    name: "الفتّاح",
    description:
      "اسم يدلّ على الحاكم والقاضي الذي يقضي بين عباده بما يشاء؛ فحكمه وقضاءه لا رادّ ولا مُعقب لهما.",
    id: "N29",
  },
  {
    name: "الرزاق",
    description:
      "اسم يدلّ على عِظم كرمه وفضله؛ فهو يرزق عباده من الدنيا وملذّاتها، وينعم عليهم بالخيرات المتتالية، كما ويرزقهم الإيمان الذي يتحصّل به العبد على الجنّة ونعيمها، وهو مُتكفّل برزق كل من في السماوات والأرض، لذا كان الله -تعالى- هو المُستحقّ بأن يُعبَد وحده لا شريك له؛ لأنّ العبادة لا تكون إلا لمَن كان قادراً على رزق الخلق، أمّا من عجز عن ذلك فلا يستحق العبادة؛ لأنّ العاجز لا يكون إلهاً.",
    id: "N30",
  },
  {
    name: "العفو، الغفور، الغفار",
    description:
      "أسماء الله التي تعني الذي يصفح عن عباده ويغفر لهم؛ فعفوّه شامل يسع جميع الذنوب الصادرة عنهم.",
    id: "N31",
  },
  {
    name: "التّواب",
    description:
      "الله الذي لم يزل يقبل توبة التائبين ويغفر ذنوبهم؛ فالذي يتوب توبة خالصة لله -تعالى- يتوب عليه، وتوبة الله على عبده نوعين؛ أولهما بأن يوفّقه للتوبة بأن يوقعها في قلبه فيقوم بشروطها من إقلاع عن الذنب والندم على فعله والعزم على تركه مُستبدلاً إيّاه بعمل صالح، وثانيهما بأن يقبل توبة عبده فيغفر له ذنبه.",
    id: "N32",
  },
  {
    name: "الرقيب",
    description:
      "الله الذي يطّلع على كل ما تُخفيه الأنفس، فهو الذي خلق المخلوقات وأجراها على أحسن وأفضل نظام وتدبير.",
    id: "N33",
  },
  {
    name: "الشهيد",
    description:
      "الله الذي يطّلع على جميع الأشياء؛ فهو يسمع الخفيّ والجليّ من الأصوات، ويُبصر الصغير والكبير من الموجودات؛ فهو يشهد لعباده وعلى عباده بكلّ ما عملوه.",
    id: "N34",
  },
  {
    name: "الحليم",
    description:
      "الله الذي جعل لكلّ شيء مقداراً، ولا يستخفّه عصيان ومخالفة أوامره، ولا يستفزّه الغضب على مَن خالفها؛ فكلّ شيء ينتهي إليه.",
    id: "N35",
  },
  {
    name: "العظيم",
    description:
      "الله الذي له منتهى العظمة ومطلقها، وذلك في ذاته وأسمائه وصفاته وأفعاله، وهي عظمة لا تعلوها عظمة، وقد ورد ذكر هذا الاسم في القرآن الكريم ستّ مرّات.",
    id: "N36",
  },
  {
    name: "القهّار",
    description:
      "صيغة مبالغة من القاهر، وهو الذي قهر بقدرته جميع المخلوقات؛ فذلّت له في جميعها سواءً في العالم العلويّ أو السفليّ منها، وكل شيء بأمره؛ فجميع الخلق فقراء إليه، وثبوت هذا الوصف لله -تعالى- يقتضي كمال حياته وعزّته وقدرته، ويُعدّ دليلاً على وحدانيّته وتفرّده بالألوهيّة.",
    id: "N37",
  },
  {
    name: "الرؤوف",
    description:
      "العطوف الحنون الذي يعطف على المذنبين بالتوبة والستر، ويرحم عباده ويُخفّف عنهم؛ فلا يُحمّلهم ما يَشقّ عليهم من العبادات.",
    id: "N38",
  },
  {
    name: "اللطيف",
    description: "الرفيق بعباده الذي يوصل لعبده ما يطلب برفق ولين.",
    id: "N39",
  },
  {
    name: "الحسيب",
    description:
      "الله الذي يكفي عبده همّه وغمّه وأمور دينه ودنياه؛ فهو حسيب المتوكّلين.",
    id: "N40",
  },
  {
    name: "الحفيظ",
    description:
      "الله الذي يحفظ على عباده أعمالهم من خير وشر وهذا يقتضي إحاطة علم الله -تعالى- بجميع أعمال عباده ظاهرها وباطنها، وكتابتها في اللوح المحفوظ، وعلمه بمقاديرها وجزائها ومحاسبتهم عليها بعدله، وهو الذي يحفظ عباده ممّا يكرهون، وحفظه لخلقه عام وخاص، أمّا العام فهو ما كان لجميع المخلوقات بتيسير مأكلها ومشربها وما يحفظ بنيتها ويدفع عنها المكاره والمضار، ويستوي في ذلك الخلق من مطيع وفاجر وحتّى الحيوانات، أمّا الخاص فهو ما كان لأوليائه، يتولّاهم بحفظ إيمانهم من الشُبَه والفتن والشهوات، ويحفظهم من أعدائهم ويدفع الكيد عنهم، وعلى قدر إيمان العبد تكون مدافعة الله -تعالى- عنه.",
    id: "N41",
  },
  {
    name: "الحقّ",
    description:
      "الله الذي وجوده واجب ولا وجود لشيء إلّا بوجوده؛ فذاته وصفاته حقّ، وقوله وفعله ولقاؤه حقّ، ورسله وكتبه ودينه حقّ، ووحدانيته في العبادة حقّ.",
    id: "N42",
  },
  {
    name: "الحكم",
    description:
      "الله الذي يحكم بعدله بين عباده في الدنيا والآخرة، فلا يُجازي عبده بأكثر من ذنبه، ولا يُحمّله وزر غيره، ولا يدع حق أحد من عباده حتى يوصله إليه، ولا يُظَلم عنده أحد مثقال ذرّة.",
    id: "N43",
  },
  {
    name: "الحكيم",
    description:
      "الله الذي له الحكمة العليا في خلقه وأمره ولا يُشاركه أحدٌ في أحكامه الشرعية والقدريّة والجزائيّة؛ فهو لا يشرّع ولا يخلق أي شيئ عبثاً أو سدى، ولحكمته نوعان؛ إحداهما حكمته في خلقه؛ إذ أنّه أعطى كلّ مخلوق خلقه اللائق به فكلّ جُزءٍ وعضوٍ فيه له خلقته وهيئته المُتقَنَة بأفضل نظام وترتيب، وثانيهما حكمته في شرعه وأمره؛ فقد شرع الشرائع وبعث رسله لدعوة الناس لعبادته وحده لا شريك له، وشكره وإخلاص العمل له لِينالوا بذلك السعادة والنعيم الدائمَين، ولو لم يكن في شرعه حكمة غير ذلك لكانت كافية، وقد اشتمل شرع الله -تعالى- على كلّ خير فيه صلاح دين ودنيا العباد، ولا بدّ من الإشارة إلى الفرق بين أحكام الله -تعالى- القدريّة والشرعية؛ فالقدرية مُتعلّقة بإرادة الله -تعالى- لحصول شيئ معيّن، أمّا الشرعيّة فهي مُتعلّقة بما أمر به الله -تعالى- وشرعه، وإن فعل العبد طاعةً وخير اجتمع الحكمان فيه، أمّا إن أقدم على معصية وشر وُجِد في ذلك الحكم القدريّ فحسب؛ لأنّ فعله واقع بقضاء الله وقدرة دون شرعه.",
    id: "N44",
  },
  {
    name: "العَدل",
    description:
      "الله الذي لا يدع للهوى في نفسه مجالاً فيميل به ويجور في حكمه -حاشاه-، والعدل هو مصدر أبلغ من العادل، وذلك يدلّ على شدّة العدل.",
    id: "N45",
  },
  {
    name: "العليم، الخبير",
    description:
      "الله الذي أحاط علمه بالواجبات وبالممنوعات وبالأشياء الممكنة، أمّا الواجبات فهو يعلم نفسه العظيمة وأوصافه وما ينعت به، والتي لا يمكن إلّا وجودها، وهو يعلم حال امتناع ما منع وما يترتب وينشأ على سبيل الفرض والتقدير لو وجدت، وهو يعلم ما يصحّ وجوده وعدمه من الأشياء الممكنة الحدوث، ومنها ما اختار لها الوجود ومنها ما اختار لها العدم، وكلّ ذلك بحكمته اللامتناهية التي اقتضت الوجود أو العدم، كما لا يخفى عليه شيء من الظواهر أو البواطن، حتّى السر والعلن والماضي والحاضر والمستقبل وأعمال خلقه من خير وشر.",
    id: "N46",
  },
  {
    name: "الحميد",
    description:
      "الله الذي تنطق جميع المخلوقات بحمده، وهو يستحق الحمد من الأوّلين والآخرين من أهل السماوات والأرض وفي الدنيا والآخرة؛ لأنّه خلقهم ورزقهم وأنعم عليهم بنعمه الظاهرة والباطنة؛ الدينيّة والدنيويّة وله الحمد في سائر الأوقات والأزمان، وهو الذي يحمَد على أسمائه الحسنى وصفاته الكاملة، وهو الذي له من كلّ صفة الصفة الأكمل والأعظم فيها، كما أنّه يُحمَد لذاته ولأفعاله وعلى خلقه الذي خلق وشرعه الذي شره وعلى أحكامه أيضاً؛ ولا يمكن لفكر أو قلم أن يُحصي ما يمكن حمد الله -تعالى- عليه.",
    id: "N47",
  },
  {
    name: "العزيز",
    description:
      "الله الذي له العزّة الشاملة ومعانيها الثلاثة كاملة له وحده؛ فله عزّ القوة ولا تُقارَن قوة مخلوقاته بقوته مهما كانت عظيمة، وله عزة الإمتناع فهو لا يحتاج إلى أحد؛ لأنّه غني بذاته ولا يملك العباد أن يضروه أو ينفعوه لأنّه النافع الضار، وله عزة القهر والغلبة فجميع مخلوقاته خاضعة لعظمته مُنقادة لإرادته.",
    id: "N48",
  },
  {
    name: "القادر، المُقتدر، القوي، المتين",
    description:
      "الله الذي له كامل القوة وعظيم القدرة ومن ذلك خلقه السماوات والأرض في ستّة أيام، وإحياءه للأرض الهامدة الميتة، وعذابه للأمم الجاحدة التي لم تُغن عنها أموالها وجنودها وحصونها من الله -تعالى-، ونصره لعباده المؤمنين مع قلة عددهم وعتادهم، وما أعدّه من نعيم دائم لأهل الجنة ومن عذاب دائم لأهل النار، وتصرّفه بقلوب العباد كيفما يشاء، فبقدرته أوجد الموجودات ودبّرها وسوّاها وأحكمها وأحياها وأماتها.",
    id: "N49",
  },
  {
    name: "الحيّ",
    description:
      "الباقي الذي لا يموت ولا يزول، وهو الذي تفرّد بالحياة الأبديّة التي لا نهاية لها، ولأنّ حياة من يشاء تبدأ وتنتهي حينما يشاء كان هو مصدر الحياة لكل كائن حيّ، لذا يوكَل إليه تدبير أمور الحياة كلّها؛ لأنّه هو وحده دائم الحياة فيدوم تدبيره لها.",
    id: "N50",
  },
  {
    name: "القيّوم",
    description:
      "الدائم، وهي صيغة مبالغة من الفعل قام يقوم بمعنى يدوم، وهي أشدّ مبالغة من القيام، ومجيئ الاسم بكمال المبالغة كان لبيان استغناء الله -تعالى- عن كلّ ما سواه، وحاجة كل ما سواه إليه؛ فهو القائم بذاته المُقوِّم لغيره.",
    id: "N51",
  },
  {
    name: "الكريم",
    description:
      "الخيّر والنافع الذي يُنعم على خلقه ويتفضّل عليهم، وهو الصفوح الذي يصفح عن ذنوب ومعاصي عباده، وقيل هو العزيز، وبوصفه بالكريم نفي للنقائص عنه ووصفه بجميع المحامد.",
    id: "N52",
  },
  {
    name: "ذو الجلال والإكرام",
    description:
      "الله ذو الجلال هو المُستحِق لوصف العظمة والرفعة وهي صفة استحقها لذاته، أمّا ذو الإكرام فهو مصدر من الفعل أكرم فهو المُكرِم؛ أي المُنعم لكنّ الإكرام أخصّ من الإنعام وذلك لأنّ إنعام الله -تعالى- يكون على المُكَرّم عنده وعلى غيره كإنعامه على العاصي المخالف، أمّا إكرامه فلا يكون إلا لمَن كان له محبة وودّ عنده.",
    id: "N53",
  },
  {
    name: "الصّبور",
    description: "الصبور من الصبر؛ أي أنّه يُؤَخِر العقوبة ولا يَعجل عليها.",
    id: "N54",
  },
  {
    name: "المنّان",
    description:
      "المنّان من المنّ وهو العطاء دون مقابل، وهو أيضاً من المنّة؛ أي التفاخر بالعطية على المُعطى، والمعنيان صحيحان في حق الله -تعالى- فهو الذي يهب الخلق من عطاءه ومِنَحه، وهو المُتفضّل عليهم بالحياة، والعقل، والمنطق، وقد أجزل وأنعم في عطاياه؛ فكانت له المنّة بتلك النعم على من أنعم عليهم.",
    id: "N55",
  },
  {
    name: "المُقيت",
    description:
      "اسم فاعل من أقات ويقيت والاسم منه هو القوت؛ أي ما يقوم به بدن الإنسان من الطعام والشراب؛ فالمُقيت هو الذي يتكفّل بأقوات الخلق فيعطي كلّ إنسان وحيوان قوته بما يجعله قواماً له إلى أن يشاء، وإن يمنعه عنه يموت.",
    id: "N56",
  },
  {
    name: "الناصر، النصير",
    description: "المُعين؛ فيُقال: نصره الله -تعالى- على عدوه, أي أعانه عليه.",
    id: "N57",
  },
  {
    name: "الشّكور",
    description:
      "اسم بمعنى المشكور، وشكر الله -تعالى- هو مقابلة فعله بالثناء عليه، وقبول نعمه، والاعتراف بها على سبيل الخضوع، أو الاعتراف بالتقصير في شكر نعمه، ولا بدّ من الإشارة إلى أنّ النعم تزيد وتدوم بالشكر، وتنعدم وتُزال بغيره.",
    id: "N58",
  },
  {
    name: "البَرّ",
    description:
      "العطوف على خلقه الرفيق بهم؛ فلا يؤاخذهم بجميع ذنوبهم، ويعفو عن كثير منها؛ إذ أنّه يريد بهم اليسر ولا يريد بهم العسر، وهو المحسن المُتفضّل بكرمه وخيره ورزقه عليهم، كما أنّه يُجازي بالحسنة عشر أمثالها، وبالسيئة سيئة مثلها؛ فهو برّ بالمُحسن فيُضاعف حسناته، وبرّ بالمسيء فيصفح عنه، وإحسان الله -تعالى- وبرّه عام لجميع خلقه في الدنيا، ولا يكون في الآخرة إلا لِمن أنعم عليه بدخول الجنّة.",
    id: "N59",
  },
  {
    name: "الودود",
    description:
      "المُحبّ لخلقه بالثناء عليهم والإحسان إليهم؛ فحبّه لهم يكون بما يدرّه عليهم من النعم والخيرات، أمّا العبد فيتودّد إلى ربه بامتثال أوامره واجتناب نواهيه، والرضى الكامل بقضاء الله -تعالى- وقدره، كما أنّ من التودّد لله -تعالى- حبّ القرآن الكريم وسنّة رسول الله -صلى الله عليه وسلّم- والعمل بهما والدعوة إليهما.",
    id: "N60",
  },
  {
    name: "المُقسِط",
    description:
      "العادل، وقد ورد في القرآن الكريم بالإشارة إليه فلم يأت اسماً صريحاً أو فعلاً.",
    id: "N61",
  },
  {
    name: "الرفيق",
    description:
      "الله الذي يُعامل خلقه باللين، ويشرّع أحكامه بالتدريج، وعلى وجه السعة واليسر، وكلّ ذلك حسب حكمته وما يناسب عباده؛ فهو رفيقٌ في خلقه وتشريعاته.",
    id: "N62",
  },
  {
    name: "الجواد",
    description:
      "الله الذي عمّ عطاءَه جميع خلقه؛ فأسبغ عليهم نعمه وفضله وكرمه، وقد خصّ عباده المؤمنين بأنواعٍ من الجود في الدنيا والآخرة.",
    id: "N63",
  },
  {
    name: "المُحسِن",
    description:
      "الله الذي يتفضّل على خلقه بالنعم الكثيرة التي لا حصر لها، وهو الذي أحسن كل شيء خَلَقَه؛ فقد أحسن الإيجاد والإمداد والهداية.",
    id: "N64",
  },
  {
    name: "السّتّير",
    description:
      "الله الذي يستر على عباده فلا يفضحهم، ويحبّ منهم أن يستروا على أنفسهم، وأن يجتنبوا ما يشينهم.",
    id: "N65",
  },
  {
    name: "الدّيّان",
    description:
      "الله الذي يحكم بين الخلق؛ فهو الذي يُقاضيهم ويُجازيهم بأعمالهم وعليها.",
    id: "N66",
  },
  {
    name: "الشّافي",
    description:
      "الله الذي يعلم بداء ودواء الأبدان والقلوب؛ فلا مرض يُشفى، ولا ضر يُكشَف إلّا بقدرته -تعالى-.",
    id: "N67",
  },
  {
    name: "السّيّد",
    description:
      "الله الذي يملك الخلق وهم عبيد عنده؛ فلا يرجعون إلّا إليه ولا يعملون إلّا ما أمرهم به.",
    id: "N68",
  },
  {
    name: "الوتر",
    description: "الواحد الفرد الذي لا شريك ولا مثيل له.",
    id: "N69",
  },
  {
    name: "الطّيّب",
    description:
      "المُنزّه عن كلّ نقص؛ فأفعاله وأسماؤه وصفاته هي الأكمل والأطيب، ويحبّ عباده الطيّبين، ولا يقبل إلا الطيّب من الصدقات، والأعمال المُنزّهة عن العيوب الشرعيّة.",
    id: "N70",
  },
  {
    name: "المعطي",
    description:
      "الله الذي يعطي بلا حدود ولا قيود؛ فعطاؤه واسع لا يمنعه شيئ، والذي يمنعه لا يستطيع أحدٌ أن يعطيه.",
    id: "N71",
  },
  {
    name: "الجميل",
    description:
      "الموصوف بالحُسن والإحسان، وهو جميل في ذاته وأسماءه وصفاته وأفعاله.",
    id: "N72",
  },
  {
    name: "العليّ",
    description: "الله الذي يعلو بذاته وصفاته وأسماءه عن خلقه.",
    id: "N73",
  },
  {
    name: "الجليل",
    description: "الله الذي يَعظُم قدره لكماله وجلاله.",
    id: "N74",
  },
  {
    name: "الواسع",
    description: "الله الذي كرسيه يسع السماوات والأرض.",
    id: "N75",
  },
  {
    name: "الكبير",
    description: "المُنزَّه عن الوهم والنقائص.",
    id: "N76",
  },
  {
    name: "الباعث",
    description: "الله الذي يبعث الموتى للحساب.",
    id: "N77",
  },
  {
    name: "الوكيل",
    description: "الله الذي توكَل إليه سائر أمور الخلق ومصالحهم.",
    id: "N78",
  },
  {
    name: "المُحصي",
    description:
      "الله الذي يعدّ ويُحصي دقيق الأمور؛ فلا يفوته شيء منها ولا يُعجزه دليلها.",
    id: "N79",
  },
  {
    name: "المُبدئ",
    description: "الله الذي بدأ وأوجد الخلق من العدم.",
    id: "N80",
  },
  {
    name: "المُعيد",
    description: "الله الذي يُعيد خَلقَه للموت بعد الحياة.",
    id: "N81",
  },
  {
    name: "الوالي",
    description:
      "المالك والمُتصرّف في كل شيء كيفما يشاء، فيُنعم بعطاءه على خلقه ويدفع البلاء عنهم.",
    id: "N82",
  },
  {
    name: "المتعال",
    description:
      "الله الذي له الرفعة في الكبرياء والعظمة، وهو رفيع الدرجات مالك للعرش.",
    id: "N83",
  },
  {
    name: "المُنتقِم",
    description:
      "الله الذي تُرجى رحمته خوفاً وطمعاً، وتُخشى نقمته وغضبه لعِظَمِ قدرته وجلاله.",
    id: "N84",
  },
  {
    name: "مالك الملك",
    description:
      "الله الذي تُنفَّذ مشيئته وإرادته في ملكه فله مطلق التصرف، وقضاؤه لا يُرَد وحُكمه لا حُكم بعده.",
    id: "N85",
  },
  {
    name: "الجامع",
    description: "الله الذي جمع الكمال كلّه في ذاته وصفاته وأسماءه وأفعاله.",
    id: "N86",
  },
  {
    name: "الغنيّ",
    description: "الله الذي لا يحتاج إلى شيئ، في ذاته وصفاته وأفعاله.",
    id: "N87",
  },
  {
    name: "المُغني",
    description: "الله الذي يَمنح عطاءه وخيراته لمَن يشاء من خلقه.",
    id: "N88",
  },
  {
    name: "النّور",
    description: "الله الذي أنار بالتوحيد قلوب الصادقين.",
    id: "N89",
  },
  {
    name: "البديع",
    description:
      "الخالق الذي أبدع كلّ شيء خلقه، وهو بديع في ذاته فليس له مثيل أو شبيه.",
    id: "N90",
  },
  {
    name: "الباقي",
    description: "الله الذي يبقى وجوده كما يبقى الأبد والأزل.",
    id: "N91",
  },
  {
    name: "الرشيد",
    description: "الله الذي يُرشد أهل الطاعة إلى الخير.",
    id: "N92",
  },
  {
    name: "الوارث",
    description:
      "الرب لكلّ شيء وهو الرازق والراحم والوارث له، وله كل ما في السماوات والأرض.",
    id: "N93",
  },
];

export default Names;
