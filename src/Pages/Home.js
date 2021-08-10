import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tab from '../Component/Tab/Tab'
import { App, CardContainer } from './Home.styles'
import Card from '../Component/Card/Card'
import { useHistory } from "react-router-dom";
import { ArticleContext } from '../Context/ArticleContext'
import './Loader.css'
function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [newsCategoryList, setNewsCategoryList] = useState([]);
  const [loading, setLoading] = useState(false)
  const { myArticle, setMyArticle} = useContext(ArticleContext)
  let { category } = useParams();
  let history = useHistory();
  useEffect(() => {
    setLoading(true)
    try{
      axios.get('https://cors-anywhere.herokuapp.com/today.line.me/id/portaljson')
          .then(response => {
            const data = response.data.result
            setCategoryList(data.categoryList);
            setNewsCategoryList(data.categories);
            setTimeout(() => setLoading(false), 250)
          })
      } catch(err){
        alert("terjadi error, silahkan berikan akses untuk cors anywhere dan setelah itu akses website ini kembali")
        window.location.href = "https://cors-anywhere.herokuapp.com"
      }
  }, []);

  
  return (
    <App>
      {loading ? 
        (<div className="loader"></div>) : 
        (<div>
          <Tab categories={categoryList} />
                  {newsCategoryList.filter(newsCategoryList => newsCategoryList.name.toLowerCase() === category).map((newsCategory)=> (
                  <div key={newsCategory.id}>
                    {newsCategory.templates.filter((newsCategory) => newsCategory.title && newsCategory.sections[0].articles.length > 0).map((template) => (
                      <div key={template.id} style={{marginTop: "2.5%", marginBottom: "5%"}}>
                        <h2 style={{ paddingLeft: '20px'}}>{template.title}</h2>
                        <CardContainer>
                        {template.sections[0].articles.map((article) => (
                            <Card
                              key={article.id+article.title} 
                              article={article}
                              category={category}
                              />
                        ))}
                        </CardContainer>
                      </div>
                    ))}
                  </div>
                ))}
        </div>)}
        
    </App>
  );
}

export default Home;
