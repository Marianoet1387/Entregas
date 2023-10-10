import express from "express";
import productsRouter from "./routers/products.router.js"
import cartsRouter from "./routers/carts.router.js"

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", productsRouter,cartsRouter )

app.listen(8080, () => {
    console.log("servidor escuchando desde el puerto 8080 http://localhost:8080/api/products")
});