import React, { FC ,useCallback, useState,} from "react";
import {  useDataProvider,useGetList } from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';

interface State {
  users?:number;
  posts?:number;
  requests?:number;
}
export const Dashboard:FC = () => {const [state, setState] = useState<State>({});
  // const dataProvider = useDataProvider();
  const { data, loading, error }= useGetList('posts',{})
console.log(data);

  return (<Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
    
  )
}
