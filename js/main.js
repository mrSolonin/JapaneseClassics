/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

/* Показать еще 3 карточки */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

// Клик по кнопке и показ трех скрытых карточек
btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})