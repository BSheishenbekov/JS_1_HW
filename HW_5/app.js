document.querySelector("#generate").addEventListener("click", () => {
  generate();
});
document.querySelector("#back").addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 12;
  }
  generate();
});
document.querySelector("#next").addEventListener("click", () => {
  i++;
  if (i > 12) {
    i = 0;
  }
  generate();
});

let i = 0;

generate = (arg) => {
  let quotes = {
    "-Альберт Эйнштейн":
      '"-Чем умнее человек, тем легче он признает себя дураком"',
    "-Теодор Рузвельт": '"-Никогда не ошибается тот, кто ничего не делает»"',
    "-Коко Шанель": '"-Мода проходит, стиль остаётся"',
    "-Бернард Шоу":
      '"-Мой способ шутить – это говорить правду. На свете нет ничего смешнее"',
    "-Пабло Пикассо":
      '"-Я всегда делаю то, что не умею, чтобы этосу научиться"',
    " -   Наполеон Хилл":
      ' "  Стремитесь не к успеху, а к ценностям, которые он дает"',
    "-  Амелия Эрхарт":
      ' "  Сложнее всего начать действовать, все остальное зависит только от упорства."',
    "-федор Достоевский":
      ' " . Жизнь - это то, что с тобой происходит, пока ты строишь планы."',
    " -Махатма Ганди":
      '" -Свобода ничего не стоит, если она не включает в себя свободу ошибаться."',
    "-Джим Рон": '"-Либо вы управляете вашим днем, либо день управляет вами."',
    "-Фрэнк Синатра": ' " Лучшая месть – огромный успех "',
    " -Моисей Маймонид":
      '" . Научитесь говорить “Я не знаю”, и это уже будет прогресс."',
    " -Конфуций":
      ' "У всего есть своя красота, но не каждый может ее увидеть. "',
  };
  let authors = Object.keys(quotes);
  let author = authors[i];
  let quote = quotes[author];
  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
};
