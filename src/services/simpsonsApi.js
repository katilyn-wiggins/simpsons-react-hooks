export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

  const results = await res.json();
  return results;
};
