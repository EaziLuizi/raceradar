import { createClient } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import RaceForm from "../../RaceForm";

export default async function EditRacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: race, error } = await supabase
    .from("races")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !race) {
    notFound();
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Edit Race</h2>
      <div className="bg-white rounded-lg shadow p-8">
        <RaceForm race={race} mode="edit" />
      </div>
    </div>
  );
}
