const homePage = (req, res) => {
    res.status(200).send(`
     <div>
     <h1>🌟NodeJS_Hall_Booking_API_Task🎊</h1>
     <ul>
        <li>GET: Get all Rooms = endpoint: /rooms</li>
        <li>GET: Take a list of Booked rooms = endpoint: /rooms/customer</li>
        <li>POST: Create a new room = endpoint: /rooms/</li>
        <li>PUT: New Hall Booking = endpoint/:id </li>
        <li>DELETE: Delete a room = endpoint: /:id</li>
     </ul>
     </div>
     `);
  };
  
  export default { homePage }