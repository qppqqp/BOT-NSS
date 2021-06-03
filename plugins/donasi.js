let handler = async m => m.reply(`
╭─〘 NSS 〙
│ • Con las gracias 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
