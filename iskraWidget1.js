function Reviews(options) {
  const elem = options.elem;
  const title = 'Оставьте отзыв по данному товару';
  const buttonStyle = 'text-decoration:none; \
   text-align:center; \
   padding:6px 30px; \
   border:none; \
   -webkit-border-radius:6px; \
   -moz-border-radius:6px; \
   border-radius: 6px; \
   font:12px Tahoma, Geneva, sans-serif; \
   font-weight:bold; \
   color:#ffffff; \
   background-color:#a0b7bf; \
   background-image: -moz-linear-gradient(top, #a0b7bf 0%, #62808a 100%); \
   background-image: -webkit-linear-gradient(top, #a0b7bf 0%, #62808a 100%); \
   background-image: -o-linear-gradient(top, #a0b7bf 0%, #62808a 100%); \
   background-image: -ms-linear-gradient(top, #a0b7bf 0%, #62808a 100%); \
   background-image: linear-gradient(top, #a0b7bf 0%, #62808a 100%); \
   -webkit-box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff; \
   -moz-box-shadow: 0px 0px 2px #bababa,  inset 0px 0px 1px #ffffff; \
   box-shadow:0px 0px 2px #bababa, inset 0px 0px 1px #ffffff; \
   cursor: pointer;';

  function createButton(className, text, wrapperStyle) {
    const button = document.createElement('button');
    button.setAttribute('style', buttonStyle);
    button.textContent = text;
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = className;
    if (wrapperStyle) buttonWrapper.setAttribute('style', wrapperStyle);
    buttonWrapper.appendChild(button);
    return buttonWrapper;
  }

  function renderReviews() {
    // TODO получение перечня отзывов для данного ID товара и ключа сайта
    elem.innerHTML = '\
       <div width="100%"> \
         <div> \
           <div style="text-align:center;vertical-align:top;font-size:15px;line-height:2.1;">Виктор<br><img src="star-on.png"><img src="star-on.png"><img src="star-on.png"><img src="star-on.png"><img src="star-off.png"><img src="star-off.png"><br><font size=-2 color=gray>(2016-01-05)</font></div> \
           <div style="vertical-align:top;padding-top:5px;">Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин. Введенные на странице данные не будут сохранены. Скопируйте их перед тем, как закроете или обновите страницу. </div> \
         </div> \
         <div> \
           <div style="text-align:center;vertical-align:top;font-size:15px;line-height:2.1;">Виктор<br><img src="star-on.png"><img src="star-on.png"><img src="star-on.png"><img src="star-on.png"><img src="star-off.png"><img src="star-off.png"><br><font size=-2 color=gray>(2016-01-05)</font></div> \
           <div style="vertical-align:top;padding-top:5px;">Ваш сеанс работы с сайтом завершен из-за отсутствия активности в течение 60 мин.</div> \
         </div> \
       </div>';
    elem.appendChild(createButton('iskra-write-feedback-button', 'Добавить отзыв'));
  }

  function renderReviewForm() {
    elem.removeChild(document.querySelector('.iskra-write-feedback-button'));
    const reviewForm = document.createElement('div');
    reviewForm.innerHTML =  '\
    <div class="iskra-write-feedback"> \
        <div width="100%"><b>' + title + '</b><br><br></div>\
        <div width="200">Ваша оценка</div><div><input type="radio" name="rate" value="5"> Отлично &nbsp;&nbsp; <input type="radio" name="rate" value="4"> Хорошо &nbsp;&nbsp; <input type="radio" name="rate" value="3"> Нормально &nbsp;&nbsp; <input type="radio" name="rate" value="2"> Плохо &nbsp;&nbsp; <input type="radio" name="rate" value="1"> Ужасно</div>\
        <div width="200">Введите имя</div>\
        <div><input style="width:100%;" type="text"></div>\
        <div width="200">Введите отзыв</div><div><textarea style="width:100%; height:80px;" ></textarea></div>\
    </div>';
    reviewForm.appendChild(createButton('iskra-write-feedback', 'Отправить', 'text-align:right'));
    elem.appendChild(reviewForm);
  }

  function setEventListeners() {
    elem.addEventListener('click', function(event) {
      const elementClicked = event.target;
      if (elementClicked.parentNode.className === 'iskra-write-feedback-button') {
        elem.classList.toggle('open');
        renderReviewForm();
      }
      if (elementClicked.parentNode.className === 'iskra-write-feedback') {
        // TODO передается оценка (1-5 звёзд), текст отзыва, ID товара и ключ сайта.
      }
    });
  }

  // TODO проверяем загружен ли уже скрипт
  if (elem) {
    renderReviews();
    setEventListeners();
  } else console.log('Не найден объект для вывода отзывов');
}

const reviews = new Reviews({
  elem: document.getElementById('iskra-feedback'),
});
