// import PatternCircle from '../images/Pattern-circle.png';
// import boy from '../images/boy.png';

const Cards=() => {
    return (
            <>
                <div className="container" style={{paddingTop: "261px", paddingBottom: "500px"}}>
                    <div className="grid-container" style={{display: "grid",gridTemplateColumns: "auto auto auto",gap: "10px",padding: "10px"}}>
                        <div className="item1" style={{ gridColumnStart: "1",gridColumnEnd: "2",gridRowStart: "1",gridRowEnd: "3",padding: "20px 0",fontSize: "30px"}}>
                            <div className="card" style={{position: "inherit",width: "320px",height: "524px",paddingRight: "0px"}}>
                                <div className="card-body" >
                                    {/* <!-- row1 --> */}
                                    <div className="row"> 
                                        {/* <!-- row has two columns--> */}
                                        <div className="col" style={{ paddingTop: "15px", marginLeft: "15px"}}>
                                            {/* <!-- first column --> */}
                                            <h5 className="card-title" style={{fontWeight: 500, fontSize: "16px", color: "#685DC5"}}>Scholarship value</h5>
                                            <p className="card-text" style={{ color: "#535353",fontWeight: 300,fontSize: "48px",paddingBottom: "188px"}}>€31,300</p>
                                            <hr/>
                                        </div>   
                                    </div>
                                    {/* <!-- row2 --> */}
                                    <div className="row">
                                        {/* <!-- contains 2 columns --> */}
                                        <div className="col">
                                            <h5 className="card-title" style={{fontWeight: 500, fontSize: "16px", color: "#685DC5" }}>Tuition covered</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px" }}>€20,90</p>
                                        </div>
                                        <div className="col">
                                            <h5 className="card-title" style={{fontWeight: 500, fontSize: "16px", color: "#685DC5"}}>Remaining</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px"}}>€2,000</p>
                                        </div>
                                    </div>
                                    {/* <!-- row3 --> */}
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title" style={{fontWeight: 500,fontSize: "16px",color: "#685DC5",paddingTop: "23px"}}>Living stipend</h5>
                                            <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px"}}>€8,400(€700/month)</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="item2" style={{padding: "20px 0", marginLeft: "40px"}}>
                                    <div className="card" style={{position: "relative", width: "274px", height: "320px"}}>
                                        <div className="card-body" >
                                            <div className="row"> 
                                                <div className="col" style={{paddingTop: "15px", paddingLeft: "15px"}}>
                                                    <h5 className="card-title" style={{fontWeight: 500, fontSize: "16px", color: "#685DC5" }}>Study commitment</h5>
                                                    <p className="card-text" style={{color: "#535353",fontWeight: 300,fontSize: "26px",paddingBottom: "22px"}}>3 hours / day</p>
                                                    <hr style={{width: "2em", alignSelf: "left"}}/>
                                                    <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px"}}>You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time. </p>
                                                </div>   
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="item3" style={{padding: "20px 0", marginRight: "20px", marginLeft: "80px"}}>
                                    <div className="card" style={{position: "relative", width: "274px", height: "320px"}}>
                                        <div className="card-body" >
                                            <div className="row"> 
                                                <div className="col" style={{paddingTop: "15px", paddingLeft: "15px"}}>
                                                    <h5 className="card-title" style={{fontWeight: 500, fontSize: "16px", color: "#685DC5" }}>Work commitment</h5>
                                                    <p className="card-text" style={{color: "#535353",fontWeight: 300,fontSize: "26px",paddingBottom: "22px"}}>4 hours / day</p>
                                                    <hr style={{ width: "2em", alignSelf: "left"}}/>
                                                    <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px"}}>Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.   </p>
                                                </div>   
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                            <div className="row" style={{paddingLeft: "40px", paddingRight: "50px"}}>
                                <h2 style={{width: "100%",textAlign: "center",borderBottom: "1px solid #DADADA",lineHeight: "0.1em",margin: "10px 0 10px",fontSize: "16px",fontWeight: 500}}><span style={{background: "#fff", padding: "0 30px"}}>GRADUATION</span></h2>
                                
                            </div>
                            <div className="row">
                                <div className="item4" style={{gridColumnStart: "2",gridColumnEnd: "4",gridRowStart: "2",gridRowEnd: "3",padding: "20px 0"}}>
                                    <div className="card" style={{position: "relative", width: "680px", height: "178px"}}>
                                        <div className="card-body" >
                                            <div className="row"> 
                                                <div className="col" style={{paddingTop: "15px", paddingLeft: "15px"}}>
                                                    <h5 className="card-title" style= {{fontWeight: 500, fontSize: "16px", color: "#685DC5"}}>A full-time contract</h5>
                                                    <p className="card-text" style={{ color: "#535353",fontWeight: 300,fontSize: "26px",paddingBottom: "5px"}}>1 Year / Full-Time</p>
                                                    <hr style={{ width: "2em", alignSelf: "left"}}/>
                                                    <p className="card-text" style={{color: "#535353", fontWeight: 300, fontSize: "16px"}}>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
                                                </div>   
                                            </div>
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
export default Cards;