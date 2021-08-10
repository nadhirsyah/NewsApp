import React, { useContext } from 'react';
import { ArticleContext } from '../../Context/ArticleContext'
import Card from '../../Component/Card/Card'
import { App, CardContainer } from '../Home.styles';
export default function Bookmark(){
    const { myArticle, setMyArticle} = useContext(ArticleContext)
    return(
        <div>
            <App>
                <CardContainer>
                    {myArticle.map((article) => (
                        <Card
                            key={article.id+article.title} 
                            article={article}
                            category={article.category}
                            />
                    ))}
                </CardContainer>
            </App>
        </div>
    )
}