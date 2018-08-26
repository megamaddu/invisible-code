function printReceipt(receipt) {
  const receiptString = receipt.toString();
  return { cmd: "log", val: receiptString };
}

const commands = [printReceipt(myReceipt)];
runCommands(commands);
