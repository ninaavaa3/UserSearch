import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Mypage.module.css"
import { faker } from "@faker-js/faker";

const Mypage = () => {
    const location = useLocation();
    let job = faker.name.jobTitle();
    return (
        <>
            <div className={classes.img}>


                <div >
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={location.state.details.avatar} />
                            </div>
                            <div className="content">
                                <div className="header">{location.state.details.text}</div>
                                <div className="meta">
                                    <a>Friends</a>
                                </div>
                                <div className="description">
                                    {`${location.state.details.text} is a ${job} living in ${faker.address.country()}`}
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    Joined in {faker.datatype.number({ min: 2010, max: 2022 })}
                                </span>
                                <span>
                                    <i className="user icon"></i>
                                    {faker.datatype.number({ max: 400 })}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className={classes.grid}>
                        <div>
                        <button className="ui active button">
                            <i className="user icon"></i>
                            Follow
                        </button>
                        </div>
                        <button className="ui toggle button">message</button>
                    </div>
                   
                </div>
     

<div className={classes.seen}>
                <div className="ui list">
  <div  className="item">
    <img  className="ui avatar image" src={faker.image.avatar()}/>
    <div  className="content">
      <a  className="header">Rachel</a>
      <div  className="description">Last seen watching <a><b>{location.state.details.text} page</b></a> just now.</div>
    </div>
  </div>
  <div  className="item">
    <img  className="ui avatar image" src={faker.image.avatar()}/>
    <div  className="content">
      <a  className="header">Lindsay</a>
      <div className="description">Last seen watching <a><b>{location.state.details.text} page</b></a> {faker.datatype.number({ max: 24 })}h ago.</div>
    </div>
  </div>
  <div  className="item">
    <img  className="ui avatar image" src={faker.image.avatar()}/>
    <div  className="content">
      <a  className="header">Matthew</a>
      <div  className="description">Last seen watching <a><b>{location.state.details.text} page</b></a> yesterday.</div>
    </div>
  </div>
  <div  className="item">
    <img  className="ui avatar image" src={faker.image.avatar()}/>
    <div  className="content">
      <a  className="header">Jenny Hess</a>
      <div  className="description">Last seen watching <a><b>{location.state.details.text} page</b></a> {faker.datatype.number({ max: 24 })}h ago.</div>
    </div>
  </div>
  <div  className="item">
    <img  className="ui avatar image" src={faker.image.avatar()}/>
    <div  className="content">
      <a  className="header">Veronika Ossi</a>
      <div  className="description">Has not watched <b>{location.state.details.text}</b> page recently</div>
    </div>
  </div>
</div>




</div>

















                <div className={classes.text}>
                    <button class="ui facebook button">
                        <i class="facebook icon"></i>
                        Facebook
                    </button>
                    <button class="ui twitter button">
                        <i class="twitter icon"></i>
                        Twitter
                    </button>
        
                    
                    <button class="ui linkedin button">
                        <i class="linkedin icon"></i>
                        LinkedIn
                    </button>
                    <button class="ui instagram button">
                        <i class="instagram icon"></i>
                        Instagram
                    </button>
                    <button class="ui youtube button">
                        <i class="youtube icon"></i>
                        YouTube
                    </button>
                </div>






















































            </div>






            <div  className={classes.post}>
                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>


                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>


  
                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>

 



                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>


                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>























                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>




                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">{faker.datatype.number({ max: 24 })}h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>






























                <div className="ui card">
                    <div className="content">
                        <div className="right floated meta">14h</div>
                        <img className="ui avatar image" src={location.state.details.avatar} /> {location.state.details.text}
                    </div>
                    <div className="image">
                        <img src={faker.image.image()} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="heart outline like icon"></i>
                            {faker.datatype.number({ max: 95 })} likes
                        </span>
                        <i className="comment icon"></i>
                        {faker.datatype.number({ max: 25 })} comments
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="Add Comment..." />
                        </div>
                    </div>
                </div>
            </div>








        </>
    )
};
export default Mypage;