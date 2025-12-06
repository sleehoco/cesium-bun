# Cesium Cyber - Bun Version

A high-performance cybersecurity application built with Next.js and Bun runtime.

## 🚀 Bun Integration

This version has been converted to use [Bun](https://bun.sh) as the JavaScript runtime for improved performance and faster development.

## Tech Stack

- **Runtime:** Bun (JavaScript runtime)
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Vercel Postgres + Drizzle ORM
- **Auth:** Supabase Auth
- **State Management:** TanStack Query (React Query)
- **Testing:** Vitest + Playwright
- **Deployment:** Vercel (with Bun runtime)

## 📋 Prerequisites

- [Bun](https://bun.sh/docs/installation) v1.0.0 or later
- Node.js (for some compatibility packages)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/sleehoco/cesium-bun.git
cd cesium-bun
```

2. Install dependencies with Bun:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
- Supabase URL and keys
- Vercel Postgres connection strings
- API keys for AI services

4. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Public pages group
│   ├── (dashboard)/       # Protected pages group
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── error.tsx         # Error boundary
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Shared components
│   ├── marketing/        # Marketing components
│   └── dashboard/        # Dashboard components
├── lib/
│   ├── db/              # Database schema and queries
│   ├── auth/            # Authentication utilities
│   ├── utils.ts         # Utility functions
│   └── env.ts           # Environment validation
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## 📦 Available Scripts

### Development
```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
```

### Testing
```bash
bun test             # Run unit tests with Vitest
bun run test:ui      # Run tests with UI
bun run test:e2e     # Run end-to-end tests with Playwright
```

### Database
```bash
bun run db:generate  # Generate migrations
bun run db:migrate   # Run migrations
bun run db:push      # Push schema to database
bun run db:studio    # Open Drizzle Studio
```

## Features

### Implemented
- ✅ TypeScript strict mode
- ✅ Environment variable validation
- ✅ Error boundaries
- ✅ Loading states
- ✅ 404 page
- ✅ SEO optimization
- ✅ Security headers
- ✅ Testing infrastructure
- ✅ Responsive design
- ✅ Dark mode support

### Planned
- [ ] Privacy consent system
- [ ] Browser fingerprinting
- [ ] Blog system
- [ ] Admin dashboard
- [ ] Client dashboard
- [ ] Contact forms
- [ ] Newsletter management
- [ ] Policy generator
- [ ] Security scanner

## Environment Variables

Required environment variables (see `.env.local.example`):

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `POSTGRES_URL` - Vercel Postgres connection URL
- `NEXT_PUBLIC_APP_URL` - Application URL

Optional:
- `OPENAI_API_KEY` - OpenAI API key for AI features
- `ELEVENLABS_API_KEY` - ElevenLabs API key for text-to-speech
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID

## 🚀 Deployment

This project is optimized for deployment on platforms that support Bun:

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy with Bun runtime enabled

```bash
# Or use Vercel CLI
vercel
```

### Other Platforms

- Railway
- DigitalOcean App Platform
- Any platform with Docker support

### Manual Deployment

```bash
bun run build
bun run start
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Write tests
4. Run linting and tests
5. Submit a pull request

## 🔧 Configuration

The project uses `bun.json` instead of `package.json` for dependency management. All scripts have been updated to use `bun run` commands.

## 📚 Features

- **Threat Intelligence**: Advanced threat analysis tools
- **Real-time Monitoring**: Live security dashboard
- **AI Integration**: Powered by OpenAI and other AI providers
- **Modern UI**: Built with Tailwind CSS and Radix UI
- **TypeScript**: Full type safety
- **Testing**: Comprehensive test suite with Vitest and Playwright
- **Bun Performance**: Faster package installation and runtime

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `bun test`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Note**: This version leverages Bun's performance improvements including faster package installation, quicker startup times, and reduced memory usage.

