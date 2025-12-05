import React from 'react';
import { UserX, UserCheck } from 'lucide-react';
import { SectionId } from '../types';

export const Transformation: React.FC = () => {
  return (
    <section id={SectionId.TRANSFORMATION} className="relative w-full py-32 bg-void border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            FROM <span className="text-risk">CHAOS</span> TO <span className="text-safe">CONFIDENCE</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            This isn't about faster responses. It's about fixing the relationship between buyers and the industry.
          </p>
        </div>

        {/* The Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-risk via-cyan to-safe hidden md:block"></div>

          {/* BEFORE: The Old Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 relative z-10">
            <div className="md:text-right space-y-6">
              <div className="inline-block px-4 py-2 bg-risk/10 border border-risk/30 rounded-full text-risk text-sm font-mono uppercase tracking-wider">
                The Old Way
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                The 4-6 Month<br />Chaos Phase
              </h3>

              {/* Pain Points */}
              <div className="space-y-4">
                <div className="p-4 bg-panel border border-white/5 rounded-lg">
                  <div className="text-risk font-bold mb-1">Week 1-8: Information Overload</div>
                  <div className="text-sm text-slate-400">Googling, reading forums, watching YouTube. Every source contradicts the last.</div>
                </div>

                <div className="p-4 bg-panel border border-white/5 rounded-lg">
                  <div className="text-risk font-bold mb-1">Week 9-16: Confusion & Distrust</div>
                  <div className="text-sm text-slate-400">"Everyone I talk to wants to sell me something. How do I know what's true?"</div>
                </div>

                <div className="p-4 bg-panel border border-white/5 rounded-lg">
                  <div className="text-risk font-bold mb-1">Week 17-24: Defensive Decision</div>
                  <div className="text-sm text-slate-400">Finally buys something—but never fully confident it was the right choice.</div>
                </div>
              </div>
            </div>

            {/* Visual: Confused Person */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full border-4 border-risk/30 flex items-center justify-center bg-risk/5">
                <UserX className="w-32 h-32 text-risk opacity-60" />
                <div className="absolute -top-6 -right-6 bg-risk text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                  VULNERABLE
                </div>
              </div>
            </div>
          </div>

          {/* The Bridge: OwenAI */}
          <div className="relative z-10 flex justify-center mb-32">
            <div className="px-8 py-4 bg-cyan text-void font-display font-bold text-2xl rounded-xl shadow-[0_0_60px_rgba(0,240,255,0.3)] border-2 border-cyan text-center">
              ↓ OwenAI ENTERS ↓
            </div>
          </div>

          {/* AFTER: The OwenAI Way */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Visual: Confident Person */}
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="relative w-64 h-64 rounded-full border-4 border-safe/30 flex items-center justify-center bg-safe/5">
                <UserCheck className="w-32 h-32 text-safe opacity-80" />
                <div className="absolute -top-6 -left-6 bg-safe text-void text-xs px-3 py-1 rounded-full font-bold">
                  CONFIDENT
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-safe/10 border border-safe/30 rounded-full text-safe text-sm font-mono uppercase tracking-wider">
                The OwenAI Way
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                Step Zero,<br />Systematized
              </h3>

              {/* Wins */}
              <div className="space-y-4">
                <div className="p-4 bg-panel border border-white/5 rounded-lg border-l-4 border-safe">
                  <div className="text-safe font-bold mb-1">Day 1: Instant Clarity</div>
                  <div className="text-sm text-slate-400">Owen analyzes your situation and shows you what listings hide: the 2% nobody mentions.</div>
                </div>

                <div className="p-4 bg-panel border border-white/5 rounded-lg border-l-4 border-safe">
                  <div className="text-safe font-bold mb-1">Week 1-4: Unbiased Education</div>
                  <div className="text-sm text-slate-400">Zero-conflict guidance. Owen earns the same whether you buy a AED 2M or AED 3M property.</div>
                </div>

                <div className="p-4 bg-panel border border-white/5 rounded-lg border-l-4 border-safe">
                  <div className="text-safe font-bold mb-1">Week 5-8: Transaction-Ready</div>
                  <div className="text-sm text-slate-400">Connected to the right agent, fully educated, confident in your decision.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};