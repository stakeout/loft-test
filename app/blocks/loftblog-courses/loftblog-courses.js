'use strict';
export default function () {
	const coursesVisible = document.querySelector('.loftblog-courses__inner');
	const chekbox = coursesVisible.querySelectorAll('.checkbox__courses');
	const course = coursesVisible.querySelectorAll('.course');
	const ready = document.querySelector('.loftblog-courses__all-checked-toggle');
	let counter = 0;
	coursesVisible.addEventListener('click', event => {
		event = event || window.event;
		const target = event.target || event.srcElement;

		function fadeOut() {
			target.parentNode.style.display = 'none';
		}
		if (target.type === 'checkbox') {
			if (target.checked) {
				counter++;
				target.parentNode.style.backgroundColor = 'rgba(140, 195, 75, .2)';
				target.nextSibling.nextSibling.style.backgroundColor = 'rgba(140, 195, 75, .2)';
				setTimeout(fadeOut, 1000);
				for (let i = 0; i < course.length; i++){
					if (course[i] % 3 === 0){
						this.style.marginRight = '0px';
					}
				}
				if (counter === chekbox.length) {
					ready.style.visibility = 'visible';
					coursesVisible.style.visibility = 'hidden';
				}
			}else {
				counter--;
				target.parentNode.style.backgroundColor = '#fff';
				target.nextSibling.nextSibling.style.backgroundColor = '#f6f7f2';
			}
		}
	});
}
