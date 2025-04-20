// Validation du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Empêche l'envoi du formulaire avant validation

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérification des champs
    if (name === '' || email === '' || message === '') {
        document.getElementById('formResponse').textContent = 'Tous les champs doivent être remplis.';
        document.getElementById('formResponse').style.color = 'red';
    } else {
        document.getElementById('formResponse').textContent = 'Merci de nous avoir contactés, nous reviendrons vers vous bientôt.';
        document.getElementById('formResponse').style.color = 'green';
        // Effacer le formulaire
        document.getElementById('contactForm').reset();
    }
});
