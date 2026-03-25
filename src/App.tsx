/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  MessageCircle, 
  Video, 
  Coins, 
  Download, 
  HelpCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Zap, 
  Globe, 
  Gift, 
  DollarSign,
  PlayCircle,
  Heart,
  Star,
  Sparkles,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Substitua esta URL pela URL da sua imagem de símbolo
  const LOGO_URL = "https://picsum.photos/seed/angochat-logo/100/100";
  // Substitua pela URL real do seu arquivo APK
  const APK_URL = "#";

  const faqs = [
    {
      question: "O que é o AngoChat?",
      answer: "AngoChat é uma plataforma social de vídeos curtos que combina criação de conteúdo e mensagens instantâneas com um sistema inovador de recompensas em USDT."
    },
    {
      question: "Como posso ganhar USDT no AngoChat?",
      answer: "Você ganha USDT compartilhando vídeos e stories populares, recebendo presentes de seus seguidores em seus vídeos, e participando do nosso sistema de moedas virtuais."
    },
    {
      question: "O AngoChat é gratuito?",
      answer: "Sim, o AngoChat é totalmente gratuito para baixar e usar. Você pode criar, assistir e conversar sem custos."
    },
    {
      question: "Em quais dispositivos o AngoChat funciona?",
      answer: "O AngoChat está disponível para Android, iOS e também possui uma versão Web para desktop."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 bg-white/90 backdrop-blur-md border-2 border-slate-900 rounded-2xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center border-2 border-slate-900 overflow-hidden shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              <img 
                src={LOGO_URL} 
                alt="AngoChat Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 font-display">AngoChat</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">Início</a>
            <a href="#recursos" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">Recursos</a>
            <a href="#ganhos" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">Ganhos</a>
            <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">FAQ</a>
            <a href="#app" className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-bold hover:bg-red-600 transition-all border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">Baixar App</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Início</a>
              <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Recursos</a>
              <a href="#ganhos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Ganhos</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">FAQ</a>
              <a href="#app" onClick={() => setIsMenuOpen(false)} className="py-3 bg-red-500 text-white rounded-xl font-bold">Baixar AngoChat</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-40 pb-20 px-4 relative overflow-hidden">
          {/* Doodles */}
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Heart className="w-12 h-12 text-red-400 fill-red-400" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-float opacity-10" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-16 h-16 text-blue-400" />
          </div>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full font-bold text-sm mb-6 border-2 border-red-200">
                  🚀 A nova era chegou!
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 font-display">
                  Vídeos curtos, <br />
                  <span className="text-red-500 relative inline-block">
                    Ganhos reais.
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-slate-900" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
                  AngoChat é onde a diversão vira dinheiro! Crie, compartilhe e ganhe USDT com a galera mais animada.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 relative">
                  <a 
                    href={APK_URL}
                    className="flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-all border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative z-10"
                  >
                    <Download className="w-6 h-6" />
                    Baixar APK Agora!
                  </a>
                  {/* Hand-drawn arrow (hidden on mobile) */}
                  <div className="hidden lg:block absolute -right-32 top-0 animate-float">
                    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="text-slate-900 rotate-12">
                      <path d="M10 10 Q 50 50, 90 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <path d="M80 15 L 90 10 L 85 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="absolute -bottom-4 right-0 font-bold text-sm rotate-12">É grátis!</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
              >
                <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-[20px_20px_0px_0px_rgba(239,68,68,0.2)] overflow-hidden mx-auto relative">
                  {/* Mockup Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-red-400 to-orange-500 flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30">
                        <PlayCircle className="text-white w-12 h-12" />
                      </div>
                    </div>
                    <div className="p-6 bg-black/40 backdrop-blur-md border-t-2 border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <img src={LOGO_URL} alt="Mascot" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-2 w-20 bg-white/40 rounded-full" />
                      </div>
                      <div className="h-2 w-32 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Mascot Sticker */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-24 h-24 bg-white p-2 rounded-3xl border-4 border-slate-900 shadow-xl rotate-12 overflow-hidden"
                >
                  <img src={LOGO_URL} alt="Octopus Mascot" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
              {/* Decorative Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full blur-[100px] -z-10 opacity-50" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-full blur-[60px] -z-10 opacity-30" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 rotate-12"><Smile className="w-20 h-20" /></div>
            <div className="absolute bottom-10 right-10 -rotate-12"><Heart className="w-20 h-20" /></div>
          </div>
          
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 font-display">Tudo o que você precisa!</h2>
              <p className="text-slate-600 font-medium">Diversão sem limites e dinheiro no bolso.</p>
            </div>
            <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-12">
              {[
                {
                  icon: <Video className="text-red-500 w-8 h-8" />,
                  title: "Vídeos Curtos",
                  desc: "Crie e assista vídeos incríveis com filtros e efeitos exclusivos.",
                  color: "bg-red-50"
                },
                {
                  icon: <MessageCircle className="text-blue-500 w-8 h-8" />,
                  title: "Mensagens",
                  desc: "Converse com seus amigos em tempo real com segurança e rapidez.",
                  color: "bg-blue-50"
                }
              ].map((feature, i) => (
                <div key={i} className="sticker-card p-10">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-2 border-slate-900", feature.color)}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 font-display">{feature.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monetization Section */}
        <section id="ganhos" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-red-500 rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)]">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <h2 className="text-5xl font-extrabold mb-6 font-display">Ganhe enquanto compartilha! 💸</h2>
                  <p className="text-red-100 mb-8 text-xl font-medium">
                    No AngoChat, seu tempo vale dinheiro de verdade. Ganhe USDT por visualizações e presentes da galera.
                  </p>
                  <ul className="space-y-6">
                    {[
                      "Receba presentes virtuais em seus vídeos",
                      "Ganhe USDT compartilhando stories",
                      "Sistema de moedas virtuais (Coins)",
                      "Saques rápidos e seguros"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center border-2 border-white/30">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-3 hover:rotate-0 transition-transform">
                      <Coins className="w-12 h-12 mx-auto mb-3 text-yellow-500" />
                      <div className="text-2xl font-extrabold text-slate-900 font-display">Coins</div>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-3 hover:rotate-0 transition-transform">
                      <DollarSign className="text-green-500 w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-extrabold text-slate-900 font-display">USDT</div>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] col-span-2 hover:scale-105 transition-transform">
                      <Gift className="text-pink-500 w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-extrabold text-slate-900 font-display">Presentes Reais</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-slate-600">Tudo o que você precisa saber sobre o AngoChat.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  <button 
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-bold text-slate-800">{faq.question}</span>
                    <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", activeFaq === i && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="app" className="py-20 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-8"
            >
              <div className="w-32 h-32 bg-white p-4 rounded-[2.5rem] border-4 border-slate-900 shadow-2xl mx-auto rotate-6 overflow-hidden">
                <img src={LOGO_URL} alt="Mascot" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <h2 className="text-5xl font-extrabold mb-6 font-display">Bora começar? 🐙</h2>
            <p className="text-slate-600 mb-10 text-xl max-w-xl mx-auto font-medium">
              Junte-se à maior comunidade de criadores e comece a faturar hoje mesmo!
            </p>
            <div className="flex justify-center">
              <a 
                href={APK_URL}
                className="px-16 py-6 bg-red-500 text-white rounded-3xl font-extrabold text-2xl hover:bg-red-600 transition-all border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex items-center gap-4"
              >
                <Download className="w-8 h-8" />
                BAIXAR AGORA!
              </a>
            </div>
          </div>
          {/* Background Doodles */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10 pointer-events-none">
            <Sparkles className="w-40 h-40 text-red-500" />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none">
            <Star className="w-40 h-40 text-yellow-500" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={LOGO_URL} 
                  alt="AngoChat Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight">AngoChat</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-red-500">Privacidade</a>
              <a href="#" className="hover:text-red-500">Termos</a>
              <a href="#" className="hover:text-red-500">Suporte</a>
              <a href="#" className="hover:text-red-500">Blog</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 AngoChat. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
