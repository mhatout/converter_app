/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

$(document).ready(function () {
	//Check to see if the window is top if not then display button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('#scrollToTop').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});

	$('.item').click(function () {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	});

	summonCurrencies().then(function (res) {
		var first_arr = [];var second_arr = [];
		for (var i = 0; i < res.length; i++) {
			if (res[i].id === 'EGP' || res[i].id === 'USD' || res[i].id === 'EUR' || res[i].id === 'SAR' || res[i].id === 'QAR' || res[i].id === 'KWD' || res[i].id === 'CAD' || res[i].id === 'JPY' || res[i].id === 'GBP' || res[i].id === 'BTC') {
				first_arr.push(res[i]);
			} else {
				second_arr.push(res[i]);
			}
		}
		var currencies = [].concat(first_arr, second_arr);
		populateCurrencies(currencies);
	});
	$('#curr_submit_btn').on('click', function (e) {
		e.preventDefault();
		var src_curr = $('#from_curr').attr('value');
		var dest_curr = $('#to_curr').attr('value');
		var amount = $('#from_curr_amount').val();
		var url = 'https://free.currencyconverterapi.com/api/v5/convert?q=' + src_curr + '_' + dest_curr + '&compact=ultra';
		$.get(url).then(function (res) {
			return $('#to_curr_amount').val(round4dec(res[Object.keys(res)[0]] * amount));
		});
	});

	$('#from_curr_dropdown, #to_curr_dropdown').dropdown();
	$('#about_link').css("cursor", "pointer").on('click', function () {
		return $('#about_modal').modal('show');
	});
	$('#contact_link').css("cursor", "pointer").on('click', function () {
		return $('#contact_modal').modal('show');
	});
	$('#policy_link').css("cursor", "pointer").on('click', function () {
		return $('#policy_modal').modal('show');
	});
	$("#dropdownItem").dropdown('hide');
	$("#dropdownItem").dropdown({ on: 'hover', action: 'hide' });
	$("#dropdownItem").hover(function () {
		$(this).css("background-color", "#f04839");
		$(this).css("color", "white");
		$(".sync.alternate.icon").addClass("loading");
	}, function () {
		return $(".sync.alternate.icon").removeClass("loading");
	});
	$('#weight_btn').on('click', function () {
		if ($(window).width() >= 1100) {
			$('#slim_weight_segment').slideUp();$("#weight_segment").slideToggle();
		} else {
			$('#weight_segment').slideUp();$("#slim_weight_segment").slideToggle();
		}
	});

	$('#length_btn').on('click', function () {
		return $("#length_segment").slideToggle();
	});
	$('#capacity_btn').on('click', function () {
		return $("#capacity_segment").slideToggle();
	});
	$('#pdf_btn').on('click', function () {
		return $("#pdf_segment").slideToggle();
	});
	$('#hs_btn').on('click', function () {
		return $("#hs_segment").slideToggle();
	});
	$('#curr_btn').on('click', function () {
		return $("#curr_segment").slideToggle();
	});
	$('#audio_video_btn').on('click', function () {
		return $("#audio_video_segment").slideToggle();
	});
	$('#vd_download_btn').on('click', function (e) {
		e.preventDefault();
		$('#yt_downloader').empty();
		var url_string = $('#yt_link_input1').val(); //window.location.href
		var url = new URL(url_string);
		var video_id = url.searchParams.get("v");
		$('#yt_downloader').append('<iframe class="button-api-frame" src="https://www.yt2mp3s.me/@api/button/videos/' + video_id + '" width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>');
		$('#yt_downloader').slideDown();
	});
	$('#ad_download_btn').on('click', function (e) {
		e.preventDefault();
		$('#yt_downloader').empty();
		var url_string = $('#yt_link_input2').val(); //window.location.href
		var url = new URL(url_string);
		var video_id = url.searchParams.get("v");
		$('#yt_downloader').append('<iframe class="button-api-frame" src="https://www.yt2mp3s.me/@api/button/mp3/' + video_id + '" width="100%" height="100%" allowtransparency="true" scrolling="yes" style="border:none"></iframe>');
		$('#yt_downloader').slideDown();
	});
	$('#to_pdf_btn').on('click', function () {
		$("#from_pdf_segment, #merge_pdf_segment, .pdf_segment").slideUp();$("#to_pdf_segment").slideToggle();
	});
	$('#from_pdf_btn').on('click', function () {
		$("#to_pdf_segment, #merge_pdf_segment, .pdf_segment").slideUp();$("#from_pdf_segment").slideToggle();
	});
	$('#merge_pdf_btn').on('click', function () {
		$("#to_pdf_segment, #from_pdf_segment, .pdf_segment").slideUp();$("#merge_pdf_segment").slideToggle();
	});
	var merge_input_fields = [$('.merge_pdf_inputs')[0]];
	$('#add_merge_input_btn').on('click', function () {
		$('#merge_pdf_input_fields').append('<div class="sixteen wide field"><input type="file" class="merge_pdf_inputs" placeholder="Select file" accept="application/pdf"></div>');
		merge_input_fields.push($('.merge_pdf_inputs')[$('.merge_pdf_inputs').length - 1]);
	});

	$('#image_pdf_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#image_pdf_segment').slideToggle();
	});
	$('#word_pdf_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#word_pdf_segment').slideToggle();
	});
	$('#excel_pdf_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#excel_pdf_segment').slideToggle();
	});
	$('#power_pdf_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#power_pdf_segment').slideToggle();
	});

	$('#pdf_image_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#pdf_image_segment').slideToggle();
	});
	$('#pdf_word_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#pdf_word_segment').slideToggle();
	});
	$('#pdf_excel_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#pdf_excel_segment').slideToggle();
	});
	$('#pdf_power_btn').on('click', function () {
		$('.pdf_segment').slideUp();$('#pdf_power_segment').slideToggle();
	});

	$('#image_pdf_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#image_pdf_input')[0].files[0], $('#image_pdf_input')[0].files[0].name);
		var str = $('#image_pdf_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/jpeg/to/pdf?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pdf';
				a.click();
			}
		});
	});

	$('#word_pdf_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#word_pdf_input')[0].files[0], $('#word_pdf_input')[0].files[0].name);
		var str = $('#word_pdf_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/docx/to/pdf?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pdf';
				a.click();
			}
		});
	});

	$('#excel_pdf_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#excel_pdf_input')[0].files[0], $('#excel_pdf_input')[0].files[0].name);
		var str = $('#excel_pdf_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/xlsx/to/pdf?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pdf';
				a.click();
			}
		});
	});

	$('#power_pdf_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#power_pdf_input')[0].files[0], $('#power_pdf_input')[0].files[0].name);
		var str = $('#excel_pdf_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pptx/to/pdf?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pdf';
				a.click();
			}
		});
	});

	$('#pdf_image_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#pdf_image_input')[0].files[0], $('#pdf_image_input')[0].files[0].name);
		var str = $('#pdf_image_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pdf/to/jpg?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.jpg';
				a.click();
			}
		});
	});

	$('#pdf_word_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#pdf_word_input')[0].files[0], $('#pdf_word_input')[0].files[0].name);
		var str = $('#pdf_word_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pdf/to/docx?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.docx';
				a.click();
			}
		});
	});

	$('#pdf_excel_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#pdf_excel_input')[0].files[0], $('#pdf_excel_input')[0].files[0].name);
		var str = $('#pdf_excel_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pdf/to/xlsx?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.xlsx';
				a.click();
			}
		});
	});

	$('#pdf_power_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append('File', $('#pdf_power_input')[0].files[0], $('#pdf_power_input')[0].files[0].name);
		var str = $('#pdf_power_input')[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pdf/to/pptx?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pptx';
				a.click();
			}
		});
	});

	$('#merge_pdf_submit_btn').on('click', function (e) {
		e.preventDefault();
		var formData = new FormData();
		merge_input_fields.forEach(function (val, i) {
			if (val.files[0]) {
				formData.append('Files[' + i + ']', val.files[0], val.files[0].name);
			}
		});
		var str = merge_input_fields[0].files[0].name;
		var name = str.split(".")[0];
		$.post({
			url: 'https://v2.convertapi.com/pdf/to/merge?Secret=5MCMItfERsBhfEyl&download=attachment',
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				responseType: 'blob'
			},
			success: function success(blob) {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(blob);
				a.download = name + '.pdf';
				a.click();
			}
		});
	});

	$('#temp_btn').on('click', function () {
		return $('#temp_modal').modal('show');
	});
	$('#date_btn').on('click', function () {
		return $('#date_modal').modal('show');
	});
	$('#CDay').on('keyup', function () {
		moveOnMax($(this), $('#CMonth'));
	});
	$('#CMonth').on('keyup', function () {
		moveOnMax($(this), $('#CYear'));
	});
	$('#CYear').on('keyup', function () {
		chrToIsl();
	});
	$('#HYear').on('keyup', function () {
		islToChr();
	});
	$('#HDay').on('keyup', function () {
		moveOnMax($(this), $('#HMonth'));
	});
	$('#HMonth').on('keyup', function () {
		moveOnMax($(this), $('#HYear'));
	});
	$('#reset').on('click', function () {
		return $('.date').val('');
	});
	$('.ui.styled.accordion').accordion();
	$('#weight_menu').on('click', 'a', weight_menu_switch);
	$('.weight_input').on('keyup', function () {
		if ($(this).hasClass('metric')) {
			handle_weight_metric_input($(this), $(this).val());
		} else if ($(this).hasClass('avoir')) {
			handle_weight_avoir_input($(this), $(this).val());
		} else if ($(this).hasClass('troy')) {
			handle_weight_troy_input($(this), $(this).val());
		} else if ($(this).hasClass('apoth')) {
			handle_weight_apoth_input($(this), $(this).val());
		} else if ($(this).hasClass('thai')) {
			handle_weight_thai_input($(this), $(this).val());
		} else {
			handle_weight_hongkong_input($(this), $(this).val());
		}
	});
	$('.length_input').on('keyup', function () {
		handle_length_input($(this), $(this).val());
	});

	$('.capacity_input').on('keyup', function () {

		if ($(this).hasClass('capacity_metric')) {
			handle_capacity_metric_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_liquid')) {
			handle_capacity_liquid_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_dry')) {
			handle_capacity_dry_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_british')) {
			handle_capacity_british_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_wine')) {
			handle_capacity_wine_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_cooking_us')) {
			handle_capacity_cooking_us_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_cooking_int')) {
			handle_capacity_cooking_int_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_cooking_aus')) {
			handle_capacity_cooking_aus_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_astro')) {
			handle_capacity_astro_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_ship_tonnage')) {
			handle_capacity_ship_tonnage_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_japanese')) {
			handle_capacity_japanese_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_chinese_30')) {
			handle_capacity_chinese_30_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_chinese_15')) {
			handle_capacity_chinese_15_input($(this), $(this).val());
		} else if ($(this).hasClass('capacity_thai')) {
			handle_capacity_thai_input($(this), $(this).val());
		}
	});

	$('.temp_input').on('keyup', function () {

		if ($(this).hasClass('temp_conv')) {
			handle_temp_conv_input($(this), $(this).val());
		} else {
			handle_temp_his_input($(this), $(this).val());
		}
	});
	trimText();
});

/*-----------------trim text -------------------------------------------*/

/* global $*/
/* global URL*/
function trimText() {
	var showChar = 150; // How many characters are shown by default
	var ellipsestext = "...";
	var moretext = "Read more";
	var lesstext = "Read less";

	$('.more').each(function () {
		var content = $(this).html();

		if (content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}
	});

	$(".morelink").click(function () {
		if ($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
}

/*---------------------------------------------------------*/

function weight_menu_switch() {
	switch ($(this).attr('id')) {
		case 'weight_metric':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#metric_form').removeClass('hide');
			break;
		case 'weight_avoir':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#avoir_form').removeClass('hide');
			break;
		case 'weight_troy':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#troy_form').removeClass('hide');
			break;
		case 'weight_apoth':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#apoth_form').removeClass('hide');
			break;
		case 'weight_thai':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#thai_form').removeClass('hide');
			break;
		case 'weight_hongkong':
			$('#weight_menu a').removeClass('active');
			$(this).addClass('active');
			$('.weight_form').addClass('hide');
			$('#hongkong_form').removeClass('hide');
			break;
	}
}

function handle_weight_metric_input(input, num) {

	if (input.hasClass('kilotonne')) {
		kitonne(num);
	} else if (input.hasClass('tonne')) {
		tonne(num);
	} else if (input.hasClass('kilonewton')) {
		kilonewton(num);
	} else if (input.hasClass('centner')) {
		centner(num);
	} else if (input.hasClass('kilogram')) {
		kilogram(num);
	} else if (input.hasClass('newton')) {
		newt(num);
	} else if (input.hasClass('carat')) {
		carat(num);
	} else if (input.hasClass('gram')) {
		gram(num);
	} else if (input.hasClass('centigram')) {
		centigram(num);
	} else if (input.hasClass('milligram')) {
		milligram(num);
	} else if (input.hasClass('microgram')) {
		micro(num);
	} else if (input.hasClass('atomic')) {
		atom(num);
	}

	function kitonne(kilozz) {
		var kilozzz = parseFloat(kilozz);
		var convert_kilo_cara = kilozzz / 2.0E-10;
		$('.carat').val(convert_kilo_cara);
		var convert_kilo_ton = kilozzz / 0.001;
		$('.tonne').val(convert_kilo_ton);
		var convert_kilo_gram = Math.round(kilozzz / 1.0E-9);
		$('.gram').val(convert_kilo_gram);
		var convert_kilo_kilonewton = Math.round(kilozzz / 0.000101971621);
		$('.kilonewton').val(convert_kilo_kilonewton);
		var convert_kilo_centigram = kilozzz / 1.0E-11;
		$('.centigram').val(convert_kilo_centigram);
		var convert_kilo_centner = kilozzz / 5.0E-5;
		$('.centner').val(convert_kilo_centner);
		var convert_kilo_milligram = kilozzz / 1.0E-12;
		$('.milligram').val(convert_kilo_milligram);
		var convert_kilo_kilogram = kilozzz / 1.0E-6;
		$('.kilogram').val(convert_kilo_kilogram);
		var convert_kilo_microgram = kilozzz / 1.0E-15;
		$('.microgram').val(convert_kilo_microgram);
		var convert_kilo_newton = kilozzz / 1.01971621E-7;
		$('.newton').val(convert_kilo_newton);
		var convert_kilo_atomic = kilozzz / 1.6603145E-33;
		$('.atomic').val(convert_kilo_atomic);
	}
	function carat(cara) {
		var carrat = parseFloat(cara);
		var convert_cara_kilo = carrat / 5000000000;
		$('.kilotonne').val(convert_cara_kilo);
		var convert_cara_ton = carrat / 5000000;
		$('.tonne').val(convert_cara_ton);
		var convert_cara_gram = carrat / 5;
		$('.gram').val(convert_cara_gram);
		var convert_cara_kilonewton = carrat / 509858.105;
		$('.kilonewton').val(convert_cara_kilonewton);
		var convert_cara_centigram = carrat / 0.05;
		$('.centigram').val(convert_cara_centigram);
		var convert_cara_centner = carrat / 250000;
		$('.centner').val(convert_cara_centner);
		var convert_cara_milligram = carrat / 0.005;
		$('.milligram').val(convert_cara_milligram);
		var convert_cara_kilogram = carrat / 5000;
		$('.kilogram').val(convert_cara_kilogram);
		var convert_cara_microgram = carrat / 5.0E-6;
		$('.microgram').val(convert_cara_microgram);
		var convert_cara_newton = carrat / 509.858105;
		$('.newton').val(convert_cara_newton);
		var convert_cara_atomic = carrat / 8.3015725E-24;
		$('.atomic').val(convert_cara_atomic);
	}
	function tonne(ton) {
		var tone = parseFloat(ton);
		var convert_tone_kilo = tone / 1000;
		$('.kilotonne').val(convert_tone_kilo);
		var convert_tone_carat = tone / 2.0E-7;
		$('.carat').val(convert_tone_carat);
		var convert_tone_gram = tone / 1.0E-6;
		$('.gram').val(convert_tone_gram);
		var convert_tone_kilonewton = tone / 0.101971621;
		$('.kilonewton').val(convert_tone_kilonewton);
		var convert_tone_centigram = tone / 1.0E-8;
		$('.centigram').val(convert_tone_centigram);
		var convert_tone_centner = tone / 1.0E-1;
		$('.centner').val(convert_tone_centner);
		var convert_tone_milligram = tone / 1.0E-9;
		$('.milligram').val(convert_tone_milligram);
		var convert_tone_kilogram = tone / 0.001;
		$('.kilogram').val(convert_tone_kilogram);
		var convert_tone_microgram = tone / 1.0E-12;
		$('.microgram').val(convert_tone_microgram);
		var convert_tone_newton = tone / 0.000101971621;
		$('.newton').val(convert_tone_newton);
		var convert_tone_atomic = tone / 1.6603145E-30;
		$('.atomic').val(convert_tone_atomic);
	}
	function gram(gra) {
		var gramme = parseFloat(gra);
		var convert_gram_kilo = gramme / 1000000000;
		$('.kilotonne').val(convert_gram_kilo);
		var convert_gram_carat = gramme / 0.2;
		$('.carat').val(convert_gram_carat);
		var convert_gram_tone = gramme / 1000000;
		$('.tonne').val(convert_gram_tone);
		var convert_gram_kilonewton = gramme / 101971.621;
		$('.kilonewton').val(convert_gram_kilonewton);
		var convert_gram_centigram = gramme / 0.01;
		$('.centigram').val(convert_gram_centigram);
		var convert_gram_centner = gramme / 100000;
		$('.centner').val(convert_gram_centner);
		var convert_gram_milligram = gramme / 0.001;
		$('.milligram').val(convert_gram_milligram);
		var convert_gram_kilogram = gramme / 1000;
		$('.kilogram').val(convert_gram_kilogram);
		var convert_gram_microgram = gramme / 1.0E-6;
		$('.microgram').val(convert_gram_microgram);
		var convert_gram_newton = gramme / 101.971621;
		$('.newton').val(convert_gram_newton);
		var convert_gram_atomic = gramme / 1.6603145E-24;
		$('.atomic').val(convert_gram_atomic);
	}
	function kilonewton(kN) {
		var kilo_new = parseFloat(kN);
		var convert_kN_kilo = kilo_new * 0.000101971621;
		$('.kilotonne').val(convert_kN_kilo);
		var convert_kN_carat = kilo_new / 1.9613300057278E-6;
		$('.carat').val(convert_kN_carat);
		var convert_kN_tone = kilo_new / 9.80665;
		$('.tonne').val(convert_kN_tone);
		var convert_kN_gram = kilo_new / 9.80665E-6;
		$('.gram').val(convert_kN_gram);
		var convert_kN_centigram = kilo_new / 9.8066500286389E-8;
		$('.centigram').val(convert_kN_centigram);
		var convert_kN_centner = kilo_new / 0.98066500286389;
		$('.centner').val(convert_kN_centner);
		var convert_kN_milligram = kilo_new / 9.8066500286388E-9;
		$('.milligram').val(convert_kN_milligram);
		var convert_kN_kilogram = kilo_new / 0.0098066500286389;
		$('.kilogram').val(convert_kN_kilogram);
		var convert_kN_microgram = kilo_new / 9.8066500286389E-12;
		$('.microgram').val(convert_kN_microgram);
		var convert_kN_newton = kilo_new / 0.001;
		$('.newton').val(convert_kN_newton);
		var convert_kN_atomic = kilo_new / 1.628432218411E-29;
		$('.atomic').val(convert_kN_atomic);
	}
	function centigram(centi) {
		var centig = parseFloat(centi);
		var convert_centi_kilo = centig / 100000000000;
		$('.kilotonne').val(convert_centi_kilo);
		var convert_centi_carat = centig / 20;
		$('.carat').val(convert_centi_carat);
		var convert_centi_tone = centig / 100000000;
		$('.tonne').val(convert_centi_tone);
		var convert_centi_gram = centig / 100;
		$('.gram').val(convert_centi_gram);
		var convert_centi_kiloN = centig / 10197162.1;
		$('.kilonewton').val(convert_centi_kiloN);
		var convert_centi_centner = centig / 10000000;
		$('.centner').val(convert_centi_centner);
		var convert_centi_milligram = centig / 0.1;
		$('.milligram').val(convert_centi_milligram);
		var convert_centi_kilogram = centig / 100000;
		$('.kilogram').val(convert_centi_kilogram);
		var convert_centi_microgram = centig / 0.0001;
		$('.microgram').val(convert_centi_microgram);
		var convert_centi_newton = centig / 10197.1621;
		$('.newton').val(convert_centi_newton);
		var convert_centi_atomic = centig / 1.6603145E-22;
		$('.atomic').val(convert_centi_atomic);
	}
	function centner(centn) {
		var centnr = parseFloat(centn);
		var convert_centn_kilo = centnr / 10000;
		$('.kilotonne').val(convert_centn_kilo);
		var convert_centn_carat = centnr / 2.0E-6;
		$('.carat').val(convert_centn_carat);
		var convert_centn_tone = centnr / 10;
		$('.tonne').val(convert_centn_tone);
		var convert_centn_gram = centnr / 1.0E-5;
		$('.gram').val(convert_centn_gram);
		var convert_centn_kiloN = centnr / 1.01971621;
		$('.kilonewton').val(convert_centn_kiloN);
		var convert_centn_centi = centnr / 1.0E-7;
		$('.centigram').val(convert_centn_centi);
		var convert_centn_milligram = centnr / 1.0E-8;
		$('.milligram').val(convert_centn_milligram);
		var convert_centn_kilogram = centnr / 0.01;
		$('.kilogram').val(convert_centn_kilogram);
		var convert_centn_microgram = centnr / 1.0E-11;
		$('.microgram').val(convert_centn_microgram);
		var convert_centn_newton = centnr / 0.00101971621;
		$('.newton').val(convert_centn_newton);
		var convert_centn_atomic = centnr / 1.6605655E-29;
		$('.atomic').val(convert_centn_atomic);
	}
	function milligram(milli) {
		var milligr = parseFloat(milli);
		var convert_milli_kilo = milligr / 1000000000000;
		$('.kilotonne').val(convert_milli_kilo);
		var convert_milli_carat = milligr / 200;
		$('.carat').val(convert_milli_carat);
		var convert_milli_tone = milligr / 1000000000;
		$('.tonne').val(convert_milli_tone);
		var convert_milli_gram = milligr / 1000;
		$('.gram').val(convert_milli_gram);
		var convert_milli_kiloN = milligr / 101971621;
		$('.kilonewton').val(convert_milli_kiloN);
		var convert_milli_centi = milligr / 10;
		$('.centigram').val(convert_milli_centi);
		var convert_milli_cent = milligr / 100000000;
		$('.centner').val(convert_milli_cent);
		var convert_milli_kilogram = milligr / 1000000;
		$('.kilogram').val(convert_milli_kilogram);
		var convert_milli_microgram = milligr / 0.001;
		$('.microgram').val(convert_milli_microgram);
		var convert_milli_newton = milligr / 101971.621;
		$('.newton').val(convert_milli_newton);
		var convert_milli_atomic = milligr / 1.6603145E-21;
		$('.atomic').val(convert_milli_atomic);
	}
	function kilogram(kilog) {
		var killogr = parseFloat(kilog);
		var convert_kilog_kilo = killogr / 1000000;
		$('.kilotonne').val(convert_kilog_kilo);
		var convert_kilog_carat = killogr / 0.0002;
		$('.carat').val(convert_kilog_carat);
		var convert_kilog_tone = killogr / 1000;
		$('.tonne').val(convert_kilog_tone);
		var convert_kilog_gram = killogr / 0.001;
		$('.gram').val(convert_kilog_gram);
		var convert_kilog_kiloN = killogr / 101.971621;
		$('.kilonewton').val(convert_kilog_kiloN);
		var convert_kilog_centi = killogr / 1.0E-5;
		$('.centigram').val(convert_kilog_centi);
		var convert_kilog_cent = killogr / 100;
		$('.centner').val(convert_kilog_cent);
		var convert_kilog_mili = killogr / 1.0E-6;
		$('.milligram').val(convert_kilog_mili);
		var convert_kilog_microgram = killogr / 1.0E-9;
		$('.microgram').val(convert_kilog_microgram);
		var convert_kilog_newton = killogr / 0.101971621;
		$('.newton').val(convert_kilog_newton);
		var convert_kilog_atomic = killogr / 1.6603145E-27;
		$('.atomic').val(convert_kilog_atomic);
	}
	function micro(microg) {
		var microgr = parseFloat(microg);
		var convert_micro_kilo = microgr / 1.0E+15;
		$('.kilotonne').val(convert_micro_kilo);
		var convert_micro_carat = microgr / 200000;
		$('.carat').val(convert_micro_carat);
		var convert_micro_tone = microgr / 1000000000000;
		$('.tonne').val(convert_micro_tone);
		var convert_micro_gram = microgr / 1000000;
		$('.gram').val(convert_micro_gram);
		var convert_micro_kiloN = microgr / 1.0E+15;
		$('.kilonewton').val(convert_micro_kiloN);
		var convert_micro_centi = microgr / 10000;
		$('.centigram').val(convert_micro_centi);
		var convert_micro_cent = microgr / 100000000000;
		$('.centner').val(convert_micro_cent);
		var convert_micro_mili = microgr / 1000;
		$('.milligram').val(convert_micro_mili);
		var convert_micro_kilogram = microgr / 1000000000;
		$('.kilogram').val(convert_micro_kilogram);
		var convert_micro_newton = microgr / 101971621;
		$('.newton').val(convert_micro_newton);
		var convert_micro_atomic = microgr / 1.6605655E-18;
		$('.atomic').val(convert_micro_atomic);
	}
	function newt(newto) {
		var newton = parseFloat(newto);
		var convert_new_kilo = newton / 9806650.0286389;
		$('.kilotonne').val(convert_new_kilo);
		var convert_new_carat = newton / 0.0019613300057278;
		$('.carat').val(convert_new_carat);
		var convert_new_tone = newton / 9806.6500286389;
		$('.tonne').val(convert_new_tone);
		var convert_new_gram = newton / 0.0098066500286389;
		$('.gram').val(convert_new_gram);
		var convert_new_kiloN = newton / 1000;
		$('.kilonewton').val(convert_new_kiloN);
		var convert_new_centi = newton / 9.8066500286389E-5;
		$('.centigram').val(convert_new_centi);
		var convert_new_cent = newton / 980.66500286389;
		$('.centner').val(convert_new_cent);
		var convert_new_mili = newton / 9.8066500286389E-6;
		$('.milligram').val(convert_new_mili);
		var convert_new_kilogram = newton / 9.8066500286389;
		$('.kilogram').val(convert_new_kilogram);
		var convert_new_micro = newton / 9.8066500286389E-9;
		$('.microgram').val(convert_new_micro);
		var convert_new_atomic = newton / 1.6284584708132E-26;
		$('.atomic').val(convert_new_atomic);
	}
	function atom(ato) {
		var amu = parseFloat(ato);
		var convert_amu_kilo = amu / 6.0220448997646E+32;
		$('.kilotonne').val(convert_amu_kilo);
		var convert_amu_carat = amu / 1.2044089799529E+23;
		$('.carat').val(convert_amu_carat);
		var convert_amu_tone = amu / 6.0220448997646E+29;
		$('.tonne').val(convert_amu_tone);
		var convert_amu_gram = amu / 6.0220448997646E+23;
		$('.gram').val(convert_amu_gram);
		var convert_amu_kiloN = amu / 6.1407768016378E+28;
		$('.kilonewton').val(convert_amu_kiloN);
		var convert_amu_centi = amu / 6.0220448997646E+21;
		$('.centigram').val(convert_amu_centi);
		var convert_amu_cent = amu / 6.0220448997646E+28;
		$('.centner').val(convert_amu_cent);
		var convert_amu_mili = amu / 6.0220448997646E+20;
		$('.milligram').val(convert_amu_mili);
		var convert_amu_kilogram = amu / 6.0220448997646E+26;
		$('.kilogram').val(convert_amu_kilogram);
		var convert_amu_micro = amu / 6.0220448997646E+17;
		$('.microgram').val(convert_amu_micro);
		var convert_amu_new = amu / 6.1407768016378E+25;
		$('.newton').val(convert_amu_new);
	}
}

function handle_weight_avoir_input(input, num) {

	if (input.hasClass('longton')) {
		long_ton(num);
	} else if (input.hasClass('shortton')) {
		short_ton(num);
	} else if (input.hasClass('kilopound')) {
		kilopound(num);
	} else if (input.hasClass('longhundred')) {
		l_hun_weight(num);
	} else if (input.hasClass('shorthundred')) {
		short_hun_weight(num);
	} else if (input.hasClass('stone')) {
		stone(num);
	} else if (input.hasClass('grain_avoir')) {
		grain_voir(num);
	} else if (input.hasClass('pound_avoir')) {
		pound_voir(num);
	} else if (input.hasClass('ounce_avoir')) {
		ounce_voir(num);
	}

	function long_ton(l_ton) {
		var long_ton = parseFloat(l_ton);
		var convert_longton_stone = long_ton / 0.00625;
		$('.stone').val(convert_longton_stone);
		var convert_longton_short_ton = long_ton / 0.89285714285714;
		$('.shortton').val(convert_longton_short_ton);
		var convert_longton_kilopound = long_ton / 0.44642857142857;
		$('.kilopound').val(convert_longton_kilopound);
		var convert_longton_pound = long_ton / 0.00044642857142857;
		$('.pound_avoir').val(convert_longton_pound);
		var convert_longton_l_hun_weight = long_ton / 0.050000;
		$('.longhundred').val(convert_longton_l_hun_weight);
		var convert_longton_ounce = long_ton / 2.7901785714286E-5;
		$('.ounce_avoir').val(convert_longton_ounce);
		var convert_longton_short_hun_weight = long_ton / 0.044643;
		$('.shorthundred').val(convert_longton_short_hun_weight);
		var convert_longton_grain = long_ton / 6.3775510204082E-8;
		$('.grain_avoir').val(convert_longton_grain);
	}
	function stone(ston) {
		var stone = parseFloat(ston);
		var convert_stone_long_ton = stone / 160;
		$('.longton').val(convert_stone_long_ton);
		var convert_stone_short_ton = stone / 142.85714285714;
		$('.shortton').val(convert_stone_short_ton);
		var convert_stone_kilopound = stone / 71.428571428571;
		$('.kilopound').val(convert_stone_kilopound);
		var convert_stone_pound = stone / 0.071428571428571;
		$('.pound_avoir').val(convert_stone_pound);
		var convert_stone_l_hun_weight = stone / 8;
		$('.longhundred').val(convert_stone_l_hun_weight);
		var convert_stone_ounce = stone / 0.0044642857142857;
		$('.ounce_avoir').val(convert_stone_ounce);
		var convert_stone_short_hun_weight = stone / 7.1428571428571;
		$('.shorthundred').val(convert_stone_short_hun_weight);
		var convert_stone_grain = stone / 1.0204081632653E-5;
		$('.grain_avoir').val(convert_stone_grain);
	}
	function short_ton(shor_ton) {
		var short_ton = parseFloat(shor_ton);
		var convert_short_tone_long_ton = short_ton / 1.12;
		$('.longton').val(convert_short_tone_long_ton);
		var convert_short_tone_stone = short_ton / 0.007;
		$('.stone').val(convert_short_tone_stone);
		var convert_short_tone_grain = short_ton / 7.1428571428571E-8;
		$('.grain_avoir').val(convert_short_tone_grain);
		var convert_short_tone_kilopound = short_ton / 0.55115565546219;
		$('.kilopound').val(convert_short_tone_kilopound);
		var convert_short_tone_pound = short_ton / 0.0005;
		$('.pound_avoir').val(convert_short_tone_pound);
		var convert_short_tone_l_hun_weight = short_ton / 0.056;
		$('.longhundred').val(convert_short_tone_l_hun_weight);
		var convert_short_tone_ounce = short_ton / 3.125E-5;
		$('.ounce_avoir').val(convert_short_tone_ounce);
		var convert_short_tone_short_hun_weight = short_ton / 0.05;
		$('.shorthundred').val(convert_short_tone_short_hun_weight);
	}
	function grain_voir(grain) {
		var grain_voir = parseFloat(grain);
		var convert_grain_long_ton = grain_voir / 15680000;
		$('.longton').val(convert_grain_long_ton);
		var convert_grain_stone = grain_voir / 98000;
		$('.stone').val(convert_grain_stone);
		var convert_grain_short_ton = grain_voir / 14000000;
		$('.shortton').val(convert_grain_short_ton);
		var convert_grain_kilopound = grain_voir / 7716179.1764707;
		$('.kilopound').val(convert_grain_kilopound);
		var convert_grain_pound = grain_voir / 7000;
		$('.pound_avoir').val(convert_grain_pound);
		var convert_grain_l_hun_weight = grain_voir / 784000;
		$('.longhundred').val(convert_grain_l_hun_weight);
		var convert_grain_ounce = grain_voir / 437.5;
		$('.ounce_avoir').val(convert_grain_ounce);
		var convert_grain_short_hun_weight = grain_voir / 700000;
		$('.shorthundred').val(convert_grain_short_hun_weight);
	}
	function kilopound(kip) {
		var kilop = parseFloat(kip);
		var convert_kilop_long_ton = kilop / 2.24;
		$('.longton').val(convert_kilop_long_ton);
		var convert_kilop_stone = kilop / 0.014;
		$('.stone').val(convert_kilop_stone);
		var convert_kilop_short_ton = kilop / 2;
		$('.shortton').val(convert_kilop_short_ton);
		var convert_kilop_grain = kilop / 1.4285714285714E-7;
		$('.grain_avoir').val(convert_kilop_grain);
		var convert_kilop_pound = kilop / 0.001;
		$('.pound_avoir').val(convert_kilop_pound);
		var convert_kilop_l_hun_weight = kilop / 0.112;
		$('.longhundred').val(convert_kilop_l_hun_weight);
		var convert_kilop_ounce = kilop / 6.25E-5;
		$('.ounce_avoir').val(convert_kilop_ounce);
		var convert_kilop_short_hun_weight = kilop / 0.1;
		$('.shorthundred').val(convert_kilop_short_hun_weight);
	}
	function pound_voir(pound) {
		var pound_voir = parseFloat(pound);
		var convert_pound_long_ton = pound_voir / 2240;
		$('.longton').val(convert_pound_long_ton);
		var convert_pound_stone = pound_voir / 14;
		$('.stone').val(convert_pound_stone);
		var convert_pound_short_ton = pound_voir / 2000;
		$('.shortton').val(convert_pound_short_ton);
		var convert_pound_grain = pound_voir / 0.00014285714285714;
		$('.grain_avoir').val(convert_pound_grain);
		var convert_pound_kilopound = pound_voir / 1000;
		$('.kilopound').val(convert_pound_kilopound);
		var convert_pound_l_hun_weight = pound_voir / 112;
		$('.longhundred').val(convert_pound_l_hun_weight);
		var convert_pound_ounce = pound_voir / 0.0625;
		$('.ounce_avoir').val(convert_pound_ounce);
		var convert_pound_short_hun_weight = pound_voir / 100;
		$('.shorthundred').val(convert_pound_short_hun_weight);
	}
	function l_hun_weight(long_hun_weight) {
		var l_hun_weight = parseFloat(long_hun_weight);
		var convert_l_hun_weight_long_ton = l_hun_weight / 20;
		$('.longton').val(convert_l_hun_weight_long_ton);
		var convert_l_hun_weight_stone = l_hun_weight / 0.125;
		$('.stone').val(convert_l_hun_weight_stone);
		var convert_l_hun_weight_short_ton = l_hun_weight / 17.857142857143;
		$('.shortton').val(convert_l_hun_weight_short_ton);
		var convert_l_hun_weight_grain = l_hun_weight / 1.2755102040816E-6;
		$('.grain_avoir').val(convert_l_hun_weight_grain);
		var convert_l_hun_weight_kilopound = l_hun_weight / 8.9285714285714;
		$('.kilopound').val(convert_l_hun_weight_kilopound);
		var convert_l_hun_weight_pound = l_hun_weight / 0.0089285714285714;
		$('.pound_avoir').val(convert_l_hun_weight_pound);
		var convert_l_hun_weight_ounce = l_hun_weight / 0.00055803571428571;
		$('.ounce_avoir').val(convert_l_hun_weight_ounce);
		var convert_l_hun_weight_short_hun_weight = l_hun_weight / 0.89285714285714;
		$('.shorthundred').val(convert_l_hun_weight_short_hun_weight);
	}
	function ounce_voir(ounce) {
		var ounce_voir = parseFloat(ounce);
		var convert_ounce_long_ton = ounce_voir / 35840;
		$('.longton').val(convert_ounce_long_ton);
		var convert_ounce_stone = ounce_voir / 224;
		$('.stone').val(convert_ounce_stone);
		var convert_ounce_short_ton = ounce_voir / 32000;
		$('.shortton').val(convert_ounce_short_ton);
		var convert_ounce_grain = ounce_voir / 0.0022857142857143;
		$('.grain_avoir').val(convert_ounce_grain);
		var convert_ounce_kilopound = ounce_voir / 16000;
		$('.kilopound').val(convert_ounce_kilopound);
		var convert_ounce_pound = ounce_voir / 16;
		$('.pound_avoir').val(convert_ounce_pound);
		var convert_ounce_l_hun_weight = ounce_voir / 1792;
		$('.longhundred').val(convert_ounce_l_hun_weight);
		var convert_ounce_short_hun_weight = ounce_voir / 1600;
		$('.shorthundred').val(convert_ounce_short_hun_weight);
	}
	function short_hun_weight(short_hun_weight) {
		var s_hun_weight = parseFloat(short_hun_weight);
		var convert_short_hun_weight_long_ton = s_hun_weight / 22.4;
		$('.longton').val(convert_short_hun_weight_long_ton);
		var convert_short_hun_weight_stone = s_hun_weight / 0.14;
		$('.stone').val(convert_short_hun_weight_stone);
		var convert_short_hun_weight_short_ton = s_hun_weight / 20;
		$('.shortton').val(convert_short_hun_weight_short_ton);
		var convert_short_hun_weight_grain = s_hun_weight / 1.4285714285714E-6;
		$('.grain_avoir').val(convert_short_hun_weight_grain);
		var convert_short_hun_weight_kilopound = s_hun_weight / 10;
		$('.kilopound').val(convert_short_hun_weight_kilopound);
		var convert_short_hun_weight_pound = s_hun_weight / 0.01;
		$('.pound_avoir').val(convert_short_hun_weight_pound);
		var convert_short_hun_weight_l_hun_weight = s_hun_weight / 1.12;
		$('.longhundred').val(convert_short_hun_weight_l_hun_weight);
		var convert_short_hun_weight_ounce = s_hun_weight / 0.000625;
		$('.ounce_avoir').val(convert_short_hun_weight_ounce);
	}
}

function handle_weight_troy_input(input, num) {

	if (input.hasClass('pound_troy')) {
		pound_troy(num);
	} else if (input.hasClass('ounce_troy')) {
		ounce_troy(num);
	} else if (input.hasClass('carat_troy')) {
		carat_troy(num);
	} else if (input.hasClass('grain_troy')) {
		grain_troy(num);
	} else if (input.hasClass('pennyweight')) {
		pennyweight(num);
	}

	function pound_troy(pound) {
		var pound_troy = parseFloat(pound);
		var convert_pound_carat = pound_troy / 0.0005358457761438;
		$('.carat_troy').val(convert_pound_carat);
		var convert_pound_ounce = pound_troy / 0.083333333333333;
		$('.ounce_troy').val(convert_pound_ounce);
		var convert_pound_grain = pound_troy / 0.00017361111111111;
		$('.grain_troy').val(convert_pound_grain);
		var convert_pound_pennyweight = pound_troy / 0.0041666666666667;
		$('.pennyweight').val(convert_pound_pennyweight);
	}
	function carat_troy(carat) {
		var carat_troy = parseFloat(carat);
		var convert_carat_pound = carat_troy / 1866.208608;
		$('.pound_troy').val(convert_carat_pound);
		var convert_carat_ounce = carat_troy / 155.517384;
		$('.ounce_troy').val(convert_carat_ounce);
		var convert_carat_grain = carat_troy / 0.32399455;
		$('.grain_troy').val(convert_carat_grain);
		var convert_carat_pennyweight = carat_troy / 7.7758692;
		$('.pennyweight').val(convert_carat_pennyweight);
	}
	function ounce_troy(ounce) {
		var ounce_troy = parseFloat(ounce);
		var convert_ounce_pound = ounce_troy / 12;
		$('.pound_troy').val(convert_ounce_pound);
		var convert_ounce_carat = ounce_troy / 0.0064301493137256;
		$('.carat_troy').val(convert_ounce_carat);
		var convert_ounce_grain = ounce_troy / 0.0020833333333333;
		$('.grain_troy').val(convert_ounce_grain);
		var convert_ounce_pennyweight = ounce_troy / 0.05;
		$('.pennyweight').val(convert_ounce_pennyweight);
	}
	function grain_troy(grain) {
		var grain_troy = parseFloat(grain);
		var convert_grain_pound = grain_troy / 5760;
		$('.pound_troy').val(convert_grain_pound);
		var convert_grain_carat = grain_troy / 3.0864716705883;
		$('.carat_troy').val(convert_grain_carat);
		var convert_grain_ounce = grain_troy / 480;
		$('.ounce_troy').val(convert_grain_ounce);
		var convert_grain_pennyweight = grain_troy / 24;
		$('.pennyweight').val(convert_grain_pennyweight);
	}
	function pennyweight(pennyweight) {
		var pennyweight_troy = parseFloat(pennyweight);
		var convert_pennyweight_pound = pennyweight_troy / 240;
		$('.pound_troy').val(convert_pennyweight_pound);
		var convert_pennyweight_carat = pennyweight_troy / 0.12860298627451;
		$('.carat_troy').val(convert_pennyweight_carat);
		var convert_pennyweight_ounce = pennyweight_troy / 20;
		$('.ounce_troy').val(convert_pennyweight_ounce);
		var convert_pennyweight_grain = pennyweight_troy / 0.041666666666667;
		$('.grain_troy').val(convert_pennyweight_grain);
	}
}

function handle_weight_apoth_input(input, num) {

	if (input.hasClass('dram_apoth')) {
		dram_apoth(num);
	} else if (input.hasClass('ounce_apoth')) {
		ounce_apoth(num);
	} else if (input.hasClass('scruple_apoth')) {
		scruple_apoth(num);
	} else if (input.hasClass('grain_apoth')) {
		grain_apoth(num);
	} else if (input.hasClass('pound_apoth')) {
		pound_apoth(num);
	}

	function pound_apoth(pound) {
		var pound_apoth = parseFloat(pound);
		var convert_pound_dram = pound_apoth / 0.010416666666667;
		$('.dram_apoth').val(convert_pound_dram);
		var convert_pound_ounce = pound_apoth / 0.075954861111111;
		$('.ounce_apoth').val(convert_pound_ounce);
		var convert_pound_scruple = pound_apoth / 0.0034722222222222;
		$('.scruple_apoth').val(convert_pound_scruple);
		var convert_pound_grain = pound_apoth / 0.00017361111111111;
		$('.grain_apoth').val(convert_pound_grain);
	}
	function dram_apoth(dram) {
		var dram_apoth = parseFloat(dram);
		var convert_dram_pound = dram_apoth / 116.66666666667;
		$('.pound_apoth').val(convert_dram_pound);
		var convert_dram_ounce = dram_apoth / 7.2916666666667;
		$('.ounce_apoth').val(convert_dram_ounce);
		var convert_dram_scruple = dram_apoth / 0.33333333333333;
		$('.scruple_apoth').val(convert_dram_scruple);
		var convert_dram_grain = dram_apoth / 0.016666666666667;
		$('.grain_apoth').val(convert_dram_grain);
	}
	function ounce_apoth(ounce) {
		var ounce_apoth = parseFloat(ounce);
		var convert_ounce_pound = ounce_apoth / 12;
		$('.pound_apoth').val(convert_ounce_pound);
		var convert_ounce_dram = ounce_apoth / 0.0066005482705393;
		$('.dram_apoth').val(convert_ounce_dram);
		var convert_ounce_scruple = ounce_apoth / 0.041666666666667;
		$('.scruple_apoth').val(convert_ounce_scruple);
		var convert_ounce_grain = ounce_apoth / 0.0020833333333333;
		$('.grain_apoth').val(convert_ounce_grain);
	}
	function scruple_apoth(scruple) {
		var scruple_apoth = parseFloat(scruple);
		var convert_scruple_pound = scruple_apoth / 288;
		$('.pound_apoth').val(convert_scruple_pound);
		var convert_scruple_dram = scruple_apoth / 3;
		$('.dram_apoth').val(convert_scruple_dram);
		var convert_scruple_ounce = scruple_apoth / 24;
		$('.ounce_apoth').val(convert_scruple_ounce);
		var convert_scruple_grain = scruple_apoth / 0.05;
		$('.grain_apoth').val(convert_scruple_grain);
	}
	function grain_apoth(grain) {
		var grain_apoth = parseFloat(grain);
		var convert_grain_pound = grain_apoth / 5760;
		$('.pound_apoth').val(convert_grain_pound);
		var convert_grain_dram = grain_apoth / 60;
		$('.dram_apoth').val(convert_grain_dram);
		var convert_grain_ounce = grain_apoth / 480;
		$('.ounce_apoth').val(convert_grain_ounce);
		var convert_grain_scruple = grain_apoth / 20;
		$('.scruple_apoth').val(convert_grain_scruple);
	}
}

function handle_weight_thai_input(input, num) {

	if (input.hasClass('hap')) {
		hap(num);
	} else if (input.hasClass('chang')) {
		chang(num);
	} else if (input.hasClass('tamlueng')) {
		tamlueng(num);
	} else if (input.hasClass('baht')) {
		baht(num);
	} else if (input.hasClass('salueng_thai')) {
		salueng(num);
	} else if (input.hasClass('fueang')) {
		fueang(num);
	} else if (input.hasClass('seek')) {
		seek(num);
	} else if (input.hasClass('siao')) {
		siao(num);
	}

	function hap(hap) {
		var hap_thai = parseFloat(hap);
		var convert_hap_salueng = round4dec(hap_thai * 16000);
		$('.salueng_thai').val(convert_hap_salueng);
		var convert_hap_chang = round4dec(hap_thai * 50);
		$('.chang').val(convert_hap_chang);
		var convert_hap_fueang = round4dec(hap_thai * 32000);
		$('.fueang').val(convert_hap_fueang);
		var convert_hap_tamlueng = round4dec(hap_thai * 1000);
		$('.tamlueng').val(convert_hap_tamlueng);
		var convert_hap_seek = round4dec(hap_thai * 64000);
		$('.seek').val(convert_hap_seek);
		var convert_hap_baht = round4dec(hap_thai * 4000);
		$('.baht').val(convert_hap_baht);
		var convert_hap_siao = round4dec(hap_thai * 128000);
		$('.siao').val(convert_hap_siao);
	}
	function salueng(salueng) {
		var salueng_thai = parseFloat(salueng);
		var convert_salueng_hap = round4dec(salueng_thai * 0.0000625);
		$('.hap').val(convert_salueng_hap);
		var convert_salueng_chang = round4dec(salueng_thai * 0.003125);
		$('.chang').val(convert_salueng_chang);
		var convert_salueng_fueang = round4dec(salueng_thai * 2);
		$('.fueang').val(convert_salueng_fueang);
		var convert_salueng_tamlueng = round4dec(salueng_thai * 0.0625);
		$('.tamlueng').val(convert_salueng_tamlueng);
		var convert_salueng_seek = round4dec(salueng_thai * 4);
		$('.seek').val(convert_salueng_seek);
		var convert_salueng_baht = round4dec(salueng_thai * 0.25);
		$('.baht').val(convert_salueng_baht);
		var convert_salueng_siao = round4dec(salueng_thai * 8);
		$('.siao').val(convert_salueng_siao);
	}
	function chang(chang) {
		var chang_thai = parseFloat(chang);
		var convert_chang_hap = round4dec(chang_thai * 0.02);
		$('.hap').val(convert_chang_hap);
		var convert_chang_salueng = round4dec(chang_thai * 320);
		$('.salueng_thai').val(convert_chang_salueng);
		var convert_chang_fueang = round4dec(chang_thai * 640);
		$('.fueang').val(convert_chang_fueang);
		var convert_chang_tamlueng = round4dec(chang_thai * 20);
		$('.tamlueng').val(convert_chang_tamlueng);
		var convert_chang_seek = round4dec(chang_thai * 1280);
		$('.seek').val(convert_chang_seek);
		var convert_chang_baht = round4dec(chang_thai * 80);
		$('.baht').val(convert_chang_baht);
		var convert_chang_siao = round4dec(chang_thai * 2560);
		$('.siao').val(convert_chang_siao);
	}
	function fueang(fueang) {
		var fueang_thai = parseFloat(fueang);
		var convert_fueang_hap = round4dec(fueang_thai * 0.00003125);
		$('.hap').val(convert_fueang_hap);
		var convert_fueang_salueng = round4dec(fueang_thai * 0.5);
		$('.salueng_thai').val(convert_fueang_salueng);
		var convert_fueang_chang = round4dec(fueang_thai * 0.001563);
		$('.chang').val(convert_fueang_chang);
		var convert_fueang_tamlueng = round4dec(fueang_thai * 0.03125);
		$('.tamlueng').val(convert_fueang_tamlueng);
		var convert_fueang_seek = round4dec(fueang_thai * 2);
		$('.seek').val(convert_fueang_seek);
		var convert_fueang_baht = round4dec(fueang_thai * 0.125);
		$('.baht').val(convert_fueang_baht);
		var convert_fueang_siao = round4dec(fueang_thai * 4);
		$('.siao').val(convert_fueang_siao);
	}
	function tamlueng(tamlueng) {
		var tamlueng_thai = parseFloat(tamlueng);
		var convert_tamlueng_hap = round4dec(tamlueng_thai * 0.001);
		$('.hap').val(convert_tamlueng_hap);
		var convert_tamlueng_salueng = round4dec(tamlueng_thai * 16);
		$('.salueng_thai').val(convert_tamlueng_salueng);
		var convert_tamlueng_chang = round4dec(tamlueng_thai * 0.05);
		$('.chang').val(convert_tamlueng_chang);
		var convert_tamlueng_fueang = round4dec(tamlueng_thai * 32);
		$('.fueang').val(convert_tamlueng_fueang);
		var convert_tamlueng_seek = round4dec(tamlueng_thai * 64);
		$('.seek').val(convert_tamlueng_seek);
		var convert_tamlueng_baht = round4dec(tamlueng_thai * 4);
		$('.baht').val(convert_tamlueng_baht);
		var convert_tamlueng_siao = round4dec(tamlueng_thai * 128);
		$('.siao').val(convert_tamlueng_siao);
	}
	function seek(seek) {
		var seek_thai = parseFloat(seek);
		var convert_seek_hap = round4dec(seek_thai * 0.00001563);
		$('.hap').val(convert_seek_hap);
		var convert_seek_salueng = round4dec(seek_thai * 0.25);
		$('.salueng_thai').val(convert_seek_salueng);
		var convert_seek_chang = round4dec(seek_thai * 0.0007813);
		$('.chang').val(convert_seek_chang);
		var convert_seek_fueang = round4dec(seek_thai * 0.5);
		$('.fueang').val(convert_seek_fueang);
		var convert_seek_tamlueng = round4dec(seek_thai * 0.01562);
		$('.tamlueng').val(convert_seek_tamlueng);
		var convert_seek_baht = round4dec(seek_thai * 0.0625);
		$('.baht').val(convert_seek_baht);
		var convert_seek_siao = round4dec(seek_thai * 2);
		$('.siao').val(convert_seek_siao);
	}
	function baht(baht) {
		var baht_thai = parseFloat(baht);
		var convert_baht_hap = round4dec(baht_thai * 0.00025);
		$('.hap').val(convert_baht_hap);
		var convert_baht_salueng = round4dec(baht_thai * 4);
		$('.salueng_thai').val(convert_baht_salueng);
		var convert_baht_chang = round4dec(baht_thai * 0.0125);
		$('.chang').val(convert_baht_chang);
		var convert_baht_fueang = round4dec(baht_thai * 8);
		$('.fueang').val(convert_baht_fueang);
		var convert_baht_tamlueng = round4dec(baht_thai * 0.25);
		$('.tamlueng').val(convert_baht_tamlueng);
		var convert_baht_seek = round4dec(baht_thai * 16);
		$('.seek').val(convert_baht_seek);
		var convert_baht_siao = round4dec(baht_thai * 32);
		$('.siao').val(convert_baht_siao);
	}
	function siao(siao) {
		var siao_thai = parseFloat(siao);
		var convert_siao_hap = round4dec(siao_thai * 0.000007813);
		$('.hap').val(convert_siao_hap);
		var convert_siao_salueng = round4dec(siao_thai * 0.125);
		$('.salueng_thai').val(convert_siao_salueng);
		var convert_siao_chang = round4dec(siao_thai * 0.0003906);
		$('.chang').val(convert_siao_chang);
		var convert_siao_fueang = round4dec(siao_thai * 0.25);
		$('.fueang').val(convert_siao_fueang);
		var convert_siao_tamlueng = round4dec(siao_thai * 0.007813);
		$('.tamlueng').val(convert_siao_tamlueng);
		var convert_siao_seek = round4dec(siao_thai * 0.5);
		$('.seek').val(convert_siao_seek);
		var convert_siao_baht = round4dec(siao_thai * 0.03125);
		$('.baht').val(convert_siao_baht);
	}
}

function handle_weight_hongkong_input(input, num) {

	if (input.hasClass('tam')) {
		tam(num);
	} else if (input.hasClass('catty')) {
		catty(num);
	} else if (input.hasClass('leung')) {
		leung(num);
	} else if (input.hasClass('tsin')) {
		tsin(num);
	} else if (input.hasClass('fan')) {
		fan(num);
	} else if (input.hasClass('tael_troy')) {
		tael_troy(num);
	} else if (input.hasClass('troy')) {
		mace_troy(num);
	} else if (input.hasClass('candareen')) {
		candareen(num);
	}

	function tam(tam) {
		var tamz = parseFloat(tam);
		var convert_tam_fan = round4dec(tamz * 160000);
		$('.fan').val(convert_tam_fan);
		var convert_tam_catty = round4dec(tamz * 100);
		$('.catty').val(convert_tam_catty);
		var convert_tam_tael_troy = round4dec(tamz * 1616);
		$('.tael_troy').val(convert_tam_tael_troy);
		var convert_tam_leung = round4dec(tamz * 1600);
		$('.leung').val(convert_tam_leung);
		var convert_tam_troy = round4dec(tamz * 16158);
		$('.troy').val(convert_tam_troy);
		var convert_tam_tsin = round4dec(tamz * 16000);
		$('.tsin').val(convert_tam_tsin);
		var convert_tam_candareen = round4dec(tamz * 161583);
		$('.candareen').val(convert_tam_candareen);
	}
	function fan(fan) {
		var fanz = parseFloat(fan);
		var convert_fan_tam = round4dec(fanz * 0.00000625);
		$('.tam').val(convert_fan_tam);
		var convert_fan_catty = round4dec(fanz * 0.000625);
		$('.catty').val(convert_fan_catty);
		var convert_fan_tael_troy = round4dec(fanz * 0.0101);
		$('.tael_troy').val(convert_fan_tael_troy);
		var convert_fan_leung = round4dec(fanz * 0.01);
		$('.leung').val(convert_fan_leung);
		var convert_fan_troy = round4dec(fanz * 0.101);
		$('.troy').val(convert_fan_troy);
		var convert_fan_tsin = round4dec(fanz * 0.1);
		$('.tsin').val(convert_fan_tsin);
		var convert_fan_candareen = round4dec(fanz * 1.01);
		$('.candareen').val(convert_fan_candareen);
	}
	function catty(catt) {
		var catty = parseFloat(catt);
		var convert_catty_tam = round4dec(catty * 0.01);
		$('.tam').val(convert_catty_tam);
		var convert_catty_fan = round4dec(catty * 1600);
		$('.fan').val(convert_catty_fan);
		var convert_catty_tael_troy = round4dec(catty * 16.16);
		$('.tael_troy').val(convert_catty_tael_troy);
		var convert_catty_leung = round4dec(catty * 16);
		$('.leung').val(convert_catty_leung);
		var convert_catty_troy = round4dec(catty * 161.6);
		$('.troy').val(convert_catty_troy);
		var convert_catty_tsin = round4dec(catty * 160);
		$('.tsin').val(convert_catty_tsin);
		var convert_catty_candareen = round4dec(catty * 1616);
		$('.candareen').val(convert_catty_candareen);
	}
	function tael_troy(tael_troyz) {
		var tael_troy = parseFloat(tael_troyz);
		var convert_tael_troy_tam = round4dec(tael_troy * 0.0006189);
		$('.tam').val(convert_tael_troy_tam);
		var convert_tael_troy_fan = round4dec(tael_troy * 99.02);
		$('.fan').val(convert_tael_troy_fan);
		var convert_tael_troy_catty = round4dec(tael_troy * 0.06189);
		$('.catty').val(convert_tael_troy_catty);
		var convert_tael_troy_leung = round4dec(tael_troy * 0.9902);
		$('.leung').val(convert_tael_troy_leung);
		var convert_tael_troy_troy = round4dec(tael_troy * 10);
		$('.troy').val(convert_tael_troy_troy);
		var convert_tael_troy_tsin = round4dec(tael_troy * 9.902);
		$('.tsin').val(convert_tael_troy_tsin);
		var convert_tael_troy_candareen = round4dec(tael_troy * 100);
		$('.candareen').val(convert_tael_troy_candareen);
	}
	function leung(leungz) {
		var leung = parseFloat(leungz);
		var convert_leung_tam = round4dec(leung * 0.000625);
		$('.tam').val(convert_leung_tam);
		var convert_leung_fan = round4dec(leung * 100);
		$('.fan').val(convert_leung_fan);
		var convert_leung_catty = round4dec(leung * 0.0625);
		$('.catty').val(convert_leung_catty);
		var convert_leung_tael_troy = round4dec(leung * 1.01);
		$('.tael_troy').val(convert_leung_tael_troy);
		var convert_leung_troy = round4dec(leung * 10.1);
		$('.troy').val(convert_leung_troy);
		var convert_leung_tsin = round4dec(leung * 10);
		$('.tsin').val(convert_leung_tsin);
		var convert_leung_candareen = round4dec(leung * 101);
		$('.candareen').val(convert_leung_candareen);
	}
	function mace_troy(troy) {
		var mace_troy = parseFloat(troy);
		var convert_troy_tam = round4dec(mace_troy * 0.00006189);
		$('.tam').val(convert_troy_tam);
		var convert_troy_fan = round4dec(mace_troy * 9.902);
		$('.fan').val(convert_troy_fan);
		var convert_troy_catty = round4dec(mace_troy * 0.006189);
		$('.catty').val(convert_troy_catty);
		var convert_troy_tael_troy = round4dec(mace_troy * 0.1);
		$('.tael_troy').val(convert_troy_tael_troy);
		var convert_troy_leung = round4dec(mace_troy * 0.09902);
		$('.leung').val(convert_troy_leung);
		var convert_troy_tsin = round4dec(mace_troy * 0.9902);
		$('.tsin').val(convert_troy_tsin);
		var convert_troy_candareen = round4dec(mace_troy * 10);
		$('.candareen').val(convert_troy_candareen);
	}
	function tsin(tsinz) {
		var tsin = parseFloat(tsinz);
		var convert_tsin_tam = round4dec(tsin * 0.0000625);
		$('.tam').val(convert_tsin_tam);
		var convert_tsin_fan = round4dec(tsin * 10);
		$('.fan').val(convert_tsin_fan);
		var convert_tsin_catty = round4dec(tsin * 0.00625);
		$('.catty').val(convert_tsin_catty);
		var convert_tsin_tael_troy = round4dec(tsin * 0.101);
		$('.tael_troy').val(convert_tsin_tael_troy);
		var convert_tsin_leung = round4dec(tsin * 0.1);
		$('.leung').val(convert_tsin_leung);
		var convert_tsin_troy = round4dec(tsin * 1.01);
		$('.troy').val(convert_tsin_troy);
		var convert_tsin_candareen = round4dec(tsin * 10.1);
		$('.candareen').val(convert_tsin_candareen);
	}
	function candareen(candaren) {
		var candareen = parseFloat(candaren);
		var convert_candareen_tam = round4dec(candareen * 0.000006189);
		$('.tam').val(convert_candareen_tam);
		var convert_candareen_fan = round4dec(candareen * 0.9902);
		$('.fan').val(convert_candareen_fan);
		var convert_candareen_catty = round4dec(candareen * 0.0006189);
		$('.catty').val(convert_candareen_catty);
		var convert_candareen_tael_troy = round4dec(candareen * 0.01);
		$('.tael_troy').val(convert_candareen_tael_troy);
		var convert_candareen_leung = round4dec(candareen * 0.009902);
		$('.leung').val(convert_candareen_leung);
		var convert_candareen_troy = round4dec(candareen * 0.1);
		$('.troy').val(convert_candareen_troy);
		var convert_candareen_tsin = round4dec(candareen * 0.09902);
		$('.tsin').val(convert_candareen_tsin);
	}
}

function handle_length_input(input, num) {
	switch (input.attr('id')) {
		case 'kilometer':
			kilometer(num);
			break;
		case 'meter':
			meter(num);
			break;
		case 'decimeter':
			decimeter(num);
			break;
		case 'centimeter':
			centimeter(num);
			break;
		case 'millimeter':
			millimeter(num);
			break;
		case 'micrometer':
			micrometer(num);
			break;
		case 'Nanometer':
			Nanometer(num);
			break;
		case 'angstrom':
			angstrom(num);
			break;
		case 'league':
			league(num);
			break;
		case 'mile':
			mile(num);
			break;
		case 'land':
			land(num);
			break;
		case 'bolt':
			bolt(num);
			break;
		case 'foot':
			foot(num);
			break;
		case 'feet':
			feet(num);
			break;
		case 'span':
			span(num);
			break;
		case 'hand':
			hand(num);
			break;
		case 'league_british':
			league_british(num);
			break;
		case 'mile_british':
			mile_british(num);
			break;
		case 'land_british':
			land_british(num);
			break;
		case 'foot_british':
			foot_british(num);
			break;
		case 'span_british':
			span_british(num);
			break;
		case 'nail':
			nail(num);
			break;
		case 'nautical_league':
			nautical_league(num);
			break;
		case 'nautical_mile':
			nautical_mile(num);
			break;
		case 'cable_length':
			cable_length(num);
			break;
		case 'fathom':
			fathom(num);
			break;
		case 'us_nautical_mile':
			us_nautical_mile(num);
			break;
		case 'us_fathom':
			us_fathom(num);
			break;
		case 'us_cable_length':
			us_cable_length(num);
			break;
		case 'admiralty_mile':
			admiralty_mile(num);
			break;
		case 'admiralty_cable_length':
			admiralty_cable_length(num);
			break;
	}

	function kilometer(num) {
		var standard_unit = round4dec(parseFloat(num) * 1000);
		standrize_and_distrebute(standard_unit);
	}

	function meter(num) {
		var standard_unit = round4dec(parseFloat(num) * 1);
		standrize_and_distrebute(standard_unit);
	}

	function decimeter(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.1);
		standrize_and_distrebute(standard_unit);
	}

	function centimeter(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.01);
		standrize_and_distrebute(standard_unit);
	}

	function millimeter(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.001);
		standrize_and_distrebute(standard_unit);
	}

	function micrometer(num) {
		var standard_unit = parseFloat(num) * 1.0E-6;
		standrize_and_distrebute(standard_unit);
	}

	function Nanometer(num) {
		var standard_unit = round4dec(parseFloat(num) * 1.0E-9);
		standrize_and_distrebute(standard_unit);
	}

	function angstrom(num) {
		var standard_unit = round4dec(parseFloat(num) * 1.0E-10);
		standrize_and_distrebute(standard_unit);
	}

	function league(num) {
		var standard_unit = round4dec(parseFloat(num) * 4828);
		standrize_and_distrebute(standard_unit);
	}

	function mile(num) {
		var standard_unit = round4dec(parseFloat(num) * 1609);
		standrize_and_distrebute(standard_unit);
	}

	function land(num) {
		var standard_unit = round4dec(parseFloat(num) * 1609);
		standrize_and_distrebute(standard_unit);
	}

	function bolt(num) {
		var standard_unit = round4dec(parseFloat(num) * 36.58);
		standrize_and_distrebute(standard_unit);
	}

	function foot(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.3048);
		standrize_and_distrebute(standard_unit);
	}

	function feet(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.3048);
		standrize_and_distrebute(standard_unit);
	}

	function span(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.2286);
		standrize_and_distrebute(standard_unit);
	}

	function hand(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.1016);
		standrize_and_distrebute(standard_unit);
	}

	function league_british(num) {
		var standard_unit = round4dec(parseFloat(num) * 4828);
		standrize_and_distrebute(standard_unit);
	}

	function mile_british(num) {
		var standard_unit = round4dec(parseFloat(num) * 1609);
		standrize_and_distrebute(standard_unit);
	}

	function land_british(num) {
		var standard_unit = round4dec(parseFloat(num) * 1609);
		standrize_and_distrebute(standard_unit);
	}

	function foot_british(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.3048);
		standrize_and_distrebute(standard_unit);
	}

	function span_british(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.2286);
		standrize_and_distrebute(standard_unit);
	}

	function nail(num) {
		var standard_unit = round4dec(parseFloat(num) * 0.2286);
		standrize_and_distrebute(standard_unit);
	}

	function nautical_league(num) {
		var standard_unit = round4dec(parseFloat(num) * 5556);
		standrize_and_distrebute(standard_unit);
	}

	function nautical_mile(num) {
		var standard_unit = round4dec(parseFloat(num) * 1852);
		standrize_and_distrebute(standard_unit);
	}

	function cable_length(num) {
		var standard_unit = round4dec(parseFloat(num) * 185.2);
		standrize_and_distrebute(standard_unit);
	}

	function fathom(num) {
		var standard_unit = round4dec(parseFloat(num) * 1.829);
		standrize_and_distrebute(standard_unit);
	}

	function us_nautical_mile(num) {
		var standard_unit = round4dec(parseFloat(num) * 1853);
		standrize_and_distrebute(standard_unit);
	}

	function us_fathom(num) {
		var standard_unit = round4dec(parseFloat(num) * 1.829);
		standrize_and_distrebute(standard_unit);
	}

	function us_cable_length(num) {
		var standard_unit = round4dec(parseFloat(num) * 219.5);
		standrize_and_distrebute(standard_unit);
	}

	function admiralty_mile(num) {
		var standard_unit = round4dec(parseFloat(num) * 1853);
		standrize_and_distrebute(standard_unit);
	}

	function admiralty_cable_length(num) {
		var standard_unit = round4dec(parseFloat(num) * 185.3);
		standrize_and_distrebute(standard_unit);
	}

	function standrize_and_distrebute(unit) {
		var convert_to_kilometer = unit * 0.001;
		$('#kilometer').val(convert_to_kilometer);
		var convert_to_meter = unit * 1;
		$('#meter').val(convert_to_meter);
		var convert_to_decimeter = unit * 10;
		$('#decimeter').val(convert_to_decimeter);
		var convert_to_centimeter = unit * 100;
		$('#centimeter').val(convert_to_centimeter);
		var convert_to_milimeter = unit * 1000;
		$('#millimeter').val(convert_to_milimeter);
		var convert_to_micro = unit * 1000000;
		$('#micrometer').val(convert_to_micro);
		var convert_to_nano = unit * 1000000000;
		$('#Nanometer').val(convert_to_nano);
		var convert_to_angstrom = unit * 10000000000;
		$('#angstrom').val(convert_to_angstrom);
		var convert_to_aleague = unit * 0.00020714;
		$('#league').val(convert_to_aleague);
		var convert_to_amile = unit * 0.00062144;
		$('#mile').val(convert_to_amile);
		var convert_to_aland = unit * 0.00062144;
		$('#land').val(convert_to_aland);
		var convert_to_abolt = unit * 0.027344;
		$('#bolt').val(convert_to_abolt);
		var convert_to_afoot = unit * 3.2814;
		$('#foot').val(convert_to_afoot);
		var convert_to_afeet = unit * 3.2804;
		$('#feet').val(convert_to_afeet);
		var convert_to_aspan = unit * 4.37445;
		$('#span').val(convert_to_aspan);
		var convert_to_ahand = unit * 9.8434;
		$('#hand').val(convert_to_ahand);
		var convert_to_bleague = unit * 0.00020714;
		$('#league_british').val(convert_to_bleague);
		var convert_to_bmile = unit * 0.00062144;
		$('#mile_british').val(convert_to_bmile);
		var convert_to_bland = unit * 0.00062144;
		$('#land_british').val(convert_to_bland);
		var convert_to_bfoot = unit * 3.2814;
		$('#foot_british').val(convert_to_bfoot);
		var convert_to_bspan = unit * 4.37445;
		$('#span_british').val(convert_to_bspan);
		var convert_to_bnail = unit * 4.3744;
		$('#nail').val(convert_to_bnail);
		var convert_to_nleague = unit * 0.000184;
		$('#nautical_league').val(convert_to_nleague);
		var convert_to_nmile = unit * 0.00544;
		$('#nautical_mile').val(convert_to_nmile);
		var convert_to_ncablelength = unit * 0.000544;
		$('#cable_length').val(convert_to_ncablelength);
		var convert_to_nfathom = unit * 0.54684;
		$('#fathom').val(convert_to_nfathom);
		var convert_to_usnmile = unit * 0.00053964;
		$('#us_nautical_mile').val(convert_to_usnmile);
		var convert_to_usfathom = unit * 0.54684;
		$('#us_fathom').val(convert_to_usfathom);
		var convert_to_uscablelength = unit * 0.0045574;
		$('#us_cable_length').val(convert_to_uscablelength);
		var convert_to_admiraltymile = unit * 0.00053964;
		$('#admiralty_mile').val(convert_to_admiraltymile);
		var convert_to_admiraltycablelength = unit * 0.0053964;
		$('#admiralty_cable_length').val(convert_to_admiraltycablelength);
	}
}

function handle_capacity_metric_input(input, num) {

	switch (input.attr('id')) {
		case 'c_km':
			from_km(num);
			break;
		case 'c_m':
			from_meter(num);
			break;
		case 'c_dm':
			from_dm(num);
			break;
		case 'c_cm':
			from_cm(num);
			break;
		case 'c_mm':
			from_mm(num);
			break;
		case 'hl':
			from_hl(num);
			break;
		case 'dl':
			from_dl(num);
			break;
		case 'l':
			from_l(num);
			break;
		case 'deci_l':
			from_deci_l(num);
			break;
		case 'cl':
			from_cl(num);
			break;
		case 'm_lit':
			from_m_lit(num);
			break;
		case 'mic_lit':
			from_mic_lit(num);
			break;
	}

	function from_km(num) {
		var km = parseFloat(num);
		var m = round4dec(km * 1e+9);
		$("#c_m").val(m);
		var dm = round4dec(km * 1e+12);
		$("#c_dm").val(dm);
		var cm = round4dec(km * 1e+15);
		$("#c_cm").val(cm);
		var mm = round4dec(km * 1e+18);
		$("#c_mm").val(mm);
		var hel = round4dec(km * 1e+10);
		$("#hl").val(hel);
		var del = round4dec(km * 1e+11);
		$("#dl").val(del);
		var lit = round4dec(km * 1e+12);
		$("#l").val(lit);
		var deci_lit = round4dec(km * 1e+13);
		$("#deci_l").val(deci_lit);
		var clit = round4dec(km * 1e+14);
		$("#cl").val(clit);
		var mlit = round4dec(km * 1e+15);
		$("#m_lit").val(mlit);
		var miclit = round4dec(km * 1e+18);
		$("#mic_lit").val(miclit);
	}
	function from_meter(num) {
		var m = parseFloat(num);
		var km = round4dec(m * 1e-9);
		$("#c_km").val(km);
		var dm = round4dec(m * 1000);
		$("#c_dm").val(dm);
		var cm = round4dec(m * 1e+6);
		$("#c_cm").val(cm);
		var mm = round4dec(m * 1e+9);
		$("#c_mm").val(mm);
		var hl = round4dec(m * 10);
		$("#hl").val(hl);
		var dl = round4dec(m * 100);
		$("#dl").val(dl);
		var liter = round4dec(m * 1000);
		$("#l").val(liter);
		var deci_liter = round4dec(m * 10000);
		$("#deci_l").val(deci_liter);
		var centi_liter = round4dec(m * 100000);
		$("#cl").val(centi_liter);
		var m_lit = round4dec(m * 1e+6);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(m * 1e+9);
		$("#mic_lit").val(mic_lit);
	}
	function from_dm(num) {
		var dm = parseFloat(num);
		var km = round4dec(dm * 1e-12);
		$("#c_km").val(km);
		var m = round4dec(dm * 0.001);
		$("#c_m").val(m);
		var c_cm = round4dec(dm * 1000);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(dm * 1e+6);
		$("#c_mm").val(c_mm);
		var hl = round4dec(dm * 0.01);
		$("#hl").val(hl);
		var dl = round4dec(dm * 0.1);
		$("#dl").val(dl);
		var liter = round4dec(dm * 1);
		$("#l").val(liter);
		var deci_l = round4dec(dm * 10);
		$("#deci_l").val(deci_l);
		var cl = round4dec(dm * 100);
		$("#cl").val(cl);
		var m_lit = round4dec(dm * 1000);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(dm * 1e+6);
		$("#mic_lit").val(mic_lit);
	}
	function from_cm(num) {
		var cm = parseFloat(num);
		var km = round4dec(cm * 1e-15);
		$("#c_km").val(km);
		var m = round4dec(cm * 1e-6);
		$("#c_m").val(m);
		var c_dm = round4dec(cm * 0.001);
		$("#c_dm").val(c_dm);
		var c_mm = round4dec(cm * 1000);
		$("#c_mm").val(c_mm);
		var hl = round4dec(cm * 1e-5);
		$("#hl").val(hl);
		var dl = round4dec(cm * 0.0001);
		$("#dl").val(dl);
		var liter = round4dec(cm * 0.001);
		$("#l").val(liter);
		var deci_l = round4dec(cm * 0.01);
		$("#deci_l").val(deci_l);
		var cl = round4dec(cm * 0.1);
		$("#cl").val(cl);
		var m_lit = round4dec(cm * 1);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(cm * 1000);
		$("#mic_lit").val(mic_lit);
	}
	function from_mm(num) {
		var mm = parseFloat(num);
		var km = round4dec(mm * 1e-18);
		$("#c_km").val(km);
		var m = round4dec(mm * 1e-9);
		$("#c_m").val(m);
		var c_dm = round4dec(mm * 1e-6);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(mm * 0.001);
		$("#c_cm").val(c_cm);
		var hl = round4dec(mm * 1e-8);
		$("#hl").val(hl);
		var dl = round4dec(mm * 1e-7);
		$("#dl").val(dl);
		var liter = round4dec(mm * 1e-6);
		$("#l").val(liter);
		var deci_l = round4dec(mm * 1e-5);
		$("#deci_l").val(deci_l);
		var cl = round4dec(mm * 0.0001);
		$("#cl").val(cl);
		var m_lit = round4dec(mm * 0.001);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(mm * 1);
		$("#mic_lit").val(mic_lit);
	}
	function from_hl(num) {
		var hl = parseFloat(num);
		var km = round4dec(hl * 1e-10);
		$("#c_km").val(km);
		var m = round4dec(hl * 0.1);
		$("#c_m").val(m);
		var c_dm = round4dec(hl * 100);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(hl * 100000);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(hl * 1e+8);
		$("#c_mm").val(c_mm);
		var dl = round4dec(hl * 10);
		$("#dl").val(dl);
		var liter = round4dec(hl * 100);
		$("#l").val(liter);
		var deci_l = round4dec(hl * 1000);
		$("#deci_l").val(deci_l);
		var cl = round4dec(hl * 10000);
		$("#cl").val(cl);
		var m_lit = round4dec(hl * 100000);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(hl * 1e+8);
		$("#mic_lit").val(mic_lit);
	}
	function from_dl(num) {
		var dl = parseFloat(num);
		var km = round4dec(dl * 1e-11);
		$("#c_km").val(km);
		var m = round4dec(dl * 0.01);
		$("#c_m").val(m);
		var c_dm = round4dec(dl * 10);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(dl * 10000);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(dl * 1e+7);
		$("#c_mm").val(c_mm);
		var hl = round4dec(dl * 0.1);
		$("#hl").val(hl);
		var liter = round4dec(dl * 10);
		$("#l").val(liter);
		var deci_l = round4dec(dl * 100);
		$("#deci_l").val(deci_l);
		var cl = round4dec(dl * 1000);
		$("#cl").val(cl);
		var m_lit = round4dec(dl * 10000);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(dl * 1e+7);
		$("#mic_lit").val(mic_lit);
	}
	function from_l(num) {
		var l = parseFloat(num);
		var km = round4dec(l * 1e-12);
		$("#c_km").val(km);
		var m = round4dec(l * 0.001);
		$("#c_m").val(m);
		var c_dm = round4dec(l * 1);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(l * 1000);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(l * 1e+6);
		$("#c_mm").val(c_mm);
		var hl = round4dec(l * 0.01);
		$("#hl").val(hl);
		var dl = round4dec(l * 0.1);
		$("#dl").val(dl);
		var deci_l = round4dec(l * 10);
		$("#deci_l").val(deci_l);
		var cl = round4dec(l * 100);
		$("#cl").val(cl);
		var m_lit = round4dec(l * 1000);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(l * 1e+6);
		$("#mic_lit").val(mic_lit);
	}
	function from_deci_l(num) {
		var deci_l = parseFloat(num);
		var km = round4dec(deci_l * 1e-13);
		$("#c_km").val(km);
		var m = round4dec(deci_l * 0.0001);
		$("#c_m").val(m);
		var c_dm = round4dec(deci_l * 0.1);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(deci_l * 100);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(deci_l * 100000);
		$("#c_mm").val(c_mm);
		var hl = round4dec(deci_l * 0.001);
		$("#hl").val(hl);
		var dl = round4dec(deci_l * 0.01);
		$("#dl").val(dl);
		var liter = round4dec(deci_l * 0.1);
		$("#l").val(liter);
		var cl = round4dec(deci_l * 10);
		$("#cl").val(cl);
		var m_lit = round4dec(deci_l * 100);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(deci_l * 100000);
		$("#mic_lit").val(mic_lit);
	}
	function from_cl(num) {
		var cl = parseFloat(num);
		var km = round4dec(cl * 1e-14);
		$("#c_km").val(km);
		var m = round4dec(cl * 1e-5);
		$("#c_m").val(m);
		var c_dm = round4dec(cl * 0.01);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(cl * 10);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(cl * 10000);
		$("#c_mm").val(c_mm);
		var hl = round4dec(cl * 0.0001);
		$("#hl").val(hl);
		var dl = round4dec(cl * 0.001);
		$("#dl").val(dl);
		var liter = round4dec(cl * 0.01);
		$("#l").val(liter);
		var deci_l = round4dec(cl * 0.1);
		$("#deci_l").val(deci_l);
		var m_lit = round4dec(cl * 10);
		$("#m_lit").val(m_lit);
		var mic_lit = round4dec(cl * 10000);
		$("#mic_lit").val(mic_lit);
	}
	function from_m_lit(num) {
		var m_lit = parseFloat(num);
		var km = round4dec(m_lit * 1e-15);
		$("#c_km").val(km);
		var m = round4dec(m_lit * 1e-6);
		$("#c_m").val(m);
		var c_dm = round4dec(m_lit * 0.001);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(m_lit * 1);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(m_lit * 1000);
		$("#c_mm").val(c_mm);
		var hl = round4dec(m_lit * 1e-5);
		$("#hl").val(hl);
		var dl = round4dec(m_lit * 1e-4);
		$("#dl").val(dl);
		var liter = round4dec(m_lit * 0.001);
		$("#l").val(liter);
		var deci_l = round4dec(m_lit * 0.01);
		$("#deci_l").val(deci_l);
		var cl = round4dec(m_lit * 0.1);
		$("#cl").val(cl);
		var mic_lit = round4dec(m_lit * 1000);
		$("#mic_lit").val(mic_lit);
	}
	function from_mic_lit(num) {
		var mic_lit = parseFloat(num);
		var km = round4dec(mic_lit * 1e-18);
		$("#c_km").val(km);
		var m = round4dec(mic_lit * 1e-9);
		$("#c_m").val(m);
		var c_dm = round4dec(mic_lit * 1e-6);
		$("#c_dm").val(c_dm);
		var c_cm = round4dec(mic_lit * 0.001);
		$("#c_cm").val(c_cm);
		var c_mm = round4dec(mic_lit * 1);
		$("#c_mm").val(c_mm);
		var hl = round4dec(mic_lit * 1e-8);
		$("#hl").val(hl);
		var dl = round4dec(mic_lit * 1e-7);
		$("#dl").val(dl);
		var liter = round4dec(mic_lit * 1e-6);
		$("#l").val(liter);
		var deci_l = round4dec(mic_lit * 1e-5);
		$("#deci_l").val(deci_l);
		var cl = round4dec(mic_lit * 0.0001);
		$("#cl").val(cl);
		var m_lit = round4dec(mic_lit * 0.001);
		$("#m_lit").val(m_lit);
	}
}

function handle_capacity_liquid_input(input, num) {

	switch (input.attr('id')) {
		case 'foot':
			from_foot(num);
			break;
		case 'pet_barrel':
			from_pet_barrel(num);
			break;
		case 'beer_barrel':
			from_beer_barrel(num);
			break;
		case 'gal':
			from_gal(num);
			break;
		case 'quart':
			from_quart(num);
			break;
		case 'pint':
			from_pint(num);
			break;
		case 'gill':
			from_gill(num);
			break;
		case 'oz':
			from_oz(num);
			break;
		case 'dram':
			from_dram(num);
			break;
		case 'minim':
			from_minim(num);
			break;
	}

	function from_foot(num) {
		var foot = parseFloat(num);
		var pint = round4dec(foot * 2.607e+6);
		$("#pint").val(pint);
		var pet_barrel = round4dec(foot * 7758.3673);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(foot * 1.043e+7);
		$("#gill").val(gill);
		var beer_barrel = round4dec(foot * 266920.85);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(foot * 4.171e+7);
		$("#oz").val(oz);
		var gal = round4dec(foot * 325851);
		$("#gal").val(gal);
		var dram = round4dec(foot * 3.337e+8);
		$("#dram").val(dram);
		var quart = round4dec(foot * 1.303e+6);
		$("#quart").val(quart);
		var minim = round4dec(foot * 2.002e+10);
		$("#minim").val(minim);
	}

	function from_pint(num) {
		var pint = parseFloat(num);
		var foot = round4dec(pint * 3.83611e-7);
		$("#foot").val(foot);
		var pet_barrel = round4dec(pint * 0.00297619);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(pint * 4);
		$("#gill").val(gill);
		var beer_barrel = round4dec(pint * 0.004032258064516129);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(pint * 16);
		$("#oz").val(oz);
		var gal = round4dec(pint * 0.125);
		$("#gal").val(gal);
		var dram = round4dec(pint * 128);
		$("#dram").val(dram);
		var quart = round4dec(pint * 0.5);
		$("#quart").val(quart);
		var minim = round4dec(pint * 7680);
		$("#minim").val(minim);
	}

	function from_pet_barrel(num) {
		var pet_barrel = parseFloat(num);
		var foot = round4dec(pet_barrel * 0.000128893);
		$("#foot").val(foot);
		var pint = round4dec(pet_barrel * 336);
		$("#pint").val(pint);
		var gill = round4dec(pet_barrel * 1344);
		$("#gill").val(gill);
		var beer_barrel = round4dec(pet_barrel * 1.35);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(pet_barrel * 5376);
		$("#oz").val(oz);
		var gal = round4dec(pet_barrel * 42);
		$("#gal").val(gal);
		var dram = round4dec(pet_barrel * 43008);
		$("#dram").val(dram);
		var quart = round4dec(pet_barrel * 168);
		$("#quart").val(quart);
		var minim = round4dec(pet_barrel * 2685873.85);
		$("#minim").val(minim);
	}

	function from_gill(num) {
		var gill = parseFloat(num);
		var foot = round4dec(gill * 9.59027e-8);
		$("#foot").val(foot);
		var pint = round4dec(gill * 0.25);
		$("#pint").val(pint);
		var pet_barrel = round4dec(gill * 0.000744048);
		$("#pet_barrel").val(pet_barrel);
		var beer_barrel = round4dec(gill * 0.00100806);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(gill * 4);
		$("#oz").val(oz);
		var gal = round4dec(gill * 0.03125);
		$("#gal").val(gal);
		var dram = round4dec(gill * 32);
		$("#dram").val(dram);
		var quart = round4dec(gill * 0.125);
		$("#quart").val(quart);
		var minim = round4dec(gill * 1920);
		$("#minim").val(minim);
	}

	function from_beer_barrel(num) {
		var beer_barrel = parseFloat(num);
		var foot = round4dec(beer_barrel * 9.51355e-5);
		$("#foot").val(foot);
		var pint = round4dec(beer_barrel * 248);
		$("#pint").val(pint);
		var pet_barrel = round4dec(beer_barrel * 0.7381);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(beer_barrel * 992);
		$("#gill").val(gill);
		var oz = round4dec(beer_barrel * 3968);
		$("#oz").val(oz);
		var gal = round4dec(beer_barrel * 31);
		$("#gal").val(gal);
		var dram = round4dec(beer_barrel * 31744);
		$("#dram").val(dram);
		var quart = round4dec(beer_barrel * 124);
		$("#quart").val(quart);
		var minim = round4dec(beer_barrel * 1904640);
		$("#minim").val(minim);
	}

	function from_oz(num) {
		var oz = parseFloat(num);
		var foot = round4dec(oz * 2.39757e-8);
		$("#foot").val(foot);
		var pint = round4dec(oz * 0.0625);
		$("#pint").val(pint);
		var pet_barrel = round4dec(oz * 0.000186);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(oz * 0.25);
		$("#gill").val(gill);
		var beer_barrel = round4dec(oz * 0.000252016);
		$("#beer_barrel").val(beer_barrel);
		var gal = round4dec(oz * 0.0078125);
		$("#gal").val(gal);
		var dram = round4dec(oz * 8);
		$("#dram").val(dram);
		var quart = round4dec(oz * 0.03125);
		$("#quart").val(quart);
		var minim = round4dec(oz * 480);
		$("#minim").val(minim);
	}

	function from_gal(num) {
		var gal = parseFloat(num);
		var foot = round4dec(gal * 3.06889e-6);
		$("#foot").val(foot);
		var pint = round4dec(gal * 8);
		$("#pint").val(pint);
		var pet_barrel = round4dec(gal * 0.02381);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(gal * 32);
		$("#gill").val(gill);
		var beer_barrel = round4dec(gal * 0.03226);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(gal * 128);
		$("#oz").val(oz);
		var dram = round4dec(gal * 1024);
		$("#dram").val(dram);
		var quart = round4dec(gal * 4);
		$("#quart").val(quart);
		var minim = round4dec(gal * 61440);
		$("#minim").val(minim);
	}

	function from_dram(num) {
		var dram = parseFloat(num);
		var foot = round4dec(dram * 2.99696e-9);
		$("#foot").val(foot);
		var pint = round4dec(dram * 0.007813);
		$("#pint").val(pint);
		var pet_barrel = round4dec(dram * 0.00002325);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(dram * 0.03125);
		$("#gill").val(gill);
		var beer_barrel = round4dec(dram * 0.0000315);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(dram * 0.125);
		$("#oz").val(oz);
		var gal = round4dec(dram * 0.000976563);
		$("#gal").val(gal);
		var quart = round4dec(dram * 0.00390625);
		$("#quart").val(quart);
		var minim = round4dec(dram * 60);
		$("#minim").val(minim);
	}

	function from_quart(num) {
		var quart = parseFloat(num);
		var foot = round4dec(quart * 7.67222e-7);
		$("#foot").val(foot);
		var pint = round4dec(quart * 2);
		$("#pint").val(pint);
		var pet_barrel = round4dec(quart * 0.005952);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(quart * 8);
		$("#gill").val(gill);
		var beer_barrel = round4dec(quart * 0.008065);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(quart * 32);
		$("#oz").val(oz);
		var gal = round4dec(quart * 0.25);
		$("#gal").val(gal);
		var dram = round4dec(quart * 256);
		$("#dram").val(dram);
		var minim = round4dec(quart * 15360);
		$("#minim").val(minim);
	}

	function from_minim(num) {
		var minim = parseFloat(num);
		var foot = round4dec(minim * 4.99493e-11);
		$("#foot").val(foot);
		var pint = round4dec(minim * 0.000130208);
		$("#pint").val(pint);
		var pet_barrel = round4dec(minim * 0.0000003875);
		$("#pet_barrel").val(pet_barrel);
		var gill = round4dec(minim * 0.000520833);
		$("#gill").val(gill);
		var beer_barrel = round4dec(minim * 0.000000525);
		$("#beer_barrel").val(beer_barrel);
		var oz = round4dec(minim * 0.00208333);
		$("#oz").val(oz);
		var gal = round4dec(minim * 1.6276e-5);
		$("#gal").val(gal);
		var dram = round4dec(minim * 0.0166667);
		$("#dram").val(dram);
		var quart = round4dec(minim * 6.51041e-5);
		$("#quart").val(quart);
	}
}

function handle_capacity_dry_input(input, num) {

	switch (input.attr('id')) {
		case 'barrel':
			from_barrel(num);
			break;
		case 'bushel':
			from_bushel(num);
			break;
		case 'peck':
			from_peck(num);
			break;
		case 'gallon':
			from_gallon(num);
			break;
		case 'quart_dry':
			from_quart(num);
			break;
		case 'pint_pt':
			from_pint(num);
			break;
	}

	function from_barrel(num) {
		var barrel = parseFloat(num);
		var gallon = round4dec(barrel * 26.25);
		$("#gallon").val(gallon);
		var bushel = round4dec(barrel * 3.281);
		$("#bushel").val(bushel);
		var quart = round4dec(barrel * 105);
		$("#quart_dry").val(quart);
		var peck = round4dec(barrel * 13.12);
		$("#peck").val(peck);
		var pint = round4dec(barrel * 210);
		$("#pint_pt").val(pint);
	}

	function from_gallon(num) {
		var gallon = parseFloat(num);
		var barrel = round4dec(gallon * 0.0381);
		$("#barrel").val(barrel);
		var bushel = round4dec(gallon * 0.125);
		$("#bushel").val(bushel);
		var quart = round4dec(gallon * 4);
		$("#quart_dry").val(quart);
		var peck = round4dec(gallon * 0.5);
		$("#peck").val(peck);
		var pint = round4dec(gallon * 8);
		$("#pint_pt").val(pint);
	}

	function from_bushel(num) {
		var bushel = parseFloat(num);
		var barrel = round4dec(bushel * 0.3048);
		$("#barrel").val(barrel);
		var gallon = round4dec(bushel * 8);
		$("#gallon").val(gallon);
		var quart = round4dec(bushel * 32);
		$("#quart").val(quart);
		var peck = round4dec(bushel * 4);
		$("#peck").val(peck);
		var pint = round4dec(bushel * 64);
		$("#pint_pt").val(pint);
	}

	function from_quart(num) {
		var quart = parseFloat(num);
		var barrel = round4dec(quart * 0.009524);
		$("#barrel").val(barrel);
		var gallon = round4dec(quart * 0.25);
		$("#gallon").val(gallon);
		var bushel = round4dec(quart * 0.03125);
		$("#bushel").val(bushel);
		var peck = round4dec(quart * 0.125);
		$("#peck").val(peck);
		var pint = round4dec(quart * 2);
		$("#pint_pt").val(pint);
	}

	function from_peck(num) {
		var peck = parseFloat(num);
		var barrel = round4dec(peck * 0.07619);
		$("#barrel").val(barrel);
		var gallon = round4dec(peck * 2);
		$("#gallon").val(gallon);
		var bushel = round4dec(peck * 0.25);
		$("#bushel").val(bushel);
		var quart = round4dec(peck * 8);
		$("#quart_dry").val(quart);
		var pint = round4dec(peck * 16);
		$("#pint_pt").val(pint);
	}

	function from_pint(num) {
		var pint = parseFloat(num);
		var barrel = round4dec(pint * 0.004762);
		$("#barrel").val(barrel);
		var gallon = round4dec(pint * 0.125);
		$("#gallon").val(gallon);
		var bushel = round4dec(pint * 0.01562);
		$("#bushel").val(bushel);
		var quart = round4dec(pint * 0.5);
		$("#quart_dry").val(quart);
		var peck = round4dec(pint * 0.0625);
		$("#peck").val(peck);
	}
}

function handle_capacity_british_input(input, num) {

	switch (input.attr('id')) {
		case 'cm':
			from_mile(num);
			break;
		case 'mcf':
			from_mcf(num);
			break;
		case 'cy':
			from_yard(num);
			break;
		case 'ccf':
			from_ccf(num);
			break;
		case 'cf':
			from_foot(num);
			break;
		case 'ci':
			from_inch(num);
			break;
	}

	function from_mile(num) {
		var mile = parseFloat(num);
		var ccf = round4dec(mile * 1.472e+9);
		$("#ccf").val(ccf);
		var mcf = round4dec(mile * 1.472e+11);
		$("#mcf").val(mcf);
		var foot = round4dec(mile * 1.472e+11);
		$("#cf").val(foot);
		var yard = round4dec(mile * 5.452e+9);
		$("#cy").val(yard);
		var inch = round4dec(mile * 2.544e+14);
		$("#ci").val(inch);
	}

	function from_ccf(num) {
		var ccf = parseFloat(num);
		var mile = round4dec(ccf * 6.79357e-10);
		$("#cm").val(mile);
		var mcf = round4dec(ccf * 0.1);
		$("#mcf").val(mcf);
		var foot = round4dec(ccf * 100);
		$("#cf").val(foot);
		var yard = round4dec(ccf * 3.7037);
		$("#cy").val(yard);
		var inch = round4dec(ccf * 172800);
		$("#ci").val(inch);
	}

	function from_mcf(num) {
		var mcf = parseFloat(num);
		var mile = round4dec(mcf * 6.79357e-12);
		$("#cm").val(mile);
		var ccf = round4dec(mcf * 10);
		$("#ccf").val(ccf);
		var foot = round4dec(mcf * 1000);
		$("#cf").val(foot);
		var yard = round4dec(mcf * 37.04);
		$("#cy").val(yard);
		var inch = round4dec(mcf * 1728000);
		$("#ci").val(inch);
	}

	function from_foot(num) {
		var foot = parseFloat(num);
		var mile = round4dec(foot * 6.79357e-12);
		$("#cm").val(mile);
		var ccf = round4dec(foot * 0.01);
		$("#ccf").val(ccf);
		var mcf = round4dec(foot * 0.001);
		$("#mcf").val(mcf);
		var yard = round4dec(foot * 0.037037);
		$("#cy").val(yard);
		var inch = round4dec(foot * 1728);
		$("#ci").val(inch);
	}

	function from_yard(num) {
		var yard = parseFloat(num);
		var mile = round4dec(yard * 1.83426e-10);
		$("#cm").val(mile);
		var ccf = round4dec(yard * 0.27);
		$("#ccf").val(ccf);
		var mcf = round4dec(yard * 0.027);
		$("#mcf").val(mcf);
		var foot = round4dec(yard * 27);
		$("#cf").val(foot);
		var inch = round4dec(yard * 46656);
		$("#ci").val(inch);
	}

	function from_inch(num) {
		var inch = parseFloat(num);
		var mile = round4dec(inch * 3.93147e-15);
		$("#cm").val(mile);
		var ccf = round4dec(inch * 5.78704e-6);
		$("#ccf").val(ccf);
		var mcf = round4dec(inch * 0.0000005787);
		$("#mcf").val(mcf);
		var foot = round4dec(inch * 0.000578704);
		$("#cf").val(foot);
		var yard = round4dec(inch * 2.14335e-5);
		$("#cy").val(yard);
	}
}

function handle_capacity_wine_input(input, num) {

	switch (input.attr('id')) {
		case 'tun':
			from_tun(num);
			break;
		case 'butt':
			from_butt(num);
			break;
		case 'puncheon':
			from_puncheon(num);
			break;
		case 'rundlet':
			from_rundlet(num);
			break;
		case 'hogshead':
			from_hogshead(num);
			break;
		case 'tierce':
			from_tierce(num);
			break;
		case 'wine_barrel':
			from_barrel(num);
			break;
	}
	function from_tun(num) {
		var tun = parseFloat(num);
		var hogshead = round4dec(tun * 4);
		$("#hogshead").val(hogshead);
		var butt = round4dec(tun * 2);
		$("#butt").val(butt);
		var tierce = round4dec(tun * 6);
		$("#tierce").val(tierce);
		var puncheon = round4dec(tun * 3);
		$("#puncheon").val(puncheon);
		var barrel = round4dec(tun * 8);
		$("#wine_barrel").val(barrel);
		var rundlet = round4dec(tun * 14);
		$("#rundlet").val(rundlet);
	}

	function from_hogshead(num) {
		var hogshead = parseFloat(num);
		var tun = round4dec(hogshead * 0.25);
		$("#tun").val(tun);
		var butt = round4dec(hogshead * 0.5);
		$("#butt").val(butt);
		var tierce = round4dec(hogshead * 1.5);
		$("#tierce").val(tierce);
		var puncheon = round4dec(hogshead * 0.75);
		$("#puncheon").val(puncheon);
		var barrel = round4dec(hogshead * 2);
		$("#wine_barrel").val(barrel);
		var rundlet = round4dec(hogshead * 3.5);
		$("#rundlet").val(rundlet);
	}

	function from_butt(num) {
		var butt = parseFloat(num);
		var tun = round4dec(butt * 0.5);
		$("#tun").val(tun);
		var hogshead = round4dec(butt * 2);
		$("#hogshead").val(hogshead);
		var tierce = round4dec(butt * 3);
		$("#tierce").val(tierce);
		var puncheon = round4dec(butt * 1.5);
		$("#puncheon").val(puncheon);
		var barrel = round4dec(butt * 4);
		$("#wine_barrel").val(barrel);
		var rundlet = round4dec(butt * 7);
		$("#rundlet").val(rundlet);
	}

	function from_tierce(num) {
		var tierce = parseFloat(num);
		var tun = round4dec(tierce * 0.1667);
		$("#tun").val(tun);
		var hogshead = round4dec(tierce * 0.6667);
		$("#hogshead").val(hogshead);
		var butt = round4dec(tierce * 0.3333);
		$("#butt").val(butt);
		var puncheon = round4dec(tierce * 0.5);
		$("#puncheon").val(puncheon);
		var barrel = round4dec(tierce * 1.333);
		$("#wine_barrel").val(barrel);
		var rundlet = round4dec(tierce * 2.333);
		$("#rundlet").val(rundlet);
	}

	function from_puncheon(num) {
		var puncheon = parseFloat(num);
		var tun = round4dec(puncheon * 0.3333);
		$("#tun").val(tun);
		var hogshead = round4dec(puncheon * 1.333);
		$("#hogshead").val(hogshead);
		var butt = round4dec(puncheon * 0.6667);
		$("#butt").val(butt);
		var tierce = round4dec(puncheon * 2);
		$("#tierce").val(tierce);
		var barrel = round4dec(puncheon * 2.667);
		$("#wine_barrel").val(barrel);
		var rundlet = round4dec(puncheon * 4.667);
		$("#rundlet").val(rundlet);
	}

	function from_barrel(num) {
		var barrel = parseFloat(num);
		var tun = round4dec(barrel * 0.125);
		$("#tun").val(tun);
		var hogshead = round4dec(barrel * 0.5);
		$("#hogshead").val(hogshead);
		var butt = round4dec(barrel * 0.25);
		$("#butt").val(butt);
		var tierce = round4dec(barrel * 0.75);
		$("#tierce").val(tierce);
		var puncheon = round4dec(barrel * 0.375);
		$("#puncheon").val(puncheon);
		var rundlet = round4dec(barrel * 1.75);
		$("#rundlet").val(rundlet);
	}

	function from_rundlet(num) {
		var rundlet = parseFloat(num);
		var tun = round4dec(rundlet * 0.07143);
		$("#tun").val(tun);
		var hogshead = round4dec(rundlet * 0.2857);
		$("#hogshead").val(hogshead);
		var butt = round4dec(rundlet * 0.1429);
		$("#butt").val(butt);
		var tierce = round4dec(rundlet * 0.4286);
		$("#tierce").val(tierce);
		var puncheon = round4dec(rundlet * 0.2143);
		$("#puncheon").val(puncheon);
		var barrel = round4dec(rundlet * 0.5714);
		$("#wine_barrel").val(barrel);
	}
}

function handle_capacity_cooking_us_input(input, num) {

	switch (input.attr('id')) {
		case 'cup_us':
			from_cup(num);
			break;
		case 'teaspoon_us':
			from_teaspoon(num);
			break;
		case 'tablespoon_us':
			from_tablespoon(num);
			break;
	}

	function from_cup(num) {
		var cup = parseFloat(num);
		var tablespoon = round4dec(cup * 16);
		$("#tablespoon_us").val(tablespoon);
		var teaspoon = round4dec(cup * 48);
		$("#teaspoon_us").val(teaspoon);
	}

	function from_tablespoon(num) {
		var tablespoon = parseFloat(num);
		var cup = round4dec(tablespoon * 0.0625);
		$("#cup_us").val(cup);
		var teaspoon = round4dec(tablespoon * 3);
		$("#teaspoon_us").val(teaspoon);
	}

	function from_teaspoon(num) {
		var teaspoon = parseFloat(num);
		var cup = round4dec(teaspoon * 0.02083);
		$("#cup_us").val(cup);
		var tablespoon = round4dec(teaspoon * 0.3333);
		$("#tablespoon_us").val(tablespoon);
	}
}

function handle_capacity_cooking_int_input(input, num) {

	switch (input.attr('id')) {
		case 'cup_int':
			from_cup(num);
			break;
		case 'teaspoon_int':
			from_teaspoon(num);
			break;
		case 'tablespoon_int':
			from_tablespoon(num);
			break;
	}

	function from_cup(num) {
		var cup = parseFloat(num);
		var tablespoon = round4dec(cup * 16);
		$("#tablespoon_int").val(tablespoon);
		var teaspoon = round4dec(cup * 48);
		$("#teaspoon_int").val(teaspoon);
	}

	function from_tablespoon(num) {
		var tablespoon = parseFloat(num);
		var cup = round4dec(tablespoon * 0.0625);
		$("#cup_int").val(cup);
		var teaspoon = round4dec(tablespoon * 3);
		$("#teaspoon_int").val(teaspoon);
	}

	function from_teaspoon(num) {
		var teaspoon = parseFloat(num);
		var cup = round4dec(teaspoon * 0.02083);
		$("#cup_int").val(cup);
		var tablespoon = round4dec(teaspoon * 0.3333);
		$("#tablespoon_int").val(tablespoon);
	}
}

function handle_capacity_cooking_aus_input(input, num) {

	switch (input.attr('id')) {
		case 'tablespoon_aus':
			from_tablespoon(num);
			break;
		case 'teaspoon_aus':
			from_teaspoon(num);
			break;
		case 'dessert_teaspoon':
			from_dessert(num);
			break;
	}

	function from_tablespoon(num) {
		var tablespoon = parseFloat(num);
		var dessert = round4dec(tablespoon * 2);
		$("#dessert_teaspoon").val(dessert);
		var teaspoon = round4dec(tablespoon * 4);
		$("#teaspoon_aus").val(teaspoon);
	}

	function from_dessert(num) {
		var dessert = parseFloat(num);
		var tablespoon = round4dec(dessert * 0.5);
		$("#tablespoon_aus").val(tablespoon);
		var teaspoon = round4dec(dessert * 2);
		$("#teaspoon_aus").val(teaspoon);
	}

	function from_teaspoon(num) {
		var teaspoon = parseFloat(num);
		var tablespoon = round4dec(teaspoon * 0.25);
		$("#tablespoon_aus").val(tablespoon);
		var dessert = round4dec(teaspoon * 0.5);
		$("#dessert_teaspoon").val(dessert);
	}
}

function handle_capacity_astro_input(input, num) {

	switch (input.attr('id')) {
		case 'parsec':
			from_parsec(num);
			break;
		case 'year':
			from_year(num);
			break;
		case 'minute':
			from_minute(num);
			break;
		case 'second':
			from_second(num);
			break;
	}
	function from_parsec(num) {
		var parsec = parseFloat(num);
		var minute = round4dec(parsec * 5.048191e+18);
		$("#minute").val(minute);
		var year = round4dec(parsec * 34.7);
		$("#year").val(year);
		var second = round4dec(parsec * 1.09e+24);
		$("#second").val(second);
	}

	function from_minute(num) {
		var minute = parseFloat(num);
		var parsec = round4dec(minute * 1.981e-19);
		$("#parsec").val(parsec);
		var year = round4dec(minute * 6.873e-18);
		$("#year").val(year);
		var second = round4dec(minute * 216000);
		$("#second").val(second);
	}

	function from_year(num) {
		var year = parseFloat(num);
		var parsec = round4dec(year * 0.02882);
		$("#parsec").val(parsec);
		var minute = round4dec(year * 1.4549838e+17);
		$("#minute").val(minute);
		var second = round4dec(year * 3.143e+22);
		$("#second").val(second);
	}

	function from_second(num) {
		var second = parseFloat(num);
		var parsec = round4dec(second * 9.171e-25);
		$("#parsec").val(parsec);
		var minute = round4dec(second * 0.00000463);
		$("#minute").val(minute);
		var year = round4dec(second * 3.182e-23);
		$("#year").val(year);
	}
}

function handle_capacity_ship_tonnage_input(input, num) {

	switch (input.attr('id')) {
		case 'tonnage':
			from_tonnage(num);
			break;
		case 'register_ton':
			from_ton(num);
			break;
		case 'Panama_Canal':
			from_pcums(num);
			break;
	}

	function from_tonnage(num) {
		var tonnage = parseFloat(num);
		var ton = round4dec(tonnage * 1.655);
		$("#register_ton").val(ton);
		var pcums = round4dec(tonnage * 1.655);
		$("#Panama_Canal").val(pcums);
	}

	function from_ton(num) {
		var ton = parseFloat(num);
		var tonnage = round4dec(ton * 0.5919);
		$("#tonnage").val(tonnage);
		var pcums = round4dec(ton * 1);
		$("#Panama_Canal").val(pcums);
	}

	function from_pcums(num) {
		var pcums = parseFloat(num);
		var tonnage = round4dec(pcums * 0.5919);
		$("#tonnage").val(tonnage);
		var ton = round4dec(pcums * 1);
		$("#register_ton").val(ton);
	}
}

function handle_capacity_japanese_input(input, num) {

	switch (input.attr('id')) {
		case 'sai':
			from_sai(num);
			break;
		case 'shaku':
			from_shaku(num);
			break;
		case 'go':
			from_go(num);
			break;
		case 'sho':
			from_sho(num);
			break;
		case 'to':
			from_to(num);
			break;
		case 'koku':
			from_koku(num);
			break;
	}

	function from_sai(num) {
		var sai = parseFloat(num);
		var sho = round4dec(sai * 0.001);
		$("#sho").val(sho);
		var shaku = round4dec(sai * 0.1);
		$("#shaku").val(shaku);
		var to = round4dec(sai * 0.0001);
		$("#to").val(to);
		var go = round4dec(sai * 0.01);
		$("#go").val(go);
		var koku = round4dec(sai * 0.00001);
		$("#koku").val(koku);
	}

	function from_sho(num) {
		var sho = parseFloat(num);
		var sai = round4dec(sho * 1000);
		$("#sai").val(sai);
		var shaku = round4dec(sho * 100);
		$("#shaku").val(shaku);
		var to = round4dec(sho * 0.1);
		$("#to").val(to);
		var go = round4dec(sho * 10);
		$("#go").val(go);
		var koku = round4dec(sho * 0.01);
		$("#koku").val(koku);
	}

	function from_shaku(num) {
		var shaku = parseFloat(num);
		var sai = round4dec(shaku * 10);
		$("#sai").val(sai);
		var sho = round4dec(shaku * 0.01);
		$("#sho").val(sho);
		var to = round4dec(shaku * 0.001);
		$("#to").val(to);
		var go = round4dec(shaku * 0.1);
		$("#go").val(go);
		var koku = round4dec(shaku * 0.0001);
		$("#koku").val(koku);
	}

	function from_to(num) {
		var to = parseFloat(num);
		var sai = round4dec(to * 10000);
		$("#sai").val(sai);
		var sho = round4dec(to * 10);
		$("#sho").val(sho);
		var shaku = round4dec(to * 1000);
		$("#shaku").val(shaku);
		var go = round4dec(to * 100);
		$("#go").val(go);
		var koku = round4dec(to * 0.1);
		$("#koku").val(koku);
	}

	function from_go(num) {
		var go = parseFloat(num);
		var sai = round4dec(go * 100);
		$("#sai").val(sai);
		var sho = round4dec(go * 0.1);
		$("#sho").val(sho);
		var shaku = round4dec(go * 10);
		$("#shaku").val(shaku);
		var to = round4dec(go * 0.01);
		$("#to").val(to);
		var koku = round4dec(go * 0.001);
		$("#koku").val(koku);
	}

	function from_koku(num) {
		var koku = parseFloat(num);
		var sai = round4dec(koku * 100000);
		$("#sai").val(sai);
		var sho = round4dec(koku * 100);
		$("#sho").val(sho);
		var shaku = round4dec(koku * 10000);
		$("#shaku").val(shaku);
		var to = round4dec(koku * 10);
		$("#to").val(to);
		var go = round4dec(koku * 1000);
		$("#go").val(go);
	}
}

function handle_capacity_chinese_30_input(input, num) {

	switch (input.attr('id')) {
		case 'dan_30':
			from_dan(num);
			break;
		case 'dou_30':
			from_dou(num);
			break;
		case 'sheng_30':
			from_sheng(num);
			break;
		case 'ge_30':
			from_ge(num);
			break;
		case 'shao_30':
			from_shao(num);
			break;
		case 'cuo_30':
			from_cuo(num);
			break;
	}

	function from_dan(num) {
		var dan = parseFloat(num);
		var ge = round4dec(dan * 1000);
		$("#ge_30").val(ge);
		var dou = round4dec(dan * 10);
		$("#dou_30").val(dou);
		var shao = round4dec(dan * 10000);
		$("#shao_30").val(shao);
		var sheng = round4dec(dan * 100);
		$("#sheng_30").val(sheng);
		var cuo = round4dec(dan * 100000);
		$("#cuo_30").val(cuo);
	}

	function from_ge(num) {
		var ge = parseFloat(num);
		var dan = round4dec(ge * 0.001);
		$("#dan_30").val(dan);
		var dou = round4dec(ge * 0.01);
		$("#dou_30").val(dou);
		var shao = round4dec(ge * 10);
		$("#shao_30").val(shao);
		var sheng = round4dec(ge * 0.1);
		$("#sheng_30").val(sheng);
		var cuo = round4dec(ge * 100);
		$("#cuo_30").val(cuo);
	}

	function from_dou(num) {
		var dou = parseFloat(num);
		var dan = round4dec(dou * 0.1);
		$("#dan_30").val(dan);
		var ge = round4dec(dou * 100);
		$("#ge_30").val(ge);
		var shao = round4dec(dou * 1000);
		$("#shao_30").val(shao);
		var sheng = round4dec(dou * 10);
		$("#sheng_30").val(sheng);
		var cuo = round4dec(dou * 10000);
		$("#cuo_30").val(cuo);
	}

	function from_shao(num) {
		var shao = parseFloat(num);
		var dan = round4dec(shao * 0.0001);
		$("#dan_30").val(dan);
		var ge = round4dec(shao * 0.1);
		$("#ge_30").val(ge);
		var dou = round4dec(shao * 0.001);
		$("#dou_30").val(dou);
		var sheng = round4dec(shao * 0.01);
		$("#sheng_30").val(sheng);
		var cuo = round4dec(shao * 10);
		$("#cuo_30").val(cuo);
	}

	function from_sheng(num) {
		var sheng = parseFloat(num);
		var dan = round4dec(sheng * 0.01);
		$("#dan_30").val(dan);
		var ge = round4dec(sheng * 10);
		$("#ge_30").val(ge);
		var dou = round4dec(sheng * 0.1);
		$("#dou_30").val(dou);
		var shao = round4dec(sheng * 100);
		$("#shao_30").val(shao);
		var cuo = round4dec(sheng * 1000);
		$("#cuo_30").val(cuo);
	}

	function from_cuo(num) {
		var cuo = parseFloat(num);
		var dan = round4dec(cuo * 0.00001);
		$("#dan_30").val(dan);
		var ge = round4dec(cuo * 0.01);
		$("#ge_30").val(ge);
		var dou = round4dec(cuo * 0.0001);
		$("#dou_30").val(dou);
		var shao = round4dec(cuo * 0.1);
		$("#shao_30").val(shao);
		var sheng = round4dec(cuo * 0.001);
		$("#sheng_30").val(sheng);
	}
}

function handle_capacity_chinese_15_input(input, num) {

	switch (input.attr('id')) {
		case 'dan_15':
			from_dan(num);
			break;
		case 'hu_15':
			from_hu(num);
			break;
		case 'dou_15':
			from_dou(num);
			break;
		case 'sheng_15':
			from_sheng(num);
			break;
		case 'ge_15':
			from_ge(num);
			break;
		case 'shao_15':
			from_shao(num);
			break;
	}

	function from_dan(num) {
		var dan = parseFloat(num);
		var sheng = round4dec(dan * 100);
		$("#sheng_15").val(sheng);
		var hu = round4dec(dan * 2);
		$("#hu_15").val(hu);
		var ge = round4dec(dan * 1000);
		$("#ge_15").val(ge);
		var dou = round4dec(dan * 10);
		$("#dou_15").val(dou);
		var shao = round4dec(dan * 10000);
		$("#shao_15").val(shao);
	}

	function from_sheng(num) {
		var sheng = parseFloat(num);
		var dan = round4dec(sheng * 0.01);
		$("#dan_15").val(dan);
		var hu = round4dec(sheng * 0.02);
		$("#hu_15").val(hu);
		var ge = round4dec(sheng * 10);
		$("#ge_15").val(ge);
		var dou = round4dec(sheng * 0.1);
		$("#dou_15").val(dou);
		var shao = round4dec(sheng * 100);
		$("#shao_15").val(shao);
	}

	function from_hu(num) {
		var hu = parseFloat(num);
		var dan = round4dec(hu * 0.5);
		$("#dan_15").val(dan);
		var sheng = round4dec(hu * 50);
		$("#sheng_15").val(sheng);
		var ge = round4dec(hu * 500);
		$("#ge_15").val(ge);
		var dou = round4dec(hu * 5);
		$("#dou_15").val(dou);
		var shao = round4dec(hu * 5000);
		$("#shao_15").val(shao);
	}

	function from_ge(num) {
		var ge = parseFloat(num);
		var dan = round4dec(ge * 0.001);
		$("#dan_15").val(dan);
		var sheng = round4dec(ge * 0.1);
		$("#sheng_15").val(sheng);
		var hu = round4dec(ge * 0.002);
		$("#hu_15").val(hu);
		var dou = round4dec(ge * 0.01);
		$("#dou_15").val(dou);
		var shao = round4dec(ge * 10);
		$("#shao_15").val(shao);
	}

	function from_dou(num) {
		var dou = parseFloat(num);
		var dan = round4dec(dou * 0.1);
		$("#dan_15").val(dan);
		var sheng = round4dec(dou * 10);
		$("#sheng_15").val(sheng);
		var hu = round4dec(dou * 0.2);
		$("#hu_15").val(hu);
		var ge = round4dec(dou * 100);
		$("#ge_15").val(ge);
		var shao = round4dec(dou * 1000);
		$("#shao_15").val(shao);
	}

	function from_shao(num) {
		var shao = parseFloat(num);
		var dan = round4dec(shao * 0.0001);
		$("#dan_15").val(dan);
		var sheng = round4dec(shao * 0.01);
		$("#sheng_15").val(sheng);
		var hu = round4dec(shao * 0.0002);
		$("#hu_15").val(hu);
		var ge = round4dec(shao * 0.1);
		$("#ge_15").val(ge);
		var dou = round4dec(shao * 0.001);
		$("#dou_15").val(dou);
	}
}

function handle_capacity_thai_input(input, num) {

	switch (input.attr('id')) {
		case 'kwian':
			from_kwian(num);
			break;
		case 'sat':
			from_sat(num);
			break;
		case 'thang':
			from_thang(num);
			break;
		case 'yip':
			from_yip(num);
			break;
		case 'thanan':
			from_thanan(num);
			break;
		case 'fai':
			from_fai(num);
			break;
		case 'kam':
			from_kam(num);
			break;
	}

	function from_kwian(num) {
		var kwian = parseFloat(num);
		var thanan = round4dec(kwian * 2000);
		$("#thanan").val(thanan);
		var sat = round4dec(kwian * 80);
		$("#sat").val(sat);
		var fai = round4dec(kwian * 16000);
		$("#fai").val(fai);
		var thang = round4dec(kwian * 100);
		$("#thang").val(thang);
		var kam = round4dec(kwian * 64000);
		$("#kam").val(kam);
		var yip = round4dec(kwian * 256000);
		$("#yip").val(yip);
	}

	function from_thanan(num) {
		var thanan = parseFloat(num);
		var kwian = round4dec(thanan * 0.0005);
		$("#kwian").val(kwian);
		var sat = round4dec(thanan * 0.04);
		$("#sat").val(sat);
		var fai = round4dec(thanan * 8);
		$("#fai").val(fai);
		var thang = round4dec(thanan * 0.05);
		$("#thang").val(thang);
		var kam = round4dec(thanan * 32);
		$("#kam").val(kam);
		var yip = round4dec(thanan * 128);
		$("#yip").val(yip);
	}

	function from_sat(num) {
		var sat = parseFloat(num);
		var kwian = round4dec(sat * 0.0125);
		$("#kwian").val(kwian);
		var thanan = round4dec(sat * 25);
		$("#thanan").val(thanan);
		var fai = round4dec(sat * 200);
		$("#fai").val(fai);
		var thang = round4dec(sat * 1.25);
		$("#thang").val(thang);
		var kam = round4dec(sat * 800);
		$("#kam").val(kam);
		var yip = round4dec(sat * 3200);
		$("#yip").val(yip);
	}

	function from_fai(num) {
		var fai = parseFloat(num);
		var kwian = round4dec(fai * 0.0000625);
		$("#kwian").val(kwian);
		var thanan = round4dec(fai * 0.125);
		$("#thanan").val(thanan);
		var sat = round4dec(fai * 0.005);
		$("#sat").val(sat);
		var thang = round4dec(fai * 0.00625);
		$("#thang").val(thang);
		var kam = round4dec(fai * 4);
		$("#kam").val(kam);
		var yip = round4dec(fai * 16);
		$("#yip").val(yip);
	}

	function from_thang(num) {
		var thang = parseFloat(num);
		var kwian = round4dec(thang * 0.01);
		$("#kwian").val(kwian);
		var thanan = round4dec(thang * 20);
		$("#thanan").val(thanan);
		var sat = round4dec(thang * 0.8);
		$("#sat").val(sat);
		var fai = round4dec(thang * 160);
		$("#fai").val(fai);
		var kam = round4dec(thang * 640);
		$("#kam").val(kam);
		var yip = round4dec(thang * 2560);
		$("#yip").val(yip);
	}

	function from_kam(num) {
		var kam = parseFloat(num);
		var kwian = round4dec(kam * 0.00001563);
		$("#kwian").val(kwian);
		var thanan = round4dec(kam * 0.03125);
		$("#thanan").val(thanan);
		var sat = round4dec(kam * 0.00125);
		$("#sat").val(sat);
		var fai = round4dec(kam * 0.25);
		$("#fai").val(fai);
		var thang = round4dec(kam * 0.001563);
		$("#thang").val(thang);
		var yip = round4dec(kam * 4);
		$("#yip").val(yip);
	}

	function from_yip(num) {
		var yip = parseFloat(num);
		var kwian = round4dec(yip * 0.000003906);
		$("#kwian").val(kwian);
		var thanan = round4dec(yip * 0.007813);
		$("#thanan").val(thanan);
		var sat = round4dec(yip * 0.0003125);
		$("#sat").val(sat);
		var fai = round4dec(yip * 0.0625);
		$("#fai").val(fai);
		var thang = round4dec(yip * 0.0003906);
		$("#thang").val(thang);
		var kam = round4dec(yip * 0.25);
		$("#kam").val(kam);
	}
}

function handle_temp_conv_input(input, num) {

	switch (input.attr('id')) {
		case 'Cel':
			celzz(num);
			break;
		case 'Fhr':
			fahzz(num);
			break;
		case 'planck':
			planck(num);
			break;
		case 'kelvin':
			kelzz(num);
			break;
		case 'reaumur':
			reazz(num);
			break;
	}

	function celzz(celsi) {
		var convert_cel_kel = round4dec(parseFloat(celsi) + 273.15);
		$('#kelvin').val(convert_cel_kel);
		var convert_cel_fah = round4dec(parseFloat(celsi) * 1.8 + 32);
		$('#Fhr').val(convert_cel_fah);
		var convert_cel_reau = round4dec(parseFloat(celsi) * 0.80000);
		$('#reaumur').val(convert_cel_reau);
		var power = Math.pow(10, 32);
		var convert_cel_planck = round4dec(parseFloat(celsi) / 1.416785E+32);
		$('#planck').val(convert_cel_planck);
	}

	function kelzz(kelv) {
		var convert_kel_cel = round4dec(parseFloat(kelv) - 273.15);
		$('#Cel').val(convert_kel_cel);
		var convert_kel_fah = round4dec((parseFloat(kelv) - 273.15) * 1.8 + 32);
		$('#Fhr').val(convert_kel_fah);
		var convert_kel_reau = round4dec((parseFloat(kelv) - 273.15) * 0.80000);
		$('#reaumur').val(convert_kel_reau);
		var power = Math.pow(10, 32);
		var convert_kel_planck = round4dec(parseFloat(kelv) / (1.41683385 * power));
		$('#planck').val(convert_kel_planck);
	}
	function fahzz(fah) {
		var fahren = parseFloat(fah);
		var convert_fah_cel = round4dec((fahren - 32) / 1.8);
		$('#Cel').val(convert_fah_cel);
		var convert_fah_kel = round4dec((fahren - 32) / 1.8 + 273.15);
		$('#kelvin').val(convert_fah_kel);
		var convert_fah_reau = round4dec((fahren - 32) * 0.44444);
		$('#reaumur').val(convert_fah_reau);
		var power = Math.pow(10, 32);
		var convert_fah_planck = round4dec((fahren + 459.67) / (2.55030092 * power));
		$('#planck').val(convert_fah_planck);
	}
	function reazz(reau) {
		var reaumur = parseFloat(reau);
		var convert_reau_cel = round4dec(reaumur * 1.25);
		$('#Cel').val(convert_reau_cel);
		var convert_reau_kel = round4dec(reaumur * 1.25 + 273.15);
		$('#kelvin').val(convert_reau_kel);
		var convert_reau_fahre = round4dec(reaumur * 2.25 + 32);
		$('#Fhr').val(convert_reau_fahre);
		var power = Math.pow(10, 32);
		var convert_reau_planck = round4dec(reaumur / 1.133428E+32 + 1.92795660597762E-30);
		$('#planck').val(convert_reau_planck);
	}
	function planck(plan) {
		var plankzz = parseFloat(plan);
		var convert_planck_cel = round4dec(1.416785E+32 * plankzz);
		$('#Cel').val(convert_planck_cel);
		var convert_planck_kel = round4dec(1.416785E+32 * plankzz);
		$('#kelvin').val(convert_planck_kel);
		var convert_planck_fahre = round4dec(2.550213E+32 * plankzz);
		$('#Fhr').val(convert_planck_fahre);
		var convert_planck_reau = round4dec(1.133428E+32 * plankzz);
		$('#reaumur').val(convert_planck_reau);
	}
}

function handle_temp_his_input(input, num) {

	switch (input.attr('id')) {
		case 'rankine':
			rankzz(num);
			break;
		case 'nton':
			newzz(num);
			break;
		case 'romer':
			romerzz(num);
			break;
		case 'delisle':
			delizz(num);
			break;

	}

	function rankzz(rani) {
		var ranik = parseFloat(rani);
		var convert_ran_rom = round4dec(0.291667 * ranik - 135.904);
		$('#romer').val(convert_ran_rom);
		var convert_ran_newt = round4dec(0.183333 * ranik - 90.1395);
		$('#nton').val(convert_ran_newt);
		var convert_ran_deli = round4dec(ranik / -1.20000048 + 559.725);
		$('#delisle').val(convert_ran_deli);
	}
	function romerzz(romer) {
		var romerz = parseFloat(romer);
		var convert_rom_rani = round4dec(3.42857 * romerz + 465.956);
		$('#rankine').val(convert_rom_rani);
		var convert_rom_newt = round4dec(0.628571 * romerz - 4.71429);
		$('#nton').val(convert_rom_newt);
		var convert_rom_deli = round4dec(romerz / -0.35000035 + 171.429);
		$('#delisle').val(convert_rom_deli);
	}
	function newzz(newt) {
		var newtz = parseFloat(newt);
		var convert_newt_rani = round4dec(5.45455 * newtz + 491.67);
		$('#rankine').val(convert_newt_rani);
		var convert_newt_rom = round4dec(1.59091 * newtz + 7.5);
		$('#romer').val(convert_newt_rom);
		var convert_newt_deli = round4dec(newtz / -0.22000022 + 150);
		$('#delisle').val(convert_newt_deli);
	}
	function delizz(deli) {
		var deliz = parseFloat(deli);
		var convert_deli_rani = round4dec(deliz / -0.833333333 + 671.67);
		$('#rankine').val(convert_deli_rani);
		var convert_deli_rom = round4dec(deliz / -2.85714286 + 60);
		$('#romer').val(convert_deli_rom);
		var convert_deli_newt = round4dec(deliz / -4.54545455 + 33);
		$('#nton').val(convert_deli_newt);
	}
}

/* date conversion script */

function moveOnMax(field, nextFieldID) {
	if (field.val().length >= field.attr("maxlength")) {
		nextFieldID.focus();
	}
}

function intPart(floatNum) {
	if (floatNum < -0.0000001) {
		return Math.ceil(floatNum - 0.0000001);
	}
	return Math.floor(floatNum + 0.0000001);
}

function weekDay(wdn) {
	if (wdn == 0) {
		return "Monday";
	}
	if (wdn == 1) {
		return "Tuesday";
	}
	if (wdn == 2) {
		return "Wednesday";
	}
	if (wdn == 3) {
		return "Thursday";
	}
	if (wdn == 4) {
		return "Friday";
	}
	if (wdn == 5) {
		return "Saturday";
	}
	if (wdn == 6) {
		return "Sunday";
	}
	return "";
}

function chrToIsl() {
	var d = parseInt($('#CDay').val());
	var m = parseInt($('#CMonth').val());
	var y = parseInt($('#CYear').val());
	var jd = void 0;
	if (y > 1582 || y == 1582 && m > 10 || y == 1582 && m == 10 && d > 14) {
		jd = intPart(1461 * (y + 4800 + intPart((m - 14) / 12)) / 4) + intPart(367 * (m - 2 - 12 * intPart((m - 14) / 12)) / 12) - intPart(3 * intPart((y + 4900 + intPart((m - 14) / 12)) / 100) / 4) + d - 32075;
	} else {
		jd = 367 * y - intPart(7 * (y + 5001 + intPart((m - 9) / 7)) / 4) + intPart(275 * m / 9) + d + 1729777;
	}
	$('#JD').val(jd);
	$('#wd').val(weekDay(jd % 7));
	var l = jd - 1948440 + 10632;
	var n = intPart((l - 1) / 10631);
	l = l - 10631 * n + 354;
	var j = intPart((10985 - l) / 5316) * intPart(50 * l / 17719) + intPart(l / 5670) * intPart(43 * l / 15238);
	l = l - intPart((30 - j) / 15) * intPart(17719 * j / 50) - intPart(j / 16) * intPart(15238 * j / 43) + 29;
	m = intPart(24 * l / 709);
	d = l - intPart(709 * m / 24);
	y = 30 * n + j - 30;

	$('#HDay').val(d);
	$('#HMonth').val(m);
	$('#HYear').val(y);
}

function islToChr() {
	var d = parseInt($('#HDay').val());
	var m = parseInt($('#HMonth').val());
	var y = parseInt($('#HYear').val());
	var jd = intPart((11 * y + 3) / 30) + 354 * y + 30 * m - intPart((m - 1) / 2) + d + 1948440 - 385;
	$('#JD').val(jd);
	$('#wd').val(weekDay(jd % 7));
	if (jd > 2299160) {
		var l = jd + 68569;
		var n = intPart(4 * l / 146097);
		l = l - intPart((146097 * n + 3) / 4);
		var i = intPart(4000 * (l + 1) / 1461001);
		l = l - intPart(1461 * i / 4) + 31;
		var j = intPart(80 * l / 2447);
		d = l - intPart(2447 * j / 80);
		l = intPart(j / 11);
		m = j + 2 - 12 * l;
		y = 100 * (n - 49) + i + l;
	} else {
		var _j = jd + 1402;
		var k = intPart((_j - 1) / 1461);
		var _l = _j - 1461 * k;
		var _n = intPart((_l - 1) / 365) - intPart(_l / 1461);
		var _i = _l - 365 * _n + 30;
		_j = intPart(80 * _i / 2447);
		d = _i - intPart(2447 * _j / 80);
		_i = intPart(_j / 11);
		m = _j + 2 - 12 * _i;
		y = 4 * k + _n + _i - 4716;
	}

	$('#CDay').val(d);
	$('#CMonth').val(m);
	$('#CYear').val(y);
}

async function summonCurrencies() {

	var currencies = [];
	await $.get('https://free.currencyconverterapi.com/api/v5/currencies').then(function (res) {
		return Object.keys(res.results).forEach(function (key) {
			return currencies.push(res.results[key]);
		});
	});
	return currencies;
}

function populateCurrencies(arr) {

	arr.forEach(function (element) {
		return $('.curr_menu').append('<div class="item" data-value="' + element.id + '">' + element.id + ' - ' + element.currencyName + '</div>');
	});
}

function round4dec(float) {
	if ((String(float).split('.')[1] || []).length > 4) {
		return float.toFixed(4);
	}
	return float;
}

/***/ })
/******/ ]);