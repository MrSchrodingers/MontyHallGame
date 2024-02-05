import React, { ReactNode, createContext, useState } from 'react';

interface ISelectedContextData {
  selectedDoorNumber: number | null;
  setSelectedDoorNumber: React.Dispatch<React.SetStateAction<number | null>>;
}

interface ISelectedProviderProps{
  children: ReactNode
}
export const SelectedDoorContext = createContext<ISelectedContextData>({} as ISelectedContextData);

export const SelectedDoorContextProvider: React.FC<ISelectedProviderProps> = ({ children }) => {
  const [selectedDoorNumber, setSelectedDoorNumber] = useState<number | null>(null);

  return (
    <SelectedDoorContext.Provider value={{ selectedDoorNumber, setSelectedDoorNumber }}>
      {children}
    </SelectedDoorContext.Provider>
  );
};