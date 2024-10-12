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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_46_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIMXJMek5SNUlucDB1L0M4eCtWVGtWWjJoT2d6dzBSTUhIMTIycEcra0prPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFcFlnWnIyeVN3dVZYS2toWlBmcDJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlNDlhOWQzLWI5YjQtNDFmYS05OTI5LWFlZjdkYjQyMDEyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAxMzMsXG4gICAgICAxMixcbiAgICAgIDQxLFxuICAgICAgNDIsXG4gICAgICAxNyxcbiAgICAgIDE0NixcbiAgICAgIDE0OSxcbiAgICAgIDE3MSxcbiAgICAgIDg1LFxuICAgICAgMTIyLFxuICAgICAgMTA0LFxuICAgICAgMTk1LFxuICAgICAgMjIsXG4gICAgICAxMzAsXG4gICAgICAyNDIsXG4gICAgICA4MCxcbiAgICAgIDIwMixcbiAgICAgIDMxLFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMjI3LFxuICAgICAgMTQ3LFxuICAgICAgNjksXG4gICAgICAyMzUsXG4gICAgICAxNDMsXG4gICAgICAyMTMsXG4gICAgICAyMjAsXG4gICAgICA4NyxcbiAgICAgIDI0NSxcbiAgICAgIDI1MyxcbiAgICAgIDI0LFxuICAgICAgMjM3LFxuICAgICAgNTQsXG4gICAgICA2OSxcbiAgICAgIDcsXG4gICAgICAxNTksXG4gICAgICAyNDMsXG4gICAgICA4NixcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQVpRMTQ5OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qlcXG7igblcXG7CslxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG5cXG5cXG7wnZGt8J2QtPCdkYAw8J2RiPCdkYYgXFxu8J2SgfCdkZbwnZC38J2RliDwnZG08J2RjvCdkZnwnZGW8J2QvlxcblxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyNStkVUNFTHlhcUxnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4UjlweTVLM0F2VFlOZGJIUFZBMWMzUHZnTHdNUkprd21QRUcvdzBBWnEwU1hBc3N6Tnc3UzZ1d3NBV2I3YnFtZ29Hb3cyeXlnRnAvNTBVUUhEOS9BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1NE9NdUJUT0V4bHQyeUFKanM1S1E2ZTFDRlVscnlQYUM4NHllbXlyeXlkd0tnNDZxVkszem1YQUthMXpCdzNNbzlqeEIyeUNwN3NDL1dKdlZ2cHVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg3MTIwMDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
