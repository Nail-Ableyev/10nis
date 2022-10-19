import { google } from 'googleapis';
export async function getDataFromList() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: 'main', // sheet name
    });

    const rows = response.data.values;

    
    if (rows.length) {
      return rows.map((row) => ({
        name: row[4],
        wins: row[1],
        loses: row[2],
        nc: row[3],
        prevChamp:row[0]
      }));
    }
  
  } catch (err) {
    console.log(err);
  }
  return [];
}