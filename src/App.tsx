/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { 
  Download, 
  ChevronDown, 
  Globe, 
  PlayCircle,
  MessageCircle,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const LOGO_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/AZ2shvqMGatbXorVpj6MQw-AZ2shvqMbTFVceCt_p0PGQ_20260420_211507_0000.mp4";
const APK_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/angochat1.apk";

const translations = {
  pt: {
    nav: { home: "Início", tutorial: "Apps", faq: "FAQ", download: "Baixar" },
    hero: { badge: "Versão 1.0 Já Disponível", title: "AngoChat", highlight: "Assista. Partilhe. Ganhe.", sub: "Uma plataforma poderosa de partilha de vídeos e lives ao vivo onde você ganha por cada minuto. Rápido, social e rentável.", cta: "Baixar AngoChat para Android", free: "Seguro & Grátis" },
    tutorial: { title: "Como Começar", sub: "Veja como é simples instalar.", play: "ASSISTIR VÍDEO" },
    faq: { title: "Perguntas Frequentes", sub: "Tudo o que você precisa saber." },
    cta: { title: "Comece agora", sub: "Junte-se à revolução da comunicação móvel.", btn: "Instalar APK" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacidade", terms: "Termos", support: "Suporte", rights: "© 2026 AngoChat Tech." }
  },
  en: {
    nav: { home: "Home", tutorial: "Apps", faq: "FAQ", download: "Download" },
    hero: { badge: "Version 1.0 Now Available", title: "AngoChat", highlight: "Watch. Share. Earn.", sub: "A powerful video sharing and live streaming platform where you earn for every minute. Fast, social, and profitable.", cta: "Download AngoChat for Android", free: "Safe & Free" },
    tutorial: { title: "How it Works", sub: "Watch how simple it is to start.", play: "WATCH VIDEO" },
    faq: { title: "FAQ", sub: "Everything you need to know." },
    cta: { title: "Get started", sub: "Join the mobile communication revolution.", btn: "Install APK" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacy", terms: "Terms", support: "Support", rights: "© 2026 AngoChat Tech." }
  },
  ru: {
    nav: { home: "Главная", tutorial: "Apps", faq: "FAQ", download: "Скачать" },
    hero: { badge: "Версия 1.0 уже доступна", title: "AngoChat", highlight: "Смотри. Делись. Зарабатывай.", sub: "Мощная платформа для обмена видео и прямых трансляций, где вы зарабатываете каждую минуту. Быстро, социально и выгодно.", cta: "Скачать AngoChat для Android", free: "Безопасно и бесплатно" },
    tutorial: { title: "Как это работает", sub: "Посмотрите, как легко начать.", play: "СМОТРЕТЬ ВИДЕО" },
    faq: { title: "FAQ", sub: "Все, что вам нужно знать." },
    cta: { title: "Начать сейчас", sub: "Присоединяйтесь к мобильной революции.", btn: "Установить APK" },
    airtm: "🌍 Деньги через Airtm",
    footer: { privacy: "Приватность", terms: "Условия", support: "Поддержка", rights: "© 2026 AngoChat Tech." }
  },
  zh: {
    nav: { home: "首页", tutorial: "Apps", faq: "常见问题", download: "下载" },
    hero: { badge: "1.0 版本现已发布", title: "AngoChat", highlight: "观看。分享。盈收。", sub: "一个功能强大的视频分享和直播平台，每一分钟都在为您创造价值。快速、社交且赚钱。", cta: "下载 Android 版 AngoChat", free: "安全且免费" },
    tutorial: { title: "操作指南", sub: "看看开始有多简单。", play: "观看视频" },
    faq: { title: "常见问题", sub: "您想知道的一切。" },
    cta: { title: "立即开始", sub: "加入移动通讯革命。", btn: "安装 APK" },
    airtm: "🌍 Airtm 全球支付",
    footer: { privacy: "隐私", terms: "条款", support: "支持", rights: "© 2026 AngoChat Tech。" }
  }
};

// --- Layout Component ---
function LayoutWrapper({ lang, setLang, t, children }: any) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const getActiveTab = () => {
    if (path === '/') return 'home';
    if (path === '/app') return 'tutorial';
    if (path === '/faq') return 'faq';
    return '';
  };

  const activeTab = getActiveTab();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 selection:bg-blue-100 selection:text-[#3390ec] flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-4xl mx-auto flex items-center h-[54px] md:h-16">
          <div className="flex items-center h-full px-4 gap-6 md:gap-10">
            {Object.entries(t.nav).slice(0, 3).map(([key, value]) => {
              const route = key === 'home' ? '/' : key === 'tutorial' ? '/app' : `/${key}`;
              return (
                <Link 
                  key={key} 
                  to={route}
                  className={cn(
                    "relative flex items-center h-full text-[15px] md:text-base font-medium transition-colors whitespace-nowrap",
                    activeTab === key ? "text-[#3390ec]" : "text-slate-500 hover:text-[#3390ec]"
                  )}
                >
                  {value as string}
                  {activeTab === key && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3390ec]"
                    />
                  )}
                </Link>
              );
            })}
            
            <div className="relative group flex items-center h-full">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)} 
                className="flex items-center gap-1.5 text-[15px] md:text-base font-medium text-[#3390ec] uppercase pr-4"
              >
                <Globe className="w-5 h-5" />
                {lang}
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-0 bg-white border border-slate-100 rounded-b-xl shadow-xl p-1 z-50 min-w-[120px]"
                  >
                    {['pt', 'en', 'ru', 'zh'].map((l) => (
                      <button key={l} onClick={() => { setLang(l as any); setIsLangOpen(false); }} className={cn("w-full px-4 py-3 text-left text-sm font-bold rounded-lg uppercase", lang === l ? "bg-blue-50 text-[#3390ec]" : "hover:bg-slate-50")}>{l}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="py-16 text-center border-t border-slate-100 mt-auto">
         <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
               {Object.values(t.footer).slice(0, 3).map((link, i) => (
                 <a key={i} href="#" className="text-sm font-bold text-slate-500 hover:text-red-500 uppercase tracking-widest">{link as string}</a>
               ))}
            </div>
            <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.4em]">{t.footer.rights}</p>
          </div>
        </footer>
    </div>
  );
}

// --- Page Components ---

function HomePage({ t }: any) {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] mx-auto mb-10 flex items-center justify-center border border-slate-50 overflow-hidden"
        >
           <video 
             src={LOGO_URL} 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full h-full object-cover"
           />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl font-semibold text-red-600 mb-8 uppercase tracking-widest">{t.hero.highlight}</p>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed">
            {t.hero.sub}
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href={APK_URL}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#3390ec] hover:bg-[#2b7bc9] text-white rounded-3xl text-lg font-bold transition-all shadow-lg shadow-blue-100 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-6 h-6" />
              {t.hero.cta}
            </a>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              {t.hero.free}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TutorialPage({ t }: any) {
  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-2xl mx-auto">
         <div className="mb-16">
            <h2 className="text-xl font-bold text-slate-900 mb-6">{t.tutorial.title}</h2>
            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden group relative shadow-md">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                 title="Tutorial AngoChat"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
               ></iframe>
            </div>
         </div>

         <div className="space-y-12">
            <div>
               <h2 className="text-xl font-bold text-slate-900 mb-6">Apps Mobile</h2>
               <div className="space-y-6">
                  <a href={APK_URL} className="flex items-center gap-5 group max-w-fit">
                    <div className="w-10 h-10 flex items-center justify-center text-[#3390ec]">
                       <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.523 15.3414C18.005 15.3414 18.396 15.7324 18.396 16.2144C18.396 16.6964 18.005 17.0874 17.523 17.0874C17.041 17.0874 16.65 16.6964 16.65 16.2144C16.65 15.7324 17.041 15.3414 17.523 15.3414ZM6.477 15.3414C6.959 15.3414 7.35 15.7324 7.35 16.2144C7.35 16.6964 6.959 17.0874 6.477 17.0874C5.995 17.0874 5.604 16.6964 5.604 16.2144C5.604 15.7324 5.995 15.3414 6.477 15.3414ZM17.95 11.2304L19.782 8.0564C19.923 8.0564 20.038 7.9414 20.038 7.8004C20.038 7.7474 20.021 7.6974 19.99 7.6534C19.866 7.4814 19.645 7.4474 19.497 7.5774L17.55 10.9234C16.03 10.2314 14.153 9.8734 12 9.8734C9.847 9.8734 7.97 10.2314 6.45 10.9234L4.503 7.5774C4.444 7.4764 4.336 7.4114 4.218 7.4114C4.103 7.4114 3.996 7.4724 3.935 7.5684C3.811 7.7404 3.845 7.9614 3.975 8.0914L4.218 8.0564L6.05 11.2304C2.584 13.0644 2.123 16.8924 2.123 17.7474H21.877C21.877 16.8924 21.416 13.0644 17.95 11.2304Z"/></svg>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-medium">
                       <span className="text-[#3390ec] group-hover:underline">angochat 1.0</span>
                       <span className="text-slate-400 font-light">—</span>
                       <span className="text-[#3390ec] group-hover:underline uppercase">download</span>
                    </div>
                  </a>
               </div>
            </div>

            <div>
               <h2 className="text-xl font-bold text-slate-900 mb-6">Apps Desktop (PC)</h2>
               <div className="space-y-6">
                  <div className="flex items-center gap-5 opacity-40">
                    <div className="w-10 h-10 flex items-center justify-center text-slate-400">
                       <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16.5C21 16.88 20.88 17.21 20.66 17.44C20.44 17.66 20.11 17.78 19.73 17.78H4.27C3.89 17.78 3.56 17.65 3.34 17.44C3.12 17.22 3 16.89 3 16.51V5.51C3 4.75 3.5 4.23 4.27 4.23H19.73C20.5 4.23 21 4.75 21 5.51V16.5ZM21.94 18.66C21.97 18.8 22 18.94 22 19.08C22 19.58 21.58 20 21.08 20H2.91C2.41 20 2 19.58 2 19.08C2 18.94 2.03 18.81 2.06 18.68L2.06 18.66C2.06 18.66 2.06 18.66 2.06 18.66H21.94Z"/></svg>
                    </div>
                    <span className="text-slate-500 font-medium text-lg">Em breve para Windows / macOS</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

function FAQPage({ t, faqs }: any) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f4f4f5] px-6">
      <div className="max-w-2xl mx-auto">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">{t.faq.title}</h2>
            <p className="text-slate-400 font-bold uppercase text-[11px] tracking-[0.2em] mt-3">{t.faq.sub}</p>
         </div>
         <div className="space-y-4">
            {faqs.map((faq: any, i: number) => (
              <div key={i} className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-7 text-left flex items-center justify-between font-bold text-slate-800 hover:text-[#3390ec] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-slate-300 transition-transform shrink-0", activeFaq === i && "rotate-180 text-[#3390ec]")} />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 text-slate-500 leading-relaxed font-medium border-t border-slate-50 pt-4">
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
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
    </svg>
  );
}

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en' | 'ru' | 'zh'>('pt');
  const t = translations[lang];

  const faqs = [
    {
      question: lang === 'pt' ? "O AngoChat é realmente seguro?" : lang === 'en' ? "Is AngoChat really safe?" : lang === 'ru' ? "AngoChat действительно безопасен?" : "AngoChat 真的安全吗？",
      answer: lang === 'pt' ? "Sim. Utilizamos os mesmos padrões de segurança globais para garantir que sua comunicação e seus ganhos via Airtm estejam sempre protegidos." : lang === 'en' ? "Yes. We use the same global security standards to ensure your communication and Airtm earnings are always protected." : lang === 'ru' ? "Да. Мы используем мировые стандарты безопасности для защиты вашего общения и заработка через Airtm." : "是的。我们使用相同的全球安全标准来确保您的通讯和 Airtm 收入始终受到保护。"
    },
    {
       question: lang === 'pt' ? "O que é Monetização em Tempo Real?" : lang === 'en' ? "What is Real-time Monetization?" : lang === 'ru' ? "Что такое монетизация в реальном времени?" : "什么是实时变现？",
       answer: lang === 'pt' ? "No AngoChat, você ganha por cada minuto de uso. Seu tempo é convertido diretamente em valor real." : lang === 'en' ? "In AngoChat, you earn for every minute of use. Your time is directly converted into real value." : lang === 'ru' ? "В AngoChat вы зарабатываете за каждую минуту использования. Ваше время напрямую конвертируется в реальную ценность." : "在 AngoChat 中，您每使用一分钟就能获得收益。您的时间直接转化为实际价值。"
    },
    {
      question: lang === 'pt' ? "Como funcionam os Pagamentos Instantâneos?" : lang === 'en' ? "How do instant payouts work?" : lang === 'ru' ? "Как работают мгновенные выплаты?" : "即时支付如何运作？",
      answer: lang === 'pt' ? "Seus ganhos podem ser transferidos instantaneamente para sua conta Airtm a qualquer momento." : lang === 'en' ? "Your earnings can be instantly transferred to your Airtm account at any time." : lang === 'ru' ? "Ваш заработок может быть мгновенно переведен на ваш счет Airtm в любое время." : "您的收入可以随时立即转入您的 Airtm 账户。"
    },
    {
      question: lang === 'pt' ? "É fácil de instalar?" : lang === 'en' ? "Is it easy to install?" : lang === 'ru' ? "Легко ли установить?" : "安装方便吗？",
      answer: lang === 'pt' ? "Sim! Basta baixar o APK oficial aqui no site e seguir as instruções simples de instalação no seu Android." : lang === 'en' ? "Yes! Just download the official APK here on the site and follow the simple installation instructions on your Android." : lang === 'ru' ? "Да! Просто скачайте официальный APK здесь на сайте и следуйте простым инструкциям по установке на вашем Android." : "是的！只需在网站上下载官方 APK，并按照 Android 上的简单安装说明操作即可。"
    }
  ];

  return (
    <Router>
      <LayoutWrapper lang={lang} setLang={setLang} t={t}>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/app" element={<TutorialPage t={t} />} />
          <Route path="/faq" element={<FAQPage t={t} faqs={faqs} />} />
        </Routes>
      </LayoutWrapper>

      <style>{`
        body { background-color: #fff; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Router>
  );
}
