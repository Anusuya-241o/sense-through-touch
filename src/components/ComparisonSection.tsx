const features = [
  "Sound Direction",
  "Sound Classification",
  "Crowd Detection",
  "No-Look Alerts",
  "Instinctive Response",
  "Works With Gloves",
  "Distance Estimate",
  "Under 500ms",
];

const ComparisonSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not an improvement on what exists.{" "}
            <span className="text-primary glow-text">A category that doesn't exist yet.</span>
          </h2>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-heading text-muted-foreground font-medium">Feature</th>
                <th className="text-center py-4 px-4 font-heading text-muted-foreground font-medium">Existing Products</th>
                <th className="text-center py-4 px-4 font-heading text-primary font-medium">SafeSense</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 text-foreground font-medium">{f}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-destructive text-lg">✗</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-primary text-lg glow-text">✓</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
