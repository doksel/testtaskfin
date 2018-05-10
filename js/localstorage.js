const btnAdd = document.querySelector('btn-add');
//Добавляем или изменяем значение:
localStorage.setItem('myKey', 'myValue'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"
var serialMovies = JSON.stringify(movies);
//Выводм его в консоль:
var localValue = localStorage.getItem('myKey');
console.log(localValue); //"myValue"
var returnObj = JSON.parse(localStorage.getItem("myKey"))
//удаляем:
localStorage.removeItem("myKey");

//очищаем все хранилище
localStorage.clear()

// То же самое, только с квадратными скобками:

localStorage["Ключ"] = "Значение" //установка значения
localStorage["Ключ"] // Получение значения
delete localStorage["Ключ"] // Удаление значения