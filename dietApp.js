const UIoptimalCalories = document.getElementById('optimalCalories'),
	UIprogressBar = document.querySelector('.progress'),
	UIweightForm = document.getElementById('weightForm'),
	UIyourWeight = document.getElementById('yourWeight'),
	UIfoodCollection = document.getElementById('foodCollection'),
	UIdropdownContent = document.querySelector('ul'),
	UIcalculateBtn = document.getElementById('calculate-button'),
	UIclearBtn = document.getElementById('clear-button'),
	UIeeetwellMenu = document.querySelector('a');

// food item UI
const UIwrapsDropdown3 = document.getElementById('dropdown3');
const UIciabattasDropdown4 = document.getElementById('dropdown4');
const UIsaladsDropdown5 = document.getElementById('dropdown5');
const UIricesDropdown6 = document.getElementById('dropdown6');
const UIsmoothiesDropdown8 = document.getElementById('dropdown8');
const UIjuicesDropdown9 = document.getElementById('dropdown9');
const UIpowerLiftersDropdown10 = document.getElementById('dropdown10');

// mobile items UI
const UImobileWraps = document.getElementById('mobile-wraps'),
	UImobileCiabattas = document.getElementById('mobile-ciabattas'),
	UImobileSalads = document.getElementById('mobile-salads'),
	UImobileRices = document.getElementById('mobile-rices'),
	UImobileSmoothies = document.getElementById('mobile-smoothies'),
	UImobileJuices = document.getElementById('mobile-juices'),
	UImobilePowerLifters = document.getElementById('mobile-powerLifters');


// load all event listeners
loadEventListeners();

function loadEventListeners() {
	// call addWeight
	UIweightForm.addEventListener('submit', function (e) {
		const li = document.querySelector('#foodCollection > li');
		if (UIfoodCollection.contains(li) === false && UIyourWeight.value == "") {
			checkErrorSuccess('error', 'Please add weight or select something from the menu')
		} else {

			UIprogressBar.style.display = "block";
			setTimeout(addWeight, 2000);
		}
		e.preventDefault();
	});
	// ul food collection remove
	UIfoodCollection.addEventListener('click', removeItem);
	// call food item event listeners
	UIwrapsDropdown3.addEventListener('click', addItems);
	UIciabattasDropdown4.addEventListener('click', addItems);
	UIsaladsDropdown5.addEventListener('click', addItems);
	UIricesDropdown6.addEventListener('click', addItems);
	UIsmoothiesDropdown8.addEventListener('click', addItems);
	UIjuicesDropdown9.addEventListener('click', addItems);
	UIpowerLiftersDropdown10.addEventListener('click', addItems);
	// call food item event listenre for mobile
	UImobileWraps.addEventListener('click', addItems);
	UImobileCiabattas.addEventListener('click', addItems);
	UImobileSalads.addEventListener('click', addItems);
	UImobileRices.addEventListener('click', addItems);
	UImobileSmoothies.addEventListener('click', addItems);
	UImobileJuices.addEventListener('click', addItems);
	UImobilePowerLifters.addEventListener('click', addItems);

}

function addItems(e) {
	const value = e.target.getAttribute("value");
	const name = e.target.innerText;

	if (value === null) {
		console.log("error");
	} else {

		const li = document.createElement('li');
		li.className = "collection-item";
		li.innerHTML = `${name}, <span class="span__calories">calories</span>: <span class="numValue span__calories">${value}</span>`;
		const a = document.createElement('a');
		a.className = "secondary-content delete-item a-styled";
		a.innerHTML = '<i class="fas fa-times"></i>';

		li.appendChild(a);

		UIfoodCollection.appendChild(li);
	}
}

//remove item function
function removeItem(e) {
	if (e.target.parentElement.classList.contains('delete-item'))
		if (mscConfirm("Delete", "Are you sure you want to remove this item?", function () {
			document.getElementById('side-nav').style.zIndex = "-1";
			e.target.parentElement.parentElement.remove();
			checkErrorSuccess('success', 'Item Removed');
			document.getElementById('side-nav').style.zIndex = "1";
		}));
}

// addWeight
function addWeight() {

	// value from ul
	let value = 0;
	const numValue = UIfoodCollection.getElementsByClassName("numValue");
	for (let sum of numValue) {
		value += parseFloat(sum.innerHTML);
	}

	// variables for getting calories by persons weight
	const weightRegular = (UIyourWeight.value * 31.42).toFixed(0);
	const weightLoss = (weightRegular / 1.25).toFixed(0);
	const weightGain = (weightRegular * 1.25).toFixed(0);

	// create span element to add to UIcomputed and otpimal
	const UItest4 = document.getElementById('test4');
	const UItest4h5 = document.createElement('h5');
	const UItest5 = document.getElementById('test5');
	const UItest5h5 = document.createElement('h5');
	const UItest6 = document.getElementById('test6');
	const UItest6h5 = document.createElement('h5');

	// UI elements for healthy meal display only
	const tabs = document.getElementsByClassName("tabsHide");
	const smallText = document.getElementsByClassName("small-text");
	const headerBottom = document.getElementById("headerBottom");

	if (value === 0) {

		UItest4h5.innerHTML = `Your optimal daily calorie intake to <span class="span__calories">lose weight</span> is <span class="span__calories">${weightLoss}</span>`;
		UItest5h5.innerHTML = `Your optimal daily calorie intake to <span class="span__calories">maintain weight</span> is <span class="span__calories">${weightRegular}</span>`;
		UItest6h5.innerHTML = `Your optimal daily calorie intake for <span class="span__calories">gains</span> is <span class="span__calories">${weightGain}</span>`;
	} else if (value !== 0 && UIyourWeight.value === "") {
		// if loop for displaying if choosing only menu stuff
		headerBottom.innerHTML = `See your Calories!`;

		for (let small of smallText) {
			small.classList.add("hide");
		}
		for (let tab of tabs) {
			tab.classList.add("hide");
		}
		UItest4h5.classList.add("center-align");
		UItest4h5.style.fontSize = "2rem"
		UItest5h5.classList.add("center-align");
		UItest5h5.style.fontSize = "2rem"
		UItest6h5.classList.add("center-align");
		UItest6h5.style.fontSize = "2rem"

		UItest4h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>`;
		UItest5h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>`;
		UItest6h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>`;
	} else {
		UItest4h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>,
		 and your optimal daily calorie intake to <span class="span__calories">lose weight</span> is <span class="span__calories">${weightLoss}</span>`;
		UItest5h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>,
		 and your optimal daily calorie intake to <span class="span__calories">maintain weight</span> is <span class="span__calories">${weightRegular}</span>`;
		UItest6h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>,
		 and your optimal daily calories for <span class="span__calories">gains</span> is <span class="span__calories">${weightGain}</span>`;
	};
	UItest4.appendChild(UItest4h5);
	UItest5.appendChild(UItest5h5);
	UItest6.appendChild(UItest6h5);

	UIoptimalCalories.style.display = 'block';

	UIprogressBar.style.display = "none";

	// disable form and menu
	UIyourWeight.disabled = true;
	const lis = UIfoodCollection.querySelectorAll('li');

	UIcalculateBtn.classList.add('disabled');
	UIeeetwellMenu.classList.add("disabled");

	// create a reset button to clear all fields and hide card bar
	UIclearBtn.style.display = "block";
	// add padding to bottom card for clear button
	document.getElementById('card').style.paddingBottom = "35px";

	UIclearBtn.addEventListener('click', function (e) {
		// remove padding after clicking the clear button
		document.getElementById('card').style.paddingBottom = "0px";
		//clear all
		value = 0;
		UIyourWeight.value = "";
		const lis = UIfoodCollection.querySelectorAll('li');
		for (let li of lis) {
			li.remove();
		};

		UItest4h5.remove();
		UItest5h5.remove();
		UItest6h5.remove();

		UIoptimalCalories.style.display = 'none';

		UIyourWeight.disabled = false;

		UIcalculateBtn.classList.remove('disabled');
		UIeeetwellMenu.classList.remove("disabled");
		// removing hide classes so the app can work without bugs on reste button
		for (let small of smallText) {
			small.classList.remove("hide");
		}
		for (let tab of tabs) {
			tab.classList.remove("hide");
		}
		UItest4h5.classList.remove("center-align");
		UItest4h5.style.fontSize = "inherit"
		UItest5h5.classList.remove("center-align");
		UItest5h5.style.fontSize = "inherit"
		UItest6h5.classList.remove("center-align");
		UItest6h5.style.fontSize = "inherit"


		UIclearBtn.style.display = "none";

		e.preventDefault();
	});


}
// error and success message
function checkErrorSuccess(className, message) {
	// check for alerts
	clearAlert();
	const div = document.createElement('div');
	div.className = `alert ${className}`;
	div.appendChild(document.createTextNode(message));
	div.id = "errorSuccess";

	UIweightForm.appendChild(div);
	setTimeout(() => { div.remove() }, 3000);
};

function clearAlert() {
	const alert = document.querySelector(".alert");
	if (alert) {
		alert.remove();
	};
};

// SIDEBAR
$(document).ready(function () {
	$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 300
		edge: 'left', // Choose the horizontal origin
		closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	}
	);
});

// disable arrows
jQuery(document).ready(function ($) {

	// Disable scroll when focused on a number input.
	$('form').on('focus', 'input[type=number]', function (e) {
		$(this).on('wheel', function (e) {
			e.preventDefault();
		});
	});

	// Restore scroll on number inputs.
	$('form').on('blur', 'input[type=number]', function (e) {
		$(this).off('wheel');
	});

	// Disable up and down keys.
	$('form').on('keydown', 'input[type=number]', function (e) {
		if (e.which == 38 || e.which == 40)
			e.preventDefault();
	});

});

/*
if (UIyourWeight.value == "") {
		const tabs = document.getElementsByClassName("tabsHide");
		const smallText = document.getElementsByClassName("small-text");
		const headerBottom = document.getElementById("headerBottom");
		headerBottom.innerHTML = `See your Calories!`;

		for (let small of smallText) {
			small.classList.add("hide");
		}
		for (let tab of tabs) {
			tab.classList.add("hide");
		}
		UItest5h5.classList.add("center-align");
		UItest5h5.style.fontSize = "2rem"
		UItest5h5.innerHTML = `Your <span class="span__calories">healthy meal</span> has: <span class="span__calories">${value.toFixed(2)} calories</span>`;
	}
*/