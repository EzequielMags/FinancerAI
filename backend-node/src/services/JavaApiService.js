export default class javaApiService {
    static async createTransaction(transaction) {
        const javaApiUrl = process.env.JAVA_API_URL

        if (!javaApiUrl) {
            throw new Error("JAVA_API_URL não configurada no .env")
        }

        const body = {
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
                body: JSON.stringify(body)
            })

            if (!response.ok) {
                const errorBody = await response.text()

                if (response.status === 502 && errorBody.includes("ERR_NGROK_8012")) {
                    throw new Error(
                        "API Java indisponível: o ngrok do seu amigo está online, mas o servidor Java não está rodando em localhost:8080 na máquina dele"
                    )
                }

                throw new Error(`API Java respondeu ${response.status}: ${errorBody.slice(0, 200)}`)
            }

            return await response.json()
        } catch (error) {
            if (error.message.startsWith("API Java")) {
                throw error
            }

            throw new Error(`erro ao se conectar com API Java (${javaApiUrl}): ${error.message}`)
        }
    }
}

