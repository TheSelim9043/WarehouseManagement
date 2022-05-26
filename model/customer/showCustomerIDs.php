<?php
	require_once('../../inc/config/constants.php');
	require_once('../../inc/config/db.php');
	
	if(isset($_POST['textBoxValue'])){
		$output = '';
		$customerIDString = '%' . htmlentities($_POST['textBoxValue']) . '%';
		
		$sql = 'SELECT customerID FROM customer WHERE customerID LIKE ?';
		$stmt = $conn->prepare($sql);
		$stmt->execute([$customerIDString]);
		
		if($stmt->rowCount() > 0){
			
			$output = '<ul class="list-unstyled suggestionsList" id="customerDetailsCustomerIDSuggestionsList">';
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$output .= '<li>' . $row['customerID'] . '</li>';
			}
			echo '</ul>';
		} else {
			$output = '';
		}
		$stmt->closeCursor();
		echo $output;
	}
?>