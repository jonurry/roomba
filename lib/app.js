"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputLoader = _interopRequireDefault(require("./input-loader.js"));

var _roomba = _interopRequireDefault(require("./roomba.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Main entry point to the application
class App {
  constructor() {
    const loader = new _inputLoader.default();
    this.roomba = new _roomba.default(loader.output());
    this.roomba.drive();
  }

  output() {
    return `${this.roomba.position.x} ${this.roomba.position.y}
${this.roomba.hooveredDirt}`;
  }

}

exports.default = App;

if (process.env.NODE_ENV !== 'test') {
  const app = new App();
  console.log(app.output());
}