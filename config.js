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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_28_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidld6QU1DSUNxNUlMbUg3eGdxdHRkM0g5Ni9TdUhqcHhJU1c1ZVRubGNxYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTm5qWlN5SWlSMnVGejY0eXY3X3l0UVwiLFxuICBcInBob25lSWRcIjogXCJmZWNlNzU2YS0yZjFiLTRkMTItOTZjNS0yNTA5YWQyOTAyMDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgNzAsXG4gICAgICAyMSxcbiAgICAgIDM2LFxuICAgICAgOTcsXG4gICAgICA0LFxuICAgICAgNDEsXG4gICAgICAyNDcsXG4gICAgICA0MCxcbiAgICAgIDE3OCxcbiAgICAgIDIwMixcbiAgICAgIDk2LFxuICAgICAgNDQsXG4gICAgICAyNixcbiAgICAgIDE4MCxcbiAgICAgIDc2LFxuICAgICAgODQsXG4gICAgICA5NyxcbiAgICAgIDM4LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICA3NSxcbiAgICAgIDExMixcbiAgICAgIDgzLFxuICAgICAgMTM1LFxuICAgICAgMTEzLFxuICAgICAgMTIwLFxuICAgICAgODcsXG4gICAgICAxLFxuICAgICAgMTU2LFxuICAgICAgMTE0LFxuICAgICAgMjYsXG4gICAgICAxOTYsXG4gICAgICAxOTMsXG4gICAgICA1MyxcbiAgICAgIDIxOSxcbiAgICAgIDMwLFxuICAgICAgMTYxLFxuICAgICAgMjE3LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNENVoxMlNZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p5VTQ0QUdFS2ZoeUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSC9PdzVNTFMvV083bnlXMDBLNS9MZDlVTEdVU0k2cEFicXdPZFppbC9XOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIraDF1STZQeWwvekRSQWRNR3hRMW4vamRKdGxrOC9Ua21IYTd2ZUh0OExTSFdwaXZSOUc2bXB0Z3NRRGp0RGpqazJpU1piNW13bkFEdm1FTUZFck1DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWRGduWFBNbm1qVm1tV2FKOWtoKzE5dDdVaWc5U29xNXVTbnVZOXVUaENrb3VlNkYzdG11d1MzVWg1dk5pMEZiYTlTekdjWkVsNTFrTWQzcnBJVWNEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTM0MjUwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl6c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXpzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTHpnMXFuSTZrWnprVm1YQ1lheXpaeDRQQzh1NEtpajhWcjg5M0xQazhlaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjEyMjM3MzM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMTEyMzcyMzE2XCJ9Igp9"  // PUT your SESSION_ID 


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
