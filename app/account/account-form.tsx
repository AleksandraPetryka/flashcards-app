"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "../database.types";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Avatar from "./avatar";
import Card from "@/components/ui/Card";
export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);
  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const userId = user?.id;
      if (userId) {
        let {data, error, status} = await supabase
            .from("profiles")
            .select(`full_name, username, website, avatar_url`)
            .eq("id", user?.id)
            .single();

        if (error && status !== 406) {
          throw error;
        }
        if (data) {
          setFullname(data.full_name);
          setUsername(data.username);
          setWebsite(data.website);
          setAvatarUrl(data.avatar_url);
        }
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile()
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    fullname: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className="flex flex-col gap-10 lg:flex-row justify-center">
      <Card label="My profile" className="lg:w-full lg:max-w-3xl">
      <Avatar
        uid={user?.id || ""}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ fullname, username, website, avatar_url: url });
        }}
      />
      <div className=" flex basis-3/4 gap-5 flex-col bg-customDarkNavigation pr-4 pb-2">
        <div>
          <label
            htmlFor="email"
            className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            value={session?.user.email}
            className="w-full p-2 text-sm bg-customDarkNavigation text-customSecondary rounded border border-customBorderColor border-solid"
          />
        </div>
        <div>
          <label
            htmlFor="fullName"
            className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullname || ""}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded border border-customBorderColor border-solid disabled:border-customSecondary"
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded border border-customBorderColor border-solid disabled:border-customSecondary"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block my-1.5 mx-0 text-customSecondary text-s uppercase"
          >
            Website
          </label>
          <input
            id="website"
            type="url"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full p-2 text-sm bg-customDarkNavigation text-customColor rounded border border-customBorderColor border-solid disabled:border-customSecondary"
          />
        </div>

      <div className="">
        <button
          className="button primary w-full text-customColor border border-solid border-customColorBrand bg-customColorBrand inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
          onClick={() =>
            updateProfile({ fullname, username, website, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button
            className="button w-full text-customColor border border-solid border-customBorderColor bg-customDarkNavigation inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </div>
      </div>
      </Card>
        <Card label="My flashcards" className="">
          <form action="/account/create-flashcard">
            <button
                className="button primary w-full text-customColor border border-solid border-customColorBrand bg-customColorBrand inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
                type="submit">
                Create flashcard
            </button>
          </form>
          <form action="/account/my-flashcards">
            <button
                className="button primary w-full text-customColor border border-solid border-customColorBrand bg-customColorBrand inline-block text-center rounded px-4 py-2 cursor-pointer font-xs uppercase"
                type="submit">
              My flashcards
            </button>
          </form>
        </Card>
      </div>
  );
}
