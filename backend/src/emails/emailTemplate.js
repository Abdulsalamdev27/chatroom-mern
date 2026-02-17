export function emailTemplate( name, clientUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Account Created</title>
  </head>

  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0"
                 style="background:#ffffff;margin-top:40px;border-radius:10px;overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a;color:white;padding:28px;text-align:center;">
                <h2 style="margin:0;">Welcome 🎉</h2>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px;">
                
                <h3>Hello ${name},</h3>

                <p style="font-size:15px;line-height:1.7;color:#334155;">
                  Your account has been successfully created. You can now log in and start using your dashboard.
                </p>

                <p style="font-size:15px;line-height:1.7;color:#334155;">
                  If you did not create this account, please contact support immediately.
                </p>

                <div style="margin:30px 0;">
                  <a href="${clientUrl}"
                     style="background:#0f172a;color:white;
                            padding:14px 20px;
                            text-decoration:none;
                            border-radius:6px;
                            font-size:14px;
                            display:inline-block;">
                    Login to Your Account
                  </a>
                </div>

                <p style="font-size:14px;color:#64748b;">
                  We're glad to have you with us.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9;padding:20px;text-align:center;font-size:12px;color:#94a3b8;">
                © ${new Date().getFullYear()} Your App. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
