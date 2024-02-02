import React, { ReactNode, createContext, useState } from 'react';

interface ITrophyContextData {
  openDoor: boolean | null; // Número da porta que foi aberta (ou null se nenhuma porta foi aberta)
  havePresent: boolean; // Indica se a porta aberta contém um presente
  setOpenDoor: React.Dispatch<React.SetStateAction<boolean | null>>;
  setHavePresent: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITrophyProviderProps {
  children: ReactNode;
}

export const TrophyContext = createContext<ITrophyContextData>({} as ITrophyContextData);

export const TrophyContextProvider: React.FC<ITrophyProviderProps> = ({ children }) => {
  const [openDoor, setOpenDoor] = useState<boolean | null>(null);
  const [havePresent, setHavePresent] = useState(false);

  return (
    <TrophyContext.Provider value={{  openDoor, setOpenDoor, havePresent, setHavePresent }}>
      {children}
    </TrophyContext.Provider>
  );
};
