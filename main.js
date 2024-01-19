document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtenha os valores inseridos no formulário
        const nome = document.querySelector('.nomes').value;
        const telefone = document.querySelector('.contatos').value;

        // Crie uma nova linha na tabela com os valores do formulário
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
        `;

        // Adicione a nova linha ao corpo da tabela
        tableBody.appendChild(newRow);

        // Limpe os campos do formulário
        form.reset();
    });
});
