import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const caText = document.getElementById('ca-text');

    if (copyBtn && caText) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(caText.textContent);
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'COPIED!';
                copyBtn.style.background = '#ffd700'; /* secondary gold */
                copyBtn.style.color = '#000';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = ''; // reset to css default
                    copyBtn.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }

    // Add some subtle mouse move effect for the hero card
    const heroCard = document.querySelector('.hero-content.glass-card');
    
    if (heroCard) {
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 900) return; // Skip on mobile
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            heroCard.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        // Reset translation and rotation on mouse leave
        heroCard.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 900) return;
            heroCard.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
            heroCard.style.transition = 'transform 0.5s ease';
        });

        // Remove transition to avoid interference with mousemove
        heroCard.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 900) return;
            heroCard.style.transition = 'none';
        });
    }
});
