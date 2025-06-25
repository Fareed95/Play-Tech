'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=80',
];

export default function ClickTrackerProvider({ children }: { children: React.ReactNode }) {
  const [clicks, setClicks] = useState(0);
  const [showAd, setShowAd] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [countdown, setCountdown] = useState(10);

  // Handle click tracking with session logic
  useEffect(() => {
    const handleClick = () => {
      setClicks(prev => {
        const next = prev + 1;

        const isFirstTime = sessionStorage.getItem('crodlin_first_ad_shown') !== 'true';

        if (isFirstTime && next === 2) {
          setShowAd(true);
          setCountdown(10);
          sessionStorage.setItem('crodlin_first_ad_shown', 'true');
        } else if (!isFirstTime && next % 10 === 0) {
          setShowAd(true);
          setCountdown(10);
        }

        return next;
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Handle image carousel and countdown timer
  useEffect(() => {
    if (!showAd) return;

    const imageInterval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);

    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setShowAd(false);
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(countdownTimer);
    };
  }, [showAd]);

  return (
    <>
      {showAd && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2">
          <div className="relative z-10 bg-white rounded-3xl p-5 md:p-10 w-full max-w-4xl shadow-2xl border border-gray-200 flex flex-col md:flex-row gap-6 overflow-hidden">

            {/* AD Label */}
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
              Ad
            </div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-3xl"
              onClick={() => setShowAd(false)}
              aria-label="Close Ad"
            >
              &times;
            </button>

            {/* Left Side Content */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src="https://crodlin.in/logo.png"
                  alt="Crodlin Logo"
                  width={70}
                  height={70}
                  className="rounded-full shadow-md border border-gray-200"
                />
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-3">
                Wanna grow your digital presence?
              </h2>

              <p className="text-gray-700 text-base md:text-lg mb-4">
                This website is proudly built by <strong>Crodlin Technology</strong> — we craft CRMs,
                ERPs, SaaS apps, websites, and deploy cloud-ready platforms.
              </p>

              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>✅ Tailored CRM & ERP development</li>
                <li>✅ SaaS & cloud app expertise</li>
                <li>✅ Pixel-perfect UI & responsive websites</li>
                <li>✅ Hosting, deployment & maintenance</li>
              </ul>

              <a
                href="https://crodlin.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base md:text-lg px-6 py-3 rounded-xl transition"
              >
                🔍 Let's Build Your Idea Together
              </a>

              {/* Countdown Timer */}
              <div className="mt-4 text-sm text-gray-500 w-full text-center md:text-left">
                ⏳ This ad will close in <strong>{countdown}s</strong>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-1000"
                    style={{ width: `${(countdown / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side Image Carousel */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full h-48 md:h-64 relative rounded-xl overflow-hidden shadow-md">
                <Image
                  src={images[currentImage]}
                  alt={`Showcase ${currentImage + 1}`}
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
}
