import 'dotenv/config'
import Fastify from "fastify";
import routes from "../routes/router.js";

const fastify = Fastify({
    logger: true
})

const PORT = process.env.PORT

fastify.register(routes)

fastify.listen({port: PORT}, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
})






// const start = async () => {
//     try {
//         await fastify.listen({port: PORT})
//     } catch (error) {
//         fastify.log.error(error)
//         process.exit(1)
//     }
// }

// fastify.get("/", (req, res) => {
//     res.send("Hello world")
// })


// start()