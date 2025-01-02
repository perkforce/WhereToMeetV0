import { NextResponse } from 'next/server';
import { Loader } from '@googlemaps/js-api-loader';

export async function POST(request: Request) {
  const { address } = await request.json();
  
  const loader = new Loader({
    apiKey: process.env.GOOGLE_MAPS_API_KEY!,
    libraries: ['places']
  });

  // Implementation coming soon
  return NextResponse.json({ status: 'Not implemented yet' });
} 