
  // Función para validar el formulario antes de enviarlo
  function validateForm() {
    // Verificar reCAPTCHA
    const response = grecaptcha.getResponse();
    if (!response) {
      alert('Por favor, completa el reCAPTCHA antes de enviar el formulario.');
      return false;
    }

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar campos requeridos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Por favor, completa todos los campos requeridos.');
      return false;
    }

    // Validar formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert('Por favor, ingresa una dirección de correo electrónico válida.');
      return false;
    }

    // Agregar más validaciones según tus necesidades

    // Si todas las validaciones pasan, retorna true para enviar el formulario
    return true;
  }

  // Función para enviar el formulario mediante AJAX
  function sendForm() {
    if (validateForm()) {
      // Obtener el formulario y los datos
      const form = document.getElementById('contact_form');
      const formData = new FormData(form);

      // Cambia "tu_formspree_email" por la dirección de correo electrónico de tu cuenta de Formspree
      const formAction = 'https://formspree.io/f/mknlgdaz'; // Reemplaza 'xxxxxxxx' con tu identificador de formulario de Formspree

      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al enviar el formulario.');
        }
      })
      .then(data => {
        // El formulario se envió correctamente
        console.log('Formulario enviado:', data);
        alert('¡El formulario se envió correctamente!');
        // Puedes redirigir a una página de éxito o realizar otras acciones aquí
      })
      .catch(error => {
        // Hubo un error al enviar el formulario
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      });
    }
  }

  // Agregar el evento de clic al botón
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    sendForm();
  });
