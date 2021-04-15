import { Multilingual } from "../../helper/interfaces/multilingual";
import { PolygonGeoJSON, Point } from "../../helper/interfaces/geojson";
import { CountryCode } from '../data/code'
import { CountryName } from '../data/name'

export type Country = {
    id : String ,
    code : CountryCode ,
    globalName : CountryName ,
    name : Multilingual ,
    center : Point ,
    location : PolygonGeoJSON ,
    isActive: boolean,
}


export interface CountryInterface {
    findById(id : Country['id']) : Country | undefined ;
    findByCode(code : Country['code']) : Country | undefined  ;
    find(filter : Partial<Country>) : Country[]  ;
    searchPoint(lon : number , lat : number ) : Country | null  ;

}