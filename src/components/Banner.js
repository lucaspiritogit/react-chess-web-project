import React from 'react'
import bannerVideo from '../videos/banner.mp4'

export default function Banner() {
    return (
                <div className="bannerContainer">
                    <video id="bannerVideo" src={bannerVideo} type='video/mp4'autoPlay loop muted></video>
                    <div className="bannerText">
                        <h1>Play, learn and enjoy <span>Chess</span></h1>
                    </div>
                </div>
    )
}
