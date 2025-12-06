# 🚀 Deploy to Vercel

This guide will help you deploy the Cesium Bun application to Vercel.com with optimal performance and Bun runtime support.

## 📋 Prerequisites

- [Vercel account](https://vercel.com/signup)
- [GitHub repository](https://github.com/sleehoco/cesium-bun)
- Required API keys and services

## 🛠️ Deployment Steps

### 1. **Connect Repository to Vercel**

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository `cesium-bun`
4. Vercel will automatically detect Next.js

### 2. **Configure Project Settings**

#### Framework Settings
- **Framework Preset**: Next.js
- **Root Directory**: `./` (default)
- **Build Command**: `bun install && bun run build`
- **Output Directory**: `.next` (default)
- **Install Command**: `bun install`

#### Environment Variables
Copy from `.env.vercel` template:

##### Required Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=@app_url
```

##### Authentication
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

##### Database (Vercel Postgres)
```bash
POSTGRES_URL=@postgres_url
POSTGRES_PRISMA_URL=@postgres_prisma_url
POSTGRES_URL_NON_POOLING=@postgres_url_non_pooling
```

##### AI Services
```bash
OPENAI_API_KEY=your_openai_api_key
GROQ_API_KEY=your_groq_api_key
TOGETHER_AI_API_KEY=your_together_ai_api_key
```

##### Email
```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

### 3. **Add Database (Optional)**

If you need a PostgreSQL database:

1. In your Vercel project, go to **"Storage"** → **"Create Database"**
2. Select **"Postgres"**
3. **Database Name**: `cesium-db`
4. **Region**: Choose nearest region
5. **Plan**: Free (to start)

Vercel will automatically add the connection strings to your environment variables.

### 4. **Deploy**

Click **"Deploy"** to start deployment.

Vercel will:
1. Clone your repository
2. Install Bun and dependencies
3. Build the Next.js application
4. Deploy to global edge network

## 🔧 Configuration Files

### vercel.json
Optimized configuration with:
- Bun runtime support
- Security headers
- API caching rules
- Health check routing

### .vercelignore
Excludes unnecessary files:
- Development files
- Test artifacts
- Render-specific configs
- Documentation

### /api/health
Health check endpoint for monitoring:
- Service status
- Database connectivity
- Performance metrics
- Environment info

## 📊 Vercel Features

### Preview Deployments
- Automatic preview for every PR
- Shareable preview URLs
- Comment integration with GitHub

### Analytics
- Built-in performance monitoring
- Web Vitals tracking
- User analytics
- Speed Insights

### Edge Functions
- Global CDN deployment
- Automatic scaling
- Edge caching

### Custom Domains
```bash
# Add custom domain in Vercel dashboard
# Update DNS records as instructed
```

## 🚦 Deployment Process

1. **Build Phase** (1-3 minutes)
   - Installs Bun
   - Installs dependencies
   - Builds Next.js application
   - Optimizes for edge

2. **Deploy Phase** (30-60 seconds)
   - Deploys to global edge
   - Configures CDN
   - Sets up monitoring

3. **Live** 🎉
   - Global edge deployment
   - Automatic HTTPS
   - Custom domain ready

## 🔍 Monitoring & Debugging

### Health Checks
Visit `https://your-app.vercel.app/api/health` for service status.

### Logs
- **Build Logs**: In Vercel dashboard
- **Function Logs**: Real-time streaming
- **Error Tracking**: Automatic error capture

### Performance
- **Web Vitals**: Core metrics tracking
- **Speed Insights**: Performance analysis
- **Analytics**: User behavior data

## 🎯 Optimization Tips

### Build Optimization
```json
// Already configured in vercel.json
{
  "buildCommand": "bun install && bun run build",
  "installCommand": "bun install"
}
```

### Caching Strategy
- Static assets cached for 1 year
- API responses cached appropriately
- Image optimization enabled

### Performance
- Edge functions for API routes
- Automatic code splitting
- Image optimization
- Font optimization

## 🔄 CI/CD Integration

### Automatic Deployments
- **Main Branch**: Production deployment
- **Pull Requests**: Preview deployments
- **Custom Branches**: Custom deployments

### GitHub Integration
- Status checks on commits
- Deployment status in PRs
- Comment integration

## 🐛 Troubleshooting

### Build Failures
```bash
# Check build logs in Vercel dashboard
# Verify bun.json dependencies
# Check environment variables
```

### Runtime Errors
```bash
# Check function logs
# Verify API keys
# Check database connection
```

### Performance Issues
```bash
# Check Web Vitals
# Analyze bundle size
# Optimize images
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/frameworks/nextjs)
- [Bun Runtime](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes#bun)
- [Vercel Analytics](https://vercel.com/docs/concepts/analytics)

## 🎛️ Advanced Configuration

### Custom Domains
1. Go to project settings
2. Add custom domain
3. Update DNS records
4. Enable automatic HTTPS

### Environment Branches
```bash
# Production: main branch
# Staging: develop branch  
# Preview: all PR branches
```

### Edge Middleware
```javascript
// middleware.js (if needed)
export function middleware(request) {
  // Custom logic
}
```

---

**Need help?** Check [Vercel Support](https://vercel.com/support) or open an issue in the repository.