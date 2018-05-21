type TODO = any;

/**
 * From https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 * The Diff type is a subtraction operator for string literal types. It relies on:
 *  - T | never = T
 *  - T & never = never
 *  - An object with a string index signature can be indexed with any string.
 */
type StringDiff<T extends string, U extends string> = ({[K in T]: K } &
  {[K in U]: never } & { [K: string]: never })[T];

/**
 * From https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
 * Omits keys in K from object type T
 */
type ObjectOmit<T extends object, K extends keyof T> = Pick<T, StringDiff<keyof T, K>>;

/**
 * Returns a version of type T where all properties which are also in U are optionalized.
 * Useful for makding props with defaults optional in React components.
 * Compare to flow's $Diff<> type: https://flow.org/en/docs/types/utilities/#toc-diff
 */
type ObjectDiff<T extends object, U extends object> = ObjectOmit<T, keyof U & keyof T> &
  {[K in keyof U & keyof T]?: T[K]};

type Diff<T extends string, U extends string> = ({[P in T]: P } &
  {[P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

type PartialDeep<T> = {[P in keyof T]?: PartialDeep<T[P]> };


declare const enum Gender {
  Male = "M",
  Female = "F",
  Unknown = "U"
}

declare const enum Role {
  User = "USER",
  SuperUser = "SUPERUSER",
  Manager = "MANAGER",
  Member = "MEMBER",
  Client = "CLIENT",
}


type WithRole<T> = {
  role: Role
}

// export 
declare namespace TsApp {


  namespace User {

    type UserGroup = "CUSTOMER" | "STAFF"
    interface Common {
      title: string;
      name: string;
      email: string;
      mobile: string;
      gender: Gender;
      userGroup?: UserGroup
    }

    interface Customer extends Common {
      userGroup: "CUSTOMER",
      credit: number;
      role?: Role.Client | Role.Member
    }

    interface Staff extends Common {
      userGroup: "STAFF",
      role?: Role.Manager | Role.User | Role.SuperUser
    }

    type Any = Common | Common & WithRole<Role> | Customer | Staff ;
  }

}

type User = TsApp.User.Any ;
type Customer = TsApp.User.Customer
type Staff = TsApp.User.Staff
type UserGroup = TsApp.User.UserGroup;
