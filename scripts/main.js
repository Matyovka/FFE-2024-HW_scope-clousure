const OmInput = document.querySelector('.om');
const inc = document.querySelector('.increment');
const dec = document.querySelector('.decrement');
const result = document.querySelector('.result');

let currentValue = 20;
const voltage = 12;

function updateValue() {
  OmInput.value = currentValue;
  const current = voltage / currentValue;   // Формула Ома (I = U / R)
  result.value = current.toFixed(2); 
}

updateValue();

OmInput.value = currentValue; 

inc.addEventListener('click', () => {
  currentValue+=1
  elwrong.classList.remove('no-border');
  elwrong.classList.remove('red-border');
  updateValue()

  if (currentValue === 2) {
    dec.disabled = false;
  }
});

dec.addEventListener('click', () => {
  currentValue-=1
  elwrong.classList.remove('no-border');
  elwrong.classList.remove('red-border');
  updateValue()

  if (currentValue === 1) {
    dec.disabled = true;
  }
});

let elwrong = document.querySelector('.om');

OmInput.addEventListener('input', () => {
  const newValue = parseFloat(OmInput.value);

  if (!isNaN(newValue) && newValue > 0) {
    elwrong.classList.remove('no-border');
    elwrong.classList.remove('red-border');
    currentValue = newValue;
    updateValue();
    
  } else {
    elwrong.classList.add('no-border');
    elwrong.classList.add('red-border');
    Ominput.value = currentValue;
  }
});


