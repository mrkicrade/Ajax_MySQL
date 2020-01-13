<?php 

require 'bootstrap.php';

// if (!$_SESSION['id']) {
    echo json_encode($query->selectAll('users'));
// }
