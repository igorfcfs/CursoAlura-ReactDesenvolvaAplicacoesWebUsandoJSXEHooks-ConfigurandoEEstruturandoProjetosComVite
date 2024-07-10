import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import Icone from './assets/icone.png'

import './styles.css'
export default function Card({id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario}) {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={imagemUrl} alt="imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={Code} alt="codigos" />
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt="compartilhamentos" />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt="codigos" />
                            {comentarios}
                        </li>
                        <div className="rodape__usuario">
                            <img src={usuario.imagem} alt='imagem do usuario' />
                            {usuario.nome}
                        </div>
                    </ul>
                </div>
            </div>
        </article>
    )
}