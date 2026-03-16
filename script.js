document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada com sucesso!");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Redirecionando para o aplicativo...");
        });
    });
});
