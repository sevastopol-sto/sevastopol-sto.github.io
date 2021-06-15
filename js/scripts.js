﻿/* Adding blocks, transform blocks, only for correct display */
$(document).ready(function() {
	// createIFrame('img_post', 'send.php', true);
	$('.map').maphilight();
	first();
	//first();
	$(function() {
		$('#hood, .hood_btn, .hood_desc, #lights, .lights_btn, .lights_desc, #bumper1, .bumper1_desc, #wing1, .wing1_btn, .wing1_desc, #door, .door_btn, .door_desc, #roof, .roof_btn, .roof_desc, #bumper2, .bumper2_btn, .bumper2_desc, #wing2, .wing2_btn, .wing2_desc').hover(function() {
			var first1 = $('.first_thumb').val();
			if(first1 == 'true') {
				first();		
				$('.first_thumb').val('false');
				$('.hood_desc').hide();
			}
		});
		$('#hood, .hood_btn, .hood_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#hood').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#hood').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#hood, .hood_btn, .hood_desc').mouseenter(function(){$('.hood_desc').show();});
		$('#hood, .hood_btn, .hood_desc').mouseleave(function(){$('.hood_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#lights, .lights_btn, .lights_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#lights').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#lights').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#lights, .lights_btn, .lights_desc').mouseenter(function(){$('.lights_desc').show();});
		$('#lights, .lights_btn, .lights_desc').mouseleave(function(){$('.lights_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#bumper1, .bumper1_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#bumper1').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#bumper1').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#bumper1, .bumper1_desc').mouseenter(function(){$('.bumper1_desc').show();});
		$('#bumper1, .bumper1_desc').mouseleave(function(){$('.bumper1_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#wing1, .wing1_btn, .wing1_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#wing1').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#wing1').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#wing1, .wing1_btn, .wing1_desc').mouseenter(function(){$('.wing1_desc').show();});
		$('#wing1, .wing1_btn, .wing1_desc').mouseleave(function(){$('.wing1_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#door, .door_btn, .door_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#door').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#door').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#door, .door_btn, .door_desc').mouseenter(function(){$('.door_desc').show();});
		$('#door, .door_btn, .door_desc').mouseleave(function(){$('.door_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#roof, .roof_btn, .roof_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#roof').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#roof').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#roof, .roof_btn, .roof_desc').mouseenter(function(){$('.roof_desc').show();});
		$('#roof, .roof_btn, .roof_desc').mouseleave(function(){$('.roof_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#bumper2, .bumper2_btn, .bumper2_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#bumper2').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#bumper2').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#bumper2, .bumper2_btn, .bumper2_desc').mouseenter(function(){$('.bumper2_desc').show();});
		$('#bumper2, .bumper2_btn, .bumper2_desc').mouseleave(function(){$('.bumper2_desc').hide();});
		/////////////////////////////////////////////////////////////////////////////////
		$('#wing2, .wing2_btn, .wing2_desc').hover(function(e) {
			e.preventDefault();
			var data = $('#wing2').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#wing2').data('maphilight', data).trigger('alwaysOn.maphilight');
		});
		$('#wing2, .wing2_btn, .wing2_desc').mouseenter(function(){$('.wing2_desc').show();});
		$('#wing2, .wing2_btn, .wing2_desc').mouseleave(function(){$('.wing2_desc').hide();});
	});

	$('.button').click(function(){
            
		$('body').find('form:not(this)').children('label').removeClass('red');
		var page = $('input[name="page"]').val().match(/(?:\/)(.{1})(?:\/.*)$/i);
		/* utm */
		var request_url = '\n'+$('input[name="ref_url"]').val().toString().replace(/&/g, '\n');
		/* - */
		var url = "mail.php";
		var answer = checkForm($(this).parent().get(0));
		if(answer != false)
		{
			var $form = $(this).parent(),
				name = $('input[name="name"]', $form).val(),
				phone = $('input[name="phone"]', $form).val(),
				email = $('input[name="email"]', $form).val(),
				formname = $('input[name="formname"]', $form).val(),
				ques = $('textarea[name="question"]', $form).val(),
				sbt = $('input[type="button"]', $form).attr("name"),
				ref = $('input[name="referer"]', $form).val(),
				submit = $('input[name='+sbt+']', $form).val();
			var ref = ref+request_url;
			
			$.ajax({
				type: "POST",
				url: url,
				data: {name: name, phone: phone, email: email, ques: ques, formname: formname}
			}).always(function() {
                $form.closest('form').get(0).reset();
 				window.location.href = 'thanks.html';
			});
                       
		}
	});

        $(document).on("change", '#photoform input[name="filename[]"]', function(){
            
            var ext = ['jpg', 'gif', 'png', 'jpeg', 'bmp'];
            var error = false;

            var parts = $(this).val().split('.');
            if(ext.join().search(parts[parts.length - 1]) == -1){            
                var error = "Только изображения!";
                
            }
            var file_size = this.files[0].size;
            if(file_size > 5242880){
                var error = "Размер файла не более 5Mb!";                          
            }
            if(error) {
                $(this).closest('.up_wrapp').find('.up_remove').trigger("click");
                $(this).val('');
                $(this).closest('form').find('.up').removeClass("red");
                $(this).closest('label').addClass("red");
                $(this).closest('label').attr("data", error);
                return false;
            }
            $(this).closest('label').removeClass("red");            
        });
        $('#photoform')[0].reset();
        $('#photoform').submit(function(){            
            if(checkForm($(this).get(0)) == false) return false;            
            var count = 0;           
            $('#photoform input[type=file]').each(function(){
                if($.trim($(this).val()) !== ''){
                    count++;
                }            
            });            
            if(count == 0){               
                $(this).find('.up').first().addClass("red");
                $(this).find('.up').first().attr("data", "Прикрепите хотя бы один файл");
                return false;
            };           
        });
   
	$('.up').change(function() {
                $(this).closest('form').find('.up').first().removeClass("red");
		$(this).addClass('uploaded');
		$(this).siblings('.up_remove').addClass('active');
		$(this).siblings('.up_remove').css('display', 'block');
	});

	// $('.uploaded').mouseenter(function() {
	// 	$(this).children('.up_remove').css('display', 'block');
	// }).mouseleave(function() {
	// 	$(this).children('.up_remove').css('display', 'none');
	// });
	$('.up_remove').click(function() {
		if($(this).hasClass('active')) {
			$(this).siblings('.uploaded').children('input').val('');
			$(this).removeClass('active');
			$(this).css('display', 'none');
			$(this).siblings('.up').removeClass('uploaded');
			//$(this).siblings('.uploaded').children('.img_upload').css('opacity', 0);
		}
		// alert($(this).siblings('.uploaded').children('input').val());
		// $(this).removeClass('active');
	});

	$('a[rel*=leanModal]').leanModal({ top : 125, closeButton: ".modal_close" });	

	$(".fancybox").fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

	$('.complete a').click(function () {
		$('.complete').fadeOut('slow', function () {
			// Animation complete.
		});
	});

	$('.error a').click(function () {
		$('.error').fadeOut('slow', function () {
			// Animation complete.
		});
	});

	$('input[data-placeholder], textarea[data-placeholder]').each(function() {
		var placeholder = $(this).attr('data-placeholder');
		if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
			$(this).removeClass('placeholder');
		} else {
			$(this).val(placeholder);
			$(this).addClass('placeholder');
		}
		$(this).focusin(function() {
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}
		});
		$(this).focusout(function() {
			if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
				$(this).val(placeholder);
				$(this).addClass('placeholder');		
			}
		});		
	});
	
	$('form').submit(function() {
		$(this).find('input[data-placeholder], textarea[data-placeholder]').each(function() {
			var placeholder = $(this).attr('data-placeholder');
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}	
		});
	});

	// $('.pa1').mouseenter(function(){
	// 	//$('.prv').hover();
	// });


	var set_slide = function(selector, slide) {
	  	$(selector).text(slide);
  	}
	
  	var time = new Date();
	var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
	target_time = target_time.valueOf()+1000*60*60*24;
	
	
	
	var tick = function(init) {
		if (init == undefined) {
			init = false;
		}
		var current_time = new Date();
		current_time = current_time.valueOf();
		if (current_time > target_time) {
		  	var time = new Date();
			target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
			target_time = target_time.valueOf()+1000*60*60*24;			
		}
		var time_diff = Math.floor((target_time - current_time)/1000);	
		var second_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
		var second_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
		var minute_2 = time_diff % 10; time_diff = Math.floor(time_diff/10);
		var minute_1 = time_diff % 6; time_diff = Math.floor(time_diff/6);
		var hour_2 = Math.floor(time_diff/10);
		var hour_1 = time_diff % 10;
	  	set_slide('span.secondPlay', second_2);
	  	if ((second_2 == 9) || init) {set_slide('span.second6Play', second_1);
	  	if ((second_1 == 5) || init) {set_slide('span.minutePlay', minute_2);
	  	if ((minute_2 == 9) || init) {set_slide('span.minute6Play', minute_1);
	  	if ((minute_1 == 5) || init) {set_slide('span.hourPlay', hour_1);
	  	if ((hour_2 == 9) || init) {set_slide('span.hour2Play', hour_2);}}}}}
	  }
	tick(true);
	setInterval(tick, 1000);
	
	if(null === navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){ 

	// ниже вставляем код, который НЕ БУДЕТ РАБОТАТЬ на iphone|ipod|ipad|android
	$('.scroll-animate').each(function () {
		var block = $(this);
		$(window).scroll(function() {
			var top = block.offset().top;
			var bottom = block.height()+top;
			top = top - $(window).height() + 200;
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass('animate')) {
					block.addClass('animate');
					block.trigger('animateIn');
				}
			} else {
				block.removeClass('animate');
				block.trigger('animateOut');
			}
		});				
	
	});
	
	$('.counts em').each(function() {
		$(this).attr('data-number', parseInt($(this).text()));
	});
	
	$('.counts').on('animateIn', function() {
		$(this).find('em').each(function() {
			var count =  parseInt($(this).attr('data-number'));
			var block = $(this);
			var timeout = null;
			var step = 1;
			timeout = setInterval(function() {
				if (step == 40) {
					block.text(count.toString());
					clearInterval(timeout);
				} else {
					block.text((Math.floor(count*step/25)).toString());
					step++;
				}
			}, 60);
		});
	});
	
	$('.offer, .why, .hww').on('animateIn', function() {
		var inter = 0;
		$(this).find('.scale').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
				block.css('transform', 'scale(1.0, 1.0)');
			}, inter*200);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.scale').each(function() {
			$(this).css('opacity', 0.01);
			$(this).css('transform', 'scale(0.5, 0.5)');
		});
	});

	$('.reasons, .reviews').on('animateIn', function() {
		var inter = 0;
		$(this).find('.fade').each(function() {
			var block = $(this);
			setTimeout(function() {
				block.css('opacity', 1);
			}, inter*500);
			inter++;
		});
	}).on('animateOut', function() {
		$(this).find('.fade').each(function() {
			$(this).css('opacity', 0.01);
		});
	});

	}

	if(null !== navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/)){ 

		// ниже вставляем код, который БУДЕТ РАБОТАТЬ ТОЛЬКО на iphone|ipod|ipad|android 
		$('head').append('<style>.scale, .fade{opacity:1}</style>'); // это css-код, который делает видимыми элементы анимации, которые изначально прописаны невидимыми
	}
	

});
  
function popup(id, form)
{
	$('#'+id).find(".formname").attr("value", form);
}

function popup_photo(form) {
	var id = $(form).attr('name');
	var name = $(form).siblings('.name').children('input').val();
	var phone = $(form).siblings('.phone').children('input').val();
	$('#'+id).find('.name').children('input').val(name);
	$('#'+id).find('.phone').children('input').val(phone);
}

function first(){
	var first1 = $('.first_thumb').val();
	if(first1 == 'true') {
		$(function() {
			var data = $('#hood').data('maphilight') || {};
			data.alwaysOn = !data.alwaysOn;
			data.fillColor = 'ffca00';
			data.stroke = true;
			data.strokeColor = 'ffca00';
			data.strokeWidth = 2;
			$('#hood').data('maphilight', data).trigger('alwaysOn.maphilight');
			$('.hood_desc').show();
		});
	}
}