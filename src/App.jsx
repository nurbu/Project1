import { useState } from 'react'
import pick from './assets/pick.png';
import './App.css'

const App = () =>{
  return (
    <div>
      <img src={pick} alt="img" />
    <h1>Welcome to Game Night</h1>
    <h3>Choose Whichever you would like</h3>
    <table>
      <thead><th>Strategy Games</th></thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead><th>Party Games</th></thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead><th>Social Deduction Games</th></thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <thead><th>Roll and Move Games</th></thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
export default App
