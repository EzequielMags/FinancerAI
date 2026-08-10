export default class MessageFormatter {
    static transactionSuccess(transaction) {

        const type = transaction.type === "expense" ? "Despesa" : "Receita"
        const categoria = {
            salary: "Salário",
            investment: "Investimento",
            food: "Comida",
            transport: "Transporte",
            housing: "Habitação",
            health: "Saúde",
            education: "Educação",
            market: "Mercado",
            clothing: "Roupas",
            gym: "Academia",
            entertainment: "Entretenimento",
            other: "Outros"
        }

        const message = `
        ✅ Transação registrada com sucesso!

        💸 Tipo: ${type}
        💰 Valor: ${Number(transaction.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        📂 Categoria: ${categoria[transaction.category] ?? "Outros"}
        📝 Descrição: ${transaction.description}
        
        `

        return message
    }

    static transactionNotRecognized() {
        const message = `Olá tudo bem? 😁 Qual será a proxima transação financeira?`
        return message
    }

    static transactionError() {
        const message = `
            ❌ Não foi possível registrar sua transação.

            Tente novamente em alguns instantes.
        `
    }
}