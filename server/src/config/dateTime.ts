const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };

// Format: mmm dd, yyyy, HH;mm (ie: Jan 01, 2023, 15:00)
export const currentDate = new Date().toLocaleString('en-US', options as Intl.DateTimeFormatOptions);

