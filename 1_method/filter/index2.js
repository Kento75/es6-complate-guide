const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: true },
  { id: 4, admin: false }
];

const filteredUsers = users.filter(function(user) {
  return user.admin;
});

console.log(filteredUsers);