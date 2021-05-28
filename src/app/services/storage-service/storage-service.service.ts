import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key: string, value: any) {
    await this.checkInitializationOfStorage();    
    this._storage.set(key, value);
  }

  public async get(key: string) {
    await this.checkInitializationOfStorage();    
    return await this._storage?.get(key);
  }

  private async checkInitializationOfStorage() {
    if(!this._storage)
      await this.init();
  }
}