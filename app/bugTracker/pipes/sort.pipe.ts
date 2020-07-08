import { Pipe, PipeTransform } from "@angular/core";

interface Comparer{
    (p1 : {}, p2 : {}) : number
}

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform {

    private getDescComparer(comparer : Comparer) : Comparer{
        return (p1 : {}, p2 : {}) => comparer(p1, p2) * -1;
    }

    private getComparer(attrName : string, isDesc : boolean = false) : Comparer {
        let comparer = (p1 : {}, p2 : {}) => {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] > p2[attrName]) return 1;
            return 0;
         }
        if (isDesc) return this.getDescComparer(comparer);
        return comparer;
    }

    transform(data : {}[], attrName : string, isDesc : boolean = false){
        if (!data || !data.length || !attrName) return data;
        const comparer = this.getComparer(attrName, isDesc);
        return data.sort(comparer);
    }
}