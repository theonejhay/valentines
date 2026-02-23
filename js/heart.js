        const envelope = document.getElementById('envelope');
        const instruction = document.getElementById('instruction');
        const confettiContainer = document.getElementById('confetti-container');
        const modalOverlay = document.getElementById('modal-overlay');
        const closeModal = document.getElementById('close-modal');
        let isOpen = false;

        envelope.addEventListener('click', function() {
            if (!isOpen) {
                envelope.classList.add('open');
                instruction.style.opacity = '0';
                isOpen = true;
                
                setTimeout(() => {
                    createConfetti();
                }, 400);
                
                setTimeout(() => {
                    modalOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }, 3000);
            }
        });



        const introScreen = document.getElementById("introScreen");
        const closeBtn = document.getElementById("closeBtn");
        const openBtn = document.getElementById("openBtn");

        let noAttempts = 0;

        function moveButton() {
            const isMobile = window.innerWidth <= 768;

            const maxX = isMobile ? 250 : 150;
            const maxY = isMobile ? 200 : 100;

            const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
            const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

            //  NO 
            closeBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

            //  attempts
            noAttempts++;

            //  YES 
            openBtn.classList.add("pop-animate");
            setTimeout(() => {
                openBtn.classList.remove("pop-animate");
            }, 400);

            // Hint
            const hint = document.createElement("div");
            hint.className = "click-hint";
            hint.innerText = "Nganong dili ka mo Yes?";
            openBtn.appendChild(hint);

            setTimeout(() => {
                hint.remove();
            }, 2000);

            // MAD EMOJI
            const angryFaces = ["😔", "🥺", "🥲","😭"];
            const emoji = document.createElement("div");
            emoji.className = "mad-emoji";
            emoji.style.fontSize = (40 + noAttempts * 20) + "px";
            emoji.innerText = angryFaces[Math.min(noAttempts - 1, angryFaces.length - 1)];

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 700);
        }

        // Desktop
        closeBtn.addEventListener("mouseenter", moveButton);

        // Mobile
        closeBtn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            moveButton();
        });

        openBtn.addEventListener("click", () => {
            introScreen.classList.add("hidden");  
            envelope.classList.remove("hidden");  

            const refreshContainer = document.getElementById("refreshContainer");
            refreshContainer.classList.remove("hidden");

            const buttons = refreshContainer.querySelectorAll("button");
            buttons.forEach(btn => btn.classList.add("show"));
        });

        closeModal.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            setTimeout(() => {
                envelope.classList.remove('open');
                instruction.style.opacity = '1';
                isOpen = false;
            }, 500);
        });

        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal.click();
            }
        });

function createConfetti() {
    const images = [
        'img/heart.png',
        'img/heart2.png',
        'img/heart.png',
        'img/heart2.png',
        'img/heart.png'
    ];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');

            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.opacity = '1';
            confetti.style.transition = `all ${Math.random() * 2 + 2}s ease-out`;

            // ALWAYS use image
            const img = document.createElement('img');
            img.src = images[Math.floor(Math.random() * images.length)];
            img.style.width = (Math.random() * 30 + 30) + 'px';  
            img.style.height = 'auto';
            img.style.pointerEvents = 'none';
            confetti.appendChild(img);

            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.opacity = '0';
                confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
            }, 50);

            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }, i * 50);
    }
}




        