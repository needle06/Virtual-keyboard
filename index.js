document.addEventListener('keydown', (e) => {
  let keyCode = e.keyCode;
  let targetDiv = document.getElementById(keyCode)
  if (targetDiv === null) {
    // console.log(e.code, " ", e.keyCode)
    return;
  }
  targetDiv.classList.remove("key")
  targetDiv.classList.add("keydown")
  return;
})

document.addEventListener('keyup', (e) => {
  console.log(e.code, " ", e.keyCode)
  let keyCode = e.keyCode;
  let targetDiv = document.getElementById(keyCode)
  if (targetDiv === null) {
    return;
  }
  targetDiv.classList.add("key")
  targetDiv.classList.remove("keydown")
})