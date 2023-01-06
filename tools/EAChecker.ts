import { promises as fsPromises } from 'fs';
import child_process from 'child_process';

async function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default async function EAChecker():Promise<void> {
    const EAAppPath:string = 'C:\\Program Files\\Electronic Arts\\EA Desktop\\EA Desktop\\EALauncher.exe';
    try {
        await fsPromises.access(EAAppPath);
        child_process.spawn(EAAppPath, {
            detached: true,
            stdio: 'ignore',
        });
        console.log('Waiting for EA App...');
        await sleep(5000);
    } catch (e) {
        return;
    }
}
