import Amplify, { withSSRContext } from "aws-amplify";
import config from "../../aws-exports";
import { NextApiRequestCookies } from "next/dist/next-server/server/api-utils";
import { IncomingMessage } from "http";

// Amplify SSR configuration needs to be enabled within each API route
Amplify.configure({ ...config, ssr: true });

const isThereUser = async (
  req: IncomingMessage & { cookies: NextApiRequestCookies },
  res: any
): Promise<void> => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    res.json({ user: user.username });
    res.send({ user: user.username });
  } catch (err) {
    res.statusCode = 200;
    res.json({ user: null });
  }
};

export default isThereUser;
