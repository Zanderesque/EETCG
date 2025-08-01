# Elite Enterprise Transformation Consulting Group Website

## Project Overview

This repository contains the source code for the Elite Enterprise Transformation Consulting Group website (https://eetconsultinggroup.com/), built using Next.js. The website is designed to project a professional, modern, and client-focused image for a black, female-owned consulting firm based in Beech Island, South Carolina, specializing in Project Management, Program Management, Strategic Planning, Data & Analytics Consulting, Vendor Management, and AI Consulting.

## Project Structure

```
/
├── app/                      # Next.js App Router directory
│   ├── about/                # About page
│   ├── consultants/          # Consultants listing page
│   │   ├── [id]/             # Dynamic consultant profile pages
│   │   │   └── page.tsx      # Individual consultant profile template
│   │   └── page.tsx          # Main consultants listing page
│   ├── services/             # Services pages
│   │   ├── program-management/
│   │   ├── project-management/
│   │   ├── strategic-planning/
│   │   └── page.tsx          # Main services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── Footer.tsx            # Site footer component
│   └── Navbar.tsx            # Navigation bar component
├── consultants/              # Consultant markdown content
│   ├── about-carla.md        # Carla's bio content
│   ├── about-jessica.md      # Jessica's bio content
│   └── about-zander.md       # Zander's bio content
├── public/                   # Static assets
│   └── images/               # Image assets
│       └── consultants/      # Consultant profile images
├── .next/                    # Next.js build output (generated)
├── node_modules/             # Dependencies (generated)
├── next-env.d.ts             # TypeScript declarations for Next.js
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── wrangler.toml             # Cloudflare Workers configuration
└── tsconfig.json             # TypeScript configuration
```

## Website Objectives

- **Professional Aesthetic**: The website should convey trust, expertise, and professionalism through a clean, modern design with a polished user interface.
- **Mobile First**: Design with a mobile-first approach to ensure optimal experience on smartphones before scaling up to larger screens.
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile) to ensure accessibility and usability.
- **Dynamic Content**: Include a page with dynamic loading of consultant profiles, showcasing their names, photos, bios, and areas of specialization.
- **SEO Optimization**: Leverage Next.js features like server-side rendering (SSR) and static site generation (SSG) for better search engine visibility.
- **Client Engagement**: Provide clear calls-to-action (CTAs) for scheduling consultations, contacting the team, and learning about services.

## Design Guidelines

### Color Scheme

- **Primary Colors**: Deep Navy Blue (#1A3C5A) for trust and professionalism, Gold (#D4A017) for elegance and success.
- **Secondary Colors**: White (#FFFFFF) for clean backgrounds, Light Gray (#F5F6F5) for subtle contrasts.
- **Accent Colors**: Soft Teal (#4DB6AC) for highlights and CTAs to add a modern touch.

### Typography

- **Primary Font**: Montserrat (Bold for headings, Regular for body) for a modern, professional look.
- **Secondary Font**: Open Sans for secondary text and captions, ensuring readability.
- **Font Sizes**:
  - Headings (h1): 36px (desktop), 28px (mobile)
  - Subheadings (h2-h3): 24px–18px
  - Body Text: 16px
  - Captions: 14px

### Layout

- **Header**: Fixed navigation bar with logo (left), menu items (Home, About, Services, Consultants, Contact), and a prominent CTA button ("Schedule a Consultation").
- **Footer**: Contains company logo, contact info (email, phone), social media links, and quick links to key pages.
- **Hero Section**: Full-width banner with a high-quality image of a professional setting, overlay text like "Transform Your Business with Elite Expertise," and a CTA button.
- **Section Spacing**: Consistent padding (40px desktop, 20px mobile) and margins for a clean, uncluttered look.

## Key Pages

### Home:
- Hero section with a bold tagline and CTA.
- Highlights section showcasing stats (e.g., 100+ Completed Projects, 99+ Satisfied Clients, 25+ Team Members).
- Brief overview of services with icons and short descriptions.
- Testimonials slider for client feedback.

### About:
- Company mission, vision, and values.
- Highlight black, female-owned identity and Beech Island roots.
- Team overview with a link to the Consultants page.

### Services:
- Detailed sections for each service: Project Management, Program Management, Strategic Planning, Data & Analytics Consulting, Vendor Management, AI Consulting.
- Each section includes a description, benefits, and a case study or example (if available).

### Consultants:
- Dynamic grid layout displaying consultant profiles (name, photo, bio, specialization).
- Data fetched from a JSON file or API (e.g., `/api/consultants`) for dynamic loading.
- Filterable by specialization (e.g., Project Management, AI Consulting) using a dropdown or buttons.
- Each profile card includes a hover effect and a "Learn More" link to a modal or dedicated page.

### Contact:
- Form for inquiries (name, email, message, optional phone number).
- Map embed showing Augusta, GA, service area.
- Contact details (email, phone) and 24/7 availability note.

## Technical Requirements

### Framework
- **Next.js**: Use Next.js 14 (App Router) for server-side rendering, static site generation, and API routes.
- **React**: Leverage React components for reusable UI elements (e.g., ConsultantCard, ServiceCard).

### Styling
- **Tailwind CSS**: Use Tailwind for rapid, responsive styling with utility classes.
- **Custom CSS**: Minimal custom CSS for specific components (e.g., hover effects, animations).

### Dynamic Consultant Page
- **Data Source**: Store consultant data in a JSON file (`data/consultants.json`) or a headless CMS (e.g., Contentful) for easy updates.
- **API Route**: Create a Next.js API route (`/api/consultants`) to fetch consultant data.
- **Dynamic Loading**:
  - Use `useEffect` or `getServerSideProps` to fetch consultant data.
  - Implement lazy loading for images to improve performance.
  - Add a loading state (e.g., skeleton cards) while data fetches.
- **Filtering**: Allow users to filter consultants by specialization using a client-side filter or query params.

### Example Consultant Data Structure
```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "photo": "/images/consultants/jane-doe.jpg",
    "bio": "Experienced project manager with over 10 years in tech.",
    "specializations": ["Project Management", "AI Consulting"]
  },
  {
    "id": 2,
    "name": "John Smith",
    "photo": "/images/consultants/john-smith.jpg",
    "bio": "Expert in data analytics and strategic planning.",
    "specializations": ["Data & Analytics Consulting", "Strategic Planning"]
  }
]
```

## Performance
- **Image Optimization**: Use Next.js Image component for automatic image optimization.
- **Lazy Loading**: Apply lazy loading for off-screen content (images, consultant cards).
- **SEO**: Use Next.js Metadata API for dynamic meta tags (title, description) on each page.

## Accessibility
- Ensure WCAG 2.1 compliance (e.g., alt text for images, keyboard navigation).
- Use semantic HTML and ARIA labels for screen readers.

## Development Setup

### Install Dependencies:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
npm run start
```

## Deployment

This website is deployed using Cloudflare Pages with the OpenNext adapter for Next.js applications. The deployment process uses the following workflow:

1. Code is pushed to the GitHub repository
2. Cloudflare Pages automatically triggers a build using the configured build settings
3. The OpenNext adapter optimizes the Next.js application for deployment on Cloudflare's edge network

### Build and Deploy Commands

The project uses the following scripts for building and deploying:

```bash
# Local development
npm run dev

# Build for production
npm run opennext:build

# Deploy to Cloudflare
npm run opennext:deploy
```

For more detailed information about the deployment process, see the [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) document.

## Future Enhancements
- Add a blog section for thought leadership content.
- Integrate a scheduling tool (e.g., Calendly) for consultation bookings.
- Implement analytics (e.g., Google Analytics) to track user engagement.

## Contact
For questions or contributions, contact the development team at dev@eetconsultinggroup.com.