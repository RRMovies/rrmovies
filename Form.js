window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("test-form");
  var button = document.getElementById("test-form-submit");
  var status = document.getElementById("status");
let IMDb = document.getElementById("IMDb");
/*window.addEventListener("dblclick", function() {
  console.log(IMDb.value.search("https://www.imdb.com/"));
})
if (IMDb.value.search("https://www.imdb.com/") == -1) {
  error();
}*/
  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add('done');
    status.classList.remove("error");
    status.innerHTML = "Thanks! for your submission";
  }

  function error() {
    status.classList.remove("done");
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200 && IMDb.value.search("https://www.imdb.com/") != -1) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}