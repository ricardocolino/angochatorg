/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Radio,
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
  Smile,
  Languages,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const translations = {
  pt: {
    nav: { home: "Início", features: "Recursos", earnings: "Ganhos", faq: "FAQ", download: "Baixar App" },
    hero: { badge: "🔥 A APP #1 DE VÍDEOS E LIVES", title: "CRIE. TRANSMITA.", highlight: "FATURE REAL.", sub: "O AngoChat é a nova rede social onde seus vídeos e lives rendem dinheiro de verdade. Baixe agora e comece a ganhar em USDT!", cta: "BAIXAR APP AGORA", free: "Instalação Grátis" },
    features: { title: "Tudo o que você precisa!", sub: "Diversão sem limites e dinheiro no bolso.", video: "Vídeos Curtos", videoDesc: "Crie e assista vídeos incríveis com filtros e efeitos exclusivos.", live: "Lives AO VIVO", liveDesc: "Transmita seus momentos em tempo real e interaja com seus seguidores." },
    earn: { title: "Ganhe enquanto compartilha! 💸", sub: "No AngoChat, seu tempo vale dinheiro de verdade. Ganhe USDT por visualizações e presentes da galera.", items: ["Receba presentes virtuais em seus vídeos", "Ganhe USDT participando de lives", "Suporte Global: Saques via Airtm", "Sistema de moedas virtuais (Coins)"], coins: "Coins", usdt: "USDT", gifts: "Presentes Reais" },
    tutorial: { title: "Como Instalar? 📱", sub: "Assista ao vídeo e veja como é fácil baixar o AngoChat.", play: "PLAY NO TUTORIAL!" },
    faq: { title: "Perguntas Frequentes", sub: "Tudo o que você precisa saber sobre o AngoChat." },
    cta: { title: "Bora começar? 🐙", sub: "Junte-se à maior comunidade de criadores e comece a faturar hoje mesmo!", btn: "BAIXAR AGORA!" },
    airtm: "🌍 Global: Pagamentos via Airtm disponíveis!",
    footer: { privacy: "Privacidade", terms: "Termos", support: "Suporte", blog: "Blog", rights: "© 2026 AngoChat. Todos os direitos reservados." }
  },
  en: {
    nav: { home: "Home", features: "Features", earnings: "Earnings", faq: "FAQ", download: "Download App" },
    hero: { badge: "🔥 THE #1 VIDEO & LIVE APP", title: "CREATE. STREAM.", highlight: "EARN FOR REAL.", sub: "AngoChat is the new social network where your videos and lives earn real money. Download now and start earning in USDT!", cta: "DOWNLOAD APP NOW", free: "Free Install" },
    features: { title: "Everything you need!", sub: "Unlimited fun and money in your pocket.", video: "Short Videos", videoDesc: "Create and watch amazing videos with exclusive filters and effects.", live: "LIVE Streams", liveDesc: "Stream your moments in real time and interact with your followers." },
    earn: { title: "Earn while you share! 💸", sub: "At AngoChat, your time is worth real money. Earn USDT for views and gifts from the crowd.", items: ["Receive virtual gifts in your videos", "Earn USDT by joining lives", "Global Support: Airtm withdrawals", "Virtual currency system (Coins)"], coins: "Coins", usdt: "USDT", gifts: "Real Gifts" },
    tutorial: { title: "How to Install? 📱", sub: "Watch the video and see how easy it is to download AngoChat.", play: "PLAY TUTORIAL!" },
    faq: { title: "Frequently Asked Questions", sub: "Everything you need to know about AngoChat." },
    cta: { title: "Ready to start? 🐙", sub: "Join the largest community of creators and start earning today!", btn: "DOWNLOAD NOW!" },
    airtm: "🌍 Global: Airtm payments available!",
    footer: { privacy: "Privacy", terms: "Terms", support: "Support", blog: "Blog", rights: "© 2026 AngoChat. All rights reserved." }
  },
  es: {
    nav: { home: "Inicio", features: "Funciones", earnings: "Ganancias", faq: "FAQ", download: "Descargar App" },
    hero: { badge: "🔥 LA APP #1 DE VIDEOS Y LIVES", title: "CREA. TRANSMITE.", highlight: "GANA DE VERDAD.", sub: "¡AngoChat es la nueva red social donde tus videos y lives rinden dinero real! Descarga ahora y comienza a ganar en USDT.", cta: "DESCARGAR APP AHORA", free: "Instalación Gratis" },
    features: { title: "¡Todo lo que necesitas!", sub: "Diversión sin límites y dinero en tu bolsillo.", video: "Videos Cortos", videoDesc: "Crea y mira videos increíbles con filtros y efectos exclusivos.", live: "Lives EN VIVO", liveDesc: "Transmite tus momentos en tiempo real e interactúa con tus seguidores." },
    earn: { title: "¡Gana mientras compartes! 💸", sub: "En AngoChat, tu tiempo vale dinero real. Gana USDT por visualizaciones y regalos de la gente.", items: ["Recibe regalos virtuales en tus videos", "Gana USDT participando en lives", "Soporte Global: Retiros vía Airtm", "Sistema de monedas virtuales (Coins)"], coins: "Coins", usdt: "USDT", gifts: "Regalos Reales" },
    tutorial: { title: "¿Cómo instalar? 📱", sub: "Mira el video y verás lo fácil que es descargar AngoChat.", play: "¡PLAY AL TUTORIAL!" },
    faq: { title: "Preguntas Frecuentes", sub: "Todo lo que necesitas saber sobre AngoChat." },
    cta: { title: "¿Empezamos? 🐙", sub: "¡Únete a la mayor comunidad de creadores y empieza a ganar hoy mismo!", btn: "¡DESCARGAR AHORA!" },
    footer: { privacy: "Privacidad", terms: "Términos", support: "Soporte", blog: "Blog", rights: "© 2026 AngoChat. Todos los derechos reservados." }
  },
  fr: {
    nav: { home: "Accueil", features: "Fonctionnalités", earnings: "Gains", faq: "FAQ", download: "Télécharger l'App" },
    hero: { badge: "🔥 L'APP #1 DE VIDÉOS ET LIVES", title: "CRÉEZ. DIFFUSEZ.", highlight: "GAGNEZ POUR DE VRAI.", sub: "AngoChat est le nouveau réseau social où vos vidéos et lives rapportent de l'argent réel. Téléchargez maintenant et commencez à gagner em USDT !", cta: "TÉLÉCHARGER L'APP MAINTENANT", free: "Installation Gratuite" },
    features: { title: "Tout ce dont vous avez besoin !", sub: "Du plaisir illimité et de l'argent dans votre poche.", video: "Vidéos Courtes", videoDesc: "Créez et regardez des vidéos incroyables avec des filtres et des effets exclusifs.", live: "Lives EN DIRECT", liveDesc: "Diffusez vos moments en temps réel et interagissez avec vos abonnés." },
    earn: { title: "Gagnez en partageant ! 💸", sub: "Sur AngoChat, votre temps vaut de l'argent réel. Gagnez des USDT pour les vues et les cadeaux de la foule.", items: ["Recevez des cadeaux virtuels dans vos vidéos", "Gagnez des USDT en participant aux lives", "Support Global : Retraits via Airtm", "Système de monnaie virtuelle (Coins)"], coins: "Coins", usdt: "USDT", gifts: "Cadeaux Réels" },
    tutorial: { title: "Comment installer ? 📱", sub: "Regardez la vidéo et voyez comme il est facile de télécharger AngoChat.", play: "LANCER LE TUTORIEL !" },
    faq: { title: "Questions Fréquemment Posées", sub: "Tout ce que vous devez savoir sur AngoChat." },
    cta: { title: "Prêt à commencer ? 🐙", sub: "Rejoignez la plus grande communauté de créateurs et commencez à gagner dès aujourd'hui !", btn: "TÉLÉCHARGER MAINTENANT !" },
    airtm: "🌍 Global : Paiements via Airtm disponibles !",
    footer: { privacy: "Confidentialité", terms: "Conditions", support: "Support", blog: "Blog", rights: "© 2026 AngoChat. Tous droits réservés." }
  },
  zh: {
    nav: { home: "首页", features: "功能", earnings: "收益", faq: "常见问题", download: "下载应用" },
    hero: { badge: "🔥 排名第一的视频和直播应用", title: "创作。直播。", highlight: "赚取真实收益。", sub: "AngoChat 是一个新的社交网络，您的视频和直播可以赚取真金白银。立即下载并开始赚取 USDT！", cta: "立即下载应用", free: "免费安装" },
    features: { title: "您需要的一切！", sub: "无限的乐趣和口袋里的金钱。", video: "短视频", videoDesc: "使用独家滤镜和效果创作并观看精彩视频。", live: "在线直播", liveDesc: "实时直播您的瞬间，并与粉丝互动。" },
    earn: { title: "分享即赚！ 💸", sub: "在 AngoChat，您的时间就是金钱。通过观看和礼物赚取 USDT。", items: ["在您的视频中接收虚拟礼物", "通过参与直播赚取 USDT", "全球支持：支持 Airtm 提现", "虚拟货币系统 (Coins)"], coins: "硬币", usdt: "USDT", gifts: "真实礼物" },
    tutorial: { title: "如何安装？ 📱", sub: "观看视频，了解下载 AngoChat 有多简单。", play: "播放教程！" },
    faq: { title: "常见问题", sub: "关于 AngoChat 您需要了解的一切。" },
    cta: { title: "准备好开始了吗？ 🐙", sub: "加入最大的创作者社区，今天就开始赚钱！", btn: "立即下载！" },
    airtm: "🌍 全球：支持 Airtm 支付！",
    footer: { privacy: "隐私", terms: "条款", support: "支持", blog: "博客", rights: "© 2026 AngoChat。保留所有权利。" }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [lang, setLang] = useState<'pt' | 'en' | 'es' | 'fr' | 'zh'>('pt');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[lang];

  // Substitua esta URL pela URL da sua imagem de símbolo
  const LOGO_URL = "/ícon.png";
  // Substitua pela URL real do seu arquivo APK
  const APK_URL = "#";

  const faqs = [
    {
      question: lang === 'pt' ? "O que é o AngoChat?" : lang === 'en' ? "What is AngoChat?" : lang === 'es' ? "¿Qué es AngoChat?" : lang === 'fr' ? "Qu'est-ce qu'AngoChat ?" : "什么是 AngoChat？",
      answer: lang === 'pt' ? "AngoChat é uma plataforma social de vídeos curtos que combina criação de conteúdo e transmissões ao vivo com um sistema inovador de recompensas em USDT." : lang === 'en' ? "AngoChat is a short video social platform that combines content creation and live streams with an innovative USDT reward system." : lang === 'es' ? "AngoChat es una plataforma social de videos cortos que combina la creación de contenido y las transmisiones en vivo con un innovador sistema de recompensas en USDT." : lang === 'fr' ? "AngoChat est une plateforme sociale de vidéos courtes qui combine la création de contenu et les diffusions en direct avec un système de récompense USDT innovant." : "AngoChat 是一个短视频社交平台，将内容创作和直播与创新的 USDT 奖励系统相结合。"
    },
    {
      question: lang === 'pt' ? "Como posso ganhar USDT no AngoChat?" : lang === 'en' ? "How can I earn USDT on AngoChat?" : lang === 'es' ? "¿Cómo puedo ganar USDT en AngoChat?" : lang === 'fr' ? "Comment puis-je gagner des USDT sur AngoChat ?" : "如何在 AngoChat 上赚取 USDT？",
      answer: lang === 'pt' ? "Você ganha USDT compartilhando vídeos e lives populares, recebendo presentes de seus seguidores, e participando do nosso sistema de moedas virtuais." : lang === 'en' ? "You earn USDT by sharing popular videos and live streams, receiving gifts from your followers, and participating in our virtual currency system." : lang === 'es' ? "Ganas USDT compartiendo videos y transmisiones en vivo populares, recibiendo regalos de tus seguidores y participando en nuestro sistema de monedas virtuales." : lang === 'fr' ? "Vous gagnez des USDT en partageant des vidéos et des directs populaires, en recevant des cadeaux de vos abonnés et en participant à notre système de monnaie virtuelle." : "您可以通过分享热门视频和直播、接收关注者的礼物以及参与我们的虚拟货币系统来赚取 USDT。"
    },
    {
      question: lang === 'pt' ? "O AngoChat é gratuito?" : lang === 'en' ? "Is AngoChat free?" : lang === 'es' ? "¿Es AngoChat gratis?" : lang === 'fr' ? "AngoChat est-il gratuit ?" : "AngoChat 是免费的吗？",
      answer: lang === 'pt' ? "Sim, o AngoChat é totalmente gratuito para baixar e usar. Você pode criar, assistir e participar de lives sem custos." : lang === 'en' ? "Yes, AngoChat is completely free to download and use. You can create, watch and participate in lives at no cost." : lang === 'es' ? "Sí, AngoChat es completamente gratuito para descargar y usar. Puedes crear, mirar y participar en transmisiones en vivo sin costo." : lang === 'fr' ? "Oui, AngoChat est totalement gratuit à télécharger et à utiliser. Vous pouvez créer, regarder et participar à des directs sans frais." : "是的，AngoChat 完全免费下载和使用。您可以免费创作、观看和参与直播。"
    },
    {
      question: lang === 'pt' ? "Em quais dispositivos o AngoChat funciona?" : lang === 'en' ? "Which devices does AngoChat work on?" : lang === 'es' ? "¿En qué dispositivos funciona AngoChat?" : lang === 'fr' ? "Sur quels appareils AngoChat fonctionne-t-il ?" : "AngoChat 可以在哪些设备上运行？",
      answer: lang === 'pt' ? "O AngoChat está disponível para Android, iOS e também possui uma versão Web para desktop." : lang === 'en' ? "AngoChat is available for Android, iOS and also has a Web version for desktop." : lang === 'es' ? "AngoChat está disponible for Android, iOS y también tiene una versión web para escritorio." : lang === 'fr' ? "AngoChat est disponible for Android, iOS et dispose également d'une version Web pour ordinateur." : "AngoChat 适用于 Android、iOS，并且还有桌面网页版。"
    },
    {
      question: lang === 'pt' ? "Como posso sacar meus ganhos?" : lang === 'en' ? "How can I withdraw my earnings?" : lang === 'es' ? "¿Cómo puedo retirar mis ganancias?" : lang === 'fr' ? "Comment puis-je retirar mes gains ?" : "如何提取我的收益？",
      answer: lang === 'pt' ? "Oferecemos suporte global para saques via Airtm, facilitando usuários sem acesso a cartões Visa ou MasterCard." : lang === 'en' ? "We offer global support for withdrawals via Airtm, making it easier for users without Visa or MasterCard." : lang === 'es' ? "Ofrecemos soporte global para retiros vía Airtm, facilitando a usuarios sin acceso a tarjetas Visa o MasterCard." : lang === 'fr' ? "Nous offrons un support mondial pour les retraits via Airtm, facilitant la tâche aos usuários n'ayant pas acesso aux cartes Visa ou MasterCard." : "我们通过 Airtm 提供全球提现支持，为没有 Visa 或 MasterCard 的用户提供便利。"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 bg-white/90 backdrop-blur-md border-2 border-slate-900 rounded-2xl flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center border-2 border-slate-900 overflow-hidden shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <img 
                src={LOGO_URL} 
                alt="AngoChat Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">AngoChat</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 leading-none">App Download</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-xs font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest">{t.nav.home}</a>
            <a href="#recursos" className="text-xs font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest">{t.nav.features}</a>
            <a href="#ganhos" className="text-xs font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest">{t.nav.earnings}</a>
            <a href="#faq" className="text-xs font-black text-slate-500 hover:text-red-500 transition-colors uppercase tracking-widest">{t.nav.faq}</a>
            
            <div className="h-6 w-px bg-slate-200" />
            
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/AngoChat" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com/AngoChat" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://youtube.com/@AngoChat" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>

            <div className="h-6 w-px bg-slate-200" />

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-red-500 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-white border-2 border-slate-900 rounded-xl shadow-xl overflow-hidden z-50 min-w-[120px]"
                  >
                    {[
                      { code: 'pt', label: 'Português' },
                      { code: 'en', label: 'English' },
                      { code: 'es', label: 'Español' },
                      { code: 'fr', label: 'Français' },
                      { code: 'zh', label: '中文' }
                    ].map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as any);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm font-bold hover:bg-red-50 transition-colors",
                          lang === l.code ? "text-red-500 bg-red-50" : "text-slate-600"
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={APK_URL} className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-bold hover:bg-red-600 transition-all border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">{t.nav.download}</a>
          </div>

          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b-2 border-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl border-2 border-slate-900 overflow-hidden">
                  <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-black text-xl">AngoChat</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-xl border-2 border-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic tracking-tighter hover:text-red-500">{t.nav.home}</a>
              <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic tracking-tighter hover:text-red-500">{t.nav.features}</a>
              <a href="#ganhos" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic tracking-tighter hover:text-red-500">{t.nav.earnings}</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black italic tracking-tighter hover:text-red-500">{t.nav.faq}</a>
              <div className="flex justify-center gap-6 py-4">
                <a href="https://instagram.com/AngoChat" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border-4 border-slate-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-colors hover:bg-pink-500 hover:text-white"><Instagram /></a>
                <a href="https://facebook.com/AngoChat" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border-4 border-slate-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-colors hover:bg-blue-600 hover:text-white"><Facebook /></a>
                <a href="https://youtube.com/@AngoChat" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border-4 border-slate-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-colors hover:bg-red-600 hover:text-white"><Youtube /></a>
              </div>
              <a href={APK_URL} className="mt-auto py-5 bg-red-500 text-white rounded-[2rem] font-black text-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">{t.nav.download}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Download Bar (Mobile) */}
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-6 left-6 right-6 z-[40] md:hidden">
        <a href={APK_URL} className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-[2rem] border-2 border-slate-700 shadow-[10px_10px_0px_0px_rgba(239,68,68,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center border border-white/20"><Download className="w-5 h-5" /></div>
            <div className="flex flex-col text-left"><span className="font-black text-sm uppercase">Instalar App</span><span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">{t.hero.free}</span></div>
          </div>
          <ChevronDown className="w-5 h-5 -rotate-90 opacity-50" />
        </a>
      </motion.div>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden bg-[#FFC700]/10">
          {/* Marquee Background */}
          <div className="absolute top-0 left-0 w-full overflow-hidden bg-slate-900 py-3 rotate-[-1deg] translate-y-20 opacity-10 pointer-events-none">
            <div className="flex animate-marquee whitespace-nowrap text-white font-black text-6xl gap-20">
              <span>{t.hero.cta}</span>
              <span>{t.hero.cta}</span>
              <span>{t.hero.cta}</span>
              <span>{t.hero.cta}</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full font-black text-sm mb-8 border-2 border-slate-700 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                <span className="animate-pulse text-red-500">●</span> {t.hero.badge}
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black text-slate-900 leading-[0.8] mb-12 font-display tracking-tighter">
                {t.hero.title} <br />
                <span className="text-red-500 italic block mt-4">
                  {t.hero.highlight}
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 mb-12 max-w-2xl mx-auto font-bold leading-tight">
                {t.hero.sub}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16 relative">
                <a 
                  href={APK_URL}
                  className="flex flex-col items-center justify-center gap-2 p-8 bg-white text-slate-900 rounded-[2.5rem] font-black text-xl hover:bg-slate-50 transition-all border-4 border-slate-900 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none group"
                >
                  <Download className="w-12 h-12 text-red-500 group-hover:bounce" />
                  <span>{t.hero.cta}</span>
                  <span className="text-sm font-bold opacity-50">{t.hero.free}</span>
                </a>

                {/* Airtm Global Support */}
                <div className="sticker-card p-8 bg-slate-900 text-white flex flex-col items-center justify-center gap-2 text-center border-slate-700">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center border-2 border-slate-800 mb-2">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <span className="font-black text-[10px] uppercase tracking-widest text-red-400">Suporte Airtm</span>
                  <span className="font-bold text-lg leading-tight tracking-tight">{t.airtm}</span>
                </div>

                {/* Decoration */}
                <div className="hidden lg:block absolute -right-32 top-10 animate-float">
                  <div className="relative">
                    <Star className="w-16 h-16 text-yellow-400 fill-yellow-400 stroke-slate-900 stroke-[3px]" />
                    <span className="absolute -top-4 -right-4 font-black text-xl rotate-12 bg-white border-4 border-slate-900 px-3 py-1 rounded-xl shadow-lg">SAFE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Steps Bar */}
        <section className="py-12 bg-slate-900 text-white border-y-4 border-slate-900 overflow-hidden relative z-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", text: lang === 'pt' ? "Baixe o APK" : "Get the APK" },
                { step: "02", text: lang === 'pt' ? "Crie sua conta" : "Create Account" },
                { step: "03", text: lang === 'pt' ? "Comece a Lucrar" : "Start Earning" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="text-7xl font-black text-red-500 opacity-50 font-display italic">{item.step}</span>
                  <span className="text-2xl font-black uppercase tracking-tight italic">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-20 bg-slate-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block underline underline-offset-8">EXPERIÊNCIA COMPLETA</span>
              <h2 className="text-5xl md:text-7xl font-black mb-4 font-display italic tracking-tighter uppercase">{t.features.title}</h2>
              <p className="text-slate-600 font-bold text-xl">{t.features.sub}</p>
            </div>
            <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
              {[
                {
                  icon: <Video className="text-red-500 w-10 h-10" />,
                  title: t.features.video,
                  desc: t.features.videoDesc,
                  color: "bg-red-50"
                },
                {
                  icon: <Radio className="text-blue-500 w-10 h-10" />,
                  title: t.features.live,
                  desc: t.features.liveDesc,
                  color: "bg-blue-50"
                }
              ].map((feature, i) => (
                <div key={i} className="sticker-card p-12 bg-white relative group overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-900/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:-rotate-6", feature.color)}>
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-4 font-display tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 font-bold text-lg leading-snug">{feature.desc}</p>
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
                  <h2 className="text-5xl font-extrabold mb-6 font-display">{t.earn.title}</h2>
                  <p className="text-red-100 mb-8 text-xl font-medium">
                    {t.earn.sub}
                  </p>
                  <ul className="space-y-6">
                    {t.earn.items.map((item, i) => (
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
                      <div className="text-2xl font-extrabold text-slate-900 font-display">{t.earn.coins}</div>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-3 hover:rotate-0 transition-transform">
                      <DollarSign className="text-green-500 w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-extrabold text-slate-900 font-display">{t.earn.usdt}</div>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] text-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] col-span-2 hover:scale-105 transition-transform">
                      <Gift className="text-pink-500 w-12 h-12 mx-auto mb-3" />
                      <div className="text-2xl font-extrabold text-slate-900 font-display">{t.earn.gifts}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Tutorial Section */}
        <section className="py-20 bg-white overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4 font-display">{t.tutorial.title}</h2>
              <p className="text-slate-600 font-medium">{t.tutorial.sub}</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="sticker-card overflow-hidden aspect-video relative group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo ID do seu vídeo
                  title="Como baixar AngoChat"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Decorative Sticker on Video */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full border-4 border-slate-900 flex items-center justify-center rotate-12 shadow-xl z-20 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-xs text-center px-2">{t.tutorial.play}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Doodles */}
          <div className="absolute top-1/4 -left-10 opacity-10 rotate-12">
            <Video className="w-32 h-32 text-red-500" />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-display">{t.faq.title}</h2>
              <p className="text-slate-600 font-medium">{t.faq.sub}</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border-2 border-slate-900 overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
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
                        <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t-2 border-slate-50">
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
            <h2 className="text-5xl font-extrabold mb-6 font-display">{t.cta.title}</h2>
            <p className="text-slate-600 mb-10 text-xl max-w-xl mx-auto font-medium">
              {t.cta.sub}
            </p>
            <div className="flex justify-center">
              <a 
                href={APK_URL}
                className="px-16 py-6 bg-red-500 text-white rounded-3xl font-extrabold text-2xl hover:bg-red-600 transition-all border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex items-center gap-4"
              >
                <Download className="w-8 h-8" />
                {t.cta.btn}
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
      <footer className="bg-white border-t-4 border-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center border-2 border-slate-900 overflow-hidden shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <img 
                    src={LOGO_URL} 
                    alt="AngoChat Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-2xl font-black tracking-tight font-display italic">AngoChat</span>
              </div>
              <p className="text-slate-500 font-bold text-sm max-w-[200px] text-center md:text-left">
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <span className="font-black text-slate-900 uppercase tracking-widest text-sm">Siga-nos! 🚀</span>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-6 h-6" />, href: "https://instagram.com/AngoChat", label: "Instagram", color: "hover:bg-pink-500" },
                  { icon: <Facebook className="w-6 h-6" />, href: "https://facebook.com/AngoChat", label: "Facebook", color: "hover:bg-blue-600" },
                  { icon: <Youtube className="w-6 h-6" />, href: "https://youtube.com/@AngoChat", label: "YouTube", color: "hover:bg-red-600" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "w-12 h-12 bg-white border-2 border-slate-900 rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-colors hover:text-white",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-6 text-sm text-slate-500 font-bold">
                <a href="#" className="hover:text-red-500">{t.footer.privacy}</a>
                <a href="#" className="hover:text-red-500">{t.footer.terms}</a>
                <a href="#" className="hover:text-red-500">{t.footer.support}</a>
              </div>
              <div className="text-xs text-slate-400 font-bold">
                {t.footer.rights}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
