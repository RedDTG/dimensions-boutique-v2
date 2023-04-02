import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {


    const jsonDirectory = path.join(process.cwd(), 'data');

    const { query } = req;

    const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
    let collectionsData = JSON.parse(collectionsContent);

    const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const productsData = JSON.parse(productsContent);

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    const typesContent = await fs.readFile(jsonDirectory + '/types.json', 'utf8');
    const typesData = JSON.parse(typesContent);

    let collectionData = collectionsData.collections.find((collection: { id: any }) => collection.id === parseInt(query.id));


    collectionData = {
        ...collectionData,
        products: []
    }

    productsData.products.map((product: any) => {
        if (product.collection === collectionData.id) {
            collectionData.products.push(product)
        }
    })

    collectionData = {
        ...collectionData,
        products: collectionData.products.map((product: { versions: any[], type: number }) => ({
            ...product,
            type: typesData.types.find((type: { id: any }) => type.id === product.type),
            versions: product.versions?.map((version: any) => ({
                ...version,
                color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
            }))
        }))
    }

    res.status(200).json(collectionData);

}