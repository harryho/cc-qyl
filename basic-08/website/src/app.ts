import "./scss/app.scss";

import { UserService } from "./services";

(function () {
  const userService = new UserService();

  const groupFilter = document.getElementById("groupFilter");

  if (groupFilter !== null) {
    groupFilter.onchange = function (e: Event) {
      if (e.currentTarget && (<any>e.currentTarget).value !== undefined)
        userService.renderList((<any>e.currentTarget).value)
    }
  }

  const roleFilter = document.getElementById("roleFilter");

  if (roleFilter !== null) {

    roleFilter.onchange = (e) => {
      // TODO
    }
  }

  setTimeout(() => { userService.renderList() }, 200);
})()
