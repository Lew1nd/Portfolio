export interface ProjectCard{
    id:number;
    name:string;
    type:string;
    image:string;
    status:"Finished" | "In-progress" | "Paused" | "Archived";
    slug:string;
}