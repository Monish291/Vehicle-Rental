import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
const carData = [
    {
        id: 1,
        name: "Honda Civic",
        image: "https://images.pexels.com/photos/25637367/pexels-photo-25637367/free-photo-of-a-gray-honda-civic-parked-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 2000,
        rating: 3.5
    },
    {
        id: 2,
        name: "Toyota Corolla",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mIHxoKM99MaId6eWT2V08cFX5LIE1lv3pw&s",
        price: 4000,
        rating: 3.5
    },
    {
        id: 3,
        name: "Fortuner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yqZ5LPBVUigcGsY763PFa-3jpPtWJeep1w&s",
        price: 4000,
        rating: 4
    },
    {
        id: 4,
        name: "Benz",
        image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 5000,
        rating: 4
    },
    {
        id: 5,
        name: "Range Rover",
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 6000,
        rating: 4.5
    },
    {
        id: 6,
        name: "Audi A4",
        image: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 6000,
        rating: 4.5
    },
    {
        id: 7,
        name: "Thar",
        image: "https://i.pinimg.com/236x/a1/4a/bb/a14abbc6b782dff3d1007441735f5641.jpg",
        price: 6000,
        rating: 4.5
    },
    {
        id: 8,
        name: "Scorpio",
        image: "https://i.pinimg.com/236x/ca/5c/7a/ca5c7ab9dd0c8183eb79110c10b07a73.jpg",
        price: 2500,
        rating: 4.5
    }
];

function Car({ car }) {
    return (
        <table>
            <tbody className="box">
                <tr>
                    <td>
                        <img src={car.image} alt="Cars" height={250} width={250} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>{car.name}</strong><br />
                        <strong>Price : <FaRupeeSign />{car.price} / day</strong><br />
                        <strong>RATING<TiStar /> : {car.rating}/5</strong><br />
                        <Link to={`/book/${car.id}`}><button>Book Now</button></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Cars() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCars = carData.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
            <div style={{marginLeft :"1150px" , marginTop :"50px"}}>
                <IoSearchSharp />
            <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredCars.map(car => (
                    <Car key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}