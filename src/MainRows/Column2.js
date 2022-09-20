

import logo from '../images/Logo.png';
import patternBox from '../images/Pattern-box.png';

const Column2=() => {
    return (
        <>
        <div className='col'>
                    <div className="col-6">
                        <div className="row" style={{borderColor: "black", borderWidth: "2px", borderRadius:"5%"}}>
                            <div className="col align-self-start">
                            <img src={logo} alt="logo"  />
                            </div>
                        </div>
                        <div className="col">
                            <p style={{fontWeight: "300", fontSize: "18px", alignItems: "left"}}>Powered by: </p>
                            <span style={{textEmphasisStyle:"bold", fontWeight:"300", fontSize: "27px"}}>Zeptolab</span>
                        </div>
                    </div>

                    <div className="col-6">
                            <div className="card" style={{width:"480px", height:"116px", marginTop:"27px"}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontWeight: "500", fontSize: "16px", color:"#685DC5" , padding:"5px"}}>Application closes in</h5>
                                    <p className="card-text" style={{color: "#535353", fontWeight:"300", fontSize: "27px"}}>6 Day  :  22 Hrs  :  56 Min  :  13 Seg </p>
                                </div>
                            </div>
                            <div style={{position:"relative", zIndex:"0", paddingTop:"127px", paddingLeft:"80px"}} >
                                
                                <img src={patternBox} alt="patternBox" />
                                
                            </div>
                            <div className="card" style={{width: "480px", height:"200px", position: "relative", marginTop:"-350px"}}>
                                <div className="card-body" >
                                    <div className="row">
                                        <div className="col" style={{paddingTop:"15px", paddingLeft:"15px"}}>
                                            <h5 className="card-title" style={{fontWeight:"300", fontSize:"16px", color:"#685DC5"}}>Location</h5>
                                            <p className="card-text" style={{color:"#535353", fontWeight:"300", fontSize:"16px"}}>Bangkok</p>
                                        </div>
                                        <div className="col" style={{paddingTop: "15px", paddingLeft:"15px"}}>
                                            <h5 className="card-title" style={{fontWeight: "300", fontSize:"16px", color:"#685DC5"}}>Duration</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight:"300", fontSize:"16px"}}>1 year <br/>Full-Time</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <h5 className="card-title" style={{fontWeight:"300", fontSize:"16px", color:"#685DC5" }}>Start date</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight: "300", fontSize: "16px"}}>30 June 2020</p>
                                        </div>
                                        <div className="col" >
                                            <h5 className="card-title" style={{fontWeight: "300", fontSize: "16px", color:"#685DC5" }}>End Date</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight: "300", fontSize: "16px"}}>3 Aug 2020</p>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>
                    </div>
                </div>
        </>
    )
};

export default Column2;