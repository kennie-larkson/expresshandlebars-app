const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const port = process.env.PORT || 4000;

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// app.set('port', (process.env.PORT || 4000))
const people = ['Kehinde','Taiwo','Tope']
const profile = [
    {
        firstname: 'Kennie',
        lastname: 'Lawal'
    },
    {
        firstname: 'Tope',
        lastname: 'Lawal'
    }
]

app.get('/',(req,res)=>{
    res.render("home",{
        content: 'This is some content',
        published: true,
        people: people,
        profile:profile
})
})

app.get('/about',(req,res)=>{
    res.render("about",{
        message: 'This is the ABOUT Page' 
    })
})

app.listen(port,()=> console.log(`Server is running on port: ${port}`));