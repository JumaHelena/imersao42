const ButtonRemover = () => {

    const buttonRemover = document.createElement('button')
    buttonRemover.classList.add('check-button')
    buttonRemover.innerText = 'deletar'
    buttonRemover.addEventListener('click', deletarTardefa)
    return buttonRemover
}

const deletarTardefa = (evento) => {

    const botaoDeleta = evento.target
    const tarefadeletada = botaoDeleta.parentElement
    tarefadeletada.remove()
    return botaoDeleta
}

export default ButtonRemover