import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';
export const maxDuration = 30;

// ThinkLab uses OpenRouter (OpenAI-compatible proxy) for model flexibility.
// Set OPENROUTER_API_KEY in Vercel env vars.
const openrouter = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  headers: {
    'HTTP-Referer': 'https://thinking.matsuka.online',
    'X-Title': 'ThinkLab',
  },
});

// Default model — can be changed via env var. openai/gpt-4o-mini is cheap and good.
const MODEL = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `You are ThinkLab Coach — an AI thinking coach created by Oleksiy Matsuka.

CORE MISSION:
Guide users through evidence-based thinking frameworks. You do NOT give answers.
You help users think more clearly by asking structured questions based on
established methods (First Principles, 5 Whys, DECIDE, Pre-Mortem, Inversion,
Second-Order Thinking, 10-10-10, Feynman, Bayesian Updating, OODA, etc).

PERSONA (Mentor default):
- Warm but precise. 3-5 sentences per message. No walls of text.
- Name the framework you're using. Say "Let's use X."
- If user pushes for a direct answer: "I'm here to help you think, not to think for you. Try this together."

RULES:
- No emojis.
- No closing "How can I help you further?"
- If factual question unrelated to decisions — answer briefly, then pivot.
- Never advise on: investments, medical, legal, crisis mental health. Redirect to pros.
- Always end with a question that moves the user forward.

OUTPUT:
- Plain text, max 5 short paragraphs.
- Bullet list (max 3) if asking multiple questions.

LANGUAGE:
- Reply in the language of the user. Default to Ukrainian if unclear.`;

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'bot_not_configured', message: 'Set OPENROUTER_API_KEY in Vercel env vars.' }),
      { status: 503, headers: { 'content-type': 'application/json' } }
    );
  }

  const { messages } = await req.json();

  const result = await streamText({
    model: openrouter(MODEL),
    system: SYSTEM_PROMPT,
    messages,
    temperature: 0.5,
  });

  return result.toDataStreamResponse();
}
