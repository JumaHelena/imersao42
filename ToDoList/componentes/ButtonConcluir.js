const ButtonConcluir = () => {

    const buttonConcluir = document.createElement('button')
    buttonConcluir.classList.add('check-button')
    buttonConcluir.innerText = 'concluir'

    buttonConcluir.addEventListener('click', concluirTarefa)

    return buttonConcluir
}

const concluirTarefa = (evento) => {

    const botaoConclui = evento.target
    const tarefacompleta = botaoConclui.parentElement
    tarefacompleta.classList.toggle('done')
}

export default ButtonConcluir