import React, { useState } from 'react';
import './App.css';

function App() {
  const [candleCount, setCandleCount] = useState(47);
  const [showTributeForm, setShowTributeForm] = useState(false);
  const [tributeName, setTributeName] = useState('');
  const [tributeMessage, setTributeMessage] = useState('');
  const [tributes, setTributes] = useState([
    { name: 'Emily', message: 'You taught me how to see the world with curiosity. Rest well, John ❤️', time: '2 days ago' },
    { name: 'Raymond', message: 'Miss your music already, brother. Say hi to Dad for me.', time: '3 days ago' },
    { name: 'Sarah Johnson', message: 'Mr. Smith was the best teacher I ever had. He made learning fun and always believed in us.', time: '4 days ago' }
  ]);
  const [currentLang, setCurrentLang] = useState('en');
  const [showAIMonologue, setShowAIMonologue] = useState(false);

  const languages = {
    en: {
      title: 'John O. Smith',
      dates: 'August 4, 1952 – December 1, 2023',
      location: 'Atlanta, GA',
      lifeStory: 'Life Story',
      memorialFund: 'Memorial Fund',
      tributes: 'Tributes',
      lightCandle: 'Light a Candle',
      donate: 'Donate',
      postTribute: 'Post a Tribute',
      yourName: 'Your name',
      writeMessage: 'Write your tribute message...',
      submit: 'Submit Tribute',
      aiMonologue: 'AI Memorial Speech',
      generateSpeech: 'Generate Memorial Speech',
      selectLanguage: 'Language'
    },
    ha: {
      title: 'John O. Smith',
      dates: 'Agusta 4, 1952 – Disamba 1, 2023',
      location: 'Atlanta, GA',
      lifeStory: 'Tarihin Rayuwa',
      memorialFund: 'Asusun Tunawa',
      tributes: 'Saƙonnin Tunawa',
      lightCandle: 'Haska Kyandir',
      donate: 'Bayar da Gudummawa',
      postTribute: 'Bar Saƙon Tuna',
      yourName: 'Sunan ka',
      writeMessage: 'Rubuta saƙon tunawa...',
      submit: 'Aika Saƙon Tunawa',
      aiMonologue: 'Jawabin AI na Tunawa',
      generateSpeech: 'Samar da Jawabin Tunawa',
      selectLanguage: 'Harshe'
    },
    sw: {
      title: 'John O. Smith',
      dates: 'Agosti 4, 1952 – Desemba 1, 2023',
      location: 'Atlanta, GA',
      lifeStory: 'Historia ya Maisha',
      memorialFund: 'Mfuko wa Kumbukumbu',
      tributes: 'Ushuhuda',
      lightCandle: 'Washa Taa',
      donate: 'Toa Mchango',
      postTribute: 'Andika Ushuhuda',
      yourName: 'Jina lako',
      writeMessage: 'Andika ujumbe wako wa ushuhuda...',
      submit: 'Tuma Ushuhuda',
      aiMonologue: 'Hotuba ya AI ya Kumbukumbu',
      generateSpeech: 'Tengeneza Hotuba ya Kumbukumbu',
      selectLanguage: 'Lugha'
    }
  };

  const t = languages[currentLang];

  const handleLightCandle = () => {
    setCandleCount(prev => prev + 1);
  };

  const handleSubmitTribute = (e) => {
    e.preventDefault();
    if (tributeName.trim() && tributeMessage.trim()) {
      setTributes([
        { name: tributeName, message: tributeMessage, time: 'Just now' },
        ...tributes
      ]);
      setTributeName('');
      setTributeMessage('');
      setShowTributeForm(false);
    }
  };

  const generateAIMonologue = async () => {
    setShowAIMonologue(true);
    // This would integrate with OpenAI API in a real implementation
    // For now, we'll show a placeholder
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header with Language Selector */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-amber-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-serif text-amber-900">Transitioned.Life</div>
          <select 
            value={currentLang} 
            onChange={(e) => setCurrentLang(e.target.value)}
            className="bg-white border border-amber-300 rounded px-3 py-1 text-amber-800"
          >
            <option value="en">🇺🇸 English</option>
            <option value="ha">🇳🇬 Hausa</option>
            <option value="sw">🇹🇿 Kiswahili</option>
          </select>
        </div>
      </header>

      {/* Cover Image */}
      <div className="h-64 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl text-white font-serif">
            JS
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-serif text-amber-900 mb-2">{t.title}</h1>
            <p className="text-lg text-amber-700 mb-2">{t.dates}</p>
            <p className="text-amber-600 mb-4">📍 {t.location}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button 
                onClick={handleLightCandle}
                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🕯️ {t.lightCandle} ({candleCount} lit)
              </button>
              <button 
                onClick={() => setShowTributeForm(!showTributeForm)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300"
              >
                💬 {t.postTribute}
              </button>
            </div>
          </div>
        </div>

        {/* Tribute Form */}
        {showTributeForm && (
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <h3 className="text-xl font-serif text-amber-900 mb-4">{t.postTribute}</h3>
            <form onSubmit={handleSubmitTribute} className="space-y-4">
              <input
                type="text"
                placeholder={t.yourName}
                value={tributeName}
                onChange={(e) => setTributeName(e.target.value)}
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <textarea
                placeholder={t.writeMessage}
                value={tributeMessage}
                onChange={(e) => setTributeMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors"
                >
                  {t.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setShowTributeForm(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Life Story */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">❤️ {t.lifeStory}</h2>
              <p className="text-amber-800 leading-relaxed font-serif text-lg">
                John was a father, teacher, and jazz lover who lived a life of joy, service, and laughter. 
                He loved gardening, community events, and spending time with his grandchildren. His warm 
                smile and generous spirit touched the lives of countless students and community members 
                throughout his 34-year teaching career at Roosevelt Elementary School.
              </p>
              
              {/* Timeline */}
              <div className="mt-8">
                <h3 className="text-xl font-serif text-amber-900 mb-4">📅 Life Timeline</h3>
                <div className="space-y-3">
                  {[
                    { year: '1952', event: 'Born in Atlanta, Georgia' },
                    { year: '1974', event: 'Graduated from University of Georgia' },
                    { year: '1976', event: 'Started teaching at Roosevelt Elementary' },
                    { year: '1980', event: 'Married his beloved wife, Margaret' },
                    { year: '2010', event: 'Retired after 34 years of teaching' },
                    { year: '2023', event: 'Passed away peacefully surrounded by family' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold min-w-16 text-center">
                        {item.year}
                      </span>
                      <p className="text-amber-800 flex-1">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">📸 Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center justify-center text-amber-700 font-serif">
                    Photo {i}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Monologue Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">🤖 {t.aiMonologue}</h2>
              <p className="text-amber-700 mb-4">
                Generate a personalized memorial speech using AI based on John's life story and tributes.
              </p>
              <button
                onClick={generateAIMonologue}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-colors mb-4"
              >
                ✨ {t.generateSpeech}
              </button>
              
              {showAIMonologue && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Generated Memorial Speech:</h4>
                  <p className="text-purple-800 italic leading-relaxed">
                    "We gather today to remember John O. Smith, a man whose life was a testament to the power of 
                    education, love, and community service. For 34 years, John shaped young minds at Roosevelt 
                    Elementary School, teaching not just lessons from books, but lessons of curiosity, kindness, 
                    and joy. His love for jazz music filled his home with melody, just as his love for his family 
                    and students filled their hearts with warmth. John's garden was a reflection of his nurturing 
                    spirit - he planted seeds of knowledge in his students and seeds of love in his family, 
                    watching both bloom into something beautiful. Though we mourn his passing, we celebrate a 
                    life well-lived, a legacy of laughter, and the countless lives he touched with his generous spirit."
                  </p>
                  <p className="text-sm text-purple-600 mt-2">
                    <em>This memorial speech was generated using AI based on John's life story and the tributes shared by loved ones.</em>
                  </p>
                </div>
              )}
            </div>

            {/* Tributes */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-serif text-amber-900 mb-4">💬 {t.tributes}</h2>
              <div className="space-y-4">
                {tributes.map((tribute, index) => (
                  <div key={index} className="border-b border-amber-200 pb-4 last:border-b-0">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {tribute.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-amber-900">{tribute.name}</h4>
                          <span className="text-xs text-amber-600">• {tribute.time}</span>
                        </div>
                        <p className="text-amber-800 font-serif">{tribute.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Memorial Fund */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-amber-900 mb-4">💰 {t.memorialFund}</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-amber-900">$3,620</div>
                <div className="text-sm text-amber-600">raised of $5,000 goal</div>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-4 mb-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-4 rounded-full transition-all duration-1000 ease-out" 
                  style={{width: '72.4%'}}
                ></div>
              </div>
              <div className="text-center text-sm text-amber-700 mb-4">
                72% of goal reached
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors">
                ❤️ {t.donate}
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-serif text-amber-900 mb-4">🔔 Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-amber-700">
                  <span className="text-amber-500">🕯️</span>
                  <span>3 candles lit today</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700">
                  <span className="text-green-500">💰</span>
                  <span>$150 donated by Maria</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700">
                  <span className="text-blue-500">💬</span>
                  <span>New tribute from Sarah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-amber-900 text-amber-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-serif text-lg mb-2">In loving memory of John O. Smith</p>
          <p className="text-amber-300">A life well-lived, a legacy of love</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

