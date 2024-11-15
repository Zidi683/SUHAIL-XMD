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
global.caption = process.env.CAPTION || global.caption || "© MalikTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "14143633925";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_51_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2NHlTYlZsOEc2eHJ5aWNRMmpjVVMyazlLeUx6MUJlNVN0VkVhdytUcjFNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGTWpuaGszRFNTeW9Tdm10bVNDUDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU0NmNlYjZhLTdkMDgtNGI1Ny04NTVhLWJjOWZjM2QyN2I5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxOTIsXG4gICAgICAxODcsXG4gICAgICA2MCxcbiAgICAgIDMsXG4gICAgICAzMSxcbiAgICAgIDIxNyxcbiAgICAgIDc4LFxuICAgICAgMjIzLFxuICAgICAgNjUsXG4gICAgICAxMTYsXG4gICAgICAxNyxcbiAgICAgIDcxLFxuICAgICAgMTE3LFxuICAgICAgMjE1LFxuICAgICAgMjAsXG4gICAgICA2NCxcbiAgICAgIDEwNixcbiAgICAgIDYsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxNjYsXG4gICAgICAxOTksXG4gICAgICAyMjAsXG4gICAgICAxNzMsXG4gICAgICAxMjAsXG4gICAgICA4NyxcbiAgICAgIDI0NCxcbiAgICAgIDExOSxcbiAgICAgIDEzNixcbiAgICAgIDQ4LFxuICAgICAgOTEsXG4gICAgICA4MyxcbiAgICAgIDEyNSxcbiAgICAgIDIxNSxcbiAgICAgIDU2LFxuICAgICAgNixcbiAgICAgIDExNixcbiAgICAgIDE1MCxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZUR0hOWE1KXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNDE0MzYzMzkyNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLdmR2ZLNouK4mSDwnZCL8J2QhPCdkIbwnZCE8J2QjfCdkIMg8JOGqS0t8J2QhvCdkIjwnZCR8J2Qiy0t2Jzwk4aq44CGzY7LkM2iwrsgICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICDwk4ap8J2Qi/CdkIDwnZCI8J2QgfCdkIAg8J2Ql+KAovCdn5Hwk4aqXCIsXG4gICAgXCJsaWRcIjogXCIyMTI1MTU2MTkzNTI2NzU6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdjUrZFVDRU0rYno3a0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlh2eW5ZbTV0bW1SQ3N6Q0t1WmlyU2JtbzVrQjNkbXk4ekRKdVpjV2w0MjA0UjMvcGp3aUdlZi80WTQ2VmRFRXA5K0JVRGhyZ0VaWXNHZjFpUUtzQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2ZCTlZzOEkvUDYxNHdWYzAwL3NHcGZydXd5T0E1bGNtM25yZFNzcHhLeHl4cVFwUnJSWTdNaVJ2U1ZYdVhvb241R0VBek5QT1dod290dFJ1TFlsQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTQxNDM2MzM5MjU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NDgyNzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
  LANG: ( process.env.THEME ||  "BOSS"  ).toUpperCase(),



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
