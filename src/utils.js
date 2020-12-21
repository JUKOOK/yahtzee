export const isNull = (v) => {
  return typeof v === "object" && v === null;
};

export const sumObjValues = (obj) => {
  return Object.values(obj).reduce((a, b) => a + b, 0);
};
