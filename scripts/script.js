// ---------------------- Задача1: ----------------------
// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона 
// на зеленый и уменьшать его до размеров 100х100px.

// const klickBtn = document.createElement("button");
// klickBtn.style.width = "100px"
// klickBtn.style.height = "50px"
// klickBtn.innerText = "Klick"
// document.body.append(klickBtn)

// const newDiv = document.createElement("div")
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.backgroundColor = "red";
// newDiv.style.marginTop = "30px";
// document.body.append(newDiv)

// klickBtn.addEventListener("click", function() {
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.backgroundColor = "green";
// })

// ---------------------- Задача2: ----------------------
// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на 
// кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

// const klickBtn = document.createElement("button");
// klickBtn.style.width = "100px"
// klickBtn.style.height = "50px"
// klickBtn.innerText = "Klick"
// document.body.append(klickBtn)

// const newDiv = document.createElement("div")
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.backgroundColor = "pink";
// newDiv.style.marginTop = "30px";
// document.body.append(newDiv)

// klickBtn.addEventListener("click", function() {
//     newDiv.style.backgroundColor = "blue";
//     console.log(newDiv.style.backgroundColor)
// })

// ---------------------- Задача3: ----------------------
// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку
// увеличивать высоту и ширину квадрата на 20px.

// const klickBtn = document.createElement("button");
// klickBtn.style.width = "100px"
// klickBtn.style.height = "50px"
// klickBtn.innerText = "Klick"
// document.body.append(klickBtn)

// const newDiv = document.createElement("div")
// newDiv.style.width = "150px";
// newDiv.style.height = "150px";
// newDiv.style.backgroundColor = "black";
// newDiv.style.marginTop = "30px";
// document.body.append(newDiv)

// klickBtn.addEventListener("click", function() {
//     newDiv.style.width = "170px";
//     newDiv.style.height = "170px";
// })

// ---------------------- Задача4: ----------------------
// Создать кнопку и div с классом root. При клике на кнопку в div создается 
// параграф синего цвета. Текст параграфа произвольный.

// const klickBtn = document.createElement("button");
// klickBtn.style.width = "100px"
// klickBtn.style.height = "50px"
// klickBtn.innerText = "Klick"
// document.body.append(klickBtn)

// document.addEventListener("DOMContentLoaded", function () {
//     const rootElem = document.querySelector(".root");

//     const klickBtn = document.createElement("button");
//     klickBtn.innerText = "Создать параграф";
//     klickBtn.style.width = "200px"
//     klickBtn.style.height = "50px"

//     klickBtn.addEventListener("click", function () {
//       const paragraph = document.createElement("p");
//       paragraph.textContent = "Произвольный текст";
//       paragraph.style.color = "blue";
//       rootElem.append(paragraph);
//     });
//     rootElem.append(klickBtn);
//   });

// ---------------------- Задача5: ----------------------
// Создать кнопку и div с классом root. При клике на кнопку в div создаются 
// по очереди параграфы синего и зеленого цветов. Первый цвет синий.
let caunt = 0;
document.addEventListener("DOMContentLoaded", function () {
    const rootElem = document.querySelector(".root");

    const klickBtn = document.createElement("button");
    klickBtn.innerText = "Создать параграф";
    klickBtn.style.width = "200px"
    klickBtn.style.height = "50px"

    klickBtn.addEventListener("click", function () {
      const paragraph = document.createElement("p");
      paragraph.textContent = "Произвольный текст";
      if(caunt % 2 == 0) {
        paragraph.style.color = "blue";
      } else {
        paragraph.style.color = "green"
      }
      rootElem.append(paragraph);
      caunt ++;
    
    });
    rootElem.append(klickBtn);
  });