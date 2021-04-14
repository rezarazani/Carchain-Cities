import { Multilingual } from "../../../helper/interfaces/multilingual";
import { Point, PolygonGeoJSON } from "../../../helper/interfaces/geojson";
import { Country } from "../country";

export type City = {
    id : String ,
    Country : Country   ,
    name : Multilingual ,
    center : Point ,
    location : PolygonGeoJSON ,
    isActive: boolean,
}



export interface CityInterface {
    findById(id : City['id']) : City | undefined  ;
    find(filter : Partial<City>) : City[]  ;
    searchPoint(lon : number , lat : number ) : City  | null ;

}