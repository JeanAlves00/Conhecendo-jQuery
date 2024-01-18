$(document).ready(function() {
    // Ao enviar o formulário
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();

        // Obter o valor da tarefa do campo de entrada
        var taskName = $('#tarefa').val();

        // Adicionar a tarefa à lista
        $('#lista-tarefa').append('<li>' + taskName + '</li>');

        // Limpar o campo de entrada
        $('#tarefa').val('');
    });

    // Ao clicar em um item da lista
    $('#lista-tarefa').on('click', 'li', function() {
        // Adicionar ou remover a linha através da classe CSS
        $(this).toggleClass('completed');
    });
});

