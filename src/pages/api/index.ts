import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    return handleGET(res);
  } else if (req.method === "POST") {
    return handlePOST(req, res);
  } else {
    return res.status(500).json({
      error: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
};

async function handleGET(res: NextApiResponse) {
  return res.status(200).json("Hello!");
}

// - [ ] fetch definition IF MISSING after create, then update
// - [x] handle collision
async function handlePOST(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(201).json("You POSTed!");
}
