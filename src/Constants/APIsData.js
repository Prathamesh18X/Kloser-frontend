const breakpointColumnsObj = { xs: 2, sm: 3, md: 4, lg: 5 };
const carouselItems = [
  {
    title: "Step Into the world of Japanese Wellness & Beauty",
    image:
      "https://plus.unsplash.com/premium_photo-1733514433512-02a7b68e92dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Discover the Beauty of Nature",
    image:
      "https://images.unsplash.com/photo-1734375315815-77169cefe3d0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Explore Exclusive Collections",
    image:
      "https://plus.unsplash.com/premium_photo-1733514433512-02a7b68e92dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const cardData = [
  {
    id: 1,
    headerSubtitle: "What to watch",
    headerTitle: "Kloser Originals",
    imageUrl:
      "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 250 },
    buttonText: "RM80.20",
  },
  {
    id: 2,
    headerSubtitle: "Editor's Choice",
    headerTitle: "In-house Picks",
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 300 },
    buttonText: "RM90.50",
  },
  {
    id: 3,
    headerSubtitle: "Trending Now",
    headerTitle: "Binge Watch",
    imageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 350 },
    buttonText: "RM75.30",
  },
  {
    id: 4,
    headerSubtitle: "Featured Picks",
    headerTitle: "Exclusive Releases",
    imageUrl:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 280 },
    buttonText: "RM100.00",
  },
  {
    id: 5,
    headerSubtitle: "New Releases",
    headerTitle: "Summer Blockbusters",
    imageUrl:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 200 },
    buttonText: "RM85.00",
  },
  {
    id: 6,
    headerSubtitle: "Top Rated",
    headerTitle: "Critics' Picks",
    imageUrl:
      "https://images.unsplash.com/photo-1508610048659-a06c052bdaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 340 },
    buttonText: "RM95.40",
  },
  {
    id: 7,
    headerSubtitle: "Must Watch",
    headerTitle: "Cult Classics",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 250 },
    buttonText: "RM70.00",
  },
  {
    id: 8,
    headerSubtitle: "Latest Arrivals",
    headerTitle: "Fresh on Screen",
    imageUrl:
      "https://images.unsplash.com/photo-1588345847088-910c9b7d5f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 300 },
    buttonText: "RM78.00",
  },
  {
    id: 9,
    headerSubtitle: "Bestsellers",
    headerTitle: "Fan Favorites",
    imageUrl:
      "https://images.unsplash.com/photo-1731436392721-f4f45588c33d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 320 },
    buttonText: "RM82.50",
  },
  {
    id: 10,
    headerSubtitle: "New on the Block",
    headerTitle: "Hidden Gems",
    imageUrl:
      "https://images.unsplash.com/photo-1718202248135-c18af6f6299a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 200 },
    buttonText: "RM76.00",
  },
  {
    id: 11,
    headerSubtitle: "Bold Choices",
    headerTitle: "Statement Pieces",
    imageUrl:
      "https://images.unsplash.com/photo-1609941123896-c5d4537420c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
    imageSize: { width: 400, height: 280 },
    buttonText: "RM60.00",
  },
  {
    id: 12,
    headerSubtitle: "Top Picks",
    headerTitle: "Luxury Choices",
    imageUrl:
      "https://images.unsplash.com/photo-1612902376891-7b3b5a4a4c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 340 },
    buttonText: "RM110.00",
  },
  {
    id: 13,
    headerSubtitle: "Trending Style",
    headerTitle: "Modern Designs",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667597507991-a902a8e707dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 300 },
    buttonText: "RM99.00",
  },
  {
    id: 14,
    headerSubtitle: "New Discoveries",
    headerTitle: "Global Trends",
    imageUrl:
      "https://images.unsplash.com/photo-1726502429134-a9cd092b10e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 260 },
    buttonText: "RM115.50",
  },
  {
    id: 15,
    headerSubtitle: "Everyday Style",
    headerTitle: "Comfort Collection",
    imageUrl:
      "https://images.unsplash.com/photo-1734550268367-9e6badcfbce4?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 250 },
    buttonText: "RM79.50",
  },
  {
    id: 16,
    headerSubtitle: "Exclusive",
    headerTitle: "Limited Edition",
    imageUrl:
      "https://images.unsplash.com/photo-1732209988927-396f5103ede8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 310 },
    buttonText: "RM88.00",
  },
  {
    id: 17,
    headerSubtitle: "Fresh Finds",
    headerTitle: "Unique Picks",
    imageUrl:
      "https://images.unsplash.com/photo-1728551009955-3f3c90a0ad96?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageSize: { width: 400, height: 300 },
    buttonText: "RM67.00",
  },
  {
    id: 18,
    headerSubtitle: "Top Sellers",
    headerTitle: "Popular Items",
    imageUrl:
      "https://images.unsplash.com/photo-1609941122847-243e1ea2e486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 290 },
    buttonText: "RM83.00",
  },
  {
    id: 19,
    headerSubtitle: "Essentials",
    headerTitle: "Daily Picks",
    imageUrl:
      "https://images.unsplash.com/photo-1609941123236-074987f3c8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 240 },
    buttonText: "RM65.00",
  },
  {
    id: 20,
    headerSubtitle: "Seasonal Favorites",
    headerTitle: "Winter Picks",
    imageUrl:
      "https://images.unsplash.com/photo-1609941122837-070a1dc1b9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    imageSize: { width: 400, height: 350 },
    buttonText: "RM112.00",
  },
];

export { cardData, breakpointColumnsObj, carouselItems };
