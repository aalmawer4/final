function calculateBill() {
    var total = 0;
    var items = document.querySelectorAll('input[name="item"]:checked');
    items.forEach(function(item) {
        total += parseFloat(item.value);
    });
    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function submitReservation(event) {
    event.preventDefault();
    var form = document.getElementById('reservationForm');
    form.style.display = 'none';
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';
}
