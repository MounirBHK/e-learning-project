const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        PRODUCTS: [
            { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
            { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
            { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
            { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
            { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
            { category: "Vegetables", price: "$1", stocked: true, name: "Péas" }
        ]
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});