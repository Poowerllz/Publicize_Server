const express = require('express');
const server = express();
const port = 5500

server.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})

server.use(express.urlencoded({ extended: true }))

server.use(express.static("Src/Views"))
server.use(express.static("Src/Views/pages"))

server.use(express.static('Public/assets'));
server.use(express.static('Public/assets/images'));

server.use(express.static('Public/styles'));
server.use(express.static('Public/styles/pages'));

server.use(express.static('Public/scripts'));




server.get('/', function(req, res) {
    return res.send("Views/index.html")
});
