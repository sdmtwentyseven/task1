document.addEventListener('DOMContentLoaded', (event) => {
    // name and group
    document.getElementById('name').textContent = 'Dmitriy Skakovskiy';
    document.getElementById('group').textContent = 'MT-2201';
    
    // date and time
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = `Year: ${date.getFullYear()}<br>Today is: ${date.toLocaleDateString('en-US', { weekday: 'long' })}<br>Date: ${date.getDate()}<br>Month: ${date.toLocaleDateString('en-US', { month: 'long' })}<br>Current time is: ${date.toLocaleTimeString('en-US')}`;
    document.getElementById('datetime').innerHTML = dateTimeString;
    
    // days left until graduation
    const graduationDate = new Date(2025, 4, 30);
    const diffTime = Math.abs(graduationDate - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('graduation').textContent = `${diffDays} days left until the freedom!`;
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }
    
    document.getElementById('result').textContent = result;
}
