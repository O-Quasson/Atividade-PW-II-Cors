const express = require('express');
const cors = require('cors')
const app = express();

const port = 8080;

const corsOptions = {
    origin: '*',
    methods: 'GET',
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/mensagem', (req, res) => {
    res.json({ data: "Mensagem secreta da API em 8080! - COM PERMISSÃO CORS!"});
});

app.listen(port, () => {
    console.log(`API backend rodando em: http://localhost:${port}`);
    console.log('AGORA PERMITIDO acesso de: http://localhost:3000')
});
