const profile = {
  username: 'Jacob',
  playTime: 300,
};

profile.changeUsername = function (newName) {
  if (newName) {
    this.username = newName;
  }
};

profile.updatePlayTime = function (hours) {
  if (hours) {
    this.playTime += hours;
  }
};
profile.getInfo = function () {
  return `${this.username} has ${this.playTime} active hours!`;
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
