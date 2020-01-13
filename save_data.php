<?php 

require 'bootstrap.php';

// if (!$_SESSION['id']) {

    $json = file_get_contents('php://input');
    
    $datas = json_decode($json);
    
    // var_dump($datas);
    
    echo $query->save($datas);
// }
