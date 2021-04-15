const {countries} = require('../dist');

describe('Country', () => {
  
    test('find by Id t1', () => {
        expect(countries.findById('c1')).toHaveProperty("id" , 'c1');
    });
  
    test('find by Id t0  notFound', () => {
        expect(countries.findById('c0')).toBeUndefined()
    });

    test('find ', () => {
        expect(countries.find().length).toBeGreaterThanOrEqual(0)
    });

    test('search country ', () => {
        expect(countries.searchPoint(51.427001953125, 35.67877297088322)).toHaveProperty('id' , 'c1')
    });

    test('search country not found', () => {
        expect(countries.searchPoint(0 , 0)).toBeNull()
    });

  });
  