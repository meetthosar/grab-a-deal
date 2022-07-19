import { useEffect, useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));


const GrabDeal = () => {
    const [contractInfo, setContractInfo] = useState(null);
    const [tokenId, setTokenId] = useState(null);
    const [timesUpMessage, setTimeUpMessage] = useState(null);
    const [message, setMessage] = useState(null);
    const [account, setAccount] = useState(null);

    const grabDeal = async() => {

        let promiseToGrabDeal = new Promise( async (grabADeal) => {
            grabADeal();
        });

        promiseToGrabDeal.then(
        async () => {
            const account =  await reach.getDefaultAccount(reach.parseCurrency(1000));
            setAccount(account);
            await getAccountBalance(account);
            const balAtomic = await reach.balanceOf(account);       
            const balance = await reach.formatCurrency(balAtomic, 4);
            await account.tokenAccept(tokenId);
            const contract = await account.contract(backend, JSON.parse(contractInfo));
            // const interaction = {applyTheOffer, timesUp}

            await contract.apis.Applicant.applyTheOffer(account.getAddress());
            await getAccountBalance(account);
            await getTokenBalance(account);
        } ).catch(e => { 
            if(e.message.includes('Already')) setTimeUpMessage("You have already received the token");
            else setTimeUpMessage("Time up or List is full")
        });
        // backend.Applicant(contract, Object(interaction))

    }

    const applyTheOffer = (address) => {
        return true;
    }

    const timesUp = () => {
        setTimeUpMessage("Time up or List is full");
        return true;
    }

    useEffect( () => {
        getAccountBalance(account);
    }, [message])

    const getAccountBalance = async(account) => {
        let balance = 0;
        // let tokenBalance = 0;
        if(account !== null){
            balance = await reach.balanceOf(account);
        }
        setMessage("Account balance is " + reach.formatCurrency(balance, 6)  );
    }
    const getTokenBalance = async(account) => {
        const [amt, balances] = await reach.balancesOf(account,[tokenId]);
        // setMessage(message +'<br>' + balances)
        console.log(balances);
    }

    return <div className='card'>
                
                <div className='card-body'>
                <h3 className='text-warning font-weight-bold'>
                    Applicant
                </h3>
                    { timesUpMessage !== null ?
                    <div class="alert alert-danger" role="alert">
                                {timesUpMessage} (Not getting token balance raised issue in github)
                    </div> : ""}

                    
                    <div class="alert alert-info" role="alert">
                       {message}
                    </div> 

                    <div className='form-group'>
                        <label>Token ID</label>
                        <input type="text" placeholder='Token ID' className='form-control' value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Contract Info</label>
                        <input type="text" placeholder='Contract Info' className='form-control' value={contractInfo} onChange={(e) => setContractInfo(e.target.value)} />
                    </div>
                    
                    <div className='row form-group'>
                        <button className='btn btn-success' onClick={grabDeal}>Submit</button>
                    </div>
                </div>

        </div>;

}

export default GrabDeal;