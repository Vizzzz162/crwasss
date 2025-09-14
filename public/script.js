// Cambiar valor a true
async function setCorwailTrue() {
  await fetch("/api/corwail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ corwail: "true" })
  });
  console.log("corwail cambiado a true");
}

// Cambiar valor a false
async function setCorwailFalse() {
  await fetch("/api/corwail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ corwail: "false" })
  });
  console.log("corwail cambiado a false");
}

// Leer valor actual
async function getCorwail() {
  const res = await fetch("/api/corwail");
  const data = await res.json();
  console.log("Estado actual:", data);
}