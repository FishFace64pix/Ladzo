import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendBookingEmails } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(1),
  email: z.string().email(),
  industry: z.string().min(1),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    await sendBookingEmails(result.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API]', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
