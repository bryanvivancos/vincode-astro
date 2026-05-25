import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { name, company, service, phone, email, message } = body;

        // console.log('📧 Datos recibidos:', { name, company, service, phone, email, message });

        // Validar campos requeridos
        if (!name || !company || !service || !phone || !email || !message) {
            console.error('❌ Validación fallida - campos faltantes');
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Todos los campos son requeridos'
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Verificar que RESEND_API_KEY esté configurada
        if (!import.meta.env.RESEND_API_KEY) {
            console.error('❌ RESEND_API_KEY no está configurada');
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Configuración de email no disponible'
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('📤 Enviando email con Resend...');

        // Enviar email usando Resend
        const { data, error } = await resend.emails.send({
            from: 'Soporte Vincode <soporte@notificaciones.vincode.dev>',
            to: ['vincodedev@gmail.com'],
            subject: `Nueva Solicitud de Soporte - ${service}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #00a8e8 0%, #0077b6 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 8px 8px 0 0;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            background: #f9fafb;
                            padding: 30px;
                            border: 1px solid #e5e7eb;
                            border-top: none;
                        }
                        .field {
                            margin-bottom: 20px;
                            background: white;
                            padding: 15px;
                            border-radius: 6px;
                            border-left: 4px solid #00a8e8;
                        }
                        .field-label {
                            font-weight: 600;
                            color: #374151;
                            font-size: 12px;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            margin-bottom: 5px;
                        }
                        .field-value {
                            color: #1f2937;
                            font-size: 15px;
                        }
                        .message-box {
                            background: white;
                            padding: 20px;
                            border-radius: 6px;
                            border: 1px solid #e5e7eb;
                            margin-top: 10px;
                        }
                        .footer {
                            background: #1f2937;
                            color: #9ca3af;
                            padding: 20px;
                            border-radius: 0 0 8px 8px;
                            text-align: center;
                            font-size: 12px;
                        }
                        .service-badge {
                            display: inline-block;
                            background: #dbeafe;
                            color: #1e40af;
                            padding: 6px 12px;
                            border-radius: 20px;
                            font-size: 13px;
                            font-weight: 600;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🎫 Nueva Solicitud de Soporte</h1>
                    </div>
                    
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Servicio</div>
                            <div class="field-value">
                                <span class="service-badge">${service}</span>
                            </div>
                        </div>

                        <div class="field">
                            <div class="field-label">Nombre del Cliente</div>
                            <div class="field-value">${name}</div>
                        </div>

                        <div class="field">
                            <div class="field-label">Empresa</div>
                            <div class="field-value">${company}</div>
                        </div>

                        <div class="field">
                            <div class="field-label">Teléfono</div>
                            <div class="field-value">
                                <a href="tel:${phone}" style="color: #00a8e8; text-decoration: none;">${phone}</a>
                            </div>
                        </div>

                        <div class="field">
                            <div class="field-label">Correo Electrónico</div>
                            <div class="field-value">
                                <a href="mailto:${email}" style="color: #00a8e8; text-decoration: none;">${email}</a>
                            </div>
                        </div>

                        <div class="field">
                            <div class="field-label">Mensaje</div>
                            <div class="message-box">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>

                    <div class="footer">
                        <p>Este mensaje fue enviado desde el formulario de soporte de Vincode</p>
                        <p>© ${new Date().getFullYear()} Vincode - Todos los derechos reservados</p>
                    </div>
                </body>
                </html>
            `,
            text: `
Nueva Solicitud de Soporte - ${service}

Nombre: ${name}
Empresa: ${company}
Servicio: ${service}
Teléfono: ${phone}
Email: ${email}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de soporte de Vincode
            `.trim()
        });

        if (error) {
            console.error('❌ Error enviando email con Resend:', error);
            return new Response(
                JSON.stringify({
                    success: false,
                    error: 'Error al enviar el email',
                    details: error.message || 'Error desconocido'
                }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log('✅ Email enviado exitosamente:', data);

        return new Response(
            JSON.stringify({
                success: true,
                data
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('❌ Error en API de soporte:', error);
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Error interno del servidor',
                details: errorMessage
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
