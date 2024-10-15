export interface Events {
  url: string;
  name: string;
  time:string;
  location:string;
  details:string;
}

export function useEvents(): Events[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/4va0Y1ZFSreDfc7OETN1Ew",
      name: "skull",
      time:"10:00-11:30",
      location:"Assembly area 1",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ScAgMQSbTvS4oWXOa7Mttg",
      name: "flower",
      time:"9:00-10:00",
      location:"skating rink",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/E1Xng6YZSiq58tnmgOCG1w",
      name: "Potrate",
      time:"11:30-12:15",
      location:"room no 302",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/wh-xGfckSVu2znesoqOE-g",
      name: "anime",
      time:"10:00-11:30",
      location:"Assembly area 1",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ClG9d6toRIWz2hOvm59XlA",
      name: "sunset",
      time:"8:00-8:45",
      location:"Assembly area 2",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/qRbZv1tCSB-LishYn3vVKQ",
      name: "Revolution",
      time:"12:30-1:00",
      location:"skatink rink",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh"
    },
  ];
}
