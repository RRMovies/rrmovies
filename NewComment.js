function sendMail() {

  function beforeSend() {
    COMMENTLoader.style.display = "flex";
    let newComment = {
      name: commentFrmName.value,
      email: commentFrmEmail.value,
      comment: commentFrmComment.value,
      pending: true,
      date: date,
      loc: "",
      pablic: true
    }

if (!checkbox.checked) {
  newComment.email = "Email was not provided by this user";
  newComment.pablic = false;
}
    let submission = {
      email: "r.rmovies02@gmail.com",
      subject: "comment",
      body: '<h2 style="text-align : center;">' + newComment.name + '</h2><br /><h4 style="text-align: left;">' + commentFrmEmail.value + '</h4><br /><p>' + newComment.comment + '<br />Is my email is public? : ' + newComment.pablic + '<br />Location and time : '+newComment.date+'</p>',
      receiver: "r.rmovies01@gmail.com",
      Password: "20s%2526o%24tam%24%2526%4062%25%2662%25"
    }

    Email.send({
      Host: "smtp.gmail.com",
      Username: "r.rmovies02@gmail.com",
      Password: y(submission.Password),
      To: submission.receiver,
      From: submission.email,
      Subject: submission.subject,
      Body: submission.body
    }).then(message => {
      if (message == "OK")
      {
        COMMENTLoader.style.display = "none";
        alert("Thanks for your submission.");
        location.reload();
      }
      else {
        alert("Something went wrong.");
      }
    });

      localStorage.setItem("R&RMovies_Movies_Comment",'  <div class="commentVal"><div class="img"><img src="UntitledComment.png" alt="' + newComment.name + '" /></div><div class="text"><div class="title"><h2 class="cmntName">' + newComment.name + '</h2><h5 style="color: red;">Pending</h5></div><h4 class="cmntEmail">' + newComment.email + '</h4><p>' + newComment.comment + '</p></div></div>');
      
    localStorage.setItem("R&RMovies_Movies_Comment_Email",newComment.email);
  }
  if (navigator.onLine) {
    beforeSend();
  } else {
    alert("Please cheek your internet connection and try again letter.");
  }
}