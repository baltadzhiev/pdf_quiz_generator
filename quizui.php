<html>
	<head>
		<link rel="stylesheet" type="text/css" href="quizui.css">
	</head>
	
	<body>
		<div id="leftPanel" style="float: left">
			<h4>Load Question Bank<h4>
			<div id="qBankMenu">
				<form name="qBankForm" method="post" style="margin: 5px;">
					<select name="qBankForm">
						<option>Question Bank 1</option>
						<option>Question Bank 2</option>
						<option>Question Bank 3</option>
					</select>
				
					<input type="submit" value="Load Bank"> 
				</form>
			</div>
				
		</div>
		<div id="rightPanel">
			<h3 style="text-align: center">Add Question To Quiz</h3>
			<div id="qSelect">
				<form name="qSelectForm" method="post">
					  <input list="questions" name="question" style="width: 79%; border: 0">
					  <datalist id="questions">
						<option value="Question1">
						<option value="Question3">
						<option value="Question2">
					  </datalist>
					  <input type="submit" style="background-color: transparent; width: 20%; border: 0">
			
			
			
				</form>
			</div>
			
			<h3 style="text-align: center">Question List</h3>
			<div id="qList">
				<form name="qListForm"method="post">
				
					<?php
						for ($i = 0; $i < 15; $i++){
							echo "<div class='questionBox'>
									<input name='quizQuestion' value='qq1' type='checkbox' style='margin-right: 10%;'> Quiz Question $i </br>
									</div>";
								}
					
					
					?>


			
					<ul style="text-align: center">
						<li><input type="submit" value="Delete Selected"></li>
						<li><input type="submit" value="Submit"></li>
					</ul>
				</form>
			</div>
		</div>
	</body>
</html>