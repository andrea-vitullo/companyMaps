/// <reference types="@types/google.maps" />

import { User } from './user';
import { Company } from './Company';

let map: google.maps.Map;
async function initMap(): Promise<void> {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

    map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
        }
    });
}

initMap();
