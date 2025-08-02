import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { FileText, Shield, Zap, Users, Lightbulb, Settings, ChevronRight } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: FileText },
    { id: 'security', title: 'Security', icon: Shield },
    { id: 'performance', title: 'Performance', icon: Zap },
    { id: 'ux', title: 'User Experience', icon: Users },
    { id: 'future', title: 'Future Features', icon: Lightbulb },
    { id: 'development', title: 'Development', icon: Settings }
  ]

  const coreFeatures = [
    {
      title: "Authentication",
      description: "Email/password, phone number, and social logins (Google, Apple). Role-based access (Admin, Contributor, Viewer)."
    },
    {
      title: "Memorial Page",
      description: "Facebook-style pages with customizable info, media gallery, tribute wall, and admin controls."
    },
    {
      title: "Free vs Pro Plan",
      description: "Free: 1 memorial page, 5 photos. Pro: Unlimited media, AI Monologue, fundraising, custom domain."
    },
    {
      title: "Fundraising Widget",
      description: "GoFundMe-style functionality with Stripe integration, progress tracking, and supporter lists."
    },
    {
      title: "AI Monologue",
      description: "AI-generated tributes using OpenAI, with future voice integration via ElevenLabs/D-ID."
    },
    {
      title: "Internationalization",
      description: "Support for 9 languages with auto-detection and manual language selector."
    }
  ]

  const techStack = [
    { category: "Frontend", tech: "React + TailwindCSS" },
    { category: "Backend", tech: "Supabase (PostgreSQL, Auth)" },
    { category: "Payments", tech: "Stripe / LemonSqueezy" },
    { category: "Hosting", tech: "Vercel" },
    { category: "AI", tech: "OpenAI (GPT-4)" },
    { category: "Translations", tech: "i18next + react-i18next" }
  ]

  const securityMeasures = [
    "Strong password policies with bcrypt hashing",
    "App-based MFA (TOTP preferred over SMS)",
    "Rate limiting and account lockout protection",
    "Secure token storage with HTTP-only flags",
    "Granular RBAC permissions",
    "PCI-compliant Stripe integration",
    "Comprehensive audit logging"
  ]

  const performanceOptimizations = [
    "Database indexing for key fields (user_id, memorial_id, tribute_id)",
    "Lazy loading for media content",
    "Image compression (WebP) and video optimization (H.264/H.265)",
    "CDN integration for global content delivery",
    "Asynchronous AI monologue processing",
    "Intelligent caching strategies"
  ]

  const uxEnhancements = [
    "Guided onboarding wizard for memorial creation",
    "Rich text editor for tribute wall",
    "Reply threads for community interaction",
    "Automated and manual content moderation",
    "Customizable PDF Memory Book with preview",
    "Digest emails for low-frequency users"
  ]

  const futureFeatures = [
    "Audio uploads (voice notes, songs)",
    "Group memorials for organizations",
    "Virtual events with RSVP functionality",
    "Private messaging and support groups",
    "AI-powered story timeline generation",
    "WCAG AA accessibility compliance",
    "Cultural sensitivity templates by region"
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">MVP Specification Analysis</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive analysis of Transitioned.Life - a sacred, social space for memorializing loved ones, 
                creating digital memorial pages, sharing tributes, and gathering community support.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Core Features
                </CardTitle>
                <CardDescription>
                  Essential functionality for the MVP platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {coreFeatures.map((feature, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Stack</CardTitle>
                <CardDescription>
                  Modern, scalable technologies chosen for reliability and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {techStack.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">{item.category}</span>
                      <Badge variant="secondary">{item.tech}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Security Considerations</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive security measures for protecting sensitive user data and financial transactions.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Measures
                </CardTitle>
                <CardDescription>
                  Multi-layered security approach based on industry best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Authentication Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The updated specification emphasizes robust authentication protocols with app-based TOTP 
                  (Time-based One-Time Password) as the preferred MFA method, which is more secure than 
                  SMS-based MFA due to SIM swap attack vulnerabilities.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Multi-Factor Authentication</h4>
                    <p className="text-sm">App-based authenticators (Google Authenticator, Authy) or hardware security keys (YubiKey)</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Session Management</h4>
                    <p className="text-sm">HTTP-only flags, secure flags, and automatic expiration on logout</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'performance':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Performance & Scalability</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Strategic optimizations to ensure platform responsiveness and growth capability.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Performance Optimizations
                </CardTitle>
                <CardDescription>
                  Technical strategies for handling growth and maintaining responsiveness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {performanceOptimizations.map((optimization, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{optimization}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Database Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Proper indexing on frequently queried columns (user_id, memorial_id, tribute_id) 
                    significantly speeds up read operations and ensures smooth performance as the database grows.
                  </p>
                  <Badge variant="outline">PostgreSQL + Supabase</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive media optimization including lazy loading, modern compression formats 
                    (WebP, H.264/H.265), and CDN integration for global content delivery.
                  </p>
                  <Badge variant="outline">CDN + Compression</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'ux':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">User Experience Enhancements</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thoughtful design improvements for a compassionate and supportive user journey.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  UX Improvements
                </CardTitle>
                <CardDescription>
                  Features designed to support users through their memorial creation journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uxEnhancements.map((enhancement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{enhancement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Guided Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step wizard with progress indicators and pre-filled suggestions 
                    to reduce cognitive load during memorial creation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rich Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enhanced tribute wall with rich text editing, reply threads, 
                    and community-driven conversations around shared memories.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personalized Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Customizable PDF Memory Books with preview functionality 
                    and digest emails for maintaining engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'future':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Future Features</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Roadmap for long-term platform evolution and enhanced user value.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Planned Enhancements
                </CardTitle>
                <CardDescription>
                  Strategic features for expanding platform capabilities and community engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {futureFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Audio uploads including voice notes and favorite songs add deeply personal 
                    dimensions to memorial pages, allowing users to share spoken memories.
                  </p>
                  <Badge variant="secondary">Audio Integration</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Group memorials, virtual events, and private messaging transform the platform 
                    into a dynamic community hub for collective remembrance and support.
                  </p>
                  <Badge variant="secondary">Social Platform</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'development':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Development Process</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Structured approach to building a robust and maintainable platform.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Development Order
                </CardTitle>
                <CardDescription>
                  Prioritized implementation sequence for efficient development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Auth system (Email, Phone, Google, Apple)",
                    "Memorial page builder (with admin role)",
                    "Tribute wall w/ reply & moderation",
                    "Fundraiser widget (Stripe test mode)",
                    "User dashboard",
                    "AI monologue trigger (stub or working)",
                    "Language detection + selector",
                    "Landing page",
                    "Stripe Pro plan upgrade UI",
                    "Mobile responsiveness polish"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Testing Strategy</h4>
                    <p className="text-sm">Comprehensive unit, integration, and end-to-end testing</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold mb-2">CI/CD Pipeline</h4>
                    <p className="text-sm">Automated build, test, and deployment processes</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Monitoring</h4>
                    <p className="text-sm">Robust logging and infrastructure monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted ${
                          activeSection === section.id 
                            ? 'bg-muted text-foreground border-r-2 border-primary' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {section.title}
                        {activeSection === section.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <ScrollArea className="h-[calc(100vh-4rem)]">
              {renderContent()}
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

