export default class WhatsappApiService {
    static async sendMessage(message, phone) {


        try {
            console.log(phone)
            
            const TOKEN = process.env.WHATSAPP_ACCESS_TOKEN
            const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID
            const URL = `https://graph.facebook.com/v23.0/${PHONE_NUMBER_ID}/messages`
    
            
    
            const messagePayload = {
                "messaging_product": "whatsapp",
                "to": phone,
                "type": "text",
                "text": {
                  "body": message
                }
            }
    

            const api = await fetch(URL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN}`
                },
                body: JSON.stringify(messagePayload)
            }, )  
    

            const response = await api.json()

            if (!api.ok) throw new Error( `WhatsApp API respondeu ${api.status}: ${error.error?.message}`)
            

            return true
            
        } catch (error) {
            throw new Error(`Erro ao enviar mensagem: ${error.message}`) 
        }

    }
} 