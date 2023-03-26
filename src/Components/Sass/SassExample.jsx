import React from 'react'
import './Example.scss'
export default function SassExample() {
  return (
    <div>
        <p>Example</p>
        <p className='font'>Example</p>
        <nav>
          <ul>
            <li>123</li>
            <li>
              <a>456</a>
            </li>
          </ul>
        </nav>
        <ul>
            <li>123</li>
            <li>
              <a>456</a>
            </li>
          </ul>
          <p className="base">Example</p>
          <p className="inverse">Example</p>
          <p className="info">info</p>
          <p className="alert">alert</p>
          <p className="success">success</p>
          <p className="message">message</p>
          <p className="success2">success2</p>
          <p className="warning">warning</p>
          <p className="error">error</p>
          <p className="square-av"></p>
          <p className="circle-av"></p>
    </div>
  )
}
