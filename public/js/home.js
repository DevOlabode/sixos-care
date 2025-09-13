  let slideIndex = 1;
        let slideInterval;
        let isPlaying = true;
        let slideSpeed = 4000;

        
        document.addEventListener('DOMContentLoaded', function() {
            showSlide(slideIndex);
            startSlideshow();
            updateTotalSlides();
        });

        function showSlide(n) {
            const slides = document.querySelectorAll('.slide');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            
            
            slides.forEach(slide => slide.classList.remove('active'));
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            

            slides[slideIndex - 1].classList.add('active');
            thumbnails[slideIndex - 1].classList.add('active');
            
            
            document.getElementById('currentSlide').textContent = slideIndex;
            

            resetProgressBar();
        }

        function changeSlide(n) {
            slideIndex += n;
            showSlide(slideIndex);
            
            if (isPlaying) {
                restartSlideshow();
            }
        }

        function currentSlide(n) {
            slideIndex = n;
            showSlide(slideIndex);
            
            if (isPlaying) {
                restartSlideshow();
            }
        }

        function startSlideshow() {
            if (slideInterval) clearInterval(slideInterval);
            
            slideInterval = setInterval(() => {
                slideIndex++;
                showSlide(slideIndex);
            }, slideSpeed);
            
            startProgressBar();
        }


        function restartSlideshow() {
            stopSlideshow();
            startSlideshow();
        }

        function toggleSlideshow() {
            const playIcon = document.getElementById('playIcon');
            const playText = document.getElementById('playText');
            
            if (isPlaying) {
                stopSlideshow();
                playIcon.textContent = '▶️';
                playText.textContent = 'Play';
                isPlaying = false;
            } else {
                startSlideshow();
                playIcon.textContent = '⏸️';
                playText.textContent = 'Pause';
                isPlaying = true;
            }
        }


        function updateTotalSlides() {
            const totalSlides = document.querySelectorAll('.slide').length;
            document.getElementById('totalSlides').textContent = totalSlides;
        }


        let progressInterval;

        function startProgressBar() {
            const progressBar = document.getElementById('progressBar');
            let width = 0;
            const increment = 100 / (slideSpeed / 50);
            
            if (progressInterval) clearInterval(progressInterval);
            
            progressInterval = setInterval(() => {
                width += increment;
                if (width >= 100) {
                    width = 100;
                    clearInterval(progressInterval);
                }
                progressBar.style.width = width + '%';
            }, 50);
        }

        function stopProgressBar() {
            if (progressInterval) {
                clearInterval(progressInterval);
                progressInterval = null;
            }
        }

        function resetProgressBar() {
            const progressBar = document.getElementById('progressBar');
            progressBar.style.width = '0%';
            if (isPlaying) {
                startProgressBar();
            }
        }

        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    changeSlide(-1);
                    break;
                case 'ArrowRight':
                    changeSlide(1);
                    break;
                case ' ':
                    e.preventDefault();
                    toggleSlideshow();
                    break;
                case 'f':
                case 'F':
                    toggleFullscreen();
                    break;
            }
        });


        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    changeSlide(1); 
                } else {
                    changeSlide(-1); 
                }
            }
        }


        const slideshowContainer = document.getElementById('slideshowContainer');
        let wasPlayingBeforeHover = false;

        slideshowContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                wasPlayingBeforeHover = true;
                stopSlideshow();
            }
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            if (wasPlayingBeforeHover) {
                startSlideshow();
                wasPlayingBeforeHover = false;
            }
        });