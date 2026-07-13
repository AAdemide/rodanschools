import { CalendarDays } from "lucide-react";

export default function EventList({ events }: { events: any[] }) {
  if (events.length === 0) {
    return (
      <div className= "border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center text-center bg-slate-50/50 m-auto">
        <div className="bg-primary-fixed w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <CalendarDays className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          No Upcoming Events Just Yet
        </h3>
        <p className="text-slate-600 max-w-2xl mb-8">
          We're currently planning our next round of exciting workshops, 
          performances, and symposiums. Check back soon for updates!
        </p>
        {/* <button className="px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
          Notify Me of New Events
        </button> */}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto ">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col group cursor-pointer"
        >
          {/* Image & Date Badge */}
          <div className="relative h-56 w-full overflow-hidden bg-slate-200">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex flex-col items-center justify-center shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-1">
                {event.month}
              </span>
              <span className="text-xl font-extrabold text-slate-900 leading-none">
                {event.date}
              </span>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="p-6 flex flex-col gap-2 flex-grow">
            <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider">
              {event.category}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto">
              {/* Using Lucide instead of raw SVG for consistency */}
              <CalendarDays className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}