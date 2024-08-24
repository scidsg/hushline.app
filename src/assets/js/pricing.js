document.addEventListener('DOMContentLoaded', function () {
    const basePrice = 103;
    const proPrice = 5; // Fixed cost for the "Pro" plan
    const businessPrice = 20; // Fixed cost for the "Business" plan
    const licensePrice = 20;
    const adminFeePercentage = 0.10;
    const donationFeePercentage = 0.10;
    const supportFeePercentage = 0.10;

    function calculatePrice() {
        const licenses = parseInt(document.getElementById("licenses").value) || 0;

        const licenseCost = licenses * licensePrice;
        const subTotal = basePrice + licenseCost;

        // Admin and Support Fees for Single Tenant tier
        const adminFee = subTotal * adminFeePercentage;
        const supportFee = subTotal * supportFeePercentage;

        // Pro tier calculations
        const proDonationFee = proPrice * donationFeePercentage;
        const proAdminFee = proPrice * adminFeePercentage;
        const proSupportFee = proPrice * supportFeePercentage;
        const totalProPrice = proPrice + proDonationFee + proAdminFee + proSupportFee;

        // Business tier calculations
        const businessDonationFee = businessPrice * donationFeePercentage;
        const businessAdminFee = businessPrice * adminFeePercentage;
        const businessSupportFee = businessPrice * supportFeePercentage;
        const totalBusinessPrice = businessPrice + businessDonationFee + businessAdminFee + businessSupportFee;

        // Single Tenant tier donation fee calculation
        const tenantDonationFee = subTotal * donationFeePercentage;
        const totalPrice = subTotal + adminFee + supportFee + tenantDonationFee;
        const totalAnnualPrice = totalPrice * 12;

        // Update the receipt with calculated values
        document.getElementById("basePrice").innerText = basePrice.toFixed(2);
        document.getElementById("proPrice").innerText = proPrice.toFixed(2);
        document.getElementById("totalProPrice").innerText = totalProPrice.toFixed(2);
        document.getElementById("licensePrice").innerText = totalBusinessPrice.toFixed(2);
        document.getElementById("licenseCost").innerText = licenseCost.toFixed(2);
        document.getElementById("adminFee").innerText = adminFee.toFixed(2);
        document.getElementById("donationFee").innerText = tenantDonationFee.toFixed(2);
        document.getElementById("businessPrice").innerText = businessPrice.toFixed(2);
        document.getElementById("proDonationFee").innerText = proDonationFee.toFixed(2);
        document.getElementById("businessDonationFee").innerText = businessDonationFee.toFixed(2);
        document.getElementById("proAdminFee").innerText = proAdminFee.toFixed(2);
        document.getElementById("businessAdminFee").innerText = businessAdminFee.toFixed(2);
        document.getElementById("proSupportFee").innerText = proSupportFee.toFixed(2);
        document.getElementById("businessSupportFee").innerText = businessSupportFee.toFixed(2);
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