var link = document.querySelector(".form-feedback");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=full-name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
	 });

close.addEventListener("click", function (evt) {
	evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
  		localStorage.setItem("login", login.value);
			}
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
  		popup.classList.remove("modal-show");
  		popup.classList.remove("modal-error");
		}
	}
});


var mapLink = document.querySelector(".contacts-map");
  				

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
  		mapPopup.classList.remove("modal-show");
		}
	}
});


var cartLink = document.querySelector(".button-buy");

var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("modal-show")) {
      cartPopup.classList.remove("modal-show");
    }
  }
});