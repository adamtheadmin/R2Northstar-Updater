import { promises as fsPromises } from 'fs';

const locations: string[] = [
    `C:\Program Files (x86)\Origin Games\Titanfall2`,
    `C:\Program Files (x86)\Steam\steamapps\common\Titanfall2`,
    `C:\Program Files\EA Games\Titanfall2`
];

export default async function findTitanfallLocation():Promise<string> {
    return "/Users/adam/Desktop/test";
    return "/Users/adam/Library/Application Support/CrossOver/Bottles/Origin/drive_c/Program Files (x86)/Origin Games/Titanfall2";
    for (const location of locations) {
        try {
            await fsPromises.access(location);
            return location;
        } catch (e) { }
    }
    throw new Error("Could not found Titanfall 2 location");
}
