function starEnigma(input) {
    let numberMessages = input.shift();
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let line = 0; line < numberMessages; line++) {
        let message = input[line].toLowerCase();
        let key = message.match(/[star]/g);
        let newMessage = input[line];

        if (key !== null) {
            newMessage = input[line].split('').map(e => e.charCodeAt(0) - key.length).map(a => String.fromCharCode(a)).join('');
        }
        let pattern = /@(?<planet>[A-Z][a-z]+)[^@!\->:]*:(?<population>\d+)[^@!\->]*!(?<attack>[A|D])![^@!\->:]*->(?<count>\d+)/g;
        let validLine = pattern.exec(newMessage);

        if (validLine !== null) {
            if (validLine.groups.attack === 'A') {
                attackedPlanets.push(validLine.groups.planet);

            } else if (validLine.groups.attack === 'D') {
                destroyedPlanets.push(validLine.groups.planet);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
        sortedAttackedPlanets.forEach(planet => console.log(`-> ${planet}`));
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));
        sortedDestroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
    }

}
