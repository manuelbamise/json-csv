import data from '../data.json' with { type: 'json' };
import saveToCSV from './fs';

export interface outputData {
  profile: {
    title?: string;
    real_name: string;
    display_name?: string;
    email: string;
    status_text: string;
  };
}

const getOutputData = (dd: any): outputData => {
  const { profile } = dd;

  return {
    profile: {
      title: profile.title,
      real_name: profile.real_name,
      display_name: profile.display_name,
      email: profile.email,
      status_text: profile.status_text,
    },
  };
};

if (data.length === 0) {
  console.log('No data to process');
  process.exit(0);
}

for (const item of data) {
  // console.log(getOutputData(item));
  saveToCSV(getOutputData(item), 'data.csv');
}
