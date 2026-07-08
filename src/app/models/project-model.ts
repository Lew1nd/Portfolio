export interface Project{
    id:number;
    name:string;
    type:string;
    image:string;
    status:"Finished" | "In-progress" | "Paused" | "Archived";
    route:string;
}