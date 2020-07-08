import { Bug } from "../models/Bug";
import { Injectable } from '@angular/core';

/* import { BugStorageService } from "./bugStorage.service";
@Injectable()
export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){ 

    }
    createNew(bugName : string):Bug{
        const newBug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug);
        return newBug;
    }
    
    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        this.bugStorage.save(toggledBug);
        return toggledBug;
    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

    remove(bug : Bug) {
        this.bugStorage.remove(bug);
    }

} */

import { BugApiService } from "./bugApi.service";
import { Observable } from "rxjs";

@Injectable()
export class BugOperationsService{
    constructor(private bugApi: BugApiService) {

    }
    createNew(bugName: string): Observable<Bug> {
        const newBug = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        };
        return this.bugApi.save(newBug);
        
    }

    toggle(bugToToggle: Bug): Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
        
    }

    getAll(): Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    remove(bug: Bug) : Observable<any> {
        return this.bugApi.remove(bug);
    }
}