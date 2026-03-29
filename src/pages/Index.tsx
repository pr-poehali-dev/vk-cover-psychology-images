import { useState } from "react";

const PHOTO = "https://cdn.poehali.dev/projects/d03c459d-bf81-4f8a-847a-381527135cb4/bucket/cac260a2-71b5-458d-92e4-560c968cdbb9.jpg";
const CARDS_IMG = "https://cdn.poehali.dev/projects/d03c459d-bf81-4f8a-847a-381527135cb4/files/87a2fb55-a768-4800-9d79-50b71dc4b1c6.jpg";
const GAME_IMG = "https://cdn.poehali.dev/projects/d03c459d-bf81-4f8a-847a-381527135cb4/files/d89e2bb5-1289-4aad-9e4e-634101e5e1b9.jpg";

const WA_LINK = "https://wa.me/79226599294";
const MAX_LINK = "https://max.ru/u/f9LHodD0cOJC66-LsEZouEvQqbEDGp-2b9TKkDRJC-OTFyI3zRwP7sSrV4U";

const services = [
  {
    icon: "🃏",
    title: "МАК-консультирование",
    desc: "Работа с метафорическими ассоциативными картами. Мягкий и глубокий способ исследовать внутренний мир, найти ресурсы и ответы на волнующие вопросы.",
    img: CARDS_IMG,
    tags: ["Индивидуально", "Онлайн / очно"],
  },
  {
    icon: "🎲",
    title: "Трансформационные игры",
    desc: "Психологические настольные игры для глубокого самопознания. Групповой и индивидуальный формат. Безопасное пространство для изменений.",
    img: GAME_IMG,
    tags: ["Группа / индивидуально", "Онлайн / очно"],
  },
  {
    icon: "💬",
    title: "Психологическое консультирование",
    desc: "Индивидуальные сессии для проработки тревоги, отношений, самооценки, жизненных изменений. 20 лет опыта работы с детьми и взрослыми.",
    img: PHOTO,
    tags: ["Индивидуально", "Онлайн / очно"],
  },
];

const benefits = [
  { icon: "🎓", text: "Высшее психологическое образование" },
  { icon: "🏫", text: "20 лет опыта в школе и детском саду" },
  { icon: "🧠", text: "20 лет опыта психологической работы" },
  { icon: "🌿", text: "Мягкий, бережный подход" },
  { icon: "🔒", text: "Полная конфиденциальность" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Golos Text', sans-serif", color: "#1a0a2e", background: "#faf8ff" }}>

      {/* ───── ШРИФТЫ ───── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Golos+Text:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 8px; border: none; cursor: pointer;
          font-family: 'Golos Text', sans-serif; font-size: 15px; font-weight: 500;
          letter-spacing: 0.04em; transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(120,60,200,0.3); }
        .btn-wa { background: linear-gradient(135deg, #25d366, #128c7e); color: #fff; }
        .btn-max { background: linear-gradient(135deg, #7c3aed, #5b21b6); color: #fff; }
        .btn-outline { background: transparent; border: 1.5px solid rgba(124,58,237,0.4); color: #7c3aed; }
        .btn-outline:hover { background: rgba(124,58,237,0.06); }
        .service-card { transition: transform 0.25s, box-shadow 0.25s; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(80,30,120,0.14); }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .about-grid { flex-direction: column !important; }
          .hero-title { font-size: 38px !important; }
        }
      `}</style>

      {/* ───── ШАПКА ───── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(250,248,255,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(124,58,237,0.1)",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 14, color: "#fff", fontWeight: 600,
            }}>СВ</div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: "#3b0764" }}>
              Светлана Вознесенская
            </span>
          </div>
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {[["Обо мне", "about"], ["Услуги", "services"], ["Запись", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Golos Text', sans-serif", fontSize: 14, color: "#4c1d95",
                fontWeight: 400, letterSpacing: "0.04em",
              }}>{label}</button>
            ))}
            <button className="btn-primary btn-max" style={{ padding: "8px 20px", fontSize: 13 }} onClick={() => scrollTo("contact")}>
              Записаться
            </button>
          </nav>
        </div>
      </header>

      {/* ───── HERO ───── */}
      <section style={{
        background: "linear-gradient(135deg, #1a0a2e 0%, #3b0764 50%, #1e1040 100%)",
        padding: "80px 24px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Декор */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,210,80,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
          {/* Текст */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Golos Text', sans-serif", fontSize: 13, letterSpacing: "0.25em", color: "rgba(255,218,80,0.9)", textTransform: "uppercase", marginBottom: 20 }}>
              Психолог • МАК-консультант
            </div>
            <h1 className="hero-title" style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
              fontSize: 52, lineHeight: 1.15, color: "#fff", marginBottom: 16,
            }}>
              Психология<br />
              <span style={{ fontStyle: "italic", color: "rgba(216,180,254,0.95)" }}>через образы</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(220,200,255,0.8)", marginBottom: 36, maxWidth: 480 }}>
              Мягкий и глубокий путь к себе с помощью МАК-карт и трансформационных игр. 20 лет опыта работы с людьми разного возраста.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary btn-wa">
                <span>💬</span> WhatsApp
              </a>
              <a href={MAX_LINK} target="_blank" rel="noreferrer" className="btn-primary btn-max">
                <span>📱</span> MAX
              </a>
            </div>
          </div>

          {/* Фото */}
          <div style={{ flexShrink: 0, position: "relative" }}>
            <div style={{
              width: 280, height: 340,
              borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
              overflow: "hidden",
              border: "3px solid rgba(216,180,254,0.3)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 0 12px rgba(124,58,237,0.1)",
            }}>
              <img src={PHOTO} alt="Светлана Вознесенская" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", bottom: -12, right: -12,
              background: "linear-gradient(135deg, rgba(200,150,20,0.85), rgba(160,110,0,0.75))",
              backdropFilter: "blur(8px)", border: "1px solid rgba(255,218,80,0.3)",
              borderRadius: 12, padding: "10px 16px", color: "#fff",
              fontFamily: "'Golos Text', sans-serif", fontSize: 13, fontWeight: 500,
            }}>
              🏆 20 лет опыта
            </div>
          </div>
        </div>
      </section>

      {/* ───── ОБО МНЕ ───── */}
      <section id="about" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#a855f7", textTransform: "uppercase", marginBottom: 12 }}>Знакомство</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#3b0764" }}>
              Обо мне
            </h2>
          </div>

          <div className="about-grid" style={{ display: "flex", gap: 60, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "#4a3060", marginBottom: 24 }}>
                Меня зовут <strong>Светлана Вознесенская</strong> — психолог с высшим психологическим образованием и 20-летним опытом работы педагогом-психологом в школе и детском саду.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6b5080", marginBottom: 36 }}>
                В своей практике я использую <strong>МАК-консультирование</strong> и <strong>психологические трансформационные игры</strong> — инструменты, которые помогают мягко, но глубоко исследовать себя, найти внутренние ресурсы и прийти к изменениям.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {benefits.map((b) => (
                  <div key={b.text} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "16px 18px", borderRadius: 12,
                    background: "linear-gradient(135deg, #faf5ff, #f5f0ff)",
                    border: "1px solid rgba(124,58,237,0.1)",
                  }}>
                    <span style={{ fontSize: 22 }}>{b.icon}</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: "#4c1d95", fontWeight: 400 }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: 260, height: 320, borderRadius: 24, overflow: "hidden",
                boxShadow: "0 20px 50px rgba(80,30,120,0.18)",
                border: "1px solid rgba(124,58,237,0.15)",
              }}>
                <img src={CARDS_IMG} alt="МАК-карты" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── УСЛУГИ ───── */}
      <section id="services" style={{ padding: "80px 24px", background: "linear-gradient(135deg, #faf5ff 0%, #f5f0ff 100%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#a855f7", textTransform: "uppercase", marginBottom: 12 }}>Чем я могу помочь</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#3b0764" }}>
              Услуги
            </h2>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} className="service-card" style={{
                background: "#fff", borderRadius: 20, overflow: "hidden",
                border: "1px solid rgba(124,58,237,0.1)",
                boxShadow: "0 4px 20px rgba(80,30,120,0.07)",
              }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: "#3b0764", marginBottom: 10 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6b5080", marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {s.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: 12, padding: "4px 12px", borderRadius: 20,
                        background: "rgba(124,58,237,0.08)", color: "#7c3aed",
                        border: "1px solid rgba(124,58,237,0.15)", fontWeight: 400,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <p style={{ color: "#9060b0", fontSize: 14, fontStyle: "italic" }}>Стоимость — по договорённости. Напишите, и мы обсудим детали.</p>
          </div>
        </div>
      </section>

      {/* ───── ЦИТАТА ───── */}
      <section style={{
        padding: "70px 24px",
        background: "linear-gradient(135deg, #3b0764, #1a0a2e)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 48, color: "rgba(216,180,254,0.3)", fontFamily: "'Cormorant Garamond', serif", lineHeight: 1, marginBottom: 16 }}>"</div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: 26, lineHeight: 1.6, color: "rgba(230,210,255,0.95)",
            marginBottom: 20,
          }}>
            Образы говорят там, где слова молчат. МАК-карты открывают то, что уже знает душа.
          </p>
          <div style={{ fontSize: 13, letterSpacing: "0.15em", color: "rgba(255,218,80,0.7)", textTransform: "uppercase" }}>
            Светлана Вознесенская
          </div>
        </div>
      </section>

      {/* ───── ЗАПИСЬ ───── */}
      <section id="contact" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#a855f7", textTransform: "uppercase", marginBottom: 12 }}>Начнём путь вместе</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#3b0764", marginBottom: 16 }}>
            Записаться
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b5080", marginBottom: 40 }}>
            Напишите мне в удобный мессенджер — отвечу в течение дня, обсудим формат и время.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-primary btn-wa" style={{ fontSize: 16, padding: "16px 36px" }}>
              <span>💬</span> Написать в WhatsApp
            </a>
            <a href={MAX_LINK} target="_blank" rel="noreferrer" className="btn-primary btn-max" style={{ fontSize: 16, padding: "16px 36px" }}>
              <span>📱</span> Написать в MAX
            </a>
          </div>

          <div style={{ marginTop: 48, padding: "28px 32px", borderRadius: 16, background: "linear-gradient(135deg, #faf5ff, #f5f0ff)", border: "1px solid rgba(124,58,237,0.1)" }}>
            <p style={{ fontSize: 14, color: "#7c3aed", marginBottom: 6, fontWeight: 500 }}>🌿 Первая консультация</p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4c1d95" }}>Познакомимся, обсудим ваш запрос и я расскажу, какой формат работы подойдёт именно вам.</p>
          </div>
        </div>
      </section>

      {/* ───── ПОДВАЛ ───── */}
      <footer style={{
        padding: "32px 24px",
        background: "#1a0a2e",
        textAlign: "center",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "rgba(216,180,254,0.8)", marginBottom: 8 }}>
          Светлана Вознесенская
        </div>
        <div style={{ fontSize: 13, color: "rgba(200,180,255,0.4)", letterSpacing: "0.1em" }}>
          Психолог • МАК-консультант • Трансформационные игры
        </div>
      </footer>

    </div>
  );
}