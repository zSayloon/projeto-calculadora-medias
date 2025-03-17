const form = document.getElementById('form-atividade'); //Puxa o id do form
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Festejando">';
const atividade = []; //array para add um conteudo
const nota = [];    //array para add um conteudo
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota minima: '))



let linhas = '';

form.addEventListener('submit', function(e){ //Adicona um evento ao submit
    e.preventDefault(); //Evita da Página da Reload

    adicionaLinha(); //Adiciona a function
    atualizaTabela();//Adiciona a function
    mediaFinal(); 
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade'); //Puxa as informações do input
    const inputNotaAtividade = document.getElementById('nota-atividade'); //Puxa as informações do input

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A Atividdade ${inputNomeAtividade.value} já foi Adicionada`)
    }
    else{
        atividade.push(inputNomeAtividade.value);   
        nota.push(parseFloat(inputNotaAtividade.value));
    
        let linha = `<tr>`; //Abre a tabela
        linha += `<td> ${inputNomeAtividade.value}</td>`;  //Adiciona na tabela o Nome da atividade
        linha += `<td> ${inputNotaAtividade.value}</td>`; //Adiciona na tabela a Nota da atividade
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; // Faz o if-else da nota
        linha += `</tr>`;   //Fecha a tabela

        linhas += linha; //adiciona linha por linha
    }   

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); // Adicona o conteudo da linha no corpo da tabela
    corpoTabela.innerHTML = linhas;  //inseri um conteudo dentro de uma tag
}

function mediaFinal(){
    const mediaFinal = calcularMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal  >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMediaFinal(){
    let somaDaNota = 0;

    for (let i = 0; i < nota.length; i++){
        somaDaNota += nota[i];
    }

    return somaDaNota / nota.length;
}
