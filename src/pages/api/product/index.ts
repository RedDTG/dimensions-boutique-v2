import path from 'path';

import { promises as fs } from 'fs';


export default async function handler(req: any, res: any) {


  const jsonDirectory = path.join(process.cwd(), 'data');

  const productsContent = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  let productsData = JSON.parse(productsContent);

  const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
  const colorsData = JSON.parse(colorsContent);

  const typesContent = await fs.readFile(jsonDirectory + '/types.json', 'utf8');
  const typesData = JSON.parse(typesContent);

  const collectionsContent = await fs.readFile(jsonDirectory + '/collections.json', 'utf8');
  const collectionsData = JSON.parse(collectionsContent);

  const artistsContent = await fs.readFile(jsonDirectory + '/artists.json', 'utf8');
  const artistsData = JSON.parse(artistsContent);

  productsData = productsData.products.map((product: { versions: any[], type: number, collection: number, artist: number }) => ({
      ...product,
      versions: product.versions?.map((version: any) => ({
        ...version,
        color: colorsData.colors.find((color: { id: any }) => color.id === version.color)
      })),
      type: typesData.types.find((type: { id: any }) => type.id === product.type),
      collection: collectionsData.collections.find((collection: { id: any }) => collection.id === product.collection),
      artist: artistsData.artists.find((artist: { id: any }) => artist.id === product.artist)
    }))

  res.status(200).json(productsData);

}