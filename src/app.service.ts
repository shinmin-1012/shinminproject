import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<string> {
    try {
      const host = 'http://my-app-api.default.svc.cluster.local:80';
      const localhost = 'http://localhost:3000/user/';
      console.log(localhost);
      console.log(host);
      const response = await firstValueFrom(
        this.httpService.get(localhost), // Correct URL
      );
      return response.data; // Return the response data
    } catch (error) {
      // Log the error for debugging
      console.error('Error fetching data:', error.message);
      throw new Error('Error fetching data');
    }
  }
}
