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
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    
    return `${day} ${month} ${year} (${weekday})`;
}

document.getElementById('get-clinics').addEventListener('click', function() {
    const date = document.getElementById('when').value;
    const time = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
    const location = document.getElementById('where').value;
    const formattedDate = formatDate(date);
    const resultText = `The clinic(s) available on <span class="user-input">${formattedDate}</span> at <span class="user-input">${time}</span> near <span class="user-input">${location}</span> are:`;
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = resultText;
    resultBox.style.display = 'block'; // Make the result box visible

    // Display the results table
    const resultsTable = document.getElementById('results-table');
    if (resultsTable) {
        resultsTable.style.display = 'block';
    } else {
        console.error("Results table element not found");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const getClinicButton = document.getElementById('get-clinics');
    const resultsTable = document.getElementById('results-table');
    const tableBody = resultsTable.querySelector('tbody');
    const resultBox = document.getElementById('result');

    getClinicButton.addEventListener('click', function() {
        const date = document.getElementById('when').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('where').value;
        const formattedDate = formatDate(date);
        const selectedTime = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
        
        const resultText = `The clinic(s) available on <span class="user-input">${formattedDate}</span> at <span class="user-input">${selectedTime}</span> near <span class="user-input">${location}</span> are:`;
        resultBox.innerHTML = resultText;
        resultBox.style.display = 'block';

        // Define the combination
        const combination = {
            date: '2024-11-20',
            time: '3pmto4pm',
            location: '520164',
            clinics: [1, 4, 5, 6]
        };

        // Check if the current selection matches the combination
        if (date === combination.date && time === combination.time && location === combination.location) {
            // Show only the specified clinics
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            allRows.forEach((row, index) => {
                if (combination.clinics.includes(index + 1)) {
                    row.style.display = 'table-row';
                } else {
                    row.style.display = 'none';
                }
            });
        } else {
            // Hide all rows and show "No clinics found" message
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            allRows.forEach(row => row.style.display = 'none');

            const noResultsRow = tableBody.querySelector('.no-results');
            if (noResultsRow) {
                noResultsRow.style.display = 'table-row';
            } else {
                const newNoResultsRow = document.createElement('tr');
                newNoResultsRow.classList.add('no-results');
                newNoResultsRow.innerHTML = '<td colspan="3">Sorry, no clinics found. This is due to the lack of backend development; next version of web app will endeavour to provide a result for this.</td>';
                tableBody.appendChild(newNoResultsRow);
            }
        }

        resultsTable.style.display = 'table';
    });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' };
    return date.toLocaleDateString('en-US', options).replace(/,/g, '');
}
document.addEventListener('DOMContentLoaded', function() {
    const getClinicButton = document.getElementById('get-clinics');
    const resultsTable = document.getElementById('results-table');
    const tableBody = resultsTable.querySelector('tbody');
    const resultBox = document.getElementById('result');

    getClinicButton.addEventListener('click', function() {
        const date = document.getElementById('when').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('where').value;
        const formattedDate = formatDate(date);
        const selectedTime = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
        
        const resultText = `The clinic(s) available on <span class="user-input">${formattedDate}</span> at <span class="user-input">${selectedTime}</span> near <span class="user-input">${location}</span> are:`;
        resultBox.innerHTML = resultText;
        resultBox.style.display = 'block';

        // Define the combinations
        const combinations = [
            {
                date: '2024-11-20',
                time: '3pmto4pm',
                location: '520164',
                clinics: [1, 4, 5, 6]
            },
            {
                date: '2024-11-22',
                time: '7pmto8pm',
                location: '520164',
                clinics: [1, 4]
            }
        ];

        // Check if the current selection matches any of the combinations
        const matchedCombination = combinations.find(combo => 
            date === combo.date && time === combo.time && location === combo.location
        );

        if (matchedCombination) {
            // Show only the specified clinics
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            allRows.forEach((row, index) => {
                if (matchedCombination.clinics.includes(index + 1)) {
                    row.style.display = 'table-row';
                } else {
                    row.style.display = 'none';
                }
            });
        } else {
            // Hide all rows and show "No clinics found" message
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            allRows.forEach(row => row.style.display = 'none');

            const noResultsRow = tableBody.querySelector('.no-results');
            if (noResultsRow) {
                noResultsRow.style.display = 'table-row';
            } else {
                const newNoResultsRow = document.createElement('tr');
                newNoResultsRow.classList.add('no-results');
                newNoResultsRow.innerHTML = '<td colspan="3">Sorry, no clinics found. This is due to the lack of backend development; next version of web app will endeavour to provide a result for this.</td>';
                tableBody.appendChild(newNoResultsRow);
            }
        }

        resultsTable.style.display = 'table';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const getClinicButton = document.getElementById('get-clinics');
    const resultsTable = document.getElementById('results-table');
    const tableBody = resultsTable.querySelector('tbody');
    const resultBox = document.getElementById('result');

    getClinicButton.addEventListener('click', function() {
        const date = document.getElementById('when').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('where').value;
        const formattedDate = formatDate(date);
        const selectedTime = document.getElementById('time').options[document.getElementById('time').selectedIndex].text;
        
        const resultText = `The clinic(s) available on <span class="user-input">${formattedDate}</span> at <span class="user-input">${selectedTime}</span> near <span class="user-input">${location}</span> are:`;
        resultBox.innerHTML = resultText;
        resultBox.style.display = 'block';

        // Define the combinations
        const combinations = [
            {
                date: '2024-11-20',
                time: '3pmto4pm',
                location: '520164',
                clinics: [1, 4, 5, 6]
            },
            {
                date: '2024-11-22',
                time: '7pmto8pm',
                location: '520164',
                clinics: [1, 4]
            },
            {
                date: '2024-11-23',
                time: '10amto11am',
                location: '520164',
                clinics: [1, 2, 3, 4, 5, 6]
            }
        ];

        // Check if the current selection matches any of the combinations
        const matchedCombination = combinations.find(combo => 
            date === combo.date && time === combo.time && location === combo.location
        );

        if (matchedCombination) {
            // Show clinics based on the matched combination
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            if (matchedCombination.clinics === 'all') {
                allRows.forEach(row => row.style.display = 'table-row');
            } else {
                allRows.forEach((row, index) => {
                    if (matchedCombination.clinics.includes(index + 1)) {
                        row.style.display = 'table-row';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        } else {
            // Hide all rows and show "No clinics found" message
            const allRows = Array.from(tableBody.querySelectorAll('tr'));
            allRows.forEach(row => row.style.display = 'none');

            const noResultsRow = tableBody.querySelector('.no-results');
            if (noResultsRow) {
                noResultsRow.style.display = 'table-row';
            } else {
                const newNoResultsRow = document.createElement('tr');
                newNoResultsRow.classList.add('no-results');
                newNoResultsRow.innerHTML = '<td colspan="3">Sorry, no clinics found. This is due to the lack of backend development; next version of web app will endeavour to provide a result for this.</td>';
                tableBody.appendChild(newNoResultsRow);
            }
        }

        resultsTable.style.display = 'table';
    });
});