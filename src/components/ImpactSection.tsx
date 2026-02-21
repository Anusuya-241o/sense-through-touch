import { useCountUp } from "./useCountUp";

const ImpactSection = () => {
  const stat1 = useCountUp(466, 2000, "M");
  const stat2 = useCountUp(247, 2000);
  const stat3 = useCountUp(500, 1500);
  const stat4 = useCountUp(0, 500);

  return (
    <section className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-4">Impact</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            The Numbers That <span className="text-primary glow-text">Matter</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 reveal">
          <div ref={stat1.ref} className="bg-card border border-primary/20 rounded-xl p-6 text-center animate-pulse-glow">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">{stat1.display}</div>
            <p className="text-xs text-muted-foreground">People Affected</p>
          </div>
          <div ref={stat2.ref} className="bg-card border border-primary/20 rounded-xl p-6 text-center animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
            <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">{stat2.display}</div>
            <p className="text-xs text-muted-foreground">Mesh Nodes</p>
          </div>
          <div ref={stat3.ref} className="bg-card border border-primary/20 rounded-xl p-6 text-center animate-pulse-glow" style={{ animationDelay: "1s" }}>
            <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">&lt;{stat3.display}ms</div>
            <p className="text-xs text-muted-foreground">Response Time</p>
          </div>
          <div ref={stat4.ref} className="bg-card border border-primary/20 rounded-xl p-6 text-center animate-pulse-glow" style={{ animationDelay: "1.5s" }}>
            <div className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">Zero</div>
            <p className="text-xs text-muted-foreground">Screen Required</p>
          </div>
        </div>

        {/* Impact columns */}
        <div className="grid md:grid-cols-2 gap-8 reveal">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">👤 Individual Impact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                Construction worker alerted to reversing truck 3 seconds before impact zone
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                Pedestrian instinctively steps aside for emergency vehicle — no screen check needed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span>
                Lab tech receives directional chemical spill warning while hands are in glove box
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-lg font-semibold text-secondary mb-4">🏢 Organizational Impact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">▸</span>
                OSHA compliance with verifiable alert delivery logs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">▸</span>
                Real-time hazard zone mapping across entire facilities
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">▸</span>
                Incident reduction metrics for insurance and reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
