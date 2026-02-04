import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "SAYAN-XMD",
        body: "𓆩 𝐌ꝛ 𝐆𝐎𝐉𝐎 𓆪",
        thumbnail: fs.readFileSync("./database/sayan.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
