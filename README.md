# Play Tech - Electronics Repair Website

A modern, responsive website for Play Tech Electronics - Mumbai's trusted electronics repair service since 2010.

## 🚀 Features

- **Modern Design**: Clean, tech-inspired design with vibrant colors
- **Responsive**: Fully mobile and tablet friendly
- **Animations**: Smooth scroll-based animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Images**: Pexels (stock photos)

## 📱 Pages

1. **Home**: Hero section, featured services, testimonials, CTA
2. **Services**: Complete list of repair services with categories
3. **About**: Company history, team, tools & equipment
4. **Contact**: Contact form, business info, embedded map

## 🎨 Design Features

- **Theme**: Bright, vibrant & tech-inspired
- **Typography**: Inter font family for modern readability
- **Colors**: Primary blue, accent green, with comprehensive color system
- **Animations**: 
  - Sticky navbar with scroll transitions
  - Hero fade-in and scale effects
  - Scroll-triggered animations
  - Floating WhatsApp button

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playtech-electronics-repair
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── components/           # Reusable components
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── Footer.tsx       # Footer component
│   └── ...              # Other components
├── public/              # Static assets
└── README.md           # This file
```

## 🎯 Key Components

- **Navbar**: Sticky navigation with scroll effects
- **Hero**: Animated hero section with CTA buttons
- **FeaturedServices**: Service cards with hover effects
- **WhyChooseUs**: Feature highlights with animations
- **Testimonials**: Customer reviews with ratings
- **WhatsAppFloat**: Floating WhatsApp button
- **PoweredBy**: CRODLIN Technology attribution

## 📞 Business Information

- **Name**: Play Tech Electronics
- **Location**: Chembur East, Mumbai
- **Since**: 2010
- **Rating**: 4.7/5 stars (511+ reviews)
- **Specialization**: Apple computer repairs, mobile phones, tablets
- **Features**: Fast turnaround, competitive pricing, skilled technicians

## 🎨 Customization

### Colors
The color system is defined in `tailwind.config.js`:
- Primary: Blue shades
- Accent: Green shades  
- Tech: Gray shades

### Animations
Framer Motion animations are configured in individual components with:
- Scroll-triggered animations
- Hover effects
- Page transitions
- Loading states

### Content
Update business information in:
- Component files for text content
- `app/layout.tsx` for meta tags
- Contact information throughout components

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## 📈 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size with tree shaking
- Efficient animations with Framer Motion

## 🔧 Development

### Adding New Pages

1. Create new directory in `app/`
2. Add `page.tsx` and `layout.tsx` if needed
3. Update navigation in `components/Navbar.tsx`

### Adding New Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Follow existing patterns for animations
4. Ensure responsive design

## 📝 License

This project is created for Play Tech Electronics. All rights reserved.

## 🤝 Credits

- **Design & Development**: CRODLIN Technology
- **Images**: Pexels (stock photos)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter)

## 📞 Support

For technical support or customization requests, contact CRODLIN Technology.

---

**Play Tech Electronics** - Mumbai's Most Trusted Electronics Repair Service Since 2010