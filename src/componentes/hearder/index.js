
import './index.css';
import pokeBola from '../../img/pokebola.png';
import { Link } from 'react-router-dom';


function Hearer() {
    return (
        <div className='container'>
            <img src={pokeBola}></img>
            <Link to={'/'} className='titulo' > PokeCard </Link>

        </div>
    )
}



export default Hearer;








