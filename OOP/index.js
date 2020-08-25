// Basics of OOP
// Creating a Fary Tale

// Firts creating the character elf
const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return `Attack with ${this.weapon}`
    }
};

// Factory function to create Elfs
function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack() {
            return `Attack with ${this.weapon}`
        }
    };
}

const peter = createElf('Peter', 'stones');
console.log(peter);