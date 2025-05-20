import { generateNanoid } from "../utils/helper";

export const createShortUrl = async (req, res) => {
  const { url } = req.body;

 const shortUrl = await shortUrlService(url);
 res.send(shortUrl);
};