let botaoCriar = document.querySelector('#criar-cliente')
botaoCriar.addEventListener('click', function(evento){
    evento.prevenDefault()
    //atribui ao vetor form os valores inseridos no formulário do site
    let form = document.querySelector('#form-adicionar')

    //atribui ao vetor paciente os dados do form categorizados
    let clientela = resgatarDados(form) 


    addClientela(clientela)
})



//função pra funcionar o Botão de add clientela
function addClientela(clientela){
    let clientelaTR = montarTr(clientela)
    let tabela = document.querySelector('#tabela-clientela')

    tabela.appendChild(clientelaTR)
}

//cria uma Tr(fileira da Tebela)
function montarTr(clientela){
    let clientelaTR = document.createElement('tr')
    clientelaTR.classList.add('clientela')

    clientelaTR.appendChild(montarTd(clientela.nome,'nome' ))
    clientelaTR.appendChild(montarTd(clientela.prestado,'descri-servico'))
    clientelaTR.appendChild(montarTd(clientela.orcamento,'preco-orcado' ))
    clientelaTR.appendChild(montarTd(clientela.status, 'status-servico'))

    return clientelaTR
}


// cria uma td (dado da tabela)
function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

//Função pra resgatar dados do cliente
function resgatarDados(form){
    let clientela = {
        nome: form.nome.value,
        servico: form.prestado.value,
        orcamento: form.orcamento.value,
        status: form.status.value,
    } 
}