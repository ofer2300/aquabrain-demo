import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'שלום מ-AquaBrain API!',
    timestamp: new Date().toISOString(),
    status: 'success',
    data: {
      version: '1.0.0',
      features: [
        'Next.js 14 API Routes',
        'TypeScript Support',
        'JSON Response',
        'Hebrew RTL Support',
      ],
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      message: 'הנתונים התקבלו בהצלחה',
      receivedData: body,
      timestamp: new Date().toISOString(),
      status: 'success',
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'שגיאה בקריאת הנתונים',
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      },
      { status: 400 }
    );
  }
}
