const BG_IMAGE = "https://cdn.poehali.dev/projects/d03c459d-bf81-4f8a-847a-381527135cb4/files/bd5850ca-455c-439d-a0d3-d8a6367272ae.jpg";

const VKIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.5c-.57 0-.75-.46-1.77-1.5-.89-.87-1.27-.99-1.49-.99-.3 0-.39.08-.39.5v1.37c0 .36-.11.57-1.06.57-1.56 0-3.29-.95-4.51-2.7C5.72 10.6 5.25 8.8 5.25 8.43c0-.22.08-.43.5-.43h1.5c.37 0 .51.17.65.57.72 2.07 1.91 3.88 2.41 3.88.19 0 .27-.09.27-.57V9.82c-.06-1.02-.6-1.11-.6-1.47 0-.18.15-.36.38-.36h2.36c.32 0 .43.17.43.54v2.91c0 .32.14.43.23.43.19 0 .34-.11.68-.45 1.05-1.17 1.8-2.98 1.8-2.98.1-.22.27-.43.63-.43h1.5c.45 0 .55.23.45.54-.19.87-2.03 3.48-2.03 3.48-.16.26-.22.38 0 .67.16.22.69.68 1.04 1.09.65.74 1.14 1.36 1.27 1.79.13.42-.09.64-.52.64z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.93c-.12.57-.46.71-.93.44l-2.57-1.89-1.24 1.19c-.14.13-.25.25-.51.25l.18-2.6 4.73-4.27c.21-.18-.04-.28-.32-.1L7.28 14.6l-2.51-.78c-.55-.17-.56-.55.11-.81l9.82-3.79c.46-.17.86.11.94.58z"/>
  </svg>
);

const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0eaf6 0%, #e8f0f7 50%, #f5ede8 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      {/* Превью обложки */}
      <div style={{ marginBottom: "24px", color: "#888", fontSize: "13px", letterSpacing: "0.08em", fontFamily: "'Golos Text', sans-serif" }}>
        ОБЛОЖКА ВКонтакте — 1590 × 530 px
      </div>

      {/* Обложка */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          aspectRatio: "1590 / 530",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 32px 80px rgba(80, 50, 120, 0.18), 0 8px 24px rgba(0,0,0,0.10)",
        }}
      >
        {/* Фоновое изображение */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${BG_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Градиентный оверлей */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(58,30,90,0.72) 0%, rgba(58,30,90,0.35) 45%, rgba(20,10,40,0.18) 70%, transparent 100%)",
          }}
        />

        {/* Нижний градиент */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background:
              "linear-gradient(to top, rgba(25,10,50,0.75) 0%, rgba(25,10,50,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Декоративная линия-акцент */}
        <div
          style={{
            position: "absolute",
            left: "6%",
            top: "18%",
            bottom: "18%",
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(210,180,255,0.7), transparent)",
          }}
        />

        {/* Левый блок: заголовок */}
        <div
          style={{
            position: "absolute",
            left: "9%",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "52%",
          }}
        >
          {/* Надпись сверху */}
          <div
            style={{
              fontFamily: "'Golos Text', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(9px, 1.1vw, 14px)",
              letterSpacing: "0.25em",
              color: "rgba(210,190,255,0.85)",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Психолог Светлана Вознесенская
          </div>

          {/* Главный заголовок */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(18px, 3.4vw, 48px)",
              lineHeight: 1.15,
              color: "#ffffff",
              margin: "0 0 12px 0",
              textShadow: "0 2px 20px rgba(80,30,120,0.4)",
              letterSpacing: "-0.01em",
            }}
          >
            Психология<br />
            <span style={{ fontWeight: 600, fontStyle: "normal" }}>через образы</span>
          </h1>

          {/* Подзаголовок */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(12px, 1.8vw, 24px)",
              color: "rgba(230,215,255,0.9)",
              marginBottom: "18px",
              letterSpacing: "0.04em",
            }}
          >
            МАК-карты
          </div>

          {/* Теги */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
            {["МАК-карты", "Психология", "Самопознание"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "clamp(7px, 0.85vw, 11px)",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  color: "rgba(220,200,255,0.85)",
                  border: "1px solid rgba(180,150,255,0.35)",
                  borderRadius: "20px",
                  padding: "3px 10px",
                  backdropFilter: "blur(4px)",
                  background: "rgba(120,60,200,0.15)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Призыв к действию */}
          <div
            style={{
              fontFamily: "'Golos Text', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(8px, 1vw, 13px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#fff",
              background: "linear-gradient(90deg, rgba(130,70,210,0.75), rgba(90,50,160,0.6))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(200,160,255,0.3)",
              borderRadius: "4px",
              padding: "7px 16px",
              display: "inline-block",
            }}
          >
            Изучаем себя вместе
          </div>
        </div>

        {/* Нижний бар */}
        <div
          style={{
            position: "absolute",
            bottom: "7%",
            left: "9%",
            right: "6%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Иконки соцсетей */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "rgba(220,200,255,0.8)",
                fontSize: "clamp(6px, 0.75vw, 10px)",
                fontFamily: "'Golos Text', sans-serif",
              }}
            >
              <VKIcon />
              <span style={{ letterSpacing: "0.08em" }}>ВКонтакте</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "rgba(220,200,255,0.8)",
                fontSize: "clamp(6px, 0.75vw, 10px)",
                fontFamily: "'Golos Text', sans-serif",
              }}
            >
              <TelegramIcon />
              <span style={{ letterSpacing: "0.08em" }}>Telegram</span>
            </div>
          </div>

          {/* Логотип-монограмма */}
          <div
            style={{
              width: "clamp(28px, 3.5vw, 44px)",
              height: "clamp(28px, 3.5vw, 44px)",
              borderRadius: "50%",
              border: "1.5px solid rgba(200,160,255,0.5)",
              background: "rgba(80,30,140,0.4)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(10px, 1.4vw, 18px)",
              color: "rgba(230,210,255,0.9)",
              letterSpacing: "-0.02em",
            }}
          >
            СВ
          </div>
        </div>

        {/* Декоративные пятна */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "20%",
            width: "clamp(80px, 14vw, 200px)",
            height: "clamp(80px, 14vw, 200px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(160,100,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Подпись под обложкой */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "32px",
          color: "#aaa",
          fontSize: "12px",
          fontFamily: "'Golos Text', sans-serif",
        }}
      >
        <span>ПК: 1590 × 530 px</span>
        <span>•</span>
        <span>Мобильный: центральная область 1198 × 400 px</span>
      </div>
    </div>
  );
};

export default Index;