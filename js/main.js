const display = document.querySelector(".calculator__display");
const buttons = document.querySelectorAll(".calculator__btn");

// проходимся по всем кнопкам
buttons.forEach(button => {
    // если кнопка нажата, то считываем текст внутри нее
    // и в соответсвии с этим выполняем какие-либо действия на дисплее
    button.addEventListener("click",(event) => {
        const buttonText = event.target.innerHTML; // считываем текст внутри кнопки
        const currentValue = display.textContent; // получаем текущую строку на дисплее
        let newValue = currentValue + buttonText; // получаем новое значение, склеиваем текущую строку и ту что в кнопке
        if(buttonText === "Clear"){   // если нажата кнопка внутри которой строка Сlear, значит на дисплее должна быть пустая строка
            newValue = ""
        }
        if(buttonText === "&lt;&lt;"){  // если нажата кнопка внутри которой строка <<, тогда удаляем последний элемент в строке на дисплее
            newValue = currentValue.slice(0, -1);
        }
        display.textContent = newValue;

    })
});





        // const buttonText = event.target.innerHTML;
        // const currentValue = display.textContent;
        // const newValue = currentValue + buttonText;
        // display.textContent = newValue;

// function userClick(){
//     button.addEventListener("click",() => {
//         if(button.innerHTML === "1"){
//             const currentValue = display.textContent;
//             const newValue = currentValue + 1;
//             display.textContent = newValue;
//         }
//     })
// }


// const button1 = document.querySelector(".calculator__btn--number-1")
// const button2 = document.querySelector(".calculator__btn--number-2")
// const button3 = document.querySelector(".calculator__btn--number-3")
// const button4 = document.querySelector(".calculator__btn--number-4")
// const button5 = document.querySelector(".calculator__btn--number-5")
// const button6 = document.querySelector(".calculator__btn--number-6")
// const button7 = document.querySelector(".calculator__btn--number-7")
// const button8 = document.querySelector(".calculator__btn--number-8")
// const button9 = document.querySelector(".calculator__btn--number-9")
// const button0 = document.querySelector(".calculator__btn--number-0")

// button1.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 1;
//     display.textContent = newValue;
// })
// button2.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 2;
//     display.textContent = newValue;
// })
// button3.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 3;
//     display.textContent = newValue;
// })
// button4.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 4;
//     display.textContent = newValue;
// })
// button5.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 5;
//     display.textContent = newValue;
// })
// button6.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 6;
//     display.textContent = newValue;
// })
// button7.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 7;
//     display.textContent = newValue;
// })
// button8.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 8;
//     display.textContent = newValue;
// })
// button9.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 9;
//     display.textContent = newValue;
// })
// button0.addEventListener("click", () =>{
//     const currentValue = display.textContent;
//     const newValue = currentValue + 0;
//     display.textContent = newValue;
// })
/**
 * 1.Когда я нажимаю на кнопку 1, в элемент display должна добавиться строка "1"
 * 2.Когда я нажимаю на кнопку 1 еще раз, в элемент display должна добавиться еще одна единица
 */
