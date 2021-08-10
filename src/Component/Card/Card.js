import React, {useContext} from 'react'
import styled from 'styled-components'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { ArticleContext } from '../../Context/ArticleContext'
import { Title, Publisher, CardWrapper,Image, IconWrapper, BookmarkIcon, FillBookmarkIcon } from './Card.styles'
import { useHistory } from "react-router-dom";
function Card(props){
  const { myArticle, setMyArticle} = useContext(ArticleContext)
  let history = useHistory();
  function handleArticleClick(url){
    window.location.href = url
  }
  function handleAddBookmark(article){
    var listArticle = myArticle
    listArticle.push(article)
    console.log(listArticle)
    setMyArticle(listArticle)
    history.push('/')
  }
  function handleRemoveBookmark(article){
    var listArticle = myArticle
    let index = listArticle.findIndex(x => x.id ===article.id);
    listArticle.splice(index, 1);
    setMyArticle(listArticle)
    history.push('/')
  }
  function isBookmark(id){
    if (myArticle.filter(e => e.id === id).length > 0) {
      return true
    } else {
      return false
    }
  }
  return(
    <CardWrapper>
      <Image onClick={() => handleArticleClick(props.article.url.url)} src={`https://obs.line-scdn.net/${props.article.thumbnail.hash}`} />
      <Title onClick={() => handleArticleClick(props.article.url.url)} >{props.article.title}</Title>
      <IconWrapper direction="row" justify="space-between">
      <Publisher onClick={() => handleArticleClick(props.article.url.url)}>{props.article.publisher}</Publisher>
      {isBookmark(props.article.id) ? (<FillBookmarkIcon onClick={()=> handleRemoveBookmark(props.article)}></FillBookmarkIcon>) : (<BookmarkIcon onClick={()=> handleAddBookmark(props.article)}/>)}
      
      </IconWrapper>
    </CardWrapper>
  )
}
export default Card