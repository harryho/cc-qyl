import  {UserService} from "./services";

(function () {
  const userService = new UserService();

  const groupFilter= document.getElementById("groupFilter");

  if(groupFilter!==null){

    groupFilter.onchange = (e) =>{
      console.log(e);
      console.log(e.currentTarget);
      if ((e.currentTarget as any ).value !== undefined )
        userService.renderList((e.currentTarget as any ).value)
    }
  }

  const roleFilter= document.getElementById("roleFilter");

  if(roleFilter!==null){

    roleFilter.onchange = (e) =>{
      // TODO
    }
  }
  
  setTimeout(() => { userService.renderList() }, 200);
})()
