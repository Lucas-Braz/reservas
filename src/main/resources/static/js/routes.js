function controleDeRotas(url){
    switch(url){
        case "/logout":
            gerarSwal(url);
            break;
        case "/cadastro/notebook":
            $.get(url, function(data){
                //Renderizar Tela
                $('#mainContainer').html(data);
                //Definir as ações dos componentes
                $("#enviar").click(enviaCadastroNotebook);
            });
            break;
        case "/cadastro/usuario":
                $.get(url, function(data){
                    //Renderizar Tela
                    $('#mainContainer').html(data);
                    //Definir as ações dos componentes
                    $("#enviar").click(cadastrarUsuario);
                });
                break;
        case "/edit/usuario":
            $.get(url, function(data){
                $('#mainContainer').html(data);
                $('#salvar').click(salvarEditUsuario);
            });
            break;
        default:
            $.get(url, function(data){
                //Renderizar Tela
                $('#mainContainer').html(data);
            });
    }
}