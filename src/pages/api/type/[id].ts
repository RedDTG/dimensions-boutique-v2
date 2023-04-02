import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {

    const { query } = req;

    const jsonDirectory = path.join(process.cwd(), 'data');

    const typesContent = await fs.readFile(jsonDirectory + '/types.json', 'utf8');
    const typesData = JSON.parse(typesContent);

    const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const productsData = JSON.parse(productsContent);

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
    const collectionsData = JSON.parse(collectionsContent);

    let typeData = typesData.types.find((type: { id: any }) => type.id === parseInt(query.id));


    typeData = {
        ...typeData,
        products: []
    }

    productsData.products.map((product: any) => {
        if (product.type === typeData.id) {
            typeData.products.push(product)
        }
    })

    typeData = {
        ...typeData,
        products: typeData.products.map((product: { versions: any[], type: number, collection: number }) => ({
            ...product,
            versions: product.versions?.map((version: any) => ({
                ...version,
                color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
            })),
            collection: collectionsData.collections.find((collection: { id: any }) => collection.id === product.collection)
        }))
    }


    res.status(200).json(typeData);

}