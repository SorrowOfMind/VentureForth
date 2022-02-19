export interface ICoordinates {
    lat: number,
    lng: number
}

export interface IPlace {
    location_id: string,
    name: string,
    latitude: string,
    longitude: string,
    photo: object | any,
    price_level: string,
    ranking: string,
    awards: object | any,
    cuisine: object | any,
    address: string,
    phone: string,
    web_url: string,
    website_url: string
}

export interface IMapProps {
    coords: ICoordinates,
    setCoords: (value: any) => void,
    setBoundry: (value: any) => void,
    places: IPlace[]
}

export interface IBoundry {
    sw: {lat: string, lng: string},
    ne: {lat: string, lng: string},
}