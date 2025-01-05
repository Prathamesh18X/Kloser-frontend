import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
// import Masonry from "react-masonry-css";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "@mui/lab/Masonry";
import star from "../../public/assets/star.svg";

const Homepage = () => {
  const cardData = [
    {
      id: 1,
      headerSubtitle: "What to watch",
      headerTitle: "Kloser Originals",
      imageUrl:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 500 },
      buttonText: "RM80.20",
    },
    {
      id: 2,
      headerSubtitle: "Editor's Choice",
      headerTitle: "In-house Picks",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM90.50",
    },
    {
      id: 3,
      headerSubtitle: "Trending Now",
      headerTitle: "Binge Watch",
      imageUrl:
        "https://images.unsplash.com/photo-1531746790731-e13f2b8b8e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM75.30",
    },
    {
      id: 4,
      headerSubtitle: "Featured Picks",
      headerTitle: "Exclusive Releases",
      imageUrl:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM100.00",
    },
    {
      id: 5,
      headerSubtitle: "New Releases",
      headerTitle: "Summer Blockbusters",
      imageUrl:
        "https://images.unsplash.com/photo-1605030535062-cf44c89cd5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM85.00",
    },
    {
      id: 6,
      headerSubtitle: "Top Rated",
      headerTitle: "Critics' Picks",
      imageUrl:
        "https://images.unsplash.com/photo-1501862700987-9ea78e45d422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM95.40",
    },
    {
      id: 7,
      headerSubtitle: "Must Watch",
      headerTitle: "Cult Classics",
      imageUrl:
        "https://images.unsplash.com/photo-1517803614378-19a9a581928e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM70.00",
    },
    {
      id: 8,
      headerSubtitle: "Latest Arrivals",
      headerTitle: "Fresh on Screen",
      imageUrl:
        "https://images.unsplash.com/photo-1533658925626-71e1995dc5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM78.00",
    },
    {
      id: 9,
      headerSubtitle: "Bestsellers",
      headerTitle: "Fan Favorites",
      imageUrl:
        "https://images.unsplash.com/photo-1507100211548-8f8e6c97f733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM82.50",
    },
    {
      id: 10,
      headerSubtitle: "New on the Block",
      headerTitle: "Hidden Gems",
      imageUrl:
        "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM76.00",
    },
    {
      id: 11,
      headerSubtitle: "Documentaries",
      headerTitle: "Learn and Explore",
      imageUrl:
        "https://images.unsplash.com/photo-1573496771851-d7c52a4e542f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM70.00",
    },
    {
      id: 12,
      headerSubtitle: "Animation",
      headerTitle: "Family Picks",
      imageUrl:
        "https://images.unsplash.com/photo-1549887535-51b36a4f3ea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM72.30",
    },
    {
      id: 13,
      headerSubtitle: "Inspirational",
      headerTitle: "Uplifting Stories",
      imageUrl:
        "https://images.unsplash.com/photo-1523306605474-8d02f8b5a24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM85.90",
    },
    {
      id: 14,
      headerSubtitle: "Romance",
      headerTitle: "Heartwarming Tales",
      imageUrl:
        "https://images.unsplash.com/photo-1519226614835-47f5b582b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM80.00",
    },
    {
      id: 15,
      headerSubtitle: "Fantasy",
      headerTitle: "Magical Adventures",
      imageUrl:
        "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM95.00",
    },
    {
      id: 16,
      headerSubtitle: "Action",
      headerTitle: "Thrill Seekers",
      imageUrl:
        "https://images.unsplash.com/photo-1533680984815-0c859c879f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM88.00",
    },
    {
      id: 17,
      headerSubtitle: "Sci-Fi",
      headerTitle: "Out of This World",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM92.50",
    },
    {
      id: 18,
      headerSubtitle: "Adventure",
      headerTitle: "Explore the Unknown",
      imageUrl:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM89.00",
    },
    {
      id: 19,
      headerSubtitle: "Mystery",
      headerTitle: "Unsolved Stories",
      imageUrl:
        "https://images.unsplash.com/photo-1558920058-b5613f9881cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM78.00",
    },
    {
      id: 20,
      headerSubtitle: "Horror",
      headerTitle: "Spine Chillers",
      imageUrl:
        "https://images.unsplash.com/photo-1536152474218-112aa7c376cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzI2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      imageSize: { width: 400, height: 300 },
      buttonText: "RM85.00",
    },
  ];

  const breakpointColumnsObj = { xs: 1, sm: 2, md: 4, lg: 5 };

  return (
    <>
      <div className="container mx-auto p-6 text-center">
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <Card
            className="bg-[#E7E5E4] shadow-md p-6 rounded-lg"
            style={{ width: "300px" }}
          >
            {/* Header */}
            <CardHeader className="flex items-center space-x-4">
              <img src={star} alt="star" />
              <h2 className="text-sm
               font-semibold text-black">Store Name</h2>
            </CardHeader>

            {/* Body */}
            <div className="mt-4 text-gray-600">
              <p>
                Store Name is your shopping destination for fashion, home,
                beauty, kids&apos; clothes and more. Browse the latest
                collections and find quality pieces at affordable prices.
              </p>
            </div>

            {/* Footer */}
            <CardFooter className="flex justify-start mt-6">
              <Button
                className="bg-black text-white hover:bg-gray-800"
                radius="full"
                size="sm"
              >
                All collections
              </Button>
            </CardFooter>
          </Card>
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to Kloser</h1>
        <p className="text-lg text-gray-600">
          Browse our products and shop the best deals!
        </p>
      </div>
      <Masonry columns={breakpointColumnsObj} spacing={2}>
        {cardData.map((card) => (
          <div key={card.id}>
            <Card className="relative shadow-md overflow-hidden">
              <CardHeader className="absolute z-10 top-2 left-2 flex-col items-start">
                <span className="text-tiny text-white/60 uppercase font-bold">
                  {card.headerSubtitle}
                </span>
                <h4 className="text-white font-medium text-large">
                  {card.headerTitle}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-auto object-cover"
                src={card.imageUrl}
                width={card.imageSize.width}
                height={card.imageSize.height}
              />
              <CardFooter className="absolute z-10 bottom-2 left-2 flex-col items-start">
                <Button
                  className="bg-black/70 text-white hover:bg-black/90"
                  radius="sm"
                  size="sm"
                >
                  <span className="text-white font-bold">
                    {card.buttonText}
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default Homepage;
