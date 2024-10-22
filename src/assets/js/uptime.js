document.addEventListener('DOMContentLoaded', function() {
    const uptimeBadge = document.getElementById('uptime-badge');

    async function checkUptime() {
        const url = 'https://tips.hushline.app/directory'; // Replace with your app's URL
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                uptimeBadge.style.backgroundColor = 'green';
                uptimeBadge.textContent = 'App Online';
            } else {
                uptimeBadge.style.backgroundColor = 'red';
                uptimeBadge.textContent = 'App Offline';
            }
        } catch (error) {
            uptimeBadge.style.backgroundColor = 'red';
            uptimeBadge.textContent = 'App Offline';
        }
    }

    // Initial check
    checkUptime();

    // Check every 60 seconds
    setInterval(checkUptime, 60000);
});