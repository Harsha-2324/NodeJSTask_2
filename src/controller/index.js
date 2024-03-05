const homePage = (req, res) => {
    res.status(200).send(`
     <div>
     <h1 style="background-color:purple; text-align: center">🌟NodeJS_Hall_Booking_API_Task🎊</h1>
     <ul>
        <li><h2><span style="background-color:yellow">GET</span>: To Get all Rooms use endpoint: /rooms</h2></li>
        <li><h2><span style="background-color:yellow">GET</span>: To Take a list of Booked rooms use endpoint: /rooms/customer</h2></li>
        <li><h2><span style="background-color:green">POST</span>: To Create a new room use endpoint: /rooms/</h2></li>
        <li><h2><span style="background-color:lightblue">PUT</span>: To Book a New Hall use endpoint: /rooms/:id </h2></li>
        <li><h2><span style="background-color:red">DELETE</span>: To Delete a room use endpoint: /rooms/:id</h2></li>
     </ul>
     </div>
     `);
  };
  
  export default { homePage }