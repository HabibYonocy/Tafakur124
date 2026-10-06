import { useState, useEffect } from "react";
import { scenes, typographySchedule, qcChecklist, colorPhases } from "./data/scenes";

function App() {
  const [activeScene, setActiveScene] = useState<number>(1);
  const [showQC, setShowQC] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(qcChecklist.length).fill(false)
  );
  const [typographyAnim, setTypographyAnim] = useState(false);

  const currentScene = scenes.find((s) => s.id === activeScene)!;

  const toggleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const progressPercent = (checkedItems.filter(Boolean).length / qcChecklist.length) * 100;

  useEffect(() => {
    setTypographyAnim(false);
    const t = setTimeout(() => setTypographyAnim(true), 100);
    return () => clearTimeout(t);
  }, [activeScene]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-[Vazirmatn] direction-rtl" dir="rtl">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-l from-amber-900/20 via-transparent to-emerald-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <span className="text-amber-400">تربیت سالم</span>
                <span className="text-white/60 text-lg sm:text-xl font-normal mr-3">
                  Video Production Dashboard
                </span>
              </h1>
              <p className="text-white/50 text-sm mt-1">
                ویدیوی سینمایی الهام‌بخش — نسخه مبتنی بر فوتیج استوک
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                69 ثانیه
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                16:9
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                1080p+
              </span>
              <span className="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300">
                11 صحنه
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Color Journey Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center gap-1 text-xs text-white/50 mb-2">
          <span>مسیر رنگ:</span>
          <span>سختی → خزان → زمستان → نور → بهار → پیروزی</span>
        </div>
        <div className="flex h-2 rounded-full overflow-hidden">
          {colorPhases.map((phase, i) => (
            <div
              key={i}
              className="flex-1 transition-all duration-500"
              style={{ backgroundColor: phase.color }}
              title={phase.label}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-white/70">تایم‌لاین صحنه‌ها</h2>
          <button
            onClick={() => setShowQC(!showQC)}
            className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
          >
            چک‌لیست QC ({checkedItems.filter(Boolean).length}/{qcChecklist.length})
          </button>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-thin">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl border transition-all duration-300 min-w-[90px] ${
                activeScene === scene.id
                  ? "bg-amber-500/20 border-amber-500/50 scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{scene.icon}</span>
              <span className="text-[10px] text-white/60">{scene.timeStart}</span>
              <span className="text-[10px] font-medium text-white/80 truncate max-w-[70px]">
                {scene.title.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* QC Checklist Panel */}
      {showQC && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white/90">چک‌لیست کنترل کیفیت</h3>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-xs text-white/50">{Math.round(progressPercent)}%</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {qcChecklist.map((item, i) => (
                <label
                  key={i}
                  className={`flex items-start gap-2 p-2 rounded-lg cursor-pointer transition-colors ${
                    checkedItems[i] ? "bg-emerald-500/10" : "hover:bg-white/5"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[i]}
                    onChange={() => toggleCheck(i)}
                    className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 text-emerald-500 focus:ring-emerald-500/50"
                  />
                  <span
                    className={`text-xs leading-relaxed ${
                      checkedItems[i] ? "text-emerald-300 line-through" : "text-white/70"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Scene Detail - Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Scene Header */}
          <div className="bg-gradient-to-l from-white/[0.03] to-white/[0.06] border border-white/10 rounded-2xl p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{currentScene.icon}</span>
                  <div>
                    <span className="text-xs text-amber-400 font-medium">
                      Scene {String(currentScene.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {currentScene.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/50">{currentScene.titleEn}</p>
              </div>
              <div className="text-left flex-shrink-0">
                <div className="text-xs text-white/40">مدت</div>
                <div className="text-xl font-bold text-amber-400">{currentScene.duration}s</div>
                <div className="text-xs text-white/40 mt-1">
                  {currentScene.timeStart}–{currentScene.timeEnd}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 mt-4 leading-relaxed">{currentScene.concept}</p>
          </div>

          {/* Typography Preview */}
          <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="text-xs font-medium text-white/60">پیش‌نمایش تایپوگرافی</span>
              <span className="text-[10px] text-white/40">Vazirmatn Bold</span>
            </div>
            <div className="relative aspect-video bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-8">
              {/* Simulated video frame */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
              </div>
              {/* Typography */}
              <div className="relative text-center space-y-4" dir="rtl">
                {currentScene.typography.map((t, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${
                      typographyAnim
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-4 scale-[0.97]"
                    }`}
                    style={{ transitionDelay: `${i * 300}ms` }}
                  >
                    <p
                      className={`text-2xl sm:text-3xl font-bold text-white drop-shadow-lg ${
                        t.highlight ? "tracking-wide" : ""
                      }`}
                    >
                      {t.text.split(t.highlight || "").map((part, j) =>
                        t.highlight && part !== t.highlight ? (
                          <span key={j}>{part}</span>
                        ) : t.highlight && part === t.highlight ? (
                          <span key={j} className="text-amber-400 font-extrabold">
                            {part}
                          </span>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                    <span className="text-[10px] text-white/30 block mt-1">{t.time}</span>
                  </div>
                ))}
              </div>
              {/* Safe area indicators */}
              <div className="absolute inset-4 border border-white/5 rounded-lg pointer-events-none" />
            </div>
          </div>

          {/* Trim & Edit Notes */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              راهنمای برش و تدوین
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">{currentScene.trimNotes}</p>
          </div>

          {/* Transition & Color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
              <h4 className="text-xs font-semibold text-white/60 mb-2">انتقال</h4>
              <p className="text-sm text-white/70">{currentScene.transition}</p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
              <h4 className="text-xs font-semibold text-white/60 mb-2">اصلاح رنگ</h4>
              <p className="text-sm text-white/70">{currentScene.colorNotes}</p>
            </div>
          </div>

          {/* Stock Footage Links */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              فوتیج‌های استوک پیشنهادی
            </h4>
            <div className="space-y-2">
              {currentScene.stockLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all group"
                >
                  <div>
                    <p className="text-sm text-white/80 group-hover:text-amber-300 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-[10px] text-white/40 mt-0.5">{link.specs}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
            {/* Search Terms */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-[10px] text-white/40 mb-2">عبارت‌های جستجو:</p>
              <div className="flex flex-wrap gap-1.5">
                {currentScene.searchTerms.map((term, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-white/50 font-mono"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Sound Design */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              طراحی صدا
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">{currentScene.soundNotes}</p>
            <div className="mt-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-[10px] text-blue-300/70">
                ⚠️ نریشن بعداً اضافه می‌شود. افکت‌ها زیر نریشن با ولوم 15–20%.
              </p>
            </div>
          </div>

          {/* Typography Schedule */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3">زمان‌بندی متن‌ها</h4>
            <div className="space-y-1.5 max-h-[300px] overflow-y-auto scrollbar-thin">
              {typographySchedule.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-xs py-1.5 px-2 rounded-lg transition-colors ${
                    item.scene === activeScene
                      ? "bg-amber-500/10 border border-amber-500/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  <span className="text-white/30 font-mono text-[10px] w-10 flex-shrink-0">
                    {item.time}
                  </span>
                  <span
                    className={`text-white/70 ${item.scene === activeScene ? "text-amber-200" : ""}`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Output Specs */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3">مشخصات خروجی</h4>
            <div className="space-y-2">
              {[
                { label: "ابعاد", value: "1920×1080" },
                { label: "نسبت تصویر", value: "16:9" },
                { label: "نرخ فریم", value: "24/30 FPS" },
                { label: "کدک", value: "H.264" },
                { label: "مدت هدف", value: "00:01:09" },
                { label: "صدا", value: "AAC (بعد از نریشن)" },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-white/40">{spec.label}</span>
                  <span className="text-white/70 font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Identity Rules */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3">هویت بصری</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                Photorealistic cinematic
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                عمق میدان ظریف، نور حجمی
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">✓</span>
                حرکت دوربین آرام
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-white/40">CGI پلاستیکی / کارتونی</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-white/40">واترمارک / لوگو</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">✗</span>
                <span className="text-white/40">افکت‌های بیش از حد</span>
              </li>
            </ul>
          </div>

          {/* Narrative Arc */}
          <div className="bg-gradient-to-b from-amber-900/10 to-emerald-900/10 border border-white/10 rounded-2xl p-5">
            <h4 className="text-sm font-semibold text-white/80 mb-3">مسیر روایی</h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "سنگلاخ",
                "تلاش",
                "پرواز",
                "آشفتگی",
                "اوج",
                "خزان",
                "زمستان",
                "مقاومت",
                "باران",
                "بهار",
                "سعادت",
              ].map((step, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {step}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-white/40 mt-3 leading-relaxed italic">
              «سختی پایان راه نیست؛ هر فصل زندگی درسی دارد و پس از تحمل و پاکیزگی، امکان رسیدن به
              بهار و پیروزی وجود دارد.»
            </p>
          </div>
        </div>
      </div>

      {/* Full Typography Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-4">تایم‌لاین کامل تایپوگرافی</h3>
          <div className="relative">
            {/* Timeline bar */}
            <div className="h-1 bg-white/10 rounded-full mb-4 relative">
              {scenes.map((scene) => {
                const startSec = parseTime(scene.timeStart);
                const pct = (startSec / 69) * 100;
                return (
                  <div
                    key={scene.id}
                    className="absolute top-0 h-full bg-amber-500/30 rounded-full"
                    style={{
                      left: `${pct}%`,
                      width: `${(scene.duration / 69) * 100}%`,
                    }}
                  />
                );
              })}
              {/* Typography markers */}
              {typographySchedule.map((item, i) => {
                const startSec = parseTime(item.time);
                const pct = (startSec / 69) * 100;
                return (
                  <div
                    key={i}
                    className="absolute -top-1 w-2 h-3 bg-amber-400 rounded-full"
                    style={{ left: `${pct}%` }}
                    title={`${item.time} — ${item.text}`}
                  />
                );
              })}
            </div>
            {/* Scene labels */}
            <div className="flex justify-between text-[9px] text-white/30 font-mono">
              <span>00:00</span>
              <span>00:15</span>
              <span>00:30</span>
              <span>00:45</span>
              <span>01:00</span>
              <span>01:09</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>پروژه ویدیوی سینمایی «تربیت سالم» — نسخه فوتیج استوک</p>
            <div className="flex items-center gap-4">
              <span>منابع: Pexels · Pixabay · Mixkit · Coverr</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function parseTime(time: string): number {
  const parts = time.split(":");
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

export default App;
