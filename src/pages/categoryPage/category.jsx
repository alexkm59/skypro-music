import React from 'react';
import * as S from '../not-found/notFound.styled';
import { useParams } from "react-router-dom";
export const Category = ()  => {
 const params = useParams();  
    return (

<S.notFoundPage>
    <h1>Category page {params.id}</h1>
</S.notFoundPage>
)
}