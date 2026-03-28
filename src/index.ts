import app from "./app.js";
import dotenv from "dotenv";

const start = () => {
    dotenv.config({
        path: "./.env",
        quiet: true
    })
    
    const PORT = process.env.PORT ?? 8000

    try {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()