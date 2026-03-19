document.getElementById('Sbtn').onclick = async () => {
    const name = document.getElementById('PokemonName').value.toLowerCase();
    const info = document.getElementById('pokemoninfo');

    info.textContent = "Loading...";
    const url = "https://pokeapi.co/api/v2/pokemon/"+name;
    try {
        const res = await fetch(url);
        if (!res.ok) throw "Not found";
        const h = "p.height";
        const w = "p.weigth";
        const t = "p.types"
        const p = await res.json();
        info.innerHTML = `
            <h2>${p.name}</h2>
            <img src="${p.sprites.front_default}">
            <p><b>Height: ${h}</b></p>
            <p><b>Weight: ${w}</b></p>
            <p><b>Types: ${p.types.map(t => t.type.name).join(',')}</b></p>
        `;
    } catch {
        info.textContent = "Pokemon not found";
        info.style.textShadow ="1px 2px 3px white";
    }
};