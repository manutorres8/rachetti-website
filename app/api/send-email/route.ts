import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, subject, message } = await request.json();

    // Validar que los campos requeridos existan
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@rachettiyasoc.com',
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
