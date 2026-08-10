export default class JavaApiService {
    static async createTransaction(transaction) {
        const javaApiUrl = process.env.JAVA_API_URL

        if (!javaApiUrl) {
            throw new Error("JAVA_API_URL não configurada no .env")
        }

        const teste = {
            
        }

        const payload = {
            type: transaction.type,
            amount: transaction.amount,
            category: transaction.category,
            description: transaction.description
        }

        try {
            const response = await fetch(javaApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)    
            })

            if (!response.ok) {
                const errorBody = await response.text()

                if (response.status === 502 && errorBody.includes("ERR_NGROK_8012")) {
                    throw new Error(
                        "API Java indisponível: o ngrok do Java n esta rodando junto com o localhost:8080"
                    )
                }

                throw new Error(`API Java respondeu ${response.status}: ${errorBody.slice(0, 200)}`)
            }

            const data = await response.json()
payload
            return data
            /**
            * Envia uma transação para a API Java responsável
            * por persistir os dados no PostgreSQL.
            */
        } catch (error) {
            if (error.message.startsWith("API Java")) {
                throw error
            }

            throw new Error(`erro ao se conectar com API Java (${javaApiUrl}): ${error.message}`)
        }
    }
}

