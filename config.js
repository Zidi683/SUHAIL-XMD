const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_54_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDZjBZZ2RnRjRzRmhnYTFPYnRFWDZZNkk5VEJFc3hPeUxsR3ByYUplUnNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyM1VBazdsQ1NvMnE0TzZ2SmxWOWpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhZTMyNjk5LTVlMTAtNGM5Ny1iMTU5LTY4MGQ0YWRiZWQ1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDIwLFxuICAgICAgMTI0LFxuICAgICAgMTQxLFxuICAgICAgMTE3LFxuICAgICAgMTAsXG4gICAgICAxNzYsXG4gICAgICAxMzcsXG4gICAgICA2OSxcbiAgICAgIDcsXG4gICAgICAzOSxcbiAgICAgIDg0LFxuICAgICAgMTE0LFxuICAgICAgMjAwLFxuICAgICAgMjA1LFxuICAgICAgMTksXG4gICAgICAyMTMsXG4gICAgICAxMTAsXG4gICAgICAxNjMsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAyNDksXG4gICAgICAxOSxcbiAgICAgIDEzMixcbiAgICAgIDk0LFxuICAgICAgMTc3LFxuICAgICAgNTcsXG4gICAgICAxMDUsXG4gICAgICAyMzEsXG4gICAgICA4NCxcbiAgICAgIDEyOCxcbiAgICAgIDE1NSxcbiAgICAgIDcwLFxuICAgICAgMjUwLFxuICAgICAgOCxcbiAgICAgIDE3MixcbiAgICAgIDUxLFxuICAgICAgODgsXG4gICAgICAxMzYsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVBEOUI1TVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVVNDRBR0VPTDd2cmtHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIL093NU1MUy9XTzdueVcwMEs1L0xkOVVMR1VTSTZwQWJxd09kWmlsL1c4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFmOXd3Tnp1MjloQjljTTBUdDR3VzZKcS9RNEY2RCtpR1BmK3VuSGRrUURHVDFzMUJhZkVsMG5CdFFaWHlIa1VTbEI2bTR6YlVVMUhpejdBcytyQkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFoYzNPK0EwVEVTclZubFF2OGhSUm9CWFBqVlIrL3lGaEFiWkxTZnhRd2hKaHJwNE5vTDBZemsyZ2Y5MWYwZVdDclE3THZUd1VEaC90dVhUL0I5aUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTgyMDUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXpzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJenMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMemcxcW5JNmtaemtWbVhDWWF5elp4NFBDOHU0S2lqOFZyODkzTFBrOGVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTIyMzczMzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxMTIzNzIzMTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZiDi-XMD",
  ownername:process.env.OWNER_NAME|| "ZiDi-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
