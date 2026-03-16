import {
Entity,
PrimaryGeneratedColumn,
Column,
ManyToOne,
CreateDateColumn
} from "typeorm"

import { Person } from "./Person"

@Entity()
export class EPR {

 @PrimaryGeneratedColumn()
 id: number

 @Column()
 score!: number

 @Column()
 feedback: string

 @CreateDateColumn()
 createdAt: Date

  @Column({ name: "instructor_name", nullable: true })
  instructorName: string

 @ManyToOne(() => Person, person => person.eprs)
 person: Person
}