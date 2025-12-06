# 🚀 Deploy to Render

This guide will help you deploy the Cesium Bun application to Render.com.

## 📋 Prerequisites

- [Render account](https://render.com/)
- [GitHub repository](https://github.com/sleehoco/cesium-bun)
- Required API keys and services

## 🛠️ Deployment Steps

### 1. **Connect Repository to Render**

1. Log in to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account
4. Select the `cesium-bun` repository

### 2. **Configure Web Service**

#### Basic Settings
- **Name**: `cesium-bun` (or your preferred name)
- **Region**: Choose nearest region
- **Branch**: `main`
- **Runtime**: `Node`
- **Build Command**: `bun install && bun run build`
- **Start Command**: `bun run start`

#### Advanced Settings
- **Health Check Path**: `/api/health`
- **Auto-Deploy**: Yes (for main branch)

### 3. **Set Environment Variables**

Copy the environment variables from `.env.render` to your Render service:

#### Required Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-app-name.onrender.com
```

#### Authentication
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### Database
```bash
POSTGRES_URL=your_postgres_connection_string
```

#### AI Services
```bash
OPENAI_API_KEY=your_openai_api_key
GROQ_API_KEY=your_groq_api_key
TOGETHER_AI_API_KEY=your_together_ai_api_key
```

#### Email
```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

### 4. **Add Database (Optional)**

If you need a PostgreSQL database:

1. Go to **"New +"** → **"PostgreSQL"**
2. **Name**: `cesium-db`
3. **Database Name**: `cesium_db`
4. **User**: `cesium_user`
5. **Plan**: Free (to start)

Once created, add the connection string to your environment variables:
```bash
POSTGRES_URL=postgresql://cesium_user:password@host:5432/cesium_db
```

### 5. **Deploy**

Click **"Create Web Service"** to start deployment.

Render will:
1. Clone your repository
2. Install Bun and dependencies
3. Build the application
4. Start the server

## 🔧 Configuration Files

### render.yaml
Automatically configures your service with:
- Correct build and start commands
- Health checks
- Environment variables template

### build-render.sh
Custom build script that:
- Installs Bun if needed
- Runs type checking and linting
- Builds the application

## 📊 Monitoring

### Health Check
The application includes a health check endpoint at `/api/health`.

### Logs
View deployment and application logs in the Render Dashboard.

### Metrics
Monitor performance in the Render Dashboard metrics section.

## 🚦 Deployment Process

1. **Build Phase** (2-5 minutes)
   - Installs Bun
   - Installs dependencies
   - Runs type checking
   - Builds Next.js application

2. **Start Phase** (1-2 minutes)
   - Starts the production server
   - Health check verification

3. **Live** 🎉
   - Application accessible at your URL

## 🔄 Custom Domain (Optional)

1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Update DNS records as instructed

## 🐛 Troubleshooting

### Build Failures
- Check the build logs in Render Dashboard
- Ensure all environment variables are set
- Verify dependencies in `bun.json`

### Runtime Errors
- Check application logs
- Verify database connection
- Ensure API keys are correct

### Health Check Failures
- Ensure `/api/health` endpoint exists
- Check if the application is running on correct port

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🎯 Best Practices

1. **Environment Variables**: Never commit secrets to Git
2. **Database**: Use connection pooling for production
3. **Monitoring**: Set up alerts for downtime
4. **Backups**: Regular database backups
5. **Updates**: Keep dependencies updated

---

**Need help?** Check the [Render Support](https://render.com/support) or open an issue in the repository.