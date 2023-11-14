"use client"
import {FormEvent, useEffect, useState} from "react";
import { Database } from "@/app/database.types";
import { Session, createClientComponentClient} from "@supabase/auth-helpers-nextjs";
import data from "@/data/cards.json";
import Card from "@/components/ui/Card";
import Image from "next/image";
import editIcon from "@/assets/edit_icon.svg";
import deleteIcon from "@/assets/delete_icon.svg";
import NewFlashcard from "@/components/ui/NewFlashcard";


export default function CreateFlashcardForm({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState<string | null>(null)
    const [description, setDescription] = useState<string | null>(null)
    const user = session?.user;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!title || !description) return alert("Please add title and description")
        console.log(title, description)
        const userId = user?.id;
        console.log(userId)
        // @ts-ignore
        let {data, error} = await supabase.rpc('add_set', {description, title, user_id: userId})

        if (error) {
            alert("Error creating set!");
            console.log(error)
        }
        else {
            console.log(data);
            alert("Set created and set's id is returned!");
        }
    }


    const flashcards = data.cards.map((card) => (
        <Card label={card.id.toString()} className="" key={card.id}>
            <div className="flex flex-col gap-5">
                <p className="font-medium tracking-wide">{card.title}</p>
                <p className="font-normal">{card.description}</p>
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
      <div className="md:max-w-6xl mx-auto">
        <div>
          <h1 className="header w-full text-[1.625rem] md:text-[2.5rem] mb-5 text-zinc-300">
            Create your own set
          </h1>
        </div>
        <div>
          <Card label="New Set" className="">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="title"
                  className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Type the title here..."
                  className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded ring-inset ring-1 ring-customBorderColor focus:ring-inset  sm:text-sm sm:leading-6 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Type the description here..."
                  className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded ring-inset ring-1 ring-customBorderColor focus:ring-inset  sm:text-sm sm:leading-6 placeholder:text-gray-400"
                />
              </div>
              <div>
                <button
                  disabled={loading}
                  className="button primary mt-3 mb-1.5 w-full text-customColor border border-solid border-customColorBrand bg-customColorBrand inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
                >
                  Create
                </button>
              </div>
            </form>
          </Card>
        </div>
        <NewFlashcard />
        <div className="block text-zinc-300">
          <div className="grid lg:gap-5 lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 grid-cols-1 gap-5 box-border">
            {flashcards}
          </div>
        </div>
      </div>
    );
}