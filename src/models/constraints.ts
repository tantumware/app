import { Subject } from './subject';

export class Constraints {

    constructor(public periods: number[], public creditMin: number, public creditMax: number, public equivalent: boolean, public subjectsWanted: string[], public subjectsNotWanted: string[]) {

    }

}