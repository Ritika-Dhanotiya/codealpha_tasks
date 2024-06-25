document.getElementById('ageCalculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const result = document.getElementById('result');

    if (!isValidDate(dob)) {
        result.textContent = 'Please enter a valid date of birth.';
        return;
    }

    const age = calculateAge(dob);
    result.textContent = `You are ${age} years old.`;
});

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

function calculateAge(dob) {
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}
