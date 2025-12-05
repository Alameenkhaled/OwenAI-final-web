import React from 'react';
import { Navbar } from './components/Navbar';
import { ChatInterface } from './components/ChatInterface';
import { TrustMetrics } from './components/TrustMetrics';
import { Button } from './components/Button';
import { ArrowRight, Lock, Database, Globe } from 'lucide-react';
import { SectionId } from './types';

// New Components
import { MarketDiagnosis } from './components/MarketDiagnosis';
import { Transformation } from './components/Transformation';
import { SocialProof } from './components/SocialProof';
import { SystemDemo } from './components/SystemDemo';
import { MarketCatalysts } from './components/MarketCatalysts';
import { ProtocolStatus } from './components/ProtocolStatus';

function App() {
  return (
    <div className="min-h-screen bg-void text-white selection:bg-cyan selection:text-void font-body pb-10">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-[1]" />
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />
      
      <Navbar />

      {/* Hero Section */}
      <section id={SectionId.HERO} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Scanner Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="w-full h-full bg-[linear-gradient(transparent,rgba(0,240,255,0.02),transparent)] animate-scan" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 mb-8 rounded border border-cyan/30 bg-cyan/5 text-cyan text-xs font-mono uppercase tracking-widest animate-pulse-glow">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              Seed Round Open
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-6">
              WE BUILT THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-white text-glow">
                TRUST LAYER
              </span><br />
              <span className="text-slate-500 text-4xl">REAL ESTATE FORGOT.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl border-l-2 border-cyan/30 pl-6 leading-relaxed font-light mb-10">
              Every other high-stakes market separated <span className="text-white font-medium">advice from sales</span> decades ago. 
              Healthcare has doctors. Finance has advisors. Legal has counsel.
              <br /><br />
              Real estate never did. <span className="text-cyan font-medium">Until now.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button icon={<ArrowRight className="w-4 h-4" />}>
                Request Deck
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById(SectionId.CHAT)?.scrollIntoView({ behavior: 'smooth'})}>
                Talk to Owen
              </Button>
            </div>
          </div>

          {/* 3D Tesseract Visual (Structural Transparency) */}
          <div className="hidden lg:flex justify-center items-center relative">
             <div className="cube-wrapper">
               <div className="cube">
                 <div className="face front">TRANSPARENCY</div>
                 <div className="face back">TRUST</div>
                 <div className="face right">AUDIT</div>
                 <div className="face left">VERIFY</div>
                 <div className="face top">PROTOCOL</div>
                 <div className="face bottom">SECURE</div>
                 
                 {/* Internal Core */}
                 <div className="absolute inset-10 bg-cyan/20 blur-xl rounded-full animate-pulse" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Lock className="w-8 h-8 text-white" />
                 </div>
               </div>
             </div>
             
             {/* Floor Reflection */}
             <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-64 h-12 bg-cyan/20 blur-[50px] rounded-[100%]" />
          </div>
        </div>
      </section>

      {/* 2. Market Diagnosis */}
      <MarketDiagnosis />

      {/* 3. Transformation (Before/After) */}
      <Transformation />

      {/* 4. Social Proof */}
      <SocialProof />

      {/* 5. The Engine (Technology) */}
      <section id={SectionId.TECHNOLOGY} className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">The <span className="text-cyan">Engine</span></h2>
            <div className="h-1 w-20 bg-cyan" />
        </div>

        {/* New Interactive Demo */}
        <SystemDemo />

        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: 'Deterministic Safety', desc: 'Non-probabilistic guardrails ensuring 100% compliance with enterprise policies.', icon: Lock },
                { title: 'Zero-Knowledge Audits', desc: 'Prove compliance to regulators without revealing sensitive training data or proprietary model weights.', icon: Database },
                { title: 'Universal Adapter', desc: 'Plug-and-play SDK compatible with OpenAI, Anthropic, Gemini, and open-source models.', icon: Globe }
            ].map((feature, i) => (
                <div key={i} className="group relative bg-panel p-8 rounded-2xl border border-white/5 hover:border-cyan/50 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <feature.icon className="w-10 h-10 text-cyan mb-6 relative z-10" />
                    <h3 className="text-xl font-bold font-display text-white mb-4 relative z-10">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 6. Market Catalysts (Why Now) */}
      <MarketCatalysts />

      {/* 7. Financial Context (Metrics) */}
      <TrustMetrics />

      {/* 8. Chat Interface */}
      <ChatInterface />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-2">
                    <span className="font-display font-bold text-2xl text-white tracking-wider mb-6 block">
                        OWEN<span className="text-cyan">AI</span>
                    </span>
                    <p className="text-slate-500 max-w-sm">
                        Building the trust layer for the artificial intelligence economy.
                        <br/><br/>
                        San Francisco, CA
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Investment</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li><a href="#" className="hover:text-cyan transition-colors">Seed Memo</a></li>
                        <li><a href="#" className="hover:text-cyan transition-colors">Financials</a></li>
                        <li><a href="#" className="hover:text-cyan transition-colors">Team</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Legal</h4>
                    <ul className="space-y-4 text-slate-500 text-sm">
                        <li><a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-cyan transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-cyan transition-colors">Token Economics</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-slate-600 text-xs pt-8 border-t border-white/5">
                © 2024 OwenAI Inc. All rights reserved.
            </div>
        </div>
      </footer>
      
      {/* 9. Protocol Status Ticker (Fixed Bottom) */}
      <ProtocolStatus />
    </div>
  );
}

export default App;