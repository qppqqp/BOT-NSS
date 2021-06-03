let handler = async m => m.reply(`
☠️☠️☠️☠️                                       
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
