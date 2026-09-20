(() => {
    const form = document.getElementById('contact-form');
    if (!form || !window.fetch || !window.AbortController) return;

    const button = form.querySelector('button[type="submit"]');
    const status = document.getElementById('contact-status');
    const fields = form.querySelectorAll('input, textarea');
    let submitting = false;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (submitting || !form.reportValidity()) return;

        const data = new FormData(form);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        submitting = true;
        button.disabled = true;
        button.textContent = 'Envoi en cours…';
        fields.forEach((field) => { field.readOnly = true; });
        status.dataset.state = 'pending';
        status.textContent = 'Votre message est en cours d’envoi…';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' },
                signal: controller.signal,
            });

            if (response.ok) {
                form.reset();
                status.dataset.state = 'success';
                status.textContent = 'Merci ! Votre message a bien été envoyé.';
            } else {
                status.dataset.state = 'error';
                status.textContent = response.status === 429
                    ? 'Le service reçoit trop de demandes. Réessayez dans quelques minutes ou contactez-nous par téléphone.'
                    : 'Votre message n’a pas pu être envoyé. Réessayez plus tard ou contactez-nous par téléphone. Votre texte est conservé.';
            }
        } catch {
            status.dataset.state = 'error';
            status.textContent = 'L’envoi n’a pas pu être confirmé. Vérifiez votre connexion ou contactez-nous par téléphone. Votre texte est conservé.';
        } finally {
            clearTimeout(timeout);
            submitting = false;
            button.disabled = false;
            button.textContent = 'Envoyer';
            fields.forEach((field) => { field.readOnly = false; });
        }
    });
})();
