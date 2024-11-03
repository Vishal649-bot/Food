// server.js
const express = require('express'); // Import express
const path = require("path")
const app = express(); // Create an instance of express
const cors = require('cors')
const PORT = 3000; // Define the port number

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/images", express.static(path.join(__dirname, "/public/images")));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    console.log('hhh');
    
    console.log(path.join(__dirname, "/public/images/egg.png"));
    const foodData = [
        {
          name: "Boilded Egg",
          price: 10,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/egg.png",
          type: "breakfast",
        },
        {
          name: "RAMEN",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/ramen.png",
          type: "lunch",
        },
        {
          name: "GRILLED CHICKEN",
          price: 45,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/chicken.png",
          type: "dinner",
        },
        {
          name: "CAKE",
          price: 18,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/cake.png",
          type: "breakfast",
        },
        {
          name: "BURGER",
          price: 23,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/burger.png",
          type: "lunch",
        },
        {
          name: "PANCAKE",
          price: 25,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: "/images/pancake.png",
          type: "dinner",
        },
      ];
    
      res.json(foodData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
