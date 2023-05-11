document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    const modelo = document.querySelector('#modelo').value
    const linkft = document.querySelector('#linkft').value
    const retail = document.querySelector('#retail').value
    const tamanho = document.querySelector('#tamanho').value
    const condicao = document.querySelector('#condicao').value
    const marca = document.querySelector('#marca').value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tenis = {
        modelo,
        linkft,
        retail,
        tamanho,
        condicao,
        marca,
    }

    if (!validar(tenis.modelo, document.querySelector("#modelo"))) return
    if (!validar(tenis.linkft, document.querySelector("#linkft"))) return
    if (!validar(tenis.retail, document.querySelector("#retail"))) return
    if (!validar(tenis.tamanho, document.querySelector("#tamanho"))) return
    if (!validar(tenis.condicao, document.querySelector("#condicao"))) return
    if (!validar(tenis.marca, document.querySelector("#marca"))) return
    
    document.querySelector("#tenis").innerHTML += createCard(tenis)

    modal.hide()

}

function validar(valor, campo) {
    if (valor == "") {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }
    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")
    return true

}
function apagar(botao){
  botao.parentNode.parentNode.parentNode.remove()
}


function createCard(tenis) {
    return `
    <div class="col-lg-3 col-md-6 col-9-mx-auto">
        <div class="card mb-3">
          <div class="card-header">
            ${tenis.modelo}
          </div>
          <img src="${tenis.linkft}" class="card-img-top" alt="foto do tenis">
          <div class="card-body">
            <p class="card-text">Retail: R$${tenis.retail}</p>
            <p class="card-text">Tamanho: ${tenis.tamanho}</p>
            <p class="card-text">Condição: ${tenis.condicao}</p>
            <p>
              <span class="badge text-bg-dark">${tenis.marca}</span>
            </p>
            <a onClick="apagar(this)" href="#" class="btn btn-danger" title="apagar tenis">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div> <!--card-->
      </div> <!--col-->`
}
