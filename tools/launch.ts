import {execFile} from "child_process";
import path from "path";

export default function launch(location: string) {
    const launchPath = path.resolve(location, 'NorthstarLauncher.exe');
    console.log(`Launching ${launchPath}`);
    execFile(launchPath);
}
