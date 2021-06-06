<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>R&R Movies</title>
</head>

<?php
if (isset($_POST['submit'])) {
  echo('User submited');
}
?>

<body>
  <form action="../My creations/Th.php" method="post" accept-charset="utf-8">
    <label for="Name">Name</label><br />
    <input class="input" type="text" name="Name" value="" required/><br />
    <label for="Age">Age</label><br />
    <input class="input" type="number" name="Age" value="" /><br />
    <label for="Email">Email</label><br />
    <input class="input" type="email" name="Email" value="" required/><br />
    <label for="password">password</label><br />
    <input class="input" type="password" name="password" value="" required/><br />
    <input type="submit" name="submit" value="Submit" />
  </form>
</body>

</html>
