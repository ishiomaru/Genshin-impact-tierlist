export const tiers: string[];
export const presets: {name:string;weights:number[]}[];
export function weighted(scores:number[],weights:number[]):number;
export function tierOf(code:number):string;
