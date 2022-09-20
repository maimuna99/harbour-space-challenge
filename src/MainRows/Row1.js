
import icon from '../images/Icon.png'; 
import logo from '../images/Logo.png';
import patternBox from '../images/Pattern-box.png';

const Row1=() => {
    return (
        <>
        
        <div className="container" style={{paddingTop:"261px"}} >
            <div className ="row">
                <div className="col-6">
                    <img src={icon} alt="icon"  style={{width:"206px", alignItems:"left", marginLeft:"260px", marginTop: "-80px",position:"absolute",zIndex:"0"}} />
                    <p  style={{ fontSize:"48px", fontWeight:"500",fontFamily:"Apercu Pro", color:"#685DC5"}}>
                        Interaction Design 
                        <br/>
                        Apprenticeship
                    </p>
                    <p className="col" style={{color: "#535353", textEmphasisStyle:"bold", maxWidth: "440px", fontSize: "22px"}}>
                        A fully funded work-study program to launch your tech career 
                    </p>
                    <p className="col" style={{color: "#535353", maxWidth:"440px", fontSize:"22px", paddingTop:"40px", fontWeight:"300"}}>
                        Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.  
                    </p>
                    <p className="col" style={{color: "#535353", maxWidth:"440px",paddingTop:"40px", fontSize:"22px", fontWeight:"300"}}>
                        <span style={{textEmphasisStyle: "bold",fontWeight:"500"}}>Position: </span>
                        Marketing Performance
                    </p>
                        <br/>
                        <button style={{background:"#685DC5", borderRadius: "29px", border: "none", color:"white", height: "58px", width:"166px"}}>Apply Now</button>
                </div>
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
        </div>
</>
)
};
export default Row1;