//Esse arquivo e responsavel por fazer a ligacao com o server 

const app = require('./src/app') // esta indicando onde esta o arquivos da rota da principal (app)
const PORT = process.env.PORT; // o nuemro na porta esta sendo declarado no arquivo env por ser uma informacao que requer sigilo.

// As portas mais usadas sao: 3000, 6000, 6060, 8080, 8088

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)); // printa no terminal que deu certo