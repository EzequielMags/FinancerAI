export default class WhatsappService {
    static async extractMessage(body) {
      try {
        const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body;
        if (!message) {
            throw new Error("Mensagem inválida: Digite uma mensagem de texto")
        }
        return message
    } catch (error) {
       throw new Error("Erro ao extrair mensagem: " +  error.message || "Erro ao extrair mensagem") 
    }
  }
}