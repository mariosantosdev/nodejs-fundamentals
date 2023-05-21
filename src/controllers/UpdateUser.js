export function UpdateUser(req, res, database) {
  const { id } = req.params;
  const { name, email } = req.body;

  database.update("users", id, { name, email });

  res.writeHead(204).end();
}
