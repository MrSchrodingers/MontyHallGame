'use client';

import { DoorModel } from '@/app/model/DoorModel';
import { useCallback, useContext, useState } from 'react';
import { SelectedDoorContext } from '@/app/shared/context';

export const useDoorHooks = () => {
  const { selectedDoorNumber } = useContext(SelectedDoorContext);
  const numberOfDoors = 3;

  const generateRandomPresentIndex = () => {
    return Math.floor(Math.random() * numberOfDoors);
  };

  const generateRandomDoorArray = () => {
    const presentIndex = generateRandomPresentIndex();
    const havePresentArray: boolean[] = Array.from({ length: numberOfDoors }, (_, index) => index === presentIndex);

    if (!havePresentArray.includes(true)) {
      const randomIndex = generateRandomPresentIndex();
      havePresentArray[randomIndex] = true;
    }

    return havePresentArray;
  };

  const generateInitialDoors = () => {
    const havePresentArray = generateRandomDoorArray();
    return havePresentArray.map((havePresent, index) => new DoorModel(index + 1, havePresent, false, false));
  };

  const [doors, setDoors] = useState<DoorModel[]>(generateInitialDoors);
  

  const handleDoor = useCallback(
    (doorNumber: number) => {
      setDoors((prevDoors) =>
        prevDoors.map((prevDoor) =>
          prevDoor.doorNumber === doorNumber
            ? new DoorModel(prevDoor.doorNumber, prevDoor.havePresent, !prevDoor.openStatus, prevDoor.selected)
            : prevDoor
        )
      );
    },
    [setDoors, selectedDoorNumber]
  );

  const handleSelected = useCallback(
    (doorNumber: number) => {
      setDoors((prevDoors) =>
        prevDoors.map((prevDoor) =>
          prevDoor.doorNumber === doorNumber
            ? new DoorModel(prevDoor.doorNumber, prevDoor.havePresent, prevDoor.openStatus, !prevDoor.selected)
            : new DoorModel(prevDoor.doorNumber, prevDoor.havePresent, prevDoor.openStatus, false)
        )
      );
    },
    [setDoors]
  );

  return {
    doors,
    numberOfDoors,
    handleDoor,
    handleSelected
  };
};
