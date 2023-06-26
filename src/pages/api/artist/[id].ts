import path from 'path';

import { promises as fs } from 'fs';


export default async function handler(req: any, res: any) {

    const { query } = req;

    const jsonDirectory = path.join(process.cwd(), 'data');

    const artistsContent = await fs.readFile(jsonDirectory + '/artists.json', 'utf8');
    const artistsData = JSON.parse(artistsContent);

    let artistData = artistsData.artists.find((artist: { id: any }) => artist.id === parseInt(query.id));    

    res.status(200).json(artistData);

}