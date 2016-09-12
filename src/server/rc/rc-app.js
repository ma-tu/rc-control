//var gpio = require('./gpio');

function initialize() {
  /*
  gpio.cleanup();
  gpio.usePort(24, "out");

  ['SIGINT', 'SIGHUP', 'SIGTERM'].forEach((sig) => {
    process.on(sig, () => {
      gpio.cleanup();
      process.exit(1);
    })
  });
  */
}

module.exports = {initialize};