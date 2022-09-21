
import React from "react";
let count = 0;

const Footer=() => {
    const now = new Date().toLocaleTimeString();
    let [time, setTime] = React.useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
        count++;
        //console.log(count);
        //console.log(new Date().getMilliseconds());
    }

    setInterval(updateTime, 1000);
    
    return (
        <>
        
        {/* <br style="paddingTop:300px"/> */}
        <footer className="footer"  >
            <div className="row" style={{ paddingTop:"22px", paddingLeft:"22px"}}>
                <div className="col" >
                    <p style={{fontWeight:"300",fontSize:"16px",color:"#535353"}}><span style={{fontWeight:500}}>Zeptolab</span><br/>Marketing Performance</p>
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
                <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Application closes in</span><br/>{time}</p>
                    {/* <p style={{fontWeight:"300",fontSize:"16px",color:"#535353" }}><span style={{fontWeight:"500"}}>Application closes in</span><br/>6 Day   :   22 Hrs   :   56 Min{time}</p> */}
                </div>
            </div>
        </footer>
        </>
    )
};
export default Footer;
