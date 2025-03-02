// import { AppDataSource } from "./data-source"
// import { AppUser } from "./entity/AppUser"

// AppDataSource.initialize().then(async () => {
//     console.log("Inserting a new user into the database...")
//     const user = new AppUser()
//     user.displayName = "Nick"
//     user.email = "longnguyentpvt@gmail.com"
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(AppUser)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log("DB Error: ", error))

export * from "./entity/AppUser";