import {searchEntries} from "@/components/Header";
export const dynamic = "force-static";
export function GET(){return Response.json(searchEntries);}
