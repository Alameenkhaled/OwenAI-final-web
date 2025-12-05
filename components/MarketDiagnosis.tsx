import React from 'react';

export const MarketDiagnosis: React.FC = () => {
  return (
    <section className="w-full bg-void py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-risk rounded-full animate-pulse"></div>
            <span className="font-mono uppercase tracking-wider">Market Diagnosis</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="group p-6 bg-panel border border-white/5 rounded-xl hover:border-risk/30 transition-all">
            <div className="text-4xl font-display font-bold text-risk mb-2">85%</div>
            <div className="text-sm text-slate-400">of international buyers spend 4-6 months drowning in Step Zero chaos</div>
          </div>

          {/* Stat 2 */}
          <div className="group p-6 bg-panel border border-white/5 rounded-xl hover:border-risk/30 transition-all">
            <div className="text-4xl font-display font-bold text-risk mb-2">1.2%</div>
            <div className="text-sm text-slate-400">industry conversion rate—a symptom of structural failure, not sales weakness</div>
          </div>

          {/* Stat 3 */}
          <div className="group p-6 bg-panel border border-white/5 rounded-xl hover:border-risk/30 transition-all">
            <div className="text-4xl font-display font-bold text-risk mb-2">AED 522B</div>
            <div className="text-sm text-slate-400">annual market operating with a trust deficit that costs billions in inefficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};