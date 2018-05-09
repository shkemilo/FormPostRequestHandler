<?php
	include("Zaposleni.php");
	
	class Rukovodilac extends Zaposleni 
	{
		private $zvanje;
		private $bonus;
		
		public function __construct($ime, $prezime, $email, $website = "", $zvanje, $bonus) 
		{
			parent::__construct($ime, $prezime, $email, $website);
			$this -> zvanje = $zvanje;
			$this -> bonus = $bonus;

			$this -> tip = "Rukovodilac";
		}

		public function getZvanje() 
		{
			return "Zvanje: " . $this -> zvanje;
		}

		public function getBonus() 
		{
			return "Bonus: " . $this -> bonus;
		}

		public function getInfo() 
		{
			return parent::getInfo() . "<br>" . $this -> getZvanje() . "<br>" . $this -> getBonus();
		}
	}
?>