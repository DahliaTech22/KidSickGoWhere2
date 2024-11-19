document.getElementById('get-clinics').addEventListener('click', function() {
    const date = document.getElementById('when').value;
    const time = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
    const location = document.getElementById('where').value;
    const formattedDate = formatDate(date);
    const resultText = `The clinic(s) available on <span class="user-input">${formattedDate}</span> at <span class="user-input">${time}</span> near <span class="user-input">${location}</span> are:`;
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = resultText;
    resultBox.style.display = 'block'; // Make the result box visible
});
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    
    return `${day} ${month} ${year} (${weekday})`;
}