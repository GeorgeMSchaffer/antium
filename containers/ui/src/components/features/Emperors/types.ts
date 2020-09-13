
export interface IEmperor {
  id: string,
  praenomen: string, 
  nomen?: String,
  cognomen?: string,
  bio?: String
  dateOfBirth?: Date, 
  dateOfDeath?: Date,
  relations?: []
}