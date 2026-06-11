import data from '../data.json' with { type: 'json' };

interface outputData {
  profile: {
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
      real_name: profile.real_name,
      display_name: profile.display_name,
      email: profile.email,
      status_text: profile.status_text,
    },
  };
};

for (const item of data) {
  console.log(getOutputData(item));
}
