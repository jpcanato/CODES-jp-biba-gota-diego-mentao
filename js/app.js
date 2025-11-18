
function marcarFavorito(estrela) {
  if (estrela.style.color === 'gold') {
    estrela.style.color = '#ccc';
  } else {
    estrela.style.color = 'gold';
  }
}

function enviarMensagem() {
  const input = document.querySelector('.conversa-entrada input');
  const chat = document.querySelector('.conversa-mensagens');
  
  if (input && input.value.trim()) {
    
    const mensagemUsuario = document.createElement('div');
    mensagemUsuario.className = 'conversa-linha conversa-usuario';
    mensagemUsuario.textContent = input.value;
    chat.appendChild(mensagemUsuario);
    
    
    setTimeout(() => {
      const resposta = document.createElement('div');
      resposta.className = 'conversa-linha conversa-atendente';
      resposta.textContent = 'Obrigado pela mensagem!';
      chat.appendChild(resposta);
      chat.scrollTop = chat.scrollHeight;
    }, 1000);
    
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
  }
}


function buscar(termo) {
  const itens = document.querySelectorAll('.cartao, .item-categoria');
  
  itens.forEach(item => {
    const texto = item.textContent.toLowerCase();
    if (texto.includes(termo.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}


window.onload = function() {
  
  const estrelas = document.querySelectorAll('.estrela');
  estrelas.forEach(estrela => {
    estrela.onclick = function(e) {
      e.preventDefault();
      marcarFavorito(this);
    };
  });
  
  
  const inputChat = document.querySelector('.conversa-entrada input');
  if (inputChat) {
    inputChat.onkeypress = function(e) {
      if (e.key === 'Enter') {
        enviarMensagem();
      }
    };
  }
  
  
  const inputBusca = document.querySelector('.busca input');
  if (inputBusca) {
    inputBusca.oninput = function() {
      buscar(this.value);
    };
  }
};