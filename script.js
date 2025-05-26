document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");
  const mensagemSucesso = document.getElementById("mensagemSucesso");
  const btnTopo = document.getElementById("btnTopo");

  // Enviar formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validação simples (HTML5 já faz a maior parte)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Aqui você pode enviar para backend, API, etc.
    // Simulando sucesso:
    mensagemSucesso.textContent = "Inscrição enviada com sucesso!";
    mensagemSucesso.style.opacity = "1";

    // Limpar formulário após sucesso
    form.reset();

    // Desaparecer mensagem após 4s
    setTimeout(() => {
      mensagemSucesso.style.opacity = "0";
      mensagemSucesso.textContent = "";
    }, 4000);
  });

  // Mostrar/esconder botão voltar topo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
  });

  // Ao clicar no botão topo, volta ao topo suave
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
