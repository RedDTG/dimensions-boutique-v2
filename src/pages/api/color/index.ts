import path from 'path';

import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {


    const jsonDirectory = path.join(process.cwd(), 'data');

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    res.status(200).json(colorsData.colors);

}