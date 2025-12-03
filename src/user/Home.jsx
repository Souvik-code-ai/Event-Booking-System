import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100vh", width: "100vw" }}>
            <div style={{ backgroundColor: "rgba(250,250,250,0.1)", width: "100vw", height: "60px" ,display:"inline-block"}}>
                <div id="logo" style={{ backgroundColor: "white", width: "100px", height: "100%", display: "inline-block" }}><img src="/event_logo.png" /></div>
                <div style={{display:"inline-block",backgroundColor:"white",height:"100%",width:"250px",
                    marginLeft:"1282px",marginBottom:"280px",paddingLeft:"20px"}}>
                    <div style={{ display: "inline-block",paddingLeft:"20px" ,paddingTop:"18px"}}>Links</div>
                    <div style={{ display: "inline-block",paddingLeft:"20px",paddingTop:"18px"}}>Services</div>
                    <div style={{ display: "inline-block",paddingLeft:"20px" ,paddingTop:"18px" }}><Link to="/organizer/signin">Sign In</Link></div>
                </div>
            </div>
            <div
                style={{
                    height: "60px", width: "1300px",
                    paddingLeft: "40px", borderRadius: "10px", marginTop: "5px", marginLeft: "95px"
                }}>
                <p style={{ fontFamily: "roboto", fontSize: "40px" }}>Welcome to India's Most Secured & User Friendly Event Booking Platform</p>
            </div>
            <div></div>
        </div>
    )
}
export default HomePage;