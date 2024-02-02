'use client';
import { DoorModel } from '@/app/model/DoorModel';
import { OpenDoorContext } from '@/app/shared/context';
import { useContext, useState } from 'react';

export const useDoorHooks = () => {
  const { playAnimation } = useContext(OpenDoorContext);

  const numberOfDoors = 3;
  const presentIndex = Math.floor(Math.random() * numberOfDoors);

  const havePresentArray: boolean[] = Array.from({ length: numberOfDoors }, (_, index) => index === presentIndex);

  if (!havePresentArray.includes(true)) {
    const randomIndex = Math.floor(Math.random() * numberOfDoors);
    havePresentArray[randomIndex] = true;
  }

  
  const [doors] = useState<DoorModel[]>(() => {

    const doorsGen: DoorModel[] = havePresentArray.map((havePresent, index) => {
      return new DoorModel(index + 1, havePresent, false);
    });
    return doorsGen;
  });

  return {
    doors, 
    playAnimation,
    numberOfDoors
  };
};