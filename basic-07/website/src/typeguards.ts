export function isClient(user : TsApp.User ) 
: user is TsApp.Customer   {
    return user.role !== undefined  &&
    ( user.role === Role.Client|| user.role === Role.Member )
}
