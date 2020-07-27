const Potion = require('../lib/Potion');
const Character = require('./Character');

//Player constructor funtion
class Player extends Character {
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }
    getStats() {
    
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        // push (add) potion to the end of array
        this.inventory.push(potion);
    }
    usePotion(index) {
        // remove from index 1 and return to new array @ index 0
        const potion = this.getInventory().splice(index, 1)[0];
    
        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;    
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;