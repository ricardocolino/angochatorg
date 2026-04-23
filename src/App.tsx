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
  Smartphone,
  Shield,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const LOGO_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/AZ2shvqMGatbXorVpj6MQw-AZ2shvqMbTFVceCt_p0PGQ_20260420_211507_0000.mp4";
const APK_URL = "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/angochat1.apk";

const SCREENSHOTS = [
  "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/Screenshot_20260423-003315.png",
  "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/Screenshot_20260423-003548.png",
  "https://pub-787d908cd4db458da923c4d16758ba46.r2.dev/Screenshot_20260423-003630.png"
];

const translations: any = {
  pt: {
    nav: { home: "Início", tutorial: "Apps", faq: "FAQ", download: "Baixar" },
    hero: { badge: "Versão 1.0 Já Disponível", title: "AngoChat", highlight: "Assista. Partilhe. Ganhe.", sub: "Uma plataforma poderosa de partilha de vídeos e lives ao vivo", cta: "Baixar AngoChat para Android", free: "Seguro & Grátis" },
    tutorial: { title: "Como Começar", sub: "Veja como é simples instalar.", play: "ASSISTIR VÍDEO" },
    faq: { title: "Perguntas Frequentes", sub: "Tudo o que você precisa saber." },
    cta: { title: "Comece agora", sub: "Junte-se à revolução da comunicação móvel.", btn: "Instalar APK" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacidade", terms: "Termos", support: "Suporte", rights: "© 2026 AngoChat Tech." },
    legal: {
      privacy: {
        title: "Política de Privacidade",
        intro: "No AngoChat, a tua privacidade é a nossa prioridade. Esta política descreve como tratamos os teus dados.",
        sections: [
          { title: "1. Dados Recolhidos", content: "Recolhemos dados básicos de registo (email/perfil) para processar os teus ganhos e permitir a interação social." },
          { title: "2. Utilização de Dados", content: "Os teus dados são usados exclusivamente para o funcionamento do AngoChat, incluindo o sistema de monetização e comunicações de suporte." },
          { title: "3. Armazenamento Seguro", content: "As tuas fotos e vídeos são armazenados de forma segura utilizando infraestrutura robusta, protegendo a integridade do teu conteúdo." },
          { title: "4. Partilha com Terceiros", content: "Nunca partilhamos os teus dados com terceiros para fins publicitários. A tua informação é privada." },
          { title: "5. Segurança", content: "Utilizamos encriptação de ponta para garantir que a tua conta e carteira estão sempre seguras e protegidas." }
        ]
      },
      terms: {
        title: "Termos de Serviço",
        intro: "Bem-vindo ao AngoChat. Ao utilizar a nossa app, concordas com os seguintes termos.",
        sections: [
          { title: "1. Elegibilidade", content: "Deves ter idade legal para utilizar redes sociais no teu país. O registo é gratuito." },
          { title: "2. Conteúdo do Utilizador", content: "És responsável pelo conteúdo que publicas. Promovemos a cultura angolana e o respeito mútuo." },
          { title: "3. Sistema de Ganhos", content: "Os ganhos são baseados em visualizações e gifts virtuais durante lives. O saldo é acumulado na tua carteira." },
          { title: "4. Levantamentos", content: "Podes levantar o teu saldo via USDT ou AirTM. O processamento depende da validade dos dados fornecidos." },
          { title: "5. Conduta em Lives", content: "Transmissões ao vivo devem respeitar as nossas diretrizes comunitárias. Comportamento abusivo resultará em suspensão." }
        ]
      }
    }
  },
  en: {
    nav: { home: "Home", tutorial: "Apps", faq: "FAQ", download: "Download" },
    hero: { badge: "Version 1.0 Now Available", title: "AngoChat", highlight: "Watch. Share. Earn.", sub: "A powerful video sharing and live streaming platform", cta: "Download AngoChat for Android", free: "Safe & Free" },
    tutorial: { title: "How it Works", sub: "Watch how simple it is to start.", play: "WATCH VIDEO" },
    faq: { title: "FAQ", sub: "Everything you need to know." },
    cta: { title: "Get started", sub: "Join the mobile communication revolution.", btn: "Install APK" },
    airtm: "🌍 Global Money via Airtm",
    footer: { privacy: "Privacy", terms: "Terms", support: "Support", rights: "© 2026 AngoChat Tech." },
    legal: {
      privacy: {
        title: "Privacy Policy",
        intro: "At AngoChat, your privacy is our priority. This policy describes how we handle your data.",
        sections: [
          { title: "1. Data Collected", content: "We collect basic registration data (email/profile) to process your earnings and enable social interaction." },
          { title: "2. Data Usage", content: "Your data is used exclusively for the operation of AngoChat, including the monetization system and support communications." },
          { title: "3. Secure Storage", content: "Your photos and videos are stored safely using robust infrastructure, protecting the integrity of your content." },
          { title: "4. Third-Party Sharing", content: "We never share your data with third parties for advertising purposes. Your information is private." },
          { title: "5. Security", content: "We use cutting-edge encryption to ensure your account and wallet are always secure and protected." }
        ]
      },
      terms: {
        title: "Terms of Service",
        intro: "Welcome to AngoChat. By using our app, you agree to the following terms.",
        sections: [
          { title: "1. Eligibility", content: "You must be of legal age to use social networks in your country. Registration is free." },
          { title: "2. User Content", content: "You are responsible for the content you post. We promote Angolan culture and mutual respect." },
          { title: "3. Earning System", content: "Earnings are based on views and virtual gifts during lives. The balance accumulates in your wallet." },
          { title: "4. Withdrawals", content: "You can withdraw your balance via USDT or AirTM. Processing depends on the validity of the data provided." },
          { title: "5. Live Conduct", content: "Live broadcasts must respect our community guidelines. Abusive behavior will result in suspension." }
        ]
      }
    }
  },
  ru: {
    nav: { home: "Главная", tutorial: "Apps", faq: "FAQ", download: "Скачать" },
    hero: { badge: "Версия 1.0 уже доступна", title: "AngoChat", highlight: "Смотри. Делись. Зарабатывай.", sub: "Мощная платформа для обмена видео и прямых трансляций", cta: "Скачать AngoChat для Android", free: "Безопасно и бесплатно" },
    tutorial: { title: "Как это работает", sub: "Посмотрите, как легко начать.", play: "СМОТРЕТЬ ВИДЕО" },
    faq: { title: "FAQ", sub: "Все, что вам нужно знать." },
    cta: { title: "Начать сейчас", sub: "Присоединяйтесь к мобильной революции.", btn: "Установить APK" },
    airtm: "🌍 Деньги через Airtm",
    footer: { privacy: "Приватность", terms: "Условия", support: "Поддержка", rights: "© 2026 AngoChat Tech." },
    legal: {
      privacy: {
        title: "Политика конфиденциальности",
        intro: "В AngoChat ваша конфиденциальность — наш приоритет.",
        sections: [
          { title: "1. Сбор данных", content: "Мы собираем базовые данные для регистрации и обработки выплат." }
        ]
      },
      terms: {
        title: "Условия использования",
        intro: "Добро пожаловать в AngoChat.",
        sections: [
          { title: "1. Регистрация", content: "Регистрация бесплатна и доступна всем совершеннолетним пользователям." }
        ]
      }
    }
  },
  zh: {
    nav: { home: "首页", tutorial: "Apps", faq: "常见问题", download: "下载" },
    hero: { badge: "1.0 版本现已发布", title: "AngoChat", highlight: "观看。分享。盈收。", sub: "一个功能强大的视频分享和直播平台", cta: "下载 Android 版 AngoChat", free: "安全且免费" },
    tutorial: { title: "操作指南", sub: "看看开始有多简单。", play: "观看视频" },
    faq: { title: "常见问题", sub: "您想知道的一切。" },
    cta: { title: "立即开始", sub: "加入移动通讯革命。", btn: "安装 APK" },
    airtm: "🌍 Airtm 全球支付",
    footer: { privacy: "隐私", terms: "条款", support: "支持", rights: "© 2026 AngoChat Tech。" },
    legal: {
      privacy: {
        title: "隐私政策",
        intro: "在 AngoChat，您的隐私是我们的首要任务。",
        sections: [
          { title: "1. 数据收集", content: "我们收集基本的注册数据以处理您的收益并进行社交互动。" }
        ]
      },
      terms: {
        title: "服务条款",
        intro: "欢迎来到 AngoChat。",
        sections: [
          { title: "1. 资格", content: "您必须达到您所在国家/地区使用社交网络的法定年龄。" }
        ]
      }
    }
  },
  es: {
    nav: { home: "Inicio", tutorial: "Apps", faq: "FAQ", download: "Descargar" },
    hero: { badge: "Versión 1.0 Ya Disponible", title: "AngoChat", highlight: "Mira. Comparte. Gana.", sub: "Una potente plataforma para compartir vídeos y hacer streams en vivo", cta: "Descargar AngoChat para Android", free: "Seguro y Gratis" },
    tutorial: { title: "Cómo Empezar", sub: "Mira lo sencillo que é instalarlo.", play: "VER VIDEO" },
    faq: { title: "Preguntas Frequentes", sub: "Todo lo que necesitas saber." },
    cta: { title: "Empieza ahora", sub: "Únete a la revolución de la comunicación móvil.", btn: "Instalar APK" },
    airtm: "🌍 Dinero Global vía Airtm",
    footer: { privacy: "Privacidad", terms: "Términos", support: "Soporte", rights: "© 2026 AngoChat Tech." },
    legal: {
      privacy: {
        title: "Política de Privacidad",
        intro: "En AngoChat, tu privacidad é nuestra prioridade.",
        sections: [
          { title: "1. Datos Recopilados", content: "Recopilamos datos básicos de registro para procesar tus ganancias." }
        ]
      },
      terms: {
        title: "Términos de Servicio",
        intro: "Bienvenido a AngoChat.",
        sections: [
          { title: "1. Elegibilidad", content: "Debes tener la edad legal para usar redes sociales en tu país." }
        ]
      }
    }
  },
  fr: {
    nav: { home: "Accueil", tutorial: "Apps", faq: "FAQ", download: "Télécharger" },
    hero: { badge: "Version 1.0 Disponible", title: "AngoChat", highlight: "Regardez. Partagez. Gagnez.", sub: "Une plateforme puissante de partage de vidéos et de lives en direct", cta: "Télécharger AngoChat para Android", free: "Sûr & Gratuit" },
    tutorial: { title: "Comment ça marche", sub: "Découvrez comment l'installer simplesmente.", play: "REGARDER LA VIDÉO" },
    faq: { title: "FAQ", sub: "Tout ce que vous devez savoir." },
    cta: { title: "Commencez agora", sub: "Rejoignez la révolution de la communication mobile.", btn: "Installer l'APK" },
    airtm: "🌍 Argent Global via Airtm",
    footer: { privacy: "Confidentialité", terms: "Conditions", support: "Support", rights: "© 2026 AngoChat Tech." },
    legal: {
      privacy: {
        title: "Politique de Confidentialité",
        intro: "Chez AngoChat, votre vie privée est notre priorité.",
        sections: [
          { title: "1. Données Collectées", content: "Nous collectons des données de base pour traiter vos gains." }
        ]
      },
      terms: {
        title: "Conditions d'Utilisation",
        intro: "Bienvenue sur AngoChat.",
        sections: [
          { title: "1. Éligibilité", content: "Vous devez avoir l'âge légal pour utiliser les réseaux sociaux." }
        ]
      }
    }
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center h-[54px] md:h-16 px-4">
          <div className="flex-grow flex items-center h-full gap-6 md:gap-10 overflow-x-auto no-scrollbar py-1">
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
          </div>
            
          <div className="relative group flex items-center h-full ml-4">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)} 
              className="flex items-center gap-1.5 text-[15px] md:text-base font-medium text-[#3390ec] uppercase min-w-fit"
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
                    {['en', 'pt', 'es', 'fr', 'ru', 'zh'].map((l) => (
                      <button key={l} onClick={() => { setLang(l as any); setIsLangOpen(false); }} className={cn("w-full px-4 py-3 text-left text-sm font-bold rounded-lg uppercase", lang === l ? "bg-blue-50 text-[#3390ec]" : "hover:bg-slate-50")}>{l}</button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
      </nav>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="py-8 text-center border-t border-slate-100 mt-auto">
         <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
               <Link to="/privacy" className="text-sm font-bold text-slate-500 hover:text-[#3390ec] uppercase tracking-widest">{t.footer.privacy}</Link>
               <Link to="/terms" className="text-sm font-bold text-slate-500 hover:text-[#3390ec] uppercase tracking-widest">{t.footer.terms}</Link>
               <a href="mailto:suporte@angochat.app" className="text-sm font-bold text-slate-500 hover:text-[#3390ec] uppercase tracking-widest">{t.footer.support}</a>
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
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2.5rem] mx-auto mb-10 flex items-center justify-center border border-slate-50 overflow-hidden"
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
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight">{t.hero.title}</h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
              {t.hero.sub}
            </p>
          </div>

          <div className="mb-16 flex justify-center py-4 px-4 overflow-x-auto no-scrollbar gap-3 md:gap-6">
            {SCREENSHOTS.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="w-[95px] xs:w-[110px] md:w-[180px] flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white aspect-[9/19.5]"
              >
                <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href={APK_URL}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#3390ec] hover:bg-[#2b7bc9] text-white rounded-3xl text-lg font-bold transition-all shadow-lg shadow-blue-100 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-6 h-6" />
              {t.hero.cta}
            </a>
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

function PrivacyPage({ t }: any) {
  const data = t.legal.privacy;
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-[#3390ec]">
          <Shield className="w-10 h-10" />
          <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
        </div>
        <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed italic border-l-4 border-blue-50 pl-6">
          {data.intro}
        </p>
        <div className="space-y-12">
          {data.sections.map((section: any, i: number) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed font-medium">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TermsPage({ t }: any) {
  const data = t.legal.terms;
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-[#3390ec]">
          <FileText className="w-10 h-10" />
          <h1 className="text-4xl font-bold text-slate-900">{data.title}</h1>
        </div>
        <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed italic border-l-4 border-blue-50 pl-6">
          {data.intro}
        </p>
        <div className="space-y-12">
          {data.sections.map((section: any, i: number) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed font-medium">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en' | 'ru' | 'zh' | 'fr' | 'es'>('en');
  const t = translations[lang];

  const faqsData = [
    {
      question: {
        en: "What is AngoChat?",
        pt: "O que é o AngoChat?",
        ru: "Что такое AngoChat?",
        zh: "什么是 AngoChat？",
        es: "¿Qué es AngoChat?",
        fr: "Qu'est-ce qu'AngoChat ?"
      },
      answer: {
        en: "AngoChat is a short-form video platform created for the Angolan community. You can record, share, and discover authentic content—from dance and music to lifestyle and culture—in an environment 100% dedicated to our identity.",
        pt: "O AngoChat é uma plataforma de vídeos curtos criada para a comunidade angolana. Podes gravar, partilhar e descobrir conteúdo autêntico — de danças e música a lifestyle e cultura — num ambiente 100% dedicado à nossa identidade.",
        ru: "AngoChat — это платформа для коротких видео, созданная для ангольского сообщества. Вы можете записывать, делиться и открывать для себя аутентичный контент — от танцев и музыки до образа жизни и культуры — в среде, на 100% посвященной нашей идентичности.",
        zh: "AngoChat 是一个为安哥拉社区创建的短视频平台。你可以在一个 100% 致力于我们身份的环境中录制、分享和发现真实的内容——从舞蹈和音乐到生活方式 and 文化。",
        es: "AngoChat es una plataforma de videos cortos creada para la comunidad angoleña. Puedes grabar, compartir y descubrir contenido auténtico — desde danza y música hasta estilo de vida y cultura — en un entorno 100% dedicado a nossa identidad.",
        fr: "AngoChat est une plateforme de vidéos courtes créée pour la communauté angolaise. Vous pouvez enregistrer, partager et découvrir du contenu authentique — de la danse et la musique au style de vie et à la culture — dans un environnement 100 % dédié à notre identité."
      }
    },
    {
      question: {
        en: "Where can I download the app?",
        pt: "Onde posso descarregar a app?",
        ru: "Где я могу скачать приложение?",
        zh: "哪里可以下载应用？",
        es: "¿Dónde puedo descargar la aplicación?",
        fr: "Où puis-je télécharger l'application ?"
      },
      answer: {
        en: "AngoChat is available for Android. You can download the APK directly from our website while the Google Play Store version is being approved. The iOS version will be available soon.",
        pt: "O AngoChat está disponível para Android. Podes descarregar o APK diretamente pelo nosso site enquanto a versão da Google Play Store está a ser aprovada. A versão iOS estará disponível em breve.",
        ru: "AngoChat доступен для Android. Вы можете скачать APK напрямую с нашего сайта, пока версия для Google Play Store находится на утверждении. Версия для iOS будет доступна в ближайшее время.",
        zh: "AngoChat 适用于 Android。在 Google Play 商店版本通过审核期间，你可以直接从我们的网站下载 APK。iOS 版本即将推出。",
        es: "AngoChat está disponible para Android. Puedes descargar el APK directamente desde nuestro sitio web mientras se aprueba la versión de Google Play Store. La versión para iOS estará disponible pronto.",
        fr: "AngoChat est disponible pour Android. Vous pouvez télécharger l'APK directement desde nosso site Web pendant que la version Google Play Store est en cours d'approbation. La version iOS sera bientôt disponible."
      }
    },
    {
      question: {
        en: "Do I need an account to watch content?",
        pt: "Preciso de criar uma conta para ver conteúdo?",
        ru: "Нужна ли мне учетная запись для просмотра контента?",
        zh: "我需要账号才能看内容吗？",
        es: "¿Necesito una cuenta para ver contenido?",
        fr: "Ai-je besoin d'un compte pour voir le contenu ?"
      },
      answer: {
        en: "You can browse the feed and discover videos without an account. However, to like, comment, share, follow creators, or post your own content, a free account is required. Registration takes less than 1 minute.",
        pt: "Podes navegar pelo feed e descobrir vídeos sem conta. No entanto, para curtir, comentar, partilhar, seguir criadores ou publicar o teu próprio conteúdo, é necessário criar uma conta gratuita. O registo demora menos de 1 minuto.",
        ru: "Вы можете просматривать ленту и открывать для себя видео без учетной записи. Однако для того, чтобы ставить лайки, комментировать, делиться, подписываться на авторов или публиковать собственный контент, требуется бесплатная учетная запись. Регистрация занимает менее 1 минуты.",
        zh: "你可以无需账号浏览动态和发现视频。但是，要点赞、评论、分享、关注创作者或发布你自己的内容，需要一个免费账号。注册只需不到 1 分钟。",
        es: "Puedes navegar por el feed y descubrir videos sin una cuenta. Sin embargo, para dar me gusta, comentar, compartir, seguir a creadores o publicar tu propio contenido, se requiere una cuenta gratuita. El registro toma menos de 1 minuto.",
        fr: "Vous pouvez parcourir le flux et découvrir des vidéos sans compte. Cependant, pour aimer, commenter, partager, suivre des créateurs ou publier votre propre contenu, um compte gratuit est requis. L'inscription prend moins d'une minute."
      }
    },
    {
      question: {
        en: "How does the earning system work?",
        pt: "Como funciona o sistema de ganhos?",
        ru: "Как работает система заработка?",
        zh: "收益系统如何运作？",
        es: "¿Cómo funciona el sistema de ganancias?",
        fr: "Comment fonctionne le système de gain ?"
      },
      answer: {
        en: "Creators accumulate balance based on their video views. The more people watch your content, the more you earn. Additionally, during lives, your followers can send you virtual gifts that are converted into balance in your wallet.",
        pt: "Os criadores acumulam saldo com base nas visualizações dos seus vídeos. Quanto mais pessoas vêem o teu conteúdo, mais ganhas. Além disso, durante as lives, os teus seguidores podem enviar-te gifts virtuais que se convertem em saldo na tua carteira.",
        ru: "Авторы накапливают баланс на основе просмотров их видео. Чем больше людей смотрят ваш контент, тем больше вы зарабатываете. Кроме того, во время эфиров ваши подписчики могут присылать вам виртуальные подарки, которые конвертируются в баланс в вашем кошельке.",
        zh: "创作者根据视频播放量积累余额。观看你内容的人越多，你赚得就越多。此外，在直播期间，你的粉丝可以向你发送虚拟礼物，这些礼物会转化为你钱包中的余额。",
        es: "Los creadores acumulan saldo en función de las visualizaciones de sus videos. Cuantas más personas vean tu contenido, más ganarás. Además, durante los directos, tus seguidores pueden enviarte regalos virtuales que se convierten en saldo en tu billetera.",
        fr: "Les créateurs accumulent un solde en fonction du nombre de vues de leurs vidéos. Plus les gens regardent votre contenu, plus vous gagnez. De plus, pendant les lives, vos abonnés peuvent vous envoyer des cadeaux virtuels qui sont convertis en solde dans votre portefeuille."
      }
    },
    {
      question: {
        en: "How do I withdraw my balance?",
        pt: "Como levanto o meu saldo?",
        ru: "Как мне вывести свой баланс?",
        zh: "我如何提取余额？",
        es: "¿Cómo retiro mi saldo?",
        fr: "Comment retirar mon solde ?"
      },
      answer: {
        en: "We offer two withdrawal methods: USDT (transfer to your crypto wallet TRC-20 or ERC-20) and AirTM (transfer to your AirTM email, which can then be converted to local currency). Withdrawals are processed in the profile under Wallet → Withdraw.",
        pt: "Oferecemos dois métodos de levantamento: USDT (Transferência para a tua carteira cripto TRC-20 ou ERC-20) e AirTM (Envio para o teu email AirTM, podendo depois converter para a moeda local). Os levantamentos são processados no perfil, em Carteira → Levantar.",
        ru: "Мы предлагаем два способа вывода средств: USDT (перевод на ваш криптокошелек TRC-20 или ERC-20) и AirTM (отправка на вашу электронную почту AirTM, после чего средства можно конвертировать в местную валюту). Вывод средств обрабатывается в профиле в разделе Кошелек → Вывести.",
        zh: "我们提供两种提现方式：USDT（转移到你的加密钱包 TRC-20 或 ERC-20）和 AirTM（发送到你的 AirTM 邮箱，然后可以转换为当地货币）。提现可在个人资料的“钱包 → 提现”下进行处理。",
        es: "Ofrecemos dos métodos de retiro: USDT (transferencia a tu billetera cripto TRC-20 o ERC-20) y AirTM (envío a tu correo de AirTM, que luego se puede convertir a moneda local). Los retiros se procesan en el perfil bajo Balletera → Retirar.",
        fr: "Nous proposons deux méthodes de retrait : USDT (transfert vers votre portefeuille crypto TRC-20 ou ERC-20) et AirTM (envoi vers votre email AirTM, qui peut ensuite être converti en devise locale). Les retrais sont traités dans le profil sous Portefeuille → Retirer."
      }
    },
    {
      question: {
        en: "What are Lives and how can I start one?",
        pt: "O que são as Lives e como posso fazer uma?",
        ru: "Что такое Lives и как я могу их запустить?",
        zh: "什么是直播，我该如何开启？",
        es: "¿Qué son los Directos y cómo podemos iniciar uno?",
        fr: "Que sont les Lives et comment puis-je en lancer un ?"
      },
      answer: {
        en: "Lives are real-time live broadcasts. Your followers receive a notification when you start. To start a live, go to the Create (+) tab and select 'Start Live'. During the broadcast, you have access to real-time chat and your fans can send you gifts.",
        pt: "As Lives são transmissões ao vivo em tempo real. Os teus seguidores recebem uma notificação quando começas. Para iniciar uma live, vai ao separador Criar (+) e seleciona 'Iniciar Live'. Durante a transmissão tens acesso a chat em tempo real e os teus fãs podem enviar-te gifts.",
        ru: "Lives — это прямые трансляции в реальном времени. Ваши подписчики получают уведомление, когда вы начинаете. Чтобы запустить трансляцию, перейдите на вкладку Создать (+) и выберите «Запустить эфир». Во время транциации у вас есть доступ к чату в реальном времени, а ваши фанаты могут присылать вам подарки.",
        zh: "直播是实时的现场广播。当你开始时，你的粉丝会收到通知。要开始直播，请前往“创建（+）”选项卡并选择“开始直播”。在广播期间，你可以使用实时聊天，粉丝可以向你发送礼物。",
        es: "Los Directos son transmisiones en vivo en tempo real. Tus seguidores reciben uma notificación quando empiezas. Para iniciar um directo, ve a la pestaña Crear (+) y selecciona 'Iniciar Directo'. Durante la transmisión tienes acceso al chat en tiempo real y tus fans pueden enviarte regalos.",
        fr: "Les Lives sont des diffusions en direct en temps réel. Vos abonnés reçoivent une notification lorsque vous commencez. Pour lancer um live, allez dans l'onglet Créer (+) et sélectionnez 'Lancer le Live'. Pendant la diffusion, vous avez accès au chat en tempo réel et vos fans peuvent vous envoyer des cadeaux."
      }
    },
    {
      question: {
        en: "What type of content can I publish?",
        pt: "Que tipo de conteúdo posso publicar?",
        ru: "Какой контент я могу публиковать?",
        zh: "我可以发布什么类型的内容？",
        es: "¿Qué tipo de conteúdo puedo publicar?",
        fr: "Quel type de conteúdo puis-je publier ?"
      },
      answer: {
        en: "You can publish short videos recorded on the spot or imported from the gallery, with filters, custom text, and trim. There is also support for Stories (ephemeral content that expires in 24h) and marking videos as educational content for the community.",
        pt: "Podes publicar vídeos curtos gravados na hora ou importados da galeria, com filtros, texto personalizado e trim. Há também suporte a Stories (conteúdo efémero que expira em 24h) e a marcação de vídeos como conteúdo educativo para a comunidade.",
        ru: "Вы можете публиковать короткие видео, записанные на месте или импортированные из галереи, с фильтрами, настраиваемым текстом и обрезкой. Также есть поддержка Stories (эфемерный контент, срок действия которого истекает через 24 часа) и маркировка видео как образовательного контента для сообщества.",
        zh: "你可以发布现场录制或从相册导入的短视频，并带有滤镜、自定义文字和裁剪功能。还支持 Stories（24 小时后过期的快闪内容）以及将视频标记为社区教育内容。",
        es: "Puedes publicar videos cortos grabados al momento o importados de la galería, con filtros, texto personalizado y recorte. También hay suporte para Stories (contenido efímero que expira em 24h) e a marcação de vídeos como conteúdo educativo para a comunidade.",
        fr: "Vous pouvez publier des vidéos courtes enregistrées sur le vif ou importées depuis la galerie, avec des filtres, du texte personnalisé et un découpage. Il existe également un support pour les Stories (contenu éphémère qui expire en 24h) et le marquage des vidéos comme contenu éducatif pour la communauté."
      }
    },
    {
      question: {
        en: "Is the app free?",
        pt: "A app é gratuita?",
        ru: "Приложение бесплатное?",
        zh: "这个应用免费吗？",
        es: "¿La aplicación es gratuita?",
        fr: "L'application est-elle gratuite ?"
      },
      answer: {
        en: "Yes, downloading and basic use are 100% free. Virtual coins to send gifts during lives can be purchased within the app. Creators earn real money without paying any subscription fees.",
        pt: "Sim, o download e o uso básico são 100% gratuitos. As moedas virtuais para enviar gifts durante as lives podem ser adquiridas dentro da app. Os criadores ganham dinheiro real sem pagar qualquer taxa de subscrição.",
        ru: "Да, скачивание и базовое использование на 100% бесплатны. Виртуальные монеты для отправки подарков во время эфиров можно приобрести внутри приложения. Авторы зарабатывают реальные деньги без оплаты каких-либо подписок.",
        zh: "是的，下载和基本使用 100% 免费。用于在直播期间发送礼物的虚拟硬币可以在应用内购买。创作者无需支付任何订阅费用即可赚取真金白银。",
        es: "Sí, la descarga y el uso básico son 100% gratuitos. Las monedas virtuales para enviar regalos durante los directos se pueden adquirir dentro de la aplicación. Los creadores ganan dinero real sin pagar ninguna cuota de suscripción.",
        fr: "Oui, le téléchargement et l'utilisation de base sont 100 % gratuits. Les pièces virtuelles pour envoyer des cadeaux pendant les lives peuvent être achetées dans l'application. Les créateurs gagnent de l'argent réel sans payer de frais d'abonnement."
      }
    },
    {
      question: {
        en: "How can I report a problem or give feedback?",
        pt: "Como posso reportar um problema ou dar feedback?",
        ru: "Как я могу сообщить о проблеме или оставить отзыв?",
        zh: "我该如何报告问题或提供建议？",
        es: "¿Como posso reportar um problema ou dar feedback?",
        fr: "Comment puis-je signaler un problème ou donner mon avis ?"
      },
      answer: {
        en: "You can contact us directly via email at suporte@angochat.app or through the contact form on our website. We are always improving the platform and your feedback is very important to us.",
        pt: "Podes contactar-nos diretamente através do email suporte@angochat.app ou pelo formulário de contacto no nosso site. Estamos sempre a melhorar a plataforma e o teu feedback é muito importante para nós.",
        ru: "Вы можете связаться с нами напрямую по электронной почте suporte@angochat.app или через форму обратной связи на нашем сайте. Мы постоянно совершенствуем платформу, и ваши отзывы очень важны для нас.",
        zh: "你可以通过电子邮件 suporte@angochat.app 直接联系我们，或者通过网站上的联系表单。我们一直在改进平台，你的反馈对我们非常重要。",
        es: "Puedes contactarnos diretamente por correo electrónico a suporte@angochat.app o a través del formulario de contacto en nuestro sitio web. Siempre estamos mejorando la plataforma y tus comentarios son muy importantes para nosotros.",
        fr: "Vous pouvez nous contacter directement par e-mail à suporte@angochat.app ou via le formulaire de contact sur notre site Web. Nous améliorons constamment la plateforme et vos commentaires sont très importants pour nous."
      }
    }
  ];

  const faqs = faqsData.map(faq => ({
    question: (faq.question as any)[lang],
    answer: (faq.answer as any)[lang]
  }));

  return (
    <Router>
      <LayoutWrapper lang={lang} setLang={setLang} t={t}>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/app" element={<TutorialPage t={t} />} />
          <Route path="/faq" element={<FAQPage t={t} faqs={faqs} />} />
          <Route path="/privacy" element={<PrivacyPage t={t} />} />
          <Route path="/terms" element={<TermsPage t={t} />} />
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
