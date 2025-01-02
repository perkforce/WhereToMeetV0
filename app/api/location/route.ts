import { NextResponse } from 'next/server';
import { Loader } from '@googlemaps/js-api-loader';

export async function POST(request: Request) {
  try {
    const { address } = await request.json();
    
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_API_KEY!,
      libraries: ['places']
    });

    const google = await loader.load();
    const geocoder = new google.maps.Geocoder();
    
    const response = await geocoder.geocode({ address });
    
    return NextResponse.json(response.results[0]);
  } catch (error) {
    console.error('Geocoding error:', error);
    return NextResponse.json({ error: 'Failed to geocode address' }, { status: 500 });
  }
} 