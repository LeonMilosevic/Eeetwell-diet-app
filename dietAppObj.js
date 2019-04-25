const objectWraps = {
  oceanWrap: { name: "Ocean Wrap", calories: 427.9 },
  juicyMango: { name: "Juicy Mango", calories: 303 },
  thaiBeef: { name: "Thai Beef", calories: 385 },
  chickenJoy: { name: "Chicken Joy", calories: 393 },
  spicyTuna: { name: "Spicy Tuna", calories: 467.5 },
  cypresDelice: { name: "Cypres Delice", calories: 438.9 },
  hummusWrap: { name: "Hummus Wrap", calories: 581.9 }
}
const arrayWraps = [];
// insert objects in array
for (let wrap in objectWraps) {
  arrayWraps.push(objectWraps[wrap]);
}
arrayWraps.forEach(wrap => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.innerHTML += wrap.name;
  a.setAttribute("href", "#");
  a.setAttribute("value", wrap.calories);
  a.classList.add("waves-effect", "waves-blue");
  li.appendChild(a);
  UIwrapsDropdown3.append(li.cloneNode(true));
  UImobileWraps.append(li);
})

// Ciabatta items

const objectCiabattas = {
  wialdSalmon: { name: "Wild Salmon", calories: 461 },
  manhatenBeef: { name: "Manhaten Beef", calories: 462.8 },
  miamiChicken: { name: "Miami Chicken", calories: 524.3 },
}
const arrayCiabattas = [];
// insert objects in array
for (let ciabatta in objectCiabattas) {
  arrayCiabattas.push(objectCiabattas[ciabatta]);
}
arrayCiabattas.forEach(ciabatta => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.innerHTML += ciabatta.name;
  a.setAttribute("href", "#");
  a.setAttribute("value", ciabatta.calories);
  a.classList.add("waves-effect", "waves-blue");
  li.appendChild(a);

  UIciabattasDropdown4.append(li.cloneNode(true));
  UImobileCiabattas.append(li);
})

// Salad items
const objectSalads = {
  // hugosNoodles: { name: "Hugo's Noodles", calories: 300 },
  raileyBeef: { name: "Railay Beef", calories: 238.8 },
  romanChicken: { name: "Roman Chicken", calories: 434.4 },
  atlanticTuna: { name: "Atlantic Tuna", calories: 410.9 },
  fetaKing: { name: "Feta King", calories: 303.8 },
}
const arraySalads = [];
// insert objects in array
for (let salad in objectSalads) {
  arraySalads.push(objectSalads[salad]);
}
arraySalads.forEach(salad => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.innerHTML += salad.name;
  a.setAttribute("href", "#");
  a.setAttribute("value", salad.calories);
  li.appendChild(a);
  UIsaladsDropdown5.append(li.cloneNode(true));
  UImobileSalads.append(li);
})

// Rices items

const objectRices = {
  patongBeef: { name: "Patong Beef", calories: 730.78 },
  punjabiChicken: { name: "Punjabi Chicken", calories: 621.5 },
  gunaTuna: { name: "Guna Tuna", calories: 871.5 },
}
const arrayRices = [];
// insert objects in array
for (let rice in objectRices) {
  arrayRices.push(objectRices[rice]);
}
arrayRices.forEach(rice => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.innerHTML += rice.name;
  a.setAttribute("href", "#");
  a.setAttribute("value", rice.calories);
  li.appendChild(a);
  UIricesDropdown6.append(li.cloneNode(true));
  UImobileRices.append(li);
})

// Smoothies

// Smoothies items

const objectSmoothies = {
  tropicalMango: { name: "Tropical Mango", calories: 120.78, caloriesLarge: 150.58 },
  verryBerry: { name: "Verry Berry", calories: 219.3, caloriesLarge: 273.4 },
  strawberryTease: { name: "Strawberry Tease", calories: 236.6, caloriesLarge: 294.3 },
  morningBoost: { name: "Morning Boost", calories: 323.85, caloriesLarge: 433.7 },
  bananaBliss: { name: "Banana Bliss", calories: 287.9, caloriesLarge: 374.9 },
  lemonZest: { name: "Lemon Zest", calories: 247.6, caloriesLarge: 307.5 },
}
const arraySmoothies = [];
// insert objects in array
for (let smoothie in objectSmoothies) {
  arraySmoothies.push(objectSmoothies[smoothie]);
}
arraySmoothies.forEach(smoothie => {
  const li = document.createElement('li');
  const liLi = document.createElement('li');
  const a = document.createElement('a');
  const aA = document.createElement('a');

  a.innerHTML += `${smoothie.name} <span class="regular">Regular</span>`;
  a.setAttribute("href", "#");
  a.setAttribute("value", smoothie.calories);

  aA.innerHTML += `${smoothie.name} <span class="large">Large</span>`;
  aA.setAttribute("href", "#");
  aA.setAttribute("value", smoothie.caloriesLarge);

  li.appendChild(a);
  liLi.appendChild(aA);
  UIsmoothiesDropdown8.append(li.cloneNode(true));
  UImobileSmoothies.append(li);
  UIsmoothiesDropdown8.append(liLi.cloneNode(true));
  UImobileSmoothies.append(liLi);
})

// Juices items

const objectJuices = {
  bloodyBerry: { name: "Bloody Berry", calories: 169.4, caloriesLarge: 215 },
  popaye: { name: "Popaye", calories: 169.35, caloriesLarge: 200.87 },
  sunnySpiced: { name: "Sunny Spiced", calories: 152.8, caloriesLarge: 220.7 },
  watermelonSqueezed: { name: "Watermelon Squeezed", calories: 178.4, caloriesLarge: 157.3 },
  fruitLoop: { name: "Fruit Loop", calories: 158.4, caloriesLarge: 207.2 },
  soltan: { name: "Soltan", calories: 129.9, caloriesLarge: 157.3 }
}
const arrayJuices = [];
// insert objects in array
for (let juice in objectJuices) {
  arrayJuices.push(objectJuices[juice]);
}
arrayJuices.forEach(juice => {
  const li = document.createElement('li');
  const liLi = document.createElement('li');
  const a = document.createElement('a');
  const aA = document.createElement('a');

  a.innerHTML += `${juice.name} <span class="regular">Regular</span>`;
  a.setAttribute("href", "#");
  a.setAttribute("value", juice.calories);

  aA.innerHTML += `${juice.name} <span class="large">Large</span>`;
  aA.setAttribute("href", "#");
  aA.setAttribute("value", juice.caloriesLarge);

  li.appendChild(a);
  liLi.appendChild(aA);

  UIjuicesDropdown9.append(li.cloneNode(true));
  UImobileJuices.append(li);
  UIjuicesDropdown9.append(liLi.cloneNode(true));
  UImobileJuices.append(liLi);
})

// Power Lifters items

const objectPowerLifters = {
  hulk: { name: "Hulk", calories: 283.9, caloriesLarge: 309 },
  ironMan: { name: "Iron Man", calories: 326.65, caloriesLarge: 413.65 },
  superman: { name: "Superman", calories: 425.7, caloriesLarge: 549 },
  kingKong: { name: "King Kong", calories: 478.3, caloriesLarge: 621.2 }
}
const arrayPowerLifters = [];
// insert objects in array
for (let power in objectPowerLifters) {
  arrayPowerLifters.push(objectPowerLifters[power]);
}

arrayPowerLifters.forEach(powerLifter => {
  const li = document.createElement('li');
  const liLi = document.createElement('li');
  const a = document.createElement('a');
  const aA = document.createElement('a');

  a.innerHTML += `${powerLifter.name} <span class="regular">Regular</span>`;
  a.setAttribute("href", "#");
  a.setAttribute("value", powerLifter.calories);

  aA.innerHTML += `${powerLifter.name} <span class="large">Large</span>`;
  aA.setAttribute("href", "#");
  aA.setAttribute("value", powerLifter.caloriesLarge);

  li.appendChild(a);
  liLi.appendChild(aA);

  UIpowerLiftersDropdown10.append(li.cloneNode(true));
  UImobilePowerLifters.append(li);
  UIpowerLiftersDropdown10.appendChild(liLi.cloneNode(true));
  UImobilePowerLifters.append(liLi);
});
