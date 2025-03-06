import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
const bikeData = [
    {
        id: 1,
        name: "Royal Enfield gt650",
        image: "https://i.pinimg.com/474x/dc/95/b2/dc95b22fd4ba68530a22f0891a7efcae.jpg",
        price: 2000,
        rating: 3.5
    },
    {
        id: 2,
        name: "Yamaha R15 v4",
        image: "https://i.pinimg.com/236x/c4/4b/5e/c44b5e8bd545aab4be58ef3b810b1cd1.jpg",
        price: 1000,
        rating: 3.5
    },
    {
        id: 3,
        name: "Yamaha Mt15",
        image: "https://i.pinimg.com/474x/d7/69/25/d769258d6cd84b7aeab33e4e11a66b0e.jpg",
        price: 1000,
        rating: 4
    },
    {
        id: 4,
        name: "Royal Enfield classic350",
        image: "https://i.pinimg.com/236x/e7/6c/15/e76c15dd3983cabe7f708c0d8c4ff66f.jpg",
        price: 1200,
        rating: 4
    },
    {
        id: 5,
        name: "Jawa Bobber 42",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNmqiRwdnA7Ic5k7EZFgkpclSwHLb3yjJqw&s",
        price: 1000,
        rating: 4.5
    },
    {
        id: 6,
        name: "Husquarna Vitpilen",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVmJw35iMq3bGb67loum-cWKOvPF517w8lw&s",
        price: 1000,
        rating: 4.5
    },
    {
        id: 7,
        name: "Duke",
        image: "https://i.pinimg.com/236x/75/25/ed/7525ed5a98e8b80bcbf6130a18ef975b.jpg",
        price: 1000,
        rating: 4.5
    },
    {
        id: 8,
        name: "NS 200",
        image: "https://i.pinimg.com/236x/e3/29/96/e32996a083d7d5d8db2fee092f639e04.jpg",
        price: 1000,
        rating: 4.5
    }
];

function Bike({ bike }) {
    return (
        <table>
            <tbody className="box">
                <tr>
                    <td>
                        <img src={bike.image} alt="bikes" height={250} width={250} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>{bike.name}</strong><br />
                        <strong>Price : <FaRupeeSign />{bike.price} / day</strong><br />
                        <strong>RATING<TiStar /> : {bike.rating}/5</strong><br />
                        <Link to={`/book/${bike.id}`}><button>Book Now</button></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bikes() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBikes = bikeData.filter(bike =>
        bike.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
            <div style={{marginLeft :"1150px" , marginTop :"50px"}}>
            <IoSearchSharp />
            <input
                type="text"
                placeholder="Search bikes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
            /></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredBikes.map(bike => (
                    <Bike key={bike.id} bike={bike} />
                ))}
            </div>
        </div>
    );
}