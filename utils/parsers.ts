export const parseLinkText = (text: string) => {
  const linkRegex = /{link=(.*?)}(.*?){\/link}/g;
  const matches = text.matchAll(linkRegex);
  let parsedText = text;
  Array.from(matches).forEach((match) => {
    const [fullMatch, link, text] = match;
    parsedText = parsedText.replace(
      fullMatch,
      `<a href="${link}" target="_blank" rel="noopener noreferrer">${text}</a>`,
    );
  });

  return parsedText;
};
