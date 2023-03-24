function VerificarEntrada(){
    NomeConvidado = document.getElementById('seuNome').value;
    Convidados = ['Marcos','Davi','Rezende','Hytallo','Igor','Guilherme','Gabriel','Lucas'];
    if(Convidados.includes(NomeConvidado))
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você tem permissão para entrar!'
    else document.getElementById('PermissaoDeEntrada').innerText =
        'Você não tem permissão para entrar!'
};