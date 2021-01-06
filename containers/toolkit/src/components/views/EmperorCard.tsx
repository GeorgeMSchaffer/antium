import React, { ReactElement, useDebugValue, useEffect } from 'react'
import { IEmperor } from '../../store/types'
//import { getEmperorList } from '../../store/emperors';
import { useSelector, useDispatch } from 'react-redux'
import RootState from '../../store/rootReducer'
import {Card,CardContent,Paper,CardHeader,CardMedia, Typography } from '@material-ui/core';

interface IProps {
  emperor:IEmperor
}
interface IState {}

export default function EmperorCard(props: IProps, state: IState): ReactElement {
  console.debug(`\r\n ----- CARD PROPS`, props);
  const emperors = useSelector((state: any) => {
    console.debug('\r\n ------- USE SELECTOR STATE', state)
    return state.emperors
  })

  useDebugValue(emperors)
  const { id, praenomen, nomen, cognomen, bio, dateOfBirth, dateOfDeath, relations } = emperors[0];
  return (
    <Card>
      <CardHeader>
        <Typography variant={'caption'}>{praenomen} {cognomen} {nomen}</Typography>
      </CardHeader>
      <Typography variant="subtitle1">Bio</Typography>
      <p>{bio}</p>
      {JSON.stringify(emperors)}
    </Card>
  )
}
