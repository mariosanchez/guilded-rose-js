const {Shop, Item} = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];
describe("Gilded Rose", function() {
  it("should work as expected", () => {
    const  gildedRose = new Shop(items);

    const updatedItems = gildedRose.updateQuality();

    const expectedUpdatedItems = [
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Aged Brie", 1, 1),
      new Item("Elixir of the Mongoose", 4, 6),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 2, 5),
    ];

    expect(updatedItems).toEqual(expectedUpdatedItems);
  })


  it("should decrease sellIn and Quality by 1 for regular items", () => {
    const aRegularItem = new Item("+5 Dexterity Vest", 10, 20);
    const items = [aRegularItem];
    const gildedRose = new Shop(items);

    updatedItems = gildedRose.updateQuality();

    aRegularItemUpdated = updatedItems[0];
    expect(aRegularItemUpdated.sellIn).toBe(9);
    expect(aRegularItemUpdated.quality).toBe(19);
  })

  it("should decrease quality twice as fast when sellIn has passed", () => {
    const aRegularItem = new Item("+5 Dexterity Vest", 0, 20);
    const items = [aRegularItem];
    const gildedRose = new Shop(items);

    updatedItems = gildedRose.updateQuality();

    aRegularItemUpdated = updatedItems[0];
    expect(aRegularItemUpdated.quality).toBe(18);
    expect(aRegularItemUpdated.sellIn).toBe(-1);
  })
});
