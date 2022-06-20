import { RelatedNodeEdge } from "../type";
export function addClickListener(
  cy: any,
  setTypeId: Function,
  relatedNodeEdge: RelatedNodeEdge,
  setNeighbors: Function
): void {
  cy.on("click", "node", function () {
    setTypeId({ type: "node", id: this.data("id") });

    let neighbors: Array<string> = relatedNodeEdge[this.data("id")];
    neighbors.push(this.data("id"));
    setNeighbors(neighbors);
  });

  cy.on("click", "edge", function () {
    setTypeId({ type: "edge", id: this.data("id") });

    let neighbors: Array<string> = [
      this.data("id"),
      this.data("source"),
      this.data("target"),
    ];
    setNeighbors(neighbors);
  });
}
