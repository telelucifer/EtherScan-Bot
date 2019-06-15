/*CMD
  command: /refferal
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 🚹 Share
  aliases: 🚹 share
CMD*/

let reflink=Libs.ReferralLib.currentUser.getRefLink("etheriumscanbot");
Bot.sendMessage("Here is your Unique refferal Link :\n" + 
reflink);
Bot.sendMessage("Each Active Refferal will Bring you The Ability To add *1 more Wallet (Upto 5)*")
