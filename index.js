const express = require('express');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 3001;

// Rota para redirecionar as solicitações de imagens
app.get('/', (req, res) => {
  const imageUrl = req.query.url; // Recebe a URL da imagem a ser carregada

  if (!imageUrl) {
    res.status(400).send('A URL da imagem é necessária.');
    return;
  }

  // Faz uma solicitação para a URL da imagem
  request(imageUrl)
    .on('error', (err) => {
      res.status(500).send(`Erro ao carregar a imagem: ${err.message}`);
    })
    .pipe(res);
});

app.listen(PORT, () => {
  console.log(`Servidor proxy de imagens rodando na porta ${PORT}`);
});
