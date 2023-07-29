const startTimeout = document.querySelector(".start-timeout");
const endTimeout = document.querySelector(".end-timeout");
const startInterval = document.querySelector(".start-interval");
const endInterval = document.querySelector(".end-interval");

function syncFunction() {
	console.log("function start");
	for (let index = 0; index < 10; index++) {
		console.log("log from for");
	}
	console.log("edn for");
	console.log("function end");
}

function asyncFn() {
	console.log("function start");
	// setTimeout(() => {
	// 	for (let index = 0; index < 10; index++) {
	// 		console.log("log from for");
	// 	}
	// }, 2000);

	setInterval(() => {
		console.log("log from interval");
	}, 2000);

	console.log("edn for");
	console.log("function end");
}

let timeoutId = null;

function startTimeoutFn() {
	console.log("start timeout");
	timeoutId = setTimeout(() => {
		console.log("timeout");
	}, 5000);
}

function clearTimeoutFn() {
	console.log("clear timeout");
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
}

function startIntervalFn() {
	console.log("start interval");
	intervalId = setInterval(() => {
		console.log("interval");
	}, 2000);
}

function clearIntervalFn() {
	console.log("clear interval");
	if (intervalId) {
		clearInterval(intervalId);
	}
}

startTimeout.addEventListener("click", startTimeoutFn);
endTimeout.addEventListener("click", clearTimeoutFn);

startInterval.addEventListener("click", startIntervalFn);
endInterval.addEventListener("click", clearIntervalFn);

function initSlider() {
	const slides = document.querySelectorAll(".slide");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");

	let activeIndex = 0;

	function renderSlides() {
		slides.forEach((slide, index) => {
			if (activeIndex === index) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});
	}

	renderSlides();

	function showNext() {
		if (activeIndex === slides.length - 1) {
			activeIndex = 0;
		} else {
			activeIndex++;
		}
		renderSlides();
	}

	function showPrev() {
		if (activeIndex === 0) {
			activeIndex = slides.length - 1;
		} else {
			activeIndex--;
		}

		renderSlides();
	}

	next.addEventListener("click", showNext);
	prev.addEventListener("click", showPrev);

	let sliderIntervalId = null;

	function startAutoSliderFn() {
		sliderIntervalId = setInterval(showNext, 4000);
	}

	document.addEventListener("keyup", (e) => {
		// console.log(e);
		if (e.code === "ArrowRight") {
			showNext();
		}
		if (e.code === "ArrowLeft") {
			showPrev();
		}
	});
}

initSlider();
