function printReceipt(receipt) {
  const receiptString = receipt.toString();
  return log(receiptString);
}

// commands
function log(val) {
  return { cmd: "log", val };
}

// run program
const commands = [printReceipt(myReceipt)];
runCommands(commands);
