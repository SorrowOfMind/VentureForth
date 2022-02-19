export interface ICoordinates {
    lat: number,
    lng: number
}

export interface ISpot {
    name: string
}

export interface IPlace {
    location_id: string,
    name: string,
    latitude: string,
    longitute: string
}

export interface IMapProps {
    coords: ICoordinates,
    setCoords: (value: any) => void,
    setBoundry: (value: any) => void
}