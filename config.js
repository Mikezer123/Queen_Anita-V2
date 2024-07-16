//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://i.imgur.com/LvbHb72.mp4,https://i.imgur.com/y0XIqub.mp4,https://i.imgur.com/z2XkURM.mp4,https://i.imgur.com/cFsSH20.mp4,https://i.imgur.com/jwCduSs.mp4,https://i.imgur.com/pPwdGDb.mp4,https://i.imgur.com/TAaMPsO.mp4,https://i.imgur.com/DYqZl6P.mp4,https://i.imgur.com/0h5jbSZ.mp4,https://i.imgur.com/Sbn7IdY.mp4,https://i.imgur.com/N0bZnup.mp4,https://i.imgur.com/JbvgjVU.mp4,https://i.imgur.com/Ylip8BJ.mp4,https://i.imgur.com/sCyBQ7H.mp4,https://i.imgur.com/cusf1W7.mp4,https://i.imgur.com/u2A1Cni.mp4,https://i.imgur.com/5Gyxeg5.mp4,https://i.imgur.com/rsDjpgJ.mp4,https://i.imgur.com/Z20sAvD.mp4,https://i.imgur.com/bFNPcPd.mp4,https://i.imgur.com/ycA0NlV.mp4,https://i.imgur.com/OnZNbr9.mp4";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "syamefx123@gamil.com";
global.location = "kerala, India";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "https://tgdxsgeslaptpftupmnq.supabase.co";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/columbia";
global.github = process.env.GITHUB || "http://github.com/143syam";
global.gurl = process.env.GURL || "http://wa.me/+13025449902";
global.website = process.env.GURL || "https://whatsapp.com/+13025449902";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f89a97a65465401faf323.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "919947121619";
global.owner = process.env.OWNER_NUMBER || "13025449902";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/A2OSGDu.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEEvVTNRS0FLcGU0MUI4alJPTmt2SERwMVRTa2w0Rit4NDZaUEpCSnozYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFlYUzQyMndUUUpGbDhESytYdkNaWC9mZ25WWHE1NEUwc3J3TnVlVzFHaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ0hWMTAyZTV6aHZuYlZLSkRvemZiRVNmNVlrbTFYaWlCOTF1RnlPLzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5eFpZSlVkWnovMlllWk8yNTlUYURRcE81YlRFem5PUnlOU1JmNWdiWTFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMa0VOSmFCeG9vVnZrUFZWNkZpYm51d1dwRjJ4Nzl4SlB2bS9wWTV4MUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJejJmcElXSWtJcUh3bmdlTXorcEprV0hya1J0N0JIMzM2OXh4aVhHUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUl4ZDlUVXZhWGowbllldmVYUW11Z0h4V1lRdHIyNU95cXZKSGk0SlpHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjdKN2FjUGIwbjkvSkFxSnpScitwbDlkeTNuSFkrai9yZjRLK3RSS2RCQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4N1JDU1gxaHdQdEkyY2lwNVhxOGtKNTQ2U2UxWHNxaGFZMVlKTGJRU3ovK0dWZ0xGMzBBRXBMSU8zQjQwbENZTXpkWDZRcmtLK3dWQmlVSGVXQkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJWMTJ5dm41Qm1QMzBwRHpMb0JIZDNKRFNuNmg4WGE4SHJxNW9GQXNlb0ZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNemVISHBSRlJENkdGWjhkcU90NU5BIiwicGhvbmVJZCI6ImVmMTdiMTI1LTQ3YzgtNDk4Mi04N2I5LWVkMDQ3OGUxNjk2MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmdkhNR3VlMDJoZnhqeEIyczRSWmJnYXZsU0U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3c0pvT2VXNm1RVjNZZTBWTkZiNG82NDRaZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ016QW5UVVFvWURadEFZWURTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRJUnhCaTZPU21tVEgxcTF4b0VQMjRkRlVZeHQ0R3VlNGtSaEdNZG5vQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVhK0t4QmRWa3UzZmJidnhlbktZeEltOEpoaFFNNHJ6Sk9aT3lha0xlUEg4WnlhTG1XWVA2emFhZko5UEczQmJVbTJ1TGlMekVmMWZiS3Z1OHg1d0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWV3JJUEFtUUQ2Yy9iMityQUNRUkp4amRpVk1mSlhjK3F5N1RMNFYyMzhmS2Y5SjI4ZmhnWVovVmVSZW1TcklJVU51Tll4b1hKTkRadFFtZjBJU0tEUT09In0sIm1lIjp7ImlkIjoiMTMwMjU0NDk5MDI6OTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RuvCdkoDwnZGo8J2RtF/wnZG68J2RrPCdkbkiLCJsaWQiOiI1NjQwMTg3OTY1MDUwMzo5NUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMwMjU0NDk5MDI6OTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXlFY1FZdWprcHBreDlhdGNhQkQ5dUhSVkdNYmVCcm51SkVZUmpIWjZBcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTIyODYyLCJsYXN0UHJvcEhhc2giOiIxN05VWEoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*`",
  author: process.env.PACK_AUTHER || "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓",
  packname: process.env.PACK_NAME || "Ą̷͈̰̘͓̖͍͙̫̬̗͔̺͓͇̐̈́M̴͎̝̝͔̺͉̺̮͎̜̐͂͘͝꙰̵̺͖͓͈̗̥̊̉̐̊̍͋̀̃͋̎͜͠M̸̳̪͎̤̫̘̋̇̂̍̈́͊͋̚꙰̸͙̭̼̤̦͍͈̻͖͒̑̑̂̔̎͗̑͘Ư̵̢̨̭̗̻̦̯͉̱̼͔͉̽̏́͒͆̓͗̅̎̃̈́̚͘͝꙰̶̫̪͖͔͍̻̟͓̣̗͓̰̹͒̑͜ͅ",
  botname: process.env.BOT_NAME || "🤍⃞𝄟ꪶ𝐒͢ʏ᪳ᴀ͓ᴍ͎ ͢𝐒ᴇ͓ꪳʀ͎𖦻⃞🍓",
  ownername: process.env.OWNER_NAME || "*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*",
  errorChat: process.env.ERROR_CHAT || "true",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "50",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
