# 🤖📲 Smart Chatbot for WhatsApp with OpenAi GPT

With the increasing advancement of technology and the change in consumer habits, the use of chatbots has become an increasingly necessary and relevant tool for companies and organizations. Today, consumers expect responses that are fast, personalized, and available at any time, which can be challenging for traditional customer service teams.

## The need for chatbots

- **24/7 service**: With globalization and the internet, consumers are connected at any time of the day or night. Chatbots allow companies to provide support and assistance at any time, ensuring continuous and efficient service.

- **Scale and Efficiency**: As companies grow, handling a high volume of customer inquiries and requests can become a challenge. Chatbots can handle multiple interactions simultaneously, scaling service efficiently and freeing up human resources for more complex tasks.

- **Personalization**: Consumers increasingly expect a personalized experience. Chatbots can analyze customer data in real time and provide personalized responses and recommendations, increasing customer engagement and satisfaction.

- **Cost Reduction**: Automating customer service processes can lead to a significant reduction in operational costs. Chatbots are a cost-effective solution compared to hiring and training a full-time customer service team.

## Functionalities
This prototype contains the following functionalities:

- **Intelligent Conversation**: The chatbot uses OpenAI's GPT language model to understand and generate intelligent responses based on incoming messages.
  
- **Connection with WhatsApp**: The bot is able to connect to WhatsApp and send messages automatically.

- **Context Storage**: Uses Redis to save the context of the conversation, allowing the bot to maintain the history and continue the conversation where it left off, even when multiple users are interacting simultaneously.

## Technologies Used

- **TypeScript**: Programming language used for project development, providing static typing and modern support for JavaScript.

- **OpenAI GPT**: OpenAI's artificial intelligence is used to understand incoming messages and generate coherent and contextual responses.

- **Venom-bot**: Library used to connect and send messages via WhatsApp in an automated way.

- **Redis**: In-memory database used to store and manage the context of the conversation, ensuring the continuity and personalization of interactions.

- **Docker**: Used to containerize Redis, facilitating database configuration and management.

## Prerequisites

- Node.js, npm and docker installed on the local machine.
- OpenAI account to obtain an API key.

## Installation

1. Clone this repository:

    ```
    git clone https://github.com/eryalefvs/whatsapp-gpt.git
    ```

2. Install the dependencies:

    ```
    npm install
    ```

3. Configure environment variables:

   - Create a file `.env` in the project root and define the following variables:

    ```
    OPENAI_API_KEY=YourKeyAPIOpenAI
    REDIS_HOST=localhost
    REDIS_PORT=6379
    REDIS_DB=0
    ```

4. Start redis container using docker:

    ```
    docker-compose up -d
    ```

5. Start the server:

    ```
    npm run dev
    ```

## Usage

After starting the server, the QR Code will appear on the terminal and you must read it with your WhatsApp. From that point on, if everything goes correctly, the bot will be ready to receive messages on WhatsApp and respond automatically.

## Comments

This prototype responds to any type of context that the user requests, but you can train the robot to respond to specific contexts, such as customer service for a specific company. Also note that only text messages are used, but the library has support for sending other types of messages, such as images.

## Contribution

Contributions are welcome! Feel free to open issues to report bugs or propose new features. If you want to contribute directly, fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

