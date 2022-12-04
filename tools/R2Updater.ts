import unzip from 'unzip-stream';
import {Release} from '../contracts/github/releases';
import axios from 'axios';
import path from 'path';
import { promises as fsPromises, createWriteStream } from 'fs';
import DiscordFixPatch from "./DiscordFixPatch";

export default async function R2Updater(location: string, release: Release):Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Installing latest version of R2...");
            const {data} = await axios.get(release.assets[0].url);
            const zipLocation = data.browser_download_url;
            (await axios.get(zipLocation, {responseType: 'stream'})).data.pipe(unzip.Parse())
                .on('entry', async function (file) {
                    const mkPath = path.resolve(location, file.path);
                    switch (file.type) {
                        case 'File':
                            file.pipe(createWriteStream(mkPath));
                            break;
                        case 'Directory':
                            await fsPromises.mkdir(mkPath, { recursive: true });
                            file.autodrain();
                            break;
                    }
                })
                .once('close', async () => {
                    await DiscordFixPatch(location);
                    resolve();
                });
        } catch(e) {
            reject(e);
        }
    })
}
