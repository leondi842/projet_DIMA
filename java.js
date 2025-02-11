
    <<script>
    document.getElementById('showMessageButton').addEventListener('click', () => {
        const messageElement = document.getElementById('message');
        messageElement.textContent = "Merci d'avoir consulté ma page personnelle !";
        messageElement.classList.add('text-success');
    });
</script>
