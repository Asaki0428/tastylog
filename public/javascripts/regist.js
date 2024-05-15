var btnSubmit_onclick = function (event) {
  var $submit = $(this);
  var $form = $submit.params("form");
  $form.attr("method", $submit.data("method"));
  $form.attr("action", $submit.data("action"));
  $form.submit();
  $submit.off().prop("disabled", true);
  $form.on("submit", false); //btnを連打できなくする
};

var document_onready = function(event) {
  $("input[type = 'submit']").on("click", btnSubmit_onclick);
};

$(document).ready(document_onready);