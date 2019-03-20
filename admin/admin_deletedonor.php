<?php
	require_once('scripts/config.php');
	confirm_logged_in();

	$alluser = getAll("tbl_donors");
	
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE-edge">
	<title>Delete User</title>
	<meta name="viewport"	 content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.1/css/foundation-float.css">
</head>
<body>
	
	<?php include('header.php'); ?>
	
	<h2 class="columns subHead small-12 text-center">Delete Donor</h2>

		<table class='text-center'>
			<tr>
				<th>Donor Name</th>
				<th>Donor Description</th>
				<th>Donor Thumbnail</th>
				<th>Donor Video</th>
			</tr>
			<?php while($found_user = $alluser->fetch(PDO::FETCH_ASSOC)):?>			
				<tr>
					<td><?php echo $found_user['donor_name']?></td>
					<td><?php echo $found_user['donor_desc']?></td>				
					<td><?php echo $found_user['donor_thumb']?></td>		
					<td><?php echo $found_user['donor_video']?></td>
					<td>
						<a href="scripts/caller.php?caller_id=delete&id=<?php echo $found_user['donor_id']?>">Delete</a>
					</td>
				</tr>
		<?php endwhile;?>

	</table>

</body>
</html>