import { Artist } from "./artist";
import { Color } from "./color";

export interface Product {
    id: number;
    type: ProductType;
    collection: number;
    title: string;
    description: string;
    image: string;
    versions: Version[];
    isNew: boolean;
    isPopular: boolean;
    size: string;
    artist: Artist;
}

export interface Version {
    color: Color;
    image: string;
    price: number;
}

export interface ProductType {
    id: number;
    name: string;
}