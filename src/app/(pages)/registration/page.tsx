'use client';

import { motion } from 'framer-motion';
import { LogInIcon } from 'lucide-react';
import { useState } from 'react';

interface IRegistrationCardProps {
  onClick: () => void;
}

const RegistrationCard:React.FC<IRegistrationCardProps> = ( { onClick } ) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    displayName: '',
    country: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Adicione lógica para enviar os dados do formulário para o servidor ou realizar outras ações.
    console.log('Dados do formulário:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8 }}
      className="absolute rounded-xl bg-[#213950]/40 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8"
    >
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">
          <LogInIcon className='w-8' />
          <h1 className="mb-2 text-4xl font-bold">Registro</h1>
          <span className="text-gray-300">Crie sua conta</span>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Campos de registro adicionais */}
          <div className="mb-4 text-lg">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-3xl border-none bg-slate-600 bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md hover:bg-[#564734]"
              placeholder="Nome completo"
            />
          </div>

          <div className="mb-4 text-lg">
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="rounded-3xl border-none bg-slate-600 bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md hover:bg-[#564734]"
              placeholder="Nome de exibição (opcional)"
            />
          </div>

          <div className="mb-4 text-lg">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="rounded-3xl border-none bg-slate-600 bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md hover:bg-[#564734]"
              placeholder="País de origem"
            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button
              type="submit"
              className="rounded-3xl bg-slate-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#564734]"
            >
              Registrar
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-300">
                  Já tem uma conta?{' '}
            <motion.button
              onClick={onClick}
              className="text-white hover:underline"
            >
              Voltar ao Login
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};


export default RegistrationCard;
