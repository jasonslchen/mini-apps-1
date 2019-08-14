$("#csvForm").submit((e) => {
  e.preventDefault();

  var formData = new FormData(this);
  console.log(formData);

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/',
    enctype: 'multipart/form-data',
    processData: false,
    contentType: false,
    data: formData,
    succes: (response) => {
      console.log(response);
    },
    error: (err) => {
      console.log(err);
    }
  })
})

