<section class="row">
	<h2 class="columns small-5">Welcome <?php echo $_SESSION['user_fname'];?></h2>
	<nav>
		<ul class="menu columns small-7 expended">
            <li><a href="index.php">All Donors</a></li>
			<li><a href="admin_createdonor.php">Create Donor</a></li>
			<li><a href="admin_editdonors.php">Edit Donor</a></li>
			<li><a href="admin_deletedonor.php">Delete Donor</a></li>
			<li><a href="scripts/caller.php?caller_id=logout">Sign Out</a></li>
			
		</ul>
	</nav>
    </section>