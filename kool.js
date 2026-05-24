async function pay(food, price) {
    const fullUrl = "/.netlify/functions/verify"; 

    try {
        const response = await fetch(fullUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                foodName: food,
                price: price
            })
        });

        const data = await response.json();
        
        console.log(data);
        // If ShegerPay successfully created the checkout session, send the user there!
        if (data.checkout_url) {
            window.location.href = data.checkout_url; 
        } else {
            alert("Payment initialization failed. Please try again.");
        }
    } catch (error) {
        console.error("Network Error:", error);
        alert("Could not initialize payment.");
    }
}