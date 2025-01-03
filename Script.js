document.getElementById('calculate').addEventListener('click', function () {
    const service = document.getElementById('service');
    const pricePerHour = parseInt(service.options[service.selectedIndex].dataset.price);
    const hours = parseInt(document.getElementById('hours').value);
  
    if (isNaN(hours) || hours <= 0) {
      alert('Please enter a valid number of hours.');
      return;
    }
  
    const totalPrice = pricePerHour * hours;
    document.getElementById('result').textContent = `Total Price: R${totalPrice}`;
  });
  