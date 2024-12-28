/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐞𝐧 𝐞𝐥 𝐧ú𝐦𝐞𝐫𝐨 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 𝐝𝐞𝐥 𝐁𝐨𝐭.', m, rcanal, )
}

let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
let sessionPath = `./${sessions}/`

try {

let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (let file of files) {
for (let id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
break
}}}

if (filesDeleted === 0) {
await conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫ó 𝐧𝐢𝐧𝐠ú𝐧 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐪𝐮𝐞 𝐢𝐧𝐜𝐥𝐮𝐲𝐚 𝐥𝐚 𝐈𝐃 𝐝𝐞𝐥 𝐜𝐡𝐚𝐭.', m, rcanal, )
} else {
await conn.reply(m.chat, `[✅] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚.\n𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐨𝐧 ${filesDeleted} 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧.`, m, rcanal, )
conn.reply(m.chat, `[🪄] ¡𝐇𝐨𝐥𝐚! ¿𝐄𝐬𝐭á𝐬 𝐚𝐡í? ¿𝐌𝐞 𝐩𝐮𝐞𝐝𝐞𝐬 𝐯𝐞𝐫 𝐚𝐡𝐨𝐫𝐚?`, m, rcanal, )
}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err)
await conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐎𝐜𝐮𝐫𝐫𝐢ó 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫.', m, rcanal, )
}

}
handler.help = ['ds', 'fixmsgespera']
handler.tags = ['info']
handler.command = ['fixmsgespera', 'ds']

handler.register = true

export default handler
