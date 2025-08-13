import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {
  Building2,
  Users,
  Map,
  Briefcase,
  Globe,
  ExternalLink,
  Zap,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Scale,
  FileText,
  Shield,
  TrendingUp,
  ChevronUp
} from 'lucide-react'
import { section } from 'framer-motion/client'

// Componente de enlace de navegación con scroll suave
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 relative group cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  )
}

// Componente Scroll to Top súper interactivo
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 flex items-center justify-center group animate-fade-in-scale hover-glow"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce transition-all duration-300" />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>

          {/* Efecto de ondas al hover */}
          <div className="absolute -inset-2 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
          <div className="absolute -inset-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000"></div>
        </button>
      )}
    </>
  )
}

// Hero Section con datos principales destacados y animaciones suaves
const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 animate-gradient"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-24">
      <div className="text-center text-white mb-10 md:mb-16">
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/20 animate-fade-in-scale stagger-1">
          <Award className="w-4 h-4 mr-2 animate-bounce-subtle" />
          <span className="text-xs sm:text-sm font-semibold">Forma de Gobierno: Presidencialismo / República</span>
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in-up stagger-2">
          REPÚBLICA DE VERIDIA
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-blue-100 font-light max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-3">
          Veridia, cuyo nombre proviene de la palabra “verde”, simboliza esperanza, prosperidad y naturaleza.
          Es un país virtual con identidad propia y un sistema democrático creado como proyecto académico.
        </p>

      </div>

      {/* Datos Principales Destacados con animaciones escalonadas */}
      <div id="datos-principales" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 md:mb-16">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group animate-fade-in-left stagger-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 animate-float">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">País</h3>
          </div>
          <p className="text-3xl font-black text-white mb-2">Veridia</p>
          <p className="text-blue-200 text-sm">República Soberana</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group animate-fade-in-up stagger-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: '1s' }}>
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Población</h3>
          </div>
          <p className="text-3xl font-black text-white mb-2">8.9M</p>
          <p className="text-blue-200 text-sm">habitantes</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group animate-fade-in-up stagger-3">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: '2s' }}>
              <Map className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Territorio</h3>
          </div>
          <p className="text-3xl font-black text-white mb-2">35,200</p>
          <p className="text-blue-200 text-sm">km² de extensión</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 group animate-fade-in-right stagger-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: '3s' }}>
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">División</h3>
          </div>
          <p className="text-2xl font-black text-white mb-1">12 Departamentos</p>
          <p className="text-blue-200 text-sm">145 municipios</p>
        </div>
      </div>

      {/* Capital destacada con animación especial */}
      <div className="text-center animate-fade-in-scale stagger-5">
        <div className="inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 hover-lift animate-pulse-glow">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4 animate-bounce-subtle">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-blue-200">Capital Nacional</p>
            <p className="text-2xl font-black text-white">Nova Aurelia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Marco Jurídico Section con animaciones dinámicas
const MarcoJuridicoSection = () => (
  <section id="marco-juridico" className="py-20 bg-white parallax-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full mb-6 hover-lift animate-fade-in-scale stagger-1">
          <Scale className="w-5 h-5 mr-2 animate-bounce-subtle" />
          <span className="font-semibold">Sistema Legal de Veridia</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 animate-fade-in-up stagger-2">Marco Jurídico</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up stagger-3">Sistema legal que garantiza justicia, orden y protección de derechos en Veridia</p>
      </div>

      {/* Concepto de Derecho con animaciones */}
      <div className="mb-20">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100 hover-lift animate-fade-in-up stagger-1">
          <div className="flex items-start lg:items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 animate-float">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Concepto de Derecho</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                En Veridia, el <strong>Derecho</strong> es el conjunto de normas obligatorias que regulan la vida social,
                garantizan la justicia y protegen los derechos de todas las personas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover-lift hover-glow transition-all duration-300 group animate-fade-in-left stagger-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Orden Social</h4>
              <p className="text-gray-600 text-sm">Mantiene el orden y la paz social</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover-lift hover-glow transition-all duration-300 group animate-fade-in-up stagger-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Scale className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Límites del Poder</h4>
              <p className="text-gray-600 text-sm">Establece los límites del poder</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 hover-lift hover-glow transition-all duration-300 group animate-fade-in-right stagger-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '2s' }}>
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Protección</h4>
              <p className="text-gray-600 text-sm">Protege libertades y derechos ciudadanos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Normas y Fuentes del Derecho con animaciones súper dinámicas */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Normas Jurídicas Fundamentales con efectos interactivos */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 hover-lift hover-glow transition-all duration-700 group animate-fade-in-left stagger-1">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
              <FileText className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">Normas Jurídicas Fundamentales</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start group-item hover:bg-emerald-100 rounded-lg p-3 transition-all duration-500 hover:translate-x-2 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white text-sm font-bold rounded-full mr-4 flex-shrink-0 group-item-hover:scale-125 group-item-hover:animate-bounce transition-all duration-300 animate-pulse-subtle">1</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 group-item-hover:text-emerald-800 group-item-hover:font-bold transition-all duration-300">Respeto a la Vida</h4>
                <p className="text-gray-600 text-sm group-item-hover:text-gray-800 transition-colors duration-300">Ninguna persona podrá ser privada de su vida o sometida a violencia de forma ilegal.</p>
              </div>
            </div>
            <div className="flex items-start group-item hover:bg-emerald-100 rounded-lg p-3 transition-all duration-500 hover:translate-x-2 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white text-sm font-bold rounded-full mr-4 flex-shrink-0 group-item-hover:scale-125 group-item-hover:animate-bounce transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>2</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 group-item-hover:text-emerald-800 group-item-hover:font-bold transition-all duration-300">Igualdad ante la Ley</h4>
                <p className="text-gray-600 text-sm group-item-hover:text-gray-800 transition-colors duration-300">Todos los ciudadanos tienen los mismos derechos y obligaciones, sin distinción.</p>
              </div>
            </div>
            <div className="flex items-start group-item hover:bg-emerald-100 rounded-lg p-3 transition-all duration-500 hover:translate-x-2 hover:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-600 text-white text-sm font-bold rounded-full mr-4 flex-shrink-0 group-item-hover:scale-125 group-item-hover:animate-bounce transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '1s' }}>3</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 group-item-hover:text-emerald-800 group-item-hover:font-bold transition-all duration-300">Protección Ambiental</h4>
                <p className="text-gray-600 text-sm group-item-hover:text-gray-800 transition-colors duration-300">El uso de recursos naturales debe ser responsible y sostenible.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fuentes del Derecho con efectos súper interactivos */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100 hover-lift hover-glow transition-all duration-700 group animate-fade-in-right stagger-2">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
              <FileText className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">Fuentes del Derecho</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle"></div>
              <span className="text-gray-700 group-item-hover:text-purple-800 group-item-hover:font-semibold transition-all duration-300">Constitución de la República de Veridia</span>
            </li>
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-gray-700">Leyes aprobadas por la Asamblea Nacional</span>
            </li>
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
              <span className="text-gray-700 group-item-hover:text-purple-800 group-item-hover:font-semibold transition-all duration-300">Reglamentos emitidos por el Poder Ejecutivo</span>
            </li>
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '1.5s' }}></div>
              <span className="text-gray-700 group-item-hover:text-purple-800 group-item-hover:font-semibold transition-all duration-300">Costumbre compatible con la ley</span>
            </li>
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '2s' }}></div>
              <span className="text-gray-700 group-item-hover:text-purple-800 group-item-hover:font-semibold transition-all duration-300">Jurisprudencia de la Corte Suprema</span>
            </li>
            <li className="flex items-center group-item hover:bg-purple-100 rounded-lg p-2 transition-all duration-300 hover:translate-x-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 group-item-hover:scale-150 group-item-hover:animate-pulse transition-all duration-300 animate-pulse-subtle" style={{ animationDelay: '2.5s' }}></div>
              <span className="text-gray-700 group-item-hover:text-purple-800 group-item-hover:font-semibold transition-all duration-300">Doctrina jurídica de expertos</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Jerarquía Normativa con animaciones súper dinámicas */}
      <div className="bg-gradient-to-r from-slate-900 to-gray-900 rounded-3xl p-8 lg:p-12 text-white hover-lift hover-glow animate-fade-in-up stagger-2 relative overflow-hidden">
        {/* Elementos de fondo animados */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-20 h-20 bg-yellow-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-red-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="text-center mb-12 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow hover:scale-125 hover:rotate-12 transition-all duration-500 group cursor-pointer">
            <TrendingUp className="w-8 h-8 text-white group-hover:animate-bounce" />
          </div>
          <h3 className="text-3xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300 cursor-pointer">Jerarquía Normativa</h3>
          <p className="text-gray-300 max-w-2xl mx-auto hover:text-white transition-colors duration-300">Orden jerárquico de las normas jurídicas en la República de Veridia</p>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="space-y-4">
            {[
              { num: 1, text: "Constitución", bg: "from-red-500 to-red-600", delay: "0.1s" },
              { num: 2, text: "Tratados internacionales ratificados", bg: "from-orange-500 to-orange-600", delay: "0.2s" },
              { num: 3, text: "Leyes nacionales", bg: "from-yellow-500 to-yellow-600", delay: "0.3s" },
              { num: 4, text: "Reglamentos", bg: "from-green-500 to-green-600", delay: "0.4s" },
              { num: 5, text: "Ordenanzas municipales", bg: "from-blue-500 to-blue-600", delay: "0.5s" },
              { num: 6, text: "Costumbre y jurisprudencia", bg: "from-purple-500 to-purple-600", delay: "0.6s" }
            ].map(item => (
              <div key={item.num} className={`flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover-lift hover-glow transition-all duration-500 group cursor-pointer animate-fade-in-left`} style={{ animationDelay: item.delay }}>
                <div className={`w-12 h-12 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center mr-4 text-white font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-subtle`}>
                  {item.num}
                </div>
                <span className="text-lg font-semibold group-hover:text-yellow-200 group-hover:scale-105 transition-all duration-300">{item.text}</span>

                {/* Efectos de ondas al hover */}
                <div className="absolute -inset-1 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
                <div className="absolute -inset-2 rounded-xl border border-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Sistema de Gobierno
const GobiernoSection = () => (
  <section id="gobierno" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 parallax-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full mb-6 hover-lift animate-fade-in-scale stagger-1">
          <Building2 className="w-5 h-5 mr-2 animate-bounce-subtle" />
          <span className="font-semibold">República Presidencial</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 animate-fade-in-up stagger-2">Sistema de Gobierno</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up stagger-3">Estructura presidencial republicana con división de poderes</p>
      </div>

      {/* Presidencialismo con animaciones */}
      <div className="mb-20">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 hover-lift hover-glow animate-fade-in-up stagger-1">
          <div className="flex items-start lg:items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center mr-6 flex-shrink-0 animate-float">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Presidencialismo en Veridia</h3>
              <p className="text-lg text-gray-700">El Presidente es Jefe de Estado y de Gobierno</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Elección */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-left stagger-1">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Elección</h4>
              <ul className="text-gray-600 space-y-2 text-sm group-hover:text-gray-800 transition-colors duration-300">
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Voto directo cada 5 años</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Segunda vuelta si es necesario</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Mayoría absoluta (50% + 1)</li>
              </ul>
            </div>

            {/* Requisitos */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-up stagger-2">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Requisitos</h4>
              <ul className="text-gray-600 space-y-2 text-sm group-hover:text-gray-800 transition-colors duration-300">
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Veridiano por nacimiento</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Mínimo 35 años de edad</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Sin condenas por delitos graves</li>
              </ul>
            </div>

            {/* Funciones */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-right stagger-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle" style={{ animationDelay: '2s' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Funciones</h4>
              <ul className="text-gray-600 space-y-2 text-sm group-hover:text-gray-800 transition-colors duration-300">
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Representar a la Nación</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Dirigir el gobierno</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Comandar las Fuerzas Armadas</li>
              </ul>
            </div>

            {/* Funciones */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-right stagger-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle" style={{ animationDelay: '2s' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Funciones</h4>
              <ul className="text-gray-600 space-y-2 text-sm group-hover:text-gray-800 transition-colors duration-300">
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Nombrar y remover ministros</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Dirigir política exterior</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Comandar fuerzas armadas</li>
                <li className="transform hover:translate-x-1 transition-transform duration-200">• Sancionar y promulgar leyes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Órganos del Estado con animaciones */}
      <div>
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Órganos del Estado</h3>
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Poder Ejecutivo */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-left stagger-1">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Poder Ejecutivo</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-xl p-4 border border-red-100 hover:bg-red-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Estructura</h5>
                <p className="text-gray-600 text-sm">Presidente y Vicepresidente elegidos en fórmula única</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-100 hover:bg-red-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Gabinete</h5>
                <p className="text-gray-600 text-sm">12 ministerios, incluido el de Innovación y Tecnología Cívica</p>
              </div>
            </div>
          </div>

          {/* Poder Legislativo */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-up stagger-2">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: '1s' }}>
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Poder Legislativo</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Asamblea Nacional</h5>
                <p className="text-gray-600 text-sm">80 diputados por representación proporcional</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Funciones</h5>
                <p className="text-gray-600 text-sm">Legislar, fiscalizar, aprobar presupuesto y ratificar tratados</p>
              </div>
            </div>
          </div>

          {/* Poder Judicial */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover-lift hover-glow transition-all duration-500 group animate-fade-in-right stagger-3">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 animate-float" style={{ animationDelay: '2s' }}>
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Poder Judicial</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-100 hover:bg-green-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Corte Suprema</h5>
                <p className="text-gray-600 text-sm">15 magistrados por períodos de 9 años sin reelección</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100 hover:bg-green-100 transition-colors duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">Funciones</h5>
                <p className="text-gray-600 text-sm">Garantizar la Constitución y administrar justicia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Nacionalidad y Economía con animaciones súper interactivas
const NacionalidadEconomiaSection = () => (
  <section className="py-20 bg-white parallax-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Nacionalidad con animaciones dinámicas */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full mb-6 hover-lift animate-fade-in-scale stagger-1">
            <Users className="w-5 h-5 mr-2 animate-bounce-subtle" />
            <span className="font-semibold">Ciudadanía Veridiana</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up stagger-2">Nacionalidad</h2>
          <p className="text-xl text-gray-600 animate-fade-in-up stagger-3">Formas de adquisición y pérdida de la nacionalidad veridiana</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Adquisición con efectos interactivos */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover-lift hover-glow transition-all duration-700 group animate-fade-in-left stagger-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Adquisición</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start group-item hover:bg-green-100 rounded-lg p-3 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 animate-pulse-subtle">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 group-item-hover:text-gray-900 group-item-hover:font-semibold transition-all duration-300">Por nacimiento en territorio veridiano</span>
              </div>
              <div className="flex items-start group-item hover:bg-green-100 rounded-lg p-3 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 group-item-hover:text-gray-900 group-item-hover:font-semibold transition-all duration-300">Por filiación de padre o madre veridianos</span>
              </div>
              <div className="flex items-start group-item hover:bg-green-100 rounded-lg p-3 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 animate-pulse-subtle" style={{ animationDelay: '1s' }}>
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 group-item-hover:text-gray-900 group-item-hover:font-semibold transition-all duration-300">Por naturalización tras 5 años de residencia legal</span>
              </div>
            </div>
          </div>

          {/* Pérdida con efectos interactivos */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 border border-red-100 hover-lift hover-glow transition-all duration-700 group animate-fade-in-right stagger-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">Pérdida</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start group-item hover:bg-red-100 rounded-lg p-3 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 animate-pulse-subtle">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 group-item-hover:text-gray-900 group-item-hover:font-semibold transition-all duration-300">Renuncia voluntaria</span>
              </div>
              <div className="flex items-start group-item hover:bg-red-100 rounded-lg p-3 transition-all duration-300 transform hover:translate-x-2">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 group-item-hover:text-gray-900 group-item-hover:font-semibold transition-all duration-300">Actos comprobados de traición a la República</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modelo de Economía con efectos súper dinámicos */}
      <div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6 hover-lift animate-fade-in-scale stagger-1">
            <TrendingUp className="w-5 h-5 mr-2 animate-bounce-subtle" />
            <span className="font-semibold">Economía Mixta Moderna</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up stagger-2">Modelo de Economía Local</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up stagger-3">
            Economía mixta que combina iniciativa privada con regulación estatal,
            incentivando la innovación y protegiendo la producción nacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Agricultura con animaciones súper cool */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover-lift hover-glow transition-all duration-700 group hover:-translate-y-3 animate-fade-in-left stagger-1">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">
              <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-11v4m-2-2h4m-2 8v4m-2-2h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">Agricultura</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse-subtle"></div>
                <span className="group-item-hover:text-green-700 group-item-hover:font-semibold transition-all duration-300">Café de alta calidad</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
                <span className="group-item-hover:text-green-700 group-item-hover:font-semibold transition-all duration-300">Cacao orgánico</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                <span className="group-item-hover:text-green-700 group-item-hover:font-semibold transition-all duration-300">Frutas tropicales</span>
              </li>
            </ul>
          </div>

          {/* Industria con efectos súper dinámicos */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover-lift hover-glow transition-all duration-700 group hover:-translate-y-3 animate-fade-in-up stagger-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
              <svg className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Industria</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse-subtle"></div>
                <span className="group-item-hover:text-blue-700 group-item-hover:font-semibold transition-all duration-300">Sector textil</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
                <span className="group-item-hover:text-blue-700 group-item-hover:font-semibold transition-all duration-300">Tecnología avanzada</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                <span className="group-item-hover:text-blue-700 group-item-hover:font-semibold transition-all duration-300">Energías renovables</span>
              </li>
            </ul>
          </div>

          {/* Servicios con efectos súper interactivos */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-100 hover-lift hover-glow transition-all duration-700 group hover:-translate-y-3 animate-fade-in-right stagger-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float" style={{ animationDelay: '2s' }}>
              <Briefcase className="w-8 h-8 text-white transition-all duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">Servicios</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 animate-pulse-subtle"></div>
                <span className="group-item-hover:text-purple-700 group-item-hover:font-semibold transition-all duration-300">Turismo ecológico</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
                <span className="group-item-hover:text-purple-700 group-item-hover:font-semibold transition-all duration-300">Finanzas digitales</span>
              </li>
              <li className="flex items-center hover:translate-x-2 transition-transform duration-300 group-item">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
                <span className="group-item-hover:text-purple-700 group-item-hover:font-semibold transition-all duration-300">Servicios innovadores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Proceso Jurídico con iconos profesionales y animaciones súper suaves
const ProcesoJuridicoSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 parallax-bg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full mb-6 hover-lift animate-fade-in-scale stagger-1">
          <Briefcase className="w-5 h-5 mr-2 animate-bounce-subtle" />
          <span className="font-semibold">Registro Empresarial Digital</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up stagger-2">Proceso Jurídico</h2>
        <p className="text-xl text-gray-600 animate-fade-in-up stagger-3">Registro de Empresa en Veridia</p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden hover-lift animate-fade-in-up stagger-1">
        {/* Elementos animados de fondo mejorados */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 right-10 w-16 h-16 bg-white/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="relative group animate-fade-in-scale">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-white/30 animate-pulse-glow">
                <Briefcase className="w-10 h-10 text-white transition-all duration-500 group-hover:scale-110 animate-bounce-subtle" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Solicitud", description: "Presentar solicitud en el Registro Nacional de Comercio", gradient: "from-red-400 to-pink-500", delay: "0.1s" },
              { step: 2, title: "Documentos", description: "Entregar documentos de identidad y plan de negocio", gradient: "from-orange-400 to-red-500", delay: "0.2s" },
              { step: 3, title: "Pago", description: "Pagar la tasa correspondiente", gradient: "from-yellow-400 to-orange-500", delay: "0.3s" },
              { step: 4, title: "Aprobación", description: "Aprobación oficial en máximo 7 días hábiles", gradient: "from-green-400 to-emerald-500", delay: "0.4s" },
              { step: 5, title: "Publicación", description: "Publicación en el Diario Oficial", gradient: "from-blue-400 to-indigo-500", delay: "0.5s" }
            ].map((item) => (
              <div key={item.step} className={`text-center group animate-fade-in-up`} style={{ animationDelay: item.delay }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto transition-all duration-700 group-hover:scale-125 group-hover:shadow-2xl transform hover:-translate-y-3 animate-bounce-subtle">
                    {item.step}
                  </div>
                  <div className={`absolute -inset-3 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10 animate-pulse-glow`}></div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-110 flex items-center justify-center animate-bounce-subtle`}>
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  {/* Efecto de ondas al hover */}
                  <div className="absolute -inset-6 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
                  <div className="absolute -inset-8 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-1000"></div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-lg group-hover:text-yellow-200 transition-all duration-500 group-hover:scale-105">{item.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed group-hover:text-white transition-all duration-500 group-hover:scale-105">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 hover:bg-white/20 hover-lift hover-glow transition-all duration-500 group cursor-pointer animate-pulse-glow">
              <Zap className="w-5 h-5 mr-3 text-yellow-300 group-hover:animate-spin transition-all duration-500 group-hover:text-yellow-200" />
              <span className="font-semibold text-white group-hover:text-yellow-200 transition-all duration-500">Proceso Completamente Digital</span>
              <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// Footer súper interactivo con animaciones dinámicas
const Footer = () => (
  <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-16 relative overflow-hidden">
    {/* Elementos de fondo animados */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-green-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2 animate-fade-in-left">
          <div className="flex items-center space-x-4 mb-6 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow">
              <Building2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                REPÚBLICA DE VERIDIA
              </h3>
              <p className="text-gray-400 font-medium group-hover:text-blue-300 transition-colors duration-300">Portal Gubernamental Oficial</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-lg mb-6 hover:text-gray-200 transition-colors duration-300">
            Sistema presidencial republicano comprometido con la transparencia, la justicia social
            y el desarrollo sostenible de nuestros 8.9 millones de ciudadanos.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-400 hover:text-blue-300 transition-all duration-300 group cursor-pointer">
              <MapPin className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span className="text-sm group-hover:font-semibold">Nova Aurelia, Capital</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-green-300 transition-all duration-300 group cursor-pointer">
              <Map className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              <span className="text-sm group-hover:font-semibold">35,200 km²</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up stagger-1">
          <h4 className="text-lg font-bold mb-4 text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">Contacto Institucional</h4>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
              <Phone className="w-4 h-4 mr-3 text-blue-400 group-hover:animate-bounce" />
              <span className="text-sm group-hover:font-semibold">+504 0000 0000</span>
            </div>
            <div className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
              <Mail className="w-4 h-4 mr-3 text-blue-400 group-hover:animate-bounce" />
              <span className="text-sm group-hover:font-semibold">contacto@gob.veridia</span>
            </div>
            <div className="flex items-start text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
              <MapPin className="w-4 h-4 mr-3 mt-0.5 text-blue-400 group-hover:animate-bounce" />
              <div className="text-sm group-hover:font-semibold">
                <div>Palacio Nacional</div>
                <div>Nova Aurelia, Veridia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up stagger-2">
          <h4 className="text-lg font-bold mb-4 text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer">Equipo de Desarrollo</h4>
          <div className="space-y-2">
            <div className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
              <div className="font-medium text-blue-400 group-hover:text-blue-300 group-hover:font-bold">Edwin Alexander Villalta Ortiz</div>
            </div>
            <div className="text-gray-300 text-sm hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer">
              <div className="font-medium text-blue-400 group-hover:text-blue-300 group-hover:font-bold">Cesar Alexander Romero Vazques</div>
            </div>
            <div className="text-gray-300 text-sm">
              <div className="font-medium text-blue-400">Fredy Alexander Funes Ortiz</div>
            </div>
            <div className="text-gray-300 text-sm">
              <div className="font-medium text-blue-400">Angel Josue Guevara Portillo</div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              Proyecto académico de educación jurídica
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2025 República de Veridia. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#datos-principales" className="hover:text-blue-400 transition-colors duration-200">Datos Principales</a>
            <a href="#marco-juridico" className="hover:text-blue-400 transition-colors duration-200">Marco Jurídico</a>
            <a href="#gobierno" className="hover:text-blue-400 transition-colors duration-200">Gobierno</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

// Componente principal de la aplicación
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      {/* Header súper interactivo con animaciones */}
      <header className="bg-white/85 backdrop-blur-md shadow-xl border-b border-blue-100 sticky top-0 z-50 transition-all duration-500 hover:bg-white/95 hover:shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 animate-fade-in-left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative group cursor-pointer">
                <img
                  src="/Logo.png"
                  alt="Logo de Veridia"
                  className="w-12 h-12 rounded-xl shadow-lg border-2 border-blue-200 bg-white object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl"
                />
              </div>

              <div className="group cursor-pointer">
                <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500 select-none">
                  REPÚBLICA
                </h1>
                <p className="text-sm text-gray-500 font-medium group-hover:text-blue-600 transition-colors duration-300 select-none">Portal Gubernamental Oficial</p>
              </div>
            </div>
            {/* Menú hamburguesa para móvil */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Navbar desktop */}
            <nav className="hidden lg:flex space-x-8 animate-fade-in-up">
              <div className="relative group">
                <a href="#inicio" onClick={e => { e.preventDefault(); handleNavClick('#inicio') }} className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 relative group cursor-pointer">Inicio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="relative group">
                <a href="#datos-principales" onClick={e => { e.preventDefault(); handleNavClick('#datos-principales') }} className="text-gray-600 hover:text-green-600 font-semibold transition-colors duration-200 relative group cursor-pointer">Datos Principales
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="relative group">
                <a href="#marco-juridico" onClick={e => { e.preventDefault(); handleNavClick('#marco-juridico') }} className="text-gray-600 hover:text-purple-600 font-semibold transition-colors duration-200 relative group cursor-pointer">Marco Jurídico
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="relative group">
                <a href="#gobierno" onClick={e => { e.preventDefault(); handleNavClick('#gobierno') }} className="text-gray-600 hover:text-red-600 font-semibold transition-colors duration-200 relative group cursor-pointer">Gobierno
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </nav>
          </div>
          {/* Menú móvil desplegable */}
          {mobileMenuOpen && (
            <div className="lg:hidden animate-fade-in-down bg-white shadow-xl rounded-xl mt-2 p-4 absolute left-0 right-0 z-50">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" onClick={e => { e.preventDefault(); handleNavClick('#inicio') }} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">Inicio</a>
                <a href="#datos-principales" onClick={e => { e.preventDefault(); handleNavClick('#datos-principales') }} className="text-gray-700 hover:text-green-600 font-semibold transition-colors duration-200">Datos Principales</a>
                <a href="#marco-juridico" onClick={e => { e.preventDefault(); handleNavClick('#marco-juridico') }} className="text-gray-700 hover:text-purple-600 font-semibold transition-colors duration-200">Marco Jurídico</a>
                <a href="#gobierno" onClick={e => { e.preventDefault(); handleNavClick('#gobierno') }} className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200">Gobierno</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <HeroSection />
      <MarcoJuridicoSection />
      <GobiernoSection />
      <NacionalidadEconomiaSection />
      <ProcesoJuridicoSection />
      <Footer />

      {/* Botón Scroll to Top súper interactivo */}
      <ScrollToTop />
    </div>
  )
}

// Agregar CSS personalizado para animaciones suaves
const style = document.createElement('style')
style.textContent = `
  /* Animaciones de entrada suaves */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3);
    }
  }
  
  @keyframes bounce-subtle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes rotate-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  /* Clases de animación */
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
  }
  
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
  }
  
  .animate-fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }
  
  .animate-rotate-slow {
    animation: rotate-slow 20s linear infinite;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
  
  /* Efectos hover mejorados */
  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  }
  
  /* Efectos de parallax suave */
  .parallax {
    transform-style: preserve-3d;
  }
  
  /* Animaciones con delay escalonado */
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
  .stagger-6 { animation-delay: 0.6s; }
  
  /* Transiciones suaves globales */
  * {
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Scroll suave */
  html {
    scroll-behavior: smooth;
  }
  
  /* Efectos de carga */
  .loading-shimmer {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`
document.head.appendChild(style)

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observar elementos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Observar todas las secciones para animaciones
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    observer.observe(section)
  })

  // Observar cards y elementos importantes
  const cards = document.querySelectorAll('.bg-white\\/10, .bg-white, .rounded-3xl, .rounded-2xl')
  cards.forEach((card, index) => {
    card.classList.add('opacity-0')
    setTimeout(() => {
      card.classList.remove('opacity-0')
      card.classList.add('animate-fade-in-scale')
    }, index * 100)
  })

  // Efecto de escritura para el título principal
  const mainTitle = document.querySelector('h1')
  if (mainTitle) {
    mainTitle.style.overflow = 'hidden'
    mainTitle.style.borderRight = '3px solid'
    mainTitle.style.whiteSpace = 'nowrap'
    mainTitle.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite'
  }
})

// Efecto de parallax suave en scroll
let ticking = false

function updateParallax() {
  const scrollTop = window.pageYOffset

  // Parallax para elementos de fondo
  const parallaxElements = document.querySelectorAll('.parallax') as NodeListOf<HTMLElement>
  parallaxElements.forEach(element => {
    const speed = parseFloat(element.dataset.speed || '0.5')
    const yPos = -(scrollTop * speed)
    element.style.transform = `translateY(${yPos}px)`
  })

  ticking = false
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax)
    ticking = true
  }
}

window.addEventListener('scroll', requestTick)

// Renderizar la aplicación
ReactDOM.createRoot(document.getElementById('app')!).render(<App />)
