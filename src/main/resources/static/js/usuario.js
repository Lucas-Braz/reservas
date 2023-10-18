function cadastrarUsuario(){
    let nome = $("#nome").val();
    let matricula = $("#matricula").val();
    let cargo = $("#ocupacao option:selected").val();
    let email = $("#email").val();

    $.ajax({
        type: "POST",
        url: "/cadastro/usuario",
        data: {
            nome: nome,
            matricula: matricula,
            email: email,
            cargo: cargo
        },
        success: function(data){
            alert(data);
        },
        error: function(){
            alert('Falha ao cadastrar o usuário.');
        }
    });
}

function salvarEditUsuario(){
    let nome = $("#nome").val();
    let cargo = $("#ocupacao option:selected").val();
    let matricula = $("#matricula").val();
    let email = $("#email").val();
    let ativo = $("#ativo").prop("checked");
    let senhaAtual = $("#senhaAtual").val();
    let novaSenha = $("#novaSenha").val();
    let confSenha = $("#confSenha").val();

    $.ajax({
        type: "POST",
        url: "/edit/usuario",
        data:{
            nome: nome,
            cargo: cargo,
            matricula: matricula,
            email: email,
            ativo: ativo,
            senhaAtual: senhaAtual,
            novaSenha: novaSenha,
            confSenha: confSenha
        },
        success: function(data){
            if(data.sucesso){
                alert("Ok: " + data.mensagem);
            }else{
                alert("Erro: " + data.mensagem);
            }
        },
        error: function(){
            alert("Deu ruim");
        }
    });
}