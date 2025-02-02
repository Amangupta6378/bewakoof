const express = require("express");
const server = express();
const cors = require('cors')

server.use(cors());
server.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/newProduct')
.then(()=>{
    console.log('Mongodb Connected Successfully.')
})
.catch((err)=>{
    console.log("Error in MongoDb connection.", err)
})

// const formSchema = new mongoose.Schema({
//     id:String,
//     image:String,
//     name:String,
//     price:Number,
//     color:String,
//     size:String,
//     desc:String


// })

// const Products = mongoose.model("products", formSchema);



const PORT= 9127
server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

server.get("/", (request, response )=>{
    response.send("Server is running.")
})
const obj =   [
  {
    image: "https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "S",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "S",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-black-foodie-deadpool-graphic-printed-oversized-acid-wash-t-shirt-633533-1708600144-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "M",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-brown-straw-hat-crew-graphic-printed-oversized-t-shirt-630812-1709105472-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black",
    size: "M",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-black-mugiwara-crew-graphic-printed-oversized-t-shirt-630813-1709116981-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black"
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-black-luffy-graphic-printed-oversized-t-shirt-630650-1709105021-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "black"
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-blue-going-merry-graphic-printed-oversized-t-shirt-630627-1709104777-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue"
  },
  {
    image: "https://images.bewakoof.com/t640/men-printed-co-ord-set-7-619985-1709805508-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
    size: "S",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-blue-luffy-graphic-printed-oversized-t-shirt-630647-1709105295-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue"
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-blue-boxer-628776-1707977242-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue",
    size: "S",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-navy-blue-relaxe-fit-cargo-pant-585697-1696326535-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue"
  },
  {
    image: "https://images.bewakoof.com/t640/men-solid-pyjamas-4-620062-1707200620-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "blue"
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-kung-fu-panda-graphic-printed-t-shirt-630761-1706686451-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "M",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-t-shirt-630777-1706686786-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red"
    
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-life-is-a-trip-graphic-printed-oversized-t-shirt-629310-1704450149-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "M",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-spaced-nasa-typography-t-shirt-475126-1706005918-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "L",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-oversized-t-shirt-604873-1690372836-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "S",
  },
  {
    image: "https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1701423884-1.jpg",
    title: "Bewakoof X One Piece",
    disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
    price: "₹799",
    type: "100% Cotton",
    color: "red",
    size: "S",
  }
]

server.get("/products",(request, response)=>{
    response.send(obj)
})


server.post("/addProducts", async(req, res)=>{
    const {id, name, image, price, size,desc, color}  =req.body;

    const query = new Products({
        id : id,
        name:name,
        price:price,
        color:color,
        size:size,
        desc:desc,
        image: image
    })

    await query.save();

    res.send("Product Added");
});