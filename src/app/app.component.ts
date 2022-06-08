import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  users: any[] = [];
  avatar: string | undefined;

  constructor(private userService: UserService, private titleService: Title) {
    this.titleService.setTitle("Ng Test");
  }

  ngOnInit(): void {
    this.userService.fetchAll().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  delete(): void {
    this.userService.deleteUser(1).subscribe();
  }
}
