export interface Project{
    id:number;
    name:string;
    type:string;
    image:string;
    status:"finished" | "in-progress" | "paused" | "archived";
    route:string;
}