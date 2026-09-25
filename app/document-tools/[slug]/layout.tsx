import {FileToolEditorial} from "@/components/FileToolEditorial";
import {getDocumentTool} from "@/lib/document-tools";
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const {slug}=await params,t=getDocumentTool(slug);return <>{children}{t&&<FileToolEditorial tool={t} area="document"/>}</>}
