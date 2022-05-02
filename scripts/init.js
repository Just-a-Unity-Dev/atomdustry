const ui = require("ui-lib/library");
const mcp = extend(SwitchBlock, "missile-control-panel", {
	"name": "Missile Control Panel",
	"description": "Launch Missiles at your enemies with this 2x2 control panel.",

	"size": 2,
	"squareSprite": false,
	
	"configurable": true,

	"consumes": {
		"power": 2,
		"items": {
			"items": [
				"thorium/3",
				"spore-pod/2"
			]
		}
	},

	"destructible": true,
	"solid": true,

	"requirements": [
		{"item": "silicon", "amount": 460},
		{"item": "lead", "amount": 160},
		{"item": "thorium", "amount": 140}
	],
	
	"category": "crafting",
	"research": "item-uranium"
})

print("Atomdustry initalized");