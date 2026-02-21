import { useState } from "react";

const FooterCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center reveal">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Protect Every Worker.{" "}
          <span className="text-primary glow-text">Join the SafeSense Beta.</span>
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8 mb-8">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
            >
              Join Beta
            </button>
          </form>
        ) : (
          <div className="my-8 py-4 px-6 bg-primary/10 border border-primary/30 rounded-lg">
            <p className="text-primary font-heading text-sm">✓ You're on the list. We'll be in touch.</p>
          </div>
        )}

        <p className="text-muted-foreground text-sm mb-12">
          SafeMesh listens. PulseCode speaks. <span className="text-primary">You stay safe.</span>
        </p>

        {/* Footer nav */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-heading text-lg font-bold text-primary">SafeSense</div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
            <a href="#demo" className="hover:text-primary transition-colors">Demo</a>
            <span>Privacy</span>
            <span>Contact</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 SafeSense. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
