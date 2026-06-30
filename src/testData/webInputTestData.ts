export const WebInputTestData:webData[] = [
  {
    Scenario:"FirstScenario",
    InputNumber: 23,
    InputText: "Piyush",
    Password: "IncorrectPassword",
  },
  {
    Scenario:"SecondScenario",
    InputNumber: 236,
    InputText: "Jignesh",
    Password: "CorrectPassword",
  },
  {
     Scenario:"ThirdScenario",
    InputNumber: 26,
    InputText: "Manesh",
    Password: "Password",
  },
];

// We Locked the TestData to changed in future with

interface webData{

    Scenario:string;
    InputNumber:number;
    InputText:string;
    Password:string;

}
