import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resposta, setResposta] = useState("Carregando...");

  useEffect(() => {
    axios
      .get("/api/ping")
      .then((res) => setResposta(JSON.stringify(res.data)))
      .catch(() => setResposta("Erro ao conectar com a API"));
  }, []);

  return (
    <div>
      <h1>Guild Rivals TESTES</h1>
      <p>Resposta da API: {resposta}</p>
    </div>
  );
}

export default App;
