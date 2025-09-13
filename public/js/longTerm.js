 document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.querySelector('button.md\\:hidden');
            const navigation = document.querySelector('nav .hidden.md\\:flex');
            
            if (mobileMenuButton && navigation) {
                mobileMenuButton.addEventListener('click', function() {
                    navigation.classList.toggle('hidden');
                    navigation.classList.toggle('flex');
                    navigation.classList.toggle('flex-col');
                    navigation.classList.toggle('absolute');
                    navigation.classList.toggle('top-full');
                    navigation.classList.toggle('left-0');
                    navigation.classList.toggle('w-full');
                    navigation.classList.toggle('bg-white');
                    navigation.classList.toggle('shadow-lg');
                    navigation.classList.toggle('p-4');
                });
            }
        });

   
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });