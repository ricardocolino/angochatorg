/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Radio,
  Video, 
  Coins, 
  Download, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Gift, 
  DollarSign,
  Star,
  Sparkles,
  Languages,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const translations = {
  pt: {
    nav: { home: "Home", earnings: "Ganhos", faq: "FAQ", download: "Baixar" },
    hero: { badge: "🚀 #1 EM VÍDEOS E LIVES", title: "CRIE. TRANSMITA.", highlight: "GANHE USDT.", sub: "Transforme seus vídeos em dinheiro real. O AngoChat paga você por cada minuto de diversão.", cta: "Download APK", free: "Grátis no Android" },
    earn: { title: "Economia Real 💸", sub: "Monetização para todos.", items: ["Presentes via IA", "Ganhos por Minuto", "Saque Global Airtm", "Bônus Diários"], coins: "Moedas", usdt: "USDT", gifts: "Presentes" },
    tutorial: { title: "Guia de Início", sub: "Instale em segundos.", play: "VER TUTORIAL" },
    faq: { title: "Dúvidas?", sub: "Estamos aqui para ajudar." },
    cta: { title: "Comece a ganhar hoje", sub: "Mais de 100k criadores já estão faturando.", btn: "Instalar Agora" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacidade", terms: "Termos", support: "Suporte", blog: "Blog", rights: "© 2026 AngoChat Tech." }
  },
  en: {
    nav: { home: "Home", earnings: "Earnings", faq: "FAQ", download: "Download" },
    hero: { badge: "🚀 #1 VIDEO & LIVE APP", title: "CREATE. STREAM.", highlight: "EARN USDT.", sub: "Turn your content into real cash. AngoChat pays you for every second of fun.", cta: "Download APK", free: "Free for Android" },
    earn: { title: "Real Economy 💸", sub: "Monetization for everyone.", items: ["AI Gifts", "Pay per Minute", "Global Airtm Payouts", "Daily Bonuses"], coins: "Coins", usdt: "USDT", gifts: "Gifts" },
    tutorial: { title: "Start Guide", sub: "Install in seconds.", play: "WATCH TUTORIAL" },
    faq: { title: "FAQ", sub: "Reliable answers." },
    cta: { title: "Start earning today", sub: "Over 100k creators joined already.", btn: "Install Now" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacy", terms: "Terms", support: "Support", blog: "Blog", rights: "© 2026 AngoChat Tech." }
  },
  ru: {
    nav: { home: "Главная", earnings: "Выплаты", faq: "FAQ", download: "Скачать" },
    hero: { badge: "🚀 #1 ВИДЕО И ЛАЙВЫ", title: "ТВОРИ. СТРИМЬ.", highlight: "ПОЛУЧАЙ USDT.", sub: "Превращай контент в реальные деньги. AngoChat платит за каждую секунду драйва.", cta: "Скачать APK", free: "Бесплатно для Android" },
    earn: { title: "Реальные деньги 💸", sub: "Монетизация для всех.", items: ["AI Подарки", "Оплата за минуты", "Вывод через Airtm", "Бонусы каждый день"], coins: "Coins", usdt: "USDT", gifts: "Подарки" },
    tutorial: { title: "Гид по старту", sub: "Установка за секунды.", play: "СМОТРЕТЬ ГИД" },
    faq: { title: "Вопросы?", sub: "Мы всегда на связи." },
    cta: { title: "Начни зарабатывать сегодня", sub: "Уже 100к+ авторов с нами.", btn: "Установить сейчас" },
    airtm: "🌍 Деньги через Airtm",
    footer: { privacy: "Приватность", terms: "Условия", support: "Поддержка", blog: "Блог", rights: "© 2026 AngoChat Tech." }
  },
  zh: {
    nav: { home: "首页", earnings: "提现", faq: "常见问题", download: "下载" },
    hero: { badge: "🚀 #1 视频和直播应用", title: "创作。直播。", highlight: "赚取 USDT。", sub: "将您的内容转化为现金。AngoChat 为您的每一秒乐趣付费。", cta: "下载 APK", free: "Android 免费" },
    earn: { title: "真实经济 💸", sub: "人人皆可变现。", items: ["AI 礼物", "按分钟付费", "Airtm 全球提现", "每日奖金"], coins: "金币", usdt: "USDT", gifts: "礼物" },
    tutorial: { title: "入门指南", sub: "秒级安装。", play: "观看教程" },
    faq: { title: "有问题？", sub: "我们为您解答。" },
    cta: { title: "今天就开始赚钱", sub: "已有超过 10 万名创作者加入。", btn: "立即安装" },
    airtm: "🌍 Airtm 全球支付",
    footer: { privacy: "隐私", terms: "条款", support: "支持", blog: "博客", rights: "© 2026 AngoChat Tech。" }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [lang, setLang] = useState<'pt' | 'en' | 'ru' | 'zh'>('pt');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];
  const LOGO_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/icon.png";
  const APK_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/angochat1.apk";

  const faqs = [
    {
      question: lang === 'pt' ? "O AngoChat é seguro?" : lang === 'en' ? "Is AngoChat safe?" : lang === 'ru' ? "AngoChat безопасен?" : "AngoChat 安全吗？",
      answer: lang === 'pt' ? "Sim, usamos criptografia de ponta a ponta e pagamentos imediatos via Airtm." : lang === 'en' ? "Yes, we use end-to-end encryption and fast Airtm payments." : lang === 'ru' ? "Да, мы используем шифрование и быстрые выплаты через Airtm." : "是的，我们使用端到端加密和快速 Airtm 支付。"
    },
    {
      question: lang === 'pt' ? "Como recebo meu dinheiro?" : lang === 'en' ? "How do I get paid?" : lang === 'ru' ? "Как я получу деньги?" : "我如何获得报酬？",
      answer: t.airtm
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 scroll-smooth">
      {/* Dynamic Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4 md:pt-6",
        isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
      )}>
        <div className={cn(
          "max-w-6xl mx-auto h-full px-6 flex items-center justify-between rounded-full transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50 border border-white/40" : "bg-transparent"
        )}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-0.5 shadow-lg shadow-red-200">
              <div className="w-full h-full rounded-[10px] bg-white overflow-hidden flex items-center justify-center">
                <img src={LOGO_URL} alt="AngoChat" className="w-full h-full object-cover" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-slate-900">AngoChat</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {Object.entries(t.nav).slice(0, 3).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-sm font-bold text-slate-500 hover:text-red-500 transition-colors">
                {value as string}
              </a>
            ))}
            
            <div className="h-4 w-px bg-slate-200" />

            {/* Language Selector */}
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                <Languages className="w-4 h-4 text-red-500" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute top-full right-0 mt-3 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-50 min-w-[140px] p-2"
                  >
                    {[
                      { code: 'pt', label: 'Português' },
                      { code: 'en', label: 'English' },
                      { code: 'ru', label: 'Русский' },
                      { code: 'zh', label: '中文' }
                    ].map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code as any); setIsLangOpen(false); }}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm font-bold rounded-lg transition-colors",
                          lang === l.code ? "text-red-600 bg-red-50" : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={APK_URL} className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-red-600 hover:shadow-xl hover:shadow-red-200 transition-all">
              {t.nav.download}
            </a>
          </div>

          <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black text-2xl">AngoChat</span>
              <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100"><X /></button>
            </div>
            <div className="flex flex-col gap-8 flex-1">
              {Object.entries(t.nav).slice(0, 3).map(([key, value]) => (
                <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black tracking-tighter hover:text-red-600 transition-colors uppercase">
                  {value as string}
                </a>
              ))}
              
              <div className="mt-8 border-t border-slate-100 pt-8 flex gap-6">
                 {['pt', 'en', 'ru', 'zh'].map(l => (
                   <button key={l} onClick={() => { setLang(l as any); setIsMenuOpen(false); }} className={cn("text-lg font-bold uppercase", lang === l ? "text-red-500" : "text-slate-400")}>{l}</button>
                 ))}
              </div>
            </div>
            <a href={APK_URL} className="w-full py-5 bg-red-600 text-white rounded-3xl font-black text-xl text-center shadow-2xl shadow-red-200 active:scale-95 transition-transform">
              {t.nav.download}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-red-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[-5%] w-[40%] aspect-square bg-blue-500/5 blur-[100px] rounded-full" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full font-bold text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </div>
              <h1 className="text-[4rem] md:text-[8rem] font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter font-display">
                {t.hero.title} <br />
                <span className="text-red-600 relative inline-block">
                  {t.hero.highlight}
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-red-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl font-medium leading-relaxed">
                {t.hero.sub}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <a 
                  href={APK_URL}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-red-600 hover:shadow-[0_20px_40px_rgba(239,68,68,0.3)] hover:-translate-y-1 transition-all group"
                >
                  <Download className="w-7 h-7 group-hover:animate-bounce" />
                  {t.hero.cta}
                </a>
                <div className="flex flex-col items-center sm:items-start bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-slate-100">
                  <div className="flex -space-x-3 mb-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://picsum.photos/seed/${i + 50}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{t.hero.free}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Realistic Monetization Panel */}
        <section id="earnings" className="py-24 md:py-40 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(239,68,68,0.1),transparent)]" />
           <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-5 gap-16 items-center">
                 <div className="lg:col-span-2">
                    <div className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full font-bold text-sm mb-6 uppercase tracking-widest border border-red-500/30">
                       Real Payouts
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none italic">{t.earn.title}</h2>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed">{t.earn.sub}</p>
                    <div className="space-y-6">
                       {t.earn.items.map((item, i) => (
                         <div key={i} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all">
                               <CheckCircle2 className="w-5 h-5 text-red-500 group-hover:text-white" />
                            </div>
                            <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="lg:col-span-3 grid grid-cols-2 gap-6 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/20 blur-[80px] -z-10" />
                    <div className="p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 flex flex-col items-center gap-4 text-center">
                       <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-2 shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                          <Coins className="w-10 h-10 text-yellow-400" />
                       </div>
                       <p className="text-5xl font-black">{t.earn.coins}</p>
                       <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Mining Daily</p>
                    </div>
                    <div className="p-8 bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 flex flex-col items-center gap-4 text-center mt-12">
                       <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-2 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                          <DollarSign className="w-10 h-10 text-green-500" />
                       </div>
                       <p className="text-5xl font-black">{t.earn.usdt}</p>
                       <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Verified USDT</p>
                    </div>
                    <div className="col-span-2 p-10 bg-gradient-to-r from-red-600 to-red-500 rounded-[2.5rem] flex items-center justify-between shadow-2xl shadow-red-500/20 mt-4 group">
                       <div>
                          <p className="text-sm font-black uppercase text-red-100 tracking-widest mb-2">Instant Transfer</p>
                          <p className="text-4xl font-black">{t.airtm}</p>
                       </div>
                       <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                          <Globe className="w-10 h-10" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Modern Tutorial Section */}
        <section className="py-32 bg-white flex flex-col items-center overflow-hidden">
           <div className="max-w-4xl mx-auto px-6 text-center w-full">
              <h2 className="text-4xl font-black mb-4 tracking-tight">{t.tutorial.title}</h2>
              <p className="text-slate-500 font-bold mb-16">{t.tutorial.sub}</p>
              
              <div className="relative group max-w-5xl mx-auto">
                 <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
                 <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-slate-900 group">
                    <iframe 
                      className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="AngoChat Guide"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center group-hover:hidden">
                       <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                          <PlayCircle className="w-12 h-12" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ with cleaner style */}
        <section id="faq" className="py-32 bg-[#F8F9FB]">
           <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black mb-4">{t.faq.title}</h2>
                 <p className="text-slate-500 font-medium tracking-tight uppercase text-xs">{t.faq.sub}</p>
              </div>
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                   <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/50">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full p-8 text-left flex items-center justify-between"
                      >
                         <span className="text-xl font-bold text-slate-800 pr-8">{faq.question}</span>
                         <div className={cn("w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all", activeFaq === i && "bg-red-500 text-white rotate-180")}>
                            <ChevronDown className="w-6 h-6" />
                         </div>
                      </button>
                      <AnimatePresence>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                             <div className="p-8 pt-0 text-slate-500 font-medium leading-relaxed">
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

        {/* Realistic Final CTA */}
        <section id="app" className="py-24 md:py-40 relative">
           <div className="max-w-6xl mx-auto px-6">
              <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(239,68,68,0.2)]">
                 {/* Decorative background lights */}
                 <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/30 blur-[120px] rounded-full" />
                 <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
                 
                 <div className="relative z-10 max-w-2xl mx-auto">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-12 shadow-2xl p-4 overflow-hidden"
                    >
                       <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">{t.cta.title}</h2>
                    <p className="text-slate-400 text-lg md:text-2xl mb-12 font-medium">
                       {t.cta.sub}
                    </p>
                    <a 
                      href={APK_URL}
                      className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-red-600 text-white rounded-full font-black text-2xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 glow-button"
                    >
                       <Download className="w-8 h-8" />
                       {t.cta.btn}
                    </a>
                    <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
                       <ShieldCheck className="w-6 h-6" />
                       <span className="text-xs font-black uppercase tracking-widest tracking-[0.3em]">Certified Secure Platform</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* Cleaner Footer */}
      <footer className="bg-white py-20 px-6 border-t border-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center p-2 shadow-lg">
                  <img src={LOGO_URL} alt="AngoChat" className="w-full h-full object-cover invert" />
                </div>
                <span className="text-3xl font-black italic tracking-tighter uppercase">AngoChat</span>
              </div>
              <p className="text-slate-400 font-medium max-w-xs">{t.hero.sub}</p>
            </div>

            <div className="flex flex-col gap-6 items-start md:items-end w-full md:w-auto">
               <p className="font-black text-slate-900 text-sm uppercase tracking-widest">Connect with us</p>
               <div className="flex gap-4">
                  {[
                    { icon: <Instagram />, href: "https://instagram.com/AngoChat", color: "hover:bg-red-50 text-red-600 border-red-100" },
                    { icon: <Facebook />, href: "https://facebook.com/AngoChat", color: "hover:bg-blue-50 text-blue-600 border-blue-100" },
                    { icon: <Youtube />, href: "https://youtube.com/@AngoChat", color: "hover:bg-red-50 text-red-600 border-red-100" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100 text-slate-400 transition-all", social.color)}>
                       {social.icon}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between gap-8 text-sm font-bold text-slate-400">
             <div className="flex gap-8">
                <a href="#" className="hover:text-red-500 transition-colors uppercase tracking-widest">{t.footer.privacy}</a>
                <a href="#" className="hover:text-red-500 transition-colors uppercase tracking-widest">{t.footer.terms}</a>
                <a href="#" className="hover:text-red-500 transition-colors uppercase tracking-widest">{t.footer.support}</a>
             </div>
             <div className="md:text-right uppercase tracking-[0.2em] text-[10px] opacity-70">
                {t.footer.rights}
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .glow-button {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
        }
        .glow-button:hover {
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.6);
        }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { bg: #f1f1f1; }
        ::-webkit-scrollbar-thumb { bg: #ddd; border-radius: 10px; border: 3px solid #f1f1f1; }
        ::-webkit-scrollbar-thumb:hover { bg: #ccc; }
      `}</style>
    </div>
  );
}
