import React from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

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
                  
              </div>
              <div></div>
           </div>
            </div>

       </div>
        )
    }
}