<?php

class Dbh {

  public static function connect() {

    try {
      $dsn = "mysql:host=localhost;dbname=prestige";
      $pdo = new PDO($dsn, "root", "");
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $pdo;
    } catch (PDOException $e) {
      echo "conn failed".$e->getMessage();
    };
  }

  public static function query($query, $params = array()) {
    $stmt = self::connect()->prepare($query);
    $stmt->execute($params);
    if (explode(' ', $query)[0] == "SELECT") {
      $data = $stmt->fetchAll();
      return $data;
    };
  }

};
 ?>
