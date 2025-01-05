import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Carousel from "react-material-ui-carousel";

import Masonry from "@mui/lab/Masonry";
import star from "../../public/assets/star.svg";
import { cardData, carouselItems, breakpointColumnsObj } from "../../mockData";

const Homepage = () => {
  return (
    <>
      <div className=" mx-auto py-6 text-center">
        <div className="flex justify-between items-center bg-gray-100 py-14  gap-6">
          <Card
            className="bg-[#E7E5E4] shadow-md p-6 rounded-lg flex justify-between"
            style={{ maxWidth: "280px", height: "370px" }}
          >
            <CardHeader className="flex items-center space-x-4">
              <img src={star} alt="star" />
              <h2 className="text-sm font-bold text-black">Store Name</h2>
            </CardHeader>

            <div className=" text-gray-600 py-6 pb-6">
              <p className="text-sm text-left">
                Store Name is your shopping destination for fashion, home,
                beauty, kids&apos; clothes and more. Browse the latest
                collections and find quality pieces at affordable prices.
              </p>
            </div>

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

          <div className="flex-grow">
            <Carousel
              // IndicatorIcon={}
              // navButtonsAlwaysVisible
              animation="fade"
              indicators={true}
              indicatorContainerProps={{
                style: {
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  display: "flex",
                  justifyContent: "left",
                  padding: "20px",
                },
              }}
              // IndicatorIcon={<RemoveRoundedIcon />}
              IndicatorIcon={null}
              indicatorIconButtonProps={{
                style: {
                  width: "24px",
                  margin: "4px",
                  height: "6px",
                  borderRadius: "4px",
                  backgroundColor: "white",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  backgroundColor: "orange",
                },
              }}
            >
              {carouselItems.map((item, index) => (
                <div key={index}>
                  <Card className="relative shadow-md overflow-hidden">
                    <CardHeader className="absolute z-10 top-2 left-2 flex-col items-start">
                      <h4 className="text-white font-medium text-2xl w-[60%]">
                        {item.title}
                      </h4>
                    </CardHeader>
                    <div className="max-h-[370px] max-w-[full]">
                      <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-auto object-cover"
                        src={item.image}
                        width={400}
                        height={500}
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>

          <Card className="relative shadow-md overflow-hidden">
            <CardHeader className="absolute z-10 top-2 left-2 flex-col items-start">
              <span className="text-tiny text-white/60 uppercase font-bold">
                {`heading`}
              </span>
              <h4 className="text-white font-medium text-large">
                {`subheading`}
              </h4>
            </CardHeader>
            <div className="max-h-[370px] max-w-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-auto object-cover"
                src={
                  "https://images.unsplash.com/photo-1732165782979-43619d170e86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={400}
                height={500}
              />
            </div>
            <CardFooter className="absolute z-10 bottom-2 left-2 flex-col items-start">
              <div className="flex align-center justify-between space-x-2 w-full">
                <p className="font-bold text-xl text-white">Feature products</p>
                <Button
                  className="bg-black/70 text-white hover:bg-black/90"
                  radius="full"
                  size="sm"
                >
                  <span className="text-white font-bold">{"View"}</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex container justify-content-center align-items-center mx-auto py-6 text-center">
        <Masonry columns={breakpointColumnsObj} spacing={4}>
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
                    className="bg-black/50 text-white hover:bg-black/90"
                    radius="sm"
                    size="sm"
                  >
                    <span className="text-white text-[10px] font-semibold">
                      {card.buttonText}
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default Homepage;
