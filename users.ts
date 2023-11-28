import { Level } from "./scoring.js";
 
export type User = {
    Name: string;
    Nickname: string;
    Password: string;
    Level: Level["LevelNumber"];
    XP: number;
    About: string;
    Avatar: string;
    MyProjects: string;
  };
  
  export let users: User[] = [];