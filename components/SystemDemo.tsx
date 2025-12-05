import React from 'react';

export const SystemDemo: React.FC = () => {
  return (
    <div className="mb-20 max-w-4xl mx-auto">
      <div className="p-8 glass rounded-2xl border border-white/10">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold text-white mb-3">
            See The System Think
          </h3>
          <p className="text-slate-400 text-sm">
            Watch how our Multi-Agent System processes a real property inquiry in real-time.
          </p>
        </div>

        {/* Simulated AI Processing */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-start gap-3 p-3 bg-cyan/5 border border-cyan/20 rounded-lg animate-pulse">
            <div className="w-2 h-2 bg-cyan rounded-full mt-1 animate-bounce"></div>
            <div>
              <div className="text-cyan font-bold">ORCHESTRATOR:</div>
              <div className="text-slate-300">Query received: "2BR Marina under AED 2.5M"</div>
              <div className="text-slate-500 text-[10px] mt-1">→ Delegating to Strategist + Guardian + Memory Core</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-gold/5 border border-gold/20 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="w-2 h-2 bg-gold rounded-full mt-1 animate-bounce"></div>
            <div>
              <div className="text-gold font-bold">STRATEGIST:</div>
              <div className="text-slate-300">Analyzing 47 matching listings...</div>
              <div className="text-slate-500 text-[10px] mt-1">→ Running TCO calculations, service charge projections</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-safe/5 border border-safe/20 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-safe rounded-full mt-1 animate-bounce"></div>
            <div>
              <div className="text-safe font-bold">GUARDIAN:</div>
              <div className="text-slate-300">Cross-referencing DLD/RERA compliance...</div>
              <div className="text-slate-500 text-[10px] mt-1">→ Flagged 3 listings with hidden restrictions</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg animate-pulse" style={{ animationDelay: '1.5s' }}>
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-1 animate-bounce"></div>
            <div>
              <div className="text-purple-400 font-bold">MEMORY CORE:</div>
              <div className="text-slate-300">Retrieving user context: "Family of 4, prefers ground floor access, cycling enthusiast"</div>
              <div className="text-slate-500 text-[10px] mt-1">→ Applying personalization filters</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-cyan/10 border border-cyan/30 rounded-lg">
            <div className="w-2 h-2 bg-cyan rounded-full mt-1"></div>
            <div>
              <div className="text-cyan font-bold">ORCHESTRATOR:</div>
              <div className="text-white">Analysis complete. Delivering personalized report with 3 transparent recommendations + 2% risk analysis.</div>
              <div className="text-safe text-[10px] mt-1 font-bold">✓ RESPONSE READY IN 2.3 SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};