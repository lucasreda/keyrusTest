$('body').show("slow");
$('.successMsg').hide();
$('.errorMsg').hide();

//Login e Senha do Usuário
var userData = {
   user: "keyrus",
   password: "keyrus123"
};

userField = document.getElementById("user");
passwordField = document.getElementById("password");

function validate(){
    $('.successMsg').hide();
    $('.errorMsg').hide();

   if(userField.value == 0 || passwordField.value == 0){
    $('.errorMsg').show("slow");
    return;
   } 

   if(userField.value == userData.user && passwordField.value == userData.password){
     logar();
   } else{
    $('.errorMsg').show("slow");
   }
}

function logar(){
    $('.successMsg').show("slow");
}