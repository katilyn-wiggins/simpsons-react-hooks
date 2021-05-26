export const getQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

  const results = await res.json();
  return {
    text: results[0].quote,
    name: results[0].character,
    image: results[0].image,
  };
};
