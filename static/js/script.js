document.addEventListener("DOMContentLoaded", function () {
	if (
		!document.cookie.includes("formSubmitted=true") &&
		!document.cookie.includes("popupDismissed=true")
	) {
		document.getElementById("popup").classList.add("active");
		document.getElementById("overlay").classList.add("active");
	}

	function closePopup() {
		document.getElementById("popup").classList.remove("active");
		document.getElementById("overlay").classList.remove("active");
		document.cookie = "popupDismissed=true; max-age=86400; path=/";
	}
	if (document.getElementById("closePopup")) {
		document.getElementById("closePopup").addEventListener("click", closePopup);
	}
	if (document.getElementById("overlay")) {
		document.getElementById("overlay").addEventListener("click", function (e) {
			if (e.target === document.getElementById("overlay")) {
				closePopup();
			}
		});
	}

	const scriptURL =
		"https://script.google.com/macros/s/AKfycbyjJu54LdhOEeKxw5g5VhjdSTqSNj7gXne8MMwYpX2VglmlOCL9P2P3i-UEsuisswDA/exec";
	const form = document.forms["contact-form"];
	if (form) {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			let name = document.getElementById("name").value;
			let email = document.getElementById("email").value;
			let submitButton = document.getElementById("submit");

			if (name.trim() === "") {
				alert("Please enter your name.");
				return;
			}

			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(email)) {
				alert("Please enter a valid email address.");
				return;
			}

			if (document.cookie.includes("formSubmitted=true")) {
				alert("You have already submitted the form.");
				return;
			}

			submitButton.value = "Sending...";
			submitButton.disabled = true;

			fetch(scriptURL, { method: "POST", body: new FormData(form) })
				.then((response) => {
					document.cookie = "formSubmitted=true; max-age=86400; path=/";
					closePopup();
					showSuccessModal();
					setTimeout(function () {
						hideSuccessModal();
					}, 5000);
				})
				.catch((error) => {
					console.error("Error!", error.message);
					submitButton.value = "Error!";
					submitButton.disabled = false;
				});
		});
	}
	function showSuccessModal() {
		const successModal = document.getElementById("successModal");
		successModal.style.display = "block";
	}

	function hideSuccessModal() {
		const successModal = document.getElementById("successModal");
		successModal.style.display = "none";
	}
});

window.onload = function getActiveClass() {
	if (document.querySelector(".myAccordion")) {
		document.querySelector(".myAccordion .card-body").classList.add("show");
		document.querySelector(".myAccordion .card-header").classList.remove("collapsed");
	}

	setDropdownClass();
	showDropdown();
};

window.addEventListener("resize", setDropdownClass);

function setDropdownClass() {
	if (document.querySelector(".navDropdownElement")) {
		let navDropElems = document.querySelectorAll(".navDropdownElement");
		for (let navElem of navDropElems)
			if (window.innerWidth <= 767) navElem.setAttribute("data-bs-toggle", "dropdown");
			else navElem.setAttribute("data-bs-toggle", "");
	}
}

function showDropdown() {
	if (document.querySelectorAll(".dropdown").length > 0) {
		let menusInner = document.querySelectorAll(".dropdown");
		for (let inner of menusInner) {
			if (window.screen.width <= 767) {
				inner.addEventListener("click", function (e) {
					e.preventDefault();
					this.children[1].classList.toggle("show");
					this.children[1].addEventListener("click", function (elem) {
						elem.stopPropagation();
					});
				});
			} else {
				inner.addEventListener("mouseenter", function (e) {
					this.children[1].classList.toggle("show");
					this.children[1].addEventListener("click", function (elem) {
						elem.stopPropagation();
					});
				});
				inner.addEventListener("mouseleave", function (e) {
					this.children[1].classList.remove("show");
				});
			}
		}
	}
}

function removeDropdown() {
	if (document.querySelectorAll(".dropdown").length > 0) {
		let menusInner = document.querySelectorAll(".dropdown");
		menusInner.forEach((item) => {
			item.children[1].classList.remove("show");
		});
	}
}

const hamburgerButton = document.getElementById("navbarToggleIcon");
hamburgerButton.addEventListener("click", function (e) {
	let collapsibleNavbar = document.getElementById("collapsibleNavbar");
	collapsibleNavbar.classList.toggle("show");
	removeDropdown();
});

function scrollToAnchor(href) {
	const scrollTarget = document.getElementById(href);
	const topOffset = document.querySelector(".fixed-top").offsetHeight + 55;
	const elementPosition = scrollTarget.getBoundingClientRect().top;
	const offsetPosition = elementPosition - topOffset;
	window.scrollBy({
		top: offsetPosition,
		behavior: "smooth",
	});
}

if (document.querySelectorAll(".casino-running-line_items-list").length > 0) {
	var sliderTV = tns({
		container: ".casino-running-line_items-list",
		items: 9,
		slideBy: 1,
		nav: false,
		autoplay: true,
		mouseDrag: false,
		controls: false,
		responsive: {
			320: {
				slideBy: 4,
				items: 12,
				// disable: true
			},
			1279: {
				items: 9,
				slideBy: 1,
				disable: false,
			},
		},
	});
}

if (document.querySelectorAll(".providers-wrapper").length > 0) {
	var sliderTV = tns({
		container: ".providers-wrapper",
		items: 9,
		slideBy: 1,
		nav: false,
		autoplay: false,
		mouseDrag: true,
		controlsContainer: "#providers-custom-control",
		responsive: {
			320: {
				items: 5,
			},
			375: {
				items: 6,
			},
			425: {
				items: 7,
			},
			508: {
				items: 8,
			},
			991: {
				items: 10,
			},
			1280: {
				items: 9,
			},
		},
	});
}

if (document.querySelectorAll(".payments-wrapper").length > 0) {
	var sliderTV = tns({
		container: ".payments-wrapper",
		items: 9,
		slideBy: 1,
		nav: false,
		autoplay: false,
		mouseDrag: true,
		controlsContainer: "#payments-custom-control",
		responsive: {
			320: {
				items: 5,
			},
			375: {
				items: 6,
			},
			425: {
				items: 7,
			},
			508: {
				items: 8,
			},
			991: {
				items: 10,
			},
			1280: {
				items: 9,
			},
		},
	});
}
const tables = document.querySelectorAll('.content-section table');
if (tables.length > 0) {
	tables.forEach(table => {
		const wrapper = document.createElement('div');
		wrapper.style.overflowX = 'auto';
		table.parentNode.insertBefore(wrapper, table);
		wrapper.appendChild(table);
	});
}