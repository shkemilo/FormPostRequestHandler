let Zaposleni = require('./Zaposleni.js');

module.exports = class Rukovodilac extends Zaposleni {

    constructor(ime, prezime, email, website = "", zvanje, bonus) {
        super(ime, prezime, email, website);
        this.zvanje = zvanje;
        this.bonus = bonus;

        this.tip = "Rukovodilac";
    }

    getZvanje() {
        return "Zvanje: " + this.zvanje;
    }

    getBonus() {
        return "Bonus: " + this.bonus;
    }

    getInfo() {
        return super.getInfo() + "<br>" + this.getZvanje() + "<br>" + this.getBonus();
    }
}