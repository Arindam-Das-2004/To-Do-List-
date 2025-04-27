let isDayMode = false; // Variable to track the current mode

const toggleMode = () => {
    isDayMode = !isDayMode;
    const body = document.body;
    const container = document.querySelector('.container');
    const taskItems = document.querySelectorAll('.taskItem');
    const inputs = document.querySelectorAll('input, button');

  
    if (isDayMode) {
        body.classList.add('day-mode');
        container.classList.add('day-mode');
        inputs.forEach(input => input.classList.add('day-mode'));
        taskItems.forEach(item => item.classList.add('day-mode'));
        document.getElementById('modeToggle').innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
    } else {
        body.classList.remove('day-mode');
        container.classList.remove('day-mode');
        inputs.forEach(input => input.classList.remove('day-mode'));
        taskItems.forEach(item => item.classList.remove('day-mode'));
        document.getElementById('modeToggle').innerHTML = '<i class="fa-regular fa-moon"></i>'; // Change icon to sun
    }
};

document.getElementById('modeToggle').addEventListener('click', toggleMode);