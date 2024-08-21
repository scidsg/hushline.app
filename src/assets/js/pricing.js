document.addEventListener('DOMContentLoaded', function () {
    const basePrice = 103;
    const proPrice = 5; // Fixed cost for the "Pro" plan
    const licensePrice = 20;
    const adminFeePercentage = 0.10;
    const donationFeePercentage = 0.10;
    const supportFeePercentage = 0.10;

    function calculatePrice() {
        const licenses = parseInt(document.getElementById("licenses").value) || 0;

        console.log("Calculating price with licenses:", licenses);

        const licenseCost = licenses * licensePrice;
        const subTotal = basePrice + licenseCost;
        const adminFee = subTotal * adminFeePercentage;
        const donationFee = subTotal * donationFeePercentage;
        const supportFee = subTotal * supportFeePercentage;

        console.log("SubTotal:", subTotal);
        console.log("Support Fee:", supportFee);

        const totalPrice = subTotal + adminFee + donationFee + supportFee;
        const totalAnnualPrice = totalPrice * 12;

        // Update the receipt with calculated values
        document.getElementById("basePrice").innerText = basePrice.toFixed(2);
        document.getElementById("proPrice").innerText = proPrice.toFixed(2);
        document.getElementById("licensePrice").innerText = licensePrice.toFixed(2);
        document.getElementById("licenseCost").innerText = licenseCost.toFixed(2);
        document.getElementById("adminFee").innerText = adminFee.toFixed(2);
        document.getElementById("donationFee").innerText = donationFee.toFixed(2);
        document.getElementById("supportFee").innerText = supportFee.toFixed(2);
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
        document.getElementById("totalAnnualPrice").innerText = totalAnnualPrice.toFixed(2);

        // Ensure the support fee row is always visible
        document.getElementById("supportRow").style.display = "flex";
    }

    // Attach event listeners for changes
    document.getElementById("licenses").addEventListener('change', calculatePrice);

    // Initial price calculation
    calculatePrice();
});