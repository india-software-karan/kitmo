
// const express = require('express')
// const app = express()
// const port = 3000

// const { response } = require("express");

 let shopItamsData = [
  {
    id: "headphones",
    name: "Headphones",
    price: 22,
    desc: "This Is Boat Headphones",
    image:{
      img2:"hf",
      img3:"ksdfl",
    },
    img: "image/headphone.jpeg",
    catgory: "Electronics",
  },
  {
    id: "goggles",
    name: "Goggles",
    price: 9,
    desc: "Stylish Goggles New Year",
    img: "image/goggles.jpeg",
    catgory: "sports",
  },
  {
    id: "short",
    name: "Short",
    price: 25,
    desc: "Stylish Short For Man",
    img: "image/short.jpeg",
    catgory:"cloths",
    
    cloths:{
      "men": "men",
      "women": "women" 
    } ,
    
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 30,
    desc: "Boy Jeans So Prime",
    img: "image/jeans.jpeg",
    catgory: "fashion",
  },
  {
    id: "cup",
    name: "Cup",
    price: 9,
    desc: "This Is Stylish Cup",
    img: "image/cup.jpeg",
    catgory: "home",
  },
  {
    id: "iPhone",
    name: "Mobile",
    price: 999,
    desc: "IPhone 15 Pro Max",
    img: "image/iphone.jpg",
    catgory: "home",
  },
];
// app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//   res.send(shopItamsData)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const serap = `http://localhost:4000/api/user`

let dataApi =async ()=>{
  let response = await fetch(serap)
  .then(async response => response.json()) // Parse the JSON response
  .then(async data => {
   // Handle the data received from the API
   return shopItamsData=data;
  })
  generateShop();
}

// dataApi();
