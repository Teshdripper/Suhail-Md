const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_13_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVjRjNTSnExRm15dTU4cldjV052bmNXSVI0VXpQUWFqZXhzSGNiTzQxYXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInV4OVlsdlk3UTMtNWVDb3VKT3IxY3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmRmOTRlMGUtOWY1YS00YWM4LTg1ZGItZTllMTg5MjRkOTMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTc5LFxuICAgICAgMTYsXG4gICAgICA5NixcbiAgICAgIDgyLFxuICAgICAgNTksXG4gICAgICAyMzksXG4gICAgICA4MixcbiAgICAgIDIwLFxuICAgICAgMTc2LFxuICAgICAgMjE5LFxuICAgICAgMTIxLFxuICAgICAgMTcwLFxuICAgICAgMTYsXG4gICAgICAxNzEsXG4gICAgICAyMTgsXG4gICAgICA3MSxcbiAgICAgIDI2LFxuICAgICAgMjM1LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA0MyxcbiAgICAgIDExOCxcbiAgICAgIDE2OSxcbiAgICAgIDksXG4gICAgICAzMyxcbiAgICAgIDE2OSxcbiAgICAgIDgsXG4gICAgICA4OCxcbiAgICAgIDYxLFxuICAgICAgMzcsXG4gICAgICA5MSxcbiAgICAgIDQwLFxuICAgICAgMTA3LFxuICAgICAgMjcsXG4gICAgICAyMDgsXG4gICAgICAxMjAsXG4gICAgICA3NyxcbiAgICAgIDE0OCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0g5UURGVzVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExNTI5OTk5MDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY4NzU2NDIyMDgzMDY6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHY5L0xRSEVPbjhqYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4YU51dXFzc0h6NlJWWWFJa0NtRWNEWHo2cnZLNjN3bWR6SHprdU4wR1JjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1UZG02VzZENnNpb2ZhR0FLK21HT1lsOTczamp5RjM4OGY5VUxVZVduQ0QxUFNWVmVxWkNFKzVFZzRuUmtPblVhdzVZVkFjazI3OXFwMDVYQWhKdEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlErbC9WelE1NTRua0dYdlkxTWlBL3hVb3NKSll3OTZsVmpuMXUyamlnNXlDMzQ4SUZXV1lEaHlxQVZqT3k0RVhGeFRTSXRhZ2U2TlQ3RnUyQm5yMmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNTI5OTk5MDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODkzNjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG1zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzMzI5WURMWUtoNDd4ZVRZcy9aSm9GRE1vS2IxZmcrSkJqVjB2bjNQVWJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTAxNDc3NzEsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzE5ODkzNjE0NDQ2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
