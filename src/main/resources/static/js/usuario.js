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