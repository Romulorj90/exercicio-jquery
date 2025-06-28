$(function () {
    // Adiciona tarefa
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();

        const texto = $('#nova-tarefa').val().trim();
        if (!texto) return;

        $('<li>').text(texto).appendTo('#lista-tarefas');
        $('#nova-tarefa').val('');
    });

    // Risco/desrisco
    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('concluida');
    });
});