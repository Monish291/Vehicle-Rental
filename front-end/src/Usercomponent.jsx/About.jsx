import { useState, useEffect } from "react";
function Homies({add}) {
    return(
        <>
        <h1>Welcome to the page where you can take vehicles for rental!</h1>
        <p><strong>This is the page where you can rent the vehicles and start your journey.</strong></p>
        <center>
        <img src={add} style={{ height: "400px", width: "600px", borderRadius: "5px" }} alt="Store" height={260} width={200} />
        </center>
        </>
    )
}
export default function Home() {
    const images =[
        {
            name : "cars",
            add : "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name : "bikes",
            add : "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name : "cars",
            add : "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name : "bikes",
            add : "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
    }, []);
    return(
        <div className="testi">
              <Homies  add={images[currentIndex].add}/>
        </div>
    )
}