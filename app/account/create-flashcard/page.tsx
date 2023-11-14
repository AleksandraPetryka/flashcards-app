import CreateFlashcardForm from "@/app/account/create-flashcard/create-flashcard-form";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../../database.types'

export default async function CreateFlashcard() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })

    const {
        data: { session },
    } = await supabase.auth.getSession()

  return <CreateFlashcardForm session={session} />
}
