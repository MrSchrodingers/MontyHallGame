import React, { ReactNode, createContext, useState } from 'react';

interface IOpenDoorContextData {
  playAnimation: boolean;
  setPlayAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IOpenDoorProviderProps{
  children: ReactNode
}
export const OpenDoorContext = createContext<IOpenDoorContextData>({} as IOpenDoorContextData);

export const OpenDoorContextProvider: React.FC<IOpenDoorProviderProps> = ({ children }) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  return (
    <OpenDoorContext.Provider value={{playAnimation, setPlayAnimation}}>
      {children}
    </OpenDoorContext.Provider>
  );
};