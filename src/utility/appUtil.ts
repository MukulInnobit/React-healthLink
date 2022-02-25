export const getHeight = (classname : string) => {
    const node = document.querySelector<any>(classname);
    if( node !== null|| node !== undefined)
    {
      const screenHeight = document.body?.clientHeight;
      const remainingHeight = screenHeight-node?.getBoundingClientRect().y;
      return remainingHeight
    }
    return 0;
  }

export const replaceAll = (
  searchRegExp: RegExp,
  baseText: string,
  replacement: string
): string => {
  const result = baseText.replace(searchRegExp, replacement);
  return result;
};
