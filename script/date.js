function formatDate() {
    const today = new Date();

    const options = { 
        weekday: 'short', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    };

    const formattedDate = today.toLocaleDateString('en-US', options);
    const dateParts = formattedDate.split(' ');

    const finalDate = `${dateParts[0]},<br><span class="font-bold">${dateParts[1]} ${dateParts[2]} ${dateParts[3]}</span>`;

    document.getElementById('current-date').innerHTML = finalDate;
}

formatDate();