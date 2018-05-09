<?php
	class Zaposleni 
	{
		private $ime;
		private $prezime;
		private $email;
		private $website;
		protected $tip;

		public function __construct($ime, $prezime, $email, $website = "") 
		{
			$this -> ime = $ime;
			$this -> prezime = $prezime;
			$this -> email = $email;
			$this -> website = $website;
        
			$this -> tip = "Zaposleni";
		}

		public function getIme() 
		{
			return "Ime: " . $this -> ime;
		}

		public function getPrezime() 
		{
			return "Prezime: " . $this -> prezime;
		}

		public function getEmail() 
		{
			return "Email: " . $this -> email;
		}

		public function getTip() 
		{
			return $this -> tip;
		}

		public function getWebsite() 
		{
			if($this -> website == "")
			{
				return "Website: none";
			}
			else
			{
				return "Website: " . $this -> website; 
			}
		}

		public function getInfo () 
		{
			return $this -> getIme() . "<br>" . $this -> getPrezime() . "<br>" . $this -> getEmail() . "<br>" . $this -> getWebsite(); 
		}
	}
?>