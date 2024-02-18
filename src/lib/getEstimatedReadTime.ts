export function getEstimatedReadTime(text: string) {
  const wordsPerMinute = 200; //average reading speed
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return minutes;
}
