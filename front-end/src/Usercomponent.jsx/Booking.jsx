import { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    carType: '',
    pickUpLocation: '',
    dropOffLocation: '',
    pickUpDate: '',
    dropOffDate: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setBookingConfirmed(true);
  };
  return (
    <div className='booking-box'>
      <h2><strong>BOOK YOUR VEHICLE</strong></h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Select Your Car Type : </strong>
          <select name="carType" value={formData.carType} onChange={handleChange}>
            <option value="">Select your vehicle type</option>
            <option value="Benz">Benz</option>
            <option value="Range Rover">Range Rover</option>
            <option value="Honda Civic">Honda Civic</option>
            <option value="Audi">Audi</option>
            <option value="Royal Enfield gt650">Royal Enfield</option>
            <option value="Yamaha R15 v4">Yamaha R15 v4</option>
            <option value="Jawa Bobber 42">Jawa Bobber 42</option>
            <option value="Husquarna Vitpilen">Husquarna Vitpilen</option>
            <option value="Toyota Corolla">Toyota Corolla</option>
            <option value="Fortuner">Fortuner</option>
            <option value="Thar">Thar</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Yamaha mt15">Yamaha mt15</option>
            <option value="Royal Enfield Classic350">Royal Enfield Classic350</option>
            <option value="Duke">Duke</option>
            <option value="NS 200">NS 200</option>
          </select>
          <br/><br/>
        </label>
        <label>
          <strong>Pick-up : </strong>
          <select name="pickUpLocation" value={formData.pickUpLocation} onChange={handleChange}>
            <option value="">Select pick up location</option>
            <option value="Chennai">Chennai</option>
            <option value="Salem">Salem</option>
            <option value="Coimbatore">Coimbatore</option>
          </select>
          <br/><br/>
        </label>
        <label>
          <strong>Drop-off : </strong>
          <select name="dropOffLocation" value={formData.dropOffLocation} onChange={handleChange}>
            <option value="">Select drop off location</option>
            <option value="Chennai">Chennai</option>
            <option value="Salem">Salem</option>
            <option value="Coimbatore">Coimbatore</option>
          </select>
          <br/><br/>
        </label>
        <label>
          <strong>Pick-up : </strong>
          <input type="date" name="pickUpDate" value={formData.pickUpDate} onChange={handleChange} />
          <br/><br/>
        </label>
        <label>
          <strong>Drop-off : </strong>
          <input type="date" name="dropOffDate" value={formData.dropOffDate} onChange={handleChange} />
          <br/><br/>
        </label>
        <button type="submit">CONFIRM</button>
      </form>

      {bookingConfirmed && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>Booking Confirmed!</p>}
    </div>
  );
}
export default BookingForm;

