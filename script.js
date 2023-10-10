document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const dateContainer = document.getElementById('dateContainer');
    const currentDate = new Date().toLocaleDateString();
    const showDate = () => {
        dateContainer.textContent = `Today's Date: ${currentDate}`;
    }

    darkModeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
    });

    showDate();
});
