const display = document.querySelector(".calculator__display");
const buttons = document.querySelectorAll(".calculator__btn");

// проходимся по всем кнопкам
buttons.forEach(button => {
    // если кнопка нажата, то считываем текст внутри нее
    // и в соответсвии с этим выполняем какие-либо действия на дисплее
    button.addEventListener("click",(event) => {
        const buttonText = event.target.innerHTML; // считываем текст внутри кнопки
        const currentValue = display.textContent; // получаем текущую строку на дисплее
        let newValue = `${currentValue}${buttonText}`; // получаем новое значение, склеиваем текущую строку и ту что в кнопке
        if(buttonText === "Clear"){   // если нажата кнопка внутри которой строка Сlear, значит на дисплее должна быть пустая строка
            newValue = ""
        }
        if(buttonText === "&lt;&lt;"){  // если нажата кнопка внутри которой строка <<, тогда удаляем последний элемент в строке на дисплее
            newValue = currentValue.slice(0, -1);
        }
        if(buttonText === "="){
        let terms = currentValue.split(/(?=[+\-*/])/);
            // преобразуем первый терм в число и сохраняем в результат
            let result = Number(terms[0]);
            // проходим по массиву, начиная с индекса 1
            for(let index = 1; index < terms.length; index++){
                switch(terms[index][0]){
                    case "+":
                    result += Number(terms[index].slice(1));
                    break;
                    case "-":
                    result -= Number(terms[index].slice(1))
                    break;
                    case "*":
                    result *= Number(terms[index].slice(1))
                    break;
                    case "/":
                    result /= Number(terms[index].slice(1))
                    break;
        
                    default:
                    return console.log("неизвестный оператор");
                }
            }
            newValue = result;
        }
        display.textContent = newValue;

    })
});

