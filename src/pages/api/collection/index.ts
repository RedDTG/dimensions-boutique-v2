import path from 'path';

import { promises as fs } from 'fs';
import { Artist } from '@/models/artist';

export default async function handler(req: any, res: any) {


    const jsonDirectory = path.join(process.cwd(), 'data');

    const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
    let collectionsData = JSON.parse(collectionsContent);

    const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    const productsData = JSON.parse(productsContent);

    const artistsContent = await fs.readFile(jsonDirectory + '/artists.json', 'utf8');
    const artistsData = JSON.parse(artistsContent);


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
        products: collection.products.map((product: { artist: Artist, versions: any[], type: number }) => ({
            ...product,
            type: typesData.types.find((type: { id: any }) => type.id === product.type),
            versions: product.versions?.map((version: any) => ({
                ...version,
                color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
            })),
            artist: artistsData.artists.find((artist: { id: any }) => artist.id === product.artist)

        }))
    }))

    res.status(200).json(collectionsData.collections);

}