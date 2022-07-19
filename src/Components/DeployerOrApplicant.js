
const DeployerOrApplicant = (props) => {
    return <div className='row icon-cards-row'>
    <div className='col-md-4'>
<a href="#selectCard" className="card" onClick={props.isDeployer}>
                                <div className="card-body text-center">
                                    <i className="iconsminds-king-2"></i>
                                    <p className="card-text font-weight-semibold mb-0">Deployer?</p>
                                    
                                </div>
                            </a>

        {/* <button className='btn btn-info' >Deployer?</button> */}
    </div>
    <div className='col-md-4 align-middle text-center font-weight-bold text-warning'>OR</div>
    <div className='col-md-4'>
    <a href="#selectCard" className="card" onClick={props.isApplicant}>
                                <div className="card-body text-center">
                                    <i className="iconsminds-mens"></i>
                                    <p className="card-text font-weight-semibold mb-0">Applicant?</p>
                                    
                                </div>
                            </a>
    </div>
</div>;
}

export default DeployerOrApplicant;