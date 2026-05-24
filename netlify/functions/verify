exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

    try {
        const { foodName, price } = JSON.parse(event.body);
        const API_KEY = "sk_live_z-BcbvB8sXSI9AZIZBODerUdf1AF1Jc"; 

        // REQUEST A DIRECT PAYMENT ROUTE FROM SHEGERPAY
        const response = await fetch("https://shegerpay.com/api/v1/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": API_KEY 
            },
            body: JSON.stringify({
                amount: price,
                description: 'Order for ${foodName}',
                redirect_url: "https://maamuus.netlify.app/success.html", // Where they go after typing their PIN
                cancel_url: "https://maamuus.netlify.app/qaaz.html"
            })
        });

        const data = await response.json(); 

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify(data) // Sends back the checkout_url to kool.js
        };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
