import { Nodes, Edges, RelatedNodeEdge } from "../type";
import { addClickListener } from "./add_listener";
import cytoscape from "cytoscape";

export default function Cytoscape(
  nodes_data: Nodes,
  edges_data: Edges,
  relatedNodeEdge: RelatedNodeEdge,
  setTypeId: Function,
  setNeighbor: Function
): any {
  let cy: any = cytoscape({
    container: document.getElementById("cy"),

    boxSelectionEnabled: false,
    autounselectify: true,

    style: [
      {
        selector: "node",
        style: { 
          content: "data(label)",
          color: 'black', 
          "background-color": '#C0C2C4',
          'text-halign':'center',
          'text-valign':'center',
          'width':'80',
          'height':'80',
          "text-wrap": "wrap",
          // "text-max-width": '5',
          // "text-overflow-wrap": "anywhere"
        },
      },
      {
        selector: "edge",
        style: {
          label: "data(label)",
          "curve-style": "bezier",
          "target-arrow-shape": "triangle",
          width: 4,
          "line-color": "#D1D3D5",
          "target-arrow-color": "#D1D3D5",
        },
      },
      {
        selector: ".highlighted",
        style: {
          "background-color": "#87B0D7",
          // "border-color": "rgb(62,168,216)",
          // "border-width": 5,
          "line-color": "#AFE0F0",
          "target-arrow-color": "#AFE0F0",
          "transition-property":
            "background-color, line-color, target-arrow-color",
          "transition-duration": 10,
        },
      },
      {
        selector: ".related_highlighted",
        style: {
          "background-color": "#1E6FBA", 
          "border-color": "#4BBEE4",
          "border-width": 3,
          "font-weight": "bold",
          "transition-property":
            "background-color, line-color, target-arrow-color",
          
        },
      },
      {
        selector: ".click_node",
        style: {
          "background-color": "#1E6FBA", 
          "border-color": "#4BBEE4",
          "border-width": 5,
          "font-weight": "bold",
          // "label-font-weight": "bold",
          "transition-property":
            "background-color, line-color, target-arrow-color",
        },
      },
    ],

    elements: {
      nodes: nodes_data,
      edges: edges_data,
    },

    layout: {
      name: "breadthfirst",
    },
  });
  addClickListener(cy, setTypeId, relatedNodeEdge, setNeighbor);

  let idx: number = 0;
  let nodesHighlighted: Array<string> = [];
  const WAITED_TIME: number = 1200;
  function highlightNextEdge(): any {
    console.log("highlight ", edges_data[idx].data.id);

    cy.getElementById(edges_data[idx].data.id).addClass("highlighted");
    setTimeout(highlightNextNode, WAITED_TIME, "target");
  }

  function highlightNextNode(node_type: "source" | "target"): any {
    if (node_type === "source") {
      let node_id: string = edges_data[idx].data.source;
      if (!nodesHighlighted.includes(node_id)) {
        console.log("highlight ", node_id);
        cy.getElementById(node_id).addClass("highlighted");
        nodesHighlighted.push(node_id);
        setTimeout(highlightNextEdge, WAITED_TIME);
      }
      else{
        highlightNextEdge();
      }
    } else if (node_type === "target") {
      let node_id: string = edges_data[idx].data.target;
      if (!nodesHighlighted.includes(node_id)) {
        console.log("highlight ", node_id);

        cy.getElementById(node_id).addClass("highlighted");
        nodesHighlighted.push(node_id);
        if (idx < edges_data.length - 1) {
          idx++;
          setTimeout(highlightNextNode, WAITED_TIME, "source");
        }
      }
      else if (idx < edges_data.length - 1) {
        idx++;
        highlightNextNode("source");
      }
    }
  }

  // highlightNextNode("source");
  nodes_data.map((node)=>{
    cy.getElementById(node.data.id).addClass("highlighted");
  })
  edges_data.map((edge) => {
    cy.getElementById(edge.data.id).addClass('highlighted')
  })

  return cy;
}
