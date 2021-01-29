import React from 'react'
import { InfoSection, Pricing } from '../../components/'
import {
    homeObjThree,
    homeObjFour
} from './Data'
const Services = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    );
};

export default Services
