<?php
    require_once('config.php');

    if(isset($_GET['donor'])){
        $tbl = 'tbl_donors';
        
    }
    $results = getAll($tbl);

    echo json_encode($results);
?>