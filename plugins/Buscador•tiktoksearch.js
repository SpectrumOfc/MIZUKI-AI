import axios from 'axios'
const {proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessageContent, getDevice} = (await import("@whiskeysockets/baileys")).default

let handler = async (message, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(message.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */tiktoksearch* 𝐄𝐝𝐢𝐭𝐬 𝐚𝐧𝐢𝐦𝐞 𝐝𝐞 𝐌𝐢𝐳𝐮𝐤𝐢.', message, rcanal)
async function createVideoMessage(url) {
const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer })
return videoMessage
}
async function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]]
}
}
try {
await message.react(rwait)
conn.reply(message.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐨...', message, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
let results = []
let { data: response } = await axios.get('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=' + text)
let searchResults = response.data
shuffleArray(searchResults)
let selectedResults = searchResults.splice(0, 7)
for (let result of selectedResults) {
results.push({
body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: dev }),
header: proto.Message.InteractiveMessage.Header.fromObject({
title: '' + result.title,
hasMediaAttachment: true,
videoMessage: await createVideoMessage(result.nowm)
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })})}
const responseMessage = generateWAMessageFromContent(message.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({ text: '📝 𝐒𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤𝐬 𝐬𝐨𝐛𝐫𝐞: ' + text }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: '★¸.•☆•.¸★ 𝐓𝐈𝐊𝐓𝐎𝐊 | 𝐒𝐄𝐀𝐑𝐂𝐇 ★⡀.•☆•.★' }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...results] })})}}
}, { quoted: message })
await message.react(done)
await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id })
} catch (error) {
await conn.reply(message.chat, error.toString(), message)
}}

handler.help = ['tiktoksearch <txt>']
handler.chocolates = 1
handler.register = true
handler.tags = ['buscador']
handler.command = ['tiktoksearch', 'tiktoks']
export default handler
