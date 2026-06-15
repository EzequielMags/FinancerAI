import messageService from "../services/message.service.js"

export default class MessageController {
    static async postMessage(req, reply) {
        try {
            const { message } = req.body
            


            if (!message || message.trim() == "") {
                throw new Error("A Mensagem é obrigatória. Tenta novamente")
            }
            
            const result = messageService.processMessage(message)
            reply.status(200).send({ message: "Mensagem processada", res: result})
            


        } catch (error) {
            reply.status(400).send({ message: error.message })
            console.error("Erro ao Enviar mensagem", error)            
        }
    }
}