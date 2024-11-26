# LocalGem

LocalGem é uma API desenvolvida em **Node.js** com **Express** e **MongoDB Atlas**, permitindo o upload de imagens para um repositório local. Além disso, a API utiliza a integração com o **Google Gemini** para gerar descrições automáticas para as imagens enviadas.

## Tecnologias Usadas

### Node.js
- **Node.js** é um ambiente de execução JavaScript no lado do servidor. Ele permite a execução de código JavaScript fora do navegador, sendo ideal para construir aplicações rápidas e escaláveis. O **LocalGem** foi desenvolvido usando Node.js para criar a estrutura backend da API.
  
  **Características**:
  - Assíncrono e orientado a eventos.
  - Ideal para aplicações em tempo real como APIs, chats e serviços de streaming.
  - Grande suporte da comunidade e ecossistema de pacotes via NPM (Node Package Manager).

### Express.js
- **Express** é um framework minimalista para Node.js que facilita o desenvolvimento de APIs e aplicações web. Ele fornece funcionalidades essenciais como roteamento, middleware e manipulação de requisições HTTP, tornando o desenvolvimento de APIs mais eficiente e simples.

  **Características**:
  - Roteamento flexível e modular.
  - Middleware para processamento de requisições.
  - Suporte robusto para REST APIs.
  - Grande comunidade e muitos pacotes e extensões disponíveis.

### MongoDB Atlas
- **MongoDB Atlas** é uma solução de banco de dados como serviço para o MongoDB, proporcionando alta disponibilidade, escalabilidade automática e segurança de dados na nuvem. A integração com o MongoDB Atlas facilita a gestão de dados sem se preocupar com a infraestrutura, oferecendo recursos como backups automáticos e análise de desempenho.

  **Características**:
  - Banco de dados NoSQL altamente escalável.
  - Suporte para dados semi-estruturados com flexibilidade de schema.
  - Hospedagem gerenciada na nuvem com alta disponibilidade.
  - Ferramentas de análise e monitoramento.

### Google Gemini
- **Google Gemini** é a plataforma de IA da Google que permite gerar descrições e insights de maneira automática. No LocalGem, utilizamos o Gemini para gerar descrições automáticas para as imagens que são enviadas para o repositório. Essa integração proporciona um diferencial para os usuários, que recebem descrições detalhadas e precisas para as suas imagens.

  **Características**:
  - Integração com IA para tarefas de processamento de linguagem natural.
  - Geração automática de textos e descrições.
  - Análise de conteúdo multimodal (texto, imagem, etc).
  - Potencial de integração com outras ferramentas e serviços do Google Cloud.

## Funcionalidades

- **Upload de Imagens**: Permite o envio de imagens para o servidor, armazenando-as localmente em um diretório configurado.
- **Geração de Descrição**: Utiliza a API do Google Gemini para gerar descrições automáticas das imagens enviadas, facilitando a organização e busca de imagens no repositório.
- **Persistência no MongoDB Atlas**: As informações das imagens, incluindo o caminho do arquivo e a descrição gerada, são armazenadas no MongoDB Atlas para persistência e fácil recuperação.
