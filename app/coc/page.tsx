import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function CodeOfConduct() {
  return redirect("/coc/en");
}