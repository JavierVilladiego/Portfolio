function sendForm() {
    const form = document.getElementById('contactForm');
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

  // Evento para enviar el formulario cuando se hace clic en el botón "Enviar"
  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    sendForm();
  });