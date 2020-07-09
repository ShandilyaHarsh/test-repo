document.getElementById('submitform').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('hi');
  const email = document.querySelector('#email').value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(typeof email.match(mailformat));
  if (email.match(mailformat)) {
    alert('Your email was correct');
  } else {
    alert('your email format was wrong');
  }
});
