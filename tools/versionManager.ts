import { promises as fsPromises } from 'fs';
import path from "path";

const version_filename = "VERSION";

export default function versionManager(location: string) {
    const file:string = path.resolve(location, version_filename);
    return {
        async get():Promise<number> {
            try {
                await fsPromises.access(file);
                const version = await fsPromises.readFile(file);
                return +version;
            } catch(e) {
                return 0;
            }
        },
        async set(version: number):Promise<void> {
            await fsPromises.writeFile(file, version.toString());
        }
    }
}
