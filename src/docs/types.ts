export class ApiResponse<T = any> {
  public timestamp: string = "number";
  public path: string = "string";
  public error: string = "boolean";
  public status: string = "number";
  public code: string = "string";
  public response: T;

  constructor(schema: T){
    this.response = schema;
  }
}