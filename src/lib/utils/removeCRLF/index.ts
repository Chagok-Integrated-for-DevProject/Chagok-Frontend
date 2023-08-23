export const removeCRLF = (str: string) => {
  return str.replace(/\\n|\"/g, "\n");
};
