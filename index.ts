import findTitanfallLocation from "./tools/findTitanfallLocation";
import getReleases from './tools/getReleases';
import versionManager from "./tools/versionManager";
import R2Updater from "./tools/R2Updater";
import launch from "./tools/launch";

(async () => {
    let location:string;
    try {
        location = await findTitanfallLocation();
    } catch(e) {
        console.log(`Titanfall 2 could not be found on your PC.`);
        process.exit(1);
    }
    console.log('Downloading R2 Release list...');
    const releases = await getReleases();
    const latest = releases[0];
    const latestVersion:number = +latest.name.replace ( /[^0-9]/g, '' );
    const VM = versionManager(location);
    const currentVersion:number = await VM.get();
    if (currentVersion === latestVersion) {
       await launch(location);
    }
    if (!currentVersion || currentVersion < latestVersion) {
        await R2Updater(location, latest);
        await VM.set(latestVersion);
        await launch(location);
    }
})()
