Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function (el) {
	var link = el.querySelector('a');
	if (!link) {
		return;
	}
	var target = link.getAttribute('href');
	if (!target) {
		return;
	}
	el.addEventListener('click', function () {
		location.href = target;
	});
});

$(document).ready(function () {
	var nice = $("html, body, main, .mdl-layout__drawer").niceScroll({
		cursorcolor: "#899EA8",
		cursorwidth: "4px",
		cursorborder: "0px solid #ffffff",
		enablemousewheel: "true",
		railalign: "right",
		background: "rgba(0,0,0,0)"
	});
});
