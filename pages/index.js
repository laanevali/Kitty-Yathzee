import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { dice_kitties } from '../src/dice_kitties_2.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kitty Yahtzee</title>
        <meta name="description" content="Play Yahtzee with kitties" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}> 
          <div className={`${styles.gridContainer}`}> 
            <div className={`${styles.ylemine}`} style={{height:"100px"}}>
              <center>
                
                <h1>Play Yahtzee with kitties</h1>
                <img src={dice_kitties}/>
              </center>
            </div>
            <div className={`${styles.vasak}`}> 
              <table style={{borderStyle:"hidden ",tableLayout:"fixed",width:"300px", height:"200px"}}>
                <tbody>
                  <tr>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>Emil</td>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>Tobias</td>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>Linus</td>
                  </tr>
                  <tr>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>16</td>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>14</td>
                    <td style={{borderStyle:"solid ",borderColor:"white"}}>10</td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <button style={{width:"200px",height:"50px", fontSize:"20px"}}>Roll the kitties!</button>
            </div>
              <div className={`${styles.parem}`}>          
                <table style={{border:"solid", width:"500px"}}>

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
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>3 OF A KIND</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <td style={{height:"50px",padding:"15px"}}>TWOS</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>4 OF A KIND</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <td style={{height:"50px",padding:"15px"}}>THREES</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>FULL HOUSE</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <td style={{height:"50px",padding:"15px"}}>FOURS</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>SM STRAIGHT</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <td style={{height:"50px",padding:"15px"}}>FIVES</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>LG STRAIGHT</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr><tr>
                      <td style={{height:"50px",padding:"15px"}}>SIXES</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>YAHTZEE</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <td style={{height:"50px",padding:"15px"}}>LEFT TOTAL</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                      <td style={{height:"50px",padding:"15px"}}>RIGHT TOTAL</td>
                      <td style={{border:"solid",height:"50px",padding:"15px"}}> </td>
                    </tr>
                    <tr>
                      <th style={{colSpan:"2",height:"50px"}}>GRAND TOTAL</th>
                      <th style={{border:"solid",height:"50px"}}> </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </main>
    </>
  )
}
