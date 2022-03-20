/*  Create a Cohort class that has the following
fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors
methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints 'The name cohort has size of students students and size of mentors mentors.'
The Cohort class has the following constructors:
Cohort(name): beside the given parameter it sets students and mentors as empty lists */

'use strict';
import os from 'os';
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
    private name: string;
    private students: Student[];
    private mentors: Mentor[];

    constructor(name: string) {
        this.name = name;
        this.students = [];
        this.mentors = [];

    }
//addStudent(Student): adds the given Student to students list
    public addStudent(student: Student): void {
        this.students.push(student);
    }
//addMentor(Mentor): adds the given Mentor to mentors list
    public addMentor(mentor: Mentor): void {
        this.mentors.push(mentor);
    }
//info(): prints 'The name cohort has size of students students and size of mentors mentors.'
    public info(): void {
        console.log("The " + this.name + " cohort has " + this.students.length + " students and " + this.mentors.length + " mentors.");
    }
}