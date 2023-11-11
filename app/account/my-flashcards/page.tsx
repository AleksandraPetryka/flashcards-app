import FlashcardList from "@/app/account/my-flashcards/flashcards-list";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../database.types'

export default async function MyFlashcards() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })

    const {
        data: { session },
    } = await supabase.auth.getSession()

  return <FlashcardList session={session}/>
}