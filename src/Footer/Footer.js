
const Footer=() => {
    return (
        
        <footer className="footer" style={{position:"fixed",backgroundColor:"white",height:"86.08px",bottom:"0",width:"100%",borderColor:"#DADADA",border:"1px", boxShadow:"0px -4px 5px 0px rgba(0,0,0,0.25)"}}>
            <div className="row" style={{ paddingTop:"22px", paddingLeft:"22px"}}>
                <div className="col" >
                    <p style={{fontWeight: "300",fontSize:"16px",color:"#535353", }}><span style={{fontWeight:"500"}}>Zeptolab</span><br/>Marketing Performance</p>
                </div>
                <div className="col">
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353"}}><span style={{fontWeight:500}}>Location</span><br/>Bangkok</p>
                </div>
                <div className="col">
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Duration</span><br/>1 Year Full-Time</p>
                </div>
                <div className="col">
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Start date</span><br/>3 Aug 2020</p>
                </div>
                <div className="col">
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Application deadline</span><br/>30 June 2020</p>
                </div>
                <div className="col">
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Application closes in</span><br/>6 Day   :   22 Hrs   :   56 Min</p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;
