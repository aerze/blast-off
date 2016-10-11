

import ForerunnerDB from 'forerunnerdb';
const fdb = new ForerunnerDB();
const db = fdb.db('blastoff');

const profileCollection = db.collection('profile');
const playersCollection = db.collection('players');
const gameCollection = db.collection('game');

const loadedPromise = new Promise((resolve, reject) => {
  console.log('calling profileCollection');
  profileCollection.load((err, tableStats, metaStats) => {
    console.log('callback profileCollection')
    if (err) return reject(err);
    return reject(false);
  });
});



// const loadHandler = (err, tableStats, metaStats) => {
//   if (err) throw err;
//   else {
//     console.log('db loaded');
//     queue.counter =- 1;
//   }
// }

// profileCollection.load(loadHandler);
// playersCollection.load(loadHandler);
// gameCollection.load(loadHandler);

const local = {

  profile: {

    set({ name }) {
      const savePromise = new Promise((resolve, reject) => {
        console.log('insert profileCollection');
        profileCollection.insert({ name });
        profileCollection.save((err) => {
          console.log('saved profileCollection');
          if (err) return reject(false);
          return resolve(true);
        });
      });

      return Promise.all([loadedPromise, savePromise]);
    },

    get() {
      const profilePromise = new Promise((resolve, reject) => {
        const result = profileCollection.find({})[0];
        if (result) resolve(result);
        else reject(false);
      });
    }

  },
  games: {

  }
};

window.profile = profileCollection;
window.local = local;

module.exports = local;
