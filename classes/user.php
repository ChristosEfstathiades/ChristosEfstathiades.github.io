<?php
require "database.php";

class User extends Dbh {

  public function registerUser() {
    $this->email = $_POST['email'];
    $this->pwd = $_POST['pwd'];
    $this->first = $_POST['first'];
    $this->last = $_POST['last'];
    $this->hashedPwd = password_hash($this->pwd, PASSWORD_DEFAULT);

    $this->signupErrorHandlers();

    Dbh::query('INSERT INTO users VALUES (\'\', :firstname, :lastname, :email, :password)', array(':firstname'=>$this->first, ':lastname'=>$this->last, ':email'=>$this->email, ':password'=>$this->hashedPwd));

    session_start();
    $_SESSION['first'] = $this->first;
    $_SESSION['last'] = $this->last;
    echo "success";
  }

  public function loginUser() {
    $this->email = $_POST['email'];
    $this->pwd = $_POST['pwd'];

    $this->loginErrorHandlers();

    if(Dbh::query('SELECT email FROM users WHERE email=:email', array(':email'=>$this->email))) {
      $result = Dbh::query('SELECT * FROM users WHERE email=:email', array(':email'=>$this->email));
      if(password_verify($this->pwd, $result[0]['password'])) {
        session_start();
        $_SESSION['first'] = $result[0]['firstname'];
        $_SESSION['last'] = $result[0]['lastname'];
        echo "success";
      } else {
        echo "incorrect password";
        exit();
      };

    } else {
      echo "Email doesn't exist";
      exit();
    };

  }

  private function signupErrorHandlers() {
    if (empty($this->first) || empty($this->email) || empty($this->last) || empty($this->pwd)) {
      echo "You need to fill in all fields";
      exit();
    }
    elseif (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
      echo "Please enter a real email";
      exit();
    }
    elseif (!preg_match("/^[a-zA-Z\s]*$/", $this->first) || !preg_match("/^[a-zA-Z\s]*$/", $this->last)) {
      echo "Your names must contain characters only from the alphabet";
      exit();
    }
  }

  private function loginErrorHandlers() {
    if (empty($this->email) || empty($this->pwd)) {
      echo "You need to fill in all fields";
      exit();
    }
    elseif (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
      echo "Please enter a real email";
      exit();
    }
  }
};

if (isset($_POST['signup'])) {
  $user = new User;
  $user->registerUser();
} elseif (isset($_POST['login'])) {
  $user = new User;
  $user->loginUser();
};
?>
