function netherRealms(input) {
    let demonsArr = input.split(/[, ]+/).sort((a, b) => a.localeCompare(b));
    let charHealth = /([^0-9\.\/\+\-\*])/g;
    let charDamage = /([+-\.]?\d+[+-\.]?\d+|[+-]?\d+)/g;

    for (const demon of demonsArr) {
        let demonHealth = 0;
        let demonDamage = 0;
        let healthPoints = demon.match(charHealth);
        let damagePoints = demon.match(charDamage);

        if (healthPoints !== null) {
            healthPoints.forEach(char => {
                demonHealth += char.charCodeAt(0)
            });
        }

        if (damagePoints !== null) {
            damagePoints.forEach(char => {
                demonDamage += Number(char);
            });
        }
        
        let multiplySubdivide = demon.match(/\*|\//g);
        if (multiplySubdivide !== null) {
            for (const key of multiplySubdivide) {
                if (key === '*') {
                    demonDamage *= 2;
                } else if (key === '/') {
                    demonDamage /= 2;
                }
            }
        }
        console.log(`${demon} - ${demonHealth} health, ${demonDamage.toFixed(2)} damage`);
    }
}
