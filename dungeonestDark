function dungeonestDark(array) {
    array = array.toString();
    let newArray = array.split(/[ ,|]/);
    let currentHealth = 100;
    let coins = 0;

    for (let i = 0; i <= newArray.length; i += 2) {
        let element = newArray[i];
        let nextElement = Number(newArray[i + 1]);

        if (i === newArray.length) {
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${currentHealth}`);
        } else if (element === 'potion') {
            currentHealth += nextElement;
            if (currentHealth < 100) {
                console.log(`You healed for ${nextElement} hp.`);
                console.log(`Current health: ${currentHealth} hp.`);
            } else {
                console.log(`You healed for ${-(currentHealth - nextElement - 100)} hp.`);
                currentHealth = 100;
                console.log(`Current health: ${currentHealth} hp.`);
            }
        } else if (element === 'chest') {
            coins += nextElement;
            console.log(`You found ${nextElement} coins.`);
        } else {
            currentHealth -= nextElement;
            if (currentHealth > 0) {
                console.log(`You slayed ${element}.`);
            } else if (currentHealth <= 0) {
                console.log(`You died! Killed by ${element}.`);
                console.log(`Best room: ${(i + 2) / 2}`);
                break;
            }
        }
    }
}
