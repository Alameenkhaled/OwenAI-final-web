import React from 'react';
import { Building2, TrendingUp, Users } from 'lucide-react';
import { SectionId } from '../types';

export const MarketCatalysts: React.FC = () => {
  return (
    <section id={SectionId.OPPORTUNITY} className="relative w-full py-32 bg-void border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            THE WINDOW IS <span className="text-risk">CLOSING.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three market catalysts have created a narrow 12-18 month opportunity.
            After that, this category will be defined—by us or by someone else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Catalyst 1 */}
          <div className="p-8 bg-panel border border-white/10 rounded-2xl hover:border-cyan/30 transition-all group">
            <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
              <Building2 className="w-8 h-8 text-cyan" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Government Backing</h3>
            <p className="text-slate-400 mb-4">
              Dubai's AED 1B PropTech Hub is actively funding first-movers. We have direct relationships with DLD decision-makers.
            </p>
            <div className="text-cyan text-sm font-mono">// REGULATORY TAILWIND</div>
          </div>

          {/* Catalyst 2 */}
          <div className="p-8 bg-panel border border-white/10 rounded-2xl hover:border-safe/30 transition-all group">
            <div className="w-16 h-16 bg-safe/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-safe/20 transition-colors">
              <TrendingUp className="w-8 h-8 text-safe" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Market Validation</h3>
            <p className="text-slate-400 mb-4">
              Competitors raised capital, creating category awareness. But they're structurally blocked from our zero-conflict model.
            </p>
            <div className="text-safe text-sm font-mono">// CATEGORY AWARENESS</div>
          </div>

          {/* Catalyst 3 */}
          <div className="p-8 bg-panel border border-white/10 rounded-2xl hover:border-gold/30 transition-all group">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <Users className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Buyer Behavior Shift</h3>
            <p className="text-slate-400 mb-4">
              Post-COVID, 68% of buyers now start online. Step Zero moved from coffee shops to browsers—making it capturable for the first time.
            </p>
            <div className="text-gold text-sm font-mono">// DIGITAL MIGRATION</div>
          </div>
        </div>

        {/* Urgency Statement */}
        <div className="mt-16 p-8 bg-risk/5 border-2 border-risk/30 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-xl text-white mb-4">
            <span className="text-risk font-bold">Within 18 months</span>, this category will be defined.
            The question isn't IF someone will build this infrastructure—it's WHO.
          </p>
          <p className="text-slate-400">
            We have the regulatory authority, the proven model, and the distribution network.
            <span className="text-white font-bold ml-1">This round is the accelerant.</span>
          </p>
        </div>
      </div>
    </section>
  );
};