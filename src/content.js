function extractMembers() {
  const members = [];

  // Replace these selectors with the actual selectors
  // you discovered in Slack's DOM
  const memberCards = document.querySelectorAll('[data-member-card]');

  memberCards.forEach((card) => {
    const name = card.querySelector('[data-name]')?.textContent?.trim() ?? '';

    const email = card.querySelector('[data-email]')?.textContent?.trim() ?? '';

    const status_message =
      card.querySelector('[data-status]')?.textContent?.trim() ?? '';

    members.push({
      name,
      email,
      status_message,
    });
  });

  return members;
}

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === 'SCRAPE_MEMBERS') {
    const members = extractMembers();

    sendResponse({
      success: true,
      data: members,
    });
  }

  return true;
});
