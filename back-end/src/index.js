import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.routes.js';
import connetDb from './db/conn.js';
const app = express()
import 'dotenv/config'
const port = process.env.PORT || 4343

console.log("port", port);


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

// routes 
app.use('/api/v1', productRouter,)

connetDb().then(() => {
  app.listen(port, () => {
    console.log(`Express runnig on port ${port}`)
  })
}).catch((error) => {
  console.log(error);
})
