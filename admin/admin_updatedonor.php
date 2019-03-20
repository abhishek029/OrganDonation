<?php
	require_once('scripts/config.php');

	include('scripts/connect.php');
	confirm_logged_in();

	$id = $_GET['donor_id'];
	$tbl = 'tbl_donors';
	$col = 'donor_id';

	$get_user_set = getSingle($tbl,$col,$id);


	if(is_string($get_user_set)){
		$message = "Failed";
	}

	if(isset($_POST['submit'])){
        $donor_name = trim($_POST['donor_name']);
        $donor_desc = trim($_POST['donor_desc']);
        $donor_thumb = trim($_POST['donor_thumb']);
        $donor_video = trim($_POST['donor_video']);

        // validation
        if(empty($donor_name)){
            $message = 'Please fill required fields';
        }else{

            $result = updateDonor($donor_name,$donor_desc,$donor_thumb,$donor_video);

            $message = $result;
        }
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Edit User</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.1/css/foundation-float.css">
</head>
<body>
	<h2 class="row text-center">Edit User</h2>
	<?php if(!empty($message)):?>
	<p class="columns"><?php echo $message;?></p>
<?php endif ?>

<?php if($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)):?>
<form class="row small-4" action="admin_createdonor.php" method="post">
        <label class="columns" for="donor_name">Donor Name:</label>
        <input class="columns" type="text" id="donor_name" name="donor_name" value="<?php $found_user['donor_name']?>">
        <label class="columns" for="donor_desc">Donor Description:</label>
        <input class="columns" type="text" id="donor_desc" name="donor_desc" value="">
        <label class="columns" for="donor_thumb">Donor Thumbnail:</label>
        <input class="columns" type="text" id="donor_thumb" name="donor_thumb" value="">
        <label class="columns" for="donor_video">Donor Video:</label>
        <input class="columns" type="text" id="donor_video" name="donor_video" value="">
        <button class="columns button" type="submit" name="submit">Update Donor</button>
    </form>
<?php endif;?>

</body>
</html>