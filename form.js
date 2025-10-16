function openpage(page) {
  const main = document.getElementById('main'); // находим блок <div id="main">

  if (page === 'reg') { // если нажата "Регистрация"
    main.innerHTML = `
      <div class="form-container">
       <h2>Регистрация</h2>
       <form>
         <input class="pip" type="text" placeholder="Login">
         <input class="pip" type="password" placeholder="Password">
         <button class="formbutton">Отправить</button>
       </form>
      </div>
    `;
  }

  if (page === 'help') { // если нажата "Предложить помощь"
    main.innerHTML = `
    <div class="form-container">
      <h2>Предложить помощь</h2>
      <textarea class="pip" ></textarea>
      <button class="formbutton">Отправить</button>
    </div>
    `;
  }
    if (page === 'gallery') {
    main.innerHTML = `
      <div class="gallery">
        <h2>Галерея</h2>
        <div class="images">
          <img src="../materials/picture1.jpg" alt="Фото 1">
          <img src="../materials/picture2.jpg" alt="Фото 1">
          <img src="../materials/picture3.jpg" alt="Фото 1">
          <img src="../materials/picture4.jpg" alt="Фото 1">

        </div>
      </div>
    `;
  }
      if (page === 'video') {
    main.innerHTML = `
      <div class="video">
        <video 
            src="../materials/video.mp4" 
            width="800" 
            height="500" 
            controls 
            autoplay 
            loop 
            muted>
        </video>

        </div>
      </div>
    `;
  }
  if (page === 'calc') {
  main.innerHTML = `
    <div class="form-container">
      <h2>Калькулятор оценок</h2>
      <form class="form" onsubmit="return calculateGrades(event)">
        <input type="number" id="current" placeholder="Текущая оценка (0–100)"min="0" max="100" >
        <input type="number" id="modul1" placeholder="РК1 min="0" max="100" (0–100)">
        <input type="number" id="modul2" placeholder="РК2 min="0" max="100" (%)">
        <input type="number" id="exam" placeholder="exam min="0" max="100" (0–100)">

        <button>Рассчитать</button>
      </form>
      <p id="result"></p>
    </div>
  `;
}


}

function calculateGrades(event) {
  event.preventDefault(); // не перезагружает страницу

  const current = parseFloat(document.getElementById('current').value);
  const modul1 = parseFloat(document.getElementById('modul1').value);
  const modul2 = parseFloat(document.getElementById('modul2').value);
  const exam = parseFloat(document.getElementById('exam').value);
  const resultElement = document.getElementById('result');

  if (isNaN(current) || isNaN(exam) || isNaN(modul1) || isNaN(modul2)) {
    document.getElementById('result').textContent = " Заполни все поля!";
    return false;
  }
    if (
    current < 0 || current > 100 ||
    modul1 < 0 || modul1 > 100 ||
    modul2 < 0 || modul2 > 100 ||
    exam < 0 || exam > 100
  ) {
    resultElement.textContent = "⚠️ Все значения должны быть от 0 до 100!";
    return false;
  }


  const final = current * 0.4 + (modul1 * 0.1)+(modul2 * 0.1)+ exam * 0.4 ;

  document.getElementById('result').textContent = `Итоговая оценка: ${final.toFixed(2)} / 100`;
  return false;
}

