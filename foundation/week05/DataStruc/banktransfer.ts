'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
//console.log(getNameAndBalance(accounts, 23456311));

function getNameAndBalance(objectList: any[], accountNum: number): any[] {
  const accountObject = objectList.filter(
    (element) => accountNum == element.accountNumber
  );
  return [accountObject[0].clientName, accountObject[0].balance];
}
console.log(getNameAndBalance(accounts,11234543 ))
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
transferCash(accounts, 11234543, 43546731, 100);

function transferCash(
  accounts: any[],
  fromAccount: number,
  toAccount: number,
  cashTransfer: number
) {
  let fromAccountFound: boolean = false;
  let toAccountFound: boolean = false;

  accounts.forEach((element) => {
    if (element.accountNumber === fromAccount) fromAccountFound = true;
    if (element.accountNumber === toAccount) toAccountFound = true;
  });

  if (fromAccountFound && toAccountFound) {
    accounts.map((element) => {
      if (element.accountNumber === fromAccount) {
        element.balance -= cashTransfer;
      }
      if (element.accountNumber === toAccount) {
        element.balance += cashTransfer;
      }
    });
  } else {
    console.log('404 - account not found');
  }
}

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

/* export = {
  getNameAndBalance,
  transferAmount,
  accounts,
}; */