'use client';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { LogInIcon } from 'lucide-react';
import { useState } from 'react';
import RegistrationCard from '../registration/page';

export const LoginPage: React.FC = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  const switchToRegistration = () => {
    setIsRegistration(true);
  };

  const switchToLogin = () => {
    setIsRegistration(false);
  };


  return (    
    <div className="relative flex h-screen w-full items-center justify-center bg-slate-800 bg-cover bg-no-repeat">
      <Canvas className="absolute">
        <Stars />
      </Canvas>
      
      {isRegistration ? (
        <RegistrationCard onClick={switchToLogin}/>
      ) : (
        <motion.div
          initial={{ opacity: 0, x:  -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x:  -100 }}
          transition={{ duration: 0.8 }}
          className="absolute rounded-xl bg-[#213950]/40 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
        >
          <div className="mb-8 flex flex-col items-center">
            <LogInIcon className="w-8" />
            <h1 className="mb-2 text-4xl font-bold">MontyHall Game</h1>
            <span className="text-gray-300">Entrar</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-slate-600 bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md hover:bg-[#564734]"
                type="text"
                name="name"
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-slate-600 bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md hover:bg-[#564734]"
                type="Password"
                name="name"
                placeholder="*********"
              />
            </div>

            <div className="flex justify-between items-center mb-4 text-sm">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="text-gray-300 ml-2">
                    Lembrar senha
                </label>
              </div>
              <a href="#" className="text-gray-300 hover:underline">
                  Esqueceu sua senha?
              </a>
            </div>

            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-slate-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#564734]"
              >
                  Login
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-300">
                Não tem uma conta?{' '}
              <motion.a
                onClick={switchToRegistration}
                className="text-white hover:underline"
              >
                  Registre-se aqui
              </motion.a>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};


export default LoginPage;