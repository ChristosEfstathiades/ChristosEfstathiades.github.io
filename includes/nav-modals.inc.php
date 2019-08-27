<?php session_start(); ?>

<div class="signup-modal">
  <div class="signup-form">
    <div class="small-container">
      <header>
        <img class="images" src="./img/logo.jpeg">
        <h2>Sign up for 20% off</h2>
        <div class="modal-close"> &#10008;</div>
      </header>
      <form action="index.php" method="post">
        <label>First name</label>
        <input placeholder="Please use your real first name" type="text" name="first-name">
        <label>Last name</label>
        <input placeholder="Please use your real last name" type="text" name="last-name">
        <label>Email</label>
        <input type="text" name="email" placeholder="Joe@example.com">
        <label>Password</label>
        <input type="password" name="password" placeholder="Secure with 256 bit encryption">
        <p class="error"></p>
        <footer>
          <button type="submit" name="signup-submit">Create an Account</button>
        </footer>
      </form>
    </div>
  </div>
</div>

<div class="success-modal">
  <div class="signup-form">
    <div class="small-container">
      <div class="message">
        <h2 class="success">You successfully signed up</h2>
        <h4>Collect your discount card at our shop</h4>
        <button class="continue">Continue</button>
      </div>
    </div>
  </div>
</div>

<div class="login-modal">
  <div class="signup-form">
    <div class="small-container">
      <header>
        <img class="images" src="./img/logo.jpeg">
        <h2>Welcome back</h2>
        <div class="modal-close"> &#10008;</div>
      </header>
      <form action="index.php" method="post">
        <label>Email</label>
        <input type="text" name="email" placeholder="Joe@example.com">
        <label>Password</label>
        <input type="password" name="password">
        <p class="error"></p>
        <footer>
          <button type="submit" name="login-submit">Login</button>
        </footer>
      </form>
    </div>
  </div>
</div>

<nav>
  <div class="container navbar">
    <a href="index.php"><img src="./img/logo.jpeg" alt=""></a>
    <ul>
      <?php if (isset($_SESSION['first'])) {
        echo "<li>{$_SESSION['first']} {$_SESSION['last']}</li>
              <li><a href='includes/logout.inc.php'>logout</a></li>";
      } else {
        echo '<li id="signup">Sign up</li>
              <li id="login">Login</li>';
      };?>
      <li><a href="book.php">Book now</a></li>
      <li><a href="index.php">Home</a></li>
    </ul>
    <i class="fas fa-bars"></i>
  </div>
</nav>

<div id="side-menu">
  <ul>
    <li class="close"> &#10008; </li>
    <li><a href="index.php">Home</a></li>
    <li><a href="book.php">Book now</a></li>
    <?php if (isset($_SESSION['first'])) {
      echo "<li>{$_SESSION['first']} {$_SESSION['last']}</li>
            <li><a href='includes/logout.inc.php'>Logout</a></li>";
    } else {
      echo '<li id="signup">Sign up</li>
            <li id="login">Login</li>';
    };?>
  </ul>
</div>
