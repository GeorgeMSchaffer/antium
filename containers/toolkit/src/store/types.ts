export interface IEmperor {
  id: Number,
  praenomen: String,
  nomen?: String,
  cognomen?: String,
  bio?: String,
  dateOfBirth?: Date,
  dateOfDeath?: Date,
  relations?: [],
  active?: boolean
}