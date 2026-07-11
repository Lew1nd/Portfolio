export interface ProjectCard{
    id:number;
    name:string;
    type: "personal" | "profesional" | "academic" | "freelance";
    image:string;
    status: "finished" | "in-progress" | "paused" | "archived";
    slug:string;
}