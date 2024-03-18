function showMenu() {
    const theme = document.getElementById('theme');
    const glass = document.getElementById('glass');
    const themeItem = document.querySelectorAll('.theme-item');
    const listTheme = document.getElementById('list-theme');
    const citationContainer = document.querySelectorAll('.citation');
    const navigation = document.querySelectorAll('.swiper-navigation');
    console.log(navigation)


    theme.addEventListener('click', () => {
        if (!glass.classList.contains('active')) {  
            citationContainer.forEach((el) => {
                el.classList.add('disable');
            });

            navigation.forEach((el) => {
                el.classList.add('disable');
            });

            glass.classList.add('active');

            setTimeout(() =>  {
                listTheme.classList.add('active');
                themeItem.forEach((el) => {
                    el.classList.add('active');
                });
            }, 1000);
        } else {
            themeItem.forEach((el) => {
                el.classList.remove('active');
            });

            setTimeout(() => {
                listTheme.classList.remove('active');
                glass.classList.remove('active');
                setTimeout(() => {
                    citationContainer.forEach((el) => {
                        el.classList.remove('disable');
                    }, 1000);

                    navigation.forEach((el) => {
                        el.classList.remove('disable');
                    }, 1000);
                })
            }, 1000)
        }
    });
}

function slider() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
        grabCursor: true,
        mousewheel: {
        invert: true,
        },

        parallax: true,
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
      });
}

showMenu();
slider();