//----------SLIDESHOW_FRENTE->-----------
var intervaloslide;

function slide_seguinte(){
    var indice_slide_actual = $('.botao_selecionado').index();
    var indice_slide_seguinte = indice_slide_actual+1;
    
    if(indice_slide_actual >= 4){
        indice_slide_seguinte = 0;
    }
    
    $('.botoes').removeClass('botao_selecionado');
    $('.botoes').eq(indice_slide_seguinte).addClass('botao_selecionado');
    
    $('.slides').css('z-index','1');
    $('.slides').eq(indice_slide_actual).css('z-index','2');
    $('.slides').eq(indice_slide_seguinte).css({'left':'100%','z-index':'3'});
    $('.slides').eq(indice_slide_seguinte).animate({'left':'0'},600);  
};

//----------SLIDESHOW_ATRAZ-<-----------
function slide_anterior(){
    var indice_slide_actual = $('.botao_selecionado').index();
    var indice_slide_anterior = indice_slide_actual-1;
    
    if(indice_slide_actual <= 0){
        indice_slide_anterior = 4;
    }
    
    $('.botoes').removeClass('botao_selecionado');
    $('.botoes').eq(indice_slide_anterior).addClass('botao_selecionado');
    
    $('.slides').css('z-index','1');
    $('.slides').eq(indice_slide_actual).css('z-index','2');
    $('.slides').eq(indice_slide_anterior).css({'left':'-100%','z-index':'3'});
    $('.slides').eq(indice_slide_anterior).animate({'left':'0'},600);  
};

$(function(){
    
    //-------------------LOADING NO SITE------------------
    $(window).load(function() {
        $(".loader img").delay(3000).fadeOut(400);
		$(".loader").delay(3000).fadeOut(800);
        
        
        /*intervaloslide = window.setInterval('slide_seguinte()',15000);*/
	});
    
    //--------------------SLIDESHOW--------------------------
    
    $('#seta_direita').click(function(){
        slide_seguinte();
    });
    
    $('#seta_esquerda').click(function(){
        slide_anterior();
    });
    
    $('.botoes').click(function(){        
        var indice_slide_actual = $('.botao_selecionado').index();
        var indice_botao_clicado = $(this).index();
        
        $('.botoes').removeClass('botao_selecionado');
        $('.botoes').eq(indice_botao_clicado).addClass('botao_selecionado');
        
        if(indice_botao_clicado > indice_slide_actual){
            $('.slides').css('z-index','1');
            $('.slides').eq(indice_slide_actual).css('z-index','2');
            $('.slides').eq(indice_botao_clicado).css({'left':'100%','z-index':'3'});
            $('.slides').eq(indice_botao_clicado).animate({'left':'0'},600);
        }else if(indice_botao_clicado < indice_slide_actual){
            $('.slides').css('z-index','1');
            $('.slides').eq(indice_slide_actual).css('z-index','2');
            $('.slides').eq(indice_botao_clicado).css({'left':'-100%','z-index':'3'});
            $('.slides').eq(indice_botao_clicado).animate({'left':'0'},600);
        }
    });
    //--------------------FIM SLIDESHOW--------------------------
    
    
    //--------------------ANIMAR SCROLL COM O MENU-----------------
	$('#main_menu a, #mobile_menu ul a').click(function(event){
		
		event.preventDefault(); //parar a execução do link
        
		var id_seccao = $(this).attr('href'); //guardar atributo href do link clicado
		var top_distancia = $(id_seccao).offset().top; //guardar distancia ao topo da seccao
        var top_aoclick = top_distancia - 75; //calcular a distancia para onde ira¡
		
		$('html, body').stop().animate({scrollTop:top_aoclick},800); //animar scroll do body
		
	});
    
    
    //------------------------ABRIR MENU MOBILE--------------------------
    $('#open_mobile_menu').click(function(){
        $('#mobile_menu').slideToggle();
        $('.mobile_menu_icone span').toggleClass('close_mobile_menu');
    });
    
    //-----------------------ABRIR REDES NO DESKTOP----------------------
    $('#open_redes').click(function(){
        var redes_top = $('#redes_sociais').offset().top - $(window).scrollTop();
        
        $('#open_redes span:nth-child(2)').slideToggle(200);
        
        if(redes_top == 35){
            $('#redes_sociais').animate({top:75},200);
        }else if(redes_top == 75){
            $('#redes_sociais').animate({top:35},200);
        }
    });
	
    //--------------------RESIZE DA PAGINA------------------
    $(window).resize(function(){
        
        //-----------------------ESCONDER MOBILE MENU COM RESIZE-------------------
        $('#mobile_menu').slideUp();
        $('.mobile_menu_icone span').removeClass('close_mobile_menu');
    });
    
    
    //--------------------SCROLL NA PAGINA-----------------------
	$(window).scroll(function(){
        
        //-----------------------ESCONDER MOBILE MENU COM SCROLL-------------------
        $('#mobile_menu').slideUp();
        $('.mobile_menu_icone span').removeClass('close_mobile_menu');
        
		
		//----------ASSINALAR MENU ACTIVO----------
		var scroll_actual = $(window).scrollTop();
		
		var top_home = $('#intro').offset().top;
		var top_episodios = $('#episodios').offset().top;
		var top_sobree2 = $('#sobre_e2').offset().top;
		var top_rubricas = $('#rubricas_e2').offset().top;
		var top_equipae2 = $('#equipa_e2').offset().top;
		var top_parceiros = $('#parceiros').offset().top;
		var top_contactos = $('#contactos').offset().top;
		
		$('#main_menu a').removeClass('menu_active');
		
		if(scroll_actual < top_episodios-100){
			$('#main_menu a').eq(0).addClass('menu_active');
		}else if(scroll_actual < top_sobree2-100){
			$('#main_menu a').eq(1).addClass('menu_active');
		}else if(scroll_actual < top_rubricas-100){
			$('#main_menu a').eq(2).addClass('menu_active');
		}else if(scroll_actual < top_equipae2-100){
			$('#main_menu a').eq(3).addClass('menu_active');
		}else if(scroll_actual < top_parceiros-100){
			$('#main_menu a').eq(4).addClass('menu_active');
		}else if(scroll_actual < top_contactos-100){
			$('#main_menu a').eq(5).addClass('menu_active');
		}else{
			$('#main_menu a').eq(6).addClass('menu_active');
		}
		
	});
    
    
    var larguraPagina = $(window).width();
    
    if(larguraPagina > 880){
        
        $('#fechar_discri_rubrica').click(function(){
            $('#discri_rubrica_box').slideUp(100);
            $('.rubricas:nth-child(-n+5)').css({'margin-bottom':15});
        });

        $('.rubricas').click(function(){
            var numeroRubrica = $(this).index();
            var rubricaFristTop = $('.rubricas:nth-child(1)').offset().top;
            var rubricasContentorTop = $('#rubricas_e2').offset().top;
            var rubricaAltura = $(this).height();

            $('.rubricas:nth-child(-n+5)').css({'margin-bottom':15});
            $('#discri_rubrica_box').css({'top':(rubricaFristTop - rubricasContentorTop) + rubricaAltura+10});
            $('#discri_rubrica_box').fadeIn();
            $('.discri_rubrica').fadeOut(0);
            $('.discri_rubrica').eq(numeroRubrica).fadeIn();

            var discricaoAltura = $('#discri_rubrica_box').outerHeight();

            $('.rubricas:nth-child(-n+5)').css({'margin-bottom':discricaoAltura+15});
        });
    }else{
        $('#fechar_discri_rubrica').click(function(){
            $('#discri_rubrica_box').slideUp(100);
        });
        
        $('.rubricas').click(function(){
            var numeroRubrica = $(this).index();
            var rubricaClicadoTop = $(this).offset().top;
            var rubricasContentorTop = $('#rubricas_e2').offset().top;
            var rubricaAltura = $(this).height();
            
            $('#discri_rubrica_box').css({'top':(rubricaClicadoTop - rubricasContentorTop) + rubricaAltura+10});
            $('#discri_rubrica_box').fadeIn();
            $('.discri_rubrica').fadeOut(0);
            $('.discri_rubrica').eq(numeroRubrica).fadeIn();
        });
    }
    
    
});