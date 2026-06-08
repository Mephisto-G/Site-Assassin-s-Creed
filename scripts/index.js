
document.addEventListener('DOMContentLoaded', () => {

  
    const cards = document.querySelectorAll('.card');

    
    cards.forEach(card => {
        
        const imagem = card.querySelector('.img-som');
        const audio = card.querySelector('.audio-jogo');

        
        if (imagem && audio) {

            
            imagem.addEventListener('mouseenter', () => {
                audio.currentTime = 0; 
                audio.play().catch(error => {
                    
                    console.log("Clique em qualquer lugar da página primeiro para liberar o som!");
                });
            });

            
            imagem.addEventListener('mouseleave', () => {
                audio.pause();
            });
        }
    });

});
