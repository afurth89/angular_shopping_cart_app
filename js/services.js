// Shopping Cart Service
  // Functions needed:
    // Get items
    // Change Quantity
app.service("ShoppingCartService", function() {
  const inventory = [{
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98301",
        "name": "Incompactness syrup",
        "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        "caffeineScale": 49,
        "price": 7348,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["awesome"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98302",
        "name": "Flexner white tea",
        "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
        "caffeineScale": 38,
        "price": 4991,
        "inStock": true,
        "rating": 4,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["cold"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98303",
        "name": "Pressor leaf",
        "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        "caffeineScale": 153,
        "price": 5496,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry", "hot", "awesome"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98304",
        "name": "Flexner veggie tea",
        "ingredients": "cream of tartar, eggplant, cake, deer antler",
        "caffeineScale": 181,
        "price": 2445,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["summer"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98305",
        "name": "Topflighter malt",
        "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
        "caffeineScale": 241,
        "price": 4486,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
        "__v": 0,
        "categories": ["dry","lucid","warm"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98306",
        "name": "Cooking mix",
        "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
        "caffeineScale": 230,
        "price": 6973,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["summer"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98307",
        "name": "Cooking stew",
        "ingredients": "eggplant",
        "caffeineScale": 122,
        "price": 6003,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry","winter","lucid"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98308",
        "name": "Prevenient herb tea",
        "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
        "caffeineScale": 196,
        "price": 1374,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
        "__v": 0,
        "categories": ["lucid","hot"],
        "quantity": 0
    },    {
        "_id": "55c8ee82152165d244b98309",
        "name": "Angular mix",
        "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
        "caffeineScale": 196,
        "price": 4158,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["spring", "warm","winter"],
        "quantity": 0
    }]
  var category = "all categories";
  var searchText = "";

  return {
    getInventory: function() {
      return inventory;
    },
    getCategory: function() {
      console.log("getCategory func has triggered")
      return category;
    },    
    changeCategory: function(category) {
      category = category;
      return category;
    },
    changeSearchText: function(text) {
      searchText = text;
      console.log("The services searchText is: ",searchText)
      return searchText;
    },
    updateQuantity: function(item) {
      console.log(item)
      let foundItemIndex = inventory.findIndex(function(i) {
        return i.name === item.name;
      })
      console.log(foundItemIndex)
      inventory[foundItemIndex].quantity = item.quantity;
      console.log("The inventory count for ", inventory[foundItemIndex].name, " is ", inventory[foundItemIndex].quantity)
      debugger;
      return inventory;
    },
    getCart: function() {
      let cart = inventory.reduce(function(cur, next) {
        if (next.quantity > 0) {
          cur.push(next);
        }
        return cur;
      }, [])
      console.log(cart)
      return cart;
    }
 
  }

  
})