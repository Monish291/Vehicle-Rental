import React, { useState } from "react";
import Cars from './Cars';

export default function Carlist() {
    const [k, setk] = useState(false);

    const showcarlist = () => {
        setk(true);
    };
    return (
        <div>
            {
                !k ? (
                    <div 
                        style={{ position: "relative", width: "100vw", height: "100vh", cursor: "pointer" }} 
                        onClick={showcarlist}>
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            style={{top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover",}}>
                            <source src="monishcar.mp4" type="video/mp4" />
                        </video>
                        <div style={{position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)",color: "white",fontSize: "24px", fontWeight: "bold",textAlign: "center", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
                            ✨ Embark on an Unforgettable Car Journey! 🚗💨<br />
                            (Click anywhere to continue)
                        </div>
                    </div>
                ) : (
                    <Cars />
                )
            }
        </div>
    );
}
