// app/api/login/route.js
import { supabase } from '@/lib/supabaseClient'

export async function POST(request) {
  const { email, password } = await request.json()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 401 })
  }

  return Response.json({ message: 'Login successful', data })
}
