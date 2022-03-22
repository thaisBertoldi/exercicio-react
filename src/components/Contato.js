import { useState } from 'react'
import styles from './Contato.module.css'

function Contato() {

    function CadastrarUsuario(e) {
        e.preventDefault();
        alert(`Seu nome é ${nome}. 
    Seu email é ${email}. 
    O motivo do seu contato foi ${questions} 
    e você disse que ${faleMaisSobre}`);
    }

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [faleMaisSobre, setFaleMaisSobre] = useState()
    const [questions, setQuestions] = useState("Quero aprender HTML/CSS")

    return (
        <div className={styles.contatoContainer}>
            <form className={styles.contatoFormulario} onSubmit={CadastrarUsuario}>
                <label>Digite seu nome:</label>
                <input className={styles.contatoInput} type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label>Digite seu e-mail:</label>
                <input className={styles.contatoInput} type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Qual é o motivo do seu contato?</label>
                <select className={styles.contatoSelect} value={questions} onChange={(e) => setQuestions(e.target.value)}>
                    <option value="Quero aprender HTML/CSS">Quero aprender HTML/CSS</option>
                    <option value="Quero aprender JS">Quero aprender JS</option>
                    <option value="Quero aprender REACT">Quero aprender REACT</option>
                </select>

                <label >Fale mais sobre o seu problema</label>
                <textarea className={styles.contatoTextArea} placeholder="Digite aqui seu enooorme problema" value={faleMaisSobre} onChange={(e) => setFaleMaisSobre(e.target.value)}></textarea>
                <div className={styles.contatoCadastrarDiv}>
                    <input className={styles.contatoCadastrar} type="submit" value="Cadastrar" />
                </div>
            </form>

        </div>
    )
}

export default Contato;