const accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

const account = accounts.find(function(account) {
  return account.balance === 12;
})

console.log(account);