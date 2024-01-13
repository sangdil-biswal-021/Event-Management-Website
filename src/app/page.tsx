import {
  getMongoDBUserIDOfLoggedInUser,
  handleNewUserRegistration,
} from "@/actions/user";
import { connectDB } from "@/config/dbConfig";
import { EventType } from "@/interfaces/events";
import EventModel from "@/models/event-model";
import Link from "next/link";

connectDB();

export default async function Home() {
  await handleNewUserRegistration();

  const events: EventType [] = (await EventModel.find({}).sort({
    createdAt: -1,
  })) as any;

  return (
    <div>
      <div className="flex flex-col gap-5">
        {events.map((event) => (
          <div
            key={event._id}
            className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-sm md:gap-10 border border-gray-200"
          >
            <div className="col-span-1">
              <img
                src={event.images[0]}
                alt="Picture of the event"
                // height={130}
                // width={250}
                className="w-full h-[35vh] object-cover hover:scale-105 transition-all duration-600 rounded-l-sm"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-5 justify-between p-5">
              <h1 className="font-semibold text-gray-700">{event.name}</h1>
              <p className="text-gray-500 w-full line-clamp-3 text-sm">
                {event.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <h1>
                    <i className="ri-map-pin-line pr-5"></i> {event.location}
                  </h1>

                  <h1>
                    <i className="ri-calendar-line pr-5"></i> {event.date} at{" "}
                    {event.time}
                  </h1>
                </div>

                <Link
                  className="bg-primary text-white px-5 py-2 rounded-sm text-sm"
                  href={`/book-event/${event._id}`}
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
