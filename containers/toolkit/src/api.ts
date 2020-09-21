import { IEmperor } from './store/types'

export interface Todo {
  id: number
  /** 内容 */
  text: string
  /** 完成状态 */
  completed: boolean
};

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
    console.debug(' --- DATA ---');
    setTimeout(resolve, time, data)
  })
}
