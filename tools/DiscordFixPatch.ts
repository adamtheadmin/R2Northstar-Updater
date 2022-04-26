import { promises as fsPromises } from 'fs';
import path from "path";
import os from 'os';

export default async function DiscordFixPatch(location: string) {
    try {
        await fsPromises.access(os.homedir() + '/AppData/Local/Discord/Update.exe');
    } catch (e) {
        console.log('Uninstalling Discord Plugin...');
        await fsPromises.unlink(path.join(location, '/R2Northstar/plugins/DiscordRPC.dll'));
    }
}
