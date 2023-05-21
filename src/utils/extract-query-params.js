export function extractQueryParams(query) {
  if (!query) return {};

  return query
    .substring(1)
    .split("&")
    .reduce((acc, curr) => {
      const [key, value] = curr.split("=");
      return {
        ...acc,
        [key]: value,
      };
    }, {});
}
