import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    this.ricePresent = true;
    console.log('Rice has been added.');
  },

  cookRice() {
    if (this.ricePresent && !this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
    }
    if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    }
    if(this.riceCooked) {
      console.log('The rice is already cooked.');
    }
  },

  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
    }
    if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    }
    console.log('Steaming is already in progress.');
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
    }
    console.log('Keeping warm is already in progress.');
  },

  removeRice() {
    if (this.ricePresent && this.riceCooked) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    }
    console.log('There\'s no rice to remove or it is not cooked yet.');
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


export function simulateRiceCooker() {
  displayMenu();
  let input = +prompt('Enter your choice: ');

  switch(input){
    case 1:
      riceCooker.addRice()
    case 2:
      cookRice();
    case 3:
      steam();
    case 4:
      keepWarm();      
    case 5:
      removeRice();
    case 6:
      console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
      break;
  }

  console.log("Invalid input");
  simulateRiceCooker();
}

simulateRiceCooker();
