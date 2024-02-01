import React, { createContext, useContext, useState } from 'react';

interface DoorContextProps {
  playAnimation: boolean;
  setPlayAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const DoorContext = createContext<DoorContextProps | undefined>(undefined);

export const DoorProvider: React.FC<Omit<DoorContextProps, 'playAnimation' | 'setPlayAnimation'>> = ({ children }) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  return (
    <DoorContext.Provider value={{ playAnimation, setPlayAnimation }}>
      {children}
    </DoorContext.Provider>
  );
};

export const useDoorContext = () => {
  const context = useContext(DoorContext);
  if (!context) {
    throw new Error('useDoorContext must be used within a DoorProvider');
  }
  return context;
};
