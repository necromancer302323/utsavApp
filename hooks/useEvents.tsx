export interface Events {
  url: string;
  name: string;
  time:string;
  location:string;
  details:string;
  Day:number
}

export function useEvents(): Events[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/4va0Y1ZFSreDfc7OETN1Ew",
      name: "skull",
      time:"10:00-11:30",
      location:"Assembly area 1",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:1
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ScAgMQSbTvS4oWXOa7Mttg",
      name: "flower",
      time:"9:00-10:00",
      location:"skating rink",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:1
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/E1Xng6YZSiq58tnmgOCG1w",
      name: "Potrate",
      time:"11:30-12:15",
      location:"room no 302",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:2
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/wh-xGfckSVu2znesoqOE-g",
      name: "anime",
      time:"10:00-11:30",
      location:"Assembly area 1",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:2
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/ClG9d6toRIWz2hOvm59XlA",
      name: "sunset",
      time:"8:00-8:45",
      location:"Assembly area 2",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:3
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/qRbZv1tCSB-LishYn3vVKQ",
      name: "Revolution",
      time:"12:30-1:00",
      location:"skatink rink",
      details:"hjavdjgaksdjhgakygsdkaghjsydfgajgdjahgdjhagsdjh",
      Day:2
    },
  ];
}

export function useDay1Events(){
  const events=useEvents()
  return events.filter((events)=>events.Day==1)
}

export function useDay2Events(){
  const events=useEvents()
  return events.filter((events)=>events.Day==2)
}
export function useDay3Events(){
  const events=useEvents()
  return events.filter((events)=>events.Day==3)
}
