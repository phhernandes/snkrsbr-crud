document.querySelector("#salvar").addEventListener("click", cadastrar)

let teniss = []

window.addEventListener("load", () => {
  teniss = JSON.parse(localStorage.getItem("tenis")) || []
  atualizar()
})

document.querySelector("#busca").addEventListener("keyup", () => {
  let busca = document.querySelector("#busca").value
  let tenissFiltradas = teniss.filter ((tenis) => {
    return tenis.modelo.toLowerCase().includes(busca)
  })
  filtrar(tenissFiltradas)
})

function filtrar(teniss) {
  document.querySelector("#tenis").innerHTML =""
  teniss.forEach((tenis) => {
  document.querySelector("#tenis").innerHTML += createCard(tenis)
  })
}

function atualizar() {
  document.querySelector("#tenis").innerHTML =""
  localStorage.setItem("teniss", JSON.stringify(teniss))
  teniss.forEach((tenis) => {
  document.querySelector("#tenis").innerHTML += createCard(tenis)
  })
}

function cadastrar() {
    const modelo = document.querySelector('#modelo').value
    const linkft = document.querySelector('#linkft').value
    const retail = document.querySelector('#retail').value
    const tamanho = document.querySelector('#tamanho').value
    const condicao = document.querySelector('#condicao').value
    const marca = document.querySelector('#marca').value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tenis = {
      id: Date.now(),
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
    
    teniss.push(tenis)

    atualizar()

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
function apagar(id){
  teniss = teniss.filter((tenis) => {
    return tenis.id != id
  })
  atualizar()
}


function createCard(tenis) {
    return `
    <div class="col-lg-3 col-md-6 col-9 mx-auto mx-lg-0 mx-md-0">
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
              <span class="badge" style="background: linear-gradient(90deg, rgba(63,160,171,1) 0%, rgba(207,102,182,1) 100%);">${tenis.marca}</span>
            </p>
            <a onClick="apagar(${tenis.id})" href="#" class="btn btn-danger" title="apagar tenis" style="background: rgb(63,160,171);
            background: linear-gradient(90deg, rgba(63,160,171,1) 0%, rgba(207,102,182,1) 100%);color: #fff; border-width: inherit;">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div> <!--card-->
      </div> <!--col-->`
}
