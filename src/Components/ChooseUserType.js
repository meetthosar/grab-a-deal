import { useState } from 'react';
import DeployDeal from './DeployDeal';
import DeployerOrApplicant from './DeployerOrApplicant';
import GrabDeal from './GrabDeal';

const ChooseUserType = () => {
    const [userType , setUserType] = useState(null);

    return <div className='section' id='chooseType'>
        {userType === null ? <DeployerOrApplicant isDeployer={() => setUserType('Deployer')} isApplicant={ () => setUserType('Applicant')}/> : ""}
        {userType === 'Deployer' ? <DeployDeal/> : ""}
        {userType === 'Applicant' ? <GrabDeal/> : ""}
    </div>;
}

export default ChooseUserType;