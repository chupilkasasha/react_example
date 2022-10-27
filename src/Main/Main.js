import './Main.css'
import articles from '../data/articles.json' 

function Main(){
  return(
    <div className="main">
      {articles.map(item =>
        <section>
           <h3>{item.title}</h3>
           <div>{item.body}</div>
           <p>{item.href}</p>
        </section>
        )}

    </div>
  )
}

export default Main;