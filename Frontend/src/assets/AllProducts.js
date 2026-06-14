const AllProducts = [
  // Mens
  {
    id: 1,
    name: "Men's Casual Shirt",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    new_price: 50.0,
    old_price: 80.0,
  },
  {
    id: 2,
    name: "Men's Denim Jacket",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    new_price: 75.0,
    old_price: 100.0,
  },
  {
    id: 3,
    name: "Men's Running Shoes",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    new_price: 90.0,
    old_price: 120.0,
  },
  {
    id: 4,
    name: "Men's Hoodie",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    new_price: 60.0,
    old_price: 90.0,
  },
  {
    id: 5,
    name: "Men's Formal Blazer",
    category: "Mens",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc",
    new_price: 110.0,
    old_price: 150.0,
  },

  // Womens
  {
    id: 6,
    name: "Women's Floral Dress",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    new_price: 65.0,
    old_price: 95.0,
  },
  {
    id: 7,
    name: "Women's Leather Handbag",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    new_price: 55.0,
    old_price: 85.0,
  },
  {
    id: 8,
    name: "Women's High Heels",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    new_price: 70.0,
    old_price: 100.0,
  },
  {
    id: 9,
    name: "Women's Summer Top",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    new_price: 40.0,
    old_price: 60.0,
  },
  {
    id: 10,
    name: "Women's Denim Jeans",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    new_price: 55.0,
    old_price: 80.0,
  },
  {
    id: 11,
    name: "Women's Winter Coat",
    category: "Womens",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    new_price: 120.0,
    old_price: 160.0,
  },

  // Kids
  {
    id: 12,
    name: "Kids Cotton T-Shirt",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea",
    new_price: 25.0,
    old_price: 40.0,
  },
  {
    id: 13,
    name: "Kids Winter Hoodie",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    new_price: 35.0,
    old_price: 50.0,
  },
  {
    id: 14,
    name: "Kids Sneakers",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    new_price: 45.0,
    old_price: 65.0,
  },
  {
    id: 15,
    name: "Kids Party Dress",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    new_price: 40.0,
    old_price: 60.0,
  },
  {
    id: 16,
    name: "Kids Casual Jacket",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    new_price: 50.0,
    old_price: 75.0,
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Stripped Flutter Sleeve Overlap Dress",
    new_price: 799,
    old_price: 999
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1664917983529-2d691180aa00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
    name: "Stripped Flutter Sleeve Overlap Dress",
    new_price: 1499,
    old_price: 1999
  },
  {
    id: 19,
    image: "https://plus.unsplash.com/premium_photo-1691622500807-6d9eeb9ea06a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
    name: "Stripped Flutter Sleeve Overlap Dress",
    new_price: 699,
    old_price: 899
  },
  {
    id: 20,
    image: "https://plus.unsplash.com/premium_photo-1691622500262-9962299a130c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    name: "Stripped Flutter Sleeve Overlap Dress",
    new_price: 2499,
    old_price: 2999
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    name: "Casual Shirt",
    new_price: 1199,
    old_price: 1499
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    name: "Denim Jeans",
    new_price: 2499,
    old_price: 2999
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    name: "Running Shoes",
    new_price: 2799,
    old_price: 3499
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Summer Dress",
    new_price: 1799,
    old_price: 2299
  },
  {
    id: 25,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    name: "Light Clothes",
    new_price: 3299,
    old_price: 3999
  },
  {
    id: 26,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    name: "Formal Blazer",
    new_price: 3999,
    old_price: 4999
  },
  {
    id: 27,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Kids Sweatshirt",
    new_price: 899,
    old_price: 1199
  },
  {
    id: 28,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    name: "Leather Handbag",
    new_price: 1999,
    old_price: 2499
  }
];

export default AllProducts;