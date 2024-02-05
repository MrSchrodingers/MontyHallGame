'use client';

import { motion } from 'framer-motion';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { lazy } from 'react';

export const ContentComponent: React.FC = () => {
  const SpotLight3DModel = lazy(() => import('./Model3D'));

  return (
    <div className="relative w-full h-screen-vh min-h-screen">
      <div className="absolute w-full h-full z-0">
        <Canvas>
          <Stars />
        </Canvas>
      </div>
      <div className="grid lg:grid-cols-2 px-4 py-8 items-center mx-2 lg:gap-8 xl:gap-0">
        {/* Monty Hall Game Information */}
        <motion.div
          className="container flex items-start flex-col-reverse lg:flex-row z-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hover:transition-transform hover:transform hover:scale-105">
            <motion.a href="#InformationSection">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Monty Hall Game
              </h1>
              <p className="max-w-2xl mb-6 font-light text-justify text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                O problema de Monty Hall é um desafio mental, no formato de um quebra-cabeça de probabilidade,
                inspirado no programa de TV americano "Let's Make a Deal" e batizado em homenagem ao seu apresentador original,
                Monty Hall.
              </p>
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          className="container flex items-start h-screen px-6 justify-center hover:cursor-pointer hover:transition-transform hover:transform hover:scale-105"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 4 }}
        >
          <Canvas>
            <SpotLight3DModel />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};