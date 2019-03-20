<?php
    require_once('config.php');

    if(isset($_GET['donor'])){
        $tbl = 'tbl_donors';
    }
    $results = getAllDonors($tbl);


    echo json_encode($results);
?>