import InputLoader from './input-loader.js';
import Roomba from './roomba.js';

// Main entry point to the application
export default class App {
  constructor() {
    const loader = new InputLoader();
    this.roomba = new Roomba(loader.output());
    this.roomba.drive();
  }

  output() {
    return `${this.roomba.position.x} ${this.roomba.position.y}
${this.roomba.hooveredDirt}`;
  }
}

if (process.env.NODE_ENV !== 'test') {
  const app = new App();
  console.log(app.output());
}
