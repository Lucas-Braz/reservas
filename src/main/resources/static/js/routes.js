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
    }
}