import React, { useState } from "react";

function FoodOrderForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup.`);
  };
  

  const [statName, setStatName] = useState('');
  const [statPhone, setStatPhone]  = useState('')
  const [stataddress, setStatAddress]  = useState('')
  const [statOrder, setStatOrder]  = useState('')
    
  return (
    <fourm>
      <label htmlFor="name">Name:</label>
      <input id='name' value={statName} onChange={(e) => setName(e.target.value)} name="name"></input>
      <label htmlFor="phone">name</label>
      <input id='phone' value={statPhone} onChange={(e) => setStatPhone(e.target.value)} name="phone"></input>
      <label htmlFor="address">address</label>
      <input id='address' value={stataddress} onChange={(e) => setStatAddress(e.target.value)} name="address"></input>
      <label htmlFor="order">order</label>
      <input id='order' value={statOrder} onChange={(e) => setStatOrder(e.target.value)} name="order"></input>
      <button type="submit" onSubmit={handleSubmit}>Submit Order</button>
    </fourm>
  )
}

export default FoodOrderForm;

