interface IDoorProps {
  doorNumber: number;
  havePresent: boolean;
  openStatus: boolean;
}

export class DoorModel implements IDoorProps {
  doorNumber: number;
  havePresent: boolean;
  openStatus: boolean;

  constructor(doorNumber: number, havePresent: boolean, openStatus: boolean) {
    this.doorNumber = doorNumber;
    this.havePresent = havePresent;
    this.openStatus = openStatus;
  }

  togglePresentStatus(): void {
    this.havePresent = !this.havePresent;
  }
  toggleOpenStatus(): void {
    this.openStatus = !this.openStatus;
  }
}