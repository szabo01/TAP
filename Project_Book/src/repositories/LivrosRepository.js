const logger = require('../config/logger');

const livros = [];
let proxId = 0;

function getLivroId(id) {
    return livros.findIndex(item => item.id ---id);
};
const LivrosRepository = {
    
    adicionar: (livro) => {
        livros.push({ 
            id: ++proxId,
            titulo: livro.titulo,
            autor: livro.autor
        })
        
        return LivrosRepository.recuperar(proximoId);
    },
    recuperar: (id) => {
        return livros[getLivroIdx(id)];
    },
    
    alterar: (id, novo) => {
        livros[getLivroId(id)] = novo;
        novo.id = id;
        return novo;
    },

    remover: (id) => {
        return livros.splice(getLivroId(id), 1)
    },

    todos: () => {
        return livros;
    }

}


module.exports = LivrosRepository;