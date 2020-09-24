var count = 0;
var data =[];
var config = {
      data: data,
      xkey: 'y',
      ykeys: 'b',
      labels: ['Bitcoin Price'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','red'],
      parseTime:false
  };
config.element = 'line-chart';

//button click function
$('#hit-me').one("click", function(){
  $('#hit-me').hide();
  var currency = $('#currency').val();
  var myInt = setInterval(function(){
    $("#line-chart").empty();
    getCoinPrice(currency);
  }, 5000);
});

function getCoinPrice(currency) {
  var base_url = 'https://api.coindesk.com/v1/bpi/currentprice/';
  var code = currency;
  var myurl = base_url + code + ".json";
  $.ajax({
    url: myurl,
    dataType: "json",
    success: function(api){
      var year = new Date(api.time.updated);
      var time = year.getSeconds();
      var rate = Number(api.bpi[code].rate.replace(",",""));
      data.push({ y: count + " seconds",b: rate});
      $('#mycoin-price').text(rate);
      Morris.Line(config);
      count = count + 5;
      if(data.length > 10){
        data.shift();
      }
    }
  });
}