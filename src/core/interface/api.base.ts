export interface IApiBase<t> {
    data: t,
    message: string,
    error?: any,
    statusCode: number
}