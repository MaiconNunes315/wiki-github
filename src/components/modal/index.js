import { ModalContainer } from "./style";

function Modal({onClick,onChange,disabled,resError,renderSpan}) {
    return (

        <ModalContainer>

            
            <p>Se você deixar em branco irá mostra todos os repositórios, tem certeza que deseja mostrar todos ?</p>
            

            <div className="buttons">
                <button style={{backgroundColor:"#1693a5"}}  onClick={onClick} value="Sim" type="button">Sim</button>
                <button style={{backgroundColor:"#ba1e4a"}}  onClick={onClick} value="Não" type="button">Não</button>
            </div>

            <div className="userGithub">
                <input disabled={disabled} type="text" onChange={onChange} placeholder="Digite o usuário" />
                {renderSpan ?<span>{resError}</span>:null }
            </div>
            

        </ModalContainer>
    )
}

export default Modal;