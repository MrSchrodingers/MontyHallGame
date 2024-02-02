export interface IDoorProps {
  doorNumber: number;
  havePresent: boolean;
  openStatus: boolean;
  selected: boolean;
}

export class DoorModel implements IDoorProps {
  doorNumber: number;
  havePresent: boolean;
  openStatus: boolean;
  selected: boolean;

  constructor(doorNumber: number, havePresent: boolean, openStatus: boolean, selected: boolean) {
    this.doorNumber = doorNumber;
    this.havePresent = havePresent;
    this.openStatus = openStatus;
    this.selected = selected;
  }

  toggleOpenStatus(): void {
    this.openStatus = !this.openStatus;
  }
  toggleSelectedStatus(): void {
    this.openStatus = !this.selected;
  }
}