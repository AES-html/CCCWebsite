
import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { EXTERNAL_LINKS } from '../config';

const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4 min-h-[60vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#7BAFD4] mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions about volunteering? Interested in a partnership? Or just want to say hi? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href={`mailto:${EXTERNAL_LINKS.email}`}
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#7BAFD4] transition-all group shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#7BAFD4] group-hover:bg-[#7BAFD4] group-hover:text-white transition-all mb-6">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 break-all">{EXTERNAL_LINKS.email}</p>
            </div>
          </a>

          <a 
            href={EXTERNAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#7BAFD4] transition-all group shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#7BAFD4] group-hover:bg-[#7BAFD4] group-hover:text-white transition-all mb-6">
              <Instagram size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Instagram</h3>
              <p className="text-gray-500">@care.collective.at.carolina</p>
            </div>
          </a>

          <a 
            href={EXTERNAL_LINKS.groupme}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#7BAFD4] transition-all group shadow-sm hover:shadow-md"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#7BAFD4] group-hover:bg-[#7BAFD4] group-hover:text-white transition-all mb-6">
              <MessageCircle size={28} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">GroupMe</h3>
              <p className="text-gray-500">Join the volunteer chat</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
