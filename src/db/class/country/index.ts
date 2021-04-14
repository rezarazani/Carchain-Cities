import { Country, CountryInterface } from '../../interface/country';
import { countries } from '../../data/country';
import { CountryCode } from '../../data/country/code';
import * as _ from "lodash";
import * as turf from "@turf/turf";


export class CountryClass implements CountryInterface {
  constructor(private _countries: Array <Country>) {}
 

  public findById(id: String): Country  {
    const result =  _.find(this._countries , {id : id});
    if(!result){
      throw new Error("Country not found");
    }
    return result ;
  }

  public findByCode(code: CountryCode): Country {
    const result =  _.find(this._countries , {code : code});
    if(!result){
      throw new Error("Country not found");
    }
    return result ;

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