export function isCustomerGroup(group: any)
    : boolean {
    return group === "CUSTOMER"
}

export function isCustomer(user: TsApp.User.Any)
    : user is Customer {
    return isCustomerGroup(user.userGroup)
}

export function isStaffGroup(group: any)
    : boolean {
    return group === "STAFF"
}

export function isStaff(user: TsApp.User.Any)
    : user is Staff {
    return isStaffGroup(user.userGroup)
}
