document.getElementById('loanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const nascimento = document.getElementById('nascimento').value;
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const valor = document.getElementById('valor').value.trim();
  const prazo = document.getElementById('prazo').value.trim();
  const termos = document.getElementById('termos').checked;

  if (!termos) {
    alert('Você deve aceitar os Termos de Uso para continuar.');
    return;
  }

  // Mensagem para WhatsApp
  const mensagem = `Olá, meu nome é ${nome}. Gostaria de solicitar um empréstimo no valor de R$ ${valor}, para ser pago em ${prazo} meses.%0A
CPF: ${cpf}%0A
Data de nascimento: ${nascimento}%0A
Telefone: ${telefone}%0A
E-mail: ${email}%0A
Endereço: ${rua}, ${numero}, ${bairro}, ${cidade} - ${estado}, CEP: ${cep}%0A
Por favor, entre em contato para os próximos passos.`;

  // Número do banco (substitua pelo número real, com DDD e sem espaços)
  const numeroBanco = "5511999999999";

  // Abrir WhatsApp com mensagem
  window.open(`https://wa.me/${numeroBanco}?text=${mensagem}`, '_blank');
});
