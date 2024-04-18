$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const nomeNovaTarefa = $('#tarefa-nova').val();   
        const novoItem = $('<li></li>').text(nomeNovaTarefa);
        novoItem.appendTo('ul');
        
        $('#tarefa-nova').val('');
    });

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });
});