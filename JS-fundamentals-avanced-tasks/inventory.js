function inventory(array) {

  const registerHeros = [];

  array.forEach(hero => {
    const info = hero.split(' / ');
    const name = info[0];
    const level = Number(info[1]);
    const items = info.pop();

    registerHeros.push({ name, level, items });
    registerHeros.sort((a, b) => a.level - b.level);
  });

  registerHeros.forEach(hero => {
    console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nlevel => ${hero.items}`);
  });

}
