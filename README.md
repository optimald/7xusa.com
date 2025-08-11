# 7xusa.com - Innovation Champions Platform

A Next.js replica of the 7xusa.com website, featuring a platform for showcasing startups and virtual venture capital activities.

## 🚀 Features

- **Green Sidebar Navigation**: Complete navigation menu with all sections
- **Header with Stats**: START-UPS and VIRTUAL VCs financial displays
- **Sponsor Integration**: Carta and Zendesk sponsor logos
- **Profile Cards**: Horizontal scrollable startup profiles
- **Search Functionality**: Search bar for filtering startups
- **Responsive Design**: Mobile-friendly layout
- **Member Pages**: Dynamic routing for individual member profiles
- **Game Integration**: Virtual Venture Capitalist game section

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript
- **Styling**: Custom CSS (no Tailwind)
- **Icons**: Font Awesome 5.15.1
- **Fonts**: Google Fonts (Open Sans)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── login/               # Login page
│   ├── 7xinformation/      # Information FAQ page
│   ├── fantasy/             # vVC Leaderboard
│   └── members/[slug]/      # Dynamic member profiles
├── components/
│   ├── Header.tsx           # Site header with stats
│   ├── Sidebar.tsx          # Green navigation sidebar
│   ├── SearchBar.tsx        # Search functionality
│   ├── ProfileCards.tsx     # Startup profile cards
│   ├── SponsorLogos.tsx     # Sponsor logos
│   └── Footer.tsx           # Site footer
└── public/
    └── images/              # All site images and avatars
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd 7xusa.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server (kills existing port 3000 processes)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The site uses a custom color palette defined in CSS variables:
- Primary: #007CFF
- Green: #68D391
- Dark: #2D3748
- Background: #1a1a1a

### Adding New Members
To add new startup profiles, edit `src/components/ProfileCards.tsx` and add to the `profiles` array.

## 🌐 Deployment

This project is configured for Vercel deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 🔧 Development Notes

- **Static Components**: All components are static to avoid runtime errors
- **Image Optimization**: Images are served locally from `/public/images/`
- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Performance**: Optimized for fast loading and smooth scrolling

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is a replica of 7xusa.com for development and learning purposes.

## 👨‍💻 Author

**Badger** - badger@slickrockholdings.com

---

*Built with Next.js and ❤️ for the 7x Innovation Champions community* 