// Package Imports
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "X-Requested-With": "XMLHttpRequest",
};

export default abstract class BaseService {
  constructor(private baseURL: string) {
  }

  private instance: AxiosInstance | null = null;

  protected async request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.request(config);
  }

  protected async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.get<T, R>(url, config);
  }

  protected async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.post<T, R>(url, data, config);
  }

  protected async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.put<T, R>(url, data, config);
  }

  protected async patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.patch<T, R>(url, data, config);
  }

  protected async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return await this.http.delete<T, R>(url, config);
  }

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  private initHttp(): AxiosInstance {
    const http = axios.create({
      baseURL: this.baseURL,
      headers,
       withCredentials: true,
    });

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return response;
      }
    );

    this.instance = http;
    return http;
  }

  private handleError(error: any) {
    const status = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }
    return Promise.reject(error);
  }
}
