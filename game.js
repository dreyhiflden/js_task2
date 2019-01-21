let btn = document.querySelector('#startGameBtn');
btn.addEventListener('click', game);

const duplicateRegEx = /(.)\1+/g;

function getRandomArray() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let getRandomNumber = () => {
    return Math.floor(Math.random() * 11);
  };

  while (arr.length >= 5) {
    arr.splice(getRandomNumber(), 1);
  }

  return arr;
}

function getUserNumber() {
  let userType = prompt('Введите 4 цифры подряд (цифры не дублировать!)', '4123');

  let isRepeated = (str) => {
    let sortedString = str.split('').sort().join('');
    return duplicateRegEx.test(sortedString);
  };

  if (userType === null || userType.match(/\D+/g) || userType.length !== 4 || isRepeated(userType))
  {
    alert('Ошибка, введите корректное 4х значное число (пример: 4123)');
    return;
  }

  return userType.split('').map(item => parseInt(item, 10));
}

function game() {
  let bull = 0,
    cow = 0,
    arr = getRandomArray();

  let compareArrays = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        bull++;
      }
    }
    cow = arr1.concat(arr2).sort().join('').match(duplicateRegEx).length - bull;
  };

  while (bull !== 4) {
    bull = 0;
    cow = 0;

    let userType = getUserNumber();
    if (!userType) {
      return;
    }
    compareArrays(arr, userType);
    if (bull === 4) {
      continue;
    }
    alert(`Вы ввели: ${userType.join('')}\nКоровы 🐄: ${cow}\nБыки 🐮: ${bull}`);
  }

  alert(`ПОБЕДА!`);
}
