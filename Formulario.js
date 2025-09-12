const
    Submit_btn = document.getElementById("Submit-btn"),
    Span_Count = document.getElementById("Count-Cads"),
    Table_TBody = document.getElementById("Table-TBody") // 1. Obtem o Elemento da Tabela
;

function UpdateCount(){
    const Total_Linhas = Table_TBody.rows.length;
    Span_Count.textContent = Total_Linhas
}

Submit_btn.addEventListener("click", function(Evento){
    Evento.preventDefault();

    const 
        Name = document.getElementById("Name").value,
        Surname = document.getElementById("Surname").value,
        My_Email = document.getElementById("My-Email").value,
        Birth_Date = document.getElementById("Birth-Date").value
    ;

    console.table([Name, Surname, My_Email, Birth_Date]);

    // 2. Adiciona Nova Linha
    const New_Row = Table_TBody.insertRow();
    
    // 3. Adiciona as Novas Células as Novas Linhas
    /* const
        Cell0 = New_Row.insertCell(0),
        Cell1 = New_Row.insertCell(1),
        Cell2 = New_Row.insertCell(2),
        Cell3 = New_Row.insertCell(3)
    ; */

    // 4. Preenchendo os Conteúdos das Células
    /* Cell0.textContent = Name;
    Cell1.textContent = Surname;
    Cell2.textContent = My_Email;
    Cell3.textContent = Birth_Date; */

    // Opção Resumida = "3. + 4."
    New_Row.insertCell(0).textContent = Name;
    New_Row.insertCell(1).textContent = Surname;
    New_Row.insertCell(2).textContent = My_Email;
    New_Row.insertCell(3).textContent = Birth_Date;

    /* Opnião da IA
        Por que este método é melhor?

        Performance: É mais rápido, pois manipula apenas os elementos que precisam ser modificados, sem precisar recriar a estrutura da tabela inteira.
        Segurança: Evita o risco de ataques de injeção de HTML, já que você está inserindo apenas texto, e não código HTML.
        Clareza: O código fica mais explícito e fácil de entender.
    */

    // 5. Limpa os campos do Formulário após a inserção
    document.getElementById("Name").value = "";
    document.getElementById("Surname").value = "";
    document.getElementById("My-Email").value = "";
    document.getElementById("Birth-Date").value = "";

    // 6. Contador
    // Chama a função para atualizar o contador após a nova linha ser adicionada
    UpdateCount();
});

// Chame a função uma vez ao carregar a página, caso já existam dados iniciais
document.addEventListener('DOMContentLoaded', UpdateCount);





/*

    Caso queira ver no F12 
    const count = Table_TBody.rows.length;
    console.log(count);

*/