import axios from "axios";
import {Release} from "../contracts/github/releases";

export default async function getReleases():Promise<Release[]> {
    const {data} = await axios.get("https://api.github.com/repos/R2Northstar/Northstar/releases");
    return data;
}
