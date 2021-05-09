export const GetDay = (date) => date.slice(0, 2);

export const GetMonth = (date) => {
  const mon = date.slice(3, 5);
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
    mon - 1
  ];
};
