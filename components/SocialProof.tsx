import React from 'react';
import { Quote } from 'lucide-react';
import { SectionId } from '../types';

export const SocialProof: React.FC = () => {
  return (
    <section id={SectionId.PROOF} className="relative w-full py-32 bg-panel border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            THIS ISN'T THEORY.<br />
            <span className="text-cyan">IT'S WORKING.</span>
          </h2>
          <p className="text-slate-400 text-lg">Real transactions. Real clients. Real transformation.</p>
        </div>

        {/* Proof Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Proof 1: Revenue */}
          <div className="p-8 bg-void border border-white/5 rounded-2xl hover:border-cyan/30 transition-all group">
            <div className="text-5xl font-display font-bold text-cyan mb-3">AED 201K</div>
            <div className="text-white font-bold mb-2">Pre-Seed Revenue</div>
            <div className="text-sm text-slate-400">4 successful transactions proving the end-to-end model works.</div>
          </div>

          {/* Proof 2: Distribution */}
          <div className="p-8 bg-void border border-white/5 rounded-2xl hover:border-safe/30 transition-all group">
            <div className="text-5xl font-display font-bold text-safe mb-3">280+</div>
            <div className="text-white font-bold mb-2">Agents Committed</div>
            <div className="text-sm text-slate-400">6 Tier One brokerages ready to integrate Day One.</div>
          </div>

          {/* Proof 3: Unit Economics */}
          <div className="p-8 bg-void border border-white/5 rounded-2xl hover:border-gold/30 transition-all group">
            <div className="text-5xl font-display font-bold text-gold mb-3">15:1</div>
            <div className="text-white font-bold mb-2">LTV:CPAT Ratio</div>
            <div className="text-sm text-slate-400">Elite unit economics proven at small scale.</div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 glass rounded-2xl border border-white/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-cyan rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-void" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              <p className="text-xl text-white leading-relaxed mb-6 italic">
                "I was about to make an offer on a Marina apartment for AED 2.3M. Owen showed me a comparable unit 3 floors down for AED 2.15M—same layout, slightly different view.
                <span className="text-cyan font-bold mx-1">That's AED 150K saved</span>
                plus another AED 67K over 5 years in lower service charges.
                No agent had mentioned this option. <span className="text-safe font-bold">Owen had zero incentive to hide it.</span>"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan to-safe flex items-center justify-center text-2xl font-bold text-void">
                  M
                </div>
                <div>
                  <div className="text-white font-bold">Marcus T.</div>
                  <div className="text-sm text-slate-400">Software Engineer, Investment Property Buyer</div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="mt-6 p-4 bg-safe/5 border border-safe/20 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="text-sm text-slate-400">Total Saved with Owen's Transparency:</div>
                <div className="text-2xl font-display font-bold text-safe">AED 217,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};