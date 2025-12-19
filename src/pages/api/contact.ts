import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body.email || !body.message) {
      return new Response(
        JSON.stringify({ success: false }),
        { status: 400 }
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: import.meta.env.WEB3FORMS_KEY,
        subject: "Nuevo mensaje desde la web",
        from_name: "Vincode",
        ...body,
      }),
    });

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: data.success }),
      { status: data.success ? 200 : 400 }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
};
