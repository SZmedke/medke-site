// Lead capture module.
// Submits to the inquiry-submit Edge Function (service-role write; direct REST
// access to the inquiries table is revoked for anon/authenticated).
// Success is only reported after the function confirms the insert.

const URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function submitInquiry(payload) {
  if (!URL || !ANON_KEY) {
    throw new Error('Inquiry service is not configured yet.');
  }
  const res = await fetch(`${URL}/functions/v1/inquiry-submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ANON_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error(data.error || 'Failed to save inquiry');
  }
  return { ok: true, ref: data.ref };
}
