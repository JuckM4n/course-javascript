import pages from './pages';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  const pageName = pageNames[parseInt(Math.random() * pageNames.length)];
  pages.openPage(pageName);
});

const friendsDB = require('./friends.json');
const photosDB = require('./photos.json');

const obj = {
  getRandomElement: function (array) {
    const numb = parseInt(Math.random() * array.length);
    return array[numb];
  },
  getNextPhoto: function () {
    const randomFriend = this.getRandomElement(friendsDB);
    return {
      firstName: randomFriend.firstName,
      url: this.getRandomElement(photosDB[randomFriend.id]),
    };
  },
};

console.log(obj.getRandomElement(friendsDB));

const photo = obj.getNextPhoto();

console.log(photo.firstName);
console.log(photo.url);
