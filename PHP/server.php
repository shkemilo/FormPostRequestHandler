<html>
<body>
	<?php
		include("Rukovodilac.php");
		
		if($_POST && isset($_POST["ime"], $_POST["prezime"], $_POST["email"]))
		{
			$ime = $_POST["ime"];
			$prezime = $_POST["prezime"];
			$email = $_POST["email"];
			$website = $_POST["website"];
			
			$zaposleni = null;
			if(isset($_POST["rukovodilac"]))
			{
				$zvanje = $_POST["zvanje"];
				$bonus = $_POST["bonus"];
				
				$zaposleni = new Rukovodilac($ime, $prezime, $email, $website, $zvanje, $bonus);
			}
			else
			{
				$zaposleni = new Zaposleni($ime, $prezime, $email, $website);
			}
			
			echo $zaposleni -> getTip() . "<br>";
			
			echo $zaposleni -> getInfo();
		}
		/*else
		{
			echo $_POST["ime"];
		}*/
	?>

</body>
</html>