import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { saveShortUrl } from "../dao/short_url.js";


export const shortUrlWithoutUser =async (url)=>{
     const shortUrl =await generateNanoid(7);
     await saveShortUrl(shortUrl, url);
  return shortUrl;
}
export const shortUrlWithUser =async (url,userId)=>{
     const shortUrl =await generateNanoid(7);
     await saveShortUrl( shortUrl, url, userId);
  return shortUrl;
}