const steps = [
  { icon: "🔊", label: "Hazard Sound Occurs", desc: "Environmental danger creates sound signature", cascade: "animate-cascade-1" },
  { icon: "📡", label: "SafeMesh Detects", desc: "247 nodes detect + AI classifies direction & distance", cascade: "animate-cascade-2" },
  { icon: "🧠", label: "Threat Intelligence", desc: "What + where + how close — packaged in milliseconds", cascade: "animate-cascade-3" },
  { icon: "⌚", label: "PulseCode Fires", desc: "Correct motor, correct side, correct rhythm", cascade: "animate-cascade-4" },
  { icon: "✅", label: "User Reacts — Safe", desc: "Instinctive response in under 3 seconds", cascade: "animate-cascade-5" },
];

const PipelineSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">The Unified Pipeline</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            One System. Two Layers. <span className="text-primary glow-text">One Loop.</span>
          </h2>
        </div>

        {/* Pipeline flow */}
        <div className="reveal relative flex flex-col lg:flex-row items-center gap-4 lg:gap-0 mb-20 overflow-x-auto pb-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <div className={`relative bg-card border border-primary/30 rounded-xl p-5 text-center w-48 ${step.cascade}`}>
                <div className="text-3xl mb-2">{step.icon}</div>
                <h4 className="font-heading text-xs font-semibold text-primary mb-1">{step.label}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-xl border border-primary/20 animate-pulse-ring pointer-events-none" style={{ animationDelay: `${i * 1}s` }} />
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block relative w-12 h-[2px] bg-primary/20 overflow-hidden mx-1">
                  <div className="absolute inset-0 animate-flow-right bg-gradient-to-r from-transparent via-primary to-transparent" style={{ animationDelay: `${i * 0.4}s` }} />
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-[2px] h-8 bg-primary/20 relative overflow-hidden mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Two layers */}
        <div className="grid md:grid-cols-2 gap-8 reveal">
          <div className="bg-card border border-primary/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📡</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">SafeMesh</h3>
                <p className="font-heading text-sm text-muted-foreground">The Ears</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A distributed network of 247 acoustic sensors that continuously monitor the environment. 
              AI-powered classification identifies sound type, triangulates direction, and estimates distance — 
              all in real time. Every node strengthens the mesh.
            </p>
          </div>
          <div className="bg-card border border-secondary/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⌚</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-secondary">PulseCode</h3>
                <p className="font-heading text-sm text-muted-foreground">The Nervous System</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A directional haptic wristband with 7 vibrotactile motors arranged around the wrist. 
              Each motor maps to a compass bearing. Bio-inspired pulse patterns convey urgency 
              through rhythm alone — no screen, no sound, no learning curve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
