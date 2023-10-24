import Card from "@/components/ui/Card";
import React, { useRef, useState } from "react";

const NewFlashcard = () => {
  const [validInput, setValidInput] = useState(true);
  const [newCardFormIsOpen, setNewCardFormIsOpen] = useState(true);
  const termInputRef = useRef<HTMLInputElement>(null);
  const definitionInputRef = useRef<HTMLInputElement>(null);

  interface FormDataType {
    term: string;
    definition: string;
  }
  let formData: FormDataType = { term: "", definition: "" };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      termInputRef.current?.value.trim().length === 0 ||
      definitionInputRef?.current?.value.trim().length === 0
    ) {
      setValidInput(false);
      return;
    } else {
      formData.term = termInputRef?.current?.value || "";
      formData.definition = definitionInputRef?.current?.value || "";
      console.log(formData);
      setValidInput(true);
    }
  };

  return (
    <div>
      {(newCardFormIsOpen && (
        <Card label="New Flashcard" className="">
          <form onSubmit={submitHandler} className="flex flex-col gap-5">
            <h2 className="font-bold text-zinc-300 text-2xl">Add Card</h2>
            <div className="grid grid-cols-12">
              <div
                className={`${
                  validInput && "invisible"
                } text-red-400 font-normal col-span-11`}
              >
                Input fields cannot be empty!
              </div>
              <button
                type="button"
                className="text-zinc-300 col-span-1"
                onClick={() => setNewCardFormIsOpen(false)}
              >
                X
              </button>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-zinc-300"
              >
                Term
              </label>
              <input
                type="text"
                required
                id="term"
                ref={termInputRef}
                placeholder="Type the term here..."
                className="block w-full ring-1 ring-inset ring-customBorderColor placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 p-2 text-sm bg-customDarkNavigation text-customColor rounded"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-zinc-300"
              >
                Definition
              </label>
              <input
                type="text"
                required
                id="definition"
                ref={definitionInputRef}
                placeholder="Type the definition here..."
                className="block w-full ring-1 ring-inset ring-customBorderColor placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 p-2 text-sm bg-customDarkNavigation text-customColor rounded"
              />
            </div>
            <button
              type="submit"
              className="button primary w-full text-customColor border border-solid border-customColorBrand bg-customColorBrand inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
            >
              Save
            </button>
          </form>
        </Card>
      )) || (
        <button
          onClick={() => setNewCardFormIsOpen(true)}
          className="my-3 mx-auto justify-center text-customColor bg-customColorBrand flex  text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
        >
          Add new card
        </button>
      )}
    </div>
  );
};

export default NewFlashcard;
