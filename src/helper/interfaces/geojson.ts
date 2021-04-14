
export type Point = [number, number];
// export type Polygon = [[[number, number]]]
export type Polygon = Point[][]

export type PolygonGeoJSON = {
    type: 'Polygon',
    coordinates: Polygon 
}


export type PointGeoJSON = {
    type: 'Point',
    coordinates: Point  
}