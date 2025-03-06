import React, { useState } from "react";
import Bikes from "./Bikes";
export default function Bikeslist() {
    const [k, setk] = useState(false);
    const showbikelist = () => {
        setk(true);
    };
    return (
        <div>
            {
                !k ? (
                    <div
                        style={{ position: "relative", width: "100vw", height: "100vh", cursor: "pointer" }} 
                        onClick={showbikelist} >
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            style={{ top: 0, left: 0, width: "100vw", height: "650px", objectFit: "cover",}} >
                            <source src="projectvideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div style={{ position: "absolute", top: "50%",left: "50%",transform: "translate(-50%, -50%)", color: "white", fontSize: "24px",fontWeight: "bold",textAlign: "center",textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            🏍️ Embrace the Thrill of a Bike Journey! 🌬️🏞️<br />
                            <small>(Click anywhere to continue)</small>
                        </div>
                    </div>
                ) : (
                    <Bikes />
                )
            }
        </div>
    );
}
