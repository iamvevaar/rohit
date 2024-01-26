import React, { useState } from 'react';
import axios from 'axios';

const CrashForm = () => {
  const [formData, setFormData] = useState({
    crashid: " ",
    vehicleType: '',
    otherVehicleType: '',
    degreeOfCrash: '',
    dateOfCrash: '',
    yearOfCrash: '',
    monthOfCrash: '',
    dayOfWeekOfCrash: '',
    twoHourIntervals: '',
    alignment: '',
    speedLimit: '',
    rumCode: '',
    rumDescription: '',
    dcaCode: '',
    dcaDescription: '',
    firstImpactType: '',
    numberOfTrafficUnits: '',
    numberOfKilled: '',
    numberOfSeriouslyInjured: '',
    numberOfModeratelyInjured: '',
    numberOfMinorOtherInjured: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/submit', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex" , flexDirection:"column"}}>
      {/* Render input fields based on your table attributes */}
      <label>Crash ID</label>
      <input type="text" name="crashid" value={formData.crashid} onChange={handleChange} />


      {/* Add more input fields for other attributes */}
      <label>Vehicle Type</label>
      <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleChange} />

      <label>Other Vehicle Type</label>
      <input type="text" name="otherVehicleType" value={formData.otherVehicleType} onChange={handleChange} />

      {/* Add more input fields for other attributes... */}
      <label>Degree Of Crash</label>
      <input type="text" name="degreeOfCrash" value={formData.degreeOfCrash} onChange={handleChange} />

      <label>Date Of Crash</label>
      <input type="text" name="dateOfCrash" value={formData.dateOfCrash} onChange={handleChange} />

      <label>Year Of Crash</label>
      <input type="text" name="yearOfCrash" value={formData.yearOfCrash} onChange={handleChange} />

      <label>Month Of Crash</label>
      <input type="text" name="monthOfCrash" value={formData.monthOfCrash} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CrashForm;
