module.exports = {
name: "semanal",
$if: "old",
code: `
$reply[$messageID;false]
$if[$getGuildVar[sistemarpg]==0]
❌ | Esse comando faz parte do Sistema de Rpg, peça para algum Administror ou Superior ativar esse sistema usando \`s.setrpg on\`!
$globalCooldown[7d;{reply:$messageID:false}❌ | Você já resgatou a seu Rpg Semanal, volte novamente <t:$truncate[$math[$math[$dateStamp+$getCooldownTime[7d;globalUser;semanal;$authorID]]/1000]]:R> para resgatá-lo!]
$description[ Você recebeu **$numberSeparator[$random[5500;10500]]** Coins em seu Semanal,e recebeu também alguns itens!

• **$numberSeparator[$random[40;100]]** Madeiras.
• **$numberSeparator[$random[35;50]]** Pedras
• **$numberSeparator[$random[21;67]]** Carvões
• **$numberSeparator[$random[25;30]]** Ouros
• **$numberSeparator[$random[30;60]]**  Ferros
• **$numberSeparator[$random[5;8]]** Diamantes.]
$setGlobalUserVar[cc;$sum[$getGlobalUserVar[cc;$authorID];$random[5500;10500]];$authorID]
$setGlobalUserVar[madeira;$sum[$getGlobalUserVar[madeira;$authorID];$random[40;100]];$authorID]
$setGlobalUserVar[carvão;$sum[$getGlobalUserVar[carvão;$authorID];$random[21;67]];$authorID]
$setGlobalUserVar[pedra;$sum[$getGlobalUserVar[pedra;$authorID];$random[35;50]];$authorID]
$setGlobalUserVar[ouro;$sum[$getGlobalUserVar[ouro;$authorID];$random[25;30]];$authorID]
$setGlobalUserVar[ferro;$sum[$getGlobalUserVar[ferro;$authorID];$random[30;60]];$authorID]
$setGlobalUserVar[diamante;$sum[$getGlobalUserVar[diamante;$authorID];$random[5;8]];$authorID]
$color[$randomText[FFD58E;FFFFFF;2C2D31]]
$addTimestamp
$endelseIf
$endif
`
}