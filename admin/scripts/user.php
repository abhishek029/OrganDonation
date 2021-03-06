<?php 
	function createDonor($donor_name,$donor_desc,$donor_thumb,$donor_video){
		include('connect.php');
	
		$create_user_query = 'INSERT INTO tbl_donors(donor_name,donor_desc,donor_thumb,donor_video)';
		$create_user_query .= ' VALUES(:donor_name,:donor_desc,:donor_thumb,:donor_video)';

		$create_user_set = $pdo->prepare($create_user_query);
		$create_user_set->execute(
			array(
				':donor_name'=>$donor_name,
				':donor_desc'=>$donor_desc,
				':donor_thumb'=>$donor_thumb,
				':donor_video'=>$donor_video
			)
		);

		if($create_user_set->rowCount()){
			redirect_to('index.php');
		}else{
			$message = 'Your hiring practices have failed you.. this individual sucks...';
			return $message;
		}

}

function updateDonor($id,$donor_name,$donor_desc,$donor_thumb,$donor_video){
	include('connect.php');

	$edit_donor_query = 'UPDATE tbl_donors set donor_name=:donor_name, donor_desc=:donor_desc, donor_thumb=:donor_thumb, donor_video=:donor_video WHERE donor_id=:id';

	$edit_donor_set = $pdo->prepare($edit_donor_query);
	$edit_donor_set->execute(
		array(
			':donor_name'=>$donor_name,
			':donor_desc'=>$donor_desc,
			':donor_thumb'=>$donor_thumb,
			':donor_video'=>$donor_video,
			':id'=>$id
		)
	);

	redirect_to('index.php');   
}

function deleteDonor($id){
	include('connect.php');

	$queryAll='delete from tbl_donors where donor_id = :id';

	$runFilter = $pdo ->prepare($queryAll);

	$runFilter->execute(
		array(
			':id'=>$id 
		)
	);

	if($runFilter){
		redirect_to('../index.php');
	}else{
		$error = 'There is problem in Filter';
		return $error;
	}
}