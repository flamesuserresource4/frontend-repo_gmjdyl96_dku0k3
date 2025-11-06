import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette and gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        <div className="absolute -inset-24 blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 flex flex-col items-start justify-end pb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            NASCINAY RECORDS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-3 text-base md:text-lg text-white/80 max-w-2xl"
          >
            Gothic-fantasy hard techno. Forged in neon, born in the underground.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-6 flex items-center gap-3"
          >
            <a
              href="#releases"
              className="inline-flex items-center rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-5 py-3 font-semibold shadow-lg shadow-fuchsia-600/30 transition"
            >
              Explore Releases
            </a>
            <a
              href="https://www.beatport.com/it/label/nascinay-records/125033"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold transition"
            >
              Follow on Beatport
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
