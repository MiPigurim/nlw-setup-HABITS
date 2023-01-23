const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
// Registros em memória

button.addEventListener("click", add)
form.addEventListener("change", save)
// registrou em memória um evento de click e depois registra em memórias as alterações

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  // Salvamento na memória do chrome de todas as chang que aconteceram em formato de string
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
// pega as informações que estavam em texto e transforma em objeto
nlwSetup.setData(data)
nlwSetup.load()
