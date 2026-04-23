export const runtime = 'edge';

export async function POST(req: Request) {
  const { email, source } = await req.json();

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'invalid_email' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const formspreeId = process.env.FORMSPREE_ID;
  if (!formspreeId) {
    return new Response(JSON.stringify({ error: 'not_configured' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, source: source || 'unknown' }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'formspree_failed' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json' },
  });
}
