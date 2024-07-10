import './App.css'
import Sidebar from './componentes/Sidebar'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Filtro from './componentes/Filtro'
import Ordenacao from './componentes/Ordenacao'
import Card from './componentes/Card'
import { useState, useEffect } from 'react'

function App() {
  const [dados, setDados] = useState([]);
  //useEffect: usamos ele quando queremos que algo aconteca apos a renderizacao de um componente
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then((response) => response.json())
    .then((dados) => setDados(dados))
  }, [])
  
  //console.log(dados)

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        {/*<Card />*/}
        <ul className="lista-cards">
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
              id={item.id} 
              imagemUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
              </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App


