import { City } from '../interface';

/**
 * 
 *    {"type": "Point", "coordinates": [lon, lat]
 * 
 */

export const cities: Array < City > = [
    {
        id : 't1' ,
        countryCode : 'IRN' ,
        countryGlobalName : 'Iran, Islamic Republic of',
        name : {
            en : 'tehran',
            fa : 'تهران'
        },
        center : [51.392904 ,35.687976] ,
        location :  {
          "type": "Polygon",
          "coordinates": [
              [
                  [51.258, 35.822],
                  [50.989, 35.443],
                  [51.184, 35.332],
                  [51.66, 35.728],
                  [51.578, 35.828],
                  [51.258, 35.822]
              ]
          ]
        },
        isActive : true 
    },
    {
        id : 't2' ,
        countryCode : 'IRN' ,
        countryGlobalName : 'Iran, Islamic Republic of',
        name : {
            en : 'isfahan',
            fa : 'اصفهان'
        },
        center : [51.670188 ,32.666113] ,
        location : {
          "type": "Polygon",
          "coordinates": [
              [
                  [51.406, 32.791],
                  [51.365, 32.491],
                  [51.879, 32.381],
                  [51.985, 32.801],
                  [51.406, 32.791]
              ]
          ]
      } ,
        isActive : true 
    },
    {
        id : 't3' ,
        countryCode : 'IRN' ,
        countryGlobalName : 'Iran, Islamic Republic of',
        name : {
            en : 'mashhad',
            fa : 'مشهد'
        },
        center : [59.616919 ,36.291884] ,
        location : {
          "type": "Polygon",
          "coordinates": [
              [
                  [59.344, 36.528],
                  [59.365, 36.363],
                  [59.687, 36.071],
                  [59.998, 36.299],
                  [59.722, 36.531],
                  [59.344, 36.528]
              ]
          ]
        },
        isActive : false 
    },
    

]