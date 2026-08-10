import MessageFormatter from "../utils/messageFormatter.js";
import JavaApiService from "./JavaApiService.js";
import messageService from "./message.service.js";
import WhatsappApiService from "./whatsappApi.service.js";

export default class WhatsappService {

    static async extractPhoneNumber(body) {
      try {
        const phoneNumber = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from
        if (!phoneNumber) {
            throw new Error("Mensagem inválida: Digite uma mensagem de texto")
        }
        return phoneNumber
    } catch (error) {
      throw new Error(`Erro ao extrair telefone: ${error.message}`)
    }
    }

    static async extractMessage(body) {
      try {
        const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body;
      `Erro ao extrair telefone: ${error.message}`
        if (!message) {
          return null
        }

        return message
    } catch (error) {
       throw new Error("Erro ao extrair mensagem: " +  error.message || "Erro ao extrair mensagem") 
    }
  }

  static async processMessage(body) {
    const message = await this.extractMessage(body)
    const phone = await this.extractPhoneNumber(body) 
    
    // if (!message) {
    //   throw new Error("Erro ao extrair a Mensagem")
    // }
    
    const result = await messageService.processMessage(message)
    
    
    
    if (!result.transaction?.recognized) { 
      const confirmation = MessageFormatter.transactionNotRecognized()
      await WhatsappApiService.sendMessage(confirmation, phone) 
    
      return {
        recognized: false
      }
    }
    
    const confirmation = MessageFormatter.transactionSuccess(result.transaction)
    
    await JavaApiService.createTransaction(result.transaction)
    await WhatsappApiService.sendMessage(confirmation, phone)
     
      return {
        success: true,
        transaction: result.transaction
      }
  }

            
    
}
