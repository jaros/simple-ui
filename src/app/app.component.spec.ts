import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { MessageService } from "./message.service";
import { MessagesComponent } from "./messages/messages.component";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      let messageServiceStub = { messages: [] };
      TestBed.configureTestingModule({
        declarations: [AppComponent, MessagesComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: MessageService, useValue: messageServiceStub }]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("D-Bool app");
    })
  );
  it(
    "should render title in a h1 tag",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("h1").textContent).toContain(
        "Welcome to D-Bool app!"
      );
    })
  );
});
