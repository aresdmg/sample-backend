import app from "./app.js";

const start = () => {
    const PORT = 8000

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