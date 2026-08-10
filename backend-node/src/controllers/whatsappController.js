import WhatsappService from "../services/whatsapp.service.js"
import MessageFormatter from "../utils/messageFormatter.js"

export default class WhatsappController {
    
    static async verifyWebhook(request, reply) { 
        const hub = request.query

        const mode = hub["hub.mode"]
        const verifyToken = hub["hub.verify_token"]
        const challenge = hub["hub.challenge"]


        if (mode === "subscribe" && verifyToken === process.env.VERIFY_TOKEN) {
            return reply.status(200).send(challenge)
        }

        return reply.status(400).send("Invalid token")
    }
    
    static async receiveMessage(request, reply) {
        try {

            const body = request.body
            // const message = await WhatsappService.extractMessage(body)
            // const result = await messageService.processMessage(message)


            const result = await WhatsappService.processMessage(body)

           

            
            return reply.status(200).send({
                success: true,
            })
        } catch (error) {
            console.error("Erro ao processar mensagem", error)
            return reply.status(200).send({ success: false, message: error.message })
        }
    }
}