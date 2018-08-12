var formInsert = document.getElementById("insertProduct");
var getProducts = document.getElementById("getProducts");
var result = document.getElementById("result");
var url = "/products";

formInsert.onsubmit = function(e) {
  e.preventDefault();

  var productName = formInsert.elements["productName"].value;
  var price = formInsert.elements["price"].value;

  var sendData = { productName: productName, price: price };
  console.log(sendData);
  //Using JQuery
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(sendData),
    contentType: "application/json",
    dataType: "json",
    success: function(success) {
      result.innerHTML = JSON.stringify(success, null, 2);
      formInsert.reset();
    },
    error: function(error) {
      result.innerHTML = JSON.stringify(error, null, 2);
    }
  });

  /*
      //Pure JS
      var ajax = new XMLHttpRequest();

      ajax.open("POST", url);
      ajax.setRequestHeader("Content-type", "application/json");
      ajax.send(JSON.stringify(sendData));

      ajax.onreadystatechange = function () {

            if (ajax.readyState == 4 && ajax.status == 200) {
                  var success = JSON.parse(ajax.responseText);
                  result.innerHTML = JSON.stringify(success, null, 2);
                  form.reset();
            } else {
                  var error = ajax.responseText + ajax.status + ' (' + ajax.statusText + ')';
                  result.innerHTML = error;
            }
      }
      */
};

getProducts.onclick = function() {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function(success) {
      result.innerHTML = JSON.stringify(success, null, 2);
    },
    error: function(error) {
      result.innerHTML = JSON.stringify(error, null, 2);
    }
  });
};
