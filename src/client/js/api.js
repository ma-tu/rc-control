
function ledOn() {
  post('/led', {action: 'on'})
}

function ledOff() {
  post('/led', {action: 'off'})
}

function post(url, data) {
  $.ajax({
    type: 'POST',
    url: url,
    contentType: 'application/json',
    data:JSON.stringify(data),
    dataType: "json"
  }).done(function(data){
    console.log('done');
    console.log(data);
  }).fail(function(){
    console.log('fail');
  }).always(function(){
    console.log('ajax finish');
  });
}
