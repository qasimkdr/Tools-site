import {FileToolEditorial} from "@/components/FileToolEditorial";
import {getMediaTool} from "@/lib/media-tools";
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{slug:string}>}){const {slug}=await params,t=getMediaTool(slug);return <>{children}{t&&<FileToolEditorial tool={t} area="media"/>}</>}
