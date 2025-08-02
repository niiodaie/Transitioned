import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Candle, 
  MessageCircle, 
  Calendar, 
  MapPin, 
  DollarSign,
  Send,
  Globe,
  Camera,
  Clock
} from 'lucide-react';
import { memorialData, translations, formatDate, calculateAge, formatCurrency } from '../data/memorial.js';

const MemorialPage = () => {
  const { slug } = useParams();
  const [currentLang, setCurrentLang] = useState('en');
  const [candleCount, setCandleCount] = useState(memorialData.candles);
  const [tributeText, setTributeText] = useState('');
  const [tributeName, setTributeName] = useState('');
  const [tributes, setTributes] = useState(memorialData.tributes);
  const [selectedImage, setSelectedImage] = useState(null);

  const t = translations[currentLang];
  const age = calculateAge(memorialData.dob, memorialData.dod);
  const progressPercentage = (memorialData.fundraiser.raised / memorialData.fundraiser.goal) * 100;

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      setCurrentLang(browserLang);
    }
  }, []);

  const handleLightCandle = () => {
    setCandleCount(prev => prev + 1);
    // Add gentle animation or feedback here
  };

  const handleSubmitTribute = (e) => {
    e.preventDefault();
    if (tributeText.trim() && tributeName.trim()) {
      const newTribute = {
        id: tributes.length + 1,
        name: tributeName,
        message: tributeText,
        timestamp: new Date().toISOString(),
        avatar: "/api/placeholder/40/40"
      };
      setTributes([newTribute, ...tributes]);
      setTributeText('');
      setTributeName('');
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return formatDate(timestamp);
  };

  return (
    <div className="memorial-theme min-h-screen bg-background">
      {/* Header with Language Selector */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-lg font-semibold text-memorial-primary">
            Transitioned.Life
          </div>
          <Select value={currentLang} onValueChange={setCurrentLang}>
            <SelectTrigger className="w-40 language-selector">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ha">Hausa</SelectItem>
              <SelectItem value="sw">Kiswahili</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Cover Image Section */}
      <div className="memorial-cover h-64 md:h-80 relative">
        <img 
          src={memorialData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Profile Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
          <img 
            src={memorialData.profileImage}
            alt={memorialData.name}
            className="memorial-profile-img w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
          <div className="text-center md:text-left flex-1">
            <h1 className="memorial-title text-3xl md:text-4xl mb-2 fade-in">
              {memorialData.name}
            </h1>
            <p className="memorial-subtitle text-lg md:text-xl mb-4 fade-in">
              {formatDate(memorialData.dob)} – {formatDate(memorialData.dod)} • {t.age} {age}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span>{memorialData.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button 
                onClick={handleLightCandle}
                className="candle-button px-6 py-3"
                size="lg"
              >
                <Candle className="w-5 h-5 mr-2" />
                {t.lightCandle}
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Candle className="w-4 h-4 text-memorial-gold" />
                <span>{candleCount} {t.candlesLit}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Life Story */}
            <Card className="slide-up">
              <CardHeader>
                <CardTitle className="memorial-title flex items-center gap-2">
                  <Heart className="w-5 h-5 text-memorial-primary" />
                  {t.lifeStory}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="memorial-body text-base leading-relaxed mb-6">
                  {memorialData.bio}
                </p>
                
                {/* Timeline */}
                <div className="mt-8">
                  <h3 className="memorial-subtitle text-xl mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {t.timeline}
                  </h3>
                  <div className="space-y-4">
                    {memorialData.timeline.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <Badge variant="outline" className="min-w-16 text-center">
                          {item.year}
                        </Badge>
                        <p className="memorial-body text-sm flex-1">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photo Gallery */}
            <Card className="slide-up">
              <CardHeader>
                <CardTitle className="memorial-title flex items-center gap-2">
                  <Camera className="w-5 h-5 text-memorial-primary" />
                  {t.photoGallery}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {memorialData.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Memory ${index + 1}`}
                      className="gallery-image w-full h-32 md:h-40 object-cover"
                      onClick={() => setSelectedImage(photo)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tribute Wall */}
            <Card className="slide-up">
              <CardHeader>
                <CardTitle className="memorial-title flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-memorial-primary" />
                  {t.tributes}
                </CardTitle>
                <CardDescription>
                  Share your memories and thoughts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tribute Form */}
                <form onSubmit={handleSubmitTribute} className="mb-6 space-y-4">
                  <Input
                    placeholder={t.yourName}
                    value={tributeName}
                    onChange={(e) => setTributeName(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder={t.writeMessage}
                    value={tributeText}
                    onChange={(e) => setTributeText(e.target.value)}
                    rows={3}
                    required
                  />
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {t.submit}
                  </Button>
                </form>

                <Separator className="my-6" />

                {/* Tributes List */}
                <div className="space-y-4">
                  {tributes.map((tribute) => (
                    <div key={tribute.id} className="tribute-card p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src={tribute.avatar}
                          alt={tribute.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm">{tribute.name}</h4>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatTimeAgo(tribute.timestamp)}
                            </span>
                          </div>
                          <p className="memorial-body text-sm">{tribute.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Fundraiser */}
            <Card className="slide-up">
              <CardHeader>
                <CardTitle className="memorial-title flex items-center gap-2 text-lg">
                  <DollarSign className="w-5 h-5 text-memorial-green" />
                  {t.fundraiser}
                </CardTitle>
                <CardDescription>
                  {memorialData.fundraiser.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t.raised}</span>
                    <span className="font-semibold">
                      {formatCurrency(memorialData.fundraiser.raised)}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="fundraiser-progress h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{Math.round(progressPercentage)}% of {t.goal.toLowerCase()}</span>
                    <span>{formatCurrency(memorialData.fundraiser.goal)}</span>
                  </div>
                </div>
                <Button className="w-full bg-memorial-green hover:bg-memorial-green/90">
                  <Heart className="w-4 h-4 mr-2" />
                  {t.donate}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default MemorialPage;

