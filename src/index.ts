import { Message, Whatsapp, create } from "venom-bot";
import OpenAI from "openai";
import { config } from "./config";
import { redis } from "./lib/redis";

interface CustomerChat {
  status?: "open" | "closed";
  orderCode: string;
  chatAt: string;
  customer: {
    name: string;
    phone: string;
  };
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
  orderSummary?: string;
}

const openai = new OpenAI({
  apiKey: config.openAI.apiToken,
});

async function main(
  message: OpenAI.Chat.ChatCompletionMessageParam[]
): Promise<string | null> {
  const completion = await openai.chat.completions.create({
    messages: message,
    model: "gpt-3.5-turbo",
    temperature: 0.2,
  });

  return completion.choices[0].message?.content;
}

create({
  session: "whats-gpt", //name of session
  disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client: Whatsapp) {
  client.onMessage(async (message: Message) => {
    if (!message.body || message.isGroupMsg) return;

    const customerPhone = `+${message.from.replace("@c.us", "")}`;
    const customerName = message.author;
    const customerKey = `customer:${customerPhone}:chat`;
    const orderCode = `#sk-${("00000" + Math.random()).slice(-5)}`;

     const lastChat = JSON.parse((await redis.get(customerKey)) || "{}");

    const customerChat: CustomerChat =
    lastChat?.status === "open"
        ? (lastChat as CustomerChat) // carrega a mensagem do cliente do Redis ou crie uma nova
        : {
        status: "open",
        orderCode,
        chatAt: new Date().toISOString(),
        customer: {
          name: customerName,
          phone: customerPhone,
        },
        messages: [
          {
            role: "system",
            content: "",
          },
        ],
        orderSummary: "",
      };

    console.debug(customerPhone, "👨‍💼", message.body);

    client.startTyping(message.from, true);
    
    customerChat.messages.push({
      role: "user",
      content: message.body,
    });

    const content = (await main(
      customerChat.messages
      )) || "Não entendi...";

    client.startTyping(message.from, true);

    customerChat.messages.push({
      role: "assistant",
      content
    });

    console.debug(customerPhone, "🤖", content);

    await client.sendText(message.from, content);

    redis.set(customerKey, JSON.stringify(customerChat));
   });
}
