const model_service_host = process.env["APP_MODEL_HOST"]
const model_service_port = process.env["APP_MODEL_PORT"]

module.exports = {
    API: {
        FINANCIAL: {
            AVAILABLE_COINS: ["USD", "EUR", "CAD", "BTC-USD", "ETH-USD", "SOL-USD"],
            API_KEY: "",
            API_URL: `http://${model_service_host}:${model_service_port}/cotacoes`
        },
        NEWS: {
            API_KEY: "",
            API_URL: `http://${model_service_host}:${model_service_port}/news`            
        }
    }
}