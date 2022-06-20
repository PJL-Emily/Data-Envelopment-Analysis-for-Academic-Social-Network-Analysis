import { Node, Edge, Message, Dataset, RelatedNodeEdge } from "../type";
import { parseLabelName } from "./parse_label_name";

export function getNodesEdgesDataSet(
  message: Message,
  options: { sort: boolean }
): [Array<Node>, Array<Edge>, Dataset, RelatedNodeEdge] {
  let nodes: Array<Node> = [];
  let edges: Array<Edge> = [];
  let dataset: Dataset = {};
  let relatedNodeEdge: RelatedNodeEdge = {};

  for (let i: number = 0; i < message.data.events.length; i++) {
    let edgeId: string =
      message.data.events[i].timestamp +
      "_" +
      message.data.events[i].sequence.toString();
    let edgeSource: string = message.data.events[i].sourceDigitalIdentity;
    let edgeTarget: string = message.data.events[i].targetDigitalIdentity;
    let d: Date = new Date(message.data.events[i].timestamp);
    const MAX_SEQUENCE: number = 1000;
    let edgeWeight: number =
      d.getTime() * MAX_SEQUENCE + message.data.events[i].sequence; // 假設 sequence < 1000
    edges.push({
      data: {
        id: edgeId,
        source: edgeSource,
        target: edgeTarget,
        weight: edgeWeight,
        label: parseLabelName(message.data.events[i].label.name, 'Edge'),
      },
    });

    let ifSourceNodeExist: boolean = false;
    let ifTargetNodeExist: boolean = false;
    for (let nIdx: number = 0; nIdx < nodes.length; nIdx++) {
      if (nodes[nIdx].data.id === edgeSource) {
        ifSourceNodeExist = true;
      }
      if (nodes[nIdx].data.id === edgeTarget) {
        ifTargetNodeExist = true;
      }
      if (ifSourceNodeExist && ifTargetNodeExist) {
        break;
      }
    }
    if (!ifSourceNodeExist) {
      nodes.push({
        data: { 
          id: edgeSource,
          label: parseLabelName(edgeSource, 'Node')
        },
      });
    }
    if (!ifTargetNodeExist) {
      nodes.push({
        data: { 
          id: edgeTarget,
          label: parseLabelName(edgeTarget, 'Node')
        }
      });
    }

    dataset[edgeId] = message.data.events[i];

    if (!relatedNodeEdge[edgeSource]) {
      relatedNodeEdge[edgeSource] = [edgeId, edgeTarget];
    } else {
      relatedNodeEdge[edgeSource].push(edgeId);
      relatedNodeEdge[edgeSource].push(edgeTarget);
    }

    if (!relatedNodeEdge[edgeTarget]) {
      relatedNodeEdge[edgeTarget] = [edgeId, edgeSource];
    } else {
      relatedNodeEdge[edgeTarget].push(edgeId);
      relatedNodeEdge[edgeTarget].push(edgeSource);
    }
  }

  if (options && options.sort) {
    edges.sort(function (edge1: Edge, edge2: Edge): number {
      return edge1.data.weight - edge2.data.weight;
    });
    console.log(edges);
  }

  return [nodes, edges, dataset, relatedNodeEdge];
}
