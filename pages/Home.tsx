
import React from 'react';
import { ArrowRight, ClipboardCheck, MessageCircle, Instagram } from 'lucide-react';
import Countdown from '../components/Countdown';
import { EXTERNAL_LINKS } from '../config';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/unhoused-support/1920/1080?grayscale" 
            alt="Supportive hands" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7BAFD4]/40 to-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#7BAFD4] mb-6 drop-shadow-sm">
            CAROLINA CARE COLLECTIVE
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed">
            Bridging the gap between students and our neighbors through  outreach and volunteering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a 
              href={EXTERNAL_LINKS.quiz} 
              target="_blank"
              className="bg-[#7BAFD4] hover:bg-[#689ec5] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Take Our Volunteer Matching Quiz! <ArrowRight size={20} />
            </a>
            <div className="flex gap-4">
               <a 
                href={EXTERNAL_LINKS.groupme}
                target="_blank"
                className="w-14 h-14 bg-white border-2 border-[#7BAFD4] text-[#7BAFD4] rounded-full flex items-center justify-center hover:bg-[#7BAFD4] hover:text-white transition-all shadow-md"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                className="w-14 h-14 bg-white border-2 border-[#7BAFD4] text-[#7BAFD4] rounded-full flex items-center justify-center hover:bg-[#7BAFD4] hover:text-white transition-all shadow-md"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-4 pb-20">
        <Countdown />
      </section>

      {/* Quick Access Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey in Service</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you're interested in public health, social work, or just want to help, there's a place for you here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#7BAFD4]/10 text-[#7BAFD4] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7BAFD4] group-hover:text-white transition-colors">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Volunteer Matcher</h3>
              <p className="text-gray-600 mb-6">
                Take our specialized quiz to find organizations in the Chapel Hill area that match your skills and schedule.
              </p>
              <a href={EXTERNAL_LINKS.quiz} target="_blank" className="text-[#7BAFD4] font-bold hover:underline">Take the Quiz &rarr;</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#7BAFD4]/10 text-[#7BAFD4] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7BAFD4] group-hover:text-white transition-colors">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Join the Collective</h3>
              <p className="text-gray-600 mb-6">
                Our GroupMe is our primary hub for event coordination and community discussion, join for updates!
              </p>
              <a href={EXTERNAL_LINKS.groupme} target="_blank" className="text-[#7BAFD4] font-bold hover:underline">Join GroupMe &rarr;</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#7BAFD4]/10 text-[#7BAFD4] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7BAFD4] group-hover:text-white transition-colors">
                <Instagram size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Follow our Instagram to see our recent events, upcoming work, and see the effect you can have on your community!
              </p>
              <a href={EXTERNAL_LINKS.instagram} target="_blank" className="text-[#7BAFD4] font-bold hover:underline">Follow Us &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
