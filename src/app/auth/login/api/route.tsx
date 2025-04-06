// the route is /api/auth/login
import { loginFormSchema } from "@/app/lib/validations/LoginValidation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    loginFormSchema.parse(await request.json());
    return new NextResponse("It works");
  } catch (err: unknown) {
    // Return error message as response json
    if (err instanceof Error) {
      return new NextResponse(err.message, { status: 400 });
    }
    return new NextResponse("An unknown error occurred", { status: 400 });
  }
}
