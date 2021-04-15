import { City , CityInterface} from '../interface';
import { cities } from '../data';
import * as _ from "lodash";
import * as turf from "@turf/turf";

export class CityClass implements CityInterface {
  constructor(private _cites: Array <City>) {}


  public findById(id: String): City | undefined {
    const result =  _.find(this._cites , {id : id});
      return result ;
  }

  public find(filter: Partial<City>): City[] {
    return _.filter(this._cites, filter);

  }

  public searchPoint(lon: number, lat: number): City | null {

    let result : City |null = null ;

    const pt = turf.point([lon, lat]);


    _.forEach(this._cites ,function(c){
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


export const CityMethods : CityClass = new CityClass(cities)