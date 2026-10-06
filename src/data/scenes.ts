export interface Scene {
  id: number;
  title: string;
  titleEn: string;
  timeStart: string;
  timeEnd: string;
  duration: number;
  concept: string;
  searchTerms: string[];
  trimNotes: string;
  typography: { time: string; text: string; highlight?: string }[];
  soundNotes: string;
  colorNotes: string;
  transition: string;
  stockLinks: { label: string; url: string; specs: string }[];
  colorPhase: string;
  icon: string;
}

export const scenes: Scene[] = [
  {
    id: 1,
    title: "مسیر سنگلاخی و طلوع",
    titleEn: "Rocky Path & Sunrise",
    timeStart: "00:00",
    timeEnd: "00:07",
    duration: 7,
    concept: "مسیر سنگلاخی در کوهستان، طلوع خورشید و آغاز دشوار سفر.",
    searchTerms: [
      "cinematic sunrise rocky mountain path wide shot slow motion",
      "drone shot mountain trail sunrise",
    ],
    trimNotes:
      "7 ثانیه از یک شات واید با حرکت آرام رو به جلو. از سیاهی با Fade In یک‌ثانیه‌ای آغاز کنید. اگر حرکت فوتیج تند است، سرعت را تا حدود 80% کاهش دهید.",
    typography: [
      { time: "00:02", text: "اوج پیروزی", highlight: "پیروزی" },
      { time: "00:04", text: "از مسیر سختی‌ها می‌گذرد" },
    ],
    soundNotes: "آغاز بسیار آرام، بدون ضرب شدید. باد بسیار ظریف.",
    colorNotes: "خاکی/تیره. سایه‌ها خاکی و کمی تیره؛ هایلایت‌ها گرم، بدون اشباع زیاد.",
    transition: "Fade In از سیاهی. خروج با Dissolve حداکثر 0.4 ثانیه.",
    stockLinks: [
      {
        label: "مسیر پیچان کوهستانی",
        url: "https://www.pexels.com/video/aerial-footage-of-rocky-mountains-9130077/",
        specs: "4K / 16:9 — Pexels",
      },
      {
        label: "طلوع بر فراز کوه‌ها",
        url: "https://www.pexels.com/video/scenic-view-of-a-mountain-landscape-at-sunrise-16587650/",
        specs: "1080p / 16:9 — Pexels",
      },
    ],
    colorPhase: "سختی → خاکی/تیره",
    icon: "🏔️",
  },
  {
    id: 2,
    title: "انسان در حال صعود",
    titleEn: "Human Ascent",
    timeStart: "00:07",
    timeEnd: "00:14",
    duration: 7,
    concept: "انسان از پشت در مسیر سنگلاخی بالا می‌رود.",
    searchTerms: [
      "hiker climbing mountain from behind cinematic slow motion",
      "person walking up rocky trail sunrise",
    ],
    trimNotes:
      "7 ثانیه از شاتی که فرد از پشت دیده می‌شود. از صحنه مسیر خالی با Cross Dissolve یا Match Cut به حضور انسان بروید.",
    typography: [
      { time: "00:08", text: "رشد" },
      { time: "00:10", text: "نیازمند پذیرش سختی است" },
    ],
    soundNotes: "باد کم‌حجم زیر نریشن.",
    colorNotes: "تُن گرم و طبیعی، با کنتراست متوسط.",
    transition: "Dissolve یا Match Cut کوتاه 0.3–0.4 ثانیه.",
    stockLinks: [
      {
        label: "کوهنورد با کوله در مسیر سنگی",
        url: "https://www.pexels.com/video/a-man-carrying-backpack-while-hiking-on-mountains-9130066/",
        specs: "4K / 16:9 — Pexels",
      },
    ],
    colorPhase: "سختی → تلاش",
    icon: "🧗",
  },
  {
    id: 3,
    title: "پرنده روی صخره و پرواز",
    titleEn: "Bird Takeoff",
    timeStart: "00:14",
    timeEnd: "00:21",
    duration: 7,
    concept: "پرنده روی صخره مکث می‌کند، بال می‌گشاید و پرواز را آغاز می‌کند.",
    searchTerms: [
      "majestic bird taking off from cliff slow motion cinematic",
      "eagle flying mountain sunrise",
    ],
    trimNotes:
      "7 ثانیه: حدود 2 ثانیه مکث پرنده و 5 ثانیه باز شدن بال‌ها و اوج گرفتن. برش را روی باز شدن بال قرار دهید.",
    typography: [
      { time: "00:15", text: "جرأت پرواز", highlight: "پرواز" },
      { time: "00:18", text: "از آسودگی عبور می‌کند" },
    ],
    soundNotes: "Whoosh بسیار نرم هنگام باز شدن بال.",
    colorNotes: "تُن سرد ابرها با Scene 04 هماهنگ شود.",
    transition: "برش روی حرکت بال. صدای باد یا Whoosh بسیار نرم.",
    stockLinks: [
      {
        label: "پرنده‌ای که از سرو بلند پرواز می‌کند",
        url: "https://www.pexels.com/video/a-pigeon-flying-from-a-tree-6144369/",
        specs: "1080p / 16:9 / 9s — Pexels",
      },
    ],
    colorPhase: "طوفان",
    icon: "🦅",
  },
  {
    id: 4,
    title: "پرواز در میان ابرها و باد",
    titleEn: "Flight Through Clouds",
    timeStart: "00:21",
    timeEnd: "00:27",
    duration: 6,
    concept: "پرواز پرنده در آسمان و میان ابرها؛ باد شدید است اما پرنده ارتفاع می‌گیرد.",
    searchTerms: [
      "bird flying through clouds cinematic slow motion",
      "eagle soaring above mountains dramatic sky",
    ],
    trimNotes:
      "6 ثانیه از شاتی که جهت پروازش تا حد ممکن ادامه صحنه قبل باشد. Speed Ramp ملایم در صورت نیاز.",
    typography: [
      { time: "00:22", text: "در آشفتگی" },
      { time: "00:25", text: "بال می‌گیریم", highlight: "بال می‌گیریم" },
    ],
    soundNotes: "باد کمی قوی‌تر، اما همچنان زیر نریشن.",
    colorNotes: "تُن آبی و روشنایی با شات پرنده‌ی Scene 03 هماهنگ شود.",
    transition: "Action Cut یا Dissolve کوتاه.",
    stockLinks: [
      {
        label: "عقاب در حال پرواز میان ابرها",
        url: "https://www.pexels.com/video/watching-the-eagle-fly-3635378/",
        specs: "1080p / 16:9 / 9s — Pexels",
      },
    ],
    colorPhase: "آشفتگی",
    icon: "☁️",
  },
  {
    id: 5,
    title: "رسیدن به قله و نور طلایی",
    titleEn: "Summit & Golden Light",
    timeStart: "00:27",
    timeEnd: "00:34",
    duration: 7,
    concept: "انسان به قله می‌رسد و منظره‌ای وسیع در نور طلایی نمایان می‌شود.",
    searchTerms: [
      "hiker reaching mountain summit sunrise clouds parting cinematic",
    ],
    trimNotes:
      "7 ثانیه از شات واید. Tilt Up یا Pull Back آرام. اگر کلیپ 50fps است، سرعت را تنظیم کنید.",
    typography: [
      { time: "00:28", text: "اگر اوج می‌خواهی" },
      { time: "00:31", text: "از سختی عبور کن", highlight: "عبور" },
    ],
    soundNotes: "صدای باد آرام.",
    colorNotes: "طلایی‌تر از صحنه‌ی پرواز و روشن‌تر از آغاز فیلم.",
    transition: "Dissolve نرم.",
    stockLinks: [
      {
        label: "سیلوئت کوهنورد بر فراز قله",
        url: "https://www.pexels.com/video/a-person-standing-on-top-of-a-mountain-with-a-camera-18013306/",
        specs: "1080p / 16:9 / 5s 50fps — Pexels",
      },
    ],
    colorPhase: "نور طلایی",
    icon: "⛰️",
  },
  {
    id: 6,
    title: "درخت پاییزی و ریزش برگ",
    titleEn: "Autumn Tree & Falling Leaves",
    timeStart: "00:34",
    timeEnd: "00:42",
    duration: 8,
    concept: "درختی در پاییز؛ برگ‌های زرد و نارنجی در باد آرام می‌ریزند.",
    searchTerms: [
      "solitary tree autumn leaves falling slow motion cinematic",
      "golden hour autumn tree wind",
    ],
    trimNotes:
      "8 ثانیه. درخت در مرکز یا یک‌سوم کادر. حرکت برگ‌ها آرام یا اسلوموشن. کادر باید با Scene 07 تطبیق داشته باشد.",
    typography: [
      { time: "00:36", text: "هر فصل" },
      { time: "00:39", text: "درسی دارد", highlight: "درسی" },
    ],
    soundNotes: "صدای برگ‌های پاییزی، حدود 15–20%.",
    colorNotes: "زرد/نارنجی ملایم و بافت تنه طبیعی. رنگ گرم پاییزی.",
    transition: "Dissolve 0.4–0.5 ثانیه از قله.",
    stockLinks: [
      {
        label: "برگ‌های طلایی در حال ریزش",
        url: "https://www.pexels.com/video/leaves-falling-from-tree-10078317/",
        specs: "1080p / 16:9 — Pexels",
      },
    ],
    colorPhase: "خزان",
    icon: "🍂",
  },
  {
    id: 7,
    title: "درخت زمستانی و برف",
    titleEn: "Winter Tree & Snow",
    timeStart: "00:42",
    timeEnd: "00:49",
    duration: 7,
    concept: "درختی در زمستان؛ شاخه‌های خالی، برف و ایستادگی در برابر سرما.",
    searchTerms: [
      "solitary tree winter snow falling cinematic slow motion",
      "bare tree in snow storm",
    ],
    trimNotes:
      "7 ثانیه. Match Cut از Scene 06. جایگاه درخت، زاویه دوربین و اندازه در کادر تا حد ممکن یکسان باشد.",
    typography: [
      { time: "00:44", text: "تحمل کن" },
      { time: "00:47", text: "مقاومت کن", highlight: "مقاومت" },
    ],
    soundNotes: "صدای باد و برف بسیار کم.",
    colorNotes: "White Balance سرد، آبی/خاکستری. سفیدی برف حفظ شود.",
    transition: "Match Cut با تطابق جایگاه و مقیاس درخت.",
    stockLinks: [
      {
        label: "بارش برف روی شاخه‌ها",
        url: "https://www.pexels.com/video/snow-falling-at-winter-3736779/",
        specs: "4K / 16:9 — Pexels",
      },
      {
        label: "نمای زمستانی درختان",
        url: "https://pixabay.com/videos/winter-snow-trees-landscape-white-1449/",
        specs: "1080p — Pixabay",
      },
    ],
    colorPhase: "زمستان",
    icon: "❄️",
  },
  {
    id: 8,
    title: "حرکت از تاریکی به سوی نور",
    titleEn: "From Darkness to Light",
    timeStart: "00:49",
    timeEnd: "00:55",
    duration: 6,
    concept: "شخصی در محیط تاریک یا جنگلی به سوی منبع نور گرم حرکت می‌کند.",
    searchTerms: [
      "person walking towards light in dark stormy forest cinematic",
      "silhouette walking to light beam",
    ],
    trimNotes:
      "6 ثانیه. سیلوئت از پشت یا نیم‌رخ. حرکت آهسته و مصمم. کنتراست بالا اما سایه‌ها با جزئیات.",
    typography: [
      { time: "00:51", text: "در برابر بدی" },
      { time: "00:53", text: "نور را انتخاب کن", highlight: "نور" },
    ],
    soundNotes: "Whoosh یا باد نرم، بدون ضربه‌ی شدید.",
    colorNotes: "سایه‌ها تیره اما قابل‌دیدن. نور مقصد گرم‌تر.",
    transition: "Dissolve داخلی 0.4 ثانیه.",
    stockLinks: [
      {
        label: "مردی در حال حرکت در جنگل",
        url: "https://www.pexels.com/video/man-walking-into-woods-6318570/",
        specs: "4K — Pexels",
      },
      {
        label: "نور طلایی میان درختان",
        url: "https://www.pexels.com/video/scenic-view-of-a-forest-5365208/",
        specs: "Pexels",
      },
    ],
    colorPhase: "تاریکی → نور",
    icon: "🌅",
  },
  {
    id: 9,
    title: "باران بهاری و جوانه",
    titleEn: "Spring Rain & Sprout",
    timeStart: "00:55",
    timeEnd: "01:02",
    duration: 7,
    concept: "باران بهاری، قطره آب روی برگ تازه و سپس نمای درخت در باران.",
    searchTerms: [
      "macro raindrop on green leaf spring slow motion",
      "spring tree rain cinematic",
    ],
    trimNotes:
      "7 ثانیه ترکیبی: 3 ثانیه ماکرو قطره + 4 ثانیه نمای باران در جنگل. Soft Cut در ثانیه 3.",
    typography: [
      { time: "00:57", text: "پس از خزان" },
      { time: "01:00", text: "بهار می‌رسد", highlight: "بهار" },
    ],
    soundNotes: "صدای باران نرم، زیر نریشن.",
    colorNotes: "سبز تازه اما طبیعی. کنتراست و نور دو منبع هماهنگ.",
    transition: "Soft Cut از ماکرو به نمای مدیوم.",
    stockLinks: [
      {
        label: "ماکرو قطره روی برگ سبز",
        url: "https://www.pexels.com/video/water-droplets-on-green-leaves-2208022/",
        specs: "1080p / 16:9 — Pexels",
      },
      {
        label: "باران در جنگل سبز",
        url: "https://www.pexels.com/video/rain-in-the-forest-8110359/",
        specs: "4K / 16:9 / 60fps — Pexels",
      },
    ],
    colorPhase: "بهار",
    icon: "🌧️",
  },
  {
    id: 10,
    title: "درخت سبز و نور طلایی",
    titleEn: "Green Tree & Golden Light",
    timeStart: "01:02",
    timeEnd: "01:07",
    duration: 5,
    concept: "درختی سرسبز در نور طلایی؛ در صورت دسترسی، پرنده‌ای روی شاخه می‌نشیند.",
    searchTerms: [
      "beautiful green tree spring golden hour cinematic",
      "bird landing on tree branch spring",
    ],
    trimNotes:
      "5 ثانیه. نور گرم و طلایی. Pull Back آرام. رنگ سبز طبیعی بدون اشباع بیش از حد.",
    typography: [
      { time: "01:03", text: "پاکیزگی" },
      { time: "01:05", text: "راهِ سعادت است", highlight: "سعادت" },
    ],
    soundNotes: "صدای طبیعت بسیار آرام.",
    colorNotes: "طلایی و سبز بهاری، اشباع محدود.",
    transition: "Dissolve نرم.",
    stockLinks: [
      {
        label: "درخت تنها در چمنزار سبز هنگام غروب",
        url: "https://www.pexels.com/video/time-lapse-video-sunset-856973/",
        specs: "4K / 16:9 / 14s — Pexels",
      },
    ],
    colorPhase: "سبز/طلایی",
    icon: "🌳",
  },
  {
    id: 11,
    title: "پایان مفهومی و آرامش",
    titleEn: "Peaceful Ending",
    timeStart: "01:07",
    timeEnd: "01:09",
    duration: 2,
    concept: "نمای واید آرام از منظره بهاری و درخت سبز در نور طلایی؛ بدون لوگو.",
    searchTerms: ["peaceful spring landscape tree golden sunlight wide shot"],
    trimNotes:
      "2 ثانیه شات ثابت یا بسیار آرام. پایان با Fade Out بسیار نرم به سیاهی کامل.",
    typography: [{ time: "01:07", text: "از هر فصل، درسی بیاموز" }],
    soundNotes: "کاهش تدریجی تمام افکت‌ها. در 01:09 سکوت.",
    colorNotes: "همان تُن Scene 10 برای پیوستگی.",
    transition: "Fade Out به سیاهی از 01:08.3.",
    stockLinks: [
      {
        label: "صبح بهاری کنار جنگل و دریاچه",
        url: "https://www.pexels.com/video/peaceful-spring-morning-in-a-forest-by-a-lake-29300060/",
        specs: "1080p / 16:9 / 8s — Pexels",
      },
    ],
    colorPhase: "پیروزی",
    icon: "🕊️",
  },
];

export const typographySchedule = [
  { time: "00:02", text: "اوج پیروزی", scene: 1 },
  { time: "00:04", text: "از مسیر سختی‌ها می‌گذرد", scene: 1 },
  { time: "00:08", text: "رشد", scene: 2 },
  { time: "00:10", text: "نیازمند پذیرش سختی است", scene: 2 },
  { time: "00:15", text: "جرأت پرواز", scene: 3 },
  { time: "00:18", text: "از آسودگی عبور می‌کند", scene: 3 },
  { time: "00:22", text: "در آشفتگی", scene: 4 },
  { time: "00:25", text: "بال می‌گیریم", scene: 4 },
  { time: "00:28", text: "اگر اوج می‌خواهی", scene: 5 },
  { time: "00:31", text: "از سختی عبور کن", scene: 5 },
  { time: "00:36", text: "هر فصل", scene: 6 },
  { time: "00:39", text: "درسی دارد", scene: 6 },
  { time: "00:44", text: "تحمل کن", scene: 7 },
  { time: "00:47", text: "مقاومت کن", scene: 7 },
  { time: "00:51", text: "در برابر بدی", scene: 8 },
  { time: "00:53", text: "نور را انتخاب کن", scene: 8 },
  { time: "00:57", text: "پس از خزان", scene: 9 },
  { time: "01:00", text: "بهار می‌رسد", scene: 9 },
  { time: "01:03", text: "پاکیزگی", scene: 10 },
  { time: "01:05", text: "راهِ سعادت است", scene: 10 },
  { time: "01:07", text: "از هر فصل، درسی بیاموز", scene: 11 },
];

export const qcChecklist = [
  "تمام شات‌ها 16:9 هستند و کیفیت آن‌ها حداقل 1080p است.",
  "زمان‌بندی نهایی حدود 69 ثانیه است.",
  "مجوز و منبع تمام کلیپ‌های استفاده‌شده ثبت شده است.",
  "هیچ لوگو، واترمارک یا نوشته ناخواسته‌ای در فوتیج نیست.",
  "سبک بصری و Color Grade در تمام صحنه‌ها هماهنگ است.",
  "درخت‌های صحنه‌های پاییز، زمستان و بهار تا حد ممکن از نظر کادر و جایگاه تطبیق دارند.",
  "جهت حرکت انسان و پرنده بین شات‌های مرتبط ناگهان معکوس نمی‌شود.",
  "Typography فارسی، خوانا و با فونت Vazirmatn است.",
  "متن‌ها کوتاه و حرفه‌ای هستند و در Safe Area قرار دارند.",
  "انیمیشن متن نرم است (Fade In 400ms + Y=15px).",
  "Transitionها ساده و سینمایی هستند.",
  "مسیر رنگ از سختی به امید تغییر می‌کند و حس هر فصل حفظ شده است.",
  "فایل صوتی در نسخه اولیه اضافه نشده است.",
  "Timeline برای افزودن نریشن آماده است.",
  "پایان آرام و Fade Out کامل دارد.",
];

export const colorPhases = [
  { label: "سختی", color: "#4a3728" },
  { label: "طوفان", color: "#2d3748" },
  { label: "خزان", color: "#b7791f" },
  { label: "زمستان", color: "#718096" },
  { label: "نور", color: "#d69e2e" },
  { label: "بهار", color: "#38a169" },
  { label: "طلایی", color: "#d69e2e" },
  { label: "پیروزی", color: "#48bb78" },
];
