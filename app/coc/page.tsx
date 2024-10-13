import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - ServerlessDays",
};

export default async function CodeOfConduct() {
  return redirect("/coc/en");
}
