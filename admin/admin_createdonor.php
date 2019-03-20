<?php
	require_once('scripts/config.php');
    confirm_logged_in();
    
    if(isset($_POST['submit'])){
        $donor_name = trim($_POST['donor_name']);
        $donor_desc = trim($_POST['donor_desc']);
        $donor_thumb = trim($_POST['donor_thumb']);
        $donor_video = trim($_POST['donor_video']);

        // validation
        if(empty($donor_name)){
            $message = 'Please fill required fields';
        }else{

            $result = createDonor($donor_name,$donor_desc,$donor_thumb,$donor_video);

            $message = $result;
        }
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Create</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.1/css/foundation-float.css">
    <script src="main.js"></script>
</head>
<body>
    <?php if(!empty($message)): ?>
	<p><?php echo $message; ?></p>
	<?php endif;?>

    <h2 class="row text-center">Create User</h2>
    <form class="row small-4" action="admin_createdonor.php" method="post">
        <label class="columns" for="donor_name">Donor Name:</label>
        <input class="columns" type="text" id="donor_name" name="donor_name" value="">
        <label class="columns" for="donor_desc">Donor Description:</label>
        <input class="columns" type="text" id="donor_desc" name="donor_desc" value="">
        <label class="columns" for="donor_thumb">Donor Thumbnail:</label>
        <input class="columns" type="text" id="donor_thumb" name="donor_thumb" value="">
        <label class="columns" for="donor_video">Donor Video:</label>
        <input class="columns" type="text" id="donor_video" name="donor_video" value="">
        <button class="columns button" type="submit" name="submit">Create Donor</button>
    </form>
</body>
</html>