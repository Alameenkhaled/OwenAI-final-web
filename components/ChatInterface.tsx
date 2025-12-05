import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Loader2, Cpu, FileText, ShieldAlert, TrendingUp } from 'lucide-react';
import { generateResponse } from '../services/geminiService';
import { ChatMessage, SectionId } from '../types';

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Identity confirmed. Accessing Secure Deal Room. \n\nI am Owen, the protocol's autonomous diligence core. I have full access to our Seed Round financials, risk models, and technical architecture.",
      timestamp: new Date()
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: "💰 Valuation Cap?", query: "What are the terms of the Seed Round and the valuation cap?" },
    { label: "🛡️ The Moat?", query: "Explain the defensibility and structural moat against competitors." },
    { label: "📈 Unit Economics?", query: "Break down the LTV:CAC ratio and unit economics." },
    { label: "🚧 Use of Funds?", query: "How will the $4M seed funding be allocated?" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const responseText = await generateResponse(userMsg.text, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id={SectionId.CHAT} className="py-24 relative overflow-hidden bg-void">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 h-[700px]">
            
            {/* Sidebar / Context Panel */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
                <div className="bg-panel border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden group">
                     <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                     
                     <div>
                        <div className="flex items-center gap-2 text-cyan mb-6">
                            <ShieldAlert className="w-5 h-5" />
                            <span className="font-display font-bold tracking-wider">SECURE CONTEXT</span>
                        </div>
                        <h3 className="text-2xl text-white font-display font-bold mb-4">Investor <br/>Clearance: <span className="text-safe">L1</span></h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            You are interacting with a deterministic agent bound by SEC regulations and OwenAI's transparency protocol. All outputs are verified.
                        </p>
                     </div>

                     <div className="space-y-3">
                         <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <FileText className="w-4 h-4 text-cyan" />
                                <span className="text-sm text-slate-300">Seed Memo.pdf</span>
                             </div>
                             <span className="text-[10px] text-slate-500 font-mono">1.2MB</span>
                         </div>
                         <div className="p-3 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <TrendingUp className="w-4 h-4 text-gold" />
                                <span className="text-sm text-slate-300">Financial Model.xlsx</span>
                             </div>
                             <span className="text-[10px] text-slate-500 font-mono">SECURE</span>
                         </div>
                     </div>
                </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-8 glass rounded-2xl overflow-hidden border border-cyan/20 shadow-[0_0_50px_rgba(0,240,255,0.05)] flex flex-col relative">
                
                {/* Header */}
                <div className="bg-panel/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-safe rounded-full animate-pulse" />
                        <span className="font-mono text-sm text-slate-300 tracking-widest">OWEN_LIVE_DEAL_ROOM</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <Terminal className="text-cyan w-3 h-3" />
                        <span className="text-[10px] text-cyan font-mono">ENCRYPTED</span>
                    </div>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-void/50 hide-scrollbar scroll-smooth">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                            <div className={`max-w-[85%] rounded-xl p-5 relative overflow-hidden ${
                                msg.role === 'user' 
                                ? 'bg-cyan/10 border border-cyan/20 text-cyan rounded-tr-none' 
                                : 'bg-[#151921] border border-white/5 text-slate-200 rounded-tl-none shadow-xl'
                            }`}>
                                <div className="flex items-center gap-2 mb-3 opacity-40 text-[10px] font-mono uppercase tracking-widest border-b border-white/5 pb-2">
                                    {msg.role === 'assistant' ? (
                                        <>
                                            <Cpu className="w-3 h-3" />
                                            <span>OWEN PROTOCOL // {msg.timestamp.toLocaleTimeString()}</span>
                                        </>
                                    ) : (
                                        <span>INVESTOR_ID_882</span>
                                    )}
                                </div>
                                <p className="font-body text-sm md:text-[15px] leading-7 whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-[#151921] border border-white/10 rounded-xl p-4 rounded-tl-none flex items-center gap-3 shadow-lg">
                                <Loader2 className="w-4 h-4 text-cyan animate-spin" />
                                <span className="text-xs font-mono text-cyan animate-pulse">QUERYING KNOWLEDGE GRAPH...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Input Area */}
                <div className="bg-panel border-t border-white/10 p-4 z-20">
                    {/* Quick Chips */}
                    <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar pb-2">
                        {quickPrompts.map((prompt, i) => (
                            <button
                                key={i}
                                onClick={() => handleSend(prompt.query)}
                                disabled={isLoading}
                                className="flex-shrink-0 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-cyan/50 hover:bg-cyan/5 hover:text-cyan rounded-lg text-xs text-slate-400 transition-all duration-300 whitespace-nowrap"
                            >
                                {prompt.label}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your due diligence query..."
                            className="w-full bg-void border border-white/10 rounded-xl px-4 py-4 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 font-body transition-all"
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading || !input.trim()}
                            className="absolute right-2 p-2 rounded-lg bg-cyan text-void hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};