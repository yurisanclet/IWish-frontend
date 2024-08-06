export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface BaseResponse<T> {
  status: boolean;
  data: T;
  errors: string[];
}
