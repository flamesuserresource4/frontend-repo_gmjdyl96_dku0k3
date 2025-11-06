import React, { useMemo, useState } from 'react';
import { ExternalLink, Disc3, Play } from 'lucide-react';

const releasesData = [
  {
    id: 'nasc001',
    title: 'Obsidian Cathedral',
    artist: 'Various Artists',
    cover: 'https://images.unsplash.com/photo-1558980664-10c236ca2cc9?q=80&w=1200&auto=format&fit=crop',
    beatport: 'https://www.beatport.com/it/label/nascinay-records/125033',
    tags: ['industrial', 'hard techno'],
  },
  {
    id: 'nasc002',
    title: 'Night Steeple',
    artist: 'Nyx Hunter',
    cover: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=1200&auto=format&fit=crop',
    beatport: 'https://www.beatport.com/it/label/nascinay-records/125033',
    tags: ['raw', 'rave'],
  },
  {
    id: 'nasc003',
    title: 'Violet Sigil',
    artist: 'Aether Knight',
    cover: 'https://images.unsplash.com/photo-1526312426976-593c128c1c83?q=80&w=1200&auto=format&fit=crop',
    beatport: 'https://www.beatport.com/it/label/nascinay-records/125033',
    tags: ['hypnotic', 'peak-time'],
  },
  {
    id: 'nasc004',
    title: 'Grimoire Sparks',
    artist: 'Lamia & COAL',
    cover: 'https://images.unsplash.com/photo-1517818277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    beatport: 'https://www.beatport.com/it/label/nascinay-records/125033',
    tags: ['warehouse', 'acid'],
  },
];

const Card = ({ item, onOpen }) => {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
    >
      <div className="aspect-square">
        <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <Disc3 className="h-4 w-4" />
          {item.id.toUpperCase()}
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-tight">{item.title}</h3>
        <p className="text-sm text-white/70">{item.artist}</p>
      </div>
      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
        <div className="rounded-full bg-black/60 backdrop-blur p-3">
          <Play className="h-6 w-6" />
        </div>
      </div>
    </button>
  );
};

const Modal = ({ open, onClose, item }) => {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <img src={item.cover} alt={item.title} className="h-64 md:h-full w-full object-cover" />
        <div className="p-6 md:p-8">
          <div className="text-xs text-white/60">{item.id.toUpperCase()}</div>
          <h3 className="mt-1 text-2xl md:text-3xl font-bold">{item.title}</h3>
          <p className="text-white/80">{item.artist}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30">{t}</span>
            ))}
          </div>
          <a
            href={item.beatport}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 font-semibold transition"
          >
            Open on Beatport
            <ExternalLink className="h-4 w-4" />
          </a>
          <button onClick={onClose} className="mt-3 ml-3 inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-4 py-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Filters = ({ onChange }) => {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    onChange(v);
  };
  return (
    <div className="mb-6 flex items-center gap-3">
      <input
        value={query}
        onChange={handleChange}
        placeholder="Search releases, artists, tags..."
        className="w-full md:w-96 rounded-md bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
      />
    </div>
  );
};

const Releases = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('');

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return releasesData;
    return releasesData.filter((r) =>
      r.title.toLowerCase().includes(q) ||
      r.artist.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [filter]);

  const openItem = (item) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <section id="releases" className="relative py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Releases</h3>
            <p className="text-white/70">Click a card to view on Beatport</p>
          </div>
          <Filters onChange={setFilter} />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((item) => (
            <Card key={item.id} item={item} onOpen={openItem} />
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} item={active} />
    </section>
  );
};

export default Releases;
