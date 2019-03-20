<?php
	require_once('scripts/config.php');
	confirm_logged_in();

	$alldonors = getAll("tbl_donors");
	
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
	
	<h2 class="columns subHead small-12 text-center">Update Donors Record</h2>

		<table class='row text-center'>
			<tr>
				<th>Donor Name</th>
				<th>Donor Description</th>
				<th>Donor Thumbnail</th>
				<th>Donor Video</th>
			</tr>
			<?php while($found_donor = $alldonors->fetch(PDO::FETCH_ASSOC)):?>			
				<tr>
					<td><?php echo $found_donor['donor_name']?></td>
					<td><?php echo $found_donor['donor_desc']?></td>				
					<td><?php echo $found_donor['donor_thumb']?></td>		
					<td><?php echo $found_donor['donor_video']?></td>
					<td>
						<a href="scripts/caller.php?caller_id=update&donor_id=<?php echo $found_donor['donor_id'];?>">Update</a>
					</td>
				</tr>
		<?php endwhile;?>

	</table>

</body>
</html>