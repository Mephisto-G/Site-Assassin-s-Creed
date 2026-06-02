// 1. Garante que o JavaScript só vai rodar DEPOIS que todo o HTML for carregado
document.addEventListener('DOMContentLoaded', () => {

    // 2. Seleciona todos os blocos de jogos (cards) da página
    const cards = document.querySelectorAll('.card');

    // 3. Passa por cada card para checar quais deles têm áudio configurado
    cards.forEach(card => {
        // Procura a imagem com som e o áudio dentro DESTE card específico
        const imagem = card.querySelector('.img-som');
        const audio = card.querySelector('.audio-jogo');

        // Se o card atual tiver os dois elementos (como o AC3 e o AC4), ativa o som
        if (imagem && audio) {

            // 🔊 Evento: Quando o mouse ENTRA na imagem
            imagem.addEventListener('mouseenter', () => {
                audio.currentTime = 0; // Reinicia a música do início
                audio.play().catch(error => {
                    // Evita o erro padrão dos navegadores se o usuário não interagiu com a página ainda
                    console.log("Clique em qualquer lugar da página primeiro para liberar o som!");
                });
            });

            // 🔇 Evento: Quando o mouse SAI da imagem
            imagem.addEventListener('mouseleave', () => {
                audio.pause(); // Pausa a música imediatamente
            });
        }
    });

});