import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EPR } from "./EPR"

@Entity()
export class Person {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  role!: string

  @OneToMany(() => EPR, epr => epr.person)
  eprs!: EPR[]
}