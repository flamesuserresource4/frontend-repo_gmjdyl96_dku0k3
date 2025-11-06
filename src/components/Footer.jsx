import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="text-lg font-black tracking-widest">NASCINAY</div>
          <div className="text-xs text-white/60 -mt-1">RECORDS</div>
          <p className="mt-3 text-white/70 max-w-sm">
            Pushing the heaviest grooves with a gothic-fantasy edge. Join the order and never miss a drop.
          </p>
        </div>
        <div>
          <div className="text-white/60">Links</div>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-fuchsia-400 transition" href="#releases">Releases</a></li>
            <li><a className="hover:text-fuchsia-400 transition" href="https://www.beatport.com/it/label/nascinay-records/125033" target="_blank" rel="noreferrer">Beatport</a></li>
            <li><a className="hover:text-fuchsia-400 transition" href="mailto:info@nascinay.records">Contact</a></li>
          </ul>
        </div>
        <div className="md:text-right">
          <div className="text-white/60">Newsletter</div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex items-center gap-2 justify-end">
            <input type="email" required placeholder="Your email" className="w-full md:w-auto flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <button className="rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 font-semibold">Join</button>
          </form>
          <p className="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-xs text-white/50 text-center">
        © {new Date().getFullYear()} NASCINAY RECORDS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
