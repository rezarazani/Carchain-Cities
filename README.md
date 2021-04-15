# Carchain-Cities
A library to separate the cities in Carchain

# Installation

```bash
npm i @carchain/cities
```


# Import

#### JavaScript

```javascript
const cc = require('@carchain/cities')
//or
const {cities , countries} = require('@carchain/cities')
```

#### TypesSript

```typescript
import * as cc from '@carchain/cities';
//or
import {cities , countries} from '@carchain/cities';
```

## Usage

#### countries

```js

cc.countries.find();

/**
 * [
    {
      id: 'c1',
      code: 'IRN',
      globalName: 'Iran, Islamic Republic of',
      name: { en: 'iran', fa: 'ایران' },
      center: [ 51.337902, 35.699773 ],
      isActive: true,
      location: { type: 'Polygon', coordinates: [Array] }
    },
    ...
  ]

 */


cc.countries.findByCode('IRN');

/**
     * {
     id: 'c1',
    code: 'IRN',
    globalName: 'Iran, Islamic Republic of',
    name: { en: 'iran', fa: 'ایران' },
    center: [ 51.337902, 35.699773 ],
    isActive: true,
    location: { type: 'Polygon', coordinates: [ [Array] ] }
    }
 */


//Country code does not exist in the database
cc.countries.findByCode('IMN');

/**
 *    undefined
 */


cc.countries.findById('c1');

/**
 * {
  id: 'c1',
  code: 'IRN',
  globalName: 'Iran, Islamic Republic of',
  name: { en: 'iran', fa: 'ایران' },
  center: [ 51.337902, 35.699773 ],
  isActive: true,
  location: { type: 'Polygon', coordinates: [ [Array] ] }
}
 */


//Country ID does not exist in the database
cc.countries.findById('c2');

/**
 *     undefined
 */


cc.countries.searchPoint(1 , 1);

/**
 *  null
 */

cc.countries.searchPoint(51.427001953125, 35.67877297088322 );

/**
 * {
  id: 'c1',
  code: 'IRN',
  globalName: 'Iran, Islamic Republic of',
  name: { en: 'iran', fa: 'ایران' },
  center: [ 51.337902, 35.699773 ],
  isActive: true,
  location: { type: 'Polygon', coordinates: [ [Array] ] }
}
 */

```

#### cities


```js

cc.cities.findById('t1');
/**
{
  id: 't1',
  countryCode: 'IRN',
  countryGlobalName: 'Iran, Islamic Republic of',
  name: { en: 'tehran', fa: 'تهران' },
  center: [ 51.392904, 35.687976 ],
  location: { type: 'Polygon', coordinates: [ [Array] ] },
  isActive: true
}
 */


cc.cities.findById('t5');

/**
 * undefined
 */


cc.cities.find({isActive : true});

/**
 * 
[
  {
    id: 't1',
    countryCode: 'IRN',
    countryGlobalName: 'Iran, Islamic Republic of',
    name: { en: 'tehran', fa: 'تهران' },
    center: [ 51.392904, 35.687976 ],
    location: { type: 'Polygon', coordinates: [Array] },
    isActive: true
  },
  {
    id: 't2',
    countryCode: 'IRN',
    countryGlobalName: 'Iran, Islamic Republic of',
    name: { en: 'isfahan', fa: 'اصفهان' },
    center: [ 51.670188, 32.666113 ],
    location: { type: 'Polygon', coordinates: [Array] },
    isActive: true
  } ,
  ...
]
 */


cc.cities.find({isActive : false});

/**
 * [
  {
    id: 't3',
    countryCode: 'IRN',
    countryGlobalName: 'Iran, Islamic Republic of',
    name: { en: 'mashhad', fa: 'مشهد' },
    center: [ 59.616919, 36.291884 ],
    location: { type: 'Polygon', coordinates: [Array] },
    isActive: false
  }
]
 */


cc.cities.find({id : 't2'});
/**
 * [
  {
    id: 't2',
    countryCode: 'IRN',
    countryGlobalName: 'Iran, Islamic Republic of',
    name: { en: 'isfahan', fa: 'اصفهان' },
    center: [ 51.670188, 32.666113 ],
    location: { type: 'Polygon', coordinates: [Array] },
    isActive: true
  }
]
 */

cc.cities.searchPoint(51.427001953125 , 35.67877297088322);

/**
 * {
  id: 't1',
  countryCode: 'IRN',
  countryGlobalName: 'Iran, Islamic Republic of',
  name: { en: 'tehran', fa: 'تهران' },
  center: [ 51.392904, 35.687976 ],
  location: { type: 'Polygon', coordinates: [ [Array] ] },
  isActive: true
}
 */


cc.cities.searchPoint(1 , 1);

/**
 * null
 */


```



## Project
[کارچین](https://carchainnet.ir/)


