import PatternCircle from '../images/Pattern-circle.png';
import boy from '../images/boy.png';
const Row2=() => {
    return (
        <>
        <div className="container" >
            <div className="row" style={{marginTop:"182px"}}>
                    {/* <!-- row contains two columns --> */}
                <div className="col-6" >
                    {/* <!-- first column --> */}
                    <img src={PatternCircle} alt="PatternCircle" style={{position:"absolute"}}  />
                    <img src={boy} alt="boy" style={{position:"relative",top:"29px",left:"29px",borderRadius:"50%"}}  />
                </div>
                    {/* <!-- secound column --> */}
                <div className="col-6">
                    <p className="top-left" style={{fontSize:"48px", fontWeight:"500",fontFamily: 'Apercu Pro', color: "#685DC5", paddingLeft:"30px"}}>
                        About the 
                        <br/>
                        apprenticeship
                    </p>
                    <p className="col" style={{color:"#535353", maxWidth:"4790px",fontSize:"22px", paddingTop:"230px",fontWeight:"300"}}>Our scholarships
                        are designed to give talented and driven young people from any background access to top-class education,
                        experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.   
                    </p>
                </div>
            </div>
        </div>
    </>
)
};
export default Row2;