const ui = require("ui-lib/library");
const mcp = extend(GenericCrafter, "missile-control-panel", {
	"power": 2,
	"items": {
		"items": [
			"thorium/3",
			"spore-pod/2"
		]
	}
});
mcp.destructible = true;
mcp.solid = true;
mcp.requirements = ItemStack.with(Items.silicon, 460, Items.lead, 160, Items.thorium, 140);
mcp.category = Category.crafting;
mcp.research = "item-uranium";

print("Atomdustry initalized");