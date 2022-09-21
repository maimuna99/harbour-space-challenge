
import React, { useEffect, useState } from "react";

const Header=() => {
    //initiating usestates
    const [title, setTitle] = useState("");

    //initiating use state
    useEffect(() => {
        const url = "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                // console.log(json.meta.title);
                setTitle(json.meta.title);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div className="header-h1" style={{backgroundColor: "#685DC5", width:"1440px",height:"60.08px"}} >
            <div className="row" > 
                <br/>
                <div className="col-sm-9" style={{paddingLeft:"5em", paddingTop:"2em",color: "white"}}>{title}
                    {/* <span style={{fontSize: "11px", fontStyle:"normal"}} >/INTERACTION DESIGN
                    </span> */}
                </div>
                <div className="col-sm-3"  >
                    <div className="btn" style={{background: "#4fa16d", borderRadius: "50%", height:"100px", width:"100px", textAlign: "center", color:"white",  textJustify: "center"}}>
                        <br/>
                        <span><br/>
                        Apply
                        <br/>
                        now
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;