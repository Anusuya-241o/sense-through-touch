const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background radar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] opacity-20">
          {/* Concentric rings */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-primary/30"
              style={{
                width: `${i * 150}px`,
                height: `${i * 150}px`,
                top: `calc(50% - ${i * 75}px)`,
                left: `calc(50% - ${i * 75}px)`,
              }}
            />
          ))}
          {/* Sweep */}
          <div className="absolute inset-0 animate-radar-sweep" style={{ transformOrigin: "center" }}>
            <div
              className="absolute top-1/2 left-1/2 w-1/2 h-[2px]"
              style={{
                background: "linear-gradient(90deg, hsl(163 100% 48% / 0.8), transparent)",
                transformOrigin: "left center",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-1/2"
              style={{
                height: "60px",
                background: "conic-gradient(from 0deg, hsl(163 100% 48% / 0.15), transparent 30deg)",
                transformOrigin: "left center",
                marginTop: "-30px",
              }}
            />
          </div>
          {/* Mesh nodes */}
          {[
            { x: 20, y: 15 }, { x: 75, y: 25 }, { x: 85, y: 70 },
            { x: 30, y: 80 }, { x: 60, y: 50 }, { x: 10, y: 55 },
            { x: 45, y: 20 }, { x: 70, y: 85 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary animate-node-pulse"
              style={{ left: `${pos.x}%`, top: `${pos.y}%`, animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating mesh lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="hsl(163 100% 48%)" strokeWidth="0.5" />
        <line x1="70%" y1="15%" x2="50%" y2="45%" stroke="hsl(163 100% 48%)" strokeWidth="0.5" />
        <line x1="80%" y1="60%" x2="60%" y2="35%" stroke="hsl(163 100% 48%)" strokeWidth="0.5" />
        <line x1="20%" y1="70%" x2="45%" y2="55%" stroke="hsl(163 100% 48%)" strokeWidth="0.5" />
        <line x1="90%" y1="30%" x2="65%" y2="50%" stroke="hsl(163 100% 48%)" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
          We Didn't Build a Louder Alarm.{" "}
          <span className="text-primary glow-text">
            We Gave Deaf People a Sixth Sense.
          </span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          SafeSense detects environmental dangers through 247 crowd-sourced sensors and delivers
          directional alerts through touch — in under 500ms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
          >
            See How It Works
          </a>
          <a
            href="#demo"
            className="px-8 py-4 border border-primary/40 text-primary font-heading text-sm font-semibold rounded-lg hover:bg-primary/10 transition-all"
          >
            Watch Demo
          </a>
        </div>

        {/* Center visual: wristband + radar connected */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 mx-auto max-w-lg">
          {/* Wristband */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-primary/40 flex items-center justify-center bg-card/50 backdrop-blur">
            <div className="text-3xl sm:text-4xl">⌚</div>
            {/* Motor firing indicators */}
            {[0, 45, 90, 135, 180, 225, 315].map((deg, i) => (
              <div
                key={deg}
                className={`absolute w-2.5 h-2.5 rounded-full ${i === 2 || i === 3 ? "bg-primary animate-motor-fire" : "bg-muted-foreground/30"}`}
                style={{
                  top: `calc(50% - 5px + ${-Math.cos((deg * Math.PI) / 180) * 48}px)`,
                  left: `calc(50% - 5px + ${Math.sin((deg * Math.PI) / 180) * 48}px)`,
                }}
              />
            ))}
            <div className="absolute -bottom-6 text-xs text-primary font-heading">PulseCode</div>
          </div>

          {/* Data flow line */}
          <div className="relative w-16 sm:w-24 h-[2px] bg-primary/20 overflow-hidden">
            <div className="absolute inset-0 animate-flow-right bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Mini radar */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-primary/40 flex items-center justify-center bg-card/50 backdrop-blur overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-primary/20"
                style={{ width: `${i * 35}px`, height: `${i * 35}px` }}
              />
            ))}
            <div className="absolute inset-0 animate-radar-sweep" style={{ transformOrigin: "center" }}>
              <div
                className="absolute top-1/2 left-1/2 w-1/2 h-[1px]"
                style={{ background: "linear-gradient(90deg, hsl(163 100% 48% / 0.6), transparent)", transformOrigin: "left" }}
              />
            </div>
            <div className="w-2 h-2 rounded-full bg-primary relative z-10" />
            <div className="absolute -bottom-6 text-xs text-primary font-heading">SafeMesh</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-body">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
