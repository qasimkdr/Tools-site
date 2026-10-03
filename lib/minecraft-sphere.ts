export type SphereModel={diameter:number;mode:'solid'|'hollow';layers:[number,number][][];blocks:number};
export function generateSphere(diameter:number,mode:'solid'|'hollow'):SphereModel{
 if(!Number.isInteger(diameter)||diameter<1||diameter>64||!['solid','hollow'].includes(mode))throw Error('Choose an integer diameter from 1–64 blocks and solid or hollow mode.');
 const center=(diameter-1)/2,radiusSquared=(diameter/2)**2;
 const inside=(x:number,y:number,z:number)=>(x-center)**2+(y-center)**2+(z-center)**2<=radiusSquared;
 const offsets=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
 const layers:[number,number][][]=Array.from({length:diameter},()=>[]);let blocks=0;
 for(let y=0;y<diameter;y++)for(let z=0;z<diameter;z++)for(let x=0;x<diameter;x++)if(inside(x,y,z)&&(mode==='solid'||offsets.some(([dx,dy,dz])=>!inside(x+dx,y+dy,z+dz)))){layers[y].push([x,z]);blocks++;}
 return{diameter,mode,layers,blocks};
}
export function sphereCsv(model:SphereModel){return 'x,y,z\n'+model.layers.flatMap((cells,y)=>cells.map(([x,z])=>`${x},${y},${z}`)).join('\n')+'\n';}
