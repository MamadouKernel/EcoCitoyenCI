import { Component, OnInit } from "@angular/core";
import { routeMapping } from "../../utils/routeMapping";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.less"],
})
export class AdminLayoutComponent implements OnInit {
  isCollapsed = false;
  readonly routeMapping = routeMapping;
  home = routeMapping.home;
  date: string = "";
  heure: string = "";
  fullName: string = "Konate Mamadou";

  ngOnInit(): void {
    setInterval(() => {
      const d: Date = new Date();
      this.date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }, 1);
  }

  constructor() {}
}
