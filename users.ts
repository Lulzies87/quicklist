export type User = {
    Name: string;
    Nickname: string;
    Password: string;
    Level: number;
    XP: number;
    About: string;
    Avatar: string;
    Projects: projects;
  };
  
  export let users: User[] = [];