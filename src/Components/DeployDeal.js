import React from 'react';
import { useEffect, useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));


const DeployDeal = () => {
    const [tokenName, setTokenName] = useState(null);
    const [tokens, setTokens] = useState(2);
    // const [token, setToken] = useState(0);
    const [deadline,setDeadline] = useState(100);
    const [readyMessage, setReadyMessage] = useState("");
    const [contractInfo, setContractInfo] = useState(null);
    const [deployerAcc, setDeployerAcc] = useState(null);
    const [contract, setContract] = useState(null);
    const [tokenId, setTokenId] = useState(null);
    

    const deployDeal = async() => {

        const account = await reach.getDefaultAccount(reach.parseCurrency(1000));
        setDeployerAcc(account);
        const balAtomic = await reach.balanceOf(account);       
        const balance = await reach.formatCurrency(balAtomic, 4);

        const contract = await account.contract(backend);
        await setContract(contract);

        const token = await reach.launchToken(account, tokenName, tokenName, {supply : tokens});
        await setTokenId(token.id.toString());

        if ( reach.connector === 'ETH' || reach.connector === 'CFX' ) {
            const gasLimit = 5000000;
            account.setGasLimit(gasLimit);
        } else if ( reach.connector == 'ALGO' ) {
        
            await account.tokenAccept(token.id);
        
        }

        // await token.mint(account, reach.parseCurrency(100).mul(tokens));

        // await setToken(token);

        const id = token.id
        console.log(id.toString());

        backend.Deployer(contract, Object({deadline: deadline, token : id, units: tokens, ready : ready, seeApplicants:seeApplicants}))
        
        const contractInfo = JSON.stringify( await contract.getInfo(), null, 2);
        setContractInfo(contractInfo);
        
    }

    const proposeOffer = async () => {
        
        // return [token.id, tokens];
    }

    const ready = () => {
        setReadyMessage("Ready for applicants");
    }

    const seeApplicants = (address) => {
        setReadyMessage(readyMessage + '\n' + tokenName+ ' Token sent to '+address);
    }

    return <div className='card'>
                
                <div className='card-body'>
                <h3 className='text-warning font-weight-bold'>
                    Deployer
                </h3>
                    { readyMessage !== "" ?
                    <div class="alert alert-success" role="alert">
                               {readyMessage}
                    </div> : ""}

                    {tokenId !== null ?  <p>Token Id : {tokenId}</p> : "" }   

                    {contractInfo !== null ? <p>Contract Info - {contractInfo}</p> : "" }
                
                    {contractInfo === null ?
                        <div>
                            <div className='form-group'>
                                <label>Token Name</label>
                                <input type="text" placeholder='Token Name' className='form-control' value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                            </div>
                            <div className=' form-group'>
                                <label>Number of Tokens</label>
                                <input type="text" placeholder='Number of Tokens' className='form-control' value={tokens} onChange={(e) => setTokens(e.target.value)} />
                            </div>
                            <div className=' form-group'>
                                <label>Deadline</label>
                                <input type="text" placeholder='Dead Line' className='form-control' value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                            </div>
                            <div className=' form-group'>
                                <button className='btn btn-success' onClick={deployDeal}>Submit</button>
                            </div>
                        </div>
                    : ""}
                </div>

        </div>;

}

export default DeployDeal;