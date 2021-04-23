const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {  
  it("should decrease sellIn and Quality by 1 for regular items", () => {
    const aRegularItem = new Item("+5 Dexterity Vest", 10, 20);
    const items = [aRegularItem];
    const gildedRose = new Shop(items);

    updatedItems = gildedRose.updateQuality();

    aRegularItemUpdated = updatedItems[0];
    expect(aRegularItemUpdated.sellIn).toBe(9);
    expect(aRegularItemUpdated.quality).toBe(19);
  })
});
