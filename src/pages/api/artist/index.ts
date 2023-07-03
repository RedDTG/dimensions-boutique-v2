import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {


    const jsonDirectory = path.join(process.cwd(), 'data');

    const artistsContent = await fs.readFile(jsonDirectory + '/artists.json', 'utf8');
    const artistsData = JSON.parse(artistsContent);

    res.status(200).json(artistsData.artists);

}