
import React from 'react';
import { Instagram, MessageCircle, ClipboardCheck, Mail } from 'lucide-react';
import { EXTERNAL_LINKS } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-[#7BAFD4] mb-4">CAROLINA CARE COLLECTIVE</h3>
            <p className="text-gray-600 max-w-xs mx-auto md:mx-0">
              Serving our community through service, every person makes a difference!
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href={EXTERNAL_LINKS.quiz} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#7BAFD4] transition-colors flex items-center justify-center md:justify-start gap-2">
                <ClipboardCheck size={16} /> Get Matched With An Organization Near You
              </a>
              <a href={EXTERNAL_LINKS.groupme} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#7BAFD4] transition-colors flex items-center justify-center md:justify-start gap-2">
                <MessageCircle size={16} /> Join the GroupMe
              </a>
              <a href={`mailto:${EXTERNAL_LINKS.email}`} className="text-gray-600 hover:text-[#7BAFD4] transition-colors flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} /> Contact Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#7BAFD4] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href={EXTERNAL_LINKS.groupme} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#7BAFD4] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Carolina Care Collective. Built with care for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
