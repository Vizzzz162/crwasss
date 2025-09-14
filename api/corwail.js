import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { corwail } = req.body;

    if (corwail !== "true" && corwail !== "false") {
      return res.status(400).json({ error: "Valor inválido, use 'true' o 'false'" });
    }

    const newData = { corwail };
    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
    return res.status(200).json(newData);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Método ${req.method} no permitido`);
}