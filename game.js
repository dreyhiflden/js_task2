let btn = document.querySelector('#startGameBtn');
btn.addEventListener('click', game);

function game() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
      bull = 0,
      cow = 0,
      userType = prompt('Введите 4 цифры подряд (цифры не дублировать!)', '4123');

  let getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  while (arr.length >= 5) {
    arr.splice(getRandomNumber(), 1);
  }

  let isRepeated = (str) => {
    let sortedString = str.split('').sort().join('');
    return /(.)\1+/g.test(sortedString);
  };

  if (userType === null || userType === '' || userType.length !== 4 || isRepeated(userType))
  {
    alert('Ошибка, введите корректное 4х значное число (пример: 4123)');
    return;
  }

  let arrUserType = userType.split('').map(item => parseInt(item, 10));

  let compareArrays = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        bull++;
        continue;
      }
      for (let j = arr1.length; j >= 0; j--) {
        if (arr1[j] === arr2[i]) {
          cow++;
        }
      }
    }
  };

  compareArrays(arr, arrUserType);
  alert(`Вы ввели: ${userType}\nЗадумал компьютер: ${arr.join('')} \nКоровы 🐄: ${cow}\nБыки 🐮: ${bull}`);
}
