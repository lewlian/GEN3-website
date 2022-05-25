const envConfig = {
  SPREADSHEET_ID: process.env.NEXT_PUBLIC_SPREADSHEET_ID || '',
  SHEET_ID: process.env.NEXT_PUBLIC_SHEET_ID || '',
  CLIENT_EMAIL: process.env.NEXT_PUBLIC_CLIENT_EMAIL || '',
  GOOGLE_SHEET_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_SHEET_PRIVATE_KEY
    ? process.env.NEXT_PUBLIC_GOOGLE_SHEET_PRIVATE_KEY.replace(/\\n/g, '\n')
    : '',
  EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
  EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
  EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || '',
};

export default envConfig;
