export type ElementType = "node" | "edge" | "";
export type TypeId = { type: ElementType; id: string };
export type Node = { 
  data: { 
    id: string,
    label: string
  } 
};
export type Edge = {
  data: {
    id: string;
    weight: number;
    source: string;
    target: string;
    label: string;
  };
};
export type Nodes = Array<Node>;
export type Edges = Array<Edge>;
export type EdgeInfo = {
  id: string;
  name: string;
  source: string;
  target: string;
  timestamp: string;
  executionId: string;
  taskId: string;
};
export type NodeInfo = { digitalIdentity: string };
export type Event = {
  "timestamp": string,
  "sequence": number,
  "sourceDigitalIdentity": string,
  "targetDigitalIdentity": string,
  "label": {
      "id": string,
      "name": string
  }
}
// {
//   dataProcessIdentityContext: {
//     permanentIdentity: string;
//     revision: number;
//     name: string;
//   };
//   logicIdentityContext: {
//     permanentIdentity: string;
//     revision: number;
//     name: string;
//   };
//   executionId: string;
//   taskId: string;
//   timestamp: string;
//   sequence: number;
//   type: string;
//   meta: string;
//   sourceDigitalIdentity: string;
//   targetDigitalIdentity: string;
//   label: {
//     id: string;
//     name: string;
//   };
// };
export type Message = {
  'data':{
      'events': Array<Event>
  }
};
// {
//   _status: number;
//   data: {
//     took: number;
//     total: number;
//     count: number;
//     events: Array<Event>;
//     aggregation: null;
//   };
// };
export type Dataset = { (key: string): Event } | {};
export type RelatedNodeEdge = { (key: string): Array<string> } | {};

// export type Json = {
//   'data':{
//       'events': []
//   }
// }