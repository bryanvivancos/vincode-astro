import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, email, phone, company, message } = body;

        if (!name || !email || !phone || !message) {
            console.error('❌ Validación fallida - campos faltantes (contact)');
            return new Response(
                JSON.stringify({ success: false, error: 'Todos los campos requeridos' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!import.meta.env.RESEND_API_KEY) {
            console.error('❌ RESEND_API_KEY no está configurada');
            return new Response(
                JSON.stringify({ success: false, error: 'Configuración de email no disponible' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('📤 Enviando email de contacto con Resend...');

        const { data, error } = await resend.emails.send({
            from: 'Contacto Vincode <leads@notificaciones.vincode.dev>',
            to: ['vincodedev@gmail.com'],
            subject: `Nuevo Mensaje de Contacto - ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color:#111; line-height:1.5; max-width:680px; margin:0 auto; padding:20px; }
                        .header { background:#111827; color:#fff; padding:24px; border-radius:8px 8px 0 0; text-align:center }
                        .header h1 { margin:0; font-size:20px }
                        .section { background:#fff; padding:22px; border:1px solid #e5e7eb }
                        .row { margin-bottom:14px }
                        .label { font-size:12px; color:#6b7280; font-weight:700; text-transform:uppercase; margin-bottom:6px }
                        .value { font-size:15px; color:#111827 }
                        .message { background:#f9fafb; padding:16px; border-radius:6px; border:1px solid #e5e7eb }
                        .footer { text-align:center; color:#6b7280; font-size:12px; padding:18px }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📬 Nuevo Mensaje de Contacto</h1>
                    </div>
                    <div class="section">
                        <div class="row">
                            <div class="label">Nombre</div>
                            <div class="value">${name}</div>
                        </div>

                        <div class="row">
                            <div class="label">Correo</div>
                            <div class="value"><a href="mailto:${email}" style="color:#0ea5e9; text-decoration:none">${email}</a></div>
                        </div>

                        <div class="row">
                            <div class="label">Teléfono</div>
                            <div class="value"><a href="tel:${phone}" style="color:#0ea5e9; text-decoration:none">${phone}</a></div>
                        </div>

                        <div class="row">
                            <div class="label">Empresa</div>
                            <div class="value">${company || 'No especificada'}</div>
                        </div>

                        <div class="row">
                            <div class="label">Mensaje</div>
                            <div class="message">${message.replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Enviado desde el formulario de contacto de Vincode</p>
                        <p>© ${new Date().getFullYear()} Vincode</p>
                    </div>
                </body>
                </html>
            `,
            text: `Nuevo Mensaje de Contacto - ${name}\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nEmpresa: ${company || 'No especificada'}\n\nMensaje:\n${message}`
        });

        if (error) {
            console.error('❌ Error enviando email con Resend (contact):', error);
            return new Response(
                JSON.stringify({ success: false, error: 'Error al enviar el email', details: error.message || 'Error desconocido' }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('✅ Email de contacto enviado:', data);

        return new Response(JSON.stringify({ success: true, data }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (err) {
        console.error('❌ Error en API de contacto:', err);
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        return new Response(JSON.stringify({ success: false, error: 'Error interno del servidor', details: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};
