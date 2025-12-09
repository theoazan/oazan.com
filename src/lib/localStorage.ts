import localforage from 'localforage';

const storage = localforage.createInstance({
  name: 'myApp',
  storeName: 'sessionStorage', // or 'localStorage'
});

export default storage;
