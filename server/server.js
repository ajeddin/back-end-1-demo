const express = require('express')
const cors = require('cors')

const app = express()

console.log(app)
app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']


app.get('/api/inventory', (req,res) => {
    if(req.query.item){
        const filteredlist= inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredlist)
    }
    else{
        res.status(200).send(inventory)

}})
app.get('/api/inventory/:id', (req,res) => {
    res.status(200).send(inventory[+req.params.id])
    

})
app.listen(5050,() => console.log('server jamming port 5050'))