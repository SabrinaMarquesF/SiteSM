$(document).ready(function() {
    //progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
    //objetos internos para limitar area 
        color: '#fff',
        strokeWidth: 8, 
        duration: 1400,
        from: { color: '#AAA'}, //começo
        to: { color: '#3a0070'}, //fim da cor

        step: function(state, circle) { 
            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() * 60);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#fff',
        strokeWidth: 8, 
        duration: 1600,
        from: { color: '#AAA'}, 
        to: { color: '#3a0070'}, 

        step: function(state, circle) { 
            circle.path.setAttribute('stroke', state.color); 
            
            let value = Math.round(circle.value() * 254);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#fff',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'}, 
        to: { color: '#3a0070'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#fff',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to: { color: '#3a0070'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
             let value = Math.round(circle.value() * 5423);

            circle.setText(value);
        }
    });
    // Para iniciar o loader só quando o usuário chegar ao elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;   

    $(window).scroll(function (e) { 
        let scroll = $(window).scrollTop(); 
        
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
            //disparando = pra começar 
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    }); 

    //Parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/parallax.jpeg'})
        $('#apply-area').parallax({imageSrc: 'img/codding.jpg'})

    }, 250)

    //Filtro do portfólio

    $('.filter-btn').on('click', function() {

        let type= $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active'); //remover a classe do botão
        $(this).addClass('active');

        if(type == 'dsg-btn') {
            eachBoxes('dsg',boxes)
        } else if(type == 'dev-btn') {
            eachBoxes('dev', boxes);
        } else if (type == 'back-btn') {
            eachBoxes('back', boxes);
        } else {
            eachBoxes('all', boxes);
        }

    });

    function eachBoxes(type, boxes) { //para mostrar as janelas 

        if(type == 'all'){
            $(boxes).fadeIn();
        } else{
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow')
                }else{
                    $(this).fadeIn();
                }
            });
        }

    }

    // Scroll das sessões */

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if (btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        } else if (btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        })
    })

});