import React, { useState } from 'react'
import Head from 'next/head'
import Layout from "../components/Layout"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { dice_kitties, dice_1, dice_2, dice_3, dice_4,dice_5,dice_6 } from '../src/index'
import { Container} from "reactstrap";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  var dices = [dice_1.image,dice_2.image,dice_3.image,dice_4.image,dice_5.image,dice_6.image]
  var dices_val = [dice_1.numValue,dice_2.numValue,dice_3.numValue,dice_4.numValue,dice_5.numValue,dice_6.numValue]


  const [image1, setNewImage1] = useState(dices[0])
  const [image2, setNewImage2] = useState(dices[1])
  const [image3, setNewImage3] = useState(dices[2])
  const [image4, setNewImage4] = useState(dices[3])
  const [image5, setNewImage5] = useState(dices[4])
  const [image6, setNewImage6] = useState(dices[5])
  
  const [value1, setValue1] = useState(dices_val[0])
  const [value2, setValue2] = useState(dices_val[1])
  const [value3, setValue3] = useState(dices_val[2])
  const [value4, setValue4] = useState(dices_val[3])
  const [value5, setValue5] = useState(dices_val[4])
  const [value6, setValue6] = useState(dices_val[5])

  const [resultDice, setResult] = useState()

  const[resultAces, setAces] = useState()
  const[resultTwos, setTwos] = useState()
  const[resultThrees, setThrees] = useState()
  const[resultFours, setFours] = useState()
  const[resultFives, setFives] = useState()
  const[resultSixes, setSixes] =useState()

  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    var randomNum3 = Math.floor(Math.random() * 6);
    var randomNum4 = Math.floor(Math.random() * 6);
    var randomNum5 = Math.floor(Math.random() * 6);
    var randomNum6 = Math.floor(Math.random() * 6);
    
    var randomNumbers =[randomNum1,randomNum2,randomNum3,randomNum4,randomNum5,randomNum6]
    
    setNewImage1(dices[randomNum1])
    setNewImage2(dices[randomNum2])
    setNewImage3(dices[randomNum3])
    setNewImage4(dices[randomNum4])
    setNewImage5(dices[randomNum5])
    setNewImage6(dices[randomNum6])

    setValue1(dices_val[randomNum1])
    setValue2(dices_val[randomNum2])
    setValue3(dices_val[randomNum3])
    setValue4(dices_val[randomNum4])
    setValue5(dices_val[randomNum5])
    setValue6(dices_val[randomNum6])

    setResult(dices_val[randomNum1]+dices_val[randomNum2]+dices_val[randomNum3]+dices_val[randomNum4]+
      dices_val[randomNum5]+dices_val[randomNum6])

    const acesValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 1) {
          result += values[i];
        }
      }
      return result
    } 
    setAces(acesValue) 

    const twosValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 2) {
          result += values[i];
        }
      }
      return result
    } 
    setTwos(twosValue)

    const threesValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 3) {
          result += values[i];
        }
      }
      return result
    } 
    setThrees(threesValue)

    const foursValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 4) {
          result += values[i];
        }
      }
      return result
    } 
    setFours(foursValue)

    const fivesValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 5) {
          result += values[i];
        }
      }
      return result
    } 
    setFives(fivesValue)

    const sixesValue = () => {
      var result = 0;
      var values =[dices_val[randomNum1],dices_val[randomNum2],dices_val[randomNum3],dices_val[randomNum4],
      dices_val[randomNum5],dices_val[randomNum6]]
      for (let i = 0; i < values.length; i++) {
        if (values[i] == 6) {
          result += values[i];
        }
      }
      return result
    } 
    setSixes(sixesValue)
  }

  

  return (
    <>
      <Head>
        <title>Kitty Yahtzee</title>
        <meta name="description" content="Play Yahtzee with kitties" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div>
          <center>
            <Image src={dice_kitties} height={150} width={400} alt="kitties" />
          </center>
        </div>
        <div className={`${styles.ylemine}`} style={{height:"50px"}}>
            <center>
            <h1>Play Yahtzee with kitties</h1>
            </center>
        </div>
      </Container>
      <Layout>
          <Container>
            <main class="row" className={`${styles.main} ${inter.className}`}> 
                <div  className={`${styles.gridContainer}`}> 
                  <div class="col-sm-6"> 
                    <table style={{borderStyle:"hidden ",tableLayout:"fixed",width:"300px", height:"200px",float:"right"}} >
                      <tbody style={{}}>
                        <tr>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image1} width={100} height={100} alt="dice_1" />
                          </td>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image2} width={100} height={100} alt="dice_2" />
                          </td>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image3} width={100} height={100} alt="dice_3" />
                          </td>
                        </tr>
                        <tr>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image4} width={100} height={100} alt="dice_4" />
                          </td>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image5} width={100} height={100} alt="dice_5" />
                          </td>
                          <td style={{borderStyle:"hidden",borderColor:"white"}}>
                            <Image src={image6} width={100} height={100} alt="dice_6" />
                          </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <button style={{width:"300px",height:"50px", fontSize:"20px",float:"right" }} onClick={()=>{rollDice()}}>Roll the kitties!</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br></br>
                    
                  </div>
                  {/* <div class="col-sm-2" className={`${styles.keskmine}`}>

                      <Image src={dice_kitties} width={520} height={280} alt="kitties" />

                  </div> */}
                    <div class="col-sm-6">          
                      <table style={{border:"solid", width:"500px",float:"right"}}>

                          <colgroup>
                            <col style={{span:"1",backgroundColor:"pink"}}></col>
                            <col style={{span:"1"}}></col>
                            <col style={{span:"1",backgroundColor:"pink"}}></col>
                          </colgroup>
                        <thead>
                            <tr>
                            <th style={{height:"50px"}}>LEFT SECTION</th>
                            <th style={{height:"50px"}}>POINTS</th>
                            <th style={{height:"50px"}}>RIGHT SECTION</th>
                            <th style={{height:"50px"}}>POINTS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{height:"50px",padding:"15px"}}>ACES</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> {resultAces} </td>
                            <td style={{height:"50px",padding:"15px"}}>3 OF A KIND</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultThreeOfKind} </td>
                          </tr>
                          <tr>
                            <td style={{height:"50px",padding:"15px"}}>TWOS</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultTwos}</td>
                            <td style={{height:"50px",padding:"15px"}}>4 OF A KIND</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                          </tr>
                          <tr>
                            <td style={{height:"50px",padding:"15px"}}>THREES</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultThrees}</td>
                            <td style={{height:"50px",padding:"15px"}}>FULL HOUSE</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                          </tr>
                          <tr>
                            <td style={{height:"50px",padding:"15px"}}>FOURS</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultFours}</td>
                            <td style={{height:"50px",padding:"15px"}}>SM STRAIGHT</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                          </tr>
                          <tr>
                            <td style={{height:"50px",padding:"15px"}}>FIVES</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultFives}</td>
                            <td style={{height:"50px",padding:"15px"}}>LG STRAIGHT</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                          </tr><tr>
                            <td style={{height:"50px",padding:"15px"}}>SIXES</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}>{resultSixes}</td>
                            <td style={{height:"50px",padding:"15px"}}>YAHTZEE</td>
                            <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                          </tr>
                          <tr>
                            <th style={{colSpan:"2",height:"50px"}}>GRAND TOTAL</th>
                            <th style={{border:"solid",height:"50px"}}> {resultDice} </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </main>
            </Container>
        </Layout>

      
    </>
  )
}
