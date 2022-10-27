import './sitebar.css';
import article from '../data/articles.json'


function Sitebar(){
  return(
    <div className="sitebar">
      <nav>
        <ul>
          {article.map(item => 
            <li>
              <a href={item.href}>{item.title}</a>
            </li>
          )}
        </ul>
      </nav>
    </div>

  )
}

export default Sitebar;