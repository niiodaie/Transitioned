import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Candle, MapPin } from 'lucide-react';

const SimpleMemorial = () => {
  const [candleCount, setCandleCount] = useState(47);

  const handleLightCandle = () => {
    setCandleCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-serif text-amber-900 mb-2">Transitioned.Life</h1>
        <p className="text-amber-700">A sacred space for remembrance</p>
      </header>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="h-64 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6 -mt-16 relative z-10">
          <div className="w-32 h-32 bg-amber-300 rounded-full border-4 border-white shadow-lg"></div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-serif text-amber-900 mb-2">John O. Smith</h1>
            <p className="text-lg text-amber-700 mb-2">August 4, 1952 – December 1, 2023 • Age 71</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Atlanta, GA</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button 
                onClick={handleLightCandle}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3"
              >
                <Candle className="w-5 h-5 mr-2" />
                Light a Candle
              </Button>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <Candle className="w-4 h-4" />
                <span>{candleCount} candles lit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Life Story */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 font-serif">
                <Heart className="w-5 h-5" />
                Life Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 leading-relaxed font-serif">
                John was a father, teacher, and jazz lover who lived a life of joy, service, and laughter. 
                He loved gardening, community events, and spending time with his grandchildren. His warm 
                smile and generous spirit touched the lives of countless students and community members 
                throughout his 34-year teaching career at Roosevelt Elementary School.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fundraiser */}
        <div>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-amber-900 font-serif">Memorial Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">$3,620</div>
                  <div className="text-sm text-amber-600">raised of $5,000 goal</div>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-3">
                  <div className="bg-amber-600 h-3 rounded-full" style={{width: '72.4%'}}></div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tributes Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-amber-900 font-serif">Tributes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b border-amber-200 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Emily</h4>
                    <p className="text-amber-800 font-serif">You taught me how to see the world with curiosity. Rest well, John ❤️</p>
                    <span className="text-xs text-amber-600">2 days ago</span>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-amber-200 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-amber-900">Raymond</h4>
                    <p className="text-amber-800 font-serif">Miss your music already, brother. Say hi to Dad for me.</p>
                    <span className="text-xs text-amber-600">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimpleMemorial;

