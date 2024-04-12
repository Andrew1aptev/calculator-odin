// Выбираем элемент отображения калькулятора
const display = document.querySelector(".calculator__display");
// Выбираем все кнопки калькулятора
const buttons = document.querySelectorAll(".calculator__btn");
// Перебираем каждую кнопку
buttons.forEach(button => {
    // Добавляем обработчик события клика на каждую кнопку
    button.addEventListener("click",(event) => {
        // Получаем текст внутри нажатой кнопки
        const buttonText = event.target.innerHTML;
        // Получаем текущий текст на дисплее
        const currentValue = display.textContent;
        // Соединяем текущий текст дисплея и текст кнопки для формирования нового значения
        let newValue = `${currentValue}${buttonText}`;
        // Если нажата кнопка "Clear", очищаем дисплей
        if(buttonText === "Clear"){
            newValue = ""
        }
        // Если нажата кнопка "<<", удаляем последний символ с дисплея
        if(buttonText === "&lt;&lt;"){
            newValue = currentValue.slice(0, -1);
        }
        // Если нажата кнопка "=", вычисляем результат
        if(buttonText === "="){
            // Разделяем текущее значение на части по операторам
            let terms = currentValue.split(/(?=[+\-*/])/);
            // Преобразуем первый член в число и сохраняем его как результат
            let result = Number(terms[0]);
            // Перебираем остальные члены, начиная с индекса 1
            for(let index = 1; index < terms.length; index++){
                // Выполняем операцию в зависимости от оператора в члене
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
                }
            }
            // Устанавливаем новое значение в результат
            newValue = result;
        }
        // Обновляем дисплей новым значением
        display.textContent = newValue;
    })
});



