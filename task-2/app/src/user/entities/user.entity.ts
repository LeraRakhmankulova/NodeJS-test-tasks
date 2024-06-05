import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';


export type UserGenderType = "male" | "female"

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 150, nullable: false })
    firstName: string

    @Column("varchar", { length: 150, nullable: false })
    lastName: string

    @Column("int", { nullable: false })
    age: number

    @Column({
        type: "enum",
        enum: ["male", "female"],
        default: "female",
        nullable: false
    })
    gender: UserGenderType

    @Column({ default: true, nullable: false })
    hasProblems: boolean
}