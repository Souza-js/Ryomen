module.exports = {
name: "daily",
$if: "old",
code: `
$reply[$messageID;false]
$if[$getGuildVar[sistemarpg]==0]
 ❌ | Esse comando faz parte do Sistema de Rpg, peça para algum Administror ou Superior ativar esse sistema usando \`s.setrpg on\`!
$elseif[$getGuildVar[sistemarpg]==1]
$globalCooldown[24h; ❌ | Você já resgatou a seu Rpg Diário, volte novamente <t:$truncate[$math[$math[$dateStamp+$getCooldownTime[24h;globalUser;daily;$authorID]]/1000]]:R> para resgatá-lo!]
$title[ Diário ]
$description[ Você recebeu seu Rpg Diário  e conseguiu **$numberSeparator[$random[1000;4500]]** Coins!
E veja só, você também recebeu alguns itens:

• **$numberSeparator[$random[20;40]]** Madeiras.
• **$numberSeparator[$random[15;30]]** Pedras.
• **$numberSeparator[$random[19;33]]** Carvões.
• **$numberSeparator[$random[10;15]]** Ferros.
• **$numberSeparator[$random[5;10]]** Ouros.
• **$numberSeparator[$random[0;1]]** Diamante.]
$color[$randomText[FFD58E;FFFFFF;2C2D31]]
$addTimestamp
$setGlobalUserVar[cc;$sum[$getGlobalUserVar[cc;$authorID];$random[1000;4500]];$authorID]
$setGlobalUserVar[madeira;$sum[$getGlobalUserVar[madeira;$authorID];$random[20;40]];$authorID]
$setGlobalUserVar[pedra;$sum[$getGlobalUserVar[pedra;$authorID];$random[10;50]];$authorID]
$setGlobalUserVar[carvão;$sum[$getGlobalUserVar[carvão;$authorID];$random[19;35]];$authorID]
$setGlobalUserVar[ouro;$sum[$getGlobalUserVar[ouro;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[diamante;$sum[$getGlobalUserVar[diamante;$authorID];$random[0;1]];$authorID]
$setGlobalUserVar[ferro;$sum[$getGlobalUserVar[ferro;$authorID];$random[10;15]];$authorID]
$endif
`
}