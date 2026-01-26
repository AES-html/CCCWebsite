
import React from 'react';
import { Heart, Stethoscope, Users, MapPin } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[#7BAFD4]/30 transition-colors">
    <div className="w-14 h-14 bg-[#7BAFD4]/10 text-[#7BAFD4] rounded-xl flex items-center justify-center mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WhatWeDo: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <span className="text-[#7BAFD4] font-bold uppercase tracking-widest text-sm">Our Mission</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900">Service Beyond the Sidewalk</h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            We are a group of dedicated students focusing on volunteering with Chapel Hill's unhoused community.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            icon={MapPin}
            title="Street Outreach"
            description="Our primary initiative involves regular regular volunteering in the Triangle area. We work at organizations such as homeless shelters, food pantries, and many more."
          />
          <FeatureCard 
            icon={Stethoscope}
            title="Public Health"
            description="We are working to provide basic health supplies like first-aid kits, hygiene products, and harm reduction materials, while connecting individuals to local healthcare services."
          />
          <FeatureCard 
            icon={Heart}
            title="Matching Volunteers"
            description="Our biggest goal is to connect hopeful volunteers with organizations that need an extra set of hands. We hope to make the process of volunteering as easy as possible for anyone who wants to get involved."
          />
          <FeatureCard 
            icon={Users}
            title="Community Partnerships"
            description="We work alongside local shelters and healthcare professionals to ensure our efforts are coordinated and impactful, providing volunteers where they are needed most."
          />
        </div>

        <div className="mt-24 bg-[#7BAFD4] rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="./volunteeringpic.jpg" 
                alt="Outreach walk" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Gain Hands-On Experience</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                For Tar Heels pursuing careers in public health, medicine, or social work, Carolina Care Collective offers a unique opportunity to understand the complexities of social determinants of health firsthand. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  Understand local health policy in practice.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  Develop compassionate communication skills.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  Make a tangible difference in Chapel Hill.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
