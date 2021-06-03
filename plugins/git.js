let handler = async m => m.reply(`
 *MY GIT*
https://github.com/Balta-Python
😴                                       
`.trim()) 
handler.help = ['git']
handler.tags = ['info']
handler.command = /^git$/i

module.exports = handler

