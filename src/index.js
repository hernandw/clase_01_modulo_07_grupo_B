import express from 'express'


const app = express()

const PORT = process.env.PORT || 3000

//Midlewares

//Configuración Handlebars

//Rutas

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})

