import React from 'react';
import { Activity, ShieldCheck, Wifi, Database, Lock } from 'lucide-react';

export const ProtocolStatus: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-panel/95 backdrop-blur-md border-t border-white/10 h-10 flex items-center overflow-hidden">
      {/* Static Label */}
      <div className="bg-cyan/10 h-full px-4 flex items-center border-r border-white/10 z-10">
        <div className="w-2 h-2 bg-safe rounded-full animate-pulse mr-2"></div>
        <span className="text-[10px] font-mono font-bold text-cyan tracking-widest uppercase">System Live</span>
      </div>

      {/* Marquee Content */}
      <div className="flex whitespace-nowrap animate-marquee items-center gap-12 px-6">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Activity className="w-3 h-3 text-cyan" />
              <span>VERIFICATION QUEUE:</span>
              <span className="text-white">42 TXNS</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-3 h-3 text-safe" />
              <span>PROTOCOL HEALTH:</span>
              <span className="text-safe">100%</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Database className="w-3 h-3 text-gold" />
              <span>DATA ORACLES:</span>
              <span className="text-white">CONNECTED (DLD/RERA)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Lock className="w-3 h-3 text-risk" />
              <span>THREATS BLOCKED:</span>
              <span className="text-white">1,024 (24H)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Wifi className="w-3 h-3 text-cyan" />
              <span>LATENCY:</span>
              <span className="text-white">14ms</span>
            </div>
             <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-cyan">///</span>
              <span>OWEN_PROTOCOL_V2.5.1 [STABLE]</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};