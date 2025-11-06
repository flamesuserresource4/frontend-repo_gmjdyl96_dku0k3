import React from 'react';
import { Rocket, Instagram, Music2 } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-lg shadow-fuchsia-500/30">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-black tracking-widest">NASCINAY</h1>
            <p className="text-xs text-white/60 -mt-0.5">RECORDS</p>
          </div>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a
            href="#releases"
            className="px-3 py-2 rounded-md hover:bg-white/10 transition"
          >
            Releases
          </a>
          <a
            href="https://www.beatport.com/"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-md hover:bg-white/10 transition flex items-center gap-2"
          >
            <Music2 className="h-4 w-4" />
            Beatport
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-md hover:bg-white/10 transition flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
