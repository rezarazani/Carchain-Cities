import { Country, CountryInterface } from '../interface';
import { countries } from '../data';
import { CountryCode } from '../data/code';
import * as _ from "lodash";
import * as turf from "@turf/turf";


export class CountryClass implements CountryInterface {
  constructor(private _countries: Array <Country>) {}
 

  public findById(id: String): Country | undefined  {
    return  _.find(this._countries , {id : id});
  }

  public findByCode(code: CountryCode): Country | undefined{
    return  _.find(this._countries , {code : code});
  }

  public find(filter: Partial<Country>): Country[] {
    return _.filter(this._countries, filter);
  }

  public searchPoint(lon: number, lat: number): Country | null {
    
    let result : Country |null = null ;

    const pt = turf.point([lon, lat]);


    _.forEach(this._countries ,function(c){
        let poly = turf.polygon(c.location.coordinates);

        const isInPoly = turf.booleanPointInPolygon(pt, poly);

        if(isInPoly){
          result = c ;
          return false ;
        }

    });

    return result ;


  }

   
}


export const CountryMethods : CountryClass = new CountryClass(countries)