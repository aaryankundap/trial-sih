document.getElementById("redirectBtn").addEventListener("click", function() {
    window.location.href = "login.html;"; // Replace with your target page URL
  });


  document.getElementsByClassName("submit").addEventListener("click", function() {
    window.location.href = "about.html;"; // Replace with your target page URL
  });







document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('medicine-form').addEventListener('submit', async function (event) {
        event.preventDefault(); 

        
        document.querySelector('.result-box').innerHTML = '';

        document.querySelector('.result-box').innerHTML = '<div class="spinner"></div>';

        const medicineName = document.getElementById('medicineName').value.trim();
        const calciumPercentage = document.getElementById('calciumPercentage').value;
        const carbonPercentage = document.getElementById('carbonPercentage').value;
        const ironPercentage = document.getElementById('ironPercentage').value;
        const magnesiumPercentage = document.getElementById('magnesiumPercentage').value;

        const requestBody = {
            medicineName,
            calciumPercentage,
            carbonPercentage,
            ironPercentage,
            magnesiumPercentage
        };

        try {
            const response = await fetch('http://localhost:8001/api/medicines/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            
            document.querySelector('.spinner').remove();

            if (response.ok) {
                const result = await response.json();
                const resultBox = document.querySelector('.result-box');

                if (result.status === 'safe') {
                    resultBox.innerHTML = `<p class="result safe">✅ ${result.message} (Match: ${result.matchPercentage.toFixed(2)}%)</p>`;
                } else if (result.status === 'unsafe') {
                    resultBox.innerHTML = `<p class="result unsafe">⚠️ ${result.message} (Match: ${result.matchPercentage.toFixed(2)}%)</p>`;
                }
            } else {
                document.querySelector('.result-box').innerHTML = `<p class="result error">❌ Error: Could not verify the medicine quality.</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            document.querySelector('.result-box').innerHTML = `<p class="result error">❌ Error: Something went wrong.</p>`;
        }
    });
});
