import Card from "@/components/ui/Card";
import Image from "next/image";
import editIcon from "@/assets/edit_icon.svg";
import deleteIcon from "@/assets/delete_icon.svg";

export default async function CreateFlashcard() {
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
              className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded border border-customBorderColor border-solid disabled:border-customSecondary"
          />
        </Card>
        <Card label="Description" className="">
          <input
              className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded border border-customBorderColor border-solid disabled:border-customSecondary"
          />
        </Card>
      </div>
      <div className="block text-zinc-300">
        <div className="grid lg:gap-5 lg:grid-cols-3 sm:grid-cols-2 sm:gap-3 grid-cols-1 gap-5 box-border">
          <Card label="1" className="">
            <div className="flex flex-col gap-5">
            <p className="font-medium tracking-wide">atherosclerosis</p>
            <p  className="font-normal">hardening of the arteries</p>
              </div>
            <div className="flex justify-end">
              <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="edit" src={editIcon} className="fill-zinc-50"/>
              </button>
              <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="delete" src={deleteIcon}/>
              </button>
            </div>
          </Card>
          <Card label="2" className="">
            <p className="font-medium tracking-wide">pneumonia</p>
            <p className="text-justify">lung inflammation</p>
            <div className="flex justify-end">
              <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="edit" src={editIcon}/>
              </button>
              <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="delete" src={deleteIcon}/>
              </button>
            </div>
          </Card>
          <Card label="3" className="">
            <p className="font-medium tracking-wide">pyrexia</p>
            <p className="text-justify">fever</p>
            <div className="flex justify-end">
              <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="edit" src={editIcon}/>
              </button>
              <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="delete" src={deleteIcon}/>
              </button>
            </div>
          </Card>
          <Card label="4" className="">
            <p className="font-medium tracking-wide">pharyngitis</p>
            <p className="text-justify">sore throat</p>
            <div className="flex justify-end">
              <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="edit" src={editIcon}/>
              </button>
              <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                <Image height={24} width={24} alt="delete" src={deleteIcon}/>
              </button>
            </div>
          </Card>
            <Card label="5" className="">
            <p className="font-medium tracking-wide">myocardial infarction</p>
            <p className="text-justify">heart attack</p>
              <div className="flex justify-end">
                <button type="button" title="Edit" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                  <Image height={24} width={24} alt="edit" src={editIcon}/>
                </button>
                <button type="button" title="Delete" className="w-10 h-10 text-zinc-300 bg-none cursor-pointer flex">
                  <Image height={24} width={24} alt="delete" src={deleteIcon}/>
                </button>
              </div>
            </Card>
            <Card label="6" className="">
              <div className="flex flex-col gap-5">
                <p className="font-medium tracking-wide">exacerbation</p>
                <p className="text-justify">flare-up</p>
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
        </div>
      </div>
    </div>
  );
}
