export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "ParthR"
    );
  }

  else if (query.toLowerCase().includes("largest")) {
      const regex = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
      const queryMatch = query.match(regex);
      if (queryMatch) {
        const num1 = parseInt(queryMatch[1]);
        const num2 = parseInt(queryMatch[2]);
        const num3 = parseInt(queryMatch[3]);
        const result = Math.max(num1,num2,num3);
        return result.toString();
      }
  }

  return "";
}
