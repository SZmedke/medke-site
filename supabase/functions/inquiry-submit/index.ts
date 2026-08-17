// Public inquiry submission endpoint for the Medke lead form.
// Validates payload server-side and inserts with the service-role client.
// Direct table access is revoked for anon/authenticated — this function is
// the only write path. No secrets are exposed; service role stays server-side.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return jsonResponse({ error: 'Method not allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: 'Server is missing Supabase environment variables' }, 500);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload' }, 400);
  }

  const name = str(payload.name, 120);
  const email = str(payload.email, 200);
  const message = str(payload.message, 5000);
  if (!name || !email || !message) {
    return jsonResponse({ error: 'name, email and message are required' }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return jsonResponse({ error: 'Invalid email address' }, 400);
  }

  let quantity: number | null = null;
  if (payload.quantity !== '' && payload.quantity != null) {
    const n = Number(payload.quantity);
    if (Number.isFinite(n) && n > 0) quantity = Math.min(999999, Math.floor(n));
  }

  const ref = `MK-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await adminClient.from('inquiries').insert({
    ref,
    name,
    company: str(payload.company, 200) || null,
    country: str(payload.country, 100) || null,
    email,
    phone: str(payload.phone, 60) || null,
    product_name: str(payload.product_name, 300) || null,
    quantity,
    message,
    status: 'new',
  });

  if (error) {
    console.error('inquiry insert failed', error.message);
    return jsonResponse({ error: 'Failed to save inquiry' }, 500);
  }

  return jsonResponse({ ok: true, ref });
});
