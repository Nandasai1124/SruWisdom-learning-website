function payNow() {
    document.getElementById('paymentModal').style.display = 'block';
}

// Function to close any open modal
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('successModal').style.display = 'none';
}

// Function to simulate payment and show result
function makePayment(success) {
    document.getElementById('paymentModal').style.display = 'none'; // Close payment modal
    const statusElement = document.getElementById('status');
    const paymentMessage = document.getElementById('paymentMessage');

    if (success) {
        statusElement.innerText = 'Payment Completed';
        statusElement.style.color = 'green';
        paymentMessage.innerText = 'Payment Successful! You can now access the course.';
    } else {
        statusElement.innerText = 'Payment Failed';
        statusElement.style.color = 'red';
        paymentMessage.innerText = 'Payment Failed. Please try again.';
    }

    document.getElementById('successModal').style.display = 'block'; // Show success/failure message
}