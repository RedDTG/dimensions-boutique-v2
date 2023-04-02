import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {


    const jsonDirectory = path.join(process.cwd(), 'data');

    const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
    let collectionsData = JSON.parse(collectionsContent);

    const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const productsData = JSON.parse(productsContent);

    collectionsData.collections = collectionsData.collections.map((collection: any) => ({
        ...collection,
        products: []
    }))

    collectionsData.collections.map((collection: any) => {
        productsData.products.map((product: any) => {
            if (product.collection === collection.id) {
                collection.products.push(product)
            }
        })
    })

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    const typesContent = await fs.readFile(jsonDirectory + '/types.json', 'utf8');
    const typesData = JSON.parse(typesContent);

    collectionsData.collections = collectionsData.collections.map((collection: any) => ({
        ...collection,
        products: collection.products.map((product: { versions: any[], type: number }) => ({
            ...product,
            type: typesData.types.find((type: { id: any }) => type.id === product.type),
            versions: product.versions?.map((version: any) => ({
                ...version,
                color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
            }))
        }))
    }))

    res.status(200).json(collectionsData.collections);

}