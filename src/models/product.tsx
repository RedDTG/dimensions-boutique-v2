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