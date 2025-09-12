const
    Submit_btn = document.getElementById("Submit-btn"),
    Table_Cad = document.getElementById("Table-TBody")
;

Submit_btn.addEventListener("click", function(Evento){
    Evento.preventDefault();

    const 
        Name = document.getElementById("Name").value,
        Surname = document.getElementById("Surname").value,
        My_Email = document.getElementById("My-Email").value,
        Birth_Date = document.getElementById("Birth-Date").value
    ;

    console.table([Name, Surname, My_Email, Birth_Date]);

    Table_Cad.innerHTML = `
        <tr>
            <td>${Name}</td>
            <td>${Surname}</td>
            <td>${My_Email}</td>
            <td>${Birth_Date}</td>
        </tr>
    `;
})