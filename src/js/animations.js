// Efecto de escritura
const typeWriter = () => {
    const text = "Ingeniero de Sistemas & Desarrollador Full Stack";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;

    const typing = setInterval(() => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            setTimeout(() => {
                typingElement.textContent = '';
                i = 0;
                typeWriter();
            }, 2000);
        }
    }, 100);
};

// Iniciar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Configuración de partículas
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: '#64ffda' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                }
            }
        });
    }

    typeWriter();
    
    // Animación de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Animación al hacer hover en las skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('glow-effect');
    });
    
    card.addEventListener('mouseout', () => {
        card.classList.remove('glow-effect');
    });
});