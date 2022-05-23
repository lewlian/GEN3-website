import { GoogleSpreadsheet } from 'google-spreadsheet';
import envConfig from './envConfig';

// Config variables
const SPREADSHEET_ID = envConfig.SPREADSHEET_ID;
const SHEET_ID = envConfig.SHEET_ID;
const CLIENT_EMAIL = envConfig.CLIENT_EMAIL;
const PRIVATE_KEY = envConfig.GOOGLE_SHEET_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

interface IRow {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

export const appendSpreadsheet = async (row: any) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

// const newRow = { Name: 'new name', Value: 'new value' };

// appendSpreadsheet(newRow);
