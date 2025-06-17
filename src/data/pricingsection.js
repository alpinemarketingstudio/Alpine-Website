const pricingData = {
  photoVideoProduction: [
    {
      title: "Content Starter",
      price: 120,
      description: "Perfect for cafes, shops, salons, or personal brands who need monthly content.",
      features: [
        "2-hour local shoot",
        "10 professionally edited photos",
        "1 Instagram reel (15–30 sec)",
        "Basic lighting & editing",
        "Delivery in 3 days",
      ],
    },
    {
      title: "Content Pro",
      price: 300,
      description: "Great for small businesses or Airbnb hosts wanting regular content.",
      features: [
        "4-hour shoot",
        "30 edited photos (interior, product, lifestyle)",
        "2–3 Instagram reels (15–60 sec)",
        "1-minute cinematic promo video",
        "Light direction & scripting",
      ],
    },
    {
      title: "Content Deluxe",
      price: 600,
      description: "For hotels, restaurants, or events looking to build an online presence.",
      features: [
        "Full-day shoot (up to 8 hours)",
        "60+ edited photos",
        "5 reels (multi-platform optimized)",
        "2-minute business promo with logo animation",
        "Basic drone footage included",
        "Licensed music",
      ],
      extras: [
        { label: "Drone upgrade", price: 100 },
        { label: "Extra reel", price: 50 },
        { label: "Voiceover in Italian/English", price: 80 },
        { label: "Scriptwriting & direction", price: 100 },
      ],
    },
  ],
  websiteDesign: [
    {
      title: "Basic Website",
      price: 350,
      description: "Ideal for freelancers, local shops, or artists.",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, Gallery)",
        "Mobile responsive",
        "Custom layout (no templates)",
        "Contact form + map integration",
        "Fast loading",
        "WhatsApp/chat integration",
      ],
    },
    {
      title: "Business Website",
      price: 800,
      description: "For small companies, salons, or travel businesses.",
      features: [
        "6–10 pages",
        "WordPress or Shopify CMS",
        "Blog/portfolio setup",
        "Basic SEO setup (keywords, meta tags)",
        "Product list or service menu",
        "Instagram feed integration",
      ],
    },
    {
      title: "Custom Web App",
      price: 1200,
      description: "For startups, service providers, or e-commerce businesses.",
      features: [
        "Built with MERN/Next.js",
        "Custom dashboard & user panel",
        "Booking, reservation, or CRM integration",
        "Stripe/PayPal payments",
        "Admin management panel",
        "UI/UX tailored design",
        "API integrations available",
      ],
      extras: [
        { label: "Hosting & Domain Setup", price: 80, note: "per year" },
        { label: "Monthly Maintenance", price: 40 },
        { label: "SEO Optimization Package", price: 150 },
        { label: "Google Analytics & Search Console Setup", price: 0 },
      ],
    },
  ],
  digitalMarketing: [
    {
      title: "Social Starter",
      price: 150,
      description: "Designed for individuals, artists, or small shops.",
      features: [
        "8 Instagram/Facebook posts per month",
        "2 Reels (filmed or animated)",
        "Content calendar",
        "Captions in Italian & English",
        "Scheduling & publishing",
      ],
    },
    {
      title: "Social Pro",
      price: 300,
      description: "For restaurants, boutiques, and small brands.",
      features: [
        "12 posts/month",
        "4 reels or TikToks",
        "Facebook + Instagram management",
        "Hashtag strategy + insights",
        "Basic ad support (1 campaign setup)",
        "Comments & DMs managed (optional)",
      ],
    },
    {
      title: "Social Premium",
      price: 550,
      description: "For businesses looking to grow online.",
      features: [
        "20+ high-quality posts (photos/videos/graphics)",
        "8 Reels (trending format)",
        "Strategy creation + ad testing",
        "Google & Meta ad setup",
        "Monthly reports with growth insights",
        "Performance-based content optimization",
      ],
      adsPricing: [
        { label: "Meta Ad Setup", price: 50 },
        { label: "Google Ads Setup", price: 75 },
        { label: "Monthly Ad Management", pricePercent: 10, minPrice: 50 },
      ],
    },
  ],
  graphicDesignBranding: [
    {
      title: "Logo Kit",
      price: 120,
      features: [
        "2 logo concepts + 1 final",
        "All file formats (PNG, SVG, PDF)",
        "Brand colors & fonts",
        "Logo usage guide",
      ],
    },
    {
      title: "Brand Starter",
      price: 250,
      features: [
        "Logo + Color Palette + Fonts",
        "Social media templates (Instagram grid & stories)",
        "Business card design",
        "Cover image/banner for Facebook or LinkedIn",
      ],
    },
    {
      title: "Full Brand Pack",
      price: 450,
      features: [
        "Logo + Visual Identity System",
        "Brand Guidebook (typography, usage, visuals)",
        "Business cards, brochures, IG highlights, and product labels",
        "Mockups for social media, website, and packaging",
      ],
      extras: [
        { label: "Menu/Brochure Design", price: 40 },
        { label: "Instagram Highlights Set", price: 30 },
        { label: "Poster / Flyer", price: 50 },
        { label: "Business Card Design (print-ready)", price: 40 },
      ],
    },
  ],
  softwareAppDevelopment: [
    {
      title: "MVP App",
      price: 1000,
      description: "For startups and small tools.",
      features: [
        "Built using MERN stack or Firebase",
        "User login/register",
        "Dashboard, data storage",
        "Email/password + social login",
        "Mobile-first responsive design",
      ],
    },
    {
      title: "Business Platform",
      price: 2000,
      description: "For service businesses, CRM tools, or POS systems.",
      features: [
        "Custom dashboard",
        "Admin + user roles",
        "Booking, product, or service management",
        "Payment integration (Stripe, PayPal)",
        "API integration",
        "Notification/email system",
      ],
    },
    {
      title: "Enterprise App",
      price: 3500,
      description: "Advanced full-stack web app",
      features: [
        "Secure backend, analytics dashboard",
        "Admin & staff access levels",
        "Monthly maintenance & deployment included",
        "Server setup (AWS/Vercel) included",
      ],
      supportPlans: [
        { label: "Monthly Support & Maintenance", price: 250 },
        { label: "Hourly Dev Work", price: 30, unit: "hour" },
      ],
    },
  ],
  comboDeals: [
    {
      title: "Startup Kit",
      price: 800,
      description: "Logo + Basic Website + 10 Product Photos + 1 Instagram Reel",
    },
    {
      title: "SMB Booster",
      price: 1200,
      description: "Business Website + Brand Starter Pack + 1 Month Social Content",
    },
    {
      title: "All-In-One Digital",
      price: 2000,
      description: "Website + Brand Identity + Content Day (photos/videos) + 2 Month Marketing & Ads",
    },
  ],
};

export default pricingData;
