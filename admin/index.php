<?php
	require_once('scripts/config.php');
	confirm_logged_in();
?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.1/css/foundation-float.css">

	<title>Welcome to admin Panel</title>
</head>
<body>
	<section class="row">
	<h1 class="columns small-4">Welcome <?php echo $_SESSION['user_fname'];?></h1>
	<nav>
		<ul class="menu columns small-8 expended">
			<li><a href="admin_createdonor.php">Create Donor</a></li>
			<li><a href="admin_editdonors.php">Edit Donor</a></li>
			<li><a href="admin_deletedonor.php">Delete Donor</a></li>
			<li><a href="scripts/caller.php?caller_id=logout">Sign Out</a></li>
			
		</ul>
	</nav>
	</section>


	<h2 class="columns small-8">Admin Dashboard</h2>
	
	
</body>
</html>