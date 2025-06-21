// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5UVm9CYXFpMmRTUW5Oc29rTHdHOEF5RTRJZnJwWGt5d3M3MzQ2RmIyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzJoM0JEbExEY01OTjJvb3dzN05HM2VENjJvYkljV2RjYjRobkdqT0tuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ204dWVhRFNCeFpTWG9nN1lDN1EvNDIrend4bzhKMFVzM2dKcmliWVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMFJpNkxHWUkvSVVXR3pnU0dHc2l5R2dyWHIrWi9mN3hqTkVEUkxpdDNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLb1lrakcxYnRJL3k3dEdORUVVTGVJaHlpck5JQjJOR1VUUDBCeFVFa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVzUFJrMTNMNnkzdU44NUQ1TG5ZQzlWb2JvTXBkbytDK2xTOWZ0a2l4VG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0crM21nYVpNSTlFa3hLb0lmL1VHblVwQ0s5QUxMb2V4V2VDYnFYZkgxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDJiTEViejNZeEZ1ZnMzN0lObWR1dGtDVXN1bWVyZFgrdjZjZ3lzampYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljMy9PeXdBUzNOS0NuelYwV0lNOS9YUGdUNVMrYzRHcW9sd2JPNGd0UndFY0k2V09WeEFiSXNPelpPYlBsaENhbmFIck9ETk9ZY1FHVWpPZU14MWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJIL01xcUhVZDFERlNRM3g0RHFGUnV2emRab05MZE9DbmxmUndxQ0xLeUxzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrR3R6Zk9id1E4S1pZdm5wTWhkSEJ3IiwicGhvbmVJZCI6IjJhNjIzMjMzLTE2NDUtNDA1Ni1iMTk4LWQyYWI3OGUxZWE4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4THhLZHc5SnFqOUFhR3I5YTFtWEJQQ0RFSE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnBkOWREUmhvdUZJVXBmTU9rSU5mZGxtSnRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNBUktBUk1EIiwibWUiOnsiaWQiOiIyNjA3NjkyNTQ2MTU6MTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTU4Mzc4NDE5MTYwNDc6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON3k4NW9HRUwrajJjSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWaHRpRXFCalNpL2w3VlVhdVlua09FY3Z6T0s4UnRHRXd2VWcwUjM0aW1JPSIsImFjY291bnRTaWduYXR1cmUiOiI0WVgyNTBRZUZoTVZDMkN5cHU2L1ViU3h4UisyeFc2dk10c2FmY3ZzR2Z4d0xGVUsrcGhhS05kYzd0bXJKM3RTV3dTYUIrcUVZZmhKRVRRNXZoQzRpZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2swZkhFeGlTWkExTjVBazZPUXp6TU1lZ0hlRDZZekFRdWtOYld6b1ZZTmQxTWlrTVJrUnBIRG9jdCtXdzZLZndpRmpwY1VmVUpoMEdQS2N4Nm1SZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjA3NjkyNTQ2MTU6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlliWWhLZ1kwb3Y1ZTFWR3JtSjVEaEhMOHppdkViUmhNTDFJTkVkK0lwaSJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA0ODc0OTAsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFBJIn0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "260769254615",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
