import React, { ReactElement,useDebugValue,useEffect } from 'react';
import { IEmperor } from '../../store/types';
//import { getEmperorList } from '../../store/emperors';
import { getEmperorList } from '../../store/emperors'
import {useSelector, useDispatch } from 'react-redux'
import RootState  from '../../store/rootReducer';
import EmperorCard from './EmperorCard'


interface IProps {
  
}
interface IState {

}

export default function Emperors(props: IProps, state:IState): ReactElement {
  const emperors = useSelector((state: any) => {
    console.debug('\r\n ------- USE SELECTOR STATE', state)
    return state.emperors
  })
/*

id: Number,
  praenomen: String,
  nomen?: String,
  cognomen?: String,
  bio?: String,
  dateOfBirth?: Date,
  dateOfDeath?: Date,
  relations?: [],
  active?: boolean
  */
  useDebugValue(emperors);
  return (
    <div>
      {emperors.map((emperor: IEmperor, idx: number) => {
        return (
          <EmperorCard key={idx} emperor={emperor} />
        )
      })}
    </div>
  )
}
