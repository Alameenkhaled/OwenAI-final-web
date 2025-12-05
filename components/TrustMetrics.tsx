import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ShieldCheck, TrendingUp } from 'lucide-react';
import { SectionId } from '../types';

const data = [
  { month: 'Jan', traditional: 40, owen: 60 },
  { month: 'Feb', traditional: 35, owen: 75 },
  { month: 'Mar', traditional: 45, owen: 82 },
  { month: 'Apr', traditional: 30, owen: 88 },
  { month: 'May', traditional: 42, owen: 95 },
  { month: 'Jun', traditional: 38, owen: 99 },
];

export const TrustMetrics: React.FC = () => {
  return (
    <section id={SectionId.METRICS} className="py-24 bg-panel border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Context Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-slate-400 text-lg mb-8">
            These aren't projections. These are <span className="text-white font-bold">proven metrics from 4 real transactions</span>,
            scaled conservatively across a 5-year model.
          </p>
          {/* Key Insight Box */}
          <div className="p-6 bg-panel border border-cyan/20 rounded-xl bg-void/50">
            <div className="text-sm text-cyan font-mono uppercase tracking-wider mb-2">Why These Numbers Matter</div>
            <p className="text-white text-lg">
              Traditional brokerages achieve 3:1 LTV:CAC ratios at best.
              <span className="text-cyan font-bold mx-1">We're at 15:1</span>
              because we own Step Zero—the phase where trust is built and qualification happens naturally.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Enhanced Comparatives */}
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-white mb-8">
              Structural <span className="text-cyan">Advantage</span>
            </h2>

            {/* Enhanced Metric 1 */}
            <div className="p-6 bg-void/50 border border-white/10 rounded-2xl hover:border-safe/30 transition-all group hover:-translate-y-1">
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-5xl md:text-6xl font-display font-bold text-safe">15:1</div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Industry Benchmark</div>
                  <div className="text-2xl font-display text-slate-700">5:1</div>
                </div>
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wide mb-2">LTV:CPAT Ratio</div>
              <div className="text-xs text-slate-500">Top decile performance. We're 3x more capital-efficient than elite SaaS companies.</div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 bg-void/50 border border-white/10 rounded-2xl hover:border-cyan/30 transition-all group hover:-translate-y-1">
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-5xl md:text-6xl font-display font-bold text-cyan">&lt;25ms</div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Human Benchmark</div>
                  <div className="text-2xl font-display text-slate-700">Days</div>
                </div>
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wide mb-2">Verification Speed</div>
              <div className="text-xs text-slate-500">Real-time due diligence vs weeks of manual research.</div>
            </div>

             {/* Metric 3 */}
             <div className="p-6 bg-void/50 border border-white/10 rounded-2xl hover:border-gold/30 transition-all group hover:-translate-y-1">
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-5xl md:text-6xl font-display font-bold text-gold">98.4%</div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Trust Score</div>
                  <div className="text-2xl font-display text-slate-700">14%</div>
                </div>
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wide mb-2">Client Confidence</div>
              <div className="text-xs text-slate-500">Mathematically verified alignment drives unmatched conversion.</div>
            </div>

          </div>

          {/* Right: Chart */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="glass p-6 rounded-2xl border border-white/10 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-display font-bold">Trust Accumulation Over Time</h3>
                <div className="flex gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan" /> OwenAI
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-600" /> Traditional
                  </div>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorOwen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0B0E14', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="traditional"
                      stroke="#64748B"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="transparent"
                    />
                    <Area
                      type="monotone"
                      dataKey="owen"
                      stroke="#00F0FF"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorOwen)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};