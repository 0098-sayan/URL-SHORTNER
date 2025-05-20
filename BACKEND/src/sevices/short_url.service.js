import { generateNanoid } from "../utils/helper";

export const shortUrlService = (url)=>{
     const shortUrl = generateNanoid(7);
  const newUrl = new urlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  newUrl.save();
  return shortUrl;
}