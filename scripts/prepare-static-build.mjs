// Avoid validating or deploying stale exports when the route catalog changes.
// These fixed paths contain generated files only; source and user uploads are untouched.
import {lstat,rm} from 'node:fs/promises';
import {join} from 'node:path';
for(const name of ['.next','out']){
 const directory=join(process.cwd(),name);
 try{const stat=await lstat(directory);if(stat.isSymbolicLink()||!stat.isDirectory())throw new Error(`Refusing unexpected generated-output path: ${name}`);await rm(directory,{recursive:true,force:true,maxRetries:5,retryDelay:200});}
 catch(error){if(error.code!=='ENOENT')throw error;}
}
