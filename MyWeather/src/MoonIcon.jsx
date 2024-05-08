import React from "react";

// Icon Imports
import FullMoon from '../src/assets/moon-full.svg';
import FirstQuarter from '../src/assets/moon-first-quarter.svg';
import LastQuarter from '../src/assets/moon-last-quarter.svg';
import NewMoon from '../src/assets/moon-new.svg';
import WaningCrescent from '../src/assets/moon-waning-crescent.svg';
import WaningGibbous from '../src/assets/moon-waning-gibbous.svg';
import WaxingCrescent from '../src/assets/moon-waxing-crescent.svg';
import WaxingGibbous from '../src/assets/moon-waxing-gibbous.svg';

function MoonIcon ({ moonphase }) {

    // Moonphase variables
    const fullMoon = moonphase.toLowerCase().includes('full')
    const firstQuarter = moonphase.toLowerCase().includes('first') && moonphase.toLowerCase().includes('quarter')
    const lastQuarter = moonphase.toLowerCase().includes('last') && moonphase.toLowerCase().includes('quarter')
    const newMoon = moonphase.toLowerCase().includes('new')
    const waningCrescent = moonphase.toLowerCase().includes('waning') && moonphase.toLowerCase().includes('crescent')
    const waningGibbous = moonphase.toLowerCase().includes('waning') && moonphase.toLowerCase().includes('gibbous')
    const waxingCrescent = moonphase.toLowerCase().includes('waxing') && moonphase.toLowerCase().includes('crescent')
    const waxingGibbous = moonphase.toLowerCase().includes('waxing') && moonphase.toLowerCase().includes('gibbous')


    function renderMoonIcon(){
        if (fullMoon){
            return FullMoon;
        } else if (firstQuarter){
            return FirstQuarter;
        } else if (lastQuarter){
            return LastQuarter;
        } else if (newMoon){
            return NewMoon;
        } else if (waningCrescent){
            return WaningCrescent;
        } else if (waningGibbous){
            return WaningGibbous;
        } else if (waxingCrescent){
            return WaxingCrescent;
        } else if (waxingGibbous){
            return WaxingGibbous;
        } else {
            // Return a default icon if no match is found
            return DefaultMoonIcon;
        }
    }

    return(
        <img src={renderMoonIcon()} width="64px" height="64px" />
    )
}

export default MoonIcon;