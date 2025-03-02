import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: "app_user" })
export class AppUser {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 255 })
    email: string

    @Column({ type: "varchar", length: 255, name: "display_name" })
    displayName: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date

}
