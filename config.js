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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994409693510";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_47_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK09hNWpxdDJXYnRvcTFyV001VFY4TEVHb01BbjlERURmZFNFcmdDUXBIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3hXSG5FWkxRV0t6cUxfYzV4eVJId1wiLFxuICBcInBob25lSWRcIjogXCI1MGQ0YjY3Mi00NDk0LTQ0MmYtYjRiNS1jNmE2Y2NiYWI4M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICA0MyxcbiAgICAgIDcwLFxuICAgICAgMjI2LFxuICAgICAgMjEwLFxuICAgICAgMjM3LFxuICAgICAgNjMsXG4gICAgICA3NCxcbiAgICAgIDEwMCxcbiAgICAgIDc4LFxuICAgICAgMjMsXG4gICAgICAyMTAsXG4gICAgICAyMixcbiAgICAgIDE3NSxcbiAgICAgIDE3OCxcbiAgICAgIDkyLFxuICAgICAgNDksXG4gICAgICAyNixcbiAgICAgIDI1NCxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyNTMsXG4gICAgICAxNDMsXG4gICAgICAxNDQsXG4gICAgICAxMzcsXG4gICAgICA0MSxcbiAgICAgIDcyLFxuICAgICAgMjA4LFxuICAgICAgMTMsXG4gICAgICAxNTksXG4gICAgICA0NSxcbiAgICAgIDE1MyxcbiAgICAgIDIyMixcbiAgICAgIDIwNCxcbiAgICAgIDE4NyxcbiAgICAgIDQ5LFxuICAgICAgMTI2LFxuICAgICAgMTA2LFxuICAgICAgNDYsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUkRBTUNLM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDA5NjkzNTEwOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qlcXG7igblcXG7igblcXG7igbRcXG7igbRcXG7igbBcXG7igblcXG7igbZcXG7igblcXG7Cs1xcbuKBtVxcbsK5XFxu4oGwXFxuXFxuXFxuXFxuXFxuXFxu8J2RrfCdkLTwnZGAMPCdkYjwnZGGIFxcbvCdkoHwnZGW8J2Qt/CdkZYg8J2RtPCdkY7wnZGZ8J2RlvCdkL5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiNjYwMjAwMjMxMzMwNTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuNStkVUNFUERtL2JjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRUXlmM0Vjc3Z2c2t0UGhDdWI1MWZ0b09wdWlLQWhkZnYxdUg3eDFCTGdUMjNnRTNMaFB5TjhhTzJ5d084NTBpTnNZRHBiMVNtanBhZDMwOVY0aGpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2c0pMQ2R6VStkOEFUZTZaN29YQk91c1h1TzhWNHVjNWNnSm1ra09WWGNNNjd0b3FmN0xkUFFmS1k0d29lenZvamxQZG9FZWlTNExkdE5ZeHhHUzVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDk2OTM1MTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwMTcyNjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
