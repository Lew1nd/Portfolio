export interface ProjectCard{
    id:number;
    name:string;
    type: 'personal' | 'profesional' | 'academic' | 'freelance';
    image:string;
    status: 'in-progress' | 'finished' | 'paused' | 'archived';
    slug:string;
}