document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
  
    
    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    }
  
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Enter a valid email';
      isValid = false;
    }
  
    
    if (message.value.trim() === '') {
      messageError.textContent = 'Message is required';
      isValid = false;
    }
  
    
    if (isValid) {
      console.log({
        name: name.value,
        email: email.value,
        message: message.value,
      });
      alert('Form submitted successfully!');
      name.value = '';
      email.value = '';
      message.value = '';
    }
  });