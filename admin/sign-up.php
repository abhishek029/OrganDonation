<?php
include('functions.php');
include('connect.php');

    if(isset($_POST["submit"])){
    // just an extra validation to assign variables if value is passed by POST method to this file or not

        if(!empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['email'])){
            $firstname = $_POST["first_name"];
            $lastname = $_POST["last_name"];
            $email = $_POST["email"];
            $country = $_POST["country"];
            $last_update = date("Y/m/d");
        }

        // check subscriber exist or not by email
		$check_exist_query = 'select * from tbl_subscriber where email=:email';
		
		$user_set = $pdo->prepare($check_exist_query);
		
		$user_set->execute(
			array(
				':email' => $email 
			)
        );
        
        // check if any row returns or not 
        // if row returns then it will be greater than one and if no rows then it will go to else condition

        if($user_set->fetchColumn()>0){

            // update query

            $update_user_query = 'UPDATE tbl_subscriber SET first_name = :firstname,last_name = :lastname,country = :country, last_update_date = :lastupdate WHERE email = :email';

				$update_user_set = $pdo->prepare($update_user_query);
            
                $update_user_set->execute(
					array(
						':firstname'=>$firstname,
                        ':lastname'=>$lastname,
                        ':country'=>$country,
                        ':lastupdate'=>$last_update,
                        ':email'=>$email
					)
                );

                // created this functions in functions.php
                sendUpdatedEmail($firstname,$lastname,$email);
                redirect_to('../index.html');
                
        }else{

             // create query

             $create_user_query = 'INSERT INTO tbl_subscriber(first_name, last_name, email, country, subscribe_date, last_update_date) VALUES(:firstname, :lastname, :email, :country, :lastupdate, :lastupdate)';

             $create_user_set = $pdo->prepare($create_user_query);
         
             $create_user_set->execute(
                 array(
                     ':firstname'=>$firstname,
                     ':lastname'=>$lastname,
                     ':country'=>$country,
                     ':lastupdate'=>$last_update,
                     ':email'=>$email
                 )
             );
            
             // created this functions in functions.php
            sendCreatedEmail($firstname,$lastname,$email);
            redirect_to('../index.html');
        }
    }
?>