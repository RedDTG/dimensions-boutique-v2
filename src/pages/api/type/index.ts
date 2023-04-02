import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {

    const jsonDirectory = path.join(process.cwd(), 'data');

    const typesContent = await fs.readFile(jsonDirectory + '/types.json', 'utf8');
    let typesData = JSON.parse(typesContent);

    const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const productsData = JSON.parse(productsContent);

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
    const collectionsData = JSON.parse(collectionsContent);

    typesData.types = typesData.types.map((type: any) => ({
        ...type,
        products: []
    }))

    typesData.types.map((type: any) => {
        productsData.products.map((product: any) => {
            if (product.type === type.id) {
                type.products.push(product)
            }
        })
    })

    typesData.types = typesData.types.map((type: any) => ({
        ...type,
        products: type.products.map((product: { versions: any[], type: number, collection: number }) => ({
            ...product,
            versions: product.versions?.map((version: any) => ({
                ...version,
                color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
            })),
            collection: collectionsData.collections.find((collection: { id: any }) => collection.id === product.collection)
        }))
    }))


    res.status(200).json(typesData.types);

}