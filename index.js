// console.log('this is a pop-up');

let scrapedData = [];

const scrapeBtn = document.getElementById('scrapeBtn');

const downloadBtn = document.getElementById('downloadBtn');

scrapeBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!tab.id) return;

  const response = await chrome.tabs.sendMessage(tab.id, {
    type: 'SCRAPE_MEMBERS',
  });

  scrapedData = response.data;

  console.log(scrapedData);
  alert(`Found ${scrapedData.length} members`);
});

downloadBtn.addEventListener('click', async () => {
  const csv = convertToCSV(scrapedData);

  const blob = new Blob([csv], {
    type: 'text/csv',
  });

  const url = URL.createObjectURL(blob);

  chrome.downloads.download({
    url,
    filename: 'members.csv',
    saveAs: true,
  });
});

function convertToCSV(data) {
  const headers = ['name', 'email', 'status'];

  const rows = data.map((row) => [row.name, row.email, row.status]);

  return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
}
