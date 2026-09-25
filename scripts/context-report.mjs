import {existsSync,readdirSync,readFileSync} from "node:fs";
import {execFileSync} from "node:child_process";
import {join} from "node:path";

const root=process.cwd();
const git=(args)=>{try{return execFileSync("git",args,{cwd:root,encoding:"utf8"}).trim()}catch{return"unavailable"}};
const countDirectories=(path)=>existsSync(path)?readdirSync(path,{withFileTypes:true}).filter(entry=>entry.isDirectory()).length:null;
const collections={pakistan:countDirectories(join(root,"out","pk","tools")),global:countDirectories(join(root,"out","tools")),generators:countDirectories(join(root,"out","generator-tools")),pdf:countDirectories(join(root,"out","pdf-tools")),documents:countDirectories(join(root,"out","document-tools")),images:countDirectories(join(root,"out","image-tools")),media:countDirectories(join(root,"out","media-tools")),guides:countDirectories(join(root,"out","guides"))};
const packageJson=JSON.parse(readFileSync(join(root,"package.json"),"utf8"));
const report={project:packageJson.name,branch:git(["branch","--show-current"]),commit:git(["log","-1","--pretty=%h %s"]),workingTree:git(["status","--short"])||"clean",exportAvailable:existsSync(join(root,"out")),collections,note:existsSync(join(root,"out"))?"Counts come from the latest local static export.":"Run npm run build when exact generated-page counts are required."};
console.log(JSON.stringify(report,null,2));

