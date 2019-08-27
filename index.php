<!DOCTYPE html>
<html lang="en">

<head>
  <?php
   include "./includes/header.inc.php";
  ?>
  <title>Prestige Barbers</title>
</head>

<body>
  <?php
   include "./includes/nav-modals.inc.php";
   include "./classes/database.php";
   ?>
  <header class="showcase">
    <h1><a data-words="BOOK PRESTIGE NOW" href="book.php"></a></h1>
  </header>

  <section class="about container">
    <div class="testimonial testimonial1">
      <h3>"Class trim!"</h3>
    </div>
    <div class="testimonial testimonial2">
      <h3>"Great barbers"</h3>
    </div>
    <div class="info">
      <h2>Who we are</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, praesentium? Nisi laboriosam, possimus. Fugiat nam officia sapiente quibusdam, blanditiis harum, delectus assumenda, adipisci rerum saepe mollitia totam. Officiis praesentium
        libero reiciendis aspernatur, magnam earum inventore quam dolores veniam obcaecati repudiandae id quos maxime quas ratione sunt enim numquam magni doloremque, aperiam soluta quia nobis similique. Sed distinctio laboriosam officiis officia,
        ipsa laborum quos, soluta a! Quibusdam aspernatur neque vero similique quas consectetur, cum doloribus tempora totam necessitatibus ea nam vel repudiandae, fuga ab unde modi. Eaque dignissimos maxime voluptatum beatae repudiandae, culpa quis
        numquam, dolor quas eius laudantium, similique magnam.</p>
      <span><i class="fas fa-arrow-circle-down"></i></span>
    </div>
  </section>

  <section class="work container">
    <div class="col-1">
      <div class="img0 images">
        <a>Follow us on our socials</a>
        <div class="socials">
          <a href="https://www.instagram.com/prestigebarbersclub/"><i class="fab fa-instagram"></i></a>
          <a href="https://en-gb.facebook.com/PrestigeBarbersClub/"><i class="fab fa-facebook"></i></a>
          <a href="https://twitter.com/prestigebarberr"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <div class="col-2">
      <img class="img1 images" src="./img/img-5.jpg">
      <img class="img2 images" src="./img/img-2.jpg">
    </div>
    <div class="col-2">
      <img class="img3 images" src="./img/img-3.jpg">
      <img class="img4 images" src="./img/img-0.jpg">
    </div>
  </section>

  <?php include "./includes/footer.inc.php"; ?>
  <script src="./Javascript/index.js" charset="utf-8"></script>
</body>

</html>
