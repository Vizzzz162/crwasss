export default function handler(req, res) {
  // Aquí defines el valor fijo
  const corwail = "false"; // <-- cámbialo a "false" cuando quieras

  if (req.method === "GET") {
    return res.status(200).json({ corwail });
  }

  // No permitimos POST ni otros métodos
  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Método ${req.method} no permitido`);
}
