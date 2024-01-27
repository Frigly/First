import avatar from "./../../img/avatar-removebg-preview.png"
function Profile(){
    return(
<div className = 'profile'>
    <div className = "profile-me">
        <img className = 'profile-avatar' src = {avatar}/>  
        <p>Артём Вертель</p>
    </div>
    <div className = "profile-posts">
        <div className="post-name"> <h2 className="name">Артём Вертель</h2></div>
   
        <div className = "profile-post">
          {/*   <img className = "post-img"  /> {/* добавить картинку */} 
          <input className ='profile-input' placeholder="Введите название поста"/>
            
            <input className="post-text" placeholder="Текст поста"></input>
            <button className="post-button">Создать пост</button>
        </div>
    </div>
</div>
    )
}
export default Profile