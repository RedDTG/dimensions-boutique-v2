import path from 'path';

import { promises as fs } from 'fs';


export default async function handler(req: any, res: any) {

    const { query } = req;

    const jsonDirectory = path.join(process.cwd(), 'data');

    const colorsContent = await fs.readFile(jsonDirectory + '/colors.json', 'utf8');
    const colorsData = JSON.parse(colorsContent);

    let colorData = colorsData.colors.find((color: { id: any }) => color.id === parseInt(query.id));    

    res.status(200).json(colorData);

}