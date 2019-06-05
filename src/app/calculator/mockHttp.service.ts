import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockHttpService<T> {
    constructor() { }
    private response: T = null;

    public setDefaultResponse(response: T) {
        this.response = response;
    }
    public async get(url: string): Promise<T> {
        console.log('Sending http request to the server!');
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.response), 1000);
        });
    }
}
