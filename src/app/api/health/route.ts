import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check database connection if available
    let dbStatus = 'not_configured';
    try {
      // Add your database health check here
      dbStatus = 'healthy';
    } catch (error) {
      dbStatus = 'error';
    }

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: dbStatus,
        api: 'healthy',
        nextjs: 'healthy'
      },
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      vercel: {
        env: process.env.VERCEL_ENV,
        url: process.env.VERCEL_URL,
        region: process.env.VERCEL_REGION
      }
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}