import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Como funciona',     href: '/#como-funciona' },
  { label: 'Para Consumidores', href: '/#consumidores' },
  { label: 'Para Negócios',     href: '/#negocios' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px', boxShadow: '0 4px 16px rgba(28,50,69,0.10)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Pratilera – Página inicial">
          <img
            src="/mini-logo.png"
            alt="Pratilera"
            className="object-contain"
            style={{ width: '40px', height: '40px' }}
          />
          <span
            className="text-xl font-bold tracking-tight hidden sm:block"
            style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
          >
            Pratilera
          </span>
        </Link>

        {/* Desktop nav — centralizado absolutamente */}
        <nav
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200 hover:text-orange"
              style={{ color: '#495E70' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{ color: '#1C3245' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-neutral-100 shadow-lg px-6 py-5 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold py-1 hover:text-orange transition-colors"
              style={{ color: '#1C3245' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
