const express = require('express')
const app = express()
const port = process.env.ORDER_PORT||3001
const fs = require('fs');


let orderList = fs.readFileSync('orders.json');  
let orders = JSON.parse(orderList);  

app.get('/orders/:id', function (req, res) {
	res.json(orders);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))