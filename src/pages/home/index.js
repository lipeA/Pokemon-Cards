import './index.css';
import pikachu from '../../img/pikachu.png';
import charmander from '../../img/charmander.png';
import Gyarados from '../../img/Gyarados.png';
import Mew from '../../img/Mew.png';
import Dragonite from '../../img/dragonite.png';
import Gengar from '../../img/gengar.png';

import pickachuCabe from '../../img/cabeca-pikachu.png';
import charmanderCabe from '../../img/cabeca-charmander.png';
import GyaradosCabe from '../../img/cabeca-gyarados.png';
import MewCabe from '../../img/Mew-cabeca.png';
import DragoniteCabe from '../../img/cabeca-dragonite.png';
import GengarCabe from '../../img/cabeca-gengar.png';







function pokemonSelecionado() {

    const listaSelecaoPokemon = document.querySelectorAll('.pokemon');
    console.log(listaSelecaoPokemon);

    listaSelecaoPokemon.forEach((pokemon) => {
        pokemon.addEventListener("click", () => {
            console.log("entrou no loop");

            // ocultando o pokemon ativo.
            const cartaoPokemonAtivo = document.querySelector(".ativo")
            cartaoPokemonAtivo.classList.remove("ativo")
           

            const idPokemonSelecionado = pokemon.attributes.id.value
            console.log(idPokemonSelecionado)

            const idDoPokemonParaAbrir = idPokemonSelecionado;
            const PokemonParaAbrir = document.getElementById(idDoPokemonParaAbrir)

            PokemonParaAbrir.classList.add("ativo");



        })
    });


}






function Home() {
    return (
        <div className='pokedex'>
            <div className='cartoes-pokemon'>

                {/* cartão do picachu */}
                <div className='cartao-pokemon' id='Picachu'>
                    <div className='cartao-topo tipo-eletrico'>
                        <div className='detalhes'>
                            <h2>Pikachu</h2>
                            <span className='num-cartao'>#001</span>
                        </div>
                        <span className='tipo'> Eletrico </span>
                        <div className='cartao-imagem'>
                            <img src={pikachu} alt='imagem-picachu'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 300</li>
                                <li>ATAQUE: 600</li>
                                <li>DEFESA: 500</li>
                                <li>VELOCIDADE: 300</li>
                                <li>TOTAL: 1700</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Choque do Trovão</li>
                                <li>Cabeçada</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* cartão do charmander */}
                <div className='cartao-pokemon ativo' id='Charmander'>

                    <div className='cartao-topo tipo-fogo'>
                        <div className='detalhes'>
                            <h2>Charmander</h2>
                            <span className='num-cartao'>#002</span>
                        </div>
                        <span className='tipo' > Fogo </span>
                        <div className='cartao-imagem'>
                            <img src={charmander} alt='imagem-chamander'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 200</li>
                                <li>ATAQUE: 300</li>
                                <li>DEFESA: 400</li>
                                <li>VELOCIDADE: 320</li>
                                <li>TOTAL: 1220</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Lança-chamas</li>
                                <li>Cabeçada</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* cartão do Gyarados */}
                <div className='cartao-pokemon' id='Gyarados'>

                    <div className='cartao-topo tipo-agua'>
                        <div className='detalhes'>
                            <h2>Gyarados</h2>
                            <span className='num-cartao'>#003</span>
                        </div>
                        <span className='tipo' > Água</span>
                        <div className='cartao-imagem'>
                            <img src={Gyarados} alt='imagem-gyarados'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 300</li>
                                <li>ATAQUE: 600</li>
                                <li>DEFESA: 500</li>
                                <li>VELOCIDADE: 300</li>
                                <li>TOTAL: 1700</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Jato d' Água</li>
                                <li>Hidro Bomba</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* cartão do Mew */}
                <div className='cartao-pokemon' id='Mew'>

                    <div className='cartao-topo tipo-pisiquico'>
                        <div className='detalhes'>
                            <h2>Mew</h2>
                            <span className='num-cartao'>#0151</span>
                        </div>
                        <span className='tipo' > Pisiquico </span>
                        <div className='cartao-imagem'>
                            <img src={Mew} alt='imagem-mew'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 900</li>
                                <li>ATAQUE: 1200</li>
                                <li>DEFESA: 1800</li>
                                <li>VELOCIDADE: 2000</li>
                                <li>TOTAL: 5.900</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Gyro Ball</li>
                                <li>Wild Charge</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* cartão do Dragonite */}
                <div className='cartao-pokemon' id='Dragonite'>

                    <div className='cartao-topo tipo-dragao'>
                        <div className='detalhes'>
                            <h2>Dragonite</h2>
                            <span className='num-cartao'>#0054</span>
                        </div>
                        <span className='tipo' > Dragão </span>
                        <div className='cartao-imagem'>
                            <img src={Dragonite} alt='imagem-dragonite'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 500</li>
                                <li>ATAQUE: 600</li>
                                <li>DEFESA: 400</li>
                                <li>VELOCIDADE: 400</li>
                                <li>TOTAL: 1900</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Dança do dragão</li>
                                <li>Velocidade extrema</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* cartão do Gengar */}
                <div className='cartao-pokemon' id='Gengar'>
                    <div className='cartao-topo tipo-trevas'>
                        <div className='detalhes'>
                            <h2>Gengar</h2>
                            <span className='num-cartao'>#0018</span>
                        </div>
                        <span className='tipo' > Trevas </span>
                        <div className='cartao-imagem'>
                            <img src={Gengar} alt='imagem-gengar'></img>
                        </div>
                    </div>
                    {/* informações sobre o pokemon */}
                    <div className='cartao-info'>
                        <div className='status'>
                            <h3>Status</h3>
                            <ul>
                                <li>HP: 100</li>
                                <li>ATAQUE: 200</li>
                                <li>DEFESA: 300</li>
                                <li>VELOCIDADE: 400</li>
                                <li>TOTAL: 1000</li>
                            </ul>
                        </div>
                        <div className='habilidades'>
                            <h3>Habilidades</h3>
                            <ul>
                                <li>Bola sombria</li>
                                <li>Lambida</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            {/* lista de pokemon */}
            <div className='lista-pokemon'>

                <button className='pokemon' id='Picachu' onClick={pokemonSelecionado}>
                    <img src={pickachuCabe} alt='imagem-picachu'></img>
                    <samp>Pikachu</samp>
                </button>

                <button className='pokemon' id='Charmander' onClick={pokemonSelecionado}>
                    <img src={charmanderCabe} alt='imagem-charmander'></img>
                    <samp>Charmander</samp>
                </button>

                <button className='pokemon' id='Gyarados' onClick={pokemonSelecionado}>
                    <img src={GyaradosCabe} alt='imagem-gyarados'></img>
                    <samp>Gyarados</samp>
                </button>

                <button className='pokemon' id='Mew' onClick={pokemonSelecionado}>
                    <img src={MewCabe} alt='imagem-mew'></img>
                    <samp>Mew</samp>
                </button>

                <button className='pokemon' id='Dragonite' onClick={pokemonSelecionado}>
                    <img src={DragoniteCabe} alt='imagem-dragonite'></img>
                    <samp>Dragonite</samp>
                </button>

                <button className='pokemon' id='Gengar' onClick={pokemonSelecionado} >
                    <img src={GengarCabe} alt='imagem-gengar'></img>
                    <samp>Gengar</samp>
                </button>

            </div>
        </div>
    )
}



export default Home;