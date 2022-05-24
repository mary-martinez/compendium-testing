// global.fetch = (...args) =>

import fetch from 'cross-fetch';

//   import('cross-fetch').then(({ default: fetch }) => fetch(...args));
global.fetch = fetch;