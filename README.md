# 🤖📲 Chatbot Inteligente para WhatsApp com OpenAI GPT

Com o crescente avanço da tecnologia e a mudança nos hábitos de consumo, o uso de chatbots se tornou uma ferramenta cada vez mais necessária e relevante para empresas e organizações. Atualmente, os consumidores esperam respostas rápidas, personalizadas e disponíveis a qualquer momento, o que pode ser desafiador para as equipes de atendimento ao cliente tradicionais. 

## A Necessidade dos Chatbots

- **Atendimento 24/7**: Com a globalização e a internet, os consumidores estão conectados a qualquer momento do dia ou da noite. Os chatbots permitem que as empresas forneçam suporte e assistência a qualquer hora, garantindo um atendimento contínuo e eficiente.

- **Escala e Eficiência**: À medida que as empresas crescem, lidar com um grande volume de consultas e solicitações de clientes pode se tornar um desafio. Os chatbots podem lidar com várias interações simultaneamente, escalando o atendimento de forma eficiente e liberando recursos humanos para tarefas mais complexas.

- **Personalização**: Os consumidores esperam cada vez mais uma experiência personalizada. Os chatbots podem analisar dados do cliente em tempo real e fornecer respostas e recomendações personalizadas, aumentando o engajamento e a satisfação do cliente.

- **Redução de Custos**: Automatizar processos de atendimento ao cliente pode levar a uma redução significativa nos custos operacionais. Os chatbots são uma solução econômica em comparação com a contratação e treinamento de uma equipe de atendimento ao cliente em tempo integral.

## Funcionalidades
Esse protótipo contém as seguintes funcionalidades:

- **Conversação Inteligente**: O chatbot utiliza o modelo de linguagem GPT da OpenAI para entender e gerar respostas inteligentes com base nas mensagens recebidas.
  
- **Conexão com WhatsApp**: O bot é capaz de se conectar ao WhatsApp e enviar mensagens automaticamente.

- **Armazenamento de Contexto**: Utiliza o Redis para salvar o contexto da conversa, permitindo que o bot mantenha o histórico e continue a conversa de onde parou, mesmo quando múltiplos usuários estiverem interagindo simultaneamente.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação utilizada para o desenvolvimento do projeto, proporcionando tipagem estática e suporte moderno para o JavaScript.

- **OpenAI GPT**: A inteligência artificial da OpenAI é usada para compreender as mensagens recebidas e gerar respostas coerentes e contextuais.

- **Venom-bot**: Biblioteca utilizada para conectar-se e enviar mensagens pelo WhatsApp de forma automatizada.

- **Redis**: Banco de dados em memória utilizado para armazenar e gerenciar o contexto da conversa, garantindo a continuidade e personalização das interações.

- **Docker**: Utilizado para containerizar o Redis, facilitando a configuração e o gerenciamento do banco de dados.

## Pré-requisitos

- Node.js, npm e docker instalados na máquina local.
- Conta na OpenAI para obter uma chave de API.

## Instalação

1. Clone este repositório:

    ```
    git clone https://github.com/eryalefvs/whatsapp-gpt.git
    ```

2. Instale as dependências:

    ```
    npm install
    ```

3. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

    ```
    OPENAI_API_KEY=SuaChaveDeAPIOpenAI
    REDIS_HOST=localhost
    REDIS_PORT=6379
    REDIS_DB=0
    ```

4. Inicie o contêiner do Redis usando Docker:

    ```
    docker-compose up -d
    ```

5. Inicie o servidor:

    ```
    npm run dev
    ```

## Uso

Após iniciar o servidor, aparecerá o QR Code no terminal e você deverá ler com o seu WhatsApp. A partir desse ponto, se tudo ocorrer corretamente, o bot estará pronto para receber mensagens no WhatsApp e responder automaticamente.
Obs.: Esse protótipo responde qualquer tipo de contexto que o usuário solicitar, porém você pode treinar o robô para responder contextos específicos, como atendiemento ao cliente de uma determinada empresa. Veja também que são utilizadas apenas mensagens em textos, porém a biblioteca tem suporte para envio de outros tipos de mensagens, como imagens.  

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) para relatar bugs ou propor novas funcionalidades. Se deseja contribuir diretamente, faça um fork do repositório, faça as alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

