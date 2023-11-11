"use client";
import { useState, useCallback, useEffect } from "react";
import { Database } from "@/app/database.types";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Card from "@/components/ui/Card";
import Image from "next/image";
import editIcon from "@/assets/edit_icon.svg";
import deleteIcon from "@/assets/delete_icon.svg";

export default function FlashcardList({ session }: {session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState<string | null>(null);
  const [definition, setDefinition] = useState<string | null>(null);
  const [pickedId, setPickedId] = useState<string>("")
    const [flashcards, setFlashcards] = useState([])
  const [pickedSet, setPickedSet] = useState<string>("");
  const user = session?.user;

  // useEffect(() => {
  //   const getPickedId = async () => {
  //     if (user?.id) {
  //       const { data } = await supabase.from("sets").select("description");
  //       console.log({data});
  //     }
  //   }
  //   getPickedId();
  // }, []);

    const getPickedId = useCallback(async () => {
        try {
            console.log(pickedSet)
            setLoading(true);
            const userId = user?.id;
            if (userId) {
                let {data } = await supabase
                    .from("sets")
                    .select(`id`)
                    .eq("title", pickedSet)
                    .single();
                if (data?.id) {
                    setPickedId(data.id);
                }
            }
        } catch (error) {
            alert("Error loading user data!");
        } finally {
            setLoading(false);
        }
    }, [user, supabase, pickedSet]);



    const getFlashcard = useCallback(async () => {
        try {
        setLoading(true);

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
    }, [user, supabase, pickedId]);

    useEffect(() => {
        getPickedId()
        getFlashcard()
        console.log(flashcards);
    }, [user, getPickedId, getFlashcard, pickedSet, setPickedSet]);


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

  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-center">
      <Card label='' className="" key=''>
        <button className="flex p-2 text-zinc-300 bg-customBorderColor rounded" onClick={() => setPickedSet("Pharmaceutical English")}>{loading ? "Loading ..." : "Pharmacy Flashcards"}</button>
          <button className="flex p-2 text-zinc-300 bg-customBorderColor rounded" onClick={() => setPickedSet("Espanol A2")}>{loading ? "Loading ..." : "Espanol A2"}</button>
          <div className="flex flex-col gap-5">
            <p className="font-medium tracking-wide">{term}</p>
            <p className="font-normal">{definition}</p>
        </div>
      </Card>
        {flashcardsDisplay}
    </div>
  );
}
