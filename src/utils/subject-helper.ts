import { Subject } from './../models/subject';

export class SubjectHelper {

    constructor(){
    }

    public static list(subjects: Subject[], day?: string): Subject[] {
        let newSubjects: Subject[] = [];

        for (let i in subjects) {
            let subject: Subject = subjects[i]
            for (let h in subject.horarios) {
                let time = subject.horarios[h];
                if (day == null) {
                    newSubjects.push(this.subject(subject, time));
                } else if (time.startsWith(day)) {
                    newSubjects.push(this.subject(subject, time));
                }
            }
        }

        return newSubjects;
    }

    public static nextTwo(subjects: Subject[]): Subject[] {
        let newSubjects: Subject[] = [];
        let day = new Date().getDay() + 1;
        day = day > 7 ? 2 : day;
        let highDay = 0;
        let lowDay = 99;

        for (let i in subjects) {
            let subject: Subject = subjects[i]
            for (let h in subject.horarios) {
                let time = Number(subject.horarios[h].substring(0, 1));
                if (time > highDay) {
                    highDay = time;
                }
                if (time < lowDay) {
                    lowDay = time;
                }
            }
        }

        for (let i in subjects) {
            let subject: Subject = subjects[i]
            for (let h in subject.horarios) {
                let time = subject.horarios[h];
                let currentDay =  Number(subject.horarios[h].substring(0, 1));
                if (day >= highDay && currentDay == lowDay) {
                    newSubjects.push(this.subject(subject, time));                    
                }
                if (newSubjects.length == 2) {
                    return newSubjects
                }
                // newSubjects.push(this.subject(subject, time));
            }
        }
        return newSubjects;
    }

    private static subject(subject: Subject, time: string): Subject {
        subject.horarios = [time];
        return subject;                
    }

}