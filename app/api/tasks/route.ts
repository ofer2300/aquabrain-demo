import { NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, use a database
let tasks: { id: number; title: string; completed: boolean; createdAt: string }[] = [];
let nextId = 1;

export async function GET() {
  return NextResponse.json({
    tasks,
    count: tasks.length,
    status: 'success',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title } = body;

    if (!title || typeof title !== 'string') {
      return NextResponse.json(
        {
          message: 'חובה לספק כותרת למשימה',
          status: 'error',
        },
        { status: 400 }
      );
    }

    const newTask = {
      id: nextId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    return NextResponse.json(
      {
        message: 'המשימה נוספה בהצלחה',
        task: newTask,
        status: 'success',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'שגיאה ביצירת המשימה',
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          message: 'חובה לספק מזהה משימה',
          status: 'error',
        },
        { status: 400 }
      );
    }

    const taskId = parseInt(id);
    const initialLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== taskId);

    if (tasks.length === initialLength) {
      return NextResponse.json(
        {
          message: 'המשימה לא נמצאה',
          status: 'error',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'המשימה נמחקה בהצלחה',
      status: 'success',
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'שגיאה במחיקת המשימה',
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 'error',
      },
      { status: 500 }
    );
  }
}
