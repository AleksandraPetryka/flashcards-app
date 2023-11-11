"use client"
import data from "@/data/cards.json";
import Card from "@/components/ui/Card";
import Image from "next/image";
import editIcon from "@/assets/edit_icon.svg";
import deleteIcon from "@/assets/delete_icon.svg";
import NewFlashcard from "@/components/ui/NewFlashcard";

export default function CreateFlashcardForm() {


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
          <Card label="Title" className="">
            <input
              placeholder="Type the title here..."
              className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded ring-inset ring-1 ring-customBorderColor focus:ring-inset  sm:text-sm sm:leading-6 placeholder:text-gray-400"
            />
          </Card>
          <Card label="Description" className="">
            <input
              placeholder="Type the description here..."
              className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded ring-inset ring-1 ring-customBorderColor focus:ring-inset  sm:text-sm sm:leading-6 placeholder:text-gray-400"
            />
          </Card>
        </div>
          {/*<NewFlashcard />*/}
          <div className="block text-zinc-300">
          <div className="grid lg:gap-5 lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 grid-cols-1 gap-5 box-border">
            {flashcards}
          </div>
        </div>
      </div>
    );
}