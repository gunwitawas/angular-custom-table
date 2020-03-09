import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-genarate-table",
  templateUrl: "./genarate-table.component.html",
  styleUrls: ["./genarate-table.component.css"]
})
export class GenarateTableComponent implements OnInit {
  newTable = [];
  isEditTable = true;
  isGenarateTable = false;
  public customTable: any = {
    field: [],
    column: [[]]
  };

  constructor() {}

  ngOnInit() {}

  addFeild() {
    this.customTable.field.push("");
    this.customTable.column.map((data, index) => {
      this.customTable.column[index].push("");
    });
  }

  addColumn() {
    const column = [];
    this.customTable.field.map(() => column.push(""));
    this.customTable.column.push(column);
  }

  onKeyin(property: string, event: any, idFeild: number, idColumn?: number) {
    this.newTable.push([
      property,
      event.srcElement.value,
      idFeild,
      idColumn || 0
    ]);
  }

  genarateTable() {
    this.isGenarateTable = true;
    this.newTable.map(res => {
      this.genarate(res[0], res[1], res[2], res[3]);
    });
  }

  genarate(property: string, event: any, idFeild: number, idColumn?: number) {
    if (property === "field") {
      this.customTable[property][idFeild] = event;
    } else {
      this.customTable[property][idFeild][idColumn] = event;
    }
  }

  onEdit() {
    this.isGenarateTable = false;
  }
}
