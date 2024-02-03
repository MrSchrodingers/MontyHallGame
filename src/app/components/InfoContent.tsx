'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const InfoComponent: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto relative"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    > 
      <article className="w-full grid text-justify">
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-white lg:mr-8">
          Monty Hall Game
        </h1>
        <p className="mb-4 px-4 md:px-10 text-lg md:text-xl lg:text-xl font-light text-gray-500 dark:text-gray-400">
          Ah, o Monty Hall, meu caro! Prepare-se para uma jornada de suspense e probabilidade que vai mexer com sua mente. 
          Imagine-se em um programa de TV, com três portas reluzentes à sua frente. Atrás de uma delas, há um prêmio fantástico, 
          como um carro reluzente. Porém, por trás das outras duas, há... bodes. Sim, bodes.
        </p>
        <p className="mb-4 px-4 md:px-10 text-lg md:text-xl lg:text-xl font-light text-gray-500 dark:text-gray-400">
          Aqui está a reviravolta: você escolhe uma porta, mas antes de abri-la, o apresentador, vamos chamá-lo de Monty, é claro,
          abre uma das portas restantes para revelar um bode. Agora, você tem uma escolha: ficar com a sua porta original ou trocar para 
          a outra porta que ainda está fechada.
        </p>
        <p className="mb-4 px-4 md:px-10 text-lg md:text-xl lg:text-xl font-light text-gray-500 dark:text-gray-400">
          Pode parecer meio maluco, mas a matemática por trás disso é fascinante! Se você trocar de porta, as probabilidades estão a seu 
          favor. A lógica por trás disso envolve a ideia de que, inicialmente, você tinha uma chance em três de escolher a porta correta. 
          Quando Monty abre uma porta com um bode, a probabilidade muda a seu favor se você trocar de escolha.
        </p>
        <p className="mb-4 px-4 md:px-10 text-lg md:text-xl lg:text-xl font-light text-gray-500 dark:text-gray-400">
          É um jogo que desafia intuições e nos lembra como as probabilidades podem ser tão, tão traiçoeiras. 
          Então, da próxima vez que se deparar com três portas e um Monty sorridente, lembre-se: é mais do que apenas sorte. 
          É Monty Hall, um jogo de probabilidades e escolhas surpreendentes!
        </p>
      </article>
    </motion.div>
  );
};
