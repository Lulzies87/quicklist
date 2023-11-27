export type Level = {
    Name: string;
    LevelNumber: number;
    Description: string;
    ScoreToAchieve: number;
  };
  
  export let levels: Level[] = [
    { Name: "The New Guy",
    LevelNumber: 1,
    Description: "Just getting started, still learning the ropes.",
    ScoreToAchieve: -Infinity
  },
];