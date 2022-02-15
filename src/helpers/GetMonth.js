export const GetDay = (date) => date.slice(8, 10);

export const GetMonth = (date) => {
  const mon = date.slice(6, 7);
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
    mon - 1
  ];
};

export const GetHour = (date) => date.slice(12, 16);
