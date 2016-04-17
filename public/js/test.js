// require jquery

// Предполагаемая работа этого файла - подключение в конце html с калькулятором.
// Т.е. если нужно протестировать калькулятор - просто добавляем тег <script src="js/test.js"></script> в конце файла и смотрим, что он напишет.
// Это не самый правильный способ подключения тестов (потому что чтобы запустить тесты нужно вносить изменения в шаблон), но для тестового задания годится.


function ask_calculator(input){
  // Эта функция должна обращаться к калькулятору, отправлять ему событие, определяемое по input
  // Предпочтительно, чтобы она обращалась к dom-элементам, связанным с кнопками и вызывала имитацию событий (click, keypress ...)
  // Либо можно выполнять ajax-запросы к серверу. Если в браузере никаких вычислений не производится, то этого может быть достаточно.
  console.error('Method ask_calculator not yet implemented!');
}


$(function(){

  // Пишем F5, подразумеваем сброс состояния калькулятора. Этот сброс может выполнять и другая клавиша, например, ESC.
  // Подразумевается, что у javascript-части калькулятора есть метод сброса (init или reset или вроде того).
  var test_cases = [
    {input: 'F5', expect: {value: '0', sign: ''}},
    {input: '1',  expect: {value: '1', sign: ''}},
    {input: '+',  expect: {value: '1', sign: '+'}},
    {input: '2',  expect: {value: '2', sign: ''}},
    {input: '=',  expect: {value: '3', sign: ''}},
    {input: '-',  expect: {value: '3', sign: '-'}},
    {input: '6',  expect: {value: '6', sign: ''}},
    {input: '=',  expect: {value: '-3', sign: ''}},

    {input: 'F5', expect: {value: '0', sign: ''}},
    {input: '1',  expect: {value: '1', sign: ''}},
    {input: '+',  expect: {value: '1', sign: '+'}},
    {input: '2',  expect: {value: '2', sign: ''}},
    {input: '-',  expect: {value: '3', sign: '-'}},
    {input: '6',  expect: {value: '6', sign: ''}},
    {input: '=',  expect: {value: '-3', sign: ''}}
  ];

  var test_block = $('<div class="js-test">Тестирование...<div class="js-test-info"></div><div class="js-test-result"></div></div>');
  $(body).append(test_block);
  var test_info = test_block.find('.js-test-info').first();
  var test_result = test_block.find('.js-test-result').first();

  var total_cnt = 0;
  var error_cnt = 0;

  for (i in test_cases){
    var step = test_cases[i];
    var input = step.input;
    var expect = step.expect;
    total_cnt = total_cnt + 1;

    var step_result = ask_calculator(input);
    // Если будет возникать проблема из-за слишком большой скорости нажатий - можно добавить javascript-задержку.

    if (JSON.stringify(step_result) !== JSON.stringify(expect)){
      error_cnt = error_cnt + 1;
      test_info.append($('<div></div>').text('Ошибка в шаге ' + i + ': input=' + input + ', ожидается ' + JSON.stringify(expect) + ', получено: ' + JSON.stringify(step_result)));
    }
  }

  test_result.text('Выполнено тестов: ' + total_cnt + ', ошибок: ' + error_cnt);

});
