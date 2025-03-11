import React from 'react';
import { Link } from 'react-router-dom';
import { Car as Cards, Share2, Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Virtual PokéDex</h1>
        <p className="text-xl text-gray-600">Your digital Pokémon card collection manager</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Cards className="h-8 w-8" />}
          title="Manage Collection"
          description="Upload and organize your Pokémon cards in a beautiful digital format"
        />
        <FeatureCard
          icon={<Search className="h-8 w-8" />}
          title="Easy Search"
          description="Quickly find cards in your collection with powerful search features"
        />
        <FeatureCard
          icon={<Share2 className="h-8 w-8" />}
          title="Share Collection"
          description="Share your collection with friends and the Pokémon community"
        />
      </div>

      <div className="text-center">
        <Link
          to="/auth"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-red-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;