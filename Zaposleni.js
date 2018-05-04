module.exports = class Zaposleni {

    constructor(ime, prezime, email, website = "") {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.website = website;
        
        this.tip = "Zaposleni";
    }

    getIme() {
        return "Ime: " + this.ime;
    }

    getPrezime() {
        return "Prezime: " + this.prezime;
    }

    getEmail() {
        return "Email: " + this.email;
    }

    getTip() {
        return this.tip;
    }

    getWebsite() {
        if(this.website === "")
        {
            return "Website: none";
        }
        else
        {
            return "Website: " + this.website; 
        }
    }

    getInfo () {
        return this.getIme() + "<br>" + this.getPrezime() + "<br>" + this.getEmail() + "<br>" + this.getWebsite(); 
    }
}