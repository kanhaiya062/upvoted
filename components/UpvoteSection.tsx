"use client";
import { useState } from 'react';

const UpvoteSection = () => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(155);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleUpvote = () => {
    setIsUpvoted(!isUpvoted);
    setUpvoteCount(isUpvoted ? upvoteCount - 1 : upvoteCount + 1);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset the animation after 1 second
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-6xl text-pink-500 mb-6">👄</div>
      <h1 className="text-3xl font-bold mb-2">VideoDubber - Fast Video Translator</h1>
      <p className="text-xl text-gray-600 mb-6">
        Translate videos in your own voice, globalize in a click!
      </p>
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
          Visit <span className="ml-1">▼</span>
        </button>
        <button
          onClick={toggleUpvote}
          className={`px-4 py-2 border border-pink-500 rounded-md flex items-center transition-colors duration-300 overflow-hidden relative ${
            isUpvoted ? 'bg-pink-500 text-orange-100' : 'bg-pink-50 text-black '
          }`}
        >
          <span className={`inline-block transition-all duration-300 ${isAnimating ? 'transform -translate-y-full opacity-0' : ''}`}>
            ▲
          </span>
          <span className={`absolute left-4 inline-block transition-all duration-300 ${isAnimating ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'}`}>
            ▲
          </span>
          <span className="ml-1">
            {isUpvoted ? 'UPVOTED' : 'UPVOTE'} {upvoteCount}
          </span>
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="text-orange-500 mr-2">🎁</span>2 months free annually • Free Options
      </p>
      <p className="mb-4">
        Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Launched in</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">SaaS</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Video</span>
      </div>
    </div>
  );
};

export default UpvoteSection;
