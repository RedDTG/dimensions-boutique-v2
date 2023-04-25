interface Product {
    id: number;
    type: number;
    collection: number;
    title: string;
    description: string;
    image: string;
    versions: Version[];
    isNew: boolean;
    isPopular: boolean;
}

interface Version {
    color: Color;
    image: string;
    price: number;
}