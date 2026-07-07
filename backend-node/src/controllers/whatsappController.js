import javaApiService from "../services/JavaApiService.js"
import messageService from "../services/message.service.js"
import WhatsappService from "../services/whatsapp.service.js"

export default class WhatsappController {
    
    static async verifyWebhook(request, reply) { 
        const hub = request.query

        const mode = hub["hub.mode"]
        const verifyToken = hub["hub.verify_token"]
        const challenge = hub["hub.challenge"]

        console.log(hub)

        if (mode === "subscribe" && verifyToken === process.env.VERIFY_TOKEN) {
            return reply.status(200).send(challenge)
        }

        return reply.status(400).send("Invalid token")
    }
    
    static async receiveMessage(request, reply) {
        try {

            const body = request.body
            const message = await WhatsappService.extractMessage(body)

            if (!message) {
                return reply.status(200).send({ success: true })
            }

            const result = await messageService.processMessage(message)

            console.log(result.transaction)

            if (!result.transaction?.recognized) {
                return reply.status(200).send({
                    success: false,
                    message: "Não foi possível interpretar a mensagem como transação financeira"
                })
            }

            const savedTransaction = await javaApiService.createTransaction(result.transaction)
            console.log("Mensagem processada com sucesso")

            return reply.status(200).send({
                success: true,
                transaction: savedTransaction
            })
        } catch (error) {
            console.error("Erro ao processar mensagem", error)
            return reply.status(200).send({ success: false, message: error.message })
        }
    }
}