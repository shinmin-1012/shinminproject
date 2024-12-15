import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHello(): Promise<string> {
    try {
      const response = await firstValueFrom(
        this.httpService.get('http://localhost:3000/'), // Correct URL
      );
      return response.data; // Return the response data
    } catch (error) {
      // Log the error for debugging
      console.error('Error fetching data:', error.message);
      throw new Error('Error fetching data');
    }
  }
}
