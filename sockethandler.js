const { getComissionRates, addComission } = require('./comissionhandler');

module.exports = (socket) => {
  console.log("New user connected");
  setInterval(() => {
    // send fees here
    socket.emit('update', "Hello");
  }, 60000);
}