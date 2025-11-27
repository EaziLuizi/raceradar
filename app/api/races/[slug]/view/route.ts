// app/api/races/[slug]/view/route.ts
import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const supabase = await createClient();
    
    // Increment view count using SQL to avoid race conditions
    const { data, error } = await supabase.rpc('increment_race_view', {
      race_slug: params.slug
    });

    if (error) {
      console.error('Error incrementing view count:', error);
      return NextResponse.json(
        { error: 'Failed to increment view count' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in view tracking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}