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
    hero: { badge: "🚀 A nova era chegou!", title: "Vídeos curtos,", highlight: "Ganhos reais.", sub: "AngoChat é onde a diversão vira dinheiro! Crie, compartilhe e ganhe USDT com a galera mais animada.", cta: "Baixar APK Agora!", free: "É grátis!" },
    features: { title: "Tudo o que você precisa!", sub: "Diversão sem limites e dinheiro no bolso.", video: "Vídeos Curtos", videoDesc: "Crie e assista vídeos incríveis com filtros e efeitos exclusivos.", chat: "Mensagens", chatDesc: "Converse com seus amigos em tempo real com segurança e rapidez." },
    earn: { title: "Ganhe enquanto compartilha! 💸", sub: "No AngoChat, seu tempo vale dinheiro de verdade. Ganhe USDT por visualizações e presentes da galera.", items: ["Receba presentes virtuais em seus vídeos", "Ganhe USDT compartilhando stories", "Sistema de moedas virtuais (Coins)", "Saques rápidos e seguros"], coins: "Coins", usdt: "USDT", gifts: "Presentes Reais" },
    tutorial: { title: "Como Instalar? 📱", sub: "Assista ao vídeo e veja como é fácil baixar o AngoChat.", play: "PLAY NO TUTORIAL!" },
    faq: { title: "Perguntas Frequentes", sub: "Tudo o que você precisa saber sobre o AngoChat." },
    cta: { title: "Bora começar? 🐙", sub: "Junte-se à maior comunidade de criadores e comece a faturar hoje mesmo!", btn: "BAIXAR AGORA!" },
    footer: { privacy: "Privacidade", terms: "Termos", support: "Suporte", blog: "Blog", rights: "© 2026 AngoChat. Todos os direitos reservados." }
  },
  en: {
    nav: { home: "Home", features: "Features", earnings: "Earnings", faq: "FAQ", download: "Download App" },
    hero: { badge: "🚀 The new era is here!", title: "Short videos,", highlight: "Real earnings.", sub: "AngoChat is where fun turns into money! Create, share and earn USDT with the most excited crowd.", cta: "Download APK Now!", free: "It's free!" },
    features: { title: "Everything you need!", sub: "Unlimited fun and money in your pocket.", video: "Short Videos", videoDesc: "Create and watch amazing videos with exclusive filters and effects.", chat: "Messages", chatDesc: "Chat with your friends in real time with safety and speed." },
    earn: { title: "Earn while you share! 💸", sub: "At AngoChat, your time is worth real money. Earn USDT for views and gifts from the crowd.", items: ["Receive virtual gifts in your videos", "Earn USDT by sharing stories", "Virtual currency system (Coins)", "Fast and secure withdrawals"], coins: "Coins", usdt: "USDT", gifts: "Real Gifts" },
    tutorial: { title: "How to Install? 📱", sub: "Watch the video and see how easy it is to download AngoChat.", play: "PLAY TUTORIAL!" },
    faq: { title: "Frequently Asked Questions", sub: "Everything you need to know about AngoChat." },
    cta: { title: "Ready to start? 🐙", sub: "Join the largest community of creators and start earning today!", btn: "DOWNLOAD NOW!" },
    footer: { privacy: "Privacy", terms: "Terms", support: "Support", blog: "Blog", rights: "© 2026 AngoChat. All rights reserved." }
  },
  es: {
    nav: { home: "Inicio", features: "Funciones", earnings: "Ganancias", faq: "FAQ", download: "Descargar App" },
    hero: { badge: "🚀 ¡La nueva era ha llegado!", title: "Videos cortos,", highlight: "Ganancias reales.", sub: "¡AngoChat es donde la diversión se convierte em dinero! Crea, comparte y gana USDT con la gente más animada.", cta: "¡Descargar APK ahora!", free: "¡Es gratis!" },
    features: { title: "¡Todo lo que necesitas!", sub: "Diversión sin límites y dinero en tu bolsillo.", video: "Videos Cortos", videoDesc: "Crea y mira videos increíbles con filtros y efectos exclusivos.", chat: "Mensajes", chatDesc: "Chatea con tus amigos en tiempo real con seguridad y rapidez." },
    earn: { title: "¡Gana mientras compartes! 💸", sub: "En AngoChat, tu tiempo vale dinero real. Gana USDT por visualizaciones y regalos de la gente.", items: ["Recibe regalos virtuales en tus videos", "Gana USDT compartiendo historias", "Sistema de monedas virtuales (Coins)", "Retiros rápidos y seguros"], coins: "Coins", usdt: "USDT", gifts: "Regalos Reales" },
    tutorial: { title: "¿Cómo instalar? 📱", sub: "Mira el video y verás lo fácil que es descargar AngoChat.", play: "¡PLAY AL TUTORIAL!" },
    faq: { title: "Preguntas Frecuentes", sub: "Todo lo que necesitas saber sobre AngoChat." },
    cta: { title: "¿Empezamos? 🐙", sub: "¡Únete a la mayor comunidad de creadores y empieza a ganar hoy mismo!", btn: "¡DESCARGAR AHORA!" },
    footer: { privacy: "Privacidad", terms: "Términos", support: "Soporte", blog: "Blog", rights: "© 2026 AngoChat. Todos los derechos reservados." }
  },
  fr: {
    nav: { home: "Accueil", features: "Fonctionnalités", earnings: "Gains", faq: "FAQ", download: "Télécharger l'App" },
    hero: { badge: "🚀 La nouvelle ère est là !", title: "Vidéos courtes,", highlight: "Gains réels.", sub: "AngoChat est l'endroit où le plaisir se transforme en argent ! Créez, partagez et gagnez des USDT avec la foule la plus excitée.", cta: "Télécharger l'APK maintenant !", free: "C'est gratuit !" },
    features: { title: "Tout ce dont vous avez besoin !", sub: "Du plaisir illimité et de l'argent dans votre poche.", video: "Vidéos Courtes", videoDesc: "Créez et regardez des vidéos incroyables avec des filtres et des effets exclusifs.", chat: "Messages", chatDesc: "Discutez avec vos amis en temps réel en toute sécurité et rapidité." },
    earn: { title: "Gagnez en partageant ! 💸", sub: "Sur AngoChat, votre temps vaut de l'argent réel. Gagnez des USDT pour les vues et les cadeaux de la foule.", items: ["Recevez des cadeaux virtuels dans vos vidéos", "Gagnez des USDT en partageant des stories", "Système de monnaie virtuelle (Coins)", "Retraits rapides et sécurisés"], coins: "Coins", usdt: "USDT", gifts: "Cadeaux Réels" },
    tutorial: { title: "Comment installer ? 📱", sub: "Regardez la vidéo et voyez comme il est facile de télécharger AngoChat.", play: "LANCER LE TUTORIEL !" },
    faq: { title: "Questions Fréquemment Posées", sub: "Tout ce que vous devez savoir sur AngoChat." },
    cta: { title: "Prêt à commencer ? 🐙", sub: "Rejoignez la plus grande communauté de créateurs et commencez à gagner dès aujourd'hui !", btn: "TÉLÉCHARGER MAINTENANT !" },
    footer: { privacy: "Confidentialité", terms: "Conditions", support: "Support", blog: "Blog", rights: "© 2026 AngoChat. Tous droits réservés." }
  },
  zh: {
    nav: { home: "首页", features: "功能", earnings: "收益", faq: "常见问题", download: "下载应用" },
    hero: { badge: "🚀 新时代已开启！", title: "短视频，", highlight: "真实收益。", sub: "AngoChat 是乐趣转化为金钱的地方！与最兴奋的人群一起创作、分享并赚取 USDT。", cta: "立即下载 APK！", free: "它是免费的！" },
    features: { title: "您需要的一切！", sub: "无限的乐趣和口袋里的金钱。", video: "短视频", videoDesc: "使用独家滤镜和效果创作并观看精彩视频。", chat: "消息", chatDesc: "安全快速地与朋友实时聊天。" },
    earn: { title: "分享即赚！ 💸", sub: "在 AngoChat，您的时间就是金钱。通过观看和礼物赚取 USDT。", items: ["在您的视频中接收虚拟礼物", "通过分享故事赚取 USDT", "虚拟货币系统 (Coins)", "快速安全的提现"], coins: "硬币", usdt: "USDT", gifts: "真实礼物" },
    tutorial: { title: "如何安装？ 📱", sub: "观看视频，了解下载 AngoChat 有多简单。", play: "播放教程！" },
    faq: { title: "常见问题", sub: "关于 AngoChat 您需要了解的一切。" },
    cta: { title: "准备好开始了吗？ 🐙", sub: "加入最大的创作者社区，今天就开始赚钱！", btn: "立即下载！" },
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
  const LOGO_URL = "https://picsum.photos/seed/angochat-logo/100/100";
  // Substitua pela URL real do seu arquivo APK
  const APK_URL = "#";

  const faqs = [
    {
      question: lang === 'pt' ? "O que é o AngoChat?" : lang === 'en' ? "What is AngoChat?" : lang === 'es' ? "¿Qué es AngoChat?" : lang === 'fr' ? "Qu'est-ce qu'AngoChat ?" : "什么是 AngoChat？",
      answer: lang === 'pt' ? "AngoChat é uma plataforma social de vídeos curtos que combina criação de conteúdo e mensagens instantâneas com um sistema inovador de recompensas em USDT." : lang === 'en' ? "AngoChat is a short video social platform that combines content creation and instant messaging with an innovative USDT reward system." : lang === 'es' ? "AngoChat es una plataforma social de videos cortos que combina la creación de contenido y la mensajería instantánea con un innovador sistema de recompensas en USDT." : lang === 'fr' ? "AngoChat est une plateforme sociale de vidéos courtes qui combine la création de contenu et la messagerie instantanée avec un système de récompense USDT innovant." : "AngoChat 是一个短视频社交平台，将内容创作和即时消息与创新的 USDT 奖励系统相结合。"
    },
    {
      question: lang === 'pt' ? "Como posso ganhar USDT no AngoChat?" : lang === 'en' ? "How can I earn USDT on AngoChat?" : lang === 'es' ? "¿Cómo puedo ganar USDT en AngoChat?" : lang === 'fr' ? "Comment puis-je gagner des USDT sur AngoChat ?" : "如何在 AngoChat 上赚取 USDT？",
      answer: lang === 'pt' ? "Você ganha USDT compartilhando vídeos e stories populares, recebendo presentes de seus seguidores em seus vídeos, e participando do nosso sistema de moedas virtuais." : lang === 'en' ? "You earn USDT by sharing popular videos and stories, receiving gifts from your followers on your videos, and participating in our virtual currency system." : lang === 'es' ? "Ganas USDT compartiendo videos e historias populares, recibiendo regalos de tus seguidores en tus videos y participando en nuestro sistema de monedas virtuales." : lang === 'fr' ? "Vous gagnez des USDT en partageant des vidéos et des stories populaires, en recevant des cadeaux de vos abonnés sur vos vidéos et en participant à notre système de monnaie virtuelle." : "您可以通过分享热门视频和故事、在视频中接收关注者的礼物以及参与我们的虚拟货币系统来赚取 USDT。"
    },
    {
      question: lang === 'pt' ? "O AngoChat é gratuito?" : lang === 'en' ? "Is AngoChat free?" : lang === 'es' ? "¿Es AngoChat gratis?" : lang === 'fr' ? "AngoChat est-il gratuit ?" : "AngoChat 是免费的吗？",
      answer: lang === 'pt' ? "Sim, o AngoChat é totalmente gratuito para baixar e usar. Você pode criar, assistir e conversar sem custos." : lang === 'en' ? "Yes, AngoChat is completely free to download and use. You can create, watch and chat at no cost." : lang === 'es' ? "Sí, AngoChat es completamente gratuito para descargar y usar. Puedes crear, mirar y chatear sin costo." : lang === 'fr' ? "Oui, AngoChat est totalement gratuit à télécharger et à utiliser. Vous pouvez créer, regarder et discuter sans frais." : "是的，AngoChat 完全免费下载和使用。您可以免费创作、观看和聊天。"
    },
    {
      question: lang === 'pt' ? "Em quais dispositivos o AngoChat funciona?" : lang === 'en' ? "Which devices does AngoChat work on?" : lang === 'es' ? "¿En qué dispositivos funciona AngoChat?" : lang === 'fr' ? "Sur quels appareils AngoChat fonctionne-t-il ?" : "AngoChat 可以在哪些设备上运行？",
      answer: lang === 'pt' ? "O AngoChat está disponível para Android, iOS e também possui uma versão Web para desktop." : lang === 'en' ? "AngoChat is available for Android, iOS and also has a Web version for desktop." : lang === 'es' ? "AngoChat está disponible para Android, iOS y también tiene una versión web para escritorio." : lang === 'fr' ? "AngoChat est disponible pour Android, iOS et dispose également d'une version Web pour ordinateur." : "AngoChat 适用于 Android、iOS，并且还有桌面网页版。"
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
            <a href="#inicio" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">{t.nav.home}</a>
            <a href="#recursos" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">{t.nav.features}</a>
            <a href="#ganhos" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">{t.nav.earnings}</a>
            <a href="#faq" className="text-sm font-bold text-slate-600 hover:text-red-500 transition-colors">{t.nav.faq}</a>
            
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

            <a href="#app" className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-bold hover:bg-red-600 transition-all border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">{t.nav.download}</a>
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
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">{t.nav.home}</a>
              <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">{t.nav.features}</a>
              <a href="#ganhos" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">{t.nav.earnings}</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">{t.nav.faq}</a>
              
              <div className="flex justify-center gap-4 py-2 border-y-2 border-slate-100">
                {['pt', 'en', 'es', 'fr', 'zh'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l as any)}
                    className={cn(
                      "text-sm font-bold uppercase p-2 rounded-lg",
                      lang === l ? "bg-red-500 text-white" : "text-slate-400"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <a href="#app" onClick={() => setIsMenuOpen(false)} className="py-3 bg-red-500 text-white rounded-xl font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">{t.nav.download}</a>
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
                  {t.hero.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 font-display">
                  {t.hero.title} <br />
                  <span className="text-red-500 relative inline-block">
                    {t.hero.highlight}
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-slate-900" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
                  {t.hero.sub}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 relative">
                  <a 
                    href={APK_URL}
                    className="flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-2xl font-bold text-lg hover:bg-red-600 transition-all border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] relative z-10"
                  >
                    <Download className="w-6 h-6" />
                    {t.hero.cta}
                  </a>
                  {/* Hand-drawn arrow (hidden on mobile) */}
                  <div className="hidden lg:block absolute -right-32 top-0 animate-float">
                    <svg width="100" height="60" viewBox="0 0 100 60" fill="none" className="text-slate-900 rotate-12">
                      <path d="M10 10 Q 50 50, 90 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <path d="M80 15 L 90 10 L 85 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="absolute -bottom-4 right-0 font-bold text-sm rotate-12">{t.hero.free}</span>
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
              <h2 className="text-4xl font-extrabold mb-4 font-display">{t.features.title}</h2>
              <p className="text-slate-600 font-medium">{t.features.sub}</p>
            </div>
            <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-12">
              {[
                {
                  icon: <Video className="text-red-500 w-8 h-8" />,
                  title: t.features.video,
                  desc: t.features.videoDesc,
                  color: "bg-red-50"
                },
                {
                  icon: <MessageCircle className="text-blue-500 w-8 h-8" />,
                  title: t.features.chat,
                  desc: t.features.chatDesc,
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
                  { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
                  { icon: <Facebook className="w-6 h-6" />, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
                  { icon: <Youtube className="w-6 h-6" />, href: "#", label: "YouTube", color: "hover:bg-red-600" }
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
