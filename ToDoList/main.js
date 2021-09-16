import ButtonConcluir from './componentes/ButtonConcluir.js'
import ButtonRemover from './componentes/ButtonRemover.js'



const criarTarfefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-datalist]')
    const input = document.querySelector('[data-form-input]')
    const data = document.querySelector('[data-form-data]')
    const valor = input.value
    const datainput = data.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}        ${datainput}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(ButtonConcluir())

    lista.appendChild(tarefa)
}

const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarfefa)