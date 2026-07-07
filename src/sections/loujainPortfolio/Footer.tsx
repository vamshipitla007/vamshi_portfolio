import { navLinks } from './navigationData';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] py-12 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Loujain.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            A portfolio experience built with thoughtful design, smooth motion, and beautiful responsive layouts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-sm transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-between px-6 text-sm text-slate-500">
        <span>© 2026 Loujain Portfolio. All rights reserved.</span>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#" aria-label="Facebook" className="transition hover:text-white"><FaFacebook size={18} /></a>
          <a href="#" aria-label="Instagram" className="transition hover:text-white"><FaInstagram size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-white"><FaLinkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className="transition hover:text-white"><FaTwitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
