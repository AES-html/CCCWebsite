
import React from 'react';
import { BOARD_MEMBERS } from '../config';

const ExecBoard: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#7BAFD4]">Executive Board</h1>
          <p className="text-xl text-gray-600 mt-4">The students behind the mission.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {BOARD_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#7BAFD4]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#7BAFD4] font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <div className="w-12 h-1 bg-[#7BAFD4]/20 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecBoard;
