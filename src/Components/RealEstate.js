import { useEffect, useState } from 'react';
import ChooseUserType from './ChooseUserType';



const RealEstate = () => {

    return <div className='section'  id="selectCard">
        <div className='card'><div className='card-body'>
        <h3>Real Estate Promotion</h3>
        <ChooseUserType/>
        </div></div>
    </div>;

}

export default RealEstate;