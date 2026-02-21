const scenarios = [
  {
    icon: "🏗️",
    title: "Deaf Construction Worker",
    danger: "Reversing truck backup beeper",
    existing: "Vibrating phone app requires looking at screen — hands occupied, eyes on task",
    cost: "3,200+ workplace injuries annually from unheard vehicle warnings",
  },
  {
    icon: "🚶",
    title: "Hard-of-Hearing Pedestrian",
    danger: "Emergency vehicle siren approaching",
    existing: "Hearing aids amplify all noise equally — sirens lost in city soundscape",
    cost: "Pedestrians with hearing loss are 2.5x more likely to be struck by emergency vehicles",
  },
  {
    icon: "🔬",
    title: "Deaf Lab Technician",
    danger: "Verbal chemical spill warning from colleague",
    existing: "Visual alarms only in fixed locations — moving between stations creates blind spots",
    cost: "Chemical exposure incidents rise 40% for workers who miss verbal warnings",
  },
];

const existingSolutions = [
  { name: "Vibrating Watch", misses: "No direction, no classification" },
  { name: "Flashing Alarm", misses: "Fixed location only" },
  { name: "Captioning App", misses: "Requires screen, slow" },
  { name: "Hearing Loop", misses: "Indoor only, no spatial data" },
  { name: "Basic Sound Detector", misses: "Single source, no mesh" },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(346 100% 65% / 0.05), hsl(220 60% 3%))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-destructive font-heading text-sm tracking-widest uppercase mb-4">The Silent Crisis</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-destructive glow-text-red">466 Million</span>{" "}
            <span className="text-foreground">people navigate a world of sound-based safety they cannot hear.</span>
          </h2>
        </div>

        {/* Scenario cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {scenarios.map((s, i) => (
            <div key={i} className="reveal bg-card border border-destructive/20 rounded-xl p-6 hover:border-destructive/40 transition-colors" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-destructive font-semibold">Danger:</span>
                  <p className="text-muted-foreground">{s.danger}</p>
                </div>
                <div>
                  <span className="text-accent font-semibold">Existing Solution:</span>
                  <p className="text-muted-foreground">{s.existing}</p>
                </div>
                <div>
                  <span className="text-destructive font-semibold">Human Cost:</span>
                  <p className="text-muted-foreground">{s.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Existing solutions failures */}
        <div className="reveal">
          <h3 className="font-heading text-center text-lg text-muted-foreground mb-8">What exists today — and what each one misses</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {existingSolutions.map((sol, i) => (
              <div key={i} className="bg-card border border-border rounded-lg px-5 py-4 text-center min-w-[160px]">
                <div className="text-destructive text-2xl mb-2">✗</div>
                <p className="font-heading text-sm font-semibold text-foreground mb-1">{sol.name}</p>
                <p className="text-xs text-muted-foreground">{sol.misses}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
