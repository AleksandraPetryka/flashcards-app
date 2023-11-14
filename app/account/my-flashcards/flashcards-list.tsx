"use client";
import { useState, useCallback, useEffect } from "react";
import { Database } from "@/app/database.types";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Card from "@/components/ui/Card";
import Image from "next/image";
import editIcon from "@/assets/edit_icon.svg";
import deleteIcon from "@/assets/delete_icon.svg";
import NewFlashcard from "@/components/ui/NewFlashcard";

export default function FlashcardList({ session }: {session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [pickedId, setPickedId] = useState<string>("")
    const [flashcards, setFlashcards] = useState([])
    const [sets, setSets] = useState<{ id: string | undefined, title: string | null }[]>([{title: "Loading...", id: "1"}])
  const user = session?.user;


    const getTitles = useCallback(async () => {
        try {
            setLoading(true);
            const userId = user?.id;
            if (userId) {
                let {data } = await supabase
                    .from("sets")
                    .select(`id, title`)
                    .eq("user_id", userId)
                if (data) {
                    setSets(data);
                    console.log(sets)
                }
            }
        } catch (error) {
            alert("Error loading user data!");
        } finally {
            setLoading(false);
        }
    }, [user, supabase, pickedId]);



    const getFlashcard = useCallback(async () => {
        try {
        setLoading(true);
        console.log(pickedId)
        const userId = user?.id;
        if (userId) {
            let { data } = await supabase
            .from("cards")
            .select(`term, definition, id`)
            .eq("set_id", pickedId)
            if (data) {
                console.log(data)
                // @ts-ignore
                setFlashcards(data)
            }
        }
        } catch (error) {
        alert("Error loading user data!");
        } finally {
        setLoading(false);
        }
    }, [user, supabase, pickedId, setPickedId]);

    useEffect(() => {
        getTitles()
        getFlashcard()
        console.log(flashcards);
    }, [user, getFlashcard, pickedId]);


    const flashcardsDisplay = flashcards.map((card: { id: string, term: string, definition: string }) => (
        <Card label={card.id} className="text-zinc-300" key={card.id}>
            <div className="flex flex-col gap-5">
                <p className="font-medium tracking-wide">{card.term}</p>
                <p className="font-normal">{card.definition}</p>
            </div>
            <div className="flex justify-end">
                <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                    <Image height={24} width={24} alt="edit" src={editIcon}/>
                </button>
                <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                    <Image height={24} width={24} alt="delete" src={deleteIcon}/>
                </button>
            </div>
        </Card>
    ));

    useEffect(() => {

    }, );
    const setsDisplay = sets.map((set: { id: string | undefined, title: string | null }) => (
      <button
        key={`${set} button`}
        className="flex p-2 text-zinc-300 bg-customBorderColor rounded"
        onClick={() => setPickedId(set.id as string)}
      >
        {loading ? "Loading ..." : set.title}
      </button>
    ));

  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-center">
      <Card label="" className="" key="">
        {setsDisplay}
          {pickedId && <NewFlashcard />}
      </Card>
      {flashcardsDisplay}
    </div>
  );
}
