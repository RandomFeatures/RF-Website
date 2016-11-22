import { Downloads } from './downloads';
import { AppBrain } from './appbrain';
import { DownloadSite } from './downloadsite';
import { ScreenShots } from './screenshots';


export class Game {
    id: number;
    game: string;
    type: string;
    system: string;
    version: string;
    downloads: Downloads;
    localurl: string;
    iconimage: string;
    featurelogo: string;
    htmldesc: string;
    appbrain: AppBrain[];
    googleplay: DownloadSite[];
    slideme: DownloadSite[];
    getjar: DownloadSite[];
    amazon: DownloadSite[];
    video: string;
    screenshots: ScreenShots;
}