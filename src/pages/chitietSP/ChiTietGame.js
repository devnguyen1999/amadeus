import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';
import Rating from 'material-ui-rating'
import "../../Asset/css/ChiTietSP.css";
import "../../Asset/css/bootstrap.css";



export default class ThongTinGame extends React.Component{
   
    componentDidMount = () =>{
    
        $('#readless').hide();
        $('#readmore').on('click',function () {
            $('#info').css('-webkit-line-clamp','unset');
            $('#readmore').hide();
            $('#readless').show();
        })
        $('#readless').on('click',function () {
            $('#info').css('-webkit-line-clamp','4');
            $('#readmore').show();
            $('#readless').hide();
        })



        

    }


    onStarRatingPress = async (rating) => {
        this.setState({
            starCount: rating,

        })
      
    }

    render() {
        return (
        
       <div className="container-fluid">
            {/*Nội dung game */}
            <div>
           <p className="text-light" style={{fontSize:"25px"}}>Nội dung game:</p>
           <div className="jumbotron p-5" style={{background: "rgba(60, 60, 60, 0.5)",}}>
                <p id="info" className="eclipse-info text-light">NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.
Humanity has been driven from the Earth by mechanical beings from another world. In a final effort to take back the planet, the human resistance sends a force of android soldiers to destroy the invaders. Now, a war between machines and androids rages on... A war that could soon unveil a long-forgotten truth of the world.
Key Features:Acked Battles – Players will switch between using melee and ranged attacks in battle against hordes of enemies and challenging bosses across a variety of open field maps. The tight controls and incredibly fluid combat are simple to learn for newcomers while offering plenty of depth for more experienced action gamers. Players can perform high-speed battle actions—combining light and heavy attacks—and switch through an arsenal of weaponry while evading enemies with speed and style.
Beautifully Desolate Open-World – The game seamlessly joins together hauntingly beautiful vistas and locations with no area loading. The environments are rendered in 60fps and contain a wealth of sub-events in addition to the main storyline.
Masterfully Crafted Story and Characters – NieR: Automata tells the story of androids 2B, 9S and A2 and their ferocious battle to reclaim a machine-driven dystopia overrun by powerful weapons known as machine lifeforms.
Elements of an RPG – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.
Utilise the Pod Support System to Assist In and Outside of Battle – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.
“Auto Mode” Available for Beginners – Novice players can elect “Auto Mode” for easy attacks and evasions.</p>

            <p className="text-primary" id="readmore">Read more...</p>
            <p className="text-primary" id="readless">Read less...</p>
           </div>
           </div>
            {/*đánh giá */}
        <div>
            <p className="text-light" style={{fontSize:"25px"}}>Đánh giá: </p>
           <div className="jumbotron p-5 column" style={{background: "rgba(60, 60, 60, 0.5)",}}>
              <div className="container-fluid justify-content-center">
                  <p className="text-light text-center mb-0">Đánh giá trung bình</p>
                  <p className="text-light text-center pt-0" style={{fontSize:"40px",fontWeight:100,}}>5/5</p>
                  
           
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                  {/*https://www.npmjs.com/package/material-ui-rating  */}
                  <Rating
                    icon={{fontSize:10}}
                    Component={{with:'30%'}}
                    readOnly={true}
                    value={5}
                    max={5}
                    onChange={(value) => console.log(`Rated with value ${value}`)}
                    /></div>
                    <p className="text-warning text-center " style={{fontWeight:"bold",fontSize:25}}>(156)</p>
                    <p className="text-light text-center ">Chia sẽ ý kiến về sản phẩm:</p>
                    <div className="col-xl-12 col-lg-12 d-flex justify-content-center">
                    <button className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 btn text-white" style={{background: "rgba(0, 240, 255, 0.6)",borderradius: "20px",}}>Viết đánh giá của bạn</button>
                    </div>
                    

                </div>  
           </div>
        </div>

        {/*Bình luận */}
        <div>
        
           <div className="jumbotron p-5 column" style={{background: "rgba(60, 60, 60, 0.5)",}}>
                {/*Người bình luan 1 */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 row">
                    <div className="col-xl-2 col-lg-2 col-md-2  justify-content-center">
                       <img src="https://static.zerochan.net/Rory.Mercury.full.2834327.jpg" className="img-fluid" width="90" height="90"></img>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10  column">
                        <p className="text-warning mb-0" style={{fontWeight:"bold"}}>Thanh Linh Nguyễn</p>
                        <p className="text-light" >Game hay gái xinh ngon  – Players will obtain a variety of weapon types, level up in battle, learn new combat skills, and customise a loadout that caters to their playstyle.
                            Utilise the Pod Support System to Assist In and Outside of Battle – Pods can attack the enemy in both manual and lock-on modes. They can also assist outside of battle, such as allowing the player to glide through the air. Pods can be enhanced throughout the game, with upgrades including new attack methods and variations.
                            “Auto Mode” Available for Beginners – Novice players can elect “Auto Mode” for easy attacks and evasions.</p>
                        </div>

                </div>
                  {/*Người bình luan 2 */}
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 row">
                    <div className="col-xl-2 col-lg-2 col-md-2  justify-content-center">
                       <img src="https://cdn.myanimelist.net/s/common/uploaded_files/1460982628-1bff3e4baca0b051fdb9eb6a2c664c5d.jpeg" className="img-fluid" width="90" height="90"></img>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 column">
                        <p className="text-warning mb-0" style={{fontWeight:"bold"}}>Lelouch</p>
                        <p className="text-light" >Game hay gái xinh ngon   .</p>
                        </div>

                </div>
           </div>
        </div>

       </div>
        )
    }
}