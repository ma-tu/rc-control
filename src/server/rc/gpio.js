var fs = require('fs');
var path = require('path');

const sysGpio = '/sys/class/gpio/';

function cleanup() {

  for (var pin = 2; pin <= 27; pin++) {
    const gpio = path.join(sysGpio, 'gpio' + pin);
    if (fs.existsSync(gpio)) {
      console.log("unexport:" + gpio);
      fs.writeFileSync(path.join(sysGpio, 'unexport'), pin);
    }
  }
  console.log("Finish Gpio.cleanup()");
}

function usePort(pin, direction) {
  fs.writeFileSync(path.join(sysGpio, 'export'), pin);
  setTimeout(() => {
    const gpio = path.join(sysGpio, 'gpio' + pin);
    fs.writeFileSync(path.join(gpio, 'direction'), direction);
  }, 100);
}

function setValue(pin, value) {
  const gpio = path.join(sysGpio, 'gpio' + pin);
  fs.writeFileSync(path.join(gpio, 'value'), value);
}

function getValue(pin) {
  const gpio = path.join(sysGpio, 'gpio' + pin);
  if (fs.existsSync(gpio)) {
    var value = fs.readFileSync(path.join(gpio, 'value'));
    return parseInt(value);
  } else {
    return 0;
  }
}

module.exports = {cleanup, usePort, setValue, getValue};