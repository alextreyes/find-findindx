const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserbyUsername(arr, str) {
  return arr.find(function (obj) {
    return Object.values(obj).includes(str);
  });
}

function removeUser(arr, str) {
  let userToRemove = arr.find(function (obj) {
    return Object.values(obj).includes(str);
  });
  if (userToRemove) {
    let index = arr.indexOf(userToRemove);
    arr.splice(index, 1);
  }
  return userToRemove;
}
