<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	if(isset($_POST['id'])){
		
		$productID = htmlentities($_POST['id']);
		
			
		$defaultImgFolder = 'data/item_images/';
		
		$sql = 'SELECT * FROM item WHERE productID = :productID';
		$stmt = $conn->prepare($sql);
		$stmt->execute(['productID' => $productID]);
		
		while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			$output = '<p><img src="';
		
			
						
			$output .= '<span><strong>Name:</strong> ' . $row['itemName'] . '</span><br>';
			$output .= '<span><strong>Price:</strong> ' . $row['unitPrice'] . '</span><br>';
			$output .= '<span><strong>Discount:</strong> ' . $row['discount'] . ' %</span><br>';
			$output .= '<span><strong>Stock:</strong> ' . $row['stock'] . '</span><br>';
		}
		
		echo $output;
	}
?>