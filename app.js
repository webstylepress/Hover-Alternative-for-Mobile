document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('.image');
	images.forEach(function (img) {
		img.addEventListener('click', function (e) {
			e.stopPropagation();
			// Remove 'img-scale' class from all images
			images.forEach(function (image) {
				image.classList.remove('img-scale');
			});
			// Add 'img-scale' class back to the clicked image
			this.classList.add('img-scale');
		});
	});
	document.body.addEventListener('click', function () {
		// Remove 'img-scale' class from all images when clicking outside
		images.forEach(function (img) {
			img.classList.remove('img-scale');
		});
	});
});
