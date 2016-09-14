
function test(id) {
  post('/test', {id: id})
}

function rc(action) {
  post('/rc', {action: action})
}

function post(url, data) {
  $.ajax({
    type: 'POST',
    url: url,
    contentType: 'application/json',
    data:JSON.stringify(data),
    dataType: "json"
  }).done(function(data){
    //
  }).fail(function(){
    //
  }).always(function(){
    //
  });
}
