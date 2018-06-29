import { Injectable, Inject } from "@angular/core";
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class LocalStorageService {

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

    save(key:string, value: any) {
        this.storage.set(key, value);
    }

    get<T>(key: string) {
        return this.storage.get(key) as T;
    }

    remove(key: string) {
        this.storage.remove(key);
    }
}