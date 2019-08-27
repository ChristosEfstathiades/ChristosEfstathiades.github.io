<!DOCTYPE html>
<html lang="en">

<head>
  <?php include "./includes/header.inc.php"; ?>
  <title>Book Prestige Barbers</title>
</head>

<body>
  <?php include "./includes/nav-modals.inc.php"; ?>

  <header class="showcase showcase2">
    <h1><a <?php if (isset($_SESSION['first'])) {
      echo ' data-words="COLLECT YOUR CARD"';
    } else {
      echo 'id="signup" data-words="SIGN UP FOR 20% OFF"';
    }?>></a></h1>
  </header>

  <section class="paragraph">
    <div class="container">
      <div class="paragraph-info">
        <h2>Walk in or make an appointment</h2>
        <p>We do take walk ins but if you don't want to risk being dissapointed by us being fully booked or you simply don't want to sit around and wait then why not make an appointment, which can be done online by clicking the links below.</p>
      </div>
    </div>
  </section>

  <section class="locations container">
    <div class="location-item">
      <img src="./img/logo.jpeg">
      <h1>Droitwich</h1>
      <p>5 Old Market Court, WR9 8ES, Droitwich Spa, Wychavon</p>
      <p id="tel">Tel: 01905 799333</p>
      <ul>
        <li>9am-6pm (Mon-Thurs)</li>
        <li>9am-7pm (Fri)</li>
        <li>8.30am-5pm (Sat)</li>
      </ul>
      <a class="book-link" target="_blank" href="https://www.google.com/maps/reserve/merchant?m=aJ-dZwbzcHM&source=pa&gei=LQ_9XNy5AcG21fAPrbu1yA0&sourceurl=https://www.google.com/search?client%3Dsecure%26q%3Dprestige%2Bbarbers%2Bdroitwich&hl=en-GB">Book
        Droitwich</a>
    </div>
    <div class="location-item">
      <img src="./img/barber lab.png">
      <h1>Bromsgrove</h1>
      <p>5 new road, B60 2HX, Bromsgrove, England, Bromsgrove</p>
      <p id="tel">Tel: 01527 871742</p>
      <ul>
        <li>9am-5.45pm (Mon, Weds, Thurs)</li>
        <li>9.30am-5pm (Tues)</li>
        <li>9am-6.30pm (Fri)</li>
        <li>8.30am-4.45pm (Sat)</li>
      </ul>
      <a class="book-link" target="_blank" href="https://www.google.com/maps/reserve/merchant?m=3Soni0J4_Tg&source=pa&gei=ggv9XMmnJoaW1fAPkM2M8Aw&sourceurl=https://www.google.com/search?client%3Dsecure%26q%3Dbarber%2Blab%2Bbromsgrove&hl=en-GB">Book
        Bromsgrove</a>
    </div>
  </section>

  <?php include "./includes/footer.inc.php"; ?>
  <script src="./Javascript/index.js" charset="utf-8"></script>
</body>

</html>
