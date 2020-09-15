import { IEmperor } from './store/types'

export function fakeFetchRemoteData(time: number) {
  const data: IEmperor[] = [
    {
      id: 1,
      praenomen: 'Julius',
      nomen: 'Gaius',
      cognomen: 'Caesar',
      bio: 'Bio Here....',
      //dateOfBirth: Date.now(), //[TODO] UPDATE FOR BC FORMAT
      //dateOfDeath: Date.now(),
      relations: []
    }
  ]
  return new Promise<typeof data>(resolve => {
    setTimeout(resolve, time, data)
  })
}
