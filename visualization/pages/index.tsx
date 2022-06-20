import {
  TypeId,
  Nodes,
  Edges,
  Dataset,
  Message,
  RelatedNodeEdge,
} from "../type";
import React, { ReactElement, useEffect, useState } from "react";
import cytoscape from "../utils/graph";
import fetchData from "../utils/fetch_data";
import { getNodesEdgesDataSet } from "../utils/parse_json";

export default function Home(): ReactElement {
  const [nodes, setNodes] = useState<Nodes>([]);
  const [edges, setEdges] = useState<Edges>([]);
  const [dataset, setDataset] = useState<Dataset>({});
  const [relatedNodeEdge, setRelatedNodeEdge] = useState<RelatedNodeEdge>({});
  const [cy, setCy] = useState<any>(null);
  const [typeId, setTypeId] = useState<TypeId>({ type: "", id: "" });
  const [neighbors, setneighbors] = useState<Array<string>>([]);
  const [executionId, setExecutionId] = useState<string>(""); //
  const [message, setMessage] = useState<Message>(null);
  
  
  useEffect(() => {
    if (neighbors.length > 0) {
      cy.elements().removeClass("related_highlighted");
    }
    neighbors.forEach((neighbor) => {
      cy.getElementById(neighbor).addClass("related_highlighted");
    });
  }, [neighbors]);

  useEffect(() => {
    fetchData(executionId, setMessage);
  }, [executionId]);

  useEffect(() => {
    console.log(message);
    if (message && message.data) {
      let nodesEdgesDataset: [Nodes, Edges, Dataset, RelatedNodeEdge] =
        getNodesEdgesDataSet(message, { sort: true });
      setNodes(nodesEdgesDataset[0]);
      setEdges(nodesEdgesDataset[1]);
      setDataset(nodesEdgesDataset[2]);
      setRelatedNodeEdge(nodesEdgesDataset[3]);
    }
  }, [message]);

  useEffect(() => {
    if (edges.length > 0) {
      let cy_: any = cytoscape(
        nodes,
        edges,
        relatedNodeEdge,
        setTypeId,
        setneighbors
      );
      setCy(cy_);
    }
  }, [nodes, edges, relatedNodeEdge]);

  function inputOnclick(): void {
    var x: string = (
      document.getElementById("execution-id-input") as HTMLInputElement
    ).value;
    setExecutionId(x);
  }

  return (
    <div id="root">
      <div id="cy"></div>
    </div>
  );
}
