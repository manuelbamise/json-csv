import fs from 'fs';
import path from 'path';
import type { outputData } from '.';

async function saveToCSV(data: outputData, filename: string) {
  const filePath = path.join(process.cwd(), filename);

  const row = {
    title: data.profile.title ?? '',
    real_name: data.profile.real_name,
    display_name: data.profile.display_name ?? '',
    email: data.profile.email,
    status_text: data.profile.status_text ?? '',
  };

  const headers = Object.keys(row);
  const values = Object.values(row);

  const fileExists = fs.existsSync(filePath);

  //headers.join(',') + '\n' + values.join(',')

  if (!fileExists) {
    const csvContent =
      `${headers.join(',')}\n` +
      `${values.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')}\n`;

    fs.writeFileSync(filePath, csvContent, { encoding: 'utf-8' });
    console.log(`File created: ${filePath}`);
    return;
  }

  const csvRow =
    values.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',') + '\n';

  fs.appendFileSync(filePath, csvRow, { encoding: 'utf-8' });
  console.log(`Row appended to: ${filePath}`);
}

export default saveToCSV;
