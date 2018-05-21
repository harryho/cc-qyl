import { isCustomerGroup, isCustomer, isStaff, isStaffGroup } from "../typeguards";

class UserService {
  private roleFilter: Role | undefined;
  private groupFilter: TsApp.User.UserGroup | undefined;
  private users: TsApp.User.Any[] = [];

  constructor() {
    const customers: Customer[] = [
      {
        title: "Mr",
        name: "John",
        email: "abc@john.com",
        mobile: "040370402",
        credit: 536, gender:
          Gender.Male,
        role: Role.Client,
        userGroup: "CUSTOMER"
      },
      {
        title: "Mr",
        name: "Ming",
        email: "abc@john.com",
        mobile: "040370102",
        credit: 436, gender:
          Gender.Female,
        role: Role.Member,
        userGroup: "CUSTOMER"
      }
    ];

    const staffs: Staff[] = [
      {
        title: "Ms",
        name: "Joanna",
        email: "abc@john.com",
        mobile: "040370402",
        gender:
          Gender.Male,
        role: Role.Manager,
        userGroup: "STAFF"
      },
      {
        title: "Ms",
        name: "Jessica",
        email: "abc@john.com",
        mobile: "040370102",
        gender:
          Gender.Female,
        role: Role.User,
        userGroup: "STAFF"
      },
      {
        title: "Ms",
        name: "Julie",
        email: "abc@john.com",
        mobile: "040370102",
        gender:
          Gender.Female,
        role: Role.SuperUser,
        userGroup: "STAFF"
      }
    ];

    this.users.push(...customers)
    this.users.push(...staffs)
  }

  filterByGroup = (user: TsApp.User.Any) => {
  
    if (this.groupFilter !== undefined) {
      if (isCustomerGroup(this.groupFilter)) {
        return isCustomer(user)
      }
      if (isStaffGroup(this.groupFilter)) {
        return isStaff(user)
      }
    }
    return false;
  }

  filterByRole = () => {
   // TODO
  }

  renderList(groupfilter?: UserGroup, roleFilter?: Role) {

    this.groupFilter = groupfilter!==undefined ? groupfilter: this.groupFilter;
    this.roleFilter = roleFilter!==undefined ? roleFilter: this.roleFilter;

    const result = this.users.filter(user => {
      if (this.groupFilter ) {
        return this.filterByGroup(user)
      }
      return true;
    });


    const main = document.getElementById('main')

    if (main !== null) {

      main.innerHTML = "<ul>" + result.map((user:Customer|Staff) =>
        "<li>"
        + [user.name, user.email, user.mobile, user.userGroup, user.role].join(" | "))
        + "</li>"
        + "</ul>"
    }
    console.log(" filtered result : " , result)
  }


}

export { UserService };
