import { useState } from 'react'
import './styles.css'

export default function BarraDePesquisa(){
    const [termoPesquisa, setTermoPesquisa] = useState(''); //hooks: funcoes fornecidas pelo react para facilitar; useState: gera uma variavel de estado onde controlamos o que esta acontecendo dentro dela e possiveis variacoes que podem acontecer
    console.log(termoPesquisa);
    return (
        <input 
        type="search" 
        placeholder="Digite o que você procura" 
        className='barra-pesquisa'
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)} />
    );
}