export function DeleteUser(req, res, database) {
  const { id } = req.params;

  database.delete("users", id);

  res.writeHead(204).end();
}
