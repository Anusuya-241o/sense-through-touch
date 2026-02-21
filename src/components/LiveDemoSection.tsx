import { useState, useEffect } from "react";

const motors = [
  { deg: 0, label: "N" },
  { deg: 51, label: "NE" },
  { deg: 103, label: "E" },
  { deg: 154, label: "SE" },
  { deg: 206, label: "SW" },
  { deg: 257, label: "W" },
  { deg: 309, label: "NW" },
];

const threats = [
  { label: "Truck", distance: "18m", bearing: 100, color: "hsl(346 100% 65%)", emoji: "🚛" },
  { label: "Siren", distance: "35m", bearing: 250, color: "hsl(45 100% 52%)", emoji: "🚨" },
  { label: "Voice", distance: "42m", bearing: 0, color: "hsl(249 100% 69%)", emoji: "🗣️" },
];

const pulsePatterns = [
  { name: "Calm Heartbeat", subtitle: "All Clear", bars: 8, animation: "animate-heartbeat-calm", color: "bg-primary" },
  { name: "Elevated Rhythm", subtitle: "Nearby Threat", bars: 8, animation: "animate-heartbeat-elevated", color: "bg-accent" },
  { name: "Arrhythmic Burst", subtitle: "Critical Alert", bars: 8, animation: "animate-heartbeat-critical", color: "bg-destructive" },
];

const LiveDemoSection = () => {
  const [activeMotor, setActiveMotor] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMotor((prev) => {
        // Cycle through motors that correspond to threats: E(2), W(5), N(0)
        const sequence = [2, 5, 0];
        const idx = sequence.indexOf(prev);
        return sequence[(idx + 1) % sequence.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">Live Demo</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            See It <span className="text-primary glow-text">In Action</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Wristband */}
          <div className="reveal bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">PulseCode Wristband — 7 Haptic Motors</h3>
            
            {/* Wristband diagram */}
            <div className="relative w-52 h-52 mx-auto mb-8">
              {/* Band */}
              <div className="absolute inset-4 rounded-full border-2 border-muted bg-card" />
              <div className="absolute inset-8 rounded-full border border-muted-foreground/20" />
              
              {/* Motors */}
              {motors.map((m, i) => {
                const r = 90;
                const rad = ((m.deg - 90) * Math.PI) / 180;
                const x = 104 + Math.cos(rad) * r - 10;
                const y = 104 + Math.sin(rad) * r - 10;
                const isActive = i === activeMotor;
                return (
                  <div
                    key={i}
                    className={`absolute w-5 h-5 rounded-full border-2 flex items-center justify-center text-[8px] font-heading transition-all duration-300 ${
                      isActive
                        ? "bg-primary border-primary animate-motor-fire scale-125"
                        : "bg-muted border-muted-foreground/30"
                    }`}
                    style={{ left: x, top: y }}
                  >
                    <span className={isActive ? "text-primary-foreground" : "text-muted-foreground"}>
                      {m.label}
                    </span>
                  </div>
                );
              })}
              
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-heading">WRIST</span>
              </div>
            </div>

            {/* Bio-pulse patterns */}
            <h4 className="font-heading text-sm text-muted-foreground mb-4">Bio-Pulse Patterns</h4>
            <div className="space-y-4">
              {pulsePatterns.map((p, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-xs font-semibold text-foreground">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">{p.subtitle}</p>
                  </div>
                  <div className="flex items-end gap-1 h-8 flex-1">
                    {Array.from({ length: p.bars }).map((_, j) => (
                      <div
                        key={j}
                        className={`w-full ${p.color} rounded-sm ${p.animation}`}
                        style={{
                          animationDelay: `${j * 0.08}s`,
                          minHeight: "4px",
                          height: "30%",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Radar */}
          <div className="reveal bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">SafeMesh Radar — Live Threat Map</h3>
            
            {/* Radar */}
            <div className="relative w-52 h-52 mx-auto mb-6">
              {/* Rings */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-primary/15"
                  style={{
                    width: `${i * 50}px`, height: `${i * 50}px`,
                    top: `calc(50% - ${i * 25}px)`, left: `calc(50% - ${i * 25}px)`,
                  }}
                />
              ))}
              {/* Cross lines */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/10" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-primary/10" />
              
              {/* Sweep */}
              <div className="absolute inset-0 animate-radar-sweep" style={{ transformOrigin: "center" }}>
                <div
                  className="absolute top-1/2 left-1/2 w-1/2 h-[1px]"
                  style={{ background: "linear-gradient(90deg, hsl(163 100% 48% / 0.6), transparent)", transformOrigin: "left" }}
                />
              </div>

              {/* User dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-primary z-10" />

              {/* Threat dots */}
              {threats.map((t, i) => {
                const dist = t.distance === "18m" ? 35 : t.distance === "35m" ? 60 : 80;
                const rad = ((t.bearing - 90) * Math.PI) / 180;
                const x = 104 + Math.cos(rad) * dist - 6;
                const y = 104 + Math.sin(rad) * dist - 6;
                return (
                  <div key={i} className="absolute animate-threat-pulse z-10" style={{ left: x, top: y, animationDelay: `${i * 0.5}s` }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] whitespace-nowrap font-heading" style={{ color: t.color }}>
                      {t.emoji} {t.distance}
                    </span>
                  </div>
                );
              })}

              {/* Mesh nodes */}
              {[
                { x: 25, y: 30 }, { x: 70, y: 20 }, { x: 80, y: 65 }, { x: 15, y: 75 }, { x: 55, y: 85 },
              ].map((pos, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 animate-node-pulse" style={{ left: `${pos.x}%`, top: `${pos.y}%`, animationDelay: `${i * 0.4}s` }} />
              ))}
            </div>

            {/* Threat feed */}
            <h4 className="font-heading text-sm text-muted-foreground mb-3">Threat Feed</h4>
            <div className="space-y-2">
              {threats.map((t, i) => (
                <div key={i} className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
                  <span className="text-lg">{t.emoji}</span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-foreground">{t.label}</span>
                    <span className="text-xs text-muted-foreground ml-2">{t.distance}</span>
                  </div>
                  <span className="text-xs font-heading" style={{ color: t.color }}>
                    {t.bearing === 100 ? "→ RIGHT" : t.bearing === 250 ? "← LEFT" : "↑ AHEAD"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
