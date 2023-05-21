export function GetUsers(req, res, database) {
  const { search } = req.query;
  const users = database.select(
    "users",
    search
      ? {
          name: search,
          email: search,
        }
      : null
  );

  return (
    res
      // Set response header as JSON
      .setHeader("Content-Type", "application/json")
      // Return users array as JSON
      .end(JSON.stringify(users))
  );
}
