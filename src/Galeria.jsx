const Galeria = ({ pokedex }) => {
  console.log(pokedex);
  return (
    <div id="pokedex" >
      {pokedex.map((pokemon) => (
        <section id="pokevista">
          <section id="pokename">
            <h1 className="name">{pokemon.nombre}</h1>
          </section>
          <img src={pokemon.img} className="imga" alt="Logo" />
          <section id="pokedescripcion">

            <p>Tipo: {pokemon.tipo}</p>
            <p>Descripcion: {pokemon.descripcion}</p>
          </section>
        </section>

      ))}
    </div>
  );
};

export default Galeria;
