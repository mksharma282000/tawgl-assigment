import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MovieCard } from "./MovieCard";
import { CalendarDays, Ticket } from "lucide-react";
import { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "https://www.thelance.org/wp-content/uploads/2021/12/Villeneuve-Dune-courtesy-of-TV-Insider-752x440-1.jpg",
    releaseDate: "2024-03-01",
    availableSeats: 45,
    price: 12.99,
  },
  {
    id: 2,
    title: "Ghostbusters: Frozen Empire",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*CoAC5-mie82BMKYBMhTQ1A.jpeg",
    releaseDate: "2024-03-22",
    availableSeats: 30,
    price: 14.99,
  },
  {
    id: 3,
    title: "72 Hours: Martyr Who Never Died",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00092012-jzfnqbgwds-landscape.jpg",
    releaseDate: "2024-03-22",
    availableSeats: 25,
    price: 19.99,
  },
];

export const MovieList = () => {
  // Using useState to track availableSeats dynamically
  const [availableSeats, setAvailableSeats] = useState(
    movies?.map((movie) => movie.availableSeats)
  );

  const handleBookNow = (index) => {
    setAvailableSeats((prevSeats) => {
      const newSeats = [...prevSeats];
      if (newSeats[index] > 0) {
        newSeats[index] -= 1;
      }
      return newSeats;
    });
  };

  const handleCancelBooking = (index) => {
    setAvailableSeats((prevSeats) => {
      const newSeats = [...prevSeats];
      newSeats[index] += 1;
      return newSeats;
    });
  };

  return (
    <Accordion type="single" collapsible className="space-y-4">
      <AccordionItem
        value="Year"
        className="border bg-white backdrop-blur-sm rounded-2xl"
      >
        <AccordionTrigger className="px-4">
          <span>Year 2024</span>
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <div>
            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem
                value="January"
                className="border rounded-xl bg-slate-100 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-4">
                  <span>January</span>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div>
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem
                        value="upcoming"
                        className="border rounded-xl bg-slate-200 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5" />
                            <span>Upcoming Movies</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                            {movies?.map((movie, index) => (
                              <MovieCard
                                key={movie.id}
                                movie={movie}
                                availableSeats={availableSeats[index]} // Pass dynamic seats
                                onBookNow={() => handleBookNow(index)} // Pass booking handler
                                onCancelBooking={() =>
                                  handleCancelBooking(index)
                                } // Pass cancellation handler
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="thisWeek"
                        className="border rounded-xl bg-slate-200 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-4">
                          <div className="flex items-center gap-2">
                            <Ticket className="h-5 w-5" />
                            <span>This Week's Movies</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                            {movies?.map((movie, index) => (
                              <MovieCard
                                key={movie.id}
                                movie={movie}
                                availableSeats={availableSeats[index]} // Pass dynamic seats
                                onBookNow={() => handleBookNow(index)} // Pass booking handler
                                onCancelBooking={() =>
                                  handleCancelBooking(index)
                                } // Pass cancellation handler
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="February"
                className="border rounded-xl bg-slate-100 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-4">
                  <span>February</span>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div>
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem
                        value="upcoming"
                        className="border rounded-xl bg-slate-200 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5" />
                            <span>Upcoming Movies</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                            {movies?.map((movie, index) => (
                              <MovieCard
                                key={movie.id}
                                movie={movie}
                                availableSeats={availableSeats[index]} // Pass dynamic seats
                                onBookNow={() => handleBookNow(index)} // Pass booking handler
                                onCancelBooking={() =>
                                  handleCancelBooking(index)
                                } // Pass cancellation handler
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="thisWeek"
                        className="border rounded-xl bg-slate-200 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="px-4">
                          <div className="flex items-center gap-2">
                            <Ticket className="h-5 w-5" />
                            <span>This Week's Movies</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                            {movies?.map((movie, index) => (
                              <MovieCard
                                key={movie.id}
                                movie={movie}
                                availableSeats={availableSeats[index]} // Pass dynamic seats
                                onBookNow={() => handleBookNow(index)} // Pass booking handler
                                onCancelBooking={() =>
                                  handleCancelBooking(index)
                                } // Pass cancellation handler
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
