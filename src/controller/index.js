const homePage = (req, res) => {
    res.status(200).send(`
     <div>
     <h1 style="background-color:purple; text-align: center">🌟NodeJS_Hall_Booking_API_Task🎊</h1>
     <ul>
        <li><h2><span style="background-color:yellow">GET</span>: Get all Rooms use endpoint:<span style="background-color:yellow"> /rooms</span></h2></li>
        <li><h2><span style="background-color:yellow">GET</span>: Take a list of Booked rooms use endpoint:<span style="background-color:yellow"> /rooms/customer</span></h2></li>
        <li><h2><span style="background-color:green">POST</span>: Create a new room use endpoint:<span style="background-color:green"> /rooms/</span></h2></li>
        <li><h2><span style="background-color:lightblue">PUT</span>: New Hall Booking use endpoint:<span style="background-color:lightblue"> /rooms/:id</span></h2></li>
        <li><h2><span style="background-color:red">DELETE</span>: Delete a room use endpoint:<span style="background-color:red"> /rooms/:id</span></h2></li>
     </ul>
     </div>
     `);
  };
  
  export default { homePage }