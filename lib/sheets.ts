import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL!;
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY!;
  if (privateKey.includes("\\n")) privateKey = privateKey.replace(/\\n/g, "\n");

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
}

export async function appendSubscriberRow({
  email,
  locale,
  source = "acumen-site",
}: {
  email: string;
  locale?: string;
  source?: string;
}) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
  const tabName = process.env.GOOGLE_SHEETS_TAB_NAME || "Subscribers";

  const nowISO = new Date().toISOString();
  const values = [[email, locale ?? "", nowISO, source]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tabName}!A:D`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function getSubscriberRows() {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
  const tabName = process.env.GOOGLE_SHEETS_TAB_NAME || "Subscribers";

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${tabName}!A:D`, 
  });

  const values = response.data.values;
  if (!values) {
    return [];
  }

  return values.slice(1).filter(row => row && row.length > 0 && row[0]);
}
