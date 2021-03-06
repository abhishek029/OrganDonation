<?php 

function login($username, $password){
	require_once('connect.php');
	//Check if username exists

	$check_exist_query = 'SELECT COUNT(*) FROM tbl_user';
	$check_exist_query .= ' WHERE user_name = :username';

	$user_set = $pdo->prepare($check_exist_query);
	$user_set->execute(
		array(
			':username'=>$username
		)
	);


	if($user_set->fetchColumn()>0){
		//TODO:Fill the following lines with the proper SQL query
		// so that it can get all rows where user_name = $username
		// and user_pass = $password
		$get_user_query = 'SELECT * FROM tbl_user WHERE user_name = :username';
		$get_user_query .= ' AND user_pass = :password';


		$get_user_set = $pdo->prepare($get_user_query);

		//TODO: don't forget to bind the placeholders in here!
		$get_user_set->execute(
			array(
				':username'=>$username,
				':password'=>$password
			)
		);

		while($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
			$id = $found_user['user_id'];
			$_SESSION['user_id'] = $id;
			$_SESSION['user_fname'] = $found_user['user_fname'];
			$_SESSION['user_name'] = $found_user['user_name'];		
			
		}

		if(empty($id)){
			$message = 'Credentials dont match';
			return $message;
		}

		redirect_to('index.php');
	}else{
		$message = 'User Not Found';
		return $message;
	}
}

?>