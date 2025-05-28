const { jsPDF } = window.jspdf;

document.getElementById('cep').addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('CEP inválido!');
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        })
        .catch(() => alert('Erro ao buscar o CEP'));
});

function gerarPDF() {
    const doc = new jsPDF();

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        nomeMae: document.getElementById('nomeMae').value,
        nomeFantasia: document.getElementById('nomeFantasia').value,
        segmento: document.getElementById('segmento').value,
        cnpj: document.getElementById('cnpj').value,
        razaoSocial: document.getElementById('razaoSocial').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };

    let y = 10;

    doc.setFontSize(16);
    doc.text('Formulário de Cadastro', 10, y);
    y += 10;

    doc.setFontSize(12);
    doc.text('--- Dados do Titular ---', 10, y);
    y += 7;
    doc.text(`Nome: ${dados.nome}`, 10, y); y += 7;
    doc.text(`Email: ${dados.email}`, 10, y); y += 7;
    doc.text(`Telefone: ${dados.telefone}`, 10, y); y += 7;
    doc.text(`CPF: ${dados.cpf}`, 10, y); y += 7;
    doc.text(`Data de Nascimento: ${dados.dataNascimento}`, 10, y); y += 7;
    doc.text(`Nome da Mãe: ${dados.nomeMae}`, 10, y); y += 10;

    doc.text('--- Dados do Negócio ---', 10, y);
    y += 7;
    doc.text(`Nome Fantasia: ${dados.nomeFantasia}`, 10, y); y += 7;
    doc.text(`Segmento: ${dados.segmento}`, 10, y); y += 7;
    doc.text(`CNPJ: ${dados.cnpj}`, 10, y); y += 7;
    doc.text(`Razão Social: ${dados.razaoSocial}`, 10, y); y += 10;

    doc.text('--- Endereço ---', 10, y);
    y += 7;
    doc.text(`CEP: ${dados.cep}`, 10, y); y += 7;
    doc.text(`Rua: ${dados.rua}`, 10, y); y += 7;
    doc.text(`Número: ${dados.numero}`, 10, y); y += 7;
    doc.text(`Complemento: ${dados.complemento}`, 10, y); y += 7;
    doc.text(`Bairro: ${dados.bairro}`, 10, y); y += 7;
    doc.text(`Cidade: ${dados.cidade}`, 10, y); y += 7;
    doc.text(`Estado: ${dados.estado}`, 10, y);

    doc.save('formulario.pdf');

    document.getElementById('mensagem').style.display = 'block';

    
}
