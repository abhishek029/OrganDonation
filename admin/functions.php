<?php
	function redirect_to($location){
		if($location != NULL){
			header('Location: '.$location);
			exit;
		}
    }

    function getAllSubscriber($tbl_name){
        include 'connect.php';

        
            $get_all = 'select * from tbl_subscriber';
		
		    $all_set = $pdo->prepare($get_all);
		
		    $all_set->execute(
			    array(
				    ':tbl_name' => $tbl_name 
			    )
            );
            echo "<table>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Nmuber</th>
                        <th>Email Address</th>
                    </tr>";
            while($found_user = $all_set->fetch(PDO::FETCH_ASSOC)){
                echo '<tr>
                        <td>'.$found_user["name"].'</td>
                        <td>'.$found_user["number"].'</td>
                        <td>'.$found_user["email"].'</td>
                      </tr>';
            }
            echo '</table>';
        }
    
    $tbl_name = "tbl_subscriber";

    getAllSubscriber($tbl_name);
?>