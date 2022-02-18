const number = 2006;
let result = false;

while (!result) {
  const answer = prompt('Угадай число от 1 до 2006?');
  if (answer === null) {
    break;
  }
  switch (+answer) {
    case number - 5:
    case number + 5:
      alert('Уже теплее!');
      break;
    case number - 2:
    case number + 2:
      alert('Горячо!');
      break;
    case number:
      alert('Ты угадал! Это число {2006}.');
      result = true;
      break;
    default:
      alert('Холодно!');
  }
}

$(function() {

/* Menu nav toggle*/
 $("#nav_toggle").on("click", function(event) {
event.preventDefault();
   $(this).toggleClass("active");
   $("#nav").toggleClass("active");

 });






});


















