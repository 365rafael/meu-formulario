# Formulário para Geração de PDF com Busca CEP 

Este projeto consiste em um formulário web responsivo desenvolvido em HTML, CSS e JavaScript, que permite ao usuário preencher dados pessoais, do negócio e endereço, gerar um PDF com essas informações, buscar endereço automaticamente pelo CEP e abrir o WhatsApp já com uma mensagem pronta para envio.

## Funcionalidades

- Formulário completo com validação de campos obrigatórios
- Busca automática de endereço via CEP utilizando API ViaCEP
- Geração de PDF com os dados preenchidos usando a biblioteca jsPDF
- Mensagem de agradecimento após geração do PDF
- Layout responsivo e moderno
- Inclusão de logos no topo do formulário (personalizável)

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Biblioteca jsPDF
- API pública ViaCEP para consulta de CEP

## Como usar

1. Clone ou faça download deste repositório  
2. Coloque suas logos na pasta `/img` e atualize os caminhos no HTML  
3. Abra o arquivo `index.html` no navegador ou hospede no Vercel / Netlify / GitHub Pages  
4. Preencha o formulário e clique em "Gerar PDF"  
5. O PDF será baixado e você será redirecionado ao WhatsApp para enviar a mensagem  

## Estrutura de pastas

```
/img  
/css  
/js  
index.html  
README.md
```

## Considerações

Este projeto é frontend puro, sem backend, ideal para hospedagem em plataformas gratuitas que servem arquivos estáticos.

[Exemplo](https://meu-formulario-ten.vercel.app/)

## Autor

Rafael Arantes da Silva  
[LinkedIn](https://www.linkedin.com/in/rafaelarantes)  
E-mail: rafael.imu@gmail.com

---

## Licença

MIT License
