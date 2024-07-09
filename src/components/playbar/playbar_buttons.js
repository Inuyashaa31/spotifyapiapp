import React from 'react'
import "./playbar_button.css"
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'

export default function Playbar_Buttons(props) {

    const loc = useLocation();
    const isactive = loc.pathname === props.to;
    const btnclass = isactive?"btn_body active":"btn_body";

  return (
    <Link to={props.to}>
        <div class={btnclass}>
        {props.icon}
        <p className="btn_title">{props.title}</p>
        </div>

    </Link>
  )
}
