var site_e2 = {
	//Inicializa uma galeria
	galeria : function($elemento, configuracao){
		$elemento.elastic_grid({
			filterEffect : 'helix',
			showAllText : 'All',
			items : configuracao
		});	
	},
	//Inicializa eventos extra da galeria
	eventos_galerias : function(){
		$('.btn_ver_mais').on("click", function(){
			var botao = $(this);
			var novo_texto = botao.data("toggle-text"); //data-toggle-text
			var texto_antigo = botao.text();
			var novo_filtro = botao.data("toggle-filter"); //data-toggle-filter
			var filtro_antigo = botao.data("filter"); //data-filter
		
			//Clica no filtro da galeria definido com o attributo data-filter
			botao.closest("section").find("#portfolio-filter").find("[data-filter='"+ filtro_antigo +"']").trigger("click");
		
			setTimeout( function() { //setTimeout executa a funcao depois de acabar o tempo
				//Altera o texto do botao
				botao.text(novo_texto);
				botao.data("toggle-text", texto_antigo);
				//Altera qual o proximo filtro a ser clicado
				botao.data("filter", novo_filtro);
				botao.data("toggle-filter", filtro_antigo);
			}, 1); //tempo=1 ms
	
		});
		
		//Corrige o scroll top em ecrans grandes
		$('.galeria li').on('mousedown', function(){
			 var $item = $( this );
                $item.data( {
                    offsetTop : $item.offset().top,
                    height : $item.height()
                } );
		});
	},
	responsividade_videos : function(){
		//Creditos: https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
		var $allVideos = $("iframe[src^='https://www.youtube.com']"),
		$fluidEl = $("figure");
	
		$allVideos.each(function() {
		  $(this)
			.attr('data-aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');
		});
	
		$(window).resize(function() {
		  var newWidth = $fluidEl.width();
		  $allVideos.each(function() {
			var $el = $(this);
			$el
				.width(newWidth)
				.height(newWidth * $el.attr('data-aspectRatio'));
		  });
		}).resize();
	},
	//Classe de inicializacao
	carregar : function(){
		var init = this; //init = site_e2
		$(function(){
			init.galeria($("#equipa_e2 .galeria"), config.equipa);
			init.galeria($("#parceiros .galeria"), config.parceiros);
			init.eventos_galerias();
			init.responsividade_videos();
			
			//Esconde as fotografias nao principais
			$('.btn_ver_mais').trigger("click");
		});
	}	
};

site_e2.carregar();


