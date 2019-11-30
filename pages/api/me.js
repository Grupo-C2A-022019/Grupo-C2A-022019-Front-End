import auth0 from "lib/auth0";

export default async function me(req, res) {
  try {
    const { user, ...rest } = await auth0.getSession(req);
    res.json({ ...user, ...rest });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
