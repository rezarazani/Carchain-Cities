const {cities} = require('../dist');

describe('City', () => {
  
    test('find by Id t1', () => {
        expect(cities.findById('t1')).toHaveProperty("id" , 't1');
    });
  
    test('find by Id t0  notFound', () => {
        expect(cities.findById('t0')).toBeUndefined()
    });

    test('find ', () => {
        expect(cities.find().length).toBeGreaterThanOrEqual(0)
    });

    test('search city ', () => {
        expect(cities.searchPoint(51.427001953125 , 35.67877297088322)).toHaveProperty('id' , 't1')
    });

    test('search city not found', () => {
        expect(cities.searchPoint(0 , 0)).toBeNull()
    });

  });
  