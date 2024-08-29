import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { customerReview } from "@/static/customerReview";
const CustomersReview = () => {
  return (
 
      <div className="container  relative w-full h-[400px] mt-6">
        <h2 className="text-[28px] mb-6">Customers Review</h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className=" overflow-hidden rounded-lg shadow-lg"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="flex">
            {customerReview.map((review) => (
              <CarouselItem
                key={review.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-transparent relative">
                  <CardContent className="flex items-center justify-center h-[300px] p-0">
                    <img
                      src={review?.image}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#000000bc] flex flex-col justify-center">
                      <h1 className="px-10 py-4 text-white font-medium text-lg rounded-md">
                        {review.name}
                      </h1>
                      <p className="px-10 py-1 text-white font-medium text-sm rounded-md h-auto">
                        {review.review}
                      </p>
                      <div className="px-10 py-1 text-white font-medium text-sm rounded-md h-auto flex items-center gap-3">
                        Role: {review.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9664;
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9654;
          </CarouselNext>
        </Carousel>
      </div>
 
  );
};

export default CustomersReview;
