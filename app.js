const express = require("express")
const app = express() 

app.get("/" , (req,res) => {

    res.send({
        status: "Server is up!"
    })


} ) 


app.get("/mobiles" , (req,res) => {

    let query = req.query
    console.log("query",query.temp)
    res.send({
      
        model:query.model,
        year:query.year,
        built:query.built,
        size:query.model + query.built,
        mobile:[

            {
                name: "Nokia"
            },
            {
                name: "Samsung"
            },
            {
                name: "Huawei"
            },
            {
                name: "Apple"
            },
        ]
    })


} )

const PORT = 3060

app.listen(PORT, () =>  {

    console.log(`server is up at localhost:${PORT} `)
})