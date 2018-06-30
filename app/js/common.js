$(function() {
	/* Изменение размеров блоков путёвок при наведении на один из блоков */
	$('.tr-block').hover(function(){
		$('.tr-block').toggleClass('tr-block_decreased')
		$(this).toggleClass('tr-block_increased')
	});
	/* Остановка анимации движения краба при нажатии на кнопку */
	$('.buttonOuter').hover(function(){
		$('.crab').toggleClass('paused');
	});

});
