
enum definedColourCode{
    Red = "\x1b[31m",
    Green = "\x1b[32m", //Green Is used to Show the Pass Status
    Yellow = "\x1b[33m", // Yellow is used to show the Compare the Data
    Blue = "\x1b[34m",
    reset = "\x1b[0m",
   
}

export class ColourCode {
  public static colourBlue(text: string): string {
    return `${definedColourCode.Blue}${text}${definedColourCode.reset}`;
  }

  public static colourYellow(text: string): string {
    return `${definedColourCode.Yellow}${text}${definedColourCode.reset}`;
  }

  public static colourGreen(text: string): string {
    return `${definedColourCode.Green}${text}${definedColourCode.reset}`;
  }

  public static colourRed(text: string): string {
    return `${definedColourCode.Red}${text}${definedColourCode.reset}`;
  }
}





