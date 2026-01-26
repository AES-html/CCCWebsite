
import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { CLUB_EVENTS } from '../config';

const CalendarPage: React.FC = () => {
  // Sort events by date
  const sortedEvents = [...CLUB_EVENTS].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#7BAFD4] mb-4">Event Calendar</h1>
          <p className="text-gray-600">Mark your calendars for our upcoming volunteer events, meetings, and much more.</p>
        </header>

        <div className="space-y-6">
          {sortedEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              <div className="md:w-48 bg-[#7BAFD4] p-6 text-white flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold uppercase mb-1">
                  {event.date.toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="text-4xl font-black">
                  {event.date.getDate()}
                </span>
                <span className="text-xs font-medium mt-1">
                   {event.date.toLocaleDateString('en-US', { weekday: 'long' })}
                </span>
              </div>
              
              <div className="flex-grow p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    event.type === 'Outreach' ? 'bg-orange-100 text-orange-600' :
                    event.type === 'Service' ? 'bg-green-100 text-green-600' :
                    event.type === 'Meeting' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                
                <div className="flex flex-wrap gap-6 text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[#7BAFD4]" />
                    <span>{event.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#7BAFD4]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}

          {sortedEvents.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <CalendarIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-400">No events scheduled yet.</h3>
              <p className="text-gray-400">Check back soon or join our GroupMe!</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            Events are subject to change based on weather and university schedule. 
            Updates are posted daily to our GroupMe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
