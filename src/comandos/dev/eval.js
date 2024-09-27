module.exports = {
name: "eval",
aliases: ['evl', 'eva', 'ev', 'e'],
$if: "old",
code: `
$if[$message[1]==djs]
$djsEval[$messageSlice[1];true]
$else
$eval[$message]
$endif
$onlyIf[$getGlobalUserVar[airport_team]==true;]
`
}